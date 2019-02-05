import { CommunityActionsType, CommunityTypes } from "./community.actions";


export interface CommunityState {
    units: any,
    communitySample: any,
    getWorkEA: any,
    setCommunity: any,
    communityList: any,
}

const initialState: CommunityState = {
    units: [],
    communitySample: null,
    getWorkEA: [],
    setCommunity: null,
    communityList: [],
};

export function reducer(state: CommunityState = initialState, action: CommunityActionsType): CommunityState {
    switch (action.type) {
        case CommunityTypes.LoadListSuccess:
            return {
                ...state,
            };
        case CommunityTypes.LoadSuccess:
            return {
                ...state,
                communitySample: action.payload,
            };
        case CommunityTypes.SetCommunitySuccess:
            return {
                ...state,
                setCommunity: action.payload,
            };
      
        default:
            return state;
    }
}