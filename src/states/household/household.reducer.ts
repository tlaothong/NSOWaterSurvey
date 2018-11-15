import { HouseHoldActionsType, HouseHoldTypes } from "./household.actions";


export interface HouseHoldState {
    units: any,
    houseHoldSample: any,
    isCheckWaterActivity: any;

}

const initialState: HouseHoldState = {
    units: [],
    houseHoldSample: null,
    isCheckWaterActivity: null,
};

export function reducer(state: HouseHoldState = initialState, action: HouseHoldActionsType): HouseHoldState {
    switch (action.type) {
        case HouseHoldTypes.LoadListSuccess:
            return {
                ...state,
            };
        case HouseHoldTypes.LoadSuccess:
            return {
                ...state,
                houseHoldSample: action.payload,
            };
        case HouseHoldTypes.SetWaterActivity:
            return {
                ...state,
                houseHoldSample: action.payload,
            };
        default:
            return state;
    }
}