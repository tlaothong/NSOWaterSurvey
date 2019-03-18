import { BootupActionsType, BootupTypes } from "./bootup.actions";
import { AppStateProvider } from "../../providers/app-state/app-state";


export interface BootupState {
    userId: string;
    EAs: EA[];
    currentEaCode: string;
}

export interface EA {
    code: string;
    Area_Code: string;
    REG: string;
    REG_NAME: string;
    CWT: string;
    CWT_NAME: string;
    AMP: string;
    AMP_NAME: string;
    TAM: string;
    TAM_NAME: string;
    DISTRICT: number;
    MUN?: string;
    MUN_NAME?: string;
    TAO?: string;
    TAO_NAME?: string;
    EA: string;
    VIL: string;
    VIL_NAME: string;
    MAP_STATUS?: number;
    Building?: number;
    Household?: number;
    population?: number;
    Agricultural_HH?: number;
    ES_BUSI?: string;
    ES_INDUS?: string;
    ES_HOTEL?: string;
    ES_PV_HOS?: string;
    REMARK?: string;
  };

const initialState: BootupState = {
    userId: null,
    EAs: [],
    currentEaCode: null,
};

export function reducer(state: BootupState = initialState, action: BootupActionsType): BootupState {
    switch (action.type) {
        case BootupTypes.LoginSuccess:
            return {
                ...state,
                userId: action.userId,
            };
        case BootupTypes.DownloadUserToMobileSuccess:   // TODO: Complete this later
            return {
                ...state,
                EAs: action.eas,
            };
        case BootupTypes.CurrentWorkingEaChanged:
            return {
                ...state,
                currentEaCode: action.payload,
            };
        default:
            return state;
    }
}