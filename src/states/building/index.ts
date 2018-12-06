import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BuildingState } from './building.reducer';
import { BuildingTypes } from './building.actions';

const getBuildingFeatureState = createFeatureSelector<BuildingState>(BuildingTypes.StateName);

export const getBuildingSample = createSelector(
    getBuildingFeatureState,
    state => state.buildingSample,
);
export const getRecieveDataFromBuilding = createSelector(
    getBuildingFeatureState,
    state => state.recieveDataFromBuilding,
);
export const getSendBuildingType = createSelector(
    getBuildingFeatureState,
    state => state.sendBuildingType,
);

