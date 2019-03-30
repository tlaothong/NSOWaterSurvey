import { HouseHoldActionsType, HouseHoldTypes, LoadSelectedHouseHold } from "./household.actions";
import { EX_RICH_LIST, EX_RUBBER_LIST } from "../../models/tree";
import { HouseHoldUnit, UnitInList } from "../../models/mobile/MobileModels";

export interface HouseHoldState {
    units: UnitInList[],
    houseHoldSample: HouseHoldUnit,
    selectG1234: any,
    isHouseHold: boolean,
    isAgriculture: boolean,
    isFactorial: boolean,
    isCommercial: boolean,
    factorialCategory: string,
    residentialGardeningUse: any,
    commercialServiceType: any,
    rubberTreeSelectPlant: any[],
    perennialPlantSelectPlant: any[],
    ricePlantSelectPlant: any[],
    agronomyPlantSelectPlant: any[],
    riceDoing: any,
    agiSelectRice: any,
    agiSelectAgronomy: any,
    agiSelectRubber: any,
    agiSelectPerennial: any,
    arraySkipPageAgiculture: any,
    checkWaterPlumbing: any,
    checkWaterRiver: any,
    checkWaterIrrigation: any,
    checkWaterRain: any,
    checkWaterBuying: any,
    wateringResidential: any,
    waterSourcesResidential: any,
    waterSourcesRice: any,
    waterSourcesAgiculture: any,
    waterSourcesFactory: any,
    waterSourcesCommercial: any,
    nextPageDirection: Array<boolean>,
    arrayIsCheck: Array<number>,
    selectorIndex: any,
    unitByIdBuilding: any,
    backToRoot: any,
    back: any,
    dataOfUnit: any,
    numberRoom: string,
    unitNo: string,
    memberCount: number,
    lastName: Array<string>,
}

const initialState: HouseHoldState = {
    units: [],
    houseHoldSample: null,
    selectG1234: null,
    isHouseHold: null,
    isAgriculture: null,
    isFactorial: null,
    isCommercial: null,
    factorialCategory: null,
    residentialGardeningUse: null,
    commercialServiceType: null,
    rubberTreeSelectPlant: [],
    perennialPlantSelectPlant: [],
    ricePlantSelectPlant: [],
    agronomyPlantSelectPlant: [],
    riceDoing: null,
    agiSelectRice: null,
    agiSelectAgronomy: null,
    agiSelectRubber: null,
    agiSelectPerennial: null,
    arraySkipPageAgiculture: null,
    checkWaterPlumbing: null,
    checkWaterRiver: null,
    checkWaterIrrigation: null,
    checkWaterRain: null,
    checkWaterBuying: null,
    wateringResidential: null,
    waterSourcesResidential: null,
    waterSourcesRice: null,
    waterSourcesAgiculture: null,
    waterSourcesFactory: null,
    waterSourcesCommercial: null,
    nextPageDirection: Array<boolean>(),
    arrayIsCheck: Array<number>(),
    selectorIndex: null,
    unitByIdBuilding: [],
    backToRoot: null,
    back: null,
    dataOfUnit: null,
    numberRoom: null,
    unitNo: null,
    memberCount: null,
    lastName: Array<string>(),
};

export function reducer(state: HouseHoldState = initialState, action: HouseHoldActionsType): HouseHoldState {
    switch (action.type) {
        case HouseHoldTypes.LoadListSuccess:
            return {
                ...state,
                units: action.payload,
            };
        case HouseHoldTypes.SaveHouseHoldSuccess: {
            let s = resetStatesForModel(action.payload);
            // console.log("Payload", JSON.stringify(action.payload));
            // console.log(JSON.stringify(s));

            let hh = {
                ...state,
                houseHoldSample: action.payload,
                selectG1234: s.selectG1234,
                isHouseHold: s.isHouseHold,
                isAgriculture: s.isAgriculture,
                isFactorial: s.isFactorial,
                isCommercial: s.isCommercial,
                residentialGardeningUse: s.residentialGardeningUse,
                wateringResidential: s.wateringResidential,
                waterSourcesResidential: s.waterSourcesResidential,
                waterSourcesRice: s.waterSourcesRice,
                waterSourcesAgiculture: s.waterSourcesAgiculture,
                waterSourcesFactory: s.waterSourcesFactory,
                waterSourcesCommercial: s.waterSourcesCommercial,
                arraySkipPageAgiculture: s.agi,
                riceDoing: s.riceDoing,
                agiSelectRice: s.agiSelectRice,
                agiSelectRubber: s.agiSelectRubber,
                agiSelectPerennial: s.agiSelectPerennial,
                ricePlantSelectPlant: s.ricePlantSelectPlant,
                agronomyPlantSelectPlant: s.agronomyPlantSelectPlant,
                rubberTreeSelectPlant: s.rubberTreeSelectPlant,
                perennialPlantSelectPlant: s.perennialPlantSelectPlant,
                factorialCategory: s.factorialCategory,
                commercialServiceType: s.commercialServiceType,
                checkWaterPlumbing: s.checkWaterPlumbing,
                checkWaterRiver: s.checkWaterRiver,
                checkWaterIrrigation: s.checkWaterIrrigation,
                checkWaterRain: s.checkWaterRain,
                checkWaterBuying: s.checkWaterBuying,
                numberRoom: s.numberRoom,
            };

            return {
                ...hh,
                nextPageDirection: listPagesToCheck(hh),
            };
        }

        case HouseHoldTypes.LoadSelectedHouseHold:
            return {
                ...state,
                houseHoldSample: action.payload,
            };

        case HouseHoldTypes.SetSelectG1234:
            return {
                ...state,
                selectG1234: action.payload,
                nextPageDirection: listPagesToCheck({
                    ...state,
                    selectG1234: action.payload
                }),
            };
        case HouseHoldTypes.SetIsHouseHold:
            return {
                ...state,
                isHouseHold: action.payload,
            };
        case HouseHoldTypes.SetIsAgriculture:
            return {
                ...state,
                isAgriculture: action.payload,
            };
        case HouseHoldTypes.SetMemberCount:
            return {
                ...state,
                memberCount: action.payload,
            };
        case HouseHoldTypes.SetIsFactorial:
            return {
                ...state,
                isFactorial: action.payload,
            };
        case HouseHoldTypes.SetIsCommercial:
            return {
                ...state,
                isCommercial: action.payload,
            };
        case HouseHoldTypes.SetFactorialCategory:
            return {
                ...state,
                factorialCategory: action.payload,
            };
        case HouseHoldTypes.SetCommercialServiceType:
            return {
                ...state,
                commercialServiceType: action.payload,
            };
        case HouseHoldTypes.SetResidentialGardeningUse:
            return {
                ...state,
                residentialGardeningUse: action.payload,
            };

        case HouseHoldTypes.SetRicePlantSelectPlant:
            return {
                ...state,
                ricePlantSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetAgronomyPlantSelectPlant:
            return {
                ...state,
                agronomyPlantSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetRubberTreeSelectPlant:
            return {
                ...state,
                rubberTreeSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetPerennialPlantSelectPlant:
            return {
                ...state,
                perennialPlantSelectPlant: action.payload,
            };
        case HouseHoldTypes.SetRiceDoing:
            return {
                ...state,
                riceDoing: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectRice:
            return {
                ...state,
                agiSelectRice: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectAgronomy:
            return {
                ...state,
                agiSelectAgronomy: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectRubber:
            return {
                ...state,
                agiSelectRubber: action.payload,
            };
        case HouseHoldTypes.SetAgiSelectPerennial:
            return {
                ...state,
                agiSelectPerennial: action.payload,
            };
        case HouseHoldTypes.SetArraySkipPageAgiculture:
            return {
                ...state,
                arraySkipPageAgiculture: action.payload,
                nextPageDirection: listPagesToCheck({
                    ...state,
                    arraySkipPageAgiculture: action.payload,
                }),
            };
        case HouseHoldTypes.SetCheckWaterPlumbing:
            return {
                ...state,
                checkWaterPlumbing: isCheckWater(state.checkWaterPlumbing, action.payload),
                nextPageDirection: listPagesToCheck({
                    ...state,
                    checkWaterPlumbing: isCheckWater(state.checkWaterPlumbing, action.payload),
                }),
            };
        case HouseHoldTypes.SetCheckWaterRiver:
            return {
                ...state,
                checkWaterRiver: isCheckWater(state.checkWaterRiver, action.payload),
                nextPageDirection: listPagesToCheck({
                    ...state,
                    checkWaterRiver: isCheckWater(state.checkWaterRiver, action.payload),
                }),
            };
        case HouseHoldTypes.SetCheckWaterIrrigation:
            return {
                ...state,
                checkWaterIrrigation: isCheckWater(state.checkWaterIrrigation, action.payload),
                nextPageDirection: listPagesToCheck({
                    ...state,
                    checkWaterIrrigation: isCheckWater(state.checkWaterIrrigation, action.payload),
                }),
            };
        case HouseHoldTypes.SetCheckWaterRain:
            return {
                ...state,
                checkWaterRain: isCheckWater(state.checkWaterRain, action.payload),
                nextPageDirection: listPagesToCheck({
                    ...state,
                    checkWaterRain: isCheckWater(state.checkWaterRain, action.payload),
                }),
            };
        case HouseHoldTypes.SetCheckWaterBuying:
            return {
                ...state,
                checkWaterBuying: isCheckWater(state.checkWaterBuying, action.payload),
                nextPageDirection: listPagesToCheck({
                    ...state,
                    checkWaterBuying: isCheckWater(state.checkWaterBuying, action.payload),
                }),
            };
        case HouseHoldTypes.SetWateringResidential:
            return {
                ...state,
                wateringResidential: action.payload,
            };
        case HouseHoldTypes.SetWaterSourcesResidential:
            return {
                ...state,
                waterSourcesResidential: action.payload,
            };
        case HouseHoldTypes.SetWaterSourcesRice:
            return {
                ...state,
                waterSourcesRice: action.payload,
            };
        case HouseHoldTypes.SetWaterSourcesAgiculture:
            return {
                ...state,
                waterSourcesAgiculture: action.payload,
            };
        case HouseHoldTypes.SetWaterSourcesFactory:
            return {
                ...state,
                waterSourcesFactory: action.payload,
            };
        case HouseHoldTypes.SetWaterSourcesCommercial:
            return {
                ...state,
                waterSourcesCommercial: action.payload,
            };
        case HouseHoldTypes.SetNextPageDirection:
            return {
                ...state,
                nextPageDirection: action.payload,
            };
        case HouseHoldTypes.SetArrayIsCheck:
            return {
                ...state,
                arrayIsCheck: action.payload,
            };
        case HouseHoldTypes.SetSelectorIndex:
            const index = action.payload;
            let arrayIsCheck = state.arrayIsCheck;

            if (index >= 0 && index < arrayIsCheck.length) {
                if (arrayIsCheck.findIndex(index) < 0) {
                    arrayIsCheck.push(index);
                }
            }

            return {
                ...state,
                selectorIndex: action.payload,
                arrayIsCheck: arrayIsCheck,
            };
        case HouseHoldTypes.LoadUnitByIdBuildingSuccess:
            return {
                ...state,
                unitByIdBuilding: action.payload,
            };
        case HouseHoldTypes.SetBackToRoot:
            return {
                ...state,
                backToRoot: action.payload,
            };
        case HouseHoldTypes.SetBack:
            return {
                ...state,
                back: action.payload,
            };
        case HouseHoldTypes.SetNumberRoom:
            return {
                ...state,
                numberRoom: action.payload,
            };
        case HouseHoldTypes.SetUnitNo:
            return {
                ...state,
                unitNo: action.payload,
            };
        case HouseHoldTypes.SaveLastNameSuccess:
            return {
                ...state,
                lastName: action.payload,
            };
        case HouseHoldTypes.LoadHouseHoldSampleSuccess:
            let s = resetStatesForModel(action.payload);
            // console.log("Payload", JSON.stringify(action.payload));
            // console.log(JSON.stringify(s));

            return {
                ...state,
                houseHoldSample: action.payload,
                selectG1234: s.selectG1234,
                isHouseHold: s.isHouseHold,
                isAgriculture: s.isAgriculture,
                isFactorial: s.isFactorial,
                isCommercial: s.isCommercial,
                residentialGardeningUse: s.residentialGardeningUse,
                wateringResidential: s.wateringResidential,
                waterSourcesResidential: s.waterSourcesResidential,
                waterSourcesRice: s.waterSourcesRice,
                waterSourcesAgiculture: s.waterSourcesAgiculture,
                waterSourcesFactory: s.waterSourcesFactory,
                waterSourcesCommercial: s.waterSourcesCommercial,
                arraySkipPageAgiculture: s.agi,
                riceDoing: s.riceDoing,
                agiSelectRice: s.agiSelectRice,
                agiSelectRubber: s.agiSelectRubber,
                agiSelectPerennial: s.agiSelectPerennial,
                ricePlantSelectPlant: s.ricePlantSelectPlant,
                agronomyPlantSelectPlant: s.agronomyPlantSelectPlant,
                rubberTreeSelectPlant: s.rubberTreeSelectPlant,
                perennialPlantSelectPlant: s.perennialPlantSelectPlant,
                factorialCategory: s.factorialCategory,
                commercialServiceType: s.commercialServiceType,
                checkWaterPlumbing: s.checkWaterPlumbing,
                checkWaterRiver: s.checkWaterRiver,
                checkWaterIrrigation: s.checkWaterIrrigation,
                checkWaterRain: s.checkWaterRain,
                checkWaterBuying: s.checkWaterBuying,
                numberRoom: s.numberRoom,
                nextPageDirection: listPagesToCheck({
                    ...state,
                    houseHoldSample: action.payload,
                    selectG1234: s.selectG1234,
                    isHouseHold: s.isHouseHold,
                    isAgriculture: s.isAgriculture,
                    isFactorial: s.isFactorial,
                    isCommercial: s.isCommercial,
                    residentialGardeningUse: s.residentialGardeningUse,
                    wateringResidential: s.wateringResidential,
                    waterSourcesResidential: s.waterSourcesResidential,
                    waterSourcesRice: s.waterSourcesRice,
                    waterSourcesAgiculture: s.waterSourcesAgiculture,
                    waterSourcesFactory: s.waterSourcesFactory,
                    waterSourcesCommercial: s.waterSourcesCommercial,
                    arraySkipPageAgiculture: s.agi,
                    riceDoing: s.riceDoing,
                    agiSelectRice: s.agiSelectRice,
                    agiSelectRubber: s.agiSelectRubber,
                    agiSelectPerennial: s.agiSelectPerennial,
                    ricePlantSelectPlant: s.ricePlantSelectPlant,
                    agronomyPlantSelectPlant: s.agronomyPlantSelectPlant,
                    rubberTreeSelectPlant: s.rubberTreeSelectPlant,
                    perennialPlantSelectPlant: s.perennialPlantSelectPlant,
                    factorialCategory: s.factorialCategory,
                    commercialServiceType: s.commercialServiceType,
                    checkWaterPlumbing: s.checkWaterPlumbing,
                    checkWaterRiver: s.checkWaterRiver,
                    checkWaterIrrigation: s.checkWaterIrrigation,
                    checkWaterRain: s.checkWaterRain,
                    checkWaterBuying: s.checkWaterBuying,
                    numberRoom: s.numberRoom,
                }),
            };
        default:
            return state;
    }
}

function resetStatesForModel(model: any): any {
    let objG12345 = {};
    let garden: any;
    let numberRoomUnit: any;
    if (model) {
        objG12345 = {
            isHouseHold: model.isHouseHold,
            isAgriculture: model.isAgriculture,
            isFactorial: model.isFactorial,
            isCommercial: model.isCommercial,
        };

        numberRoomUnit = model.subUnit ? model.subUnit.roomNumber : 1;
    }

    let objAgri = {};
    let ag = model && model.agriculture;
    let riceDoing = ag && ag.ricePlant && ag.ricePlant.doing;
    let rubberDoing = ag && ag.rubberTree && ag.rubberTree.doing;
    let listRice
    let listAgronomy = []
    let listRubber = []
    let listPerennial


    if (ag) {
        objAgri = {
            ricePlant: ag.ricePlant && ag.ricePlant.doing,
            agronomyPlant: ag.agronomyPlant && ag.agronomyPlant.doing,
            rubberTree: ag.rubberTree && ag.rubberTree.doing,
            perennialPlant: ag.perennialPlant && ag.perennialPlant.doing,
            herbsPlant: ag.herbsPlant && ag.herbsPlant.doing,
            flowerCrop: ag.flowerCrop && ag.flowerCrop.doing,
            mushroomPlant: ag.mushroomPlant && ag.mushroomPlant.doing,
            animalFarm: ag.animalFarm && ag.animalFarm.doing,
            aquaticAnimals: ag.aquaticAnimals && ag.aquaticAnimals.doing,
        };
        if (model.residence && model.residence.gardeningUse) {
            garden = model.residence.gardeningUse;
        }

        riceDoing = ag && ag.ricePlant && ag.ricePlant.doing;
        rubberDoing = ag && ag.rubberTree && ag.rubberTree.doing;
        listAgronomy = findListAgronomy(ag && ag.agronomyPlant);
        listPerennial = findListPerennial(ag && ag.perennialPlant);

        if (riceDoing) {
            listRice = EX_RICH_LIST;
        }
        if (rubberDoing) {
            listRubber = EX_RUBBER_LIST;
        }
    };

    let wS = [];
    let wSPlant = [];
    let waterRes;
    let waterFac;
    let waterCom;
    let waterRice = findWaterSourceRice(ag && ag.ricePlant);
    wS.push(waterRice);
    wSPlant.push(waterRice);
    let waterDry = findWaterSourceDry(ag && ag.agronomyPlant);
    wS.push(waterDry);
    wSPlant.push(waterDry);
    let waterRubber = findWaterSourceRubber(ag && ag.rubberTree);
    wS.push(waterRubber);
    wSPlant.push(waterRubber);
    let waterPenrenial = findWaterSourcePenrenial(ag && ag.perennialPlant);
    wS.push(waterPenrenial);
    wSPlant.push(waterPenrenial);
    let waterHerb = findWaterSourceHerb(ag && ag.herbsPlant);
    wS.push(waterHerb);
    wSPlant.push(waterHerb);
    let waterFlower = findWaterSourceFlower(ag && ag.flowerCrop);
    wS.push(waterFlower);
    wSPlant.push(waterFlower);
    let waterMushroom = findWaterSourceMushroom(ag && ag.mushroomPlant);
    wS.push(waterMushroom);
    wSPlant.push(waterMushroom);

    if (model.residence != null) {
        waterRes = model.residence && model.residence.waterSources;
        wS.push(waterRes);
    }
    if (model.factory != null) {
        waterFac = model.factory && model.factory.waterSources;
        wS.push(waterFac);
    }
    if (model.commerce != null) {
        waterCom = model.commerce && model.commerce.waterSources;
        wS.push(waterCom);
    }
    if (ag && ag.animalFarm != null) {
        let waterAnimalFarm = ag && ag.animalFarm.waterSources;
        wS.push(waterAnimalFarm);
        wSPlant.push(waterAnimalFarm);

    }

    let waterAquatic = findWaterSourceAquticAnimals(ag && ag.aquaticAnimals);
    wS.push(waterAquatic);
    wSPlant.push(waterAquatic);

    // console.log("wSPlant", JSON.stringify(wSPlant));

    let checkPlumbing: boolean;
    let checkRiver: boolean;
    let checkIrrigation: boolean;
    let checkRain: boolean;
    let checkBuying: boolean;
    let waterAgi = {
        plumbing: wSPlant.some(p => p && p.plumbing == true),
        underGround: wSPlant.some(p => p && p.underGround == true),
        river: wSPlant.some(p => p && p.river == true),
        pool: wSPlant.some(p => p && p.pool == true),
        irrigation: wSPlant.some(p => p && p.irrigation == true),
        rain: wSPlant.some(p => p && p.rain == true),
        buying: wSPlant.some(p => p && p.buying == true),
        rainingAsIs: wSPlant.some(p => p && p.rainingAsIs == true),
        hasOther: wSPlant.some(p => p && p.hasOther == true),
        other: "water",
    };

    if (wS != null) {
        checkPlumbing = wS.some(it => it && it.plumbing == true);
        checkRiver = wS.some(it => it && it.river == true);
        checkIrrigation = wS.some(it => it && it.irrigation == true);
        checkRain = wS.some(it => it && it.rain == true);
        checkBuying = wS.some(it => it && it.buying == true);
    }

    return {

        selectG1234: objG12345,
        isHouseHold: model && model.isHouseHold,
        isAgriculture: model && model.isAgriculture,
        isFactorial: model && model.isFactorial,
        isCommercial: model && model.isCommercial,
        residentialGardeningUse: model && model.residence && model.residence.gardeningUse,
        agi: objAgri,
        numberRoom: numberRoomUnit,
        ricePlantSelectPlant: listRice,
        agronomyPlantSelectPlant: listAgronomy,
        rubberTreeSelectPlant: listRubber,
        perennialPlantSelectPlant: listPerennial,
        wateringResidential: model && model.residence && model.residence.gardeningUse,
        waterSourcesResidential: waterRes,
        waterSourcesRice: waterRice,
        waterSourcesAgiculture: waterAgi,
        waterSourcesFactory: waterFac,
        waterSourcesCommercial: waterCom,
        riceDoing: model && model.agriculture && model.agriculture.ricePlant && model.agriculture.ricePlant.doing,
        agiSelectRice: model && model.agriculture && model.agriculture.ricePlant && model.agriculture.ricePlant.doing,
        agiSelectRubber: model && model.agriculture && model.agriculture.rubberTree && model.agriculture.rubberTree.doing,
        agiSelectPerennial: model && model.agriculture && model.agriculture.perennialPlant && model.agriculture.perennialPlant.doing,
        factorialCategory: model && model.factory && model.factory.category,
        commercialServiceType: model && model.commerce && model.commerce.serviceType,
        checkWaterPlumbing: checkPlumbing,
        checkWaterRiver: checkRiver,
        checkWaterIrrigation: checkIrrigation,
        checkWaterRain: checkRain,
        checkWaterBuying: checkBuying,
    };
}

function findListAgronomy(list) {
    let fields = [];
    if (list && list.fields)
        fields = list.fields;
    let selectedMap = new Map<string, any>();
    fields.forEach(f => {
        if (f.plantings && f.plantings.plants) {
            f.plantings.plants.forEach(p => selectedMap.set(p.code, p));
        }
    });
    let selected = [];
    selectedMap.forEach(v => selected.push(v));
    // console.log(selected);
    return selected;
}

function findListPerennial(list) {
    let fields = [];
    if (list && list.fields)
        fields = list.fields;
    let selectedMap = new Map<string, any>();
    fields.forEach(f => {
        if (f.plantings && f.plantings.plants) {
            f.plantings.plants.forEach(p => selectedMap.set(p.code, p));
        }
    });
    let selected = [];
    selectedMap.forEach(v => selected.push(v));
    // console.log(selected);
    return selected;
}


function findWaterSourceRice(water) {
    let fields = [];
    if (water && water.fields)
        fields = water.fields;
    let waterSourceRice = {}
    if (fields != null) {
        waterSourceRice = {
            plumbing: fields.some(p => p && p.waterSources && p.waterSources.plumbing == true),
            underGround: fields.some(p => p && p.waterSources && p.waterSources.underGround == true),
            river: fields.some(p => p && p.waterSources && p.waterSources.river == true),
            pool: fields.some(p => p && p.waterSources && p.waterSources.pool == true),
            irrigation: fields.some(p => p && p.waterSources && p.waterSources.irrigation == true),
            rain: fields.some(p => p && p.waterSources && p.waterSources.rain == true),
            buying: fields.some(p => p && p.waterSources && p.waterSources.buying == true),
            rainingAsIs: fields.some(p => p && p.waterSources && p.waterSources.rainingAsIs == true),
            hasOther: fields.some(p => p && p.waterSources && p.waterSources.hasOther == true),
            other: "water",
        };
    }
    return waterSourceRice
}

function findWaterSourceDry(water) {
    let fields = [];
    if (water && water.fields)
        fields = water.fields;
    let waterSourceDry = {}
    if (fields != null) {
        waterSourceDry = {
            plumbing: fields.some(p => p && p.waterSources && p.waterSources.plumbing == true),
            underGround: fields.some(p => p && p.waterSources && p.waterSources.underGround == true),
            river: fields.some(p => p && p.waterSources && p.waterSources.river == true),
            pool: fields.some(p => p && p.waterSources && p.waterSources.pool == true),
            irrigation: fields.some(p => p && p.waterSources && p.waterSources.irrigation == true),
            rain: fields.some(p => p && p.waterSources && p.waterSources.rain == true),
            buying: fields.some(p => p && p.waterSources && p.waterSources.buying == true),
            rainingAsIs: fields.some(p => p && p.waterSources && p.waterSources.rainingAsIs == true),
            hasOther: fields.some(p => p && p.waterSources && p.waterSources.hasOther == true),
            other: "water",
        };
    }
    return waterSourceDry
}

function findWaterSourceRubber(water) {
    let fields = [];
    if (water && water.fields)
        fields = water.fields;
    let waterSourceRubber = {}
    if (fields != null) {
        waterSourceRubber = {
            plumbing: fields.some(p => p && p.waterSources && p.waterSources.plumbing == true),
            underGround: fields.some(p => p && p.waterSources && p.waterSources.underGround == true),
            river: fields.some(p => p && p.waterSources && p.waterSources.river == true),
            pool: fields.some(p => p && p.waterSources && p.waterSources.pool == true),
            irrigation: fields.some(p => p && p.waterSources && p.waterSources.irrigation == true),
            rain: fields.some(p => p && p.waterSources && p.waterSources.rain == true),
            buying: fields.some(p => p && p.waterSources && p.waterSources.buying == true),
            rainingAsIs: fields.some(p => p && p.waterSources && p.waterSources.rainingAsIs == true),
            hasOther: fields.some(p => p && p.waterSources && p.waterSources.hasOther == true),
            other: "water",
        };
    }
    return waterSourceRubber
}

function findWaterSourcePenrenial(water) {
    let fields = [];
    if (water && water.fields)
        fields = water.fields;
    let waterSourcePenrenial = {}
    if (fields != null) {
        waterSourcePenrenial = {
            plumbing: fields.some(p => p && p.waterSources && p.waterSources.plumbing == true),
            underGround: fields.some(p => p && p.waterSources && p.waterSources.underGround == true),
            river: fields.some(p => p && p.waterSources && p.waterSources.river == true),
            pool: fields.some(p => p && p.waterSources && p.waterSources.pool == true),
            irrigation: fields.some(p => p && p.waterSources && p.waterSources.irrigation == true),
            rain: fields.some(p => p && p.waterSources && p.waterSources.rain == true),
            buying: fields.some(p => p && p.waterSources && p.waterSources.buying == true),
            rainingAsIs: fields.some(p => p && p.waterSources && p.waterSources.rainingAsIs == true),
            hasOther: fields.some(p => p && p.waterSources && p.waterSources.hasOther == true),
            other: "water",
        };
    }
    return waterSourcePenrenial
}

function findWaterSourceHerb(water) {
    let fields = [];
    if (water && water.fields)
        fields = water.fields;
    let waterSourceHerb = {}
    if (fields != null) {
        waterSourceHerb = {
            plumbing: fields.some(p => p && p.waterSources && p.waterSources.plumbing == true),
            underGround: fields.some(p => p && p.waterSources && p.waterSources.underGround == true),
            river: fields.some(p => p && p.waterSources && p.waterSources.river == true),
            pool: fields.some(p => p && p.waterSources && p.waterSources.pool == true),
            irrigation: fields.some(p => p && p.waterSources && p.waterSources.irrigation == true),
            rain: fields.some(p => p && p.waterSources && p.waterSources.rain == true),
            buying: fields.some(p => p && p.waterSources && p.waterSources.buying == true),
            rainingAsIs: fields.some(p => p && p.waterSources && p.waterSources.rainingAsIs == true),
            hasOther: fields.some(p => p && p.waterSources && p.waterSources.hasOther == true),
            other: "water",
        };
    }
    return waterSourceHerb
}

function findWaterSourceFlower(water) {
    let fields = [];
    if (water && water.fields)
        fields = water.fields;
    let waterSourceFlower = {}
    if (fields != null) {
        waterSourceFlower = {
            plumbing: fields.some(p => p && p.waterSources && p.waterSources.plumbing == true),
            underGround: fields.some(p => p && p.waterSources && p.waterSources.underGround == true),
            river: fields.some(p => p && p.waterSources && p.waterSources.river == true),
            pool: fields.some(p => p && p.waterSources && p.waterSources.pool == true),
            irrigation: fields.some(p => p && p.waterSources && p.waterSources.irrigation == true),
            rain: fields.some(p => p && p.waterSources && p.waterSources.rain == true),
            buying: fields.some(p => p && p.waterSources && p.waterSources.buying == true),
            rainingAsIs: fields.some(p => p && p.waterSources && p.waterSources.rainingAsIs == true),
            hasOther: fields.some(p => p && p.waterSources && p.waterSources.hasOther == true),
            other: "water",
        };
    }
    return waterSourceFlower
}

function findWaterSourceMushroom(water) {
    let fields = [];
    if (water && water.fields)
        fields = water.fields;
    let waterSourceMushroom = {}
    if (fields != null) {
        waterSourceMushroom = {
            plumbing: fields.some(p => p && p.waterSources && p.waterSources.plumbing == true),
            underGround: fields.some(p => p && p.waterSources && p.waterSources.underGround == true),
            river: fields.some(p => p && p.waterSources && p.waterSources.river == true),
            pool: fields.some(p => p && p.waterSources && p.waterSources.pool == true),
            irrigation: fields.some(p => p && p.waterSources && p.waterSources.irrigation == true),
            rain: fields.some(p => p && p.waterSources && p.waterSources.rain == true),
            buying: fields.some(p => p && p.waterSources && p.waterSources.buying == true),
            rainingAsIs: fields.some(p => p && p.waterSources && p.waterSources.rainingAsIs == true),
            hasOther: fields.some(p => p && p.waterSources && p.waterSources.hasOther == true),
            other: "water",
        };
    }
    return waterSourceMushroom
}

function findWaterSourceAquticAnimals(water) {
    let fish = water && water.fish;
    let shrimp = water && water.shrimp;
    let frog = water && water.frog;
    let crocodile = water && water.crocodile;
    let snappingTurtle = water && water.snappingTurtle;
    let crab = water && water.crab;
    let shellFish = water && water.shellFish;
    let turtle = water && water.turtle;
    let reddish = water && water.reddish;
    let waterSourceAqutic = {}


    let arrAquatic = [];
    if (fish != null) {
        arrAquatic.push(fish.waterSources)
    }
    if (shrimp != null) {
        arrAquatic.push(shrimp.waterSources)
    }
    if (frog != null) {
        arrAquatic.push(frog.waterSources)
    }
    if (crocodile != null) {
        arrAquatic.push(crocodile.waterSources)
    }
    if (snappingTurtle != null) {
        arrAquatic.push(snappingTurtle.waterSources)
    }
    if (crab != null) {
        arrAquatic.push(crab.waterSources)
    }
    if (shellFish != null) {
        arrAquatic.push(shellFish.waterSources)
    }
    if (turtle != null) {
        arrAquatic.push(turtle.waterSources)
    }
    if (reddish != null) {
        arrAquatic.push(reddish.waterSources)
    }

    if (arrAquatic != null) {
        waterSourceAqutic = {
            plumbing: arrAquatic.some(it => it.plumbing == true),
            underGround: arrAquatic.some(it => it.underGround == true),
            river: arrAquatic.some(it => it.river == true),
            pool: arrAquatic.some(it => it.pool == true),
            irrigation: arrAquatic.some(it => it.irrigation == true),
            rain: arrAquatic.some(it => it.rain == true),
            buying: arrAquatic.some(it => it.buying == true),
            rainingAsIs: arrAquatic.some(it => it.rainingAsIs == true),
            hasOther: arrAquatic.some(it => it.hasOther == true),
            other: "water",
        };
    }

    return waterSourceAqutic
}

function listPagesToCheck(state: HouseHoldState): Array<boolean> {
    // console.log("เช็คหน้าต่อไป", JSON.stringify(state));

    let arr: Array<boolean> = state.nextPageDirection;
    arr[0] = (state.selectG1234 && state.selectG1234.isHouseHold) ? true : false;
    arr[20] = (state.selectG1234 && state.selectG1234.isHouseHold) ? true : false;
    arr[21] = (state.selectG1234 && state.selectG1234.isHouseHold && state.houseHoldSample && state.houseHoldSample.residence && state.houseHoldSample.residence.memberCount > 0) ? true : false;
    arr[1] = (state.selectG1234 && state.selectG1234.isAgriculture) ? true : false;
    arr[11] = (state.selectG1234 && state.selectG1234.isFactorial) ? true : false;
    arr[12] = (state.selectG1234 && state.selectG1234.isCommercial) ? true : false;
    for (let i = 2; i <= 10; i++) {
        arr[i] = arr[1]
    }

    if (state.selectG1234.isAgriculture && state.arraySkipPageAgiculture) {
        arr[2] = (state.arraySkipPageAgiculture && state.arraySkipPageAgiculture.ricePlant) ? true : false;
        arr[3] = (state.arraySkipPageAgiculture && state.arraySkipPageAgiculture.agronomyPlant) ? true : false;
        arr[4] = (state.arraySkipPageAgiculture && state.arraySkipPageAgiculture.rubberTree) ? true : false;
        arr[5] = (state.arraySkipPageAgiculture && state.arraySkipPageAgiculture.perennialPlant) ? true : false;
        arr[6] = (state.arraySkipPageAgiculture && state.arraySkipPageAgiculture.herbsPlant) ? true : false;
        arr[7] = (state.arraySkipPageAgiculture && state.arraySkipPageAgiculture.flowerCrop) ? true : false;
        arr[8] = (state.arraySkipPageAgiculture && state.arraySkipPageAgiculture.mushroomPlant) ? true : false;
        arr[9] = (state.arraySkipPageAgiculture && state.arraySkipPageAgiculture.animalFarm) ? true : false;
        arr[10] = (state.arraySkipPageAgiculture && state.arraySkipPageAgiculture.aquaticAnimals) ? true : false;
    } else {
        arr[2] = false;
        arr[3] = false;
        arr[4] = false;
        arr[5] = false;
        arr[6] = false;
        arr[7] = false;
        arr[8] = false;
        arr[9] = false;
        arr[10] = false;
    }

    arr[13] = (state.checkWaterPlumbing) ? true : false;
    arr[15] = (state.checkWaterRiver) ? true : false;
    arr[17] = (state.checkWaterIrrigation) ? true : false;
    arr[18] = (state.checkWaterRain) ? true : false;
    arr[19] = (state.checkWaterBuying) ? true : false;

    return arr;
}

function isCheckWater(checkWater: boolean, payload: boolean): boolean {
    return checkWater ? true : payload;
}
