import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UnitButtonComponent } from '../../components/unit-button/unit-button';

/**
 * Generated class for the DlgUnitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-unit',
  templateUrl: 'dlg-unit.html',
})
export class DlgUnitPage {
  public submitRequested: boolean;
  public FormItem: FormGroup;

  @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];

  public access: number;
  public comment: string;
  public count: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public fb: FormBuilder) {
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
    const dataIn = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(dataIn.value);
    this.count = this.FormItem.get('subUnit.accessCount').value + 1;
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
    let fgac = this.FormItem.get('subUnit.accesses') as FormArray;
    let fgcm = this.FormItem.get('comments') as FormArray;
    fgac.at(this.count - 1).setValue({ 'access': [this.access] });
    fgcm.at(this.count - 1).setValue({ 'at': [null], 'text': [this.comment], });
  }
}
