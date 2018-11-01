import { Action } from '@ngrx/store';

export enum HouseHoldTypes {
    StateName = "HouseHold",
    Load = "[HH] Load",
    LoadSuccess = "[HH] Load Success",
}



export class LoadHouseHolds implements Action {
    readonly type = HouseHoldTypes.Load;
    constructor() {
    }
}

export class LoadHouseHoldsSuccess implements Action {
    readonly type = HouseHoldTypes.LoadSuccess;
    constructor() {
    }
}



export type HouseHoldActionsType =
    LoadHouseHolds
    | LoadHouseHoldsSuccess
    ;