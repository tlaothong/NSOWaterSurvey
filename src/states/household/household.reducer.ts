import { HouseHoldActionsType, HouseHoldTypes } from "./household.actions";


export interface HouseHoldState {
    units: any,
    houseHoldSample: any,
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
    waterSources: any,
    rubberTreeSelectPlant: any[],
    perennialPlantSelectPlant: any[],
    ricePlantSelectPlant: any[],
    agronomyPlantSelectPlant: any[],
    riceDoing: any;
}

const initialState: HouseHoldState = {
    units: [],
    houseHoldSample: null,
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
    waterSources: null,
    rubberTreeSelectPlant: [],
    perennialPlantSelectPlant: [],
    ricePlantSelectPlant: [],
    agronomyPlantSelectPlant: [],
    riceDoing: null,
};

export function reducer(state: HouseHoldState = initialState, action: HouseHoldActionsType): HouseHoldState {
    switch (action.type) {
        case HouseHoldTypes.LoadListSuccess:
            return {
                ...state,
            };
        case HouseHoldTypes.LoadSuccess:
            return {
                ...state,
                houseHoldSample: action.payload,
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
        default:
            return state;
    }
}