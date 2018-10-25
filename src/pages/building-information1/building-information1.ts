import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the BuildingInformation1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-building-information1',
  templateUrl: 'building-information1.html',
})
export class BuildingInformation1Page {

  public f: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      'ordering': [null, Validators.required],
      'road': [null, Validators.required],
      'alley': [null, Validators.required],
      'name': [null, Validators.required],
      'houseNo': [null, Validators.required],
      'latitude': [null, Validators.required],
      'longtitude': [null, Validators.required],
      'buildingType': [null, Validators.required],
      'other': [null, Validators.required],
      'access': [null, Validators.required],
      'vacancyCount': [null, Validators.required],
      'abandonedCount': [null, Validators.required],
      

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingInformation1Page');
  }

  
  // public isValid(name: string): boolean {
  //   var ctrl = this.f.get(name);
  //   return ctrl.invalid && (ctrl.touched || this.submitRequested);
  // }
  

}
