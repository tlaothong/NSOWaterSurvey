import { HouseHoldActionsType, HouseHoldTypes, SurveyProgress } from "./household.actions";
import { HouseHoldUnit, UnitInList } from "../../models/mobile/MobileModels";

export interface HouseHoldState {
    units: UnitInList[],
    houseHoldSample: HouseHoldUnit,
    selectG1234: any,
    isHouseHold: boolean,
    isAgriculture: boolean,
    isFactorial: boolean,
    isCommercial: boolean,
    factorialCategory: string,
    residentialGardeningUse: any,
    commercialServiceType: any,
    rubberTreeSelectPlant: any[],
    perennialPlantSelectPlant: any[],
    ricePlantSelectPlant: any[],
    agronomyPlantSelectPlant: any[],
    riceDoing: any,
    agiSelectRice: any,
    agiSelectAgronomy: any,
    agiSelectRubber: any,
    agiSelectPerennial: any,
    arraySkipPageAgiculture: any,
    checkWaterPlumbing: any,
    checkWaterRiver: any,
    checkWaterIrrigation: any,
    checkWaterRain: any,
    checkWaterBuying: any,
    wateringResidential: any,
    waterSourcesResidential: any,
    waterSourcesRice: any,
    waterSourcesAgiculture: any,
    waterSourcesFactory: any,
    waterSourcesCommercial: any,
    nextPageDirection: Array<boolean>,
    arrayIsCheck: Array<number>,
    selectorIndex: any,
    unitByIdBuilding: any,
    backToRoot: any,
    back: any,
    numberRoom: string,
    unitNo: string,
    memberCount: number,
    progress: SurveyProgress,
    lastName: Array<string>,
}

const initialState: HouseHoldState = {
    units: [],
    houseHoldSample: null,
    selectG1234: null,
    isHouseHold: null,
    isAgriculture: null,
    isFactorial: null,
    isCommercial: null,
    factorialCategory: null,
    residentialGardeningUse: null,
    commercialServiceType: null,
    rubberTreeSelectPlant: [],
    perennialPlantSelectPlant: [],
    ricePlantSelectPlant: [],
    agronomyPlantSelectPlant: [],
    riceDoing: null,
    agiSelectRice: null,
    agiSelectAgronomy: null,
    agiSelectRubber: null,
    agiSelectPerennial: null,
    arraySkipPageAgiculture: null,
    checkWaterPlumbing: null,
    checkWaterRiver: null,
    checkWaterIrrigation: null,
    checkWaterRain: null,
    checkWaterBuying: null,
    wateringResidential: null,
    waterSourcesResidential: null,
    waterSourcesRice: null,
    waterSourcesAgiculture: null,
    waterSourcesFactory: null,
    waterSourcesCommercial: null,
    nextPageDirection: Array<boolean>(),
    arrayIsCheck: Array<number>(),
    selectorIndex: null,
    unitByIdBuilding: [],
    backToRoot: null,
    back: null,
    numberRoom: null,
    unitNo: null,
    memberCount: null,
    progress: { progressCompleted: 0, progressToGo: 0 },
    lastName: Array<string>(),
};

export function reducer(state: HouseHoldState = initialState, action: HouseHoldActionsType): HouseHoldState {
    switch (action.type) {
        case HouseHoldTypes.LoadListSuccess:
            return {
                ...state,
                units: action.payload,
                progress: { progressCompleted: 0, progressToGo: 0 },
            };
        case HouseHoldTypes.SaveHouseHoldSuccess: {
            return action.state;
        }
        case HouseHoldTypes.UpdateProgress:
            return {
                ...state,
                selectorIndex: action.index,
                progress: action.progress,
            };
        case HouseHoldTypes.LoadSelectedHouseHold:
            return {
                ...state,
                houseHoldSample: action.payload,
            };
        case HouseHoldTypes.SetSelectG1234:
            return {
                ...state,
                selectG1234: action.payload,
            };
        case HouseHoldTypes.SetIsHouseHold:
            return {
                ...state,
                isHouseHold: action.payload,
            };
        case HouseHoldTypes.SetIsAgriculture:
            return {
                ...state,
                isAgriculture: action.payload,
            };
        case HouseHoldTypes.SetMemberCount:
            return {
                ...state,
                memberCount: action.payload,
            };
        case HouseHoldTypes.SetIsFactorial:
            return {
                ...state,
                isFactorial: action.payload,
            };
        case HouseHoldTypes.SetIsCommercial:
            return {
                ...state,
                isCommercial: action.payload,
            };
        case HouseHoldTypes.SetFactorialCategory:
            return {
                ...state,
                factorialCategory: action.payload,
            };
        case HouseHoldTypes.SetCommercialServiceType:
            return {
                ...state,
                commercialServiceType: action.payload,
            };
        case HouseHoldTypes.SetResidentialGardeningUse:
            return {
                ...state,
                residentialGardeningUse: action.payload,
            };

        case HouseHoldTypes.SetRicePlantSelectPlant:
            return {
                ...state,
                ricePlantSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetAgronomyPlantSelectPlant:
            return {
                ...state,
                agronomyPlantSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetRubberTreeSelectPlant:
            return {
                ...state,
                rubberTreeSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetPerennialPlantSelectPlant:
            return {
                ...state,
                perennialPlantSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetRiceDoing:
            return {
                ...state,
                riceDoing: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectRice:
            return {
                ...state,
                agiSelectRice: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectAgronomy:
            return {
                ...state,
                agiSelectAgronomy: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectRubber:
            return {
                ...state,
                agiSelectRubber: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectPerennial:
            return {
                ...state,
                agiSelectPerennial: action.payload,
            };
        case HouseHoldTypes.SetWateringResidential:
            return {
                ...state,
                wateringResidential: action.payload,
            };
        case HouseHoldTypes.SetWaterSourcesResidential:
            return {
                ...state,
                waterSourcesResidential: action.payload,
            };
        case HouseHoldTypes.SetWaterSourcesRice:
            return {
                ...state,
                waterSourcesRice: action.payload,
            };
        case HouseHoldTypes.SetWaterSourcesAgiculture:
            return {
                ...state,
                waterSourcesAgiculture: action.payload,
            };
        case HouseHoldTypes.SetWaterSourcesFactory:
            return {
                ...state,
                waterSourcesFactory: action.payload,
            };
        case HouseHoldTypes.SetWaterSourcesCommercial:
            return {
                ...state,
                waterSourcesCommercial: action.payload,
            };
        case HouseHoldTypes.SetNextPageDirection:
            return {
                ...state,
                nextPageDirection: action.payload,
            };
        case HouseHoldTypes.SetArrayIsCheck:
            return {
                ...state,
                arrayIsCheck: action.payload,
            };
        case HouseHoldTypes.LoadUnitByIdBuildingSuccess:
            return {
                ...state,
                unitByIdBuilding: action.payload,
            };
        case HouseHoldTypes.SetBackToRoot:
            return {
                ...state,
                backToRoot: action.payload,
            };
        case HouseHoldTypes.SetBack:
            return {
                ...state,
                back: action.payload,
            };
        case HouseHoldTypes.SetNumberRoom:
            return {
                ...state,
                numberRoom: action.payload,
            };
        case HouseHoldTypes.SetUnitNo:
            return {
                ...state,
                unitNo: action.payload,
            };
        case HouseHoldTypes.SaveLastNameSuccess:
            return {
                ...state,
                lastName: action.payload,
            };
        default:
            return state;
    }
}

function isCheckWater(checkWater: boolean, payload: boolean): boolean {
    return checkWater ? true : payload;
}
