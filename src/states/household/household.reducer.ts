import { HouseHoldActionsType, HouseHoldTypes } from "./household.actions";


export interface HouseHoldState {
    units: any,
    houseHoldSample: any,
    factorialCategory: string,
    factorialWaterSources: any,
    residentialWaterSources: any,
    residentialGardeningUse: any,
    commercialServiceType: any,
    commercialWaterSources: any,
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
    ricePlantWaterSources: any,
    agronomyPlantWaterSources: any,
    rubberTreeWaterSources: any,
    perennialPlantWaterSources: any,
    herbsPlantWaterSources: any,
    flowerCropWaterSources: any,
    mushroomPlantWaterSources: any,
    animalFarmWaterSources: any,
    aquaticAnimalsWaterSources: any,



}

const initialState: HouseHoldState = {
    units: [],
    houseHoldSample: null,
    factorialCategory: null,
    factorialWaterSources: null,
    residentialWaterSources: null,
    residentialGardeningUse: null,
    commercialServiceType: null,
    commercialWaterSources: null,
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
    agronomyPlantDoing: null,
    rubberTreeDoing: null,
    perennialPlantDoing: null,
    ricePlantWaterSources: null,
    agronomyPlantWaterSources: null,
    rubberTreeWaterSources: null,
    perennialPlantWaterSources: null,
    herbsPlantWaterSources: null,
    flowerCropWaterSources: null,
    mushroomPlantWaterSources: null,
    animalFarmWaterSources: null,
    aquaticAnimalsWaterSources: null,
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
        default:
            return state;
    }
}