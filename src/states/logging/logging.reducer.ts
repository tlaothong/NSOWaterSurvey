import { LoggingActionsType, LoggingTypes } from "./logging.actions";

export interface LoggingState {
    userInformation: any
}

const initialState: LoggingState = {
    userInformation: null
}

export function reducer(state: LoggingState = initialState, action: LoggingActionsType): LoggingState {
    switch (action.type) {
        case LoggingTypes.LoadUserInformationSuccess:
            return {
                ...state,
                userInformation : action.payload
            };
        default:
            return state;
    }
}