import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommunityTypes, LoadCommunityListSuccess, LoadCommunitySampleSuccess, SaveCommunitySuccess, UpdateCommunityList, LoadCommunityList, DeleteCommunity, NewCommunity, SetCurrentWorkingCommunity } from "./community.actions";
import { mergeMap, map, filter, switchMap, withLatestFrom, tap } from "rxjs/operators";
import { Action, Store } from "@ngrx/store";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { CommunityState } from "./community.reducer";
import { getCommunityList } from ".";
import { BootupState } from "../bootup/bootup.reducer";
import { getCurrentWorkingEA } from "../bootup";
import { AppStateProvider } from "../../providers/app-state/app-state";


@Injectable()
export class CommunityEffects {
    constructor(private action$: Actions, private cloudSync: CloudSyncProvider, private dataStore: DataStoreProvider,
        private storeCom: Store<CommunityState>, private storeBoot: Store<BootupState>,
        private appState: AppStateProvider) {
    }

    @Effect()
    public loadCommunitySample$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.Load),
        mergeMap(action => this.cloudSync.loadCommunitySampleTestData().pipe(
            map(data => new LoadCommunitySampleSuccess(data)),
        )
        ),
    );

    @Effect()
    public loadCommunityList$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.LoadList),
        mergeMap((action: LoadCommunityList) => this.dataStore.loadCommunityList(action.payload)),
        map(comList => new LoadCommunityListSuccess(comList ? comList : [])),
    );

    @Effect()
    public setCurrentWorkingCommunity$ = this.action$.pipe(
        ofType(CommunityTypes.SetCurrentWorkingCommunity),
        mergeMap((action: SetCurrentWorkingCommunity) => this.dataStore.loadCommunity(action.communityId)),
        tap(com => {
            this.appState.communityId = com ? com._id : '';
        }),
        map(bld =>  new SaveCommunitySuccess(bld)),
    );

    @Effect()
    public newCommunity$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.NewCommunity),
        map((action: NewCommunity) => new SaveCommunitySuccess(action),
    ));

    @Effect()
    public saveCommunity$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.SaveCommunity),
        filter((action: any, i) => action.payload),
        tap(action => {
            this.appState.communityId = action.payload ? action.payload._id : '';
        }),
        mergeMap(action => this.dataStore.saveCommunity(action).mapTo(action)),
        switchMap(action => [
            new SaveCommunitySuccess(action.payload),
            new UpdateCommunityList(action.payload),
        ]),
        // mergeMap(action => this.cloudSync.setCommunity((<SetCommunity>action).payload).pipe(
        //         map(data => new SetCommunitySuccess(data)),
        //     )
        // ),
    );

    @Effect()
    public updateCommunityList$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.UpdateCommunityList),
        filter((action: UpdateCommunityList, i) => action.payload),
        map((action: UpdateCommunityList) => action.payload),
        withLatestFrom(this.storeCom.select(getCommunityList), this.storeBoot.select(getCurrentWorkingEA)),
        mergeMap(([com, lst, ea]) => {
            console.log(com);
            
            let comlst = {
                "communityId": com._id,
                "vil": com.management.vil,
                "name": com.management.vil_name
            };
            let idx = lst.findIndex(it => it._id == com._id);
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