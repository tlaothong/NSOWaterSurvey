import { Action } from '@ngrx/store';

export enum LoggingTypes {
    StateName = "Logging",
    LoadUserInformation = "[L] Load User Information",
    LoadUserInformationSuccess = "[L] Loaded User Information Success",
    SetUserPassword = "[L] Set User Password",
    SetUserPasswordSuccess = "[L] Set User Password Success",    
    LoadDataWorkEA = "[L] Load Data Work EA",
    LoadDataWorkEASuccess = "[L] Load Data Work EA Success",
}

export class LoadUserInformation implements Action {
    readonly type = LoggingTypes.LoadUserInformation;
    constructor(public payload: string) { }
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

export class LoadDataWorkEA implements Action {
    readonly type = LoggingTypes.LoadDataWorkEA;
    constructor(public payload: string) { }
}

export class LoadDataWorkEASuccess implements Action {
    readonly type = LoggingTypes.LoadDataWorkEASuccess;

    constructor(public payload: any[]) {
    }
}

export type LoggingActionsType =
    LoadUserInformationSuccess
    | LoadUserInformation
    | SetUserPassword
    | SetUserPasswordSuccess
    | LoadDataWorkEA
    | LoadDataWorkEASuccess
    ;