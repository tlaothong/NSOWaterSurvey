import { LoggingActionsType, LoggingTypes } from "./logging.actions";

export interface LoggingState {
    userInformation: any,
    dataWorkEA: any
}

const initialState: LoggingState = {
    userInformation: null,
    dataWorkEA: null
}

export function reducer(state: LoggingState = initialState, action: LoggingActionsType): LoggingState {
    switch (action.type) {
        case LoggingTypes.LoadUserInformationSuccess:
            return {
                ...state,
                userInformation: action.payload
            };
        case LoggingTypes.LoadDataWorkEASuccess:
            return {
                ...state,
                dataWorkEA: action.payload
            };
        default:
            return state;
    }
}