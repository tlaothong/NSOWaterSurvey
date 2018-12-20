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
    LoadWorkByIdEA = "[L] Load Select Data WorkEA",
    LoadWorkByIdEASuccess = "[L] Load Select Data WorkEA Success",
    LoadHomeBuilding = "[BLD] Load Home Building",
    LoadHomeBuildingSuccess = "[BLD] Load Home Building Success",
    LoadCountOfHomeBuilding = "[BLD] Load Count Home Building",
    LoadCountOfHomeBuildingSuccess = "[BLD] Load Count Home Building Success",
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
export class LoadWorkByIdEA implements Action {
    readonly type = LoggingTypes.LoadWorkByIdEA;
    constructor(public payload: string) { }

}
export class LoadWorkByIdEASuccess implements Action {
    readonly type = LoggingTypes.LoadWorkByIdEASuccess;
    constructor(public payload: any) { }
}

export class LoadHomeBuilding implements Action {
    readonly type = LoggingTypes.LoadHomeBuilding;

    constructor() {
    }
}

export class LoadHomeBuildingSuccess implements Action {
    readonly type = LoggingTypes.LoadHomeBuildingSuccess;

    constructor(public payload: any[]) {
    }
}

export class LoadCountOfHomeBuilding implements Action {
    readonly type = LoggingTypes.LoadCountOfHomeBuilding;

    constructor() {
    }
}

export class LoadCountOfHomeBuildingSuccess implements Action {
    readonly type = LoggingTypes.LoadCountOfHomeBuildingSuccess;

    constructor(public payload: any) {
    }
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
    | LoadWorkByIdEA
    | LoadWorkByIdEASuccess
    | LoadHomeBuilding
    | LoadHomeBuildingSuccess
    | LoadCountOfHomeBuilding
    | LoadCountOfHomeBuildingSuccess
    ;