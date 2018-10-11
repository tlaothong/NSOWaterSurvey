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
      'poolSize':this.fb.group({
        'shape':this.fb.group({
          'area':[''],
          'rectangle':[''],
          'circle':[''],
        }),
        'area':this.fb.group({
          'rai':[''],
          'ngan':[''],
          'sqWa':[''],
        }),
        'depth':[''],
        'rectangle':this.fb.group({
          'width':[''],
          'length':[''],
        }),
        'diameter':['']
      }),
      'poolCountUsage': [null, Validators.required],
      'poolUsage': this.fb.group({
        'cubicMeterPerMonth': [null, Validators.required],
        'unknowPoolUsage': [null, Validators.required],
        'hasPump': [null, Validators.required],
        'pumpCount': [null, Validators.required],
        'pump':this.fb.group({
          'pumpAuto':[''],
          'unknowHoursPerPump':[''],
          'hoursPerPump':[''],
          'numberOfPumpsPerYear':[''],
          'pumpRate':this.fb.group({
            'knowPumpRate':[''],
            'pumpRateUsage':[''],
          }),
          'energySource':this.fb.group({
            'electicPump':[''],
            'solaPump':[''],
            'petrolPump':[''],
            'twoWheeledTractors':[''],
          }),
          'pumpType':this.fb.group({
            'electicPump':[''],
            'solaPump':[''],
            'petrolPump':[''],
            'twoWheeledTractors':[''],
          }),
          'horsePower':[''],
          'suctionPipeSize':[''],
          'pipelineSize':[''],
        }),
        'waterActivity':this.fb.group({
          'drink':[''],
          'plant':[''],
          'farm':[''],
          'agriculture':[''],
          'product':[''],
          'service':[''],
        }),
        'waterProblem':this.fb.group({
          'hasProblem':[''],
          'problem':this.fb.group({
            'turbidWater':[''],
            'saltWater':[''],
            'smell':[''],
            'filmOfOil':[''],
            'fogWater':[''],
            'hardWater':[''],
          })
        })

      })
    });
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
