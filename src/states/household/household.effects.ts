import { Observable } from "rxjs";
import { Action, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { mergeMap, map, tap, withLatestFrom, switchMap, mapTo, filter } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { HouseHoldTypes, LoadHouseHoldListSuccess, LoadHouseHoldSampleSuccess, LoadUnitByIdBuilding, LoadUnitByIdBuildingSuccess, LoadHouseHoldSample, SaveHouseHold, SaveHouseHoldSuccess, CreateHouseHoldFor1UnitBuilding, LoadHouseHoldList, SetCurrentWorkingHouseHold, LoadSelectedHouseHold, UpdateUnitList, NewHouseHoldWithSubUnit, SaveHouseHoldSubUnit, DeleteHouseHold } from "./household.actions";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { HouseHoldUnit, UnitInList, SubUnit } from "../../models/mobile/MobileModels";
import { getHouseHoldUnitList, getHouseHoldSample } from ".";
import { HouseHoldState } from "./household.reducer";
import { BuildingState } from "../building/building.reducer";
import { getBuildingSample } from "../building";
import { UpdateBuildingList } from "../building/building.actions";


@Injectable()
export class HouseHoldEffects {

    constructor(private action$: Actions,
        private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>,
        private dataStore: DataStoreProvider, private cloudSync: CloudSyncProvider,
        private appState: AppStateProvider) {
    }

    @Effect()
    public loadHouseHoldList$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadList),
        tap(_ => this.appState.houseHoldUnit = null),
        mergeMap((action: LoadHouseHoldList) => this.dataStore.listHouseHoldInBuilding(action.buildingId)),
        withLatestFrom(this.storeBuild.select(getBuildingSample)),
        switchMap(([lst, bld]) => (lst && lst.length >= 1 && bld.unitCount == 1)
            ? [new LoadHouseHoldListSuccess(lst),
            new SetCurrentWorkingHouseHold(lst[0].houseHoldId)]
            : [new LoadHouseHoldListSuccess(lst ? lst : [])]),
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
            : Observable.of<HouseHoldUnit>(
                this.createDefaultHouseHoldUnit(null, null)
            ).map(it => { return { exists: false, data: it } })),
        mergeMap((x: UnitExistence) => Observable.if(() => x.exists,
            Observable.of(new SetCurrentWorkingHouseHold(x.data._id)),
            Observable.of(new SaveHouseHold(x.data)))),
    );

    @Effect()
    public newHouseHoldWithSubUnit$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.NewHouseHoldWithSubUnit),
        map((action: NewHouseHoldWithSubUnit) => new SaveHouseHold(
            this.createDefaultHouseHoldUnit(action.subUnit, action.comment))
        ),
    );

    @Effect()
    public saveHouseHoldSubUnit$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.SaveHouseHoldSubUnit),
        map((action: SaveHouseHoldSubUnit) => this.updateHouseHoldSubUnit(action.houseHold,
            action.subUnit, action.comment)),
        map(it => new SaveHouseHold(it)),
    );

    private updateHouseHoldSubUnit(houseHold: HouseHoldUnit, subUnit: SubUnit, comment: string): HouseHoldUnit {
        if (subUnit) {
            let accCnt = 0;
            if (subUnit && subUnit.accesses) {
                accCnt = subUnit.accesses.length;
            }
            subUnit.accessCount = accCnt;
        }

        let comments = [...houseHold.comments];
        if (comment && comment != '') {
            comments.push({ at: Date.now(), text: comment });
        }

        return {
            ...houseHold,
            subUnit: subUnit,
            comments: comments || [],
        };
    }

    private createDefaultHouseHoldUnit(subUnit: SubUnit, comment: string) {
        if (subUnit) {
            let accCnt = 0;
            if (subUnit && subUnit.accesses) {
                accCnt = subUnit.accesses.length;
            }
            subUnit.accessCount = accCnt;
        }

        return {
            _id: this.appState.generateId('unt'),
            ea: this.appState.eaCode,
            buildingId: this.appState.buildingId,
            subUnit: subUnit,
            isHouseHold: null,
            isAgriculture: null,
            isFactorial: null,
            isCommercial: null,
            agriculture: {
                ricePlant: {},
                agronomyPlant: {},
                rubberTree: {},
                perennialPlant: {},
                herbsPlant: {},
                flowerCrop: {},
                mushroomPlant: {},
                animalFarm: {},
                aquaticAnimals: {}
            },
            factory: {},
            commerce: {},
            waterUsage: {},
            disaster: {},
            closing: {},
            population: {},
            comments: (comment && comment != '') ? [{ at: Date.now(), text: comment }] : [],
            recCtrl: {},
        }
    }

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
            const accCnt = unit.subUnit ? unit.subUnit.accessCount : 0;
            let lastAccess = 0;
            if (unit.subUnit && accCnt > 0) {
                lastAccess = unit.subUnit.accesses[accCnt - 1];
            }
            // TODO: Work with status
            let status = "pause";
            switch (lastAccess) {
                case 4:
                    status = "empty";
                    break;
                case 5:
                    status = "abandoned";
                    break;
                case 2:
                case 3:
                    status = (accCnt < 3) ? "return" : "complete";
                    break;
                default:
                    status = "pause";
                    break;
            }
            let untInList: UnitInList = {
                "houseHoldId": unit._id,
                "roomNumber": unit.subUnit ? unit.subUnit.roomNumber : null,
                "subUnit": unit.subUnit,
                "accessCount": accCnt,
                "lastAccess": lastAccess,
                "comments": unit.comments,
                "status": status,
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
        withLatestFrom(this.storeBuild.select(getBuildingSample)),
        switchMap(([untList, bld]) => [
            new LoadHouseHoldListSuccess(untList ? untList : []),
            new UpdateBuildingList(bld),
        ]),
    );

    @Effect()
    public setCurrentWorkingHouseHold$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.SetCurrentWorkingHouseHold),
        mergeMap((action: SetCurrentWorkingHouseHold) => this.dataStore.getHouseHold(action.houseHoldId)),
        tap(unt => this.appState.houseHoldUnit = unt),
        map(unt => new SaveHouseHoldSuccess(unt)),
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
    public deleteHouseHold$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.DeleteHouseHold),
        map((action: DeleteHouseHold) => action.payload),
        withLatestFrom(this.store.select(getHouseHoldUnitList)),
        mergeMap(([hld, lst]) => {
            let idx = lst.findIndex(it => it.houseHoldId == hld.houseHoldId);
            lst.splice(idx, 1);
            return this.dataStore.saveHouseHoldInBuiildingList(this.appState.buildingId, lst).mapTo(lst);
        }),
        map(hldList => new LoadHouseHoldListSuccess(hldList ? hldList : [])),
    );
}

interface UnitExistence {
    exists: boolean;
    data: HouseHoldUnit;
}