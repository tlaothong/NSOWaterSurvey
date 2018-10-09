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
  public IrrigationFrm: FormGroup;
  private submitRequested: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IrrigationPage');
  }
  ionViewDidEnter() {
    this.IrrigationFrm = this.fb.group({
      'cubicMeterPerMonth': [null, Validators.required],
      'unknowPoolUsage': [null, Validators.required],
      'hasPump': [null, Validators.required],
      'pumpCount': [null, Validators.required],
    });
  }

  public handleSubmit() {
    this.submitRequested = true;

  }

  public isValid(name: string): boolean {
    var ctrl = this.IrrigationFrm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
