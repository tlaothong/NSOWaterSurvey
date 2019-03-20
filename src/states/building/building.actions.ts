import { Action } from '@ngrx/store';

export enum BuildingTypes {
    StateName = "Building",
    LoadList = "[BLD] Load List",
    LoadListSuccess = "[BLD] Load List Success",
    Load = "[BLD] Load",
    LoadSuccess = "[BLD] Load Success",
    SetSendDataBuilding = "[BLD] Send Data Building",
    SetSendBuildingType = "[BLD] Send Building Type",
    SetRecieveDataFromBuilding = "[BLD] Recieve Data From Building",
    NewHomeBuilding = "[BLD] Create New HomeBuilding",
    SetHomeBuilding = "[BLD] Set HomeBuilding",
    SetHomeBuildingSuccess = "[BLD] Set HomeBuilding Success",
    UpdateBuildingList = "[BLD] Update or Insert the Building into the List",
    UpdateBuildingListSuccess = "[BLD] Update the Building List Success",
    SetOtherBuildingType = "[BLD] Set Other Building Type"
}

export class LoadBuildingList implements Action {
    readonly type = BuildingTypes.LoadList;

    constructor(public eaCode: string) {
    }
}

export class LoadBuildingListSuccess implements Action {
    readonly type = BuildingTypes.LoadListSuccess;

    constructor(public payload: BuildingInList[]) {
    }
}

export class LoadBuildingSample implements Action {
    readonly type = BuildingTypes.Load;

    constructor() {
    }
}

export class LoadBuildingSampleSuccess implements Action {
    readonly type = BuildingTypes.LoadSuccess;

    constructor(public payload: any) {
    }
}
export class SetRecieveDataFromBuilding implements Action {
    readonly type = BuildingTypes.SetRecieveDataFromBuilding;

    constructor(public payload: any) {
    }
}

export class SetSendBuildingType implements Action {
    readonly type = BuildingTypes.SetSendBuildingType;

    constructor(public payload: any) {
    }
}

export class SetSendDataBuilding implements Action {
    readonly type = BuildingTypes.SetSendDataBuilding;

    constructor(public payload: any) {
    }
}

export class NewHomeBuilding implements Action {
    readonly type = BuildingTypes.NewHomeBuilding;

    constructor() {
    }
}
export class SetHomeBuilding implements Action {
    readonly type = BuildingTypes.SetHomeBuilding;

    constructor(public payload: any) {
    }
}
export class SetHomeBuildingSuccess implements Action {
    readonly type = BuildingTypes.SetHomeBuildingSuccess;

    constructor(public payload: any) {
    }
}

export class UpdateBuildingList implements Action {
    readonly type = BuildingTypes.UpdateBuildingList;

    constructor(public payload: any) {
    }
}
export class UpdateBuildingListSuccess implements Action {
    readonly type = BuildingTypes.UpdateBuildingListSuccess;

    constructor(public payload: BuildingInList) {
    }
}

export class SetOtherBuildingType implements Action {
    readonly type = BuildingTypes.SetOtherBuildingType;

    constructor(public payload: any) {
    }
}

export type BuildingActionsType =
    LoadBuildingList
    | LoadBuildingListSuccess
    | LoadBuildingSample
    | LoadBuildingSampleSuccess
    | SetSendDataBuilding
    | SetSendBuildingType
    | SetRecieveDataFromBuilding
    | NewHomeBuilding
    | SetHomeBuilding
    | SetHomeBuildingSuccess
    | UpdateBuildingList
    | SetOtherBuildingType
   
    ;

export interface BuildingInList {
    buildingId: string;
    status: string;
    houseNo: string;
    name: string;
    completedCount: number;
    unitCount: number;
}

export interface CommunityInList {
    vil: string;
    name: string;
}