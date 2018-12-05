import { BuildingActionsType, BuildingTypes } from "./building.actions";


export interface BuildingState {
    units: any,
    buildingSample: any,
    sendDataBuilding: any,
    sendBuildingType: any,
}

const initialState: BuildingState = {
    units: [],
    buildingSample: null,
    sendDataBuilding: null,
    sendBuildingType: null,
};

export function reducer(state: BuildingState = initialState, action: BuildingActionsType): BuildingState {
    switch (action.type) {
        case BuildingTypes.LoadListSuccess:
            return {
                ...state,
            };
        case BuildingTypes.LoadSuccess:
            return {
                ...state,
                buildingSample: action.payload,
            };
        case BuildingTypes.SetSendDataBuilding:
            return {
                ...state,
                sendDataBuilding: action.payload,
            };
        case BuildingTypes.SetSendBuildingType:
            return {
                ...state,
                sendBuildingType: action.payload,
            };
        default:
            return state;
    }
}