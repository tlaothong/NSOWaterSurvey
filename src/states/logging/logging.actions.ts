import { Action } from '@ngrx/store';

export enum LoggingTypes {
    StateName = "Logging",
    SetUserPassword = "[L] Set User Password",
    LoadDataWorkEASuccess = "[L] Load Data Work EA Success",
    LoadDataWorkEA = "[L] Load Data Work EA",
    SetUserPasswordSuccess = "[L] Set User Password Success",
    LoadUserDataByQRCode = "[L] Load User Data From QR code",
    LoadUserDataById = "[L] Load User From ID",
    LoadUserDataSuccess = "[L] Loaded User Data Success",
    LoadCountOfWorks = "[L] Load Count of Works",
    LoadCountOfWorksSuccess = "[L] Load Count of Works Success",
    LoadWorkByIdEA = "[L] Load Select Data WorkEA",
    LoadWorkByIdEASuccess = "[L] Load Select Data WorkEA Success",
    LoadHomeBuilding = "[BLD] Load Home Building",
    LoadHomeBuildingSuccess = "[BLD] Load Home Building Success",
    LoadCountOfHomeBuilding = "[BLD] Load Count Home Building",
    LoadCountOfHomeBuildingSuccess = "[BLD] Load Count Home Building Success",
    SetHomeBuilding = "[BLD] Set Home Building",
    SetHomeBuildingSuccess = "[BLD] Set Home Building Success",
}

export class LoadUserDataByQRCode implements Action {
    readonly type = LoggingTypes.LoadUserDataByQRCode;
    constructor(public qrcode: string) { }
}
export class LoadUserDataById implements Action {
    readonly type = LoggingTypes.LoadUserDataById;
    constructor(public id: string) { }
}
export class LoadUserDataSuccess implements Action {
    readonly type = LoggingTypes.LoadUserDataSuccess;
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
    constructor(public payload: any[]) { }
}

export class LoadHomeBuilding implements Action {
    readonly type = LoggingTypes.LoadHomeBuilding;
    constructor() { }
}

export class LoadHomeBuildingSuccess implements Action {
    readonly type = LoggingTypes.LoadHomeBuildingSuccess;
    constructor(public payload: any[]) { }
}

export class LoadCountOfHomeBuilding implements Action {
    readonly type = LoggingTypes.LoadCountOfHomeBuilding;
    constructor() { }
}

export class LoadCountOfHomeBuildingSuccess implements Action {
    readonly type = LoggingTypes.LoadCountOfHomeBuildingSuccess;
    constructor(public payload: any) { }
}


export class SetHomeBuilding implements Action {
    readonly type = LoggingTypes.SetHomeBuilding;
    constructor(public payload: any) { }
}

export class SetHomeBuildingSuccess implements Action {
    readonly type = LoggingTypes.SetHomeBuildingSuccess;
    constructor() { }
}



export type LoggingActionsType =
    LoadUserDataSuccess
    | LoadUserDataByQRCode
    | LoadUserDataById
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