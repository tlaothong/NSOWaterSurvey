import { Observable } from "rxjs";
import { Action } from "@ngrx/store"
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { LoggingTypes, LoadUserInformationSuccess, SetUserPasswordSuccess, SetUserPassword, LoadUserInformation, LoadDataWorkEA, LoadDataWorkEASuccess, LoadCountOfWorksSuccess, LoadWorkByIdEASuccess, LoadHomeBuildingSuccess, LoadCountOfHomeBuildingSuccess, SetHomeBuilding, SetHomeBuildingSuccess } from "./logging.actions";

@Injectable()
export class LoggingEffects {
    constructor(private action$: Actions, private cloudSync: CloudSyncProvider) {
    }

    @Effect()
    public LoadUserInformation: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadUserInformation),
        mergeMap(action => this.cloudSync.loadUserFromQR((<LoadUserInformation>action).payload).pipe(
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

    @Effect()
    public LoadDataWorkEA: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadDataWorkEA),
        mergeMap(action => this.cloudSync.loadAllWorkEA((<LoadDataWorkEA>action).payload).pipe(
            map(data => new LoadDataWorkEASuccess(data))
        ))
    );

    @Effect()
    public LoadCountOfWorks: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadCountOfWorks),
        mergeMap(action => this.cloudSync.loadCountOfWorkEA((<LoadDataWorkEA>action).payload).pipe(
            map(data => new LoadCountOfWorksSuccess(data))
        ))
    );

    @Effect()
    public LoadWorkByIdEA: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadWorkByIdEA),
        mergeMap(action => this.cloudSync.loadWorkEAbyIdEA((<LoadDataWorkEA>action).payload).pipe(
            map(data => new LoadWorkByIdEASuccess(data))
        ))
    );

    
    @Effect()
    public LoadHomeBuilding$: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadHomeBuilding),
        mergeMap(action => this.cloudSync.loadHomeBuilding().pipe(
                map(data => new LoadHomeBuildingSuccess(data)),
            )
        ),
    );
    
    @Effect()
    public LoadCountOfHomeBuilding$: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadCountOfHomeBuilding),
        mergeMap(action => this.cloudSync.loadCountHomeBuilding().pipe(
                map(data => new LoadCountOfHomeBuildingSuccess(data)),
            )
        ),
    );

    @Effect()
    public SetHomeBuilding$: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.SetHomeBuilding),
        mergeMap(action => this.cloudSync.setHomeBuilding((<SetHomeBuilding>action)).pipe(
                map(data => new SetHomeBuildingSuccess()),
            )
        ),
    );
}