import { Action } from '@ngrx/store';

export enum LoggingTypes {
    StateName = "Logging",
    SetUserPassword = "[L] Set user password",
    LoadUserInformation = "[L] Load user information",
    SetUserPasswordSuccess = "[L] Set user password success",
    LoadUserInformationSuccess = "[L] Loaded user information is success",
}

export class LoadUserInformation implements Action {
    readonly type = LoggingTypes.LoadUserInformation;
    constructor() { }
}

export class LoadUserInformationSuccess implements Action {
    readonly type = LoggingTypes.LoadUserInformationSuccess;
    constructor(public payload: any) { }
}

export class SetUserPassword implements Action {
    readonly type = LoggingTypes.SetUserPassword;
    constructor(public payload: any) { }
}

export class SetUserPasswordSuccess implements Action {
    readonly type = LoggingTypes.SetUserPasswordSuccess;
    constructor() { }
}

export type LoggingActionsType =
    LoadUserInformationSuccess
    | LoadUserInformation
    | SetUserPassword
    | SetUserPasswordSuccess
    ;