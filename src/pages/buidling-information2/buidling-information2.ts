import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, Option } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { getBuildingSample, getSendBuildingType, setHomeBuilding } from '../../states/building';
import { SetRecieveDataFromBuilding, SetHomeBuilding } from '../../states/building/building.actions';
import { map, delay } from 'rxjs/operators';
import { LoggingState } from '../../states/logging/logging.reducer';
import { BuildingInformation1Page } from '../building-information1/building-information1';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-buidling-information2',
  templateUrl: 'buidling-information2.html',
})
export class BuidlingInformation2Page {
  public f: FormGroup;
  private submitRequested: boolean;
  public isBuilding: boolean;

  // private formData$ = this.store.select(getBuildingSample).pipe(map(s => s));
  // private formDataFromBuilding1$ = this.store.select(setHomeBuilding).pipe(map(s => s));

  private getBuildingType$ = this.store.select(getSendBuildingType);
  private dataHomeBuilding$ = this.store.select(setHomeBuilding).pipe(map(s => s));

  @ViewChildren(BuildingInformation1Page) private buildingInformation1: BuildingInformation1Page[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private fb: FormBuilder, private storeLog: Store<LoggingState>, private store: Store<BuildingState>) {
    this.f = BuidlingInformation2Page.CreateFormGroup(fb);
    this.dataHomeBuilding$.subscribe(data => {
      if (data != null) {
        this.f.get('accessCount').setValue(data.accessCount);
        this.setupCountChanges();
        this.f.setValue(data);
      }
    });
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'ea': null,
      'ordering': [0],
      'road': null,
      'alley': null,
      'name': null,
      'houseNo': null,
      'latitude': null,
      'longitude': null,
      'buildingType': null,
      'other': null,
      'accessCount': null,
      'access': fb.array([]),
      'vacancyCount': null,
      'abandonedCount': null,
      'comments': fb.array([
      ]),
      'recCtrl': [null, Validators],
      'vacantRoomCount': [null],
      'unitCount': [0, Validators],
      'unitAccess': [null, Validators],
      'occupiedRoomCount': [null, Validators],
      'waterQuantity': fb.group({
        'waterQuantity': [null, Validators],
        'cubicMeterPerMonth': [null, Validators],
        'waterBill': [null, Validators],
      }),
      'floorCount': [null, Validators],
      '_id': [null],
      'status': [null],
    }, {
        validator: BuidlingInformation2Page.checkAnyOrOther()
      });
  }

  ionViewDidLoad() {
    // this.storage.get('key').then((val) => {
    //   console.log("do this", val);

    // })
    // this.formDataFromBuilding1$.subscribe(data => {
    //   if (data != null) {
    //     this.f.setValue(data)
    this.getBuildingType$.subscribe(data => this.f.get('buildingType').setValue(data));
    //   }
    // });
  }

  public handleSubmit() {
    this.submitRequested = true;

    console.log("data ยิง API", this.f.value);
    console.log("f.valid", this.f.valid);

    if (this.f.valid && (this.f.get('unitCount').value > 0)) {
      console.log("pass");

      this.store.dispatch(new SetRecieveDataFromBuilding(this.f.get('unitCount').value));
      this.store.dispatch(new SetHomeBuilding(this.f.value));

      this.navCtrl.push("HouseHoldTestPage");
    }
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const buildingType = c.get('buildingType');
      const unitCount = c.get('unitCount');
      const unitAccess = c.get('unitAccess');
      const occupiedRoomCount = c.get('occupiedRoomCount');
      const vacantRoomCount = c.get('vacantRoomCount');
      const waterQuantity = c.get('waterQuantity.waterQuantity');
      const cubicMeterPerMonth = c.get('waterQuantity.cubicMeterPerMonth');
      const waterBill = c.get('waterQuantity.waterBill');
      const floorCount = c.get('floorCount');

      if (((buildingType.value == 4) || (buildingType.value == 5)) && (unitCount.value < 1)) {
        return { 'unitCount': true };
      }
      if (((buildingType.value == 4) || (buildingType.value == 5)) && (unitAccess.value < 1)) {
        return { 'unitAccess': true };
      }
      if ((unitAccess.value == 1) && (floorCount.value == null)) {
        return { 'floorCount': true, };
      }
      if ((unitAccess.value == 2) && (occupiedRoomCount.value == null)) {
        return { 'occupiedRoomCount': true, };
      }
      if ((unitAccess.value == 2) && (vacantRoomCount.value == null)) {
        return { 'vacantRoomCount': true, }
      }
      if ((unitAccess.value == 2) && (waterQuantity.value < 1)) {
        return { 'waterQuantity': true, }
      }
      if ((unitAccess.value == 2) && (waterQuantity.value == 1) && (cubicMeterPerMonth.value == null)) {
        return { 'cubicMeterPerMonth': true, }
      }
      if ((unitAccess.value == 2) && (waterQuantity.value == 2) && (waterBill.value == null)) {
        return { 'waterBill': true, }
      }
      if ((unitAccess.value == 3) && (floorCount.value == null)) {
        return { 'floorCount': true, }
      }
      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'unitCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.unitCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'unitAccess') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.unitAccess && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'floorCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.floorCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'occupiedRoomCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.occupiedRoomCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'vacantRoomCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.vacantRoomCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'waterQuantity') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.waterQuantity && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'cubicMeterPerMonth') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.cubicMeterPerMonth && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'waterBill') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.waterBill && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  private setupCountChanges() {
    this.setupAccessCountChanges();
    this.setupAccessCountChangesForComments();
  }

  private setupAccessCountChanges() {
    const componentFormArray: string = "access";
    const componentCount: string = "accessCount";

    var onComponentCountChanges = () => {
      var accesses = (this.f.get(componentFormArray) as FormArray).controls || [];
      var accessCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      accessCount = Math.max(0, accessCount);

      for (let i = 0; i < accessCount; i++) {
        var ctrl = null;
        if (i < accesses.length) {
          const fld = accesses[i];
          ctrl = fld;
        } else {
          ctrl = new FormControl();
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupAccessCountChangesForComments() {
    const componentFormArray: string = "comments";
    const componentCount: string = "accessCount";

    var onComponentCountChanges = () => {
      var comments = (this.f.get(componentFormArray) as FormArray).controls || [];
      var accessCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      accessCount = Math.max(0, accessCount);

      for (let i = 0; i < accessCount; i++) {
        var ctrl = null;
        if (i < comments.length) {
          const fld = comments[i];
          ctrl = fld;
        } else {
          ctrl = BuildingInformation1Page.CreateComment(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
