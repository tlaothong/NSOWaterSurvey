import { Observable } from "rxjs";
import { Action } from "@ngrx/store"
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { LoggingTypes, LoadUserInformationSuccess, SetUserPasswordSuccess, SetUserPassword } from "./logging.actions";

@Injectable()
export class LoggingEffects {

    private qrCode: string

    constructor(private action$: Actions, private cloudSync: CloudSyncProvider) {
        this.qrCode = "a8445b5d-f846-4084-bd9f-e1b089bed430";
    }

    @Effect()
    public LoadUserInformation: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadUserInformation),
        mergeMap(action => this.cloudSync.loadUserFromQR(this.qrCode).pipe(
            map(data => new LoadUserInformationSuccess(data))
        ))
    );

    @Effect()
    public SetUserPassword: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.SetUserPassword),
        mergeMap(action => this.cloudSync.setNewUserPassword((<SetUserPassword>action).payload).pipe(
            map(data => new SetUserPasswordSuccess())
        ))
    );
}