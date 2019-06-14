import { BootupActionsType, BootupTypes } from "./bootup.actions";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { EA } from "../../models/mobile/MobileModels";


export interface BootupState {
    userId: string;
    EAs: EA[];
    currentEaCode: string;
    currentStatusState:string;
}


const initialState: BootupState = {
    userId: null,
    EAs: [],
    currentEaCode: null,
    currentStatusState:null,
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
        case BootupTypes.SetCurrentStatusState:
            return {
                ...state,
                currentStatusState: action.payload,
            };
        default:
            return state;
    }
}