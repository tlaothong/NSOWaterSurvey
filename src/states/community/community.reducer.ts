import { CommunityActionsType, CommunityTypes } from "./community.actions";


export interface CommunityState {
    units: any,
    communitySample: any,
    getWorkEA: any,
    setCommunity: any,
    communityList: any,
    comNo: string;
}

const initialState: CommunityState = {
    units: [],
    communitySample: null,
    getWorkEA: [],
    setCommunity: null,
    communityList: [],
    comNo: null,
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
        case CommunityTypes.SetComNo:
            return {
                ...state,
                comNo: action.payload,
            };
        default:
            return state;
    }
}