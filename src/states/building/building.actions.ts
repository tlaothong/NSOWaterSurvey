import { Action } from '@ngrx/store';

export enum BuildingTypes {
    StateName = "Building",
    LoadList = "[BLD] Load List",
    LoadListSuccess = "[BLD] Load List Success",
    Load = "[BLD] Load",
    LoadSuccess = "[BLD] Load Success",
    SetRecieveDataFromBuilding= "[BLD] Recieve Data From Building"
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





export type BuildingActionsType =
    LoadBuildingList
    | LoadBuildingListSuccess
    | LoadBuildingSample
    | LoadBuildingSampleSuccess
    | SetRecieveDataFromBuilding
    ;