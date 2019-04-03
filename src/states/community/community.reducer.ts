import { CommunityActionsType, CommunityTypes, LoadCommunityListSuccess } from "./community.actions";


export interface CommunityState {
    communitys: any,
    communitySample: any,
    getWorkEA: any,
    saveCommunity: any,
    communityList: any,
    comNo: string;
}

const initialState: CommunityState = {
    communitys: [],
    communitySample: null,
    getWorkEA: [],
    saveCommunity: null,
    communityList: [],
    comNo: null,
};

export function reducer(state: CommunityState = initialState, action: CommunityActionsType): CommunityState {
    switch (action.type) {
        case CommunityTypes.LoadListSuccess:
            return {
                ...state,
                communitys: (<LoadCommunityListSuccess>action).payload,
            };
        case CommunityTypes.LoadSuccess:
            return {
                ...state,
                communitySample: action.payload,
            };
        case CommunityTypes.SaveCommunitySuccess:
            return {
                ...state,
                communitySample: action.payload,
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