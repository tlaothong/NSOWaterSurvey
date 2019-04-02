import { Action } from '@ngrx/store';
import { CommunityInList } from '../../models/mobile/MobileModels';

export enum CommunityTypes {
    StateName = "Community",

    LoadList = "[CM] Load List",
    LoadListSuccess = "[CM] Load List Success",

    Load = "[CM] Load",
    LoadSuccess = "[CM] Load Success",
    
    SaveCommunity = "[CM] Save Community",
    SaveCommunitySuccess = "[CM] Save Community Success",
    
    UpdateCommunityList ="[CM] Update Community List",
    UpdateCommunityListSuccess = "[CM] Update the Community List Success",

    NewCommunity = "[CM] Create New Community",
    DeleteCommunity = "[CM] Delete Community From List",
    SetCurrentWorkingCommunity = "[CM] Set the Current Working Community",

    SetComNo = "[CM] Set Com No",
}

export class LoadCommunityList implements Action {
    readonly type = CommunityTypes.LoadList;

    constructor(public eaCode: string) {
    }
}

export class LoadCommunityListSuccess implements Action {
    readonly type = CommunityTypes.LoadListSuccess;

    constructor(public payload: CommunityInList[]) {
    }
}

export class LoadCommunitySample implements Action {
    readonly type = CommunityTypes.Load;

    constructor(public payload: any) {
    }
}

export class LoadCommunitySampleSuccess implements Action {
    readonly type = CommunityTypes.LoadSuccess;

    constructor(public payload: any) {
    }
}

export class SaveCommunity implements Action {
    readonly type = CommunityTypes.SaveCommunity;

    constructor(public payload: any) {
    }
}

export class SaveCommunitySuccess implements Action {
    readonly type = CommunityTypes.SaveCommunitySuccess;

    constructor(public payload: any) {
    }
}

export class UpdateCommunityList implements Action {
    readonly type = CommunityTypes.UpdateCommunityList;

    constructor(public payload: any) {
    }
}

export class UpdateCommunityListSuccess implements Action {
    readonly type = CommunityTypes.UpdateCommunityListSuccess;

    constructor(public payload: CommunityInList) {
    }
}

export class NewCommunity implements Action {
    readonly type = CommunityTypes.NewCommunity;

    constructor() {
    }
}

export class DeleteCommunity implements Action {
    readonly type = CommunityTypes.DeleteCommunity;

    constructor(public payload: any) {
    }
}

export class SetComNo implements Action {
    readonly type = CommunityTypes.SetComNo;

    constructor(public payload: string) {
    }
}

export class SetCurrentWorkingCommunity implements Action {
    readonly type = CommunityTypes.SetCurrentWorkingCommunity;

    constructor(public communityId: string) {
    }
}

export type CommunityActionsType =
    LoadCommunityList
    | LoadCommunityListSuccess
    | LoadCommunitySample
    | LoadCommunitySampleSuccess
    | NewCommunity
    | SaveCommunity
    | SaveCommunitySuccess
    | UpdateCommunityList
    | UpdateCommunityListSuccess
    | DeleteCommunity
    | SetCurrentWorkingCommunity
    | SetComNo
    ;