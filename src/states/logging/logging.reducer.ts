import { LoggingActionsType, LoggingTypes } from "./logging.actions";

export interface LoggingState {
    userData: any,
    dataWorkEA: any,
    countOfWorks: any,
    countOfBuilding: any,
    dataHomeBuilding: any,
    idHomes:any,
}

const initialState: LoggingState = {
    userData: null,
    dataWorkEA: null,
    countOfWorks: null,
    countOfBuilding: null,
    dataHomeBuilding: null,
    idHomes:null
}

export function reducer(state: LoggingState = initialState, action: LoggingActionsType): LoggingState {
    switch (action.type) {
        case LoggingTypes.LoadUserDataSuccess:
            return {
                ...state,
                userData: action.payload
            };
        case LoggingTypes.LoadDataWorkEAByUserIdSuccess:
            return {
                ...state,
                dataWorkEA: action.payload
            };
        case LoggingTypes.LoadCountOfWorksSuccess:
            return {
                ...state,
                countOfWorks: action.payload
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
      
        case LoggingTypes.SetIdEaWorkHomesSuccess:
            return {
                ...state,
                idHomes: action.payload,
            };
      
        default:
            return state;
    }
}