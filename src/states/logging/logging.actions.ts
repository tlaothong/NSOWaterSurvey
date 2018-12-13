import { Action } from '@ngrx/store';

export enum LoggingTypes {
    StateName = "Logging",
    LoadUserInformation = "[L] Load user information",
    LoadUserInformationSuccess = "[L] Loaded user information is success"
}

export class LoadUserInformation implements Action {
    readonly type = LoggingTypes.LoadUserInformation;
    constructor() { }
}

export class LoadUserInformationSuccess implements Action {
    readonly type = LoggingTypes.LoadUserInformationSuccess;
    constructor(public payload: any) { }
}

export type LoggingActionsType =
    LoadUserInformationSuccess
    | LoadUserInformation;