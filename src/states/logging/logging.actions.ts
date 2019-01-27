import { Action } from '@ngrx/store';

export enum LoggingTypes {
    StateName = "Logging",
    SetUserPassword = "[L] Set User Password",
    LoadDataWorkEAByUserIdSuccess = "[L] Load Data Work EA Success",
    LoadDataWorkEAByUserId = "[L] Load Data Work EA",
    SetUserPasswordSuccess = "[L] Set User Password Success",
    LoadUserDataByQRCode = "[L] Load User Data From QR code",
    LoadUserDataById = "[L] Load User From ID",
    LoadUserDataSuccess = "[L] Loaded User Data Success",
    LoadCountOfWorks = "[L] Load Count of Works",
    LoadCountOfWorksSuccess = "[L] Load Count of Works Success",
    LoadHomeBuilding = "[L] Load Home Building",
    LoadHomeBuildingSuccess = "[L] Load Home Building Success",
    LoadCountOfHomeBuilding = "[L] Load Count Home Building",
    LoadCountOfHomeBuildingSuccess = "[L] Load Count Home Building Success",
    SetHomeBuilding = "[L] Set Home Building",
    SetHomeBuildingSuccess = "[L] Set Home Building Success",
    SetIdEaWorkHomes = "[L] Set Id Ea Work Homes",
    DeleteHomeBuilding = "[L] Delete HomeBuilding",
    DeleteHomeBuildingSuccess = "[L] Delete HomeBuilding Success",
    LoadDataBuildingForEdit = "[L] Load Data Building For Edit",
    LoadDataBuildingForEditSuccess = "[L] Load Data Building For Edit Success",
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
export class LoadDataWorkEAByUserId implements Action {
    readonly type = LoggingTypes.LoadDataWorkEAByUserId;
    constructor(public payload: any) { }
}
export class LoadDataWorkEAByUserIdSuccess implements Action {
    readonly type = LoggingTypes.LoadDataWorkEAByUserIdSuccess;
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

export class LoadHomeBuilding implements Action {
    readonly type = LoggingTypes.LoadHomeBuilding;
    constructor(public payload: string) { }
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
export class SetIdEaWorkHomes implements Action {
    readonly type = LoggingTypes.SetIdEaWorkHomes;
    constructor(public payload: string) { }
}

export class DeleteHomeBuilding implements Action {
    readonly type = LoggingTypes.DeleteHomeBuilding;

    constructor(public payload: any) {
    }
}
export class DeleteHomeBuildingSuccess implements Action {
    readonly type = LoggingTypes.DeleteHomeBuildingSuccess;

    constructor() {
    }
}
export class LoadDataBuildingForEdit implements Action {
    readonly type = LoggingTypes.LoadDataBuildingForEdit;

    constructor(public payload: string) {
    }
}
export class LoadDataBuildingForEditSuccess implements Action {
    readonly type = LoggingTypes.LoadDataBuildingForEditSuccess;

    constructor(public payload: any) {
    }
}



export type LoggingActionsType =
    LoadUserDataSuccess
    | LoadUserDataByQRCode
    | LoadUserDataById
    | SetUserPassword
    | SetUserPasswordSuccess
    | LoadDataWorkEAByUserId
    | LoadDataWorkEAByUserIdSuccess
    | LoadCountOfWorks
    | LoadCountOfWorksSuccess
    | LoadHomeBuilding
    | LoadHomeBuildingSuccess
    | LoadCountOfHomeBuilding
    | LoadCountOfHomeBuildingSuccess
    | SetIdEaWorkHomes
    | DeleteHomeBuilding
    | DeleteHomeBuildingSuccess
    | LoadDataBuildingForEdit
    | LoadDataBuildingForEditSuccess
    ;