import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HouseHoldTypes, LoadHouseHoldsSuccess } from "./household.actions";
import { mergeMap } from "rxjs/operators";
import { Action } from "@ngrx/store";


@Injectable()
export class HouseHoldEffects {
    constructor(private action$: Actions) {
    }

    @Effect()
    public loadHouseHoldList$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.Load),
        mergeMap(action => Observable.of(new LoadHouseHoldsSuccess())),
    );
}