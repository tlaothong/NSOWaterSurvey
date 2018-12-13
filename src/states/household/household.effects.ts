import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { HouseHoldTypes, LoadHouseHoldListSuccess, LoadHouseHoldSampleSuccess } from "./household.actions";


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
        ofType(HouseHoldTypes.Load),
        mergeMap(action => this.cloudSync.loadHousHoldSampleTestData().pipe(
            map(data => new LoadHouseHoldSampleSuccess(data))),
        ),
    );
}