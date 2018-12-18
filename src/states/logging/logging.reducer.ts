import { LoggingActionsType, LoggingTypes } from "./logging.actions";

export interface LoggingState {
    userInformation: any,
    dataWorkEA: any,
    countOfWorks: any
}

const initialState: LoggingState = {
    userInformation: null,
    dataWorkEA: null,
    countOfWorks: null
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
        case LoggingTypes.LoadCountOfWorksSuccess:
            return {
                ...state,
                countOfWorks: action.payload
            };
        default:
            return state;
    }
}