import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  f: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public fb: FormBuilder) {
    this.f = this.fb.group({
      'roomNumber': [null, Validators.required],
      'access': [null, Validators.required],
      'hasPlumbing': [null, Validators.required],
      'hasPlumbingMeter': [null, Validators.required],
      'isPlumbingMeterXWA': [null, Validators.required],
      'hasGroundWater': [null, Validators.required],
      'hasGroundWaterMeter': [null, Validators.required],
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
      'comments': this.fb.group({
        'text': [null, Validators.required],

      }),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgUnitPage');
  }
  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
