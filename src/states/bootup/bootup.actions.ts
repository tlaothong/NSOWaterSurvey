import { Action } from '@ngrx/store';
import { EA } from '../../models/mobile/MobileModels';

export enum BootupTypes {
    StateName = "Bootup",
    Load = "[BT] Load",
    LoadSuccess = "[BT] Load Success",
    Login = "[BT] Login",
    LoginSuccess = "[BT] Login Success",
    DownloadUserToMobile = "[BT] Download User Cloud Data To Mobile",
    DownloadUserToMobileSuccess = "[BT] User Cloud Data Downloaded To Mobile Successfully",
    SetCurrentWorkingEA = "[BT] Set Current Working EA",
    SetCurrentWorkingEA4NoLogin = "[BT] Set Current Working EA For No Login",
    CurrentWorkingEaChanged = "[BT] Current Working EA has Changed",
    SetCurrentStatusState = "[BT] Current Status State ",
}

export class LoadBootstrap implements Action {
    readonly type = BootupTypes.Load;

    constructor() {
    }
}

export class LoadBootstrapSuccess implements Action {
    readonly type = BootupTypes.LoadSuccess;

    constructor(public payload: any) {
    }
}

export class LoginUser implements Action {
    readonly type = BootupTypes.Login;

    // TODO: params
    constructor(public userId: string) {
    }
}

export class LoginUserSuccess implements Action {
    readonly type = BootupTypes.LoginSuccess;

    // TODO: params
    constructor(public userId: string) {
    }
}

export class DownloadUserToMobile implements Action {
    readonly type = BootupTypes.DownloadUserToMobile;

    constructor() {
    }
}

export class DownloadUserToMobileSuccess implements Action {
    readonly type = BootupTypes.DownloadUserToMobileSuccess;

    // TODO: Add more info other than just EAs
    constructor(public eas: EA[]) {
    }
}

export class SetCurrentWorkingEA implements Action {
    readonly type = BootupTypes.SetCurrentWorkingEA;

    constructor(public payload: string) {
        console.log(payload);

    }
}

export class CurrentWorkingEaChanged implements Action {
    readonly type = BootupTypes.CurrentWorkingEaChanged;

    constructor(public payload: string) {
    }
}

export class SetCurrentWorkingEA4NoLogin implements Action {
    readonly type = BootupTypes.SetCurrentWorkingEA4NoLogin;

    constructor(public payload: EA) {
    }
}

export class SetCurrentStatusState implements Action {
    readonly type = BootupTypes.SetCurrentStatusState;

    constructor(public payload: string) {
    }
}

export type BootupActionsType =
    LoadBootstrap
    | LoadBootstrapSuccess
    | LoginUser
    | LoginUserSuccess
    | DownloadUserToMobile
    | DownloadUserToMobileSuccess
    | SetCurrentWorkingEA
    | CurrentWorkingEaChanged
    | SetCurrentStatusState
    | SetCurrentWorkingEA4NoLogin
    ;