import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BuildingTypes, LoadBuildingListSuccess, LoadBuildingSampleSuccess, SetHomeBuilding, SetHomeBuildingSuccess } from "./building.actions";
import { mergeMap, map, tap } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { AppStateProvider } from "../../providers/app-state/app-state";


@Injectable()
export class BuildingEffects {
    constructor(private action$: Actions, private cloudSync: CloudSyncProvider, private appState: AppStateProvider) {
    }

    @Effect()
    public loadBuildingList$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.LoadList),
        mergeMap(action => Observable.of(new LoadBuildingListSuccess())),
    );

    @Effect()
    public loadBuildingSample$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.Load),
        mergeMap(action => this.cloudSync.loadBuildingSampleTestData().pipe(
            map(data => new LoadBuildingSampleSuccess(data)),
        )
        ),
    );

    @Effect()
    public SetHomeBuilding$: Observable<Action> = this.action$.pipe(
        ofType(BuildingTypes.SetHomeBuilding),
        // TODO: Save unless null
        tap((action: SetHomeBuilding) => {
            this.appState.buildingId = action.payload ? action.payload._id : '';
        }),
        mergeMap((action: SetHomeBuilding) => Observable.of(new SetHomeBuildingSuccess(action.payload))),
        // mergeMap((action: SetHomeBuilding) => this.cloudSync.setHomeBuilding(action.payload).pipe(
        //     map(data => new SetHomeBuildingSuccess(data)),
        // )),
    );
}