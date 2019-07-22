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
import { getCurrentWorkingEA, getCurrentStatusState } from "../bootup";
import { LoadHouseHoldList } from "../household/household.actions";
import { HouseHoldState } from "../household/household.reducer";
import { getHouseHoldUnitList } from "../household";
import { Building, BuildingInList, UnitInList } from "../../models/mobile/MobileModels";


@Injectable()
export class BuildingEffects {
    constructor(private action$: Actions,
        private store: Store<BuildingState>, private storeBoot: Store<BootupState>,
        private storeUnit: Store<HouseHoldState>, private cloudSync: CloudSyncProvider,
        private dataStore: DataStoreProvider, private appState: AppStateProvider, ) {
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
        withLatestFrom(this.storeBoot.select(getCurrentStatusState)),
        map(([action, curState]) => {
            let bld = action.payload;
            BuildingEffects.ComposeBuilding(bld, curState);
            let status = bld.status;
            let recCtrl = bld.recCtrl;

            return new SaveBuilding({ ...bld, status: status, recCtrl: recCtrl });
        }),

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
            BuildingEffects.ComposeBuildingList(bld, lst, ulist);

            return this.dataStore.saveBuildingList(ea.code, lst)
                .mapTo(lst);
        }),
        map(bldList => new LoadBuildingListSuccess(bldList ? bldList : [])),
    );


    public static ComposeBuilding(bld: Building, curState: string) {
        const accesses = bld.accesses;
        console.log(accesses);

        let access = 0;

        if (accesses && accesses.length > 0) {
            access = accesses[accesses.length - 1];
        }
        let status = "pause";
        switch (access) {
            case 4:
                status = "eye-off";
                break;
            case 5:
                status = "mic-off";
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
        console.log(bld.status);

        let log: { at: Date | string, operationCode: string };
        let createdDateTime = bld.recCtrl && bld.recCtrl.createdDateTime;
        let lastModified = new Date();
        let logs = bld.recCtrl && bld.recCtrl.logs;
        if (bld.recCtrl.logs.length == 0) {
            log = { at: lastModified, operationCode: 'create' };
            createdDateTime = new Date();
        }
        else {
            if (status == "done-all") {
                log = { at: lastModified, operationCode: 'done' };
            }
            else {
                log = { at: lastModified, operationCode: 'continue' };
            }
        }
        logs.push(log);

        let recCtrl = {
            ...bld.recCtrl,
            createdDateTime: createdDateTime,
            logCount: logs.length,
            logs: logs,
        };

        if (curState == "Sync") {
            recCtrl.lastDownload = lastModified;
        } else {
            recCtrl.lastModified = lastModified;
        }

        bld.recCtrl = recCtrl;
    }

    public static ComposeBuildingList(bld: Building, lst: BuildingInList[], ulist: UnitInList[]) {

        console.log("bld", bld);
        // console.log("lst", lst);
        // console.log("ulist", ulist);
        const accesses = bld && bld.accesses;
        let access = 0;

        if (accesses && accesses.length > 0) {
            access = accesses[accesses.length - 1];
        }
        let status = "pause";
        switch (access) {
            case 4:
                status = "eye-off";
                break;
            case 5:
                status = "mic-off";
                break;
            case 2:
            case 3:
                status = bld && bld.accessCount < 3 ? "refresh" : "sad";
                break;
            default: {
                if (status != "done-all") {
                    const uacc = bld && bld.unitAccess;
                    switch (uacc) {
                        case 2:
                        case 3:
                            status = "checkmark";
                            break;

                        default:
                            status = ulist && ulist.length > 0 && ulist && ulist.some((it, i, c) => it.status == "refresh" || it.status == "pause")
                                ? (ulist && ulist.some((it, i, c) => it.status == "pause") ? "pause" : "refresh")
                                : (ulist && ulist.length == Number(bld.unitCount) ? "done-all" : (ulist && ulist.length == 0 ? "refresh" : "pause"));
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
            "completedCount": ulist && ulist.filter(it => it.status != "return" && it.status != "pause").length,
            "unitCount": bld.unitCount,
            "lastUpdate": Date.now(),
        };
        console.log(bInList);

        let idx = lst && lst.findIndex(it => it.buildingId == bld._id);
        if (idx >= 0) {
            lst[idx] = bInList;
        } else {
            lst.push(bInList);
        }
    }
}