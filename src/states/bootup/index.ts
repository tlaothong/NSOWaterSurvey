import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BootupState } from './bootup.reducer';
import { BootupTypes } from './bootup.actions';

const getBootstrapFeatureState = createFeatureSelector<BootupState>(BootupTypes.StateName);

export const getListOfEAs = createSelector(
    getBootstrapFeatureState,
    state => state.EAs,
);

const getCurrentWorkingEaCode = createSelector(
    getBootstrapFeatureState,
    state => state.currentEaCode,
);

export const getCurrentWorkingEA = createSelector(
    getListOfEAs,
    getCurrentWorkingEaCode,
    (eas, code) => eas.find(it => it.code == code),
);