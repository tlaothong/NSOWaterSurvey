import { HouseHoldActionsType, HouseHoldTypes } from "./household.actions";

export interface HouseHoldState {
    units: any,
    houseHoldSample: any,
    selectG1234: any,
    isHouseHold: boolean,
    isAgriculture: boolean,
    isFactorial: boolean,
    isCommercial: boolean,
    factorialCategory: string,
    residentialGardeningUse: any,
    commercialServiceType: any,
    agricultureRicePlant: any,
    agricultureAgronomyPlant: any,
    agricultureRubberTree: any,
    agriculturePerennialPlant: any,
    agricultureHerbsPlant: any,
    agricultureFlowerCrop: any,
    agricultureMushroomPlant: any,
    agricultureAnimalFarm: any,
    agricultureAquaticAnimals: any,
    ricePlantDoing: any,
    agronomyPlantDoing: any,
    rubberTreeDoing: any,
    perennialPlantDoing: any,
    waterSources: any[],
    rubberTreeSelectPlant: any[],
    perennialPlantSelectPlant: any[],
    ricePlantSelectPlant: any[],
    agronomyPlantSelectPlant: any[],
    riceDoing: any,
    checkboxDoingAgiculturePage: any,
    agiSelectRice: any,
    agiSelectAgronomy: any,
    agiSelectRubber: any,
    agiSelectPerennial: any,
    agiSelectHerbsPlant: any,
    agiSelectFlowerCrop: any,
    agiSelectMushroomPlant: any,
    agiSelectAnimalFarm: any,
    agiSelectAquaticAnimals: any,
    otherBuildingType: any,
    arraySkipPage: any,
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
    checkHeadfamily: boolean,
    arrayIsCheck: Array<number>,
    selectorIndex: any,
    unitByIdBuilding: any,
    backToRoot: any,
    back: any,
    dataOfUnit: any,


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
    agricultureRicePlant: null,
    agricultureAgronomyPlant: null,
    agricultureRubberTree: null,
    agriculturePerennialPlant: null,
    agricultureHerbsPlant: null,
    agricultureFlowerCrop: null,
    agricultureMushroomPlant: null,
    agricultureAnimalFarm: null,
    agricultureAquaticAnimals: null,
    ricePlantDoing: null,
    agronomyPlantDoing: [],
    rubberTreeDoing: null,
    perennialPlantDoing: null,
    waterSources: [],
    rubberTreeSelectPlant: [],
    perennialPlantSelectPlant: [],
    ricePlantSelectPlant: [],
    agronomyPlantSelectPlant: [],
    riceDoing: null,
    checkboxDoingAgiculturePage: null,
    agiSelectRice: null,
    agiSelectAgronomy: null,
    agiSelectRubber: null,
    agiSelectPerennial: null,
    agiSelectHerbsPlant: null,
    agiSelectFlowerCrop: null,
    agiSelectMushroomPlant: null,
    agiSelectAnimalFarm: null,
    agiSelectAquaticAnimals: null,
    otherBuildingType: null,
    arraySkipPage: null,
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
    checkHeadfamily: null,
    backToRoot: null,
    back: null,
    dataOfUnit: null,

};

export function reducer(state: HouseHoldState = initialState, action: HouseHoldActionsType): HouseHoldState {
    switch (action.type) {
        case HouseHoldTypes.LoadListSuccess:
            return {
                ...state,
            };
        case HouseHoldTypes.LoadHouseHoldSampleSuccess:
            return {
                ...state,
                houseHoldSample: action.payload,
            };
        case HouseHoldTypes.SetSelectG1234:
            return {
                ...state,
                selectG1234: action.payload,
                nextPageDirection: listPagesToCheck({
                    ...state,
                    selectG1234: action.payload
                }),
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
        case HouseHoldTypes.SetWaterSource:
            return {
                ...state,
                waterSources: action.payload,
            };
        case HouseHoldTypes.SetAgronomyPlantDoing:
            return {
                ...state,
                agronomyPlantDoing: action.payload,
            };
        case HouseHoldTypes.SetCheckboxDoingAgiculturePage:
            return {
                ...state,
                checkboxDoingAgiculturePage: action.payload,
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
        case HouseHoldTypes.SetAgiSelectHerbPlant:
            return {
                ...state,
                agiSelectHerbsPlant: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectFlowerCrop:
            return {
                ...state,
                agiSelectFlowerCrop: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectMushroomPlant:
            return {
                ...state,
                agiSelectMushroomPlant: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectAnimalFarm:
            return {
                ...state,
                agiSelectAnimalFarm: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectAquaticAnimals:
            return {
                ...state,
                agiSelectAquaticAnimals: action.payload,
            };
        case HouseHoldTypes.SetArraySkipPage:
            return {
                ...state,
                arraySkipPage: action.payload,
            };

        case HouseHoldTypes.SetArraySkipPageAgiculture:
            return {
                ...state,
                arraySkipPageAgiculture: action.payload,
                nextPageDirection: listPagesToCheck({
                    ...state,
                    arraySkipPageAgiculture: action.payload,
                }),
            };
        case HouseHoldTypes.SetCheckWaterPlumbing:
            return {
                ...state,
                checkWaterPlumbing: isCheckWater(state.checkWaterPlumbing, action.payload),
                nextPageDirection: listPagesToCheck({
                    ...state,
                    checkWaterPlumbing: isCheckWater(state.checkWaterPlumbing, action.payload),
                }),
            };
        case HouseHoldTypes.SetCheckWaterRiver:
            return {
                ...state,
                checkWaterRiver: isCheckWater(state.checkWaterRiver, action.payload),
                nextPageDirection: listPagesToCheck({
                    ...state,
                    checkWaterRiver: isCheckWater(state.checkWaterRiver, action.payload),
                }),
            };
        case HouseHoldTypes.SetCheckWaterIrrigation:
            return {
                ...state,
                checkWaterIrrigation: isCheckWater(state.checkWaterIrrigation, action.payload),
                nextPageDirection: listPagesToCheck({
                    ...state,
                    checkWaterIrrigation: isCheckWater(state.checkWaterIrrigation, action.payload),
                }),
            };
        case HouseHoldTypes.SetCheckWaterRain:
            return {
                ...state,
                checkWaterRain: isCheckWater(state.checkWaterRain, action.payload),
                nextPageDirection: listPagesToCheck({
                    ...state,
                    checkWaterRain: isCheckWater(state.checkWaterRain, action.payload),
                }),
            };
        case HouseHoldTypes.SetCheckWaterBuying:
            return {
                ...state,
                checkWaterBuying: isCheckWater(state.checkWaterBuying, action.payload),
                nextPageDirection: listPagesToCheck({
                    ...state,
                    checkWaterBuying: isCheckWater(state.checkWaterBuying, action.payload),
                }),
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
        case HouseHoldTypes.SetHeadFamily:
            return {
                ...state,
                checkHeadfamily: action.payload,
            };
        case HouseHoldTypes.SetArrayIsCheck:
            return {
                ...state,
                arrayIsCheck: action.payload,
            };
        case HouseHoldTypes.SetSelectorIndex:
            return {
                ...state,
                selectorIndex: action.payload,
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
        case HouseHoldTypes.LoadDataOfUnitSuccess:
            return {
                ...state,
                dataOfUnit: action.payload,
            };


        default:
            return state;
    }
}

function listPagesToCheck(state: HouseHoldState): Array<boolean> {
    console.log(JSON.stringify(state.selectG1234));
    let arr: Array<boolean> = state.nextPageDirection;
    arr[0] = (state.selectG1234.isHouseHold) ? true : false;
    arr[20] = (state.selectG1234.isHouseHold) ? true : false;
    arr[1] = (state.selectG1234.isAgriculture) ? true : false;
    arr[11] = (state.selectG1234.isFactorial) ? true : false;
    arr[12] = (state.selectG1234.isCommercial) ? true : false;
    for (let i = 2; i <= 10; i++) {
        arr[i] = arr[1]
    }
    if (state.arraySkipPageAgiculture) {
        arr[2] = (state.arraySkipPageAgiculture.ricePlant.doing) ? true : false;
        arr[3] = (state.arraySkipPageAgiculture.agronomyPlant.doing) ? true : false;
        arr[4] = (state.arraySkipPageAgiculture.rubberTree.doing) ? true : false;
        arr[5] = (state.arraySkipPageAgiculture.perennialPlant.doing) ? true : false;
        arr[6] = (state.arraySkipPageAgiculture.herbsPlant.doing) ? true : false;
        arr[7] = (state.arraySkipPageAgiculture.flowerCrop.doing) ? true : false;
        arr[8] = (state.arraySkipPageAgiculture.mushroomPlant.doing) ? true : false;
        arr[9] = (state.arraySkipPageAgiculture.animalFarm.doing) ? true : false;
        arr[10] = (state.arraySkipPageAgiculture.aquaticAnimals.doing) ? true : false;
    }
    console.log(JSON.stringify(state.checkWaterPlumbing));
    console.log(JSON.stringify(state.checkWaterRiver));
    console.log(JSON.stringify(state.checkWaterIrrigation));
    console.log(JSON.stringify(state.checkWaterRain));
    console.log(JSON.stringify(state.checkWaterBuying));

    arr[13] = (state.checkWaterPlumbing) ? true : false;
    arr[15] = (state.checkWaterRiver) ? true : false;
    arr[17] = (state.checkWaterIrrigation) ? true : false;
    arr[18] = (state.checkWaterRain) ? true : false;
    arr[19] = (state.checkWaterBuying) ? true : false;


    return arr;
}

function isCheckWater(checkWater: boolean, payload: boolean): boolean {
    return checkWater ? true : payload;
}