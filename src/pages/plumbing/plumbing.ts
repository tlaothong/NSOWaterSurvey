import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterProblem6Component } from '../../components/water-problem6/water-problem6';
import { WaterActivity5Component } from '../../components/water-activity5/water-activity5';

/**
 * Generated class for the PlumbingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plumbing',
  templateUrl: 'plumbing.html',
})
export class PlumbingPage {

  @ViewChildren(WaterProblem6Component) private waterProblem6 : WaterProblem6Component[];
  @ViewChildren(WaterActivity5Component) private waterActivity5 : WaterActivity5Component[];
  public f: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.f = this.fb.group({
      'mwa': this.fb.group({
        'doing': ['', Validators.required],
        'waterProblem6' : WaterProblem6Component.CreateFormGroup(this.fb),
        'plumbingUsage': this.fb.group({
          'waterQuantity': null,
          'cubicMeterPerMonth': ['', Validators.required],
          'waterBill': ['', Validators.required],
          'unknowNoMeter': ['', Validators.required],
          'unknowExcepted': ['', Validators.required]
        })
      }),
      'pwa': this.fb.group({
        'doing': ['', Validators.required],
        'isWaterQuality': ['', Validators.required],
        'waterProblem6' : WaterProblem6Component.CreateFormGroup(this.fb),
        'plumbingUsage': this.fb.group({
          'waterQuantity': null,
          'cubicMeterPerMonth': ['', Validators.required],
          'waterBill': ['', Validators.required],
          'unknowNoMeter': ['', Validators.required],
          'unknowExcepted': ['', Validators.required]
        })
      }),
      'other': this.fb.group({
        'doing': ['', Validators.required],
        'isWaterQuality': ['', Validators.required],
        'waterProblem6' : WaterProblem6Component.CreateFormGroup(this.fb),
        'plumbingUsage': this.fb.group({
          'waterQuantity': null,
          'cubicMeterPerMonth': ['', Validators.required],
          'waterBill': ['', Validators.required],
          'unknowNoMeter': ['', Validators.required],
          'unknowExcepted': ['', Validators.required]
        })
      }),
      'waterActivityMWAPWA': WaterActivity5Component.CreateFormGroup(this.fb),
      'waterActivityOther': WaterActivity5Component.CreateFormGroup(this.fb),
      'waterNotRunning': ['', Validators.required],
      'waterNotRunningCount': ['', Validators.required]
    });

    // this.PlumbingForm.get('MWA.PlumbingUsage.WaterQuantity').valueChanges.subscribe(x => alert(x));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlumbingPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
