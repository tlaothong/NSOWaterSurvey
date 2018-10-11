import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  public PlumbingForm: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.PlumbingForm = this.fb.group({
      'MWA': this.fb.group({
        'Doing': ['', Validators.required],
        'isWaterQuality': ['', Validators.required],
        'ProblemAdd': this.fb.group({
          'SaltWater': [false, Validators.required],
          'Smell': [false, Validators.required],
          'FilmOfOil': [false, Validators.required],
          'FogWater': [false, Validators.required],
          'TurbidWater': [false, Validators.required],
          'HardWater': [false, Validators.required]
        }),
        'PlumbingUsage': this.fb.group({
          'WaterQuantity': null,
          'CubicMeterPerMonth': ['', Validators.required],
          'WaterBill': ['', Validators.required],
          'UnknowNoMeter': ['', Validators.required],
          'UnknowExcepted': ['', Validators.required]
        })
      }),
      'PWA': this.fb.group({
        'Doing': ['', Validators.required],
        'isWaterQuality': ['', Validators.required],
        'ProblemAdd': this.fb.group({
          'SaltWater': [false, Validators.required],
          'Smell': [false, Validators.required],
          'FilmOfOil': [false, Validators.required],
          'FogWater': [false, Validators.required],
          'TurbidWater': [false, Validators.required],
          'HardWater': [false, Validators.required]
        }),
        'PlumbingUsage': this.fb.group({
          'WaterQuantity': null,
          'CubicMeterPerMonth': ['', Validators.required],
          'WaterBill': ['', Validators.required],
          'UnknowNoMeter': ['', Validators.required],
          'UnknowExcepted': ['', Validators.required]
        })
      }),
      'Other': this.fb.group({
        'Doing': ['', Validators.required],
        'isWaterQuality': ['', Validators.required],
        'ProblemAdd': this.fb.group({
          'SaltWater': [false, Validators.required],
          'Smell': [false, Validators.required],
          'FilmOfOil': [false, Validators.required],
          'FogWater': [false, Validators.required],
          'TurbidWater': [false, Validators.required],
          'HardWater': [false, Validators.required]
        }),
        'PlumbingUsage': this.fb.group({
          'WaterQuantity': null,
          'CubicMeterPerMonth': ['', Validators.required],
          'WaterBill': ['', Validators.required],
          'UnknowNoMeter': ['', Validators.required],
          'UnknowExcepted': ['', Validators.required]
        })
      }),
      'WaterActivityMWAPWA': this.fb.group({
        'Drink': ['', Validators.required],
        'Plant': ['', Validators.required],
        'Agriculture': ['', Validators.required],
        'Product': ['', Validators.required],
        'Service': ['', Validators.required]
      }),
      'WaterActivityOther': this.fb.group({
        'Drink': ['', Validators.required],
        'Plant': ['', Validators.required],
        'Agriculture': ['', Validators.required],
        'Product': ['', Validators.required],
        'Service': ['', Validators.required]
      }),
      'WaterNotRunning': ['', Validators.required],
      'WaterNotRunningCount': ['', Validators.required]
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
    var ctrl = this.PlumbingForm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
