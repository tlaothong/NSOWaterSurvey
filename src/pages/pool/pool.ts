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
      'PoolSize':this.fb.group({
        'Shape':this.fb.group({
          'Area':[''],
          'Rectangle':[''],
          'Circle':[''],
        }),
        'Area':this.fb.group({
          'Rai':[''],
          'Ngan':[''],
          'SqWa':[''],
        }),
        'Depth':[''],
        'Rectangle':this.fb.group({
          'Width':[''],
          'Length':[''],
        }),
        'Diameter':['']
      }),
      'poolCountUsage': [null, Validators.required],
      'poolUsage': this.fb.group({
        'cubicMeterPerMonth': [null, Validators.required],
        'unknowPoolUsage': [null, Validators.required],
        'hasPump': [null, Validators.required],
        'pumpCount': [null, Validators.required],
        'Pump':this.fb.group({
          'PumpAuto':[''],
          'UnknowHoursPerPump':[''],
          'HoursPerPump':[''],
          'NumberOfPumpsPerYear':[''],
          'PumpRate':this.fb.group({
            'KnowPumpRate':[''],
            'PumpRateUsage':[''],
          }),
          'EnergySource':this.fb.group({
            'ElecticPump':[''],
            'SolaPump':[''],
            'PetrolPump':[''],
            'TwoWheeledTractors':[''],
          }),
          'PumpType':this.fb.group({
            'ElecticPump':[''],
            'SolaPump':[''],
            'PetrolPump':[''],
            'TwoWheeledTractors':[''],
          }),
          'HorsePower':[''],
          'SuctionPipeSize':[''],
          'PipelineSize':[''],
        }),
        'WaterActivity':this.fb.group({
          'Drink':[''],
          'Plant':[''],
          'Farm':[''],
          'Agriculture':[''],
          'Product':[''],
          'Service':[''],
        }),
        'WaterProblem':this.fb.group({
          'HasProblem':[''],
          'Problem':this.fb.group({
            'TurbidWater':[''],
            'SaltWater':[''],
            'Smell':[''],
            'FilmOfOil':[''],
            'FogWater':[''],
            'HardWater':[''],
            
          })
        })

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
