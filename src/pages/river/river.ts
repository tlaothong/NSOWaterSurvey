import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PumpComponent } from '../../components/pump/pump';

/**
 * Generated class for the RiverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-river',
  templateUrl: 'river.html',
})
export class RiverPage {

  private submitRequested: boolean;
  river: FormGroup;

  @ViewChildren(PumpComponent) private pump: PumpComponent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.river = this.fb.group({
        "hasPump": ['',Validators.required],
        "pumpCount": ['',Validators.required],
        "pumps":  this.fb.array([]),
        "usageActivities": this.fb.group({
          "drink": ['',Validators.required],
          "plant": ['',Validators.required],
          "farm": ['',Validators.required],
          "agriculture": 0,
          "product": 0,
          "service": 0
        }),
        "qualityProblem": this.fb.group({
          "hasProblem": ['',Validators.required],
          "problem": this.fb.group({
            "turbidWater": ['',Validators.required],
            "saltWater": ['',Validators.required],
            "smell": ['',Validators.required],
            "filmOfOil": ['',Validators.required],
            "fogWater": ['',Validators.required],
            "hardWater": ['',Validators.required]
          })
        })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiverPage');
  }

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.pump.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.river.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
