import { LoadHouseHoldSample } from './../../states/household/household.actions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { LoggingState } from '../../states/logging/logging.reducer';
import { SetSendBuildingType, SetHomeBuilding, SetOtherBuildingType, SetRecieveDataFromBuilding } from '../../states/building/building.actions';
import { LoadDataBuildingForEdit } from '../../states/logging/logging.actions';
import { getDataBuilding } from '../../states/logging';
import { HouseHoldState } from '../../states/household/household.reducer';

/*
  Generated class for the SwithStateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwithStateProvider {

  public Building: any;
  public Household: any;

  private dataBuilding$ = this.store.select(getDataBuilding);
  // private getDataOfUnit$ = this.store.select(getDataOfUnit);

  constructor(private store: Store<BuildingState>, public storeLog: Store<LoggingState>, public storeHouse: Store<HouseHoldState>) {
    console.log('Hello SwithStateProvider Provider');
  }

  public updateBuildingState(id: any) {
    this.storeLog.dispatch(new LoadDataBuildingForEdit(id));
    this.dataBuilding$.subscribe(data => {
      if (data != null) {
        this.store.dispatch(new SetSendBuildingType(data.buildingType));
        this.store.dispatch(new SetOtherBuildingType(data.other));
        this.store.dispatch(new SetHomeBuilding(data));
        this.store.dispatch(new SetRecieveDataFromBuilding(data.unitCount));
      }
    });
  }

  // updateHouseholdState(id: string) {
  //   // TODO: Recive id of Household -> call API to find Household by id -> input data in parameter
  //   this.storeHouse.dispatch(new LoadHouseHoldSample(id));
  //   this.getDataOfUnit$.subscribe(data => {
  //     if (data != null) {
  //       this.storeHouse.dispatch(new LoadHouseHoldSample(data));
  //     }
  //   });
    //Waterativity
    // this.store.dispatch(new SetIsHouseHold(this.f.get('isHouseHold').value));
    // this.store.dispatch(new SetIsAgriculture(this.f.get('isAgriculture').value));
    // this.store.dispatch(new SetIsFactorial(this.f.get('isFactorial').value));
    // this.store.dispatch(new SetIsCommercial(this.f.get('isCommercial').value));
    // this.store.dispatch(new SetWaterSourcesAgiculture(this.f.get('isAgriculture').value));

    //residentail
    // this.store.dispatch(new SetResidentialGardeningUse(this.residentialFrm.get('gardeningUse').value));
    // this.store.dispatch(new SetWaterSourcesResidential(this.residentialFrm.get('waterSources').value));
    // this.store.dispatch(new SetNextPageDirection(1));
    // this.store.dispatch(new SetCheckWaterPlumbing(this.residentialFrm.get('waterSources.plumbing').value));
    // this.store.dispatch(new SetCheckWaterRiver(this.residentialFrm.get('waterSources.river').value));
    // this.store.dispatch(new SetCheckWaterIrrigation(this.residentialFrm.get('waterSources.irrigation').value));
    // this.store.dispatch(new SetCheckWaterRain(this.residentialFrm.get('waterSources.rain').value));
    // this.store.dispatch(new SetCheckWaterBuying(this.residentialFrm.get('waterSources.buying').value));
    // this.store.dispatch(new SetWateringResidential(this.residentialFrm.get('gardeningUse').value));

    //AgriculturePage
    // this.store.dispatch(new SetArraySkipPageAgiculture(this.f.value));
    // this.store.dispatch(new SetNextPageDirection(2));

    //RicePage
    // this.store.dispatch(new SetRicePlantSelectPlant(this.DataList));
    // this.store.dispatch(new SetRiceDoing(this.f.get('doing').value));
    // this.store.dispatch(new SetAgiSelectRice(true));
    // this.store.dispatch(new SetNextPageDirection(3));

    //DryCropPlantingPage
    // this.store.dispatch(new SetAgronomyPlantSelectPlant(selected));
    // this.store.dispatch(new SetAgiSelectAgronomy(true));
    // this.store.dispatch(new SetNextPageDirection(4));

    //RubberTreePage
    // this.store.dispatch(new SetRubberTreeSelectPlant(this.DataList));
    // this.store.dispatch(new SetAgiSelectRubber(true));
    // this.store.dispatch(new SetNextPageDirection(5));

    //PerennialPlantingPage
    // this.store.dispatch(new SetPerennialPlantSelectPlant(selected));
    // this.store.dispatch(new SetAgiSelectPerennial(true));
    // this.store.dispatch(new SetNextPageDirection(6));

    //HerbsPlantPage
    // this.store.dispatch(new SetNextPageDirection(7));

    //FlowerCropPage
    // this.store.dispatch(new SetNextPageDirection(8));

    //MushroomPage
    // this.store.dispatch(new SetNextPageDirection(9));

    //AnimalFarmPage
    // this.store.dispatch(new SetNextPageDirection(10));
    // this.store.dispatch(new SetCheckWaterPlumbing(this.f.get('waterSources.plumbing').value));
    // this.store.dispatch(new SetCheckWaterRiver(this.f.get('waterSources.river').value));
    // this.store.dispatch(new SetCheckWaterIrrigation(this.f.get('waterSources.irrigation').value));
    // this.store.dispatch(new SetCheckWaterRain(this.f.get('waterSources.rain').value));
    // this.store.dispatch(new SetCheckWaterBuying(this.f.get('waterSources.buying').value));

    //WaterAnimalPlantingPage
    // this.store.dispatch(new SetNextPageDirection(11));

    //FactorialPage
    // this.store.dispatch(new SetFactorialCategory(this.FactoryForm.get('category').value));
    // this.store.dispatch(new SetWaterSourcesFactory(this.FactoryForm.get('waterSources').value));
    // this.store.dispatch(new SetNextPageDirection(12));
    // this.store.dispatch(new SetCheckWaterPlumbing(this.FactoryForm.get('waterSources.plumbing').value));
    // this.store.dispatch(new SetCheckWaterRiver(this.FactoryForm.get('waterSources.river').value));
    // this.store.dispatch(new SetCheckWaterIrrigation(this.FactoryForm.get('waterSources.irrigation').value));
    // this.store.dispatch(new SetCheckWaterRain(this.FactoryForm.get('waterSources.rain').value));
    // this.store.dispatch(new SetCheckWaterBuying(this.FactoryForm.get('waterSources.buying').value));

    //CommercialPage
    // this.store.dispatch(new SetCommercialServiceType(this.f.get('serviceType').value));
    // this.store.dispatch(new SetWaterSourcesCommercial(this.f.get('waterSources').value));
    // this.store.dispatch(new SetNextPageDirection(13));
    // this.store.dispatch(new SetCheckWaterPlumbing(this.f.get('waterSources.plumbing').value));
    // this.store.dispatch(new SetCheckWaterRiver(this.f.get('waterSources.river').value));
    // this.store.dispatch(new SetCheckWaterIrrigation(this.f.get('waterSources.irrigation').value));
    // this.store.dispatch(new SetCheckWaterRain(this.f.get('waterSources.rain').value));
    // this.store.dispatch(new SetCheckWaterBuying(this.f.get('waterSources.buying').value));

    //
  // }
}
