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

export const getFactorialCategory = createSelector(
    getHouseHoldFeatureState,
    state => state.factorialCategory,
);