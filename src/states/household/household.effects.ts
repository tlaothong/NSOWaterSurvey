import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { mergeMap, map, tap, withLatestFrom, switchMap, mapTo } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { HouseHoldTypes, LoadHouseHoldListSuccess, LoadHouseHoldSampleSuccess, LoadUnitByIdBuilding, LoadUnitByIdBuildingSuccess, LoadHouseHoldSample, SaveHouseHold, SaveHouseHoldSuccess, CreateHouseHoldFor1UnitBuilding, LoadHouseHoldList, SetCurrentWorkingHouseHold, LoadSelectedHouseHold, UpdateUnitList } from "./household.actions";
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
        mergeMap((action: CreateHouseHoldFor1UnitBuilding) => (this.appState.houseHoldUnit)
            ? Observable.of({ exists: true, data: this.appState.houseHoldUnit })
            : Observable.of<HouseHoldUnit>({
                _id: this.appState.generateId('unt'),
                ea: this.appState.eaCode, 
                buildingId: this.appState.buildingId,
            }).map(it => { return { exists: false, data: it }})),
        mergeMap((x: UnitExistence) => Observable.if(() => x.exists,
            Observable.of(new SetCurrentWorkingHouseHold(x.data._id)),
            Observable.of(new SaveHouseHold(x.data)))),
    );

    @Effect()
    public newHouseHoldWithSubUnit$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.NewHouseHoldWithSubUnit),
        map(_ => new LoadSelectedHouseHold({
            _id: this.appState.generateId('unt'),
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
        switchMap((action: SaveHouseHold) => [
            new SaveHouseHoldSuccess(action.payload),
            new UpdateUnitList(action.payload)
        ])
            // mergeMap(action => this.cloudSync.setHouseHold((<SetHouseHold>action).payload).pipe(
            //     map(data => new SetHouseHoldSuccess(data)),
            // )
            // ),
    );

    @Effect()
    public updateUnitList$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.UpdateUnitList),
        map(x => x),
    );

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