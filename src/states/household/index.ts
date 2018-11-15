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