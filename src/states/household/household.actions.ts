import { Action } from '@ngrx/store';

export enum HouseHoldTypes {
    StateName = "HouseHold",
    LoadList = "[HH] Load List",
    LoadListSuccess = "[HH] Load List Success",
    Load = "[HH] Load",
    LoadSuccess = "[HH] Load Success",
    SetIsHouseHold = "[HH] Set IsHouseHold",
    SetIsAgriculture = "[HH] Set IsAgriculture",
    SetIsFactorial = "[HH] Set IsFactorial",
    SetIsCommercial = "[HH] Set IsCommercial",
}

export class LoadHouseHoldList implements Action {
    readonly type = HouseHoldTypes.LoadList;

    constructor() {
    }
}

export class LoadHouseHoldListSuccess implements Action {
    readonly type = HouseHoldTypes.LoadListSuccess;

    constructor() {
    }
}

export class LoadHouseHoldSample implements Action {
    readonly type = HouseHoldTypes.Load;

    constructor() {
    }
}

export class LoadHouseHoldSampleSuccess implements Action {
    readonly type = HouseHoldTypes.LoadSuccess;

    constructor(public payload: any) {
    }
}

export class SetIsHouseHold implements Action {
    readonly type = HouseHoldTypes.SetIsHouseHold;

    constructor(public payload: boolean) {
    }
}

export class SetIsAgriculture implements Action {
    readonly type = HouseHoldTypes.SetIsAgriculture;

    constructor(public payload: boolean) {
    }
}

export class SetIsFactorial implements Action {
    readonly type = HouseHoldTypes.SetIsFactorial;

    constructor(public payload: boolean) {
    }
}

export class SetIsCommercial implements Action {
    readonly type = HouseHoldTypes.SetIsCommercial;

    constructor(public payload: boolean) {
    }
}

export type HouseHoldActionsType =
    LoadHouseHoldList
    | LoadHouseHoldListSuccess
    | LoadHouseHoldSample
    | LoadHouseHoldSampleSuccess
    | SetIsHouseHold
    | SetIsAgriculture
    | SetIsFactorial
    | SetIsCommercial
    ;