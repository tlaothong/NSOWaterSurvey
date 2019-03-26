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
        switchMap((action: NewBuilding) => [ new SaveBuildingSuccess(null),
            new LoadHouseHoldList('no-building') ]),
    );

    @Effect()
    public setCurrentWorkingBuilding$ = this.action$.pipe(
        ofType(BuildingTypes.SetCurrentWorkingBuilding),
        mergeMap((action: SetCurrentWorkingBuilding) => this.dataStore.getBuilding(action.buildingId)),
        tap(bld => {
            this.appState.buildingId = bld._id;
        }),
        switchMap(bld => [ new SaveBuildingSuccess(bld), new LoadHouseHoldList(bld._id) ]),
    );

    @Effect()
    public saveBuilding$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.SaveBuilding),
        filter((action: any, i) => action.payload),
        tap((action: SaveBuilding) => {
            this.appState.buildingId = action.payload ? action.payload._id : '';
        }),
        // TODO: Save the building to local storage
        mergeMap((action: SaveBuilding) => this.dataStore.saveBuilding(action.payload).mapTo(action)),
        switchMap((action: SaveBuilding) => [
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
            let bInList = {
                "buildingId": bld._id,
                "houseNo": bld.houseNo,
                "name": bld.name,
                "status": bld.status,
                "completedCount": ulist ? ulist.length : 0,
                "unitCount": bld.unitCount,
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