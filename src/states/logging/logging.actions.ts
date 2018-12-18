import { Action } from '@ngrx/store';

export enum LoggingTypes {
    StateName = "Logging",
    SetUserPassword = "[L] Set User Password",
    LoadDataWorkEASuccess = "[L] Load Data Work EA Success",
    LoadDataWorkEA = "[L] Load Data Work EA",
    SetUserPasswordSuccess = "[L] Set User Password Success",
    LoadUserInformation = "[L] Load User Information",
    LoadUserInformationSuccess = "[L] Loaded User Information Success",
    LoadCountOfWorks = "[L] Load Count of Works",
    LoadCountOfWorksSuccess = "[L] Load Count of Works Success",

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
    constructor(public payload: any) { }
}

export class LoadDataWorkEASuccess implements Action {
    readonly type = LoggingTypes.LoadDataWorkEASuccess;
    constructor(public payload: any) { }
}
export class LoadCountOfWorks implements Action {
    readonly type = LoggingTypes.LoadCountOfWorks;
    constructor(public payload: string) { }
}

export class LoadCountOfWorksSuccess implements Action {
    readonly type = LoggingTypes.LoadCountOfWorksSuccess;
    constructor(public payload: any) { }
}

export type LoggingActionsType =
    LoadUserInformationSuccess
    | LoadUserInformation
    | SetUserPassword
    | SetUserPasswordSuccess
    | LoadDataWorkEA
    | LoadDataWorkEASuccess
    | LoadCountOfWorks
    | LoadCountOfWorksSuccess
    ;