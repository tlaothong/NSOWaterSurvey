import { Observable } from "rxjs";
import { Action, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { mergeMap, map, tap, withLatestFrom, switchMap, mapTo, filter } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { HouseHoldTypes, LoadHouseHoldListSuccess, LoadHouseHoldSampleSuccess, LoadUnitByIdBuilding, LoadUnitByIdBuildingSuccess, LoadHouseHoldSample, SaveHouseHold, SaveHouseHoldSuccess, CreateHouseHoldFor1UnitBuilding, LoadHouseHoldList, SetCurrentWorkingHouseHold, LoadSelectedHouseHold, UpdateUnitList, NewHouseHoldWithSubUnit } from "./household.actions";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { HouseHoldUnit, UnitInList } from "../../models/mobile/MobileModels";
import { getHouseHoldUnitList } from ".";
import { HouseHoldState } from "./household.reducer";


@Injectable()
export class HouseHoldEffects {

    constructor(private action$: Actions, private store: Store<HouseHoldState>, private dataStore: DataStoreProvider, private cloudSync: CloudSyncProvider, private appState: AppStateProvider) {
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
                agriculture: {},
                waterUsage: {},
                comments: [],
            }).map(it => { return { exists: false, data: it }})),
        mergeMap((x: UnitExistence) => Observable.if(() => x.exists,
            Observable.of(new SetCurrentWorkingHouseHold(x.data._id)),
            Observable.of(new SaveHouseHold(x.data)))),
    );

    @Effect()
    public newHouseHoldWithSubUnit$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.NewHouseHoldWithSubUnit),
        map((action: NewHouseHoldWithSubUnit) => new SaveHouseHold({
            _id: this.appState.generateId('unt'),
            ea: this.appState.eaCode, 
            buildingId: this.appState.buildingId,
            subUnit: action.subUnit,
            agriculture: {},
            waterUsage: {},
            comments: (action.comment && action.comment != '') ? [{ at: Date.now(), text: action.comment }]: [],
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

        filter((action: any, i) => action.payload),
        map((action: UpdateUnitList) => action.payload),
        withLatestFrom(this.store.select(getHouseHoldUnitList)),
        mergeMap(([unit, lst]) => {
            let untInList: UnitInList = {
                "houseHoldId": unit._id,
                "roomNumber": unit.subUnit.roomNumber,
                "status": 'pause'
            };
            let idx = lst.findIndex(it => it.houseHoldId == unit._id);
            if (idx >= 0) {
                lst[idx] = untInList;
            } else {
                lst.push(untInList);
            }
            // TODO: Save the building list
            return this.dataStore.saveHouseHoldInBuiildingList(this.appState.buildingId, lst)
                .mapTo(lst);
        }),
        map(untList => new LoadHouseHoldListSuccess(untList ? untList : [])),
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