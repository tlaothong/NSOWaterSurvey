import { BuildingActionsType, BuildingTypes, BuildingInList, LoadBuildingListSuccess } from "./building.actions";


export interface BuildingState {
    units: any,
    buildings: BuildingInList[],
    buildingSample: any,
    sendDataBuilding: any,
    sendBuildingType: any,
    recieveDataFromBuilding: any,
    setDataBuilding: any,
    otherBuildingType: any,
}

const initialState: BuildingState = {
    units: [],
    buildings: [],
    buildingSample: null,
    sendDataBuilding: null,
    sendBuildingType: null,
    recieveDataFromBuilding: null,
    setDataBuilding: null,
    otherBuildingType: null,


};

export function reducer(state: BuildingState = initialState, action: BuildingActionsType): BuildingState {
    switch (action.type) {
        case BuildingTypes.LoadListSuccess:
            return {
                ...state,
                buildings: (<LoadBuildingListSuccess>action).payload,
            };
        case BuildingTypes.LoadSuccess:
            return {
                ...state,
                buildingSample: action.payload,
            };

        case BuildingTypes.SetSendDataBuilding:
            return {
                ...state,
                sendDataBuilding: action.payload,
            };
        case BuildingTypes.SetRecieveDataFromBuilding:
            return {
                ...state,
                recieveDataFromBuilding: action.payload,
            };
        case BuildingTypes.SetSendBuildingType:
            return {
                ...state,
                sendBuildingType: action.payload,
            };
        //------bigest---------
        case BuildingTypes.SetHomeBuildingSuccess:
            let b = switchStateBuilding(action.payload);
            console.log(JSON.stringify(action.payload));

            return {
                ...state,
                setDataBuilding: action.payload,
                buildingSample: action.payload,
                sendBuildingType: b.sendBuildingType,
                otherBuildingType: b.otherBuildingType,
                recieveDataFromBuilding: b.recieveDataFromBuilding
            };
        //--------------------
        case BuildingTypes.SetOtherBuildingType:
            return {
                ...state,
                otherBuildingType: action.payload,
            };

        default:
            return state;
    }

}
function switchStateBuilding(model: any): any {
    let buildingType
    let other
    let unitCount
    if (model != null) {
        buildingType = model.buildingType;
        other = model.other;
        unitCount = model.unitCount;
    }
    return {
        sendBuildingType: buildingType,
        otherBuildingType: other,
        recieveDataFromBuilding: unitCount,
    };
}