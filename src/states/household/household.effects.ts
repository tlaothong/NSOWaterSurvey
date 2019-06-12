import { BootupState } from './../bootup/bootup.reducer';
import { Observable } from "rxjs";
import { Action, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { mergeMap, map, tap, withLatestFrom, switchMap, filter } from "rxjs/operators";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CloudSyncProvider } from "../../providers/cloud-sync/cloud-sync";
import { HouseHoldTypes, LoadHouseHoldListSuccess, LoadHouseHoldSampleSuccess, LoadUnitByIdBuilding, LoadUnitByIdBuildingSuccess, LoadHouseHoldSample, SaveHouseHold, SaveHouseHoldSuccess, CreateHouseHoldFor1UnitBuilding, LoadHouseHoldList, SetCurrentWorkingHouseHold, LoadSelectedHouseHold, UpdateUnitList, NewHouseHoldWithSubUnit, SaveHouseHoldSubUnit, DeleteHouseHold, SetSelectorIndex, UpdateProgress, SaveLastNameSuccess, SaveLastName, LoadLastName } from "./household.actions";
import { AppStateProvider } from "../../providers/app-state/app-state";
import { DataStoreProvider } from "../../providers/data-store/data-store";
import { HouseHoldUnit, UnitInList, SubUnit } from "../../models/mobile/MobileModels";
import { getHouseHoldUnitList, getHouseHoldSample, getProgress, getHouseHoldFeatureState, getLastName } from ".";
import { HouseHoldState } from "./household.reducer";
import { BuildingState } from "../building/building.reducer";
import { getBuildingSample, getArrResol } from "../building";
import { UpdateBuildingList } from "../building/building.actions";
import { EX_RICH_LIST, EX_RUBBER_LIST } from "../../models/tree";
import { getCurrentStatusState } from '../bootup';


@Injectable()
export class HouseHoldEffects {

    constructor(private action$: Actions,
        private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>,
        private dataStore: DataStoreProvider, private cloudSync: CloudSyncProvider,
        private appState: AppStateProvider, private storeBoot: Store<BootupState>) {
    }

    private static surveyForms = [
        { title: 'ตอนที่ 1 ครัวเรือนอยู่อาศัย', name: "ResidentialPage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 2 การทำการเกษตร ', name: "AgriculturePage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 2.1 ข้าว ', name: "RicePage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 2.2 พืชไร่ ', name: "DryCropPlantingPage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 2.3 ยางพารา', name: "RubberTreePage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 2.4 พืชยืนต้น ไม้ผล สวนป่า', name: "PerennialPlantingPage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 2.5 พืชผัก สมุนไพร', name: "HerbsPlantPage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 2.6 ไม้ดอก ไม้ประดับ การเพาะพันธุ์ไม้ ', name: "FlowerCropPage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 2.7 เพาะเชื้อและปลูกเห็ด', name: "MushroomPage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 2.8 การเลี้ยงสัตว์เพื่อขายหรือใช้งานเกษตร', name: "AnimalFarmPage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 2.9 การเพาะเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด', name: "WaterAnimalPlantingPage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 3 การผลิตสินค้า ', name: "FactorialPage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 4 การค้าและการบริการ', name: "CommercialPage", hasCompleted: false, isNeed: true },//12
        { title: '5.1 น้้ำประปา ', name: "PlumbingPage", hasCompleted: false, isNeed: true },
        { title: '5.2 น้ำบาดาล ', name: "GroundWaterPage", hasCompleted: false, isNeed: true },
        { title: '5.3 น้ำจากแม่น้ำ/ลำคลอง/แหล่งน้ำสาธารณะ', name: "RiverPage", hasCompleted: false, isNeed: true },
        { title: '5.4 น้ำจากสระน้ำส่วนบุคคล/หนองน้ำ/บึง ', name: "PoolPage", hasCompleted: false, isNeed: true },
        { title: '5.5 น้ำจากชลประทาน', name: "IrrigationPage", hasCompleted: false, isNeed: true },
        { title: '5.6 การกักเก็บน้ำฝน', name: "RainPage", hasCompleted: false, isNeed: true },
        { title: '5.7 น้ำที่ซื้อมาใช้', name: "BuyingPage", hasCompleted: false, isNeed: true },
        { title: 'ตอนที่ 6 ปัญหาอุทกภัย', name: "DisasterousPage", hasCompleted: false, isNeed: true },
        { title: 'แบบข้อมูลประชากร', name: "PopulationPage", hasCompleted: false, isNeed: true },
        { title: 'ข้อมูลพื้นฐานส่วนบุคคล', name: "UserPage", hasCompleted: false, isNeed: true },
    ];


    @Effect()
    public loadHouseHoldList$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadList),
        tap(_ => this.appState.houseHoldUnit = null),
        mergeMap((action: LoadHouseHoldList) => this.dataStore.listHouseHoldInBuilding(action.buildingId)),
        withLatestFrom(this.storeBuild.select(getBuildingSample)),
        switchMap(([lst, bld]) => (lst && lst.length >= 1 && bld && bld.unitCount == 1)
            ? [new LoadHouseHoldListSuccess(lst),
            new SetCurrentWorkingHouseHold(lst[0].houseHoldId)]
            : [new LoadHouseHoldListSuccess(lst ? lst : [])]),
    );

    @Effect()
    public loadHouseHoldSample$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadHouseHoldSample),
        tap((action: LoadHouseHoldSample) => {
            action.payload.ea = this.appState.eaCode;
            this.appState.houseHoldUnit = action.payload;
        }),
        map((action: LoadHouseHoldSample) => new LoadHouseHoldSampleSuccess(action.payload))
        // mergeMap(action => this.cloudSync.loadHouseHoldSampleTestData((<LoadHouseHoldSample>action).payload).pipe(
        //     map(data => new LoadHouseHoldSampleSuccess(data))),
        // ),
    );

    @Effect()
    public createHouseHoldFor1UnitBuilding$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.CreateHouseHoldFor1UnitBuilding),
        mergeMap((action: CreateHouseHoldFor1UnitBuilding) => (this.appState.houseHoldUnit)
            ? Observable.of({ exists: true, data: this.appState.houseHoldUnit })
            : Observable.of<HouseHoldUnit>(
                this.createDefaultHouseHoldUnit({
                    roomNumber: null,
                    accessCount: 1,
                    accesses: [1],
                    hasPlumbing: null,
                    hasPlumbingMeter: null,
                    isPlumbingMeterXWA: null,
                    hasGroundWater: null,
                    hasGroundWaterMeter: null,
                }, null)
            ).map(it => { return { exists: false, data: it } })),
        mergeMap((x: UnitExistence) => Observable.if(() => x.exists,
            Observable.of(new SetCurrentWorkingHouseHold(x.data._id)),
            Observable.of(new SaveHouseHold(x.data)))),
    );

    @Effect()
    public newHouseHoldWithSubUnit$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.NewHouseHoldWithSubUnit),
        map((action: NewHouseHoldWithSubUnit) => new SaveHouseHold(
            this.createDefaultHouseHoldUnit(action.subUnit, action.comment))
        ),
    );

    @Effect()
    public setSelectorIndex$: Observable<Action> = this.action$.pipe(
        ofType<SetSelectorIndex>(HouseHoldTypes.SetSelectorIndex),
        withLatestFrom(this.store.select(getProgress)),
        map(([action, exProgress]) => {
            const index = action.payload;

            if (index >= 0 && index < HouseHoldEffects.surveyForms.length && this.appState && this.appState.houseHoldUnit) {
                const surveyForm = HouseHoldEffects.surveyForms[index];
                let unitSurveys = this.appState.houseHoldUnit.surveyCompleted;
                let surveyInUnit = unitSurveys.find(it => it.name == surveyForm.name);

                if (surveyInUnit) {
                    surveyInUnit.hasCompleted = true;
                } else {
                    surveyInUnit = {
                        name: surveyForm.name,
                        isNeed: surveyForm.isNeed,
                        hasCompleted: true,
                    };
                    unitSurveys.push(surveyInUnit);
                }

                const toGo = unitSurveys.filter(it => it.isNeed == true).length;
                const completed = unitSurveys.filter(it => it.isNeed == true && it.hasCompleted == true).length;

                const progress = {
                    progressCompleted: completed,
                    progressToGo: toGo,
                };

                return new UpdateProgress(index, progress);
            }

            return new UpdateProgress(index, exProgress);
        }),
    );

    @Effect()
    public saveHouseHoldSubUnit$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.SaveHouseHoldSubUnit),
        map((action: SaveHouseHoldSubUnit) => this.updateHouseHoldSubUnit(action.houseHold,
            action.subUnit, action.comment)),
        map(it => new SaveHouseHold(it)),
    );

    private updateHouseHoldSubUnit(houseHold: HouseHoldUnit, subUnit: SubUnit, comment: string): HouseHoldUnit {
        if (subUnit) {
            let accCnt = 0;
            if (subUnit && subUnit.accesses) {
                accCnt = subUnit.accesses.length;
            }
            subUnit.accessCount = accCnt;
        }

        let comments = [...houseHold.comments];
        if (comment && comment != '') {
            comments.push({ at: Date.now(), text: comment });
        }

        return {
            ...houseHold,
            subUnit: subUnit,
            comments: comments || [],
        };
    }

    private createDefaultHouseHoldUnit(subUnit: SubUnit, comment: string) {
        if (subUnit) {
            let accCnt = 0;
            if (subUnit && subUnit.accesses) {
                accCnt = subUnit.accesses.length;
            }
            subUnit.accessCount = accCnt;
        }

        return {
            _id: this.appState.generateId('unt1v'),
            ea: this.appState.eaCode,
            buildingId: this.appState.buildingId,
            subUnit: subUnit,
            isHouseHold: null,
            isAgriculture: null,
            isFactorial: null,
            isCommercial: null,
            residence: {},
            agriculture: {
                ricePlant: {},
                agronomyPlant: {},
                rubberTree: {},
                perennialPlant: {},
                herbsPlant: {},
                flowerCrop: {},
                mushroomPlant: {},
                animalFarm: {},
                aquaticAnimals: {}
            },
            factory: {},
            commerce: {},
            waterUsage: {},
            disaster: {},
            closing: {},
            population: {},
            surveyCompleted: [],
            comments: (comment && comment != '') ? [{ at: Date.now(), text: comment }] : [],
            recCtrl: {
                createdDateTime: null,
                lastModified: null,
                deletedDateTime: null,
                lastUpload: null,
                lastDownload: null,
                logCount: 0,
                logs: []
            },
        }
    }

    @Effect()
    public saveHouseHold$: Observable<Action> = this.action$.pipe(
        ofType<SaveHouseHold>(HouseHoldTypes.SaveHouseHold),
        withLatestFrom(this.store.select(getHouseHoldFeatureState), this.storeBoot.select(getCurrentStatusState)),
        map(([action, state, curState]) => {
            const unit = action.payload;
            const state2set = HouseHoldEffects.deriveNewStateFromHouseHold(unit, state);
            HouseHoldEffects.ComposeUnit(unit, curState);

            let recCtrl = unit.recCtrl;

            return new SaveHouseHoldSuccess({
                ...unit,
                recCtrl: recCtrl
            }, state2set);
        }),
        tap(action => this.appState.houseHoldUnit = action.payload),
        mergeMap(action => this.dataStore.saveHouseHold(action.payload).mapTo(action)),
        switchMap(action => [
            new SaveHouseHoldSuccess(action.payload, action.state),
            new UpdateUnitList(action.payload)
        ]),
        // mergeMap(action => this.cloudSync.setHouseHold((<SetHouseHold>action).payload).pipe(
        //     map(data => new SetHouseHoldSuccess(data)),
        // )
        // ),
    );

    @Effect()
    public updateUnitList$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.UpdateUnitList),

        filter((action: any, i) => action.payload),
        map((action: UpdateUnitList) => action.payload),
        withLatestFrom(this.store.select(getHouseHoldUnitList)),
        mergeMap(([unit, lst]) => {
            HouseHoldEffects.ComposeUnitList(unit, lst);

            return this.dataStore.saveHouseHoldInBuildingList(this.appState.buildingId, lst)
                .mapTo(lst);
        }),
        withLatestFrom(this.storeBuild.select(getBuildingSample)),
        switchMap(([untList, bld]) => [
            new LoadHouseHoldListSuccess(untList ? untList : []),
            new UpdateBuildingList(bld),
        ]),
    );

    @Effect()
    public setCurrentWorkingHouseHold$: Observable<Action> = this.action$.pipe(
        ofType<SetCurrentWorkingHouseHold>(HouseHoldTypes.SetCurrentWorkingHouseHold),
        mergeMap(action => this.dataStore.getHouseHold(action.houseHoldId)),
        tap(unt => this.appState.houseHoldUnit = unt),
        withLatestFrom(this.store.select(getHouseHoldFeatureState)),
        map(([unt, state]) => {
            const state2set = HouseHoldEffects.deriveNewStateFromHouseHold(unt, state);
            return new SaveHouseHoldSuccess(unt, state2set);
        }),
    );

    @Effect()
    public LoadUnitByIdBuilding$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadUnitByIdBuilding),
        mergeMap(action => this.cloudSync.getUnitByIdBuilding((<LoadUnitByIdBuilding>action).payload).pipe(
            map(data => new LoadUnitByIdBuildingSuccess(data)),
        )
        ),
    );

    @Effect()
    public deleteHouseHold$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.DeleteHouseHold),
        map((action: DeleteHouseHold) => action.payload),
        withLatestFrom(this.store.select(getHouseHoldUnitList)),
        mergeMap(([hld, lst]) => {
            let idx = lst.findIndex(it => it.houseHoldId == hld.houseHoldId);
            lst.splice(idx, 1);
            return this.dataStore.saveHouseHoldInBuildingList(this.appState.buildingId, lst).mapTo(lst);
        }),
        map(hldList => new LoadHouseHoldListSuccess(hldList ? hldList : [])),
    );

    @Effect()
    public saveLastName$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.SaveLastName),
        filter((action: any, i) => action.payload),
        map((action: SaveLastName) => action.payload),// ค่าที่ส่งเข้ามา
        withLatestFrom(this.store.select(getLastName)),
        mergeMap(([lst, lnl]) => {
            if (lnl.length >= 3) {
                lnl.splice(0, 1)
            }
            lnl.push(lst);
            return this.dataStore.saveLastName(this.appState.userId, lnl).mapTo(lnl)
        }),
        map(lnl => new SaveLastNameSuccess(lnl))
    )

    @Effect()
    public loadLastName$: Observable<Action> = this.action$.pipe(
        ofType(HouseHoldTypes.LoadLastName),
        filter((action: any, i) => action.payload),
        map((action: LoadLastName) => action.payload),// ค่าที่ส่งเข้ามา
        mergeMap((uid) => {
            return this.dataStore.loadLastName(uid)
        }),
        map(data => new SaveLastNameSuccess(data ? data : []))
    )

    private static deriveNewStateFromHouseHold(unit: HouseHoldUnit, state: HouseHoldState): HouseHoldState {
        const s = this.computeStatesForModel(unit);
        const newState = {
            ...state,
            houseHoldSample: unit,
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
            agiSelectAgronomy: s.agiSelectAgronomy,
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
            memberCount: unit && unit.residence ? unit.residence.memberCount : null,
        };
        const pages2check = this.listPagesToCheck(newState);
        let surveys = unit && unit.surveyCompleted;

        for (let idx = 0; idx < pages2check.length; idx++) {
            const shouldCheck = pages2check[idx];
            const form = this.surveyForms[idx];

            let survey = surveys && surveys.find(it => it.name == form.name);

            if (survey) {
                survey.isNeed = shouldCheck;
            } else if (shouldCheck == true) {
                const newSurvey = {
                    ...form,
                    isNeed: true,
                };
                surveys.push(newSurvey);
            }
        }
        const state2set = {
            ...newState,
            houseHoldSample: unit,
            nextPageDirection: pages2check,
        };

        return state2set;
    }

    private static computeStatesForModel(model: HouseHoldUnit): any {
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

        if (model && model.residence != null) {
            waterRes = model.residence && model.residence.waterSources;
            wS.push(waterRes);
        }
        if (model && model.factory != null) {
            waterFac = model.factory && model.factory.waterSources;
            wS.push(waterFac);
        }
        if (model && model.commerce != null) {
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
            agiSelectAgronomy: model && model.agriculture && model.agriculture.agronomyPlant && model.agriculture.agronomyPlant.doing,
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
    }

    private static listPagesToCheck(state: HouseHoldState): Array<boolean> {
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

    public static ComposeUnit(unit: HouseHoldUnit, curState: string) {
        let log: { at: Date | string, operationCode: string };
        let createdDateTime = unit.recCtrl && unit.recCtrl.createdDateTime;
        let shouldSetCreated = false;
        let lastModified = new Date();
        let logs = unit.recCtrl && unit.recCtrl.logs;
        let status = unit.status;
        if (unit.recCtrl.logs.length == 0) {
            log = { at: lastModified, operationCode: 'create' };
            createdDateTime = lastModified;
            shouldSetCreated = true;
        }
        else {
            if (status == "complete") {
                log = { at: lastModified, operationCode: 'done' };
            }
            else {
                log = { at: lastModified, operationCode: 'continue' };
            }
        }

        logs.push(log);

        let recCtrl = {
            ...unit.recCtrl,
            logCount: logs.length,
            logs: logs,
        };

        if (!recCtrl.createdDateTime || shouldSetCreated) {
            recCtrl.createdDateTime = lastModified;
        }

        if (curState == "Sync") {
            recCtrl.lastDownload = lastModified;
        } else {
            recCtrl.lastModified = lastModified;
        }

        unit.recCtrl = recCtrl;
    }

    public static ComposeUnitList(unit: HouseHoldUnit, lst: UnitInList[]) {
        console.log("ComposeUnitList", lst);


        const accCnt = unit.subUnit ? unit.subUnit.accessCount : 0;
        let lastAccess = 0;
        if (unit.subUnit && accCnt > 0) {
            lastAccess = unit.subUnit.accesses[accCnt - 1];
        }
        // TODO: Work with status
        let status = "pause";
        switch (lastAccess) {
            case 4:
                status = "empty";
                break;
            case 5:
                status = "abandoned";
                break;
            case 6:
                status = "stopped";
                break;
            case 2:
            case 3:
                status = (accCnt < 3) ? "return" : "complete";
                break;
            default:
                const completedSurveys = unit.surveyCompleted;
                const countedOnSurveys = completedSurveys.filter(it => it.isNeed == true);
                const allCompleted = countedOnSurveys.length > 0
                    && countedOnSurveys.every(it => it.hasCompleted);
                status = allCompleted == true ? "complete" : "pause";
                break;
        }


        let untInList: UnitInList = {
            "houseHoldId": unit._id,
            "roomNumber": unit.subUnit ? unit.subUnit.roomNumber : null,
            "subUnit": unit.subUnit,
            "accessCount": accCnt,
            "lastAccess": lastAccess,
            "comments": unit.comments,
            "status": status,
        };
        console.log(untInList);

        let idx = lst.findIndex(it => it.houseHoldId == unit._id);
        if (idx >= 0) {
            lst[idx] = untInList;
        } else {
            lst.push(untInList);
        }
    }
}

interface UnitExistence {
    exists: boolean;
    data: HouseHoldUnit;
}