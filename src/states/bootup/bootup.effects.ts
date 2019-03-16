import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BootupTypes, LoadBootstrapSuccess } from "./bootup.actions";
import { mergeMap, map } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";


@Injectable()
export class BootupEffects {
    constructor(private action$: Actions, private cloudSync: CloudSyncProvider) {
    }

    @Effect()
    public loadCommunitySample$: Observable<Action> = this.action$.pipe(
        ofType(BootupTypes.Load),
        // mergeMap(action => this.cloudSync.loadCommunitySampleTestData().pipe(
        //         map(data => new LoadBootstrapSuccess(data)),
        //     )
        // ),
        mergeMap(_ => Observable.of(new LoadBootstrapSuccess(null))),
    );
  
}