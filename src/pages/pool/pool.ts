import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the PoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pool',
  templateUrl: 'pool.html',
})
export class PoolPage {

  public pool: FormGroup;

  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.pool = this.fb.group({
      'isExist': [null, Validators.required],
      'poolCount': [null, Validators.required],
      'poolEqual': [null, Validators.required],
      'poolCountUsage': [null, Validators.required],
      'poolUsage': this.fb.group({
        'unknowPoolUsage': [null, Validators.required],
        'cubicMeterPerMonth': [null, Validators.required],
        'hasPump': [null, Validators.required],
        'pumpCount': [null, Validators.required]
      })
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PoolPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.pool.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
