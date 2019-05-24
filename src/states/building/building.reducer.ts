import { BuildingActionsType, BuildingTypes, LoadBuildingListSuccess } from "./building.actions";
import { BuildingInList, Building, ResolutionsEA } from "../../models/mobile/MobileModels";


export interface BuildingState {
    buildings: BuildingInList[],
    buildingSample: Building,
    sendDataBuilding: any,
    sendBuildingType: any,
    recieveDataFromBuilding: any,
    setDataBuilding: any,
    otherBuildingType: any,
    unitCount: number,
    arrResol: ResolutionsEA[],
}

const initialState: BuildingState = {
    buildings: [],
    buildingSample: null,
    sendDataBuilding: null,
    sendBuildingType: null,
    recieveDataFromBuilding: null,
    setDataBuilding: null,
    otherBuildingType: null,
    unitCount: 0,
    arrResol: [],
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
        case BuildingTypes.SaveBuildingSuccess:
            let b = switchStateBuilding(action.payload);
            // console.log(JSON.stringify(action.payload));

            return {
                ...state,
                setDataBuilding: action.payload,
                buildingSample: action.payload,
                sendBuildingType: b.sendBuildingType,
                otherBuildingType: b.otherBuildingType,
                recieveDataFromBuilding: b.recieveDataFromBuilding,
                unitCount: action.payload ? action.payload.unitCount : 0,
            };
        //--------------------
        case BuildingTypes.SetOtherBuildingType:
            return {
                ...state,
                otherBuildingType: action.payload,
            };

        case BuildingTypes.SetArrResol:
            return {
                ...state,
                arrResol: action.payload,
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