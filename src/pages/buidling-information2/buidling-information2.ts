import { CountComponent } from './../../components/count/count';
import { Component, ViewChildren, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { getBuildingSample } from '../../states/building';
import { SaveBuilding } from '../../states/building/building.actions';
import { BuildingInformation1Page } from '../building-information1/building-information1';
import { CreateHouseHoldFor1UnitBuilding } from '../../states/household/household.actions';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-buidling-information2',
  templateUrl: 'buidling-information2.html',
})
export class BuidlingInformation2Page {
  public f: FormGroup;
  private submitRequested: boolean;
  private isCheckWarningBox: boolean;
  private formData$ = this.store.select(getBuildingSample);
  

  @ViewChildren(BuildingInformation1Page) private buildingInformation1: BuildingInformation1Page[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  @ViewChild("numOfUnits") private numOfUnits;
  checked: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<BuildingState>,
    private appState: AppStateProvider) {
    this.f = BuidlingInformation2Page.CreateFormGroup(fb);
    this.setupCountChanges();
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
      'accessCount': 0,
      'accesses': fb.array([]),
      'access': null,
      'vacancyCount': null,
      'abandonedCount': null,
      'comments': fb.array([
      ]),
      'recCtrl': fb.group({
        'createdDateTime': null,
        'lastModified': null,
        'deletedDateTime': null,
        'lastUpload': null,
        'lastDownload': null,
        'logCount': 0,
        'logs': fb.array([])
      }),
      'vacantRoomCount': [null, Validators],
      'unitCountComplete': 0,
      'unitCount': [0, Validators],
      'unitAccess': [null, Validators],
      'occupiedRoomCount': [null, Validators],
      'waterQuantity': fb.group({
        'waterQuantity': [null, Validators],
        'cubicMeterPerMonth': [null, Validators],
        'waterBill': [null, Validators],
      }),
      'floorCount': [null, [Validators, Validators.min(1)]],
      'peopleCount': null,
      '_id': [null],
      'status': [null],
    }, {
        validator: BuidlingInformation2Page.checkAnyOrOther()
      });
  }

  public handleSubmit() {
    console.log("House Hold Unit: " + this.appState.houseHoldUnit);
    this.submitRequested = true;
    this.count.forEach(it => it.submitRequest());

    console.log(this.f);
    this.isCheckWarningBox = this.f.valid;

    if (this.f.valid) {
      (this.f.get('buildingType').value == 4 || this.f.get('buildingType').value == 5) && (this.f.get('unitAccess').value != 1) ?
        this.saveThenGoHome() : this.saveThenSurveyUnit();
    }
  }

  private saveThenSurveyUnit() {
    let unitCount = this.f.get('unitCount').value;
    this.store.dispatch(new SaveBuilding(this.f.value));

    if (unitCount == 1) {
      this.store.dispatch(new CreateHouseHoldFor1UnitBuilding());
      this.navCtrl.push("WaterActivityUnitPage");
    } else {
      this.navCtrl.push("UnitPage");
    }
  }

  public saveThenGoHome() {
    let unitdone = this.f.get('unitCount').value;
    this.f.get('unitCountComplete').setValue(unitdone);
    this.f.get('status').setValue('done-all');
    this.store.dispatch(new SaveBuilding(this.f.value));
    this.navCtrl.popToRoot();
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

      if (((buildingType.value != 4) || (buildingType.value != 5)) && (unitCount.value <= 0)) {
        return { 'unitCount': true };
      }
      if (((buildingType.value == 4) || (buildingType.value == 5)) && (unitCount.value <= 0)) {
        return { 'unitCount': true };
      }
      if (((buildingType.value == 4) || (buildingType.value == 5)) && (unitAccess.value < 1)) {
        return { 'unitAccess': true };
      }
      if ((unitAccess.value == 1) && ((floorCount.value == null) || (floorCount.value <= 0))) {
        return { 'floorCount': true };
      }
      if ((unitAccess.value == 2) && (occupiedRoomCount.value == null)) {
        return { 'occupiedRoomCount': true };
      }
      if ((unitAccess.value == 2) && (vacantRoomCount.value == null)) {
        return { 'vacantRoomCount': true }
      }
      if ((unitAccess.value == 2)
        && (vacantRoomCount.value != null)
        && (occupiedRoomCount.value != null)
        && (Number(unitCount.value) != (Number(vacantRoomCount.value) + Number(occupiedRoomCount.value)))) {
        return { 'anyCheck': true }
      }
      if ((unitAccess.value == 2) && (waterQuantity.value < 1)) {
        return { 'waterQuantity': true }
      }
      if ((unitAccess.value == 2) && (waterQuantity.value == 1) && (cubicMeterPerMonth.value == null)) {
        return { 'cubicMeterPerMonth': true, }
      }
      if ((unitAccess.value == 2) && (waterQuantity.value == 2) && (waterBill.value == null)) {
        return { 'waterBill': true }
      }
      if ((unitAccess.value == 2) && ((floorCount.value == null) || (floorCount.value <= 0))) {
        return { 'floorCount': true }
      }
      if ((unitAccess.value == 3) && ((floorCount.value == null) || (floorCount.value <= 0))) {
        return { 'floorCount': true }
      }
      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    var ctrll = this.f.get('waterQuantity.cubicMeterPerMonth');
    var ctrle = this.f.get('waterQuantity.waterBill');
    if (name == 'unitCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.unitCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'unitAccess') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.unitAccess && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'floorCount') {
      return ctrl.invalid && (ctrl.dirty || this.submitRequested);
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
      return ctrls.errors && ctrls.errors.cubicMeterPerMonth && (ctrll.dirty || this.submitRequested);
    }
    if (name == 'waterBill') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.waterBill && (ctrle.dirty || this.submitRequested);
    }
    if (name == 'anyCheck') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.anyCheck && (ctrle.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  private setupCountChanges() {
    this.setupAccessCountChanges();
    this.setupAccessCountChangesForComments();
    this.setupCountChangesForLogs();
  }

  private setupAccessCountChanges() {
    const componentFormArray: string = "accesses";
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

  private setupCountChangesForLogs() {
    const componentFormArray: string = "recCtrl.logs";
    const componentCount: string = "recCtrl.logCount";

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
          ctrl = BuildingInformation1Page.CreateLog(this.fb);
        }

        farr.push(ctrl);
      }
      (this.f.get('recCtrl') as FormGroup).setControl('logs', farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
