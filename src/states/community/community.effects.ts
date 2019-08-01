import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommunityTypes, LoadCommunityListSuccess, LoadCommunitySampleSuccess, SaveCommunitySuccess, UpdateCommunityList, LoadCommunityList, DeleteCommunity, NewCommunity, SetCurrentWorkingCommunity, LoadCommunitySample, SaveCommunity } from "./community.actions";
import { mergeMap, map, filter, switchMap, withLatestFrom, tap } from "rxjs/operators";
import { Action, Store } from "@ngrx/store";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { CommunityState } from "./community.reducer";
import { getCommunityList } from ".";
import { BootupState } from "../bootup/bootup.reducer";
import { getCurrentWorkingEA } from "../bootup";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { LoadHouseHoldListSuccess } from "../household/household.actions";


@Injectable()
export class CommunityEffects {
    constructor(private action$: Actions, private cloudSync: CloudSyncProvider, private dataStore: DataStoreProvider,
        private storeCom: Store<CommunityState>, private storeBoot: Store<BootupState>,
        private appState: AppStateProvider) {
    }

    @Effect()
    public loadCommunitySample$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.Load),
        mergeMap((action: LoadCommunitySample) => this.dataStore.loadCommunity(action.payload)),
        map(comData => new LoadCommunitySampleSuccess(comData)),
    );

    @Effect()
    public loadCommunityList$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.LoadList),
        mergeMap((action: LoadCommunityList) => this.dataStore.loadCommunityList(action.eaCode)),
        map(comList => new LoadCommunityListSuccess(comList ? comList : [])),
    );

    @Effect()
    public setCurrentWorkingCommunity$ = this.action$.pipe(
        ofType(CommunityTypes.SetCurrentWorkingCommunity),
        mergeMap((action: SetCurrentWorkingCommunity) => this.dataStore.loadCommunity(action.communityId)),
        tap(com => {
            this.appState.communityId = com ? com._id : '';
            this.appState.communityData = com ? com : null;
            console.log(com);

        }),
        switchMap(bld => [
            new LoadCommunitySampleSuccess(bld),
            new LoadHouseHoldListSuccess([]),
        ]),
    );

    @Effect()
    public newCommunity$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.NewCommunity),
        tap((action: NewCommunity) => {
            this.appState.communityId = null,
                this.appState.communityData = null
        }),
        switchMap((action: NewCommunity) => [
            new SaveCommunitySuccess({
                _id: null,
                ea: this.appState.eaCode,
                management: {},
                communityProject: {},
                status: null
            }),
            new LoadHouseHoldListSuccess([]),
        ]
    ));

    @Effect()
    public saveCommunity$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.SaveCommunity),
        filter((action: SaveCommunity, i) => action.payload),
        tap(action => {
            this.appState.communityId = action.payload ? action.payload._id : '';
            this.appState.communityData = action.payload ? action.payload : null;
        }),
        mergeMap((action: SaveCommunity) => this.dataStore.saveCommunity(action.payload).mapTo(action)),
        switchMap(action => [
            new SaveCommunitySuccess(action.payload),
            new UpdateCommunityList(action.payload),
        ]),
    );

    @Effect()
    public updateCommunityList$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.UpdateCommunityList),
        filter((action: UpdateCommunityList, i) => action.payload),
        map((action: UpdateCommunityList) => action.payload),
        withLatestFrom(this.storeCom.select(getCommunityList), this.storeBoot.select(getCurrentWorkingEA)),
        mergeMap(([com, lst, ea]) => {

            let comlst = {
                "communityId": com._id,
                "vil": com.management.vil,
                "name": com.management.vil_name,
                "status": com.status,
            };
            let idx = lst.findIndex(it => it.communityId == com._id);
            console.log(idx);

            if (idx >= 0) {
                lst[idx] = comlst;
            } else {
                lst.push(comlst);
            }
            return this.dataStore.saveCommunityList(ea.code, lst).mapTo(lst);
        }),
        map(comlst => new LoadCommunityListSuccess(comlst ? comlst : [])),
    );

    @Effect()
    public deleteCommunity$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.DeleteCommunity),
        filter((action: DeleteCommunity, i) => action.payload),
        map((action: DeleteCommunity) => action.payload),
        withLatestFrom(this.storeCom.select(getCommunityList), this.storeBoot.select(getCurrentWorkingEA)),
        mergeMap(([com, lst, ea]) => {
            let idx = lst.findIndex(it => it.communityId == com.communityId);
            lst.splice(idx, 1);
            return this.dataStore.saveCommunityList(ea.code, lst).mapTo(lst);
        }),
        map(comList => new LoadCommunityListSuccess(comList ? comList : [])),
    );

}