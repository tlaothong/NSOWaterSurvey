import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BuildingTypes, LoadBuildingListSuccess, LoadBuildingSampleSuccess, SetHomeBuilding, SetHomeBuildingSuccess, NewHomeBuilding, UpdateBuildingList, UpdateBuildingListSuccess, LoadBuildingList } from "./building.actions";
import { mergeMap, map, tap, switchMap, filter, withLatestFrom } from "rxjs/operators";
import { Action, Store } from "@ngrx/store";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { BuildingState } from "./building.reducer";
import { getBuildingList } from ".";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { BootupState } from "../bootup/bootup.reducer";
import { getCurrentWorkingEA } from "../bootup";


@Injectable()
export class BuildingEffects {
    constructor(private action$: Actions, private store: Store<BuildingState>, private storeBoot: Store<BootupState>, private cloudSync: CloudSyncProvider, private dataStore: DataStoreProvider, private appState: AppStateProvider) {
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
    public NewHomeBuilding$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.NewHomeBuilding),
        tap((action: NewHomeBuilding) => {
            this.appState.buildingId = '';
        }),
        mergeMap((action: NewHomeBuilding) => Observable.of(new SetHomeBuildingSuccess(null))),
    );

    @Effect()
    public SetHomeBuilding$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.SetHomeBuilding),
        filter((action: SetHomeBuilding, i) => action.payload),
        tap((action: SetHomeBuilding) => {
            this.appState.buildingId = action.payload ? action.payload._id : '';
        }),
        // TODO: Save the building to local storage
        mergeMap((action: SetHomeBuilding) => this.dataStore.saveBuilding(action.payload).mapTo(action)),
        switchMap((action: SetHomeBuilding) => [
            new SetHomeBuildingSuccess(action.payload),
            new UpdateBuildingList(action.payload),
        ]),
        
        // mergeMap((action: SetHomeBuilding) => Observable.of(new SetHomeBuildingSuccess(action.payload))),
        // mergeMap((action: SetHomeBuilding) => this.cloudSync.setHomeBuilding(action.payload).pipe(
        //     map(data => new SetHomeBuildingSuccess(data)),
        // )),
    );

    @Effect()
    public UpdateBuildingList$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.UpdateBuildingList),
        filter((action: UpdateBuildingList, i) => action.payload),
        map((action: UpdateBuildingList) => action.payload),
        withLatestFrom(this.store.select(getBuildingList), this.storeBoot.select(getCurrentWorkingEA)),
        mergeMap(([bld, lst, ea]) => {
            let bInList = {
                "buildingId": bld._id,
                "houseNo": bld.houseNo,
                "name": bld.name,
                "status": "log-out",
                "completedCount": 0,
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