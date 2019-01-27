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
export const getArraySkipPageAgiculture = createSelector(
    getHouseHoldFeatureState,
    state => state.arraySkipPageAgiculture,
);
export const getCheckWaterPlumbing = createSelector(
    getHouseHoldFeatureState,
    state => state.checkWaterPlumbing,
);
export const getCheckWaterRiver = createSelector(
    getHouseHoldFeatureState,
    state => state.checkWaterRiver,
);
export const getCheckWaterIrrigation = createSelector(
    getHouseHoldFeatureState,
    state => state.checkWaterIrrigation,
);
export const getCheckWaterRain = createSelector(
    getHouseHoldFeatureState,
    state => state.checkWaterRain,
);
export const getCheckWaterBuying = createSelector(
    getHouseHoldFeatureState,
    state => state.checkWaterBuying,
);
export const getWateringResidential = createSelector(
    getHouseHoldFeatureState,
    state => state.wateringResidential,
);
export const getWaterSourcesResidential = createSelector(
    getHouseHoldFeatureState,
    state => state.waterSourcesResidential,
);
export const getWaterSourcesRice = createSelector(
    getHouseHoldFeatureState,
    state => state.waterSourcesRice,
);
export const getWaterSourcesAgiculture = createSelector(
    getHouseHoldFeatureState,
    state => state.waterSourcesAgiculture,
);
export const getWaterSourcesFactory = createSelector(
    getHouseHoldFeatureState,
    state => state.waterSourcesFactory,
);
export const getWaterSourcesCommercial = createSelector(
    getHouseHoldFeatureState,
    state => state.waterSourcesCommercial,
);
export const getNextPageDirection = createSelector(
    getHouseHoldFeatureState,
    state => state.nextPageDirection,
);
export const getCheckHeadFamily = createSelector(
    getHouseHoldFeatureState,
    state => state.checkHeadfamily,
);
export const getArrayIsCheck = createSelector(
    getHouseHoldFeatureState,
    state => state.arrayIsCheck,
);
export const getUnitByIdBuilding = createSelector(
    getHouseHoldFeatureState,
    state => state.unitByIdBuilding,
);