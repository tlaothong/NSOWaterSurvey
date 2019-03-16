import { BootupActionsType, BootupTypes } from "./bootup.actions";


export interface BootupState {
    EAs: EA[];
    currentEaCode: string;
}

export interface EA {
    code: string;
    Area_Code: string;
    REG: string;
    REG_NAME: string;
    CWT: string;
    CWT_NAME: string;
    AMP: string;
    AMP_NAME: string;
    TAM: string;
    TAM_NAME: string;
    DISTRICT: number;
    MUN?: string;
    MUN_NAME?: string;
    TAO?: string;
    TAO_NAME?: string;
    EA: string;
    VIL: string;
    VIL_NAME: string;
    MAP_STATUS?: number;
    Building?: number;
    Household?: number;
    population?: number;
    Agricultural_HH?: number;
    ES_BUSI?: string;
    ES_INDUS?: string;
    ES_HOTEL?: string;
    ES_PV_HOS?: string;
    REMARK?: string;
  };

const initialState: BootupState = {
    EAs: [],
    currentEaCode: null,
};

export function reducer(state: BootupState = initialState, action: BootupActionsType): BootupState {
    switch (action.type) {
        case BootupTypes.LoadSuccess:   // TODO: Complete this later
            return {
                ...state,
                EAs: [{
                    code: "11001011000002",
                    "Area_Code": "100101",
                    "REG": "1",
                    "REG_NAME": "กรุงเทพมหานคร",
                    "CWT": "10",
                    "CWT_NAME": "กรุงเทพมหานคร",
                    "AMP": "01",
                    "AMP_NAME": "พระนคร",
                    "TAM": "01",
                    "TAM_NAME": "พระบรมมหาราชวัง",
                    "DISTRICT": 1,
                    "MUN": "000",
                    "MUN_NAME": "กรุงเทพมหานคร",
                    "TAO": "",
                    "TAO_NAME": "",
                    "EA": "002",
                    "VIL": "00",
                    "VIL_NAME": "",
                    "MAP_STATUS": 1,
                    "Building": 75,
                    "Household": 73,
                    "population": 405,
                    "Agricultural_HH": 0,
                    "ES_BUSI": "93",
                    "ES_INDUS": "5",
                    "ES_HOTEL": "",
                    "ES_PV_HOS": "",
                    "REMARK": "วัด 1 แห่ง  , สถานที่ราชการ 1 แห่ง ,โรงเรียน 1 แห่ง, มหาวิทยาลัย 1 แห่ง",
                }]
            };
        case BootupTypes.SetCurrentWorkingEA:
            return {
                ...state,
                currentEaCode: action.payload,
            };
        default:
            return state;
    }
}