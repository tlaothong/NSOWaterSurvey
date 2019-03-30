export interface BuildingInList {
    buildingId: string;
    status: string;
    houseNo: string;
    name: string;
    completedCount: number;
    unitCount: number;
}

export interface CommunityInList {
    vil: string;
    name: string;
}

export interface UnitInList {
    houseHoldId: string;
    roomNumber: string;
    subUnit: SubUnit;
    accessCount: number;
    lastAccess: number;
    comments: CommentInList[];
    status: string; // formerly 'class'
}

export interface Building {
    _id: string;
    ea: string;
    name: string;
    houseNo: string;
    unitCount: number;
    // TODO: Need to re-consider this?
    status: string;
}

export interface HouseHoldUnit {
    _id: string;
    ea: string;
    buildingId: string;
    subUnit: SubUnit;
    surveyCompleted: SurveyCompletion[];
    comments: CommentInList[];
    [x: string]: any;
}

export interface SubUnit {
    roomNumber: string;
    accessCount: number;
    [x: string]: any;
}

export interface SurveyCompletion {
    name: string;
    isNeed: boolean;
    hasCompleted: boolean;
}

export interface CommentInList {
    at: number;
    text: string;
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
    Center: IGeometry;
};

export interface IGeometry {
    coordinates: number[];
}
