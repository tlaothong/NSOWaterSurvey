import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { mergeMap, map, tap } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { HouseHoldTypes, LoadHouseHoldListSuccess, LoadHouseHoldSampleSuccess, LoadUnitByIdBuilding, LoadUnitByIdBuildingSuccess, LoadHouseHoldSample, SaveHouseHold, SaveHouseHoldSuccess } from "./household.actions";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { DataStoreProvider } from "../../providers/data-store/data-store";


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
    public createHouseHoldFor1UnitBuilding$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.CreateHouseHoldFor1UnitBuilding),
        map(_ => new SaveHouseHold({
            _id: this.appState.generateId('unt'),
            ea: this.appState.eaCode, 
            buildingId: this.appState.buildingId
        })),
    );

    @Effect()
    public newHouseHoldWithSubUnit$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.NewHouseHoldWithSubUnit),
        map(_ => new SaveHouseHold({
            _id: '', 
            ea: this.appState.eaCode, 
            buildingId: this.appState.buildingId,
            subUnit: {}
        })),
    );

    @Effect()
    public saveHouseHold$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.SaveHouseHold),
        tap((action: SaveHouseHold) => this.appState.houseHoldUnit = action.payload),
        mergeMap((action: SaveHouseHold) => this.dataStore.saveHouseHold(action.payload).mapTo(action)),
        map((action: SaveHouseHold) => new SaveHouseHoldSuccess(action.payload),
            // mergeMap(action => this.cloudSync.setHouseHold((<SetHouseHold>action).payload).pipe(
            //     map(data => new SetHouseHoldSuccess(data)),
            // )
            // ),
        ));

    @Effect()
    public LoadUnitByIdBuilding$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadUnitByIdBuilding),
        mergeMap(action => this.cloudSync.getUnitByIdBuilding((<LoadUnitByIdBuilding>action).payload).pipe(
            map(data => new LoadUnitByIdBuildingSuccess(data)),
        )
        ),
    );

}