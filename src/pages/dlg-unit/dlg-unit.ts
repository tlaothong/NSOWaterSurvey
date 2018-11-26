import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UnitButtonComponent } from '../../components/unit-button/unit-button';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-dlg-unit',
  templateUrl: 'dlg-unit.html',
})
export class DlgUnitPage {
  public submitRequested: boolean;
  public FormItem: FormGroup;

  @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];

  public index: number;
  public access: number;
  public comment: string = '';
  public count: number;

  private fgac: FormArray;
  private fgcm: FormArray;

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, private viewCtrl: ViewController, public fb: FormBuilder) {
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
    const dataIn = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(dataIn.value);

    this.setEnvironment();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgUnitPage');
    // this.formData$.subscribe(data => this.FormItem.setValue(data));

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
        this.navCtrl.push("WaterActivityUnitPage")
      }
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public setAccesses() {
    this.FormItem.get('subUnit.accessCount').setValue(this.count);
    this.fgac.at(this.index).setValue({ 'access': [this.access] });
    this.fgcm.at(this.index).setValue({ 'at': [null], 'text': [this.comment], });
  }

  public setEnvironment() {
    this.fgac = this.FormItem.get('subUnit.accesses') as FormArray;
    this.fgcm = this.FormItem.get('comments') as FormArray;

    this.index = this.FormItem.get('subUnit.accessCount').value;
    this.count = this.index + 1;
    this.access = this.fgac.at(this.index).value.access[0];
    this.comment = this.fgcm.at(this.index).value.text[0];
  }
}
