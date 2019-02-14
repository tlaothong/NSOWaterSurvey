import { SetWaterSourcesCommercial, SetSelectorIndex, LoadHouseHoldSample, SetHouseHold } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetCommercialServiceType, SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';
import { BuildingState } from '../../states/building/building.reducer';
import { getSendBuildingType, getOtherBuildingType } from '../../states/building';

@IonicPage()
@Component({
  selector: 'page-Commercial',
  templateUrl: 'Commercial.html',
})
export class CommercialPage {

  @ViewChildren(TableCheckItemCountComponent) private tableCheckItemCount: TableCheckItemCountComponent[];
  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];

  private f: FormGroup;
  private submitRequested: boolean;
  public otherBuildingType: any;

  // private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.commerce));
  private formData$ = this.store.select(getHouseHoldSample);
  public dataCom: any;
  private getBuildingType$ = this.storeBuild.select(getSendBuildingType)
  private frontNum: any;
  private backNum: any;
  private otherBuildingType$ = this.storeBuild.select(getOtherBuildingType);

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>, public navParams: NavParams, public alertCtrl: AlertController, private fb: FormBuilder) {
    this.f = this.fb.group({
      'name': [null, Validators.required],
      'serviceType': [null, Validators.required],
      'buildingCode': [null, Validators.required],
      'questionForAcademy': this.fb.group({
        'preSchool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'kindergarten': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'primarySchool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'highSchool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'vocational': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'higherEducation': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'personnelCount': [null],
      }),
      'hotelsAndResorts': this.fb.group({
        'roomCount': [null],
        'personnelCount': [null],
      }),
      'hospital': this.fb.group({
        'bedCount': [null],
        'personnelCount': [null],
      }),
      'building': this.fb.group({
        'roomCount': [null],
        'occupiedRoomCount': [null],
        'personnelCount': [null],
      }),
      'religious': this.fb.group({
        'peopleCount': [null],
      }),
      'otherBuilding': this.fb.group({
        'personnelCount': [null],
      }),
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommercialPage');
    this.countNumberPage();
    this.formData$.subscribe(data => {
      if (data != null) {
        this.f.setValue(data.commerce)
        this.dataCom = data;
      }
    });
    this.getBuildingType$.subscribe(data => {
      if (data != null) {
        this.f.get('buildingCode').setValue(data)
      }
    });
    this.otherBuildingType$.subscribe(data => {
      if (data != null) {
        this.otherBuildingType = data
      }
    });
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.tableCheckItemCount.forEach(it => it.submitRequest());
    this.waterSources8B.forEach(it => it.submitRequest());
    this.store.dispatch(new SetCommercialServiceType(this.f.get('serviceType').value));
    this.store.dispatch(new SetWaterSourcesCommercial(this.f.get('waterSources').value));
    this.dispatchWaterSource();
    this.dataCom.commerce = this.f.value
    if (this.f.valid) {
      this.arrayIsCheckMethod();
      this.store.dispatch(new SetHouseHold(this.dataCom));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  countNumberPage() {
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: any[];
    arrayNextPage$.subscribe(data => {

      if (data != null) {
        arrayNextPage = data;
        let arrLength = arrayNextPage.filter((it) => it == true);
        this.backNum = arrLength.length;
      }

    });
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {

      if (data != null) {
        arrayIsCheck = data
        this.frontNum = arrayIsCheck.length;
      }

    });
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(12));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 12)) {
          arrayIsCheck.push(12);
        }
      }
    });
  }

  private dispatchWaterSource() {
    this.store.dispatch(new SetCheckWaterPlumbing(this.f.get('waterSources.plumbing').value));
    this.store.dispatch(new SetCheckWaterRiver(this.f.get('waterSources.river').value));
    this.store.dispatch(new SetCheckWaterIrrigation(this.f.get('waterSources.irrigation').value));
    this.store.dispatch(new SetCheckWaterRain(this.f.get('waterSources.rain').value));
    this.store.dispatch(new SetCheckWaterBuying(this.f.get('waterSources.buying').value));
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
