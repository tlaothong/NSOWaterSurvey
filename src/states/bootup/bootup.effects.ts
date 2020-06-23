import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BootupTypes, LoadBootstrapSuccess, LoginUserSuccess, LoginUser, DownloadUserToMobileSuccess, SetCurrentWorkingEA, CurrentWorkingEaChanged, SetStart } from "./bootup.actions";
import { mergeMap, map, withLatestFrom, tap, switchMap, zip } from "rxjs/operators";
import { Action, Store } from "@ngrx/store";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { BootupState } from "./bootup.reducer";
import { getUserId, getCurrentWorkingEA4NoLogin } from ".";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { LoadBuildingList } from "../building/building.actions";
import { LoadCommunityList } from "../community/community.actions";


@Injectable()
export class BootupEffects {
    constructor(private action$: Actions, private dataStore: DataStoreProvider, private store: Store<BootupState>, private cloudSync: CloudSyncProvider, private appState: AppStateProvider) {
    }

    @Effect()
    public loadCommunitySample$: Observable<Action> = this.action$.pipe(
        ofType(BootupTypes.Load),
        mergeMap(_ => Observable.of(new LoadBootstrapSuccess(null))),
    );

    @Effect()
    public loginUser$: Observable<Action> = this.action$.pipe(
        ofType<LoginUser>(BootupTypes.Login),
        tap(action => this.appState.userId = action.userId),
        mergeMap(action => this.dataStore.listDownloadedEAs(action.userId)
            .map((aes, i) => { return { action: action, aes: aes } })),
        switchMap(it => it.aes
            ? [new LoginUserSuccess(it.action.userId), new DownloadUserToMobileSuccess(it.aes)]
            : [new LoginUserSuccess(it.action.userId)]),
    );

    @Effect()
    public downloadUserCloudToMobile$: Observable<Action> = this.action$.pipe(
        ofType(BootupTypes.DownloadUserToMobile),
        withLatestFrom(this.store.select(getUserId)),
        mergeMap(([action, userId]) => this.dataStore.downloadCloudUpdate(userId).pipe(
            map(eas => new DownloadUserToMobileSuccess(eas))
        )),
    )

    @Effect()
    public SetStart$: Observable<Action> = this.action$.pipe(
        ofType(BootupTypes.SetStart),
        withLatestFrom(this.store.select(getUserId)),
        mergeMap(([action, userId,]) => this.dataStore.saveEaForNoLogin(userId).pipe(
            map((lstEA) => new DownloadUserToMobileSuccess(lstEA))),
        ));

    @Effect()
    public CurrentWorkingEA4NoLogin$: Observable<Action> = this.action$.pipe(
        ofType(BootupTypes.SetCurrentWorkingEA4NoLogin),
        tap((action: SetCurrentWorkingEA) => {
            console.log(action.payload);
            this.appState.eaCode = action.payload;
            this.appState.buildingId = '';
        }),
        switchMap((action: SetCurrentWorkingEA) =>
            [
                new CurrentWorkingEaChanged(action.payload),
                new LoadBuildingList(action.payload),
                new LoadCommunityList(action.payload)
            ])
    );

    @Effect()
    public setCurrentWorkingEA$: Observable<Action> = this.action$.pipe(
        ofType(BootupTypes.SetCurrentWorkingEA),
        tap((action: SetCurrentWorkingEA) => {
            console.log(action.payload);
            this.appState.eaCode = action.payload;
            this.appState.buildingId = '';
        }),
        switchMap((action: SetCurrentWorkingEA) =>
            [
                new CurrentWorkingEaChanged(action.payload),
                new LoadBuildingList(action.payload),
                new LoadCommunityList(action.payload)
            ])
    );

}