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
  // private formDataFromBuilding1$ = this.store.select(setHomeBuilding).pipe(map(s => s));

  // private getBuildingType$ = this.store.select(getSendBuildingType);
  // private dataHomeBuilding$ = this.store.select(setHomeBuilding).pipe(map(s => s));

  @ViewChildren(BuildingInformation1Page) private buildingInformation1: BuildingInformation1Page[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  @ViewChild("numOfUnits") private numOfUnits;
  checked: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<BuildingState>,
    private appState: AppStateProvider) {
    this.f = BuidlingInformation2Page.CreateFormGroup(fb);
    // this.dataHomeBuilding$.subscribe(data => {
    //   if (data != null) {
    //     console.log(data);

    //     this.f.get('accessCount').setValue(data.accessCount);
    //     this.f.setValue(data);
    //   }
    // });
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
      'recCtrl': [null, Validators.required],
      'vacantRoomCount': [null, Validators.required],
      'unitCountComplete': 0,
      'unitCount': [0, Validators.required],
      'unitAccess': [null, Validators.required],
      'occupiedRoomCount': [null, Validators.required],
      'waterQuantity': fb.group({
        'waterQuantity': [null, Validators.required],
        'cubicMeterPerMonth': [null, Validators.required],
        'waterBill': [null, Validators.required],
      }),
      'floorCount': [null, [Validators.required, Validators.min(1)]],
      '_id': [null],
      'status': [null],
      'lastUpdate': null,
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

    // this.getBuildingType$.subscribe(data => console.log(data));
    console.log(this.f.value);

    // this.getBuildingType$.subscribe(data => {
    //   this.f.get('buildingType').setValue(data);
    //   setTimeout(() => this.numOfUnits._native.nativeElement.select(), 99);
    // });
    //   }
    // });
  }

  public handleSubmit() {
    console.log("House Hold Unit: " + this.appState.houseHoldUnit);
    this.submitRequested = true;
    this.count.forEach(it => it.submitRequest());
    console.log("data ยิง API", this.f.value);
    console.log("f.valid", this.f.valid);
    this.f.get('lastUpdate').setValue(Date.now())
    console.log(this.f.get('lastUpdate').value);
    console.log(this.isCheckValidAccess2());
    console.log(this.isCheckValidAccess3());

    this.isCheckWarningBox = this.isCheckValidate();

    if (this.f.get('unitCount').value > 0) {
      if (this.f.get('buildingType').value == 4 || this.f.get('buildingType').value == 5) {
        if (this.f.get('floorCount').valid) {
          if (this.f.get('unitAccess').value == 1) {
            this.saveThenSurveyUnit();
          }
          else {
            if (this.f.get('unitAccess').value == 2 && this.isCheckValidAccess2()) {
              this.saveThenGoHome();
            }
            else if (this.f.get('unitAccess').value == 3 && this.isCheckValidAccess3()) {
              this.saveThenGoHome();
            }
          }
        }
      }
      else {
        this.saveThenSurveyUnit();
      }
    }
  }

  public isCheckValidate() {
    switch (this.f.get('unitAccess').value) {
      case 2:
        return this.f.get('unitCount').value > 0 && this.isCheckValidAccess2();
      case 3:
        return this.f.get('unitCount').value > 0 && this.isCheckValidAccess3();
      default:
        return this.f.get('unitCount').value > 0;
    }
  }

  private saveThenSurveyUnit() {
    let unitCount = this.f.get('unitCount').value;
    // this.store.dispatch(new SetRecieveDataFromBuilding(unitCount));
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
    // this.localStorage();
    this.store.dispatch(new SaveBuilding(this.f.value));
    this.navCtrl.popToRoot();
  }

  public isCheckValidAccess2(): boolean {
    if (this.f.get('occupiedRoomCount').valid && this.f.get('vacantRoomCount').valid) {
      if (this.f.get('waterQuantity.waterQuantity').value == 1) {
        return this.f.get('waterQuantity.cubicMeterPerMonth').valid && this.f.get('floorCount').valid
      }
      else {
        return this.f.get('waterQuantity.waterBill').valid && this.f.get('floorCount').valid
      }
    }
    return false;
  }

  public isCheckValidAccess3(): boolean {
    return this.f.get('floorCount').valid;
  }

  // localStorage() {
  //   this.storage.set(this.f.get('_id').value, this.f.value);
  //   this.storage.get(this.f.get('ea').value).then((data) => {
  //     console.log("test: ", data);
  //     let listBD = data
  //     let idBD = this.f.get('_id').value;
  //     if (listBD != null) {
  //       let fin = listBD.find(it => it._id == idBD)
  //       if (fin == null) {
  //         listBD.push(this.f.value)
  //         this.storage.set(this.f.get('ea').value, listBD)
  //       } else {
  //         let index = listBD.findIndex(it => it._id == idBD)
  //         listBD.splice(index, 1, this.f.value);
  //         // listBD.push(this.f.value);
  //         this.storage.set(this.f.get('ea').value, listBD)
  //       }
  //     } else {
  //       listBD = []
  //       listBD.push(this.f.value)
  //       this.storage.set(this.f.get('ea').value, listBD)
  //     }
  //     console.log(listBD);
  //   })
  // }

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
}
