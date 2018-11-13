import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the BuidlingInformation2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buidling-information2',
  templateUrl: 'buidling-information2.html',
})
export class BuidlingInformation2Page {
  public f: FormGroup;
  private submitRequested: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.f = this.fb.group({
      'unitCount': [null, Validators.required],
      'unitAccess': [null, Validators.required],
      'vacantRoomCount': [null, Validators.required],
      'occupiedRoomCount': [null, Validators.required],
      'waterQuantity': [null, Validators.required],
      'waterBill': [null, Validators.required],
      'floorCount': [null, Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuidlingInformation2Page');
  }
  public handleSubmit() {
    this.submitRequested = true;
  }
  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
