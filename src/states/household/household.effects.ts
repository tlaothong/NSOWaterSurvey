import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { mergeMap, map, tap, withLatestFrom, switchMap, mapTo } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { HouseHoldTypes, LoadHouseHoldListSuccess, LoadHouseHoldSampleSuccess, LoadUnitByIdBuilding, LoadUnitByIdBuildingSuccess, LoadHouseHoldSample, SaveHouseHold, SaveHouseHoldSuccess, CreateHouseHoldFor1UnitBuilding, LoadHouseHoldList } from "./household.actions";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { HouseHoldUnit, UnitInList } from "../../models/mobile/MobileModels";


@Injectable()
export class HouseHoldEffects {

    constructor(private action$: Actions, private dataStore: DataStoreProvider, private cloudSync: CloudSyncProvider, private appState: AppStateProvider) {
    }

    @Effect()
    public loadHouseHoldList$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadList),
        mergeMap((action: LoadHouseHoldList) => this.dataStore.listHouseHoldInBuilding(action.buildingId)),
        map((lst: UnitInList[]) => new LoadHouseHoldListSuccess(lst ? lst : [])),
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
        mergeMap(_ => this.dataStore.listHouseHoldInBuilding(this.appState.buildingId)),
        mergeMap(lstUnits => (lstUnits.length > 0)
            ? this.dataStore.getHouseHold(lstUnits[0].houseHoldId).map(it => { return { exists: true, data: it }})
            : Observable.of<HouseHoldUnit>({
                _id: this.appState.generateId('unt'),
                ea: this.appState.eaCode, 
                buildingId: this.appState.buildingId,
            }).map(it => { return { exists: false, data: it }})),
        switchMap((x: UnitExistence) => x.exists ? [ new SaveHouseHold(x.data) ] : [ new SaveHouseHold(x.data) ])
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

interface UnitExistence {
    exists: boolean;
    data: HouseHoldUnit;
}