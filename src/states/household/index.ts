import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HouseHoldState } from './household.reducer';
import { HouseHoldTypes } from './household.actions';

const getHouseHoldFeatureState = createFeatureSelector<HouseHoldState>(HouseHoldTypes.StateName);

export const getHouseHoldUnitList = createSelector(
    getHouseHoldFeatureState,
    state => state.units,
);

export const getHouseHoldSample = createSelector(
    getHouseHoldFeatureState,
    state => state.houseHoldSample,
);

export const getIsHouseHold = createSelector(
    getHouseHoldFeatureState,
    state => state.isHouseHold,
);

export const getIsAgriculture = createSelector(
    getHouseHoldFeatureState,
    state => state.isAgriculture,
);

export const getIsFactorial = createSelector(
    getHouseHoldFeatureState,
    state => state.isFactorial,
);

export const getIsCommercial = createSelector(
    getHouseHoldFeatureState,
    state => state.isCommercial,
);

export const getFactorialCategory = createSelector(
    getHouseHoldFeatureState,
    state => state.factorialCategory,
);

export const getWaterSource = createSelector(
    getHouseHoldFeatureState,
    state => state.waterSources,
);

export const getCommercialServiceType = createSelector(
    getHouseHoldFeatureState,
    state => state.commercialServiceType,
);

export const getOtherBuildingType = createSelector(
    getHouseHoldFeatureState,
    state => state.otherBuildingType,
);

export const getResidentialGardeningUse = createSelector(
    getHouseHoldFeatureState,
    state => state.residentialGardeningUse,
);

export const getAgronomyPlantDoing = createSelector(
    getHouseHoldFeatureState,
    state => state.agronomyPlantDoing,
);

export const getRubberTreeSelectPlant = createSelector(
    getHouseHoldFeatureState,
    state => state.rubberTreeSelectPlant,
);

export const getRicePlantSelectPlant = createSelector(
    getHouseHoldFeatureState,
    state => state.ricePlantSelectPlant,
);

export const getPerennialPlantSelectPlant = createSelector(
    getHouseHoldFeatureState,
    state => state.perennialPlantSelectPlant,
);

export const getAgronomyPlantSelectPlant = createSelector(
    getHouseHoldFeatureState,
    state => state.agronomyPlantSelectPlant,
);

export const getRiceDoing = createSelector(
    getHouseHoldFeatureState,
    state => state.riceDoing,
);

export const getAgiSelectRice = createSelector(
    getHouseHoldFeatureState,
    state => state.agiSelectRice,
);

export const getAgiSelectAgronomy = createSelector(
    getHouseHoldFeatureState,
    state => state.agiSelectAgronomy,
);

export const getAgiSelectRubber = createSelector(
    getHouseHoldFeatureState,
    state => state.agiSelectRubber,
);

export const getAgiSelectPerennial = createSelector(
    getHouseHoldFeatureState,
    state => state.agiSelectPerennial,
);

export const getAgiSelectHerbPlant = createSelector(
    getHouseHoldFeatureState,
    state => state.agiSelectHerbsPlant,
);
export const getAgiSelectFlowerCrop = createSelector(
    getHouseHoldFeatureState,
    state => state.agiSelectFlowerCrop,
);
export const getAgiSelectMushroomPlant = createSelector(
    getHouseHoldFeatureState,
    state => state.agiSelectMushroomPlant,
);
export const getAgiSelectAnimalFarm = createSelector(
    getHouseHoldFeatureState,
    state => state.agiSelectAnimalFarm,
);
export const getAgiSelectAquaticAnimals = createSelector(
    getHouseHoldFeatureState,
    state => state.agiSelectAquaticAnimals,
);
export const getArraySkipPage = createSelector(
    getHouseHoldFeatureState,
    state => state.arraySkipPage,
);
// export const getArraySkipPageWaterSources = createSelector(
//     getHouseHoldFeatureState,
//     state => state.arraySkipPageWaterSources,
// );