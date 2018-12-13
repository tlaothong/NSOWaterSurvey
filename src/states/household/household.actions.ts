import { Action } from '@ngrx/store';

export enum HouseHoldTypes {
    Load = "[HH] Load",
    StateName = "HouseHold",
    LoadList = "[HH] Load List",
    LoadSuccess = "[HH] Load Success",
    SetRiceDoing = "[HH] Set Rice Donig",
    SetWaterSource = "[HH] Set WaterSource",
    SetIsFactorial = "[HH] Set IsFactorial",
    SetIsHouseHold = "[HH] Set IsHouseHold",
    SetIsCommercial = "[HH] Set IsCommercial",
    LoadListSuccess = "[HH] Load List Success",
    SetIsAgriculture = "[HH] Set IsAgriculture",
    LoadUserByQrCode = "[HH] Load User By QrCode",
    SetFactorialCategory = "[HH] Set Factorial Category",
    SetAgronomyPlantDoing = "[HH] Set AgronomyPlant Doing",
    SetRicePlantSelectPlant = "[HH] Set RicePlant Select Plant",
    LoadUserByQrCodeSuccess = "[HH] Load User By QrCode Success",
    SetCommercialServiceType = "[HH] Set Commercial ServiceType",
    SetRubberTreeSelectPlant = "[HH] Set Rubbertree Select Plant",
    SetResidentialGardeningUse = "[HH] Set Residential GardeningUse",
    SetAgronomyPlantSelectPlant = "[HH] Set AgronomyPlant Select Plant",
    SetPerennialPlantSelectPlant = "[HH] Set PerennialPlant Select Plant"
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

export class SetFactorialCategory implements Action {
    readonly type = HouseHoldTypes.SetFactorialCategory;

    constructor(public payload: string) {
    }
}

export class SetWaterSources implements Action {
    readonly type = HouseHoldTypes.SetWaterSource;

    constructor(public payload: any) {
    }
}

export class SetAgronomyPlantDoing implements Action {
    readonly type = HouseHoldTypes.SetAgronomyPlantDoing;

    constructor(public payload: any) {
    }
}

export class SetCommercialServiceType implements Action {
    readonly type = HouseHoldTypes.SetCommercialServiceType;

    constructor(public payload: any) {
    }
}

export class SetResidentialGardeningUse implements Action {
    readonly type = HouseHoldTypes.SetResidentialGardeningUse;

    constructor(public payload: string) {
    }
}

export class SetRubberTreeSelectPlant implements Action {
    readonly type = HouseHoldTypes.SetRubberTreeSelectPlant;

    constructor(public payload: any[]) {
    }
}

export class SetPerennialPlantSelectPlant implements Action {
    readonly type = HouseHoldTypes.SetPerennialPlantSelectPlant;

    constructor(public payload: any[]) {
    }
}


export class SetRicePlantSelectPlant implements Action {
    readonly type = HouseHoldTypes.SetRicePlantSelectPlant;

    constructor(public payload: any[]) {
    }
}

export class SetAgronomyPlantSelectPlant implements Action {
    readonly type = HouseHoldTypes.SetAgronomyPlantSelectPlant;

    constructor(public payload: any[]) {
    }
}

export class SetRiceDoing implements Action {
    readonly type = HouseHoldTypes.SetRiceDoing;

    constructor(public payload: any[]) {
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
    | SetFactorialCategory
    | SetWaterSources
    | SetCommercialServiceType
    | SetResidentialGardeningUse
    | SetAgronomyPlantDoing
    | SetRubberTreeSelectPlant
    | SetPerennialPlantSelectPlant
    | SetRicePlantSelectPlant
    | SetAgronomyPlantSelectPlant
    | SetCommercialServiceType
    | SetRiceDoing
    ;
    
