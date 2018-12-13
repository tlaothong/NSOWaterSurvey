import  { LoggingState } from "./logging.reducer";
import  { LoggingTypes } from "./logging.actions";
import  { createFeatureSelector, createSelector } from "@ngrx/store";

const getLoggingFeatureState = createFeatureSelector<LoggingState>(LoggingTypes.StateName);

export const getUserInformation = createSelector(
    getLoggingFeatureState,
    state => state.userInformation
);