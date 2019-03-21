import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BuildingState } from './building.reducer';
import { BuildingTypes } from './building.actions';

const getBuildingFeatureState = createFeatureSelector<BuildingState>(BuildingTypes.StateName);

export const getBuildingSample = createSelector(
    getBuildingFeatureState,
    state => state.buildingSample,
);

export const getBuildingList = createSelector(
    getBuildingFeatureState,
    state => state.buildings,
);

export const getRecieveDataFromBuilding = createSelector(
    getBuildingFeatureState,
    state => state.recieveDataFromBuilding,
);

export const getSendBuildingType = createSelector(
    getBuildingFeatureState,
    state => state.sendBuildingType,
);

export const setHomeBuilding = createSelector(
    getBuildingFeatureState,
    state => state.setDataBuilding,
);

export const getOtherBuildingType = createSelector(
    getBuildingFeatureState,
    state => state.otherBuildingType,
);




