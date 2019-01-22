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
    SetPerennialPlantSelectPlant = "[HH] Set PerennialPlant Select Plant",
    SetAgiSelectRice = "[HH] Set Agiculture Select Rice",
    SetAgiSelectAgronomy = "[HH] Set Agiculture Select Agronomy",
    SetAgiSelectRubber = "[HH] Set Agiculture Select Rubber",
    SetAgiSelectPerennial = "[HH] Set Agiculture Select Perennial",
    SetAgiSelectHerbPlant = "[HH] Set Agiculture Select HerbPlant",
    SetAgiSelectFlowerCrop = "[HH] Set Agiculture Select FlowerCrop ",
    SetAgiSelectMushroomPlant = "[HH] Set Agiculture Select MushroomPlant",
    SetAgiSelectAnimalFarm = "[HH] Set Agiculture Select AnimalFarm",
    SetAgiSelectAquaticAnimals = "[HH] Set Agiculture Select AquaticAnimals",
    SetOtherBuildingType = "[HH] Set Other BuildingType",
    SetArraySkipPage = "[HH] Set Array Skip Pages",
    SetArraySkipPageWaterSources = "[HH] Set Array Skip Page WaterSources ",
    SetArraySkipPageAgiculture = "[HH] Set Array Skip Page Agicultures",
    SetCheckWaterPlumbing = "[HH] Set Check Water Plumbing",
    SetCheckWaterRiver = "[HH]Set Check Water River",
    SetCheckWaterIrrigation = "[HH] Set Check Water Irrigation",
    SetCheckWaterRain = "[HH] Set Check Water Rain",
    SetCheckWaterBuying = "[HH] Set Check Water Buying",
    SetWateringResidential = "[HH] Set Watering Residential",
    SetWaterSourcesResidential = "[HH] Set WaterSources Residential",
    SetWaterSourcesRice = "[HH] Set WaterSources Rice ",
    SetWaterSourcesAgiculture = "[HH] Set WaterSources Agiculture",
    SetWaterSourcesFactory = "[HH] Set WaterSources Factory",
    SetWaterSourcesCommercial = "[HH] Set WaterSources Commercial",
    SetNextPageDirection = "[HH] Set Next Page Direction",
    SetHeadFamily = "[HH] Set Head Family",
    SetArrayIsCheck = "[HH] Set Array IsCheck",
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

    constructor(public payload: any[]) {
    }
}

export class SetAgronomyPlantDoing implements Action {
    readonly type = HouseHoldTypes.SetAgronomyPlantDoing;

    constructor(public payload: any) {
    }
}

export class SetOtherBuildingType implements Action {
    readonly type = HouseHoldTypes.SetOtherBuildingType;

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

export class SetAgiSelectRice implements Action {
    readonly type = HouseHoldTypes.SetAgiSelectRice;

    constructor(public payload: any) {
    }
}

export class SetAgiSelectAgronomy implements Action {
    readonly type = HouseHoldTypes.SetAgiSelectAgronomy;

    constructor(public payload: any) {
    }
}

export class SetAgiSelectRubber implements Action {
    readonly type = HouseHoldTypes.SetAgiSelectRubber;

    constructor(public payload: any) {
    }
}

export class SetAgiSelectPerennial implements Action {
    readonly type = HouseHoldTypes.SetAgiSelectPerennial;

    constructor(public payload: any) {
    }
}
export class SetAgiSelectHerbPlant implements Action {
    readonly type = HouseHoldTypes.SetAgiSelectHerbPlant;

    constructor(public payload: any) {
    }
}

export class SetAgiSelectFlowerCrop implements Action {
    readonly type = HouseHoldTypes.SetAgiSelectFlowerCrop;

    constructor(public payload: any) {
    }
}
export class SetAgiSelectMushroomPlant implements Action {
    readonly type = HouseHoldTypes.SetAgiSelectMushroomPlant;

    constructor(public payload: any) {
    }
}
export class SetAgiSelectAnimalFarm implements Action {
    readonly type = HouseHoldTypes.SetAgiSelectAnimalFarm;

    constructor(public payload: any) {
    }
}
export class SetAgiSelectAquaticAnimals implements Action {
    readonly type = HouseHoldTypes.SetAgiSelectAquaticAnimals;

    constructor(public payload: any) {
    }
}
export class SetArraySkipPage implements Action {
    readonly type = HouseHoldTypes.SetArraySkipPage;

    constructor(public payload: any) {
    }
}
export class SetArraySkipPageWaterSources implements Action {
    readonly type = HouseHoldTypes.SetArraySkipPageWaterSources;

    constructor(public payload: any) {
    }
}
export class SetArraySkipPageAgiculture implements Action {
    readonly type = HouseHoldTypes.SetArraySkipPageAgiculture;

    constructor(public payload: any) {
    }
}
export class SetCheckWaterPlumbing implements Action {
    readonly type = HouseHoldTypes.SetCheckWaterPlumbing;

    constructor(public payload: any) {
    }
}
export class SetCheckWaterRiver implements Action {
    readonly type = HouseHoldTypes.SetCheckWaterRiver;

    constructor(public payload: any) {
    }
}
export class SetCheckWaterIrrigation implements Action {
    readonly type = HouseHoldTypes.SetCheckWaterIrrigation;

    constructor(public payload: any) {
    }
}
export class SetCheckWaterRain implements Action {
    readonly type = HouseHoldTypes.SetCheckWaterRain;

    constructor(public payload: any) {
    }
}
export class SetCheckWaterBuying implements Action {
    readonly type = HouseHoldTypes.SetCheckWaterBuying;

    constructor(public payload: any) {
    }
}
export class SetWateringResidential implements Action {
    readonly type = HouseHoldTypes.SetWateringResidential;

    constructor(public payload: any) {
    }
}
export class SetWaterSourcesResidential implements Action {
    readonly type = HouseHoldTypes.SetWaterSourcesResidential;

    constructor(public payload: any) {
    }
}
export class SetWaterSourcesRice implements Action {
    readonly type = HouseHoldTypes.SetWaterSourcesRice;

    constructor(public payload: any) {
    }
}
export class SetWaterSourcesAgiculture implements Action {
    readonly type = HouseHoldTypes.SetWaterSourcesAgiculture;

    constructor(public payload: any) {
    }
}
export class SetWaterSourcesFactory implements Action {
    readonly type = HouseHoldTypes.SetWaterSourcesFactory;

    constructor(public payload: any) {
    }
}
export class SetWaterSourcesCommercial implements Action {
    readonly type = HouseHoldTypes.SetWaterSourcesCommercial;

    constructor(public payload: any) {
    }
}
export class SetNextPageDirection implements Action {
    readonly type = HouseHoldTypes.SetNextPageDirection;

    constructor(public payload: any) {
        // if (payload == null ) {
        //     payload = 0 ;
        // }
    }
}
export class SetHeadFamily implements Action {
    readonly type = HouseHoldTypes.SetHeadFamily;

    constructor(public payload: boolean) {
    }
}
export class SetArrayIsCheck implements Action {
    readonly type = HouseHoldTypes.SetArrayIsCheck;

    constructor(public payload:  Array<number>) {
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
    | SetAgiSelectRice
    | SetAgiSelectAgronomy
    | SetAgiSelectRubber
    | SetAgiSelectPerennial
    | SetAgiSelectHerbPlant
    | SetAgiSelectFlowerCrop
    | SetAgiSelectMushroomPlant
    | SetAgiSelectAnimalFarm
    | SetAgiSelectAquaticAnimals
    | SetOtherBuildingType
    | SetArraySkipPage
    | SetArraySkipPageWaterSources
    | SetArraySkipPageAgiculture
    | SetCheckWaterPlumbing
    | SetCheckWaterRiver
    | SetCheckWaterIrrigation
    | SetCheckWaterRain
    | SetCheckWaterBuying
    | SetWateringResidential
    | SetWaterSourcesResidential
    | SetWaterSourcesRice
    | SetWaterSourcesAgiculture
    | SetWaterSourcesFactory
    | SetWaterSourcesCommercial
    | SetNextPageDirection
    | SetHeadFamily
    | SetArrayIsCheck
    ;
