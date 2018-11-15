import { HouseHoldActionsType, HouseHoldTypes } from "./household.actions";

export interface HouseHoldState {
    units: any,
    houseHoldSample: any,
    isHouseHold: boolean,
    isAgriculture: boolean,
    isFactorial: boolean,
    isCommercial: boolean,
}

const initialState: HouseHoldState = {
    units: [],
    houseHoldSample: null,
    isHouseHold: null,
    isAgriculture: null,
    isFactorial: null,
    isCommercial: null,
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
        case HouseHoldTypes.SetIsHouseHold:
            return {
                ...state,
                isHouseHold: action.payload,
            };
        case HouseHoldTypes.SetIsAgriculture:
            return {
                ...state,
                isAgriculture: action.payload,
            };
        case HouseHoldTypes.SetIsFactorial:
            return {
                ...state,
                isFactorial: action.payload,
            };
        case HouseHoldTypes.SetIsCommercial:
            return {
                ...state,
                isCommercial: action.payload,
            };
        default:
            return state;
    }
}