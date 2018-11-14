import { HouseHoldActionsType, HouseHoldTypes } from "./household.actions";


export interface HouseHoldState {
    units: any,
    houseHoldSample: any,
    factorialCategory: string,
}

const initialState: HouseHoldState = {
    units: [],
    houseHoldSample: null,
    factorialCategory: null,
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
        case HouseHoldTypes.SetFactorialCategory:
            return {
                ...state,
                factorialCategory: action.payload,
            };
        default:
            return state;
    }
}