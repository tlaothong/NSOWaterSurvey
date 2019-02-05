import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { HouseHoldTypes, LoadHouseHoldListSuccess, LoadHouseHoldSampleSuccess, LoadUnitByIdBuilding, LoadUnitByIdBuildingSuccess, LoadHouseHoldSample, LoadDataOfUnit, LoadDataOfUnitSuccess} from "./household.actions";


@Injectable()
export class HouseHoldEffects {

    constructor(private action$: Actions, private cloudSync: CloudSyncProvider) {
    }

    @Effect()
    public loadHouseHoldList$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadList),
        mergeMap(action => Observable.of(new LoadHouseHoldListSuccess())),
    );

    @Effect()
    public loadHouseHoldSample$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadHouseHoldSample),
        mergeMap(action => this.cloudSync.loadHousHoldSampleTestData((<LoadHouseHoldSample>action).payload).pipe(
            map(data => new LoadHouseHoldSampleSuccess(data))),
        ),
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
    public LoadDataOfUnit$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadDataOfUnit),
        mergeMap(action => this.cloudSync.getDataOfUnit((<LoadDataOfUnit>action).payload).pipe(
            map(data => new LoadDataOfUnitSuccess(data)),
        )
        ),
    );

}