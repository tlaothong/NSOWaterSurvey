import { LoggingState } from "./logging.reducer";
import { LoggingTypes } from "./logging.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

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
// export const getIdEsWorkHomes = createSelector(
//     getLoggingFeatureState,
//     state => state.idHomes,
// );
export const getDataBuilding = createSelector(
    getLoggingFeatureState,
    state => state.dataBuilding,
);
export const getLogin = createSelector(
    getLoggingFeatureState,
    state => state.stateLogin,
);
export const getStoreWorkEaOneRecord = createSelector(
    getLoggingFeatureState,
    state => state.storeWorkEaOneRecord,
);
export const getIsCheckShow = createSelector(
    getLoggingFeatureState,
    state => state.isCheckShow,
);
export const getBackToRoot = createSelector(
    getLoggingFeatureState,
    state => state.backToRoot,
);

export const getLoadCommunity = createSelector(
    getLoggingFeatureState,
    state => state.communityList,
);
export const getLoadCommunityForEdit = createSelector(
    getLoggingFeatureState,
    state => state.communityForEdit,
);
