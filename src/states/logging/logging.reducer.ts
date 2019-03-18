import { LoggingActionsType, LoggingTypes } from "./logging.actions";

export interface LoggingState {
    userData: any,
    dataWorkEA: any,
    countOfWorks: any,
    countOfBuilding: any,
    dataHomeBuilding: any,
    // idHomes: any,
    dataBuilding: any,
    stateLogin: any,
    storeWorkEaOneRecord: any,
    isCheckShow: any,
    backToRoot: boolean,
    communityList: any[],
    communityForEdit: any,
}

const initialState: LoggingState = {
    userData: null,
    dataWorkEA: null,
    countOfWorks: null,
    countOfBuilding: null,
    dataHomeBuilding: null,
    // idHomes: null,
    dataBuilding: null,
    stateLogin: null,
    storeWorkEaOneRecord: null,
    isCheckShow: null,
    backToRoot: false,
    communityList: [],
    communityForEdit: null
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
        // case LoggingTypes.SetIdEaWorkHomes:
        //     return {
        //         ...state,
        //         idHomes: action.payload,
        //     };
        case LoggingTypes.LoadDataBuildingForEditSuccess:
            return {
                ...state,
                dataBuilding: action.payload,
            };
        case LoggingTypes.SetLoginSuccess:
            return {
                ...state,
                stateLogin: action.payload,
            };

        case LoggingTypes.StoreWorkEAOneRecord:
            return {
                ...state,
                storeWorkEaOneRecord: action.payload,
            }
        case LoggingTypes.SetIsCheckShow:
            return {
                ...state,
                isCheckShow: action.payload,
            };
        case LoggingTypes.SetBackToRoot:
            return {
                ...state,
                backToRoot: action.payload,
            };
        case LoggingTypes.LoadCommunitySuccess:
            return {
                ...state,
                communityList: action.payload,
            };
        case LoggingTypes.LoadCommunityForEditSuccess:
            return {
                ...state,
                communityForEdit: action.payload,
            };
        default:
            return state;
    }
}