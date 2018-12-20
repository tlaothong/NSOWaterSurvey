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
    LoadHomeBuilding = "[BLD] Load Home Building",
    LoadHomeBuildingSuccess = "[BLD] Load Home Building Success",
    LoadCountOfHomeBuilding = "[BLD] Load Count Home Building",
    LoadCountOfHomeBuildingSuccess = "[BLD] Load Count Home Building Success",
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
export class LoadHomeBuilding implements Action {
    readonly type = BuildingTypes.LoadHomeBuilding;

    constructor() {
    }
}

export class LoadHomeBuildingSuccess implements Action {
    readonly type = BuildingTypes.LoadHomeBuildingSuccess;

    constructor(public payload: any[]) {
    }
}

export class LoadCountOfHomeBuilding implements Action {
    readonly type = BuildingTypes.LoadCountOfHomeBuilding;

    constructor() {
    }
}

export class LoadCountOfHomeBuildingSuccess implements Action {
    readonly type = BuildingTypes.LoadCountOfHomeBuildingSuccess;

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
    | LoadHomeBuilding
    | LoadHomeBuildingSuccess
    | LoadCountOfHomeBuilding
    | LoadCountOfHomeBuildingSuccess
    ;