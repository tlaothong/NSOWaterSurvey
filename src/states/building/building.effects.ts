import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BuildingTypes, LoadBuildingListSuccess, LoadBuildingSampleSuccess, SaveBuilding, SaveBuildingSuccess, NewBuilding, UpdateBuildingList, UpdateBuildingListSuccess, LoadBuildingList, DeleteBuilding, SetCurrentWorkingBuilding } from "./building.actions";
import { mergeMap, map, tap, switchMap, filter, withLatestFrom } from "rxjs/operators";
import { Action, Store } from "@ngrx/store";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { BuildingState } from "./building.reducer";
import { getBuildingList } from ".";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { BootupState } from "../bootup/bootup.reducer";
import { getCurrentWorkingEA } from "../bootup";
import { LoadHouseHoldList } from "../household/household.actions";
import { HouseHoldState } from "../household/household.reducer";
import { getHouseHoldUnitList } from "../household";


@Injectable()
export class BuildingEffects {
    constructor(private action$: Actions,
        private store: Store<BuildingState>, private storeBoot: Store<BootupState>,
        private storeUnit: Store<HouseHoldState>, private cloudSync: CloudSyncProvider,
        private dataStore: DataStoreProvider, private appState: AppStateProvider) {
    }

    @Effect()
    public loadBuildingList$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.LoadList),
        mergeMap((action: LoadBuildingList) => this.dataStore.listBuildingsForEA(action.eaCode)),
        map(bldList => new LoadBuildingListSuccess(bldList ? bldList : [])),
    );

    @Effect()
    public loadBuildingSample$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.Load),
        mergeMap(action => this.cloudSync.loadBuildingSampleTestData()),
        map(data => new LoadBuildingSampleSuccess(data)),
    );

    @Effect()
    public newHomeBuilding$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.NewBuilding),
        tap((action: NewBuilding) => {
            this.appState.buildingId = '';
        }),
        switchMap((action: NewBuilding) => [new SaveBuildingSuccess({
            _id: '',
            accessCount: 0,
            ea: this.appState.eaCode,
            houseNo: null,
            name: null,
            status: null,
            unitCount: null,
            accesses: [],
        }),
        new LoadHouseHoldList('no-building')]),
    );

    @Effect()
    public setCurrentWorkingBuilding$ = this.action$.pipe(
        ofType(BuildingTypes.SetCurrentWorkingBuilding),
        mergeMap((action: SetCurrentWorkingBuilding) => this.dataStore.getBuilding(action.buildingId)),
        tap(bld => {
            this.appState.buildingId = bld ? bld._id : '';
        }),
        switchMap(bld => [new SaveBuildingSuccess(bld), new LoadHouseHoldList(bld && bld._id)]),
    );

    @Effect()
    public saveBuilding$: Observable<Action> = this.action$.pipe(
        ofType<SaveBuilding>(BuildingTypes.SaveBuilding),
        filter((action: any, i) => action.payload),
        tap(action => {
            this.appState.buildingId = action.payload ? action.payload._id : '';
        }),
        map(action => {
            let bld = action.payload;
            const accesses = bld.accesses;
            let access = 0;

            if (accesses && accesses.length > 0) {
                access = accesses[accesses.length - 1];
            }
            let status = "pause";
            switch (access) {
                case 4:
                    status = "eye-off";
                    break;
                case 2:
                case 3:
                    status = bld.accessCount < 3 ? "refresh" : "sad";
                    break;
                default: {
                    status = "pause";
                    break;
                }
            }
            bld.status = status;

            let log: { at: Date | string, operationCode: string };
            let createdDateTime = bld.recCtrl && bld.recCtrl.createdDateTime;
            let lastModified = bld.recCtrl && bld.recCtrl.lastModified;
            let logs = bld.recCtrl && bld.recCtrl.logs;
            if (bld.recCtrl.logs.length == 0) {
                log = { at: new Date(), operationCode: 'create' };
                createdDateTime = new Date();
            }
            else {
                if (status == "done-all") {
                    log = { at: new Date(), operationCode: 'done' };
                }
                else {
                    log = { at: new Date(), operationCode: 'continue' };
                }
            }
            lastModified = new Date();
            logs.push(log);

            let recCtrl = {
                ...bld.recCtrl,
                createdDateTime: createdDateTime,
                lastModified: lastModified,
                logCount: logs.length,
                logs: logs,
            };

            bld.recCtrl = recCtrl;

            return new SaveBuilding({ ...bld, status: status, recCtrl: recCtrl });
        }),
        // TODO: Save the building to local storage
        mergeMap(action => this.dataStore.saveBuilding(action.payload).mapTo(action)),
        switchMap(action => [
            new SaveBuildingSuccess(action.payload),
            new UpdateBuildingList(action.payload),
        ]),

        // mergeMap((action: SetHomeBuilding) => Observable.of(new SetHomeBuildingSuccess(action.payload))),
        // mergeMap((action: SetHomeBuilding) => this.cloudSync.setHomeBuilding(action.payload).pipe(
        //     map(data => new SetHomeBuildingSuccess(data)),
        // )),
    );

    @Effect()
    public deleteBuilding$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.DeleteBuilding),
        filter((action: DeleteBuilding, i) => action.payload),
        map((action: DeleteBuilding) => action.payload),
        withLatestFrom(this.store.select(getBuildingList), this.storeBoot.select(getCurrentWorkingEA)),
        mergeMap(([bld, lst, ea]) => {
            let idx = lst.findIndex(it => it.buildingId == bld.buildingId);
            lst.splice(idx, 1);
            return this.dataStore.saveBuildingList(ea.code, lst).mapTo(lst);
        }),
        map(bldList => new LoadBuildingListSuccess(bldList ? bldList : [])),
    );

    @Effect()
    public updateBuildingList$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.UpdateBuildingList),
        filter((action: any, i) => action.payload),
        map((action: UpdateBuildingList) => action.payload),
        withLatestFrom(this.store.select(getBuildingList), this.storeBoot.select(getCurrentWorkingEA),
            this.storeUnit.select(getHouseHoldUnitList)),
        mergeMap(([bld, lst, ea, ulist]) => {
            console.log("bld",bld);
            console.log("lst",lst);
            console.log("ulist",ulist);
            
            const accesses = bld.accesses;
            let access = 0;

            if (accesses && accesses.length > 0) {
                access = accesses[accesses.length - 1];
            }
            let status = "pause";
            switch (access) {
                case 4:
                    status = "eye-off";
                    break;
                case 2:
                case 3:
                    status = bld.accessCount < 3 ? "refresh" : "sad";
                    break;
                default: {
                    if (status != "done-all") {
                        const uacc = bld.unitAccess;
                        switch (uacc) {
                            case 2:
                            case 3:
                                status = "checkmark";
                                break;

                            default:
                                status = ulist.length > 0 && ulist.some((it, i, c) => it.status == "refresh" || it.status == "pause")
                                    ? (ulist.some((it, i, c) => it.status == "pause") ? "pause" : "refresh")
                                    : (ulist.length == bld.unitCount ? "done-all" : (ulist.length == 0 ? "refresh" : "pause"));
                                break;
                        }
                    }
                    break;
                }
            }
            bld.status = status;
            let bInList = {
                "buildingId": bld._id,
                "houseNo": bld.houseNo,
                "name": bld.name,
                "status": bld.status,
                "completedCount": ulist.filter(it => it.status != "return" && it.status != "pause").length,
                "unitCount": bld.unitCount,
                "lastUpdate": Date.now(),
            };
            let idx = lst.findIndex(it => it.buildingId == bld._id);
            if (idx >= 0) {
                lst[idx] = bInList;
            } else {
                lst.push(bInList);
            }
            // TODO: Save the building list
            return this.dataStore.saveBuildingList(ea.code, lst)
                .mapTo(lst);
        }),
        map(bldList => new LoadBuildingListSuccess(bldList ? bldList : [])),
    );
}