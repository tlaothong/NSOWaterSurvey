import  { LoggingState } from "./logging.reducer";
import  { LoggingTypes } from "./logging.actions";
import  { createFeatureSelector, createSelector } from "@ngrx/store";

const getLoggingFeatureState = createFeatureSelector<LoggingState>(LoggingTypes.StateName);

export const getUserInformation = createSelector(
    getLoggingFeatureState,
    state => state.userInformation
);

export const getDataWorkEA = createSelector(
    getLoggingFeatureState,
    state => state.dataWorkEA
);

export const getCountOfaWorkEA = createSelector(
    getLoggingFeatureState,
    state => state.countOfWorks
);

export const getWorkEAbyIdEA = createSelector(
    getLoggingFeatureState,
    state => state.getWorkEA
);