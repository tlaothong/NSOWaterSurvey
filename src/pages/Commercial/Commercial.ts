import { SetWaterSourcesCommercial, SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getArrayIsCheck, getNextPageDirection, getNumberRoom } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetCommercialServiceType, SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';
import { BuildingState } from '../../states/building/building.reducer';
import { getSendBuildingType, getOtherBuildingType } from '../../states/building';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

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
  private numberRoom$ = this.store.select(getNumberRoom);
  private numberRoom: boolean = false;
  public dataCom: any;
  private getBuildingType$ = this.storeBuild.select(getSendBuildingType)
  private frontNum: any;
  private backNum: any;
  private otherBuildingType$ = this.storeBuild.select(getOtherBuildingType);

  constructor(public navCtrl: NavController, public local: LocalStorageProvider, private store: Store<HouseHoldState>, private storage: Storage, private storeBuild: Store<BuildingState>, public navParams: NavParams, public alertCtrl: AlertController, private fb: FormBuilder) {
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
        'personnelCount': [null, Validators],
      }),
      'hotelsAndResorts': this.fb.group({
        'roomCount': [null, Validators],
        'personnelCount': [null, Validators],
      }),
      'hospital': this.fb.group({
        'bedCount': [null, Validators],
        'personnelCount': [null, Validators],
      }),
      'building': this.fb.group({
        'roomCount': [null, Validators],
        'occupiedRoomCount': [null, Validators],
        'personnelCount': [null, Validators],
      }),
      'religious': this.fb.group({
        'peopleCount': [null, Validators],
      }),
      'otherBuilding': this.fb.group({
        'personnelCount': [null, Validators.required],
      }),
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
    }), {
        validator: CommercialPage.checkAnyOrOther()
      };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommercialPage');
    this.numberRoom$.subscribe(data => {
      if (data != null) {
        if (data == "-") {
          this.numberRoom = true
        }
        console.log(this.numberRoom);
      }
    });
    this.countNumberPage();
    this.formData$.subscribe(data => {
      if (data != null) {
        this.f.setValue(data.commerce)
        this.dataCom = data;
        console.log(data);

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
    // this.dispatchWaterSource();
    this.dataCom.commerce = this.f.value
    if (this.f.valid) {
      this.arrayIsCheckMethod();
      // this.store.dispatch(new SetHouseHold(this.dataCom));
      // this.storage.set('unit', this.dataCom)
      let id = this.dataCom._id
      this.storage.set(id, this.dataCom)
      this.local.updateListUnit(this.dataCom.buildingId, this.dataCom)
      console.log(this.f.value);

      this.navCtrl.popTo("CheckListPage");
    }
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const buildingCode = c.get('buildingCode');
      const personnelCountQuestionForAcademy = c.get('questionForAcademy.personnelCount');
      const roomCountHotelsAndResorts = c.get('hotelsAndResorts.roomCount');
      const personnelCountHotelsAndResorts = c.get('hotelsAndResorts.personnelCount');
      const bedCount = c.get('hospital.bedCount');
      const personnelCountHospital = c.get('hospital.personnelCount');
      const roomCountBuilding = c.get('building.roomCount');
      const occupiedRoomCount = c.get('building.occupiedRoomCount');
      const personnelCountBuilding = c.get('building.personnelCount');
      const peopleCount = c.get('religious.peopleCount');

      if (buildingCode.value == 11 || buildingCode.value == 12 && personnelCountQuestionForAcademy.value == null) {
        return { 'questionForAcademy.personnelCount': true };
      }
      if (buildingCode.value == 6 && roomCountHotelsAndResorts.value == null && personnelCountHotelsAndResorts.value == null) {
        return { 'hotelsAndResorts.roomCount': true, 'hotelsAndResorts.personnelCount': true };
      }
      if (buildingCode.value == 6 && roomCountHotelsAndResorts.value == null && personnelCountHotelsAndResorts.value != null) {
        return { 'hotelsAndResorts.roomCount': true };
      }
      if (buildingCode.value == 6 && roomCountHotelsAndResorts.value != null && personnelCountHotelsAndResorts.value == null) {
        return { 'hotelsAndResorts.personnelCount': true };
      }
      if ((buildingCode.value == 7 || buildingCode.value == 8) && bedCount == null && personnelCountHospital.value == null) {
        return { 'hospital.bedCount': true, 'hospital.personnelCount': true };
      }
      if ((buildingCode.value == 7 || buildingCode.value == 8) && bedCount == null && personnelCountHospital.value != null) {
        return { 'hospital.bedCount': true };
      }
      if ((buildingCode.value == 7 || buildingCode.value == 8) && bedCount != null && personnelCountHospital.value == null) {
        return { 'hospital.personnelCount': true };
      }
      if (buildingCode.value == 4 && roomCountBuilding.value == null && occupiedRoomCount.value == null && personnelCountBuilding.value == null) {
        return { 'building.roomCount': true, 'building.occupiedRoomCount': true, 'building.personnelCount': true };
      }
      if (buildingCode.value == 4 && roomCountBuilding.value != null && occupiedRoomCount.value == null && personnelCountBuilding.value == null) {
        return { 'building.roomCount': true };
      }
      if (buildingCode.value == 4 && roomCountBuilding.value == null && occupiedRoomCount.value != null && personnelCountBuilding.value == null) {
        return { 'building.occupiedRoomCount': true };
      }
      if (buildingCode.value == 4 && roomCountBuilding.value == null && occupiedRoomCount.value == null && personnelCountBuilding.value != null) {
        return { 'building.personnelCount': true };
      }
      if (buildingCode.value == 10 && peopleCount.value == null) {
        return { 'religious.peopleCount': true };
      }

      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'questionForAcademy.personnelCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.personnelCountQuestionForAcademy && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hotelsAndResorts.roomCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.roomCountHotelsAndResorts && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hotelsAndResorts.personnelCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.personnelCountHotelsAndResorts && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hospital.bedCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.bedCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hospital.personnelCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.personnelCountHospital && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'building.roomCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.roomCountBuilding && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'building.occupiedRoomCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.occupiedRoomCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'building.personnelCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.personnelCountBuilding && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'religious.peopleCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.peopleCount && (ctrl.dirty || this.submitRequested);
    }

    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
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

}
