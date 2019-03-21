import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { mergeMap, map, tap } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { HouseHoldTypes, LoadHouseHoldListSuccess, LoadHouseHoldSampleSuccess, LoadUnitByIdBuilding, LoadUnitByIdBuildingSuccess, LoadHouseHoldSample, SetHouseHold, SetHouseHoldSuccess} from "./household.actions";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { filter } from "rxjs/operator/filter";


@Injectable()
export class HouseHoldEffects {

    constructor(private action$: Actions, private dataStore: DataStoreProvider, private cloudSync: CloudSyncProvider, private appState: AppStateProvider) {
    }

    @Effect()
    public loadHouseHoldList$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadList),
        mergeMap(action => Observable.of(new LoadHouseHoldListSuccess())),
    );

    @Effect()
    public loadHouseHoldSample$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadHouseHoldSample),
        tap((action: LoadHouseHoldSample) => {
            action.payload.ea = this.appState.eaCode;
            this.appState.houseHoldUnit = action.payload;
        }),
        map((action: LoadHouseHoldSample) => new LoadHouseHoldSampleSuccess(action.payload))
        // mergeMap(action => this.cloudSync.loadHouseHoldSampleTestData((<LoadHouseHoldSample>action).payload).pipe(
        //     map(data => new LoadHouseHoldSampleSuccess(data))),
        // ),
    );

    @Effect()
    public LoadUnitByIdBuilding$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadUnitByIdBuilding),
        mergeMap(action => this.cloudSync.getUnitByIdBuilding((<LoadUnitByIdBuilding>action).payload).pipe(
            map(data => new LoadUnitByIdBuildingSuccess(data)),
        )
        ),
    );

    @Effect()
    public SetHouseHold$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.SetHouseHold),
        mergeMap((action: SetHouseHold) => this.dataStore.saveHouseHold(action.payload).mapTo(action)),
        map((action: SetHouseHold) => new SetHouseHoldSuccess(action.payload),
        // mergeMap(action => this.cloudSync.setHouseHold((<SetHouseHold>action).payload).pipe(
        //     map(data => new SetHouseHoldSuccess(data)),
        // )
        // ),
    ));

}