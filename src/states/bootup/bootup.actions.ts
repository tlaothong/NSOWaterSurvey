import { Action } from '@ngrx/store';

export enum BootupTypes {
    StateName = "Bootup",
    Load = "[BT] Load",
    LoadSuccess = "[BT] Load Success",
    SetCurrentWorkingEA = "[BT] Set Current Working EA",
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

export class SetCurrentWorkingEA implements Action {
    readonly type = BootupTypes.SetCurrentWorkingEA;

    constructor(public payload: string) {
    }
}

export type BootupActionsType =
    LoadBootstrap
    | LoadBootstrapSuccess
    | SetCurrentWorkingEA
    ;