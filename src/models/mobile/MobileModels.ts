export interface BuildingInList {
    buildingId: string;
    status: string;
    houseNo: string;
    name: string;
    completedCount: number;
    unitCount: number;
    lastUpdate: number;
}

export interface CommunityInList {
    communityId: string;
    vil: string;
    name: string;
    status: string;
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

export interface upload1 {
    containerName: string;
    complementary: string;
    sessionId: string;
}

export interface donwloadBlob {
    baseUrl: string;
    complementary: string;
    data: downloadEA[];
}

export interface downloadEA {
    ea: string;
    items: downloadFile[];
    resolutions: ResolutionsEA[];
}
export interface ResolutionsEA {
    _id: string;
    surveyId: string;
    buildingId: string;
    suggestion: string;
    creationDateTime: Date;
    createBy: string;
    resolvedDateTime: Date;
    resolvedBy: string;
    isApproved: boolean;
    containerName: string;
    blobName: string;
}


export interface downloadFile {
    _id: string;
    userId: string;
    url: string;
}

// export interface downloadFile {
//     fileUrl: string;
//     eaCode: string;
//     buildingId: string;
//     userId: string;
// }

export interface Building {
    _id: string;
    ea: string;
    name: string;
    houseNo: string;
    unitCount: number;
    accessCount: number;
    // TODO: Need to re-consider this?
    status: string;
    [x: string]: any;
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

export interface EAwStat extends EA {
    status: string;
}

export interface IGeometry {
    coordinates: number[];
}

export interface ItemInSendPage {
    allbld: number;
    bldComplete: number;
    bldVacancyCount: number;
    bldAbandonedCount: number;
    allunt: number;
    untComplete: number;
    untVacancyCount: number;
    untAbandonedCount: number;
    allcmn: number;
    cmnComplete: number;
}
