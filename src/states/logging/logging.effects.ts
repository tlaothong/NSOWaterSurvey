import { Observable } from "rxjs";
import { Action } from "@ngrx/store"
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { LoggingTypes, LoadUserInformationSuccess, SetUserPasswordSuccess } from "./logging.actions";
import { setPassword } from "../../app/models";

@Injectable()
export class LoggingEffects {

    private qrCode: string
    private newPassword = new setPassword();

    constructor(private action$: Actions, private cloudSync: CloudSyncProvider) {
        this.qrCode = "a8445b5d-f846-4084-bd9f-e1b089bed430";
        this.newPassword = { 
            '_idqr': 'a8445b5d-f846-4084-bd9f-e1b089bed430', 
            'idUser': '003',
            'password': '111111',
            'name': 'SomO Hwan',
            'email': 'somsom@gmail.com'
        };
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
        mergeMap(action => this.cloudSync.setNewUserPassword(this.newPassword).pipe(
            map(data => new SetUserPasswordSuccess())
        ))
    );

   
}