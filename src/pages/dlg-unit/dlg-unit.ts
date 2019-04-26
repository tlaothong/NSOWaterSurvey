import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { AppStateProvider } from '../../providers/app-state/app-state';

// import { Guid } from "guid-typescript";
@IonicPage()
@Component({
  selector: 'page-dlg-unit',
  templateUrl: 'dlg-unit.html',
})
export class DlgUnitPage {
  public submitRequested: boolean;
  // public FormItem: FormGroup;
  public ff: FormGroup;

  private replaceMode: boolean = false;

  // public index: number;
  // public access: number;
  public static accessValid: number;
  // public comment: string = null;
  public count: number;
  public oldStatus: string;

  // private fgac: FormArray;
  // private fgcm: FormArray;

  // public id_BD: string;

  // private dataHomeBuilding$ = this.storeBuilding.select(setHomeBuilding);
  // public dataHouseHold$ = this.store.select(getHouseHoldSample);

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>,
    private storeBuilding: Store<HouseHoldState>, public navParams: NavParams,
    private viewCtrl: ViewController, public fb: FormBuilder,
    private appState: AppStateProvider) {

    this.replaceMode = navParams.get('replaceMode');
    let unitInfo = navParams.get('unitInfo');
    this.ff = DlgUnitPage.CreateFormGroup(fb);
    this.ff.patchValue(unitInfo);

    this.count = this.replaceMode ? unitInfo.subUnit.accessCount : Math.min(3, unitInfo.subUnit.accessCount + 1);
    // this.ff.get('subUnit.accessCount').setValue(this.FormItem.get('subUnit.accessCount').value);

    // this.setupAccessCountChanges();

    // this.ff.get('subUnit').setValue(this.FormItem.get('subUnit').value);

    // this.dataHomeBuilding$.subscribe(data => {
    //   if (data != null) {
    //     this.id_BD = data._id
    //     this.FormItem.controls['buildingId'].setValue(this.id_BD);
    //   }
    // });

    // this.FormItem.controls['buildingId'].setValue(this.appState.buildingId);
    // this.setEnvironment();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'subUnit': fb.group({
        'roomNumber': [null, Validators.required],
        'accessCount': 0,
        'accesses': null,
        'hasPlumbing': null,
        'hasPlumbingMeter': null,
        'isPlumbingMeterXWA': null,
        'hasGroundWater': null,
        'hasGroundWaterMeter': null,
      }),
      'access': [null, Validators.required],
      'comment': null
    }, {
        validator: DlgUnitPage.checkAnyOrOther()
      });
  }

  ionViewDidLoad() {
    // this.store.dispatch(new LoadDataOfUnit(this.FormItem.get('_id').value));
    // this.dataHouseHold$.subscribe(data => {
    //   if (data != null) {
    //     this.FormItem.setValue(data);
    //     console.log(data);
    //     this.setEnvironment();
    //   }
    // });
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;

    if (this.ff.valid) {
      let formValue = this.ff.value;
      let subUnit = formValue.subUnit;

      if (this.replaceMode) {
        if (subUnit.accesses.length > 0) {
          subUnit.accesses[subUnit.accesses.length - 1] = formValue.access;
        } else {
          subUnit.accesses.push(formValue.access);
        }
      } else {
        subUnit.accessCount++;
        subUnit.accesses.push(formValue.access);
      }

      console.log('ff formValue: ' + JSON.stringify(formValue));

      this.viewCtrl.dismiss({
        subUnit: subUnit,
        comment: formValue.comment,
      });
    }

    // DlgUnitPage.accessValid = this.access;
    // console.log(DlgUnitPage.accessValid);
    // this.FormItem.get('subUnit').setValue(this.ff.get('subUnit').value)
    // this.store.dispatch(new SetNumberRoom(this.FormItem.get('subUnit.roomNumber').value));
    // if (this.access == 1) {
    //   if (this.ff.valid && this.access != null) {
    //     this.setAccesses();
    //     this.AddUnit();
    //     this.viewCtrl.dismiss(this.FormItem);
    //   }
    // } else {
    //   if (this.ff.get('subUnit.roomNumber').value != null) {
    //     this.setAccesses();
    //     this.AddUnit();
    //     this.viewCtrl.dismiss(this.FormItem);
    //   }
    // }

  }

  // public setValue(name: string) {
  //   var ctrl = this.FormItem.get(name);
  //   if (name == "hasPlumbing" ) {
  //     this.FormItem.get('hasPlumbingMeter').setValue(false);
  //     this.FormItem.get('isPlumbingMeterXWA').setValue(false);
  //   }
  //   if (name == "hasGroundWater") {
  //     this.FormItem.get('hasGroundWaterMeter').setValue(false);
  //   }
  // }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const access = c.get('access').value;
      const roomNumber = c.get('subUnit.roomNumber').value;
      const hasPlumbing = c.get('subUnit.hasPlumbing').value;
      const hasPlumbingMeter = c.get('subUnit.hasPlumbingMeter').value;
      const isPlumbingMeterXWA = c.get('subUnit.isPlumbingMeterXWA').value;
      const hasGroundWater = c.get('subUnit.hasGroundWater').value;
      const hasGroundWaterMeter = c.get('subUnit.hasGroundWaterMeter').value;

      if (roomNumber == null) {
        return { 'roomNumber': true };
      }
      if (hasPlumbing == null && access == 1) {
        return { 'hasPlumbing': true };
      }
      if (hasPlumbing == true && hasPlumbingMeter == null && access == 1) {
        return { 'hasPlumbingMeter': true };
      }
      if (hasPlumbingMeter == true && isPlumbingMeterXWA == null && access == 1) {
        return { 'isPlumbingMeterXWA': true };
      }
      if (hasGroundWater == null && access == 1) {
        return { 'hasGroundWater': true };
      }
      if (hasGroundWater == true && hasGroundWaterMeter == null && access == 1) {
        return { 'hasGroundWaterMeter': true };
      }
      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.ff.get(name);
    var ct = this.ff.get('subUnit.roomNumber');
    var cd = this.ff.get('subUnit.hasPlumbing');
    var cr = this.ff.get('subUnit.hasPlumbingMeter');
    var cs = this.ff.get('subUnit.hasGroundWater');
    var cm = this.ff.get('subUnit.isPlumbingMeterXWA');
    var cn = this.ff.get('subUnit.hasGroundWaterMeter');

    if (name == 'subUnit.roomNumber') {
      let ctrls = this.ff;
      return ctrls.errors && ctrls.errors.roomNumber && (ct.dirty || this.submitRequested);
    }

    if (name == 'subUnit.hasPlumbing') {
      let ctrls = this.ff;
      return ctrls.errors && ctrls.errors.hasPlumbing && (cd.dirty || this.submitRequested);
    }
    if (name == 'subUnit.hasGroundWater') {
      let ctrls = this.ff;
      return ctrls.errors && ctrls.errors.hasGroundWater && (cs.dirty || this.submitRequested);
    }
    if (name == 'subUnit.hasPlumbingMeter') {
      let ctrls = this.ff;
      return ctrls.errors && ctrls.errors.hasPlumbingMeter && (cr.dirty || this.submitRequested);
    }
    if (name == 'subUnit.isPlumbingMeterXWA') {
      let ctrls = this.ff;
      return ctrls.errors && ctrls.errors.isPlumbingMeterXWA && (cm.dirty || this.submitRequested);
    }
    if (name == 'subUnit.hasGroundWaterMeter') {
      let ctrls = this.ff;
      return ctrls.errors && ctrls.errors.hasGroundWaterMeter && (cn.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  // public setAccesses() {
  //   this.FormItem.get('subUnit.accessCount').setValue(this.count);
  //   this.fgac.at(this.index).setValue(this.access);
  //   this.fgcm.at(this.index).setValue({ 'at': Date.now(), 'text': this.comment, });
  //   this.updateStatus();
  // }

  // public updateStatus() {
  //   this.oldStatus = this.FormItem.get('status').value;
  //   let status: string;
  //   switch (this.access) {
  //     case 1:
  //       status = "pause";
  //       break;
  //     case 2:
  //     case 3:
  //       status = (this.index < 2) ? "return" : "complete";
  //       break;
  //     default:
  //       status = "complete";
  //       break;
  //   }
  //   console.log(status);

  //   this.FormItem.get('status').setValue(status);
  // }

  // public setEnvironment() {
  //   this.count = this.FormItem.get('subUnit.accessCount').value;
  //   this.index = this.count - 1;

  //   this.fgac = this.FormItem.get('subUnit.accesses') as FormArray;
  //   this.fgcm = this.FormItem.get('comments') as FormArray;

  //   this.access = this.fgac.at(this.index).value;
  //   this.comment = this.fgcm.at(this.index).value.text;
  // }

  // AddUnit() {
  //   let id = this.FormItem.get('_id').value;
  //   this.store.dispatch(new LoadHouseHoldSample(this.FormItem.value));
  //   let key = this.appState.buildingId;
  //   console.log(this.appState.buildingId);

  //   this.local.updateListUnit(this.FormItem.get('buildingId').value, this.FormItem.value);
}
