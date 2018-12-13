import { Observable } from "rxjs";
import { Action } from "@ngrx/store"
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { LoggingTypes, LoadUserInformationSuccess } from "./logging.actions";

@Injectable()
export class LoggingEffects {

    private qrCode: string

    constructor(private action$: Actions, private cloudSync: CloudSyncProvider) {
        this.qrCode = "603eedf2-9670-452c-be95-77e4d24fdcd4";
    }

    @Effect()
    public LoadUserInformation: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadUserInformation),
        mergeMap(action => this.cloudSync.loadUserFromQR(this.qrCode).pipe(
            map(data => new LoadUserInformationSuccess(data))
        ))
    );
}