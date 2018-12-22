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
    
}

export class LoadBuildingList implements Action {
    readonly type = BuildingTypes.LoadList;

    constructor() {
    }
}

export class LoadBuildingListSuccess implements Action {
    readonly type = BuildingTypes.LoadListSuccess;

    constructor() {
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

export type BuildingActionsType =
    LoadBuildingList
    | LoadBuildingListSuccess
    | LoadBuildingSample
    | LoadBuildingSampleSuccess
    | SetSendDataBuilding
    | SetSendBuildingType
    | SetRecieveDataFromBuilding
    
    ;