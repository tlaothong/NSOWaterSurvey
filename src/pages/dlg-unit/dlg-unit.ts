import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { UnitButtonComponent } from '../../components/unit-button/unit-button';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';

@IonicPage()
@Component({
  selector: 'page-dlg-unit',
  templateUrl: 'dlg-unit.html',
})
export class DlgUnitPage {
  public submitRequested: boolean;
  public FormItem: FormGroup;

  public index: number;
  public access: number;
  public comment: string = '';
  public count: number;

  private fgac: FormArray;
  private fgcm: FormArray;

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, private viewCtrl: ViewController, public fb: FormBuilder) {
    this.FormItem = navParams.get('FormItem');

    this.setEnvironment();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgUnitPage');
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    if (this.FormItem.get('subUnit.roomNumber').valid && this.access != null) {
      this.setAccesses();
      this.viewCtrl.dismiss(this.FormItem);
      if (this.access == 1) {
        this.navCtrl.push('WaterActivityUnitPage', { FormItem: this.FormItem })
      }
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public setAccesses() {
    this.FormItem.get('subUnit.accessCount').setValue(this.count);
    this.fgac.at(this.index).setValue(this.access);
    this.fgcm.at(this.index).setValue({ 'at': [null], 'text': [this.comment], });
  }

  public setEnvironment() {
    this.count = this.FormItem.get('subUnit.accessCount').value;
    this.index = this.count - 1;

    this.fgac = this.FormItem.get('subUnit.accesses') as FormArray;
    this.fgcm = this.FormItem.get('comments') as FormArray;

    this.access = this.fgac.at(this.index).value;
    this.comment = this.fgcm.at(this.index).value.text;
  }
}
