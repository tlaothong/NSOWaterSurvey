import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the DryCropPlantingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dry-crop-planting',
  templateUrl: 'dry-crop-planting.html',
})
export class DryCropPlantingPage {

  public agronomyPlant: FormGroup;

  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.agronomyPlant = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'irrigationField': [null, Validators.required],
      'names': [null, Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DryCropPlantingPage');

  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string) : boolean {
    var ctrl = this.agronomyPlant.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
