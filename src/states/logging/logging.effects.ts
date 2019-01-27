import { Observable } from "rxjs";
import { Action } from "@ngrx/store"
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import {
    LoggingTypes, LoadUserDataSuccess, SetUserPasswordSuccess, SetUserPassword,
    LoadUserDataByQRCode, LoadCountOfWorksSuccess,
    LoadHomeBuildingSuccess, LoadCountOfHomeBuildingSuccess, SetHomeBuilding,
    SetHomeBuildingSuccess, LoadUserDataById, LoadDataWorkEAByUserIdSuccess, LoadDataWorkEAByUserId, LoadHomeBuilding, DeleteHomeBuildingSuccess, DeleteHomeBuilding, LoadDataBuildingForEdit, LoadDataBuildingForEditSuccess,
} from "./logging.actions";

@Injectable()
export class LoggingEffects {
    constructor(private action$: Actions, private cloudSync: CloudSyncProvider) {
    }

    @Effect()
    public LoadUserDataByQRCode: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadUserDataByQRCode),
        mergeMap(action => this.cloudSync.loadUserFromQR((<LoadUserDataByQRCode>action).qrcode).pipe(
            map(data => new LoadUserDataSuccess(data))
        ))
    );

    @Effect()
    public LoadUserDataById: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadUserDataById),
        mergeMap(action => this.cloudSync.loadUserFromId((<LoadUserDataById>action).id).pipe(
            map(data => new LoadUserDataSuccess(data))
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
    public LoadDataWorkEAByUserId: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadDataWorkEAByUserId),
        mergeMap(action => this.cloudSync.loadAllWorkEA((<LoadDataWorkEAByUserId>action).payload).pipe(
            map(data => new LoadDataWorkEAByUserIdSuccess(data))
        ))
    );

    @Effect()
    public LoadCountOfWorks: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadCountOfWorks),
        mergeMap(action => this.cloudSync.loadCountOfWorkEA((<LoadDataWorkEAByUserId>action).payload).pipe(
            map(data => new LoadCountOfWorksSuccess(data))
        ))
    );

    @Effect()
    public LoadHomeBuilding: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadHomeBuilding),
        mergeMap(action => this.cloudSync.loadHomeBuilding((<LoadHomeBuilding>action).payload).pipe(
            map(data => new LoadHomeBuildingSuccess(data)))
        ),
    );

    @Effect()
    public LoadCountOfHomeBuilding$: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadCountOfHomeBuilding),
        mergeMap(action => this.cloudSync.loadCountHomeBuilding().pipe(
            map(data => new LoadCountOfHomeBuildingSuccess(data)))
        ),
    );

    @Effect()
    public SetHomeBuilding: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.SetHomeBuilding),
        mergeMap(action => this.cloudSync.setHomeBuilding((<SetHomeBuilding>action).payload).pipe(
            map(data => new SetHomeBuildingSuccess())),
        ),
    );

    @Effect()
    public DeleteHomeBuilding$: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.DeleteHomeBuilding),
        mergeMap(action => this.cloudSync.deleteHomeBuilding((<DeleteHomeBuilding>action).payload).pipe(
                map(data => new DeleteHomeBuildingSuccess()),
            )
        ),
    );

    @Effect()
    public LoadDataBuildingForEdit: Observable<Action> = this.action$.pipe(
        ofType(LoggingTypes.LoadDataBuildingForEdit),
        mergeMap(action => this.cloudSync.getDataBuilding((<LoadDataBuildingForEdit>action).payload).pipe(
                map(data => new LoadDataBuildingForEditSuccess(data)),
            )
        ),
    );
}