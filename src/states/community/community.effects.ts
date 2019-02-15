import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommunityTypes, LoadCommunityListSuccess, LoadCommunitySampleSuccess, SetCommunity, SetCommunitySuccess } from "./community.actions";
import { mergeMap, map } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";


@Injectable()
export class CommunityEffects {
    constructor(private action$: Actions, private cloudSync: CloudSyncProvider) {
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
    public SetCommunity$: Observable<Action> = this.action$.pipe(
        ofType(CommunityTypes.SetCommunity),
        mergeMap(action => this.cloudSync.setCommunity((<SetCommunity>action).payload).pipe(
                map(data => new SetCommunitySuccess(data)),
            )
        ),
    );

    

  
}