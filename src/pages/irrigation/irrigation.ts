import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the IrrigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-irrigation',
  templateUrl: 'irrigation.html',
})
export class IrrigationPage {
  IrrigationFrm: FormGroup;
  private submitRequested: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.IrrigationFrm = this.fb.group({
      'cubicMeterPerMonth': ['', Validators.required],
      'unknowPoolUsage': ['', Validators.required],
      'hasPump': ['', Validators.required],
      'pumpCount': ['', Validators.required],
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IrrigationPage');
  }


  public handleSubmit() {
    this.submitRequested = true;

  }

  public isValid(name: string): boolean {
    var ctrl = this.IrrigationFrm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
