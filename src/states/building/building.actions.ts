import { Action } from '@ngrx/store';
import { EaComponent } from '../../components/ea/ea';
import { BuildingInList, Building } from '../../models/mobile/MobileModels';

export enum BuildingTypes {
    StateName = "Building",
    
    LoadList = "[BLD] Load List",
    LoadListSuccess = "[BLD] Load List Success",
    NewBuilding = "[BLD] Create New HomeBuilding",
    SaveBuilding = "[BLD] Set Building",
    SaveBuildingSuccess = "[BLD] Set Building Success",
    SetCurrentWorkingBuilding = "[BLD] Set the Current Working Building",

    Load = "[BLD] Load",
    LoadSuccess = "[BLD] Load Success",
    SetSendDataBuilding = "[BLD] Send Data Building",
    SetSendBuildingType = "[BLD] Send Building Type",
    SetRecieveDataFromBuilding = "[BLD] Recieve Data From Building",
    UpdateBuildingList = "[BLD] Update or Insert the Building into the List",
    UpdateBuildingListSuccess = "[BLD] Update the Building List Success",
    DeleteBuilding = "[BLD] Delete Building",
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

export class NewBuilding implements Action {
    readonly type = BuildingTypes.NewBuilding;

    constructor() {
    }
}
export class SaveBuilding implements Action {
    readonly type = BuildingTypes.SaveBuilding;

    constructor(public payload: Building) {
    }
}
export class SaveBuildingSuccess implements Action {
    readonly type = BuildingTypes.SaveBuildingSuccess;

    constructor(public payload: Building) {
    }
}

export class SetCurrentWorkingBuilding implements Action {
    readonly type = BuildingTypes.SetCurrentWorkingBuilding;

    constructor(public buildingId: string) {
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

export class UpdateBuildingList implements Action {
    readonly type = BuildingTypes.UpdateBuildingList;

    constructor(public payload: Building) {
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

export class DeleteBuilding implements Action {
    readonly type = BuildingTypes.DeleteBuilding;

    constructor(public payload: any){

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
    | NewBuilding
    | SaveBuilding
    | SaveBuildingSuccess
    | UpdateBuildingList
    | SetOtherBuildingType
    | DeleteBuilding
   
    ;

export interface BuildingInList {
    buildingId: string;
    houseNo: string;
    name: string;
    completedCount: number;
    unitCount: number;
}

export interface CommunityInList {
    vil: string;
    name: string;
}