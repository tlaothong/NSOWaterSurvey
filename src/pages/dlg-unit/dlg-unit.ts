import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnitPage } from '../unit/unit';
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
  private submitRequested: boolean;
  public FormItem: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public fb: FormBuilder) {
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgUnitPage');
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    if (this.FormItem.get('subUnit.roomNumber').valid && this.FormItem.get('subUnit.access').valid) {
      this.viewCtrl.dismiss(this.FormItem);
      if (this.FormItem.get('subUnit.access').value == 1) {
        this.navCtrl.push("WaterActivityUnitPage")
      }
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
