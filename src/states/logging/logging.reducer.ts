import { LoggingActionsType, LoggingTypes } from "./logging.actions";

export interface LoggingState {
    userInformation: any,
    dataWorkEA: any,
    countOfWorks: any,
    getWorkEA: any,
    countOfBuilding: any,
    dataHomeBuilding: any[],
}

const initialState: LoggingState = {
    userInformation: null,
    dataWorkEA: null,
    countOfWorks: null,
    getWorkEA: null,
    countOfBuilding: null,
    dataHomeBuilding: [],
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
        case LoggingTypes.LoadWorkByIdEASuccess:
            return {
                ...state,
                getWorkEA: action.payload
            };
        case LoggingTypes.LoadCountOfHomeBuildingSuccess:
            return {
                ...state,
                countOfBuilding: action.payload,
            };
        case LoggingTypes.LoadHomeBuildingSuccess:
            return {
                ...state,
                dataHomeBuilding: action.payload,
            };
        default:
            return state;
    }
}