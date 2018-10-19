import { Component,ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { WaterActivity6Component } from '../../components/water-activity6/water-activity6';
import { RainStorageComponent } from '../../components/rain-storage/rain-storage';
import { WaterActivity5Component } from '../../components/water-activity5/water-activity5';

/**
 * Generated class for the RainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rain',
  templateUrl: 'rain.html',
})
export class RainPage {

  @ViewChildren(RainStorageComponent) private rainStorage : RainStorageComponent[];
  @ViewChildren(WaterActivity5Component) private waterActivity5 : WaterActivity5Component[];

  RainFrm: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.RainFrm = this.fb.group({
      'rainContainers': RainStorageComponent.CreateFormGroup(fb),
      'waterActivities': WaterActivity6Component.CreateFormGroup(fb),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RainPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.rainStorage.forEach(it => it.submitRequest());
    this.waterActivity5.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.RainFrm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
  }


}
