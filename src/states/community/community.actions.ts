import { Action } from '@ngrx/store';

export enum CommunityTypes {
    StateName = "Community",
    LoadList = "[CM] Load List",
    LoadListSuccess = "[CM] Load List Success",
    Load = "[CM] Load",
    LoadSuccess = "[CM] Load Success",
    SetCommunity = "[CM] Set Community",
    SetCommunitySuccess = "[CM] Set Community Success",
    SetComNo = "[HH] Set Com No",
}

export class LoadCommunityList implements Action {
    readonly type = CommunityTypes.LoadList;

    constructor() {
    }
}

export class LoadCommunityListSuccess implements Action {
    readonly type = CommunityTypes.LoadListSuccess;

    constructor() {
    }
}

export class LoadCommunitySample implements Action {
    readonly type = CommunityTypes.Load;

    constructor() {
    }
}

export class LoadCommunitySampleSuccess implements Action {
    readonly type = CommunityTypes.LoadSuccess;

    constructor(public payload: any) {
    }
}

export class SetCommunity implements Action {
    readonly type = CommunityTypes.SetCommunity;

    constructor(public payload: any) {
    }
}

export class SetCommunitySuccess implements Action {
    readonly type = CommunityTypes.SetCommunitySuccess;

    constructor(public payload: any) {
    }
}

export class SetComNo implements Action {
    readonly type = CommunityTypes.SetComNo;

    constructor(public payload: string) {
    }
}


export type CommunityActionsType =
    LoadCommunityList
    | LoadCommunityListSuccess
    | LoadCommunitySample
    | LoadCommunitySampleSuccess
    | SetCommunity
    | SetCommunitySuccess
    | SetComNo
    ;