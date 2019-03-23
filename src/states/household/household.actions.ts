import { Action } from '@ngrx/store';
import { HouseHoldUnit, SubUnit, UnitInList } from '../../models/mobile/MobileModels';

export enum HouseHoldTypes {
    StateName = "HouseHold",

    LoadHouseHoldSample = "[HH] Load HouseHold",
    LoadHouseHoldSampleSuccess = "[HH] Load HouseHold Success",

    CreateHouseHoldFor1UnitBuilding = "[HH] Create House Hold for Building w 1 Unit", // สร้าง HH ที่ไม่มี subUnit
    NewHouseHoldWithSubUnit = "[HH] New House Hold with Empty Sub Unit", // สร้าง HH สำหรับใส่ข้อมูล subUnit ใน dialog
    LoadSelectedHouseHold = "[HH] Load a Selected House Hold",

    SaveHouseHold = "[HH] Save House Hold",
    SaveHouseHoldSuccess = "[HH] Save House Hold Success",

    LoadList = "[HH] Load House Hold List For Building",
    LoadListSuccess = "[HH] Load List For Building Success",

    SetRiceDoing = "[HH] Set Rice Donig",
    SetSelectG1234 = "[HH] Set SelectG1234",
    SetIsFactorial = "[HH] Set IsFactorial",
    SetIsHouseHold = "[HH] Set IsHouseHold",
    SetIsCommercial = "[HH] Set IsCommercial",
    SetIsAgriculture = "[HH] Set IsAgriculture",
    LoadUserByQrCode = "[HH] Load User By QrCode",
    SetFactorialCategory = "[HH] Set Factorial Category",
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
    SetArrayIsCheck = "[HH] Set Array IsCheck",
    SetSelectorIndex = "[HH] Set Selector Index",
    LoadUnitByIdBuilding = "[HH] Load Unit By IdBuilding",
    LoadUnitByIdBuildingSuccess = "[HH] Load Unit By IdBuilding Success",
    SetBackToRoot = "[HH] Set Back To Root",
    SetBack = "[HH] Set Back",
    SetNumberRoom = "[HH] Set Number Room",
    SetUnitNo = "[HH] Set Unit No",
    SetMemberCount = "[HH] Set Count Member",
}

export class LoadHouseHoldList implements Action {
    readonly type = HouseHoldTypes.LoadList;

    constructor(public buildingId: string) {
    }
}

export class LoadHouseHoldListSuccess implements Action {
    readonly type = HouseHoldTypes.LoadListSuccess;

    constructor(public payload: UnitInList[]) {
    }
}

export class LoadHouseHoldSample implements Action {
    readonly type = HouseHoldTypes.LoadHouseHoldSample;

    constructor(public payload: any) {
    }
}

export class LoadHouseHoldSampleSuccess implements Action {
    readonly type = HouseHoldTypes.LoadHouseHoldSampleSuccess;

    constructor(public payload: any) {
    }
}

export class CreateHouseHoldFor1UnitBuilding implements Action {
    readonly type = HouseHoldTypes.CreateHouseHoldFor1UnitBuilding;

    constructor() {
    }
}

export class NewHouseHoldWithSubUnit implements Action {
    readonly type = HouseHoldTypes.NewHouseHoldWithSubUnit;

    constructor() {
    }
}


export class SaveHouseHold implements Action {
    readonly type = HouseHoldTypes.SaveHouseHold;
    constructor(public payload: HouseHoldUnit) {
    }
}
export class SaveHouseHoldSuccess implements Action {
    readonly type = HouseHoldTypes.SaveHouseHoldSuccess;
    constructor(public payload: HouseHoldUnit) {
    }
}


export class SetSelectG1234 implements Action {
    readonly type = HouseHoldTypes.SetSelectG1234;

    constructor(public payload: HouseHoldUnit) {
    }
}

// export interface IG1234 {
//     g1: boolean;
//     g2: boolean;
//     g3: boolean;
//     g4: boolean;
// }

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

    constructor(public payload: Array<boolean>) {
    }
}

export class SetArrayIsCheck implements Action {
    readonly type = HouseHoldTypes.SetArrayIsCheck;

    constructor(public payload: Array<number>) {
    }
}
export class SetSelectorIndex implements Action {
    readonly type = HouseHoldTypes.SetSelectorIndex;
    constructor(public payload: any) {
    }
}
export class LoadUnitByIdBuilding implements Action {
    readonly type = HouseHoldTypes.LoadUnitByIdBuilding;
    constructor(public payload: string) {
    }
}
export class LoadUnitByIdBuildingSuccess implements Action {
    readonly type = HouseHoldTypes.LoadUnitByIdBuildingSuccess;
    constructor(public payload: any) {
    }
}
export class SetBackToRoot implements Action {
    readonly type = HouseHoldTypes.SetBackToRoot;
    constructor(public payload: any) {
    }
}
export class SetBack implements Action {
    readonly type = HouseHoldTypes.SetBack;
    constructor(public payload: any) {
    }
}

export class SetNumberRoom implements Action {
    readonly type = HouseHoldTypes.SetNumberRoom;
    constructor(public payload: string) {
    }
}
export class SetUnitNo implements Action {
    readonly type = HouseHoldTypes.SetUnitNo;
    constructor(public payload: string) {
    }
}
export class SetMemberCount implements Action {
    readonly type = HouseHoldTypes.SetMemberCount;
    constructor(public payload: number) {
    }
}

export type HouseHoldActionsType =
    LoadHouseHoldList
    | LoadHouseHoldListSuccess
    | LoadHouseHoldSample
    | LoadHouseHoldSampleSuccess
    | CreateHouseHoldFor1UnitBuilding
    | NewHouseHoldWithSubUnit
    | SaveHouseHold
    | SaveHouseHoldSuccess
    | SetSelectG1234
    | SetIsHouseHold
    | SetIsAgriculture
    | SetIsFactorial
    | SetIsCommercial
    | SetFactorialCategory
    | SetCommercialServiceType
    | SetResidentialGardeningUse
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
    | SetArrayIsCheck
    | SetSelectorIndex
    | LoadUnitByIdBuilding
    | LoadUnitByIdBuildingSuccess
    | SetBackToRoot
    | SetBack
    | SetNumberRoom
    | SetUnitNo
    | SetMemberCount
    ;
