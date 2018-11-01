import { HouseHoldActionsType, HouseHoldTypes } from "./household.actions";


export interface HouseHoldState {
    units: any,
    houseHoldSample: any,
}

const initialState: HouseHoldState = {
    units: [],
    houseHoldSample: null,
};

export function reducer(state: HouseHoldState = initialState, action: HouseHoldActionsType): HouseHoldState {
    switch (action.type) {
        case HouseHoldTypes.LoadSuccess:
            return {
                ...state,
            };
        default:
            return state;
    }
}