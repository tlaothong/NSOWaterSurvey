import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BootupTypes, LoadBootstrapSuccess, LoginUserSuccess, LoginUser, DownloadUserToMobile, DownloadUserToMobileSuccess, SetCurrentWorkingEA, CurrentWorkingEaChanged } from "./bootup.actions";
import { mergeMap, map, withLatestFrom, tap } from "rxjs/operators";
import { Action, Store } from "@ngrx/store";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { BootupState } from "./bootup.reducer";
import { getUserId } from ".";
import { AppStateProvider } from "../../providers/app-state/app-state";


@Injectable()
export class BootupEffects {
    constructor(private action$: Actions, private dataStore: DataStoreProvider, private store: Store<BootupState>, private cloudSync: CloudSyncProvider, private appState: AppStateProvider) {
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

    @Effect()
    public loginUser$: Observable<Action> = this.action$.pipe(
        ofType(BootupTypes.Login),
        tap((action: LoginUser) => this.appState.userId = action.userId),
        mergeMap((action: LoginUser) => Observable.of(new LoginUserSuccess(action.userId))),
    );

    @Effect()
    public downloadUserCloudToMobile$: Observable<Action> = this.action$.pipe(
        ofType(BootupTypes.DownloadUserToMobile),
        withLatestFrom(this.store.select(getUserId)),
        mergeMap(([action, userId]) => this.dataStore.setEaForTest(userId).pipe(
            map(eas => new DownloadUserToMobileSuccess(eas))
        )),
    )

    @Effect()
    public setCurrentWorkingEA$: Observable<Action> = this.action$.pipe(
        ofType(BootupTypes.SetCurrentWorkingEA),
        tap((action: SetCurrentWorkingEA) => {
            this.appState.eaCode = action.payload;
            this.appState.buildingId = '';
        }),
        mergeMap((action: SetCurrentWorkingEA) => Observable.of(new CurrentWorkingEaChanged(action.payload))),
    );

}