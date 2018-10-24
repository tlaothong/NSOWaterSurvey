import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailWaterManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-water-management',
  templateUrl: 'detail-water-management.html',
})
export class DetailWaterManagementPage {

   WaterManagement:FormGroup
  private submitRequested: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:FormBuilder) {
this.WaterManagement = this.fb.group({
  'hasPublicWater' : [null, Validators.required],
  'publicWaterCount' : [null, Validators.required],
  'detail': this.fb.array([]),
  'pwa': [null, Validators.required],
  'mwa': [null, Validators.required],
  'otherPlumbing': [null, Validators.required],
  'hasWaterService' : [null, Validators.required],
  'waterServiceCount' : [null, Validators.required],
  'waterServices': this.fb.array([]),
  'hasWaterTreatment': [null, Validators.required],
  'hasDisaster' : [null, Validators.required],
  'disasters': [null, Validators.required],
  'hasDisasterWarning': [null, Validators.required],
  'disasterWarningMethods' : [null, Validators.required],
  

});

  }


  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.WaterManagement.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailWaterManagementPage');
  }

}
