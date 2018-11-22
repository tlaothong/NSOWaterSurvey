import { BuildingActionsType, BuildingTypes } from "./building.actions";


export interface BuildingState {
    units: any,
    buildingSample: any,
    recieveDataFromBuilding: any,
}

const initialState: BuildingState = {
    units: [],
    buildingSample: null,
    recieveDataFromBuilding: null,
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
        case BuildingTypes.SetRecieveDataFromBuilding:
            return {
                ...state,
                recieveDataFromBuilding: action.payload,
            };
        default:
            return state;
    }
}