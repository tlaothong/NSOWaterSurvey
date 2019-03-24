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
    status: string; // formerly 'class'
}

export interface Building {
    _id: string;
    ea: string;
    name: string;
    houseNo: string;
    unitCount: number;
}

export interface HouseHoldUnit {
    _id: string;
    ea: string;
    buildingId: string;
    subUnit: SubUnit;
    [x: string]: any;
}

export interface SubUnit {
    roomNumber: string;
    accessCount: number;
    [x: string]: any;
}