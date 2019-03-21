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
    // unitNo: number;
    roomNumber: string;
    status: string; // formerly 'class'
}