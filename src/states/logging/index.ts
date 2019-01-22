import  { LoggingState } from "./logging.reducer";
import  { LoggingTypes } from "./logging.actions";
import  { createFeatureSelector, createSelector } from "@ngrx/store";

const getLoggingFeatureState = createFeatureSelector<LoggingState>(LoggingTypes.StateName);

export const getUserData = createSelector(
    getLoggingFeatureState,
    state => state.userData
);

export const getDataWorkEA = createSelector(
    getLoggingFeatureState,
    state => state.dataWorkEA
);

export const getCountOfaWorkEA = createSelector(
    getLoggingFeatureState,
    state => state.countOfWorks
);

export const getHomeBuilding = createSelector(
    getLoggingFeatureState,
    state => state.dataHomeBuilding,
);
export const getCountHomeBuilding = createSelector(
    getLoggingFeatureState,
    state => state.countOfBuilding,
);
export const getIdEsWorkHomes = createSelector(
    getLoggingFeatureState,
    state => state.idHomes,
);

