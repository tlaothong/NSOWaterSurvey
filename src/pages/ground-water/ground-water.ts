import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the GroundWaterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ground-water',
  templateUrl: 'ground-water.html',
})

export class GroundWaterPage {
  @ViewChild('avgWater') avgWater: ISubmitRequestable;
  private submitRequested: boolean;
  public groundWaterForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.groundWaterForm = this.fb.group({
      'privateGroundWater': [null, Validators.required],
      'groundWaterCount': [null, Validators.required],
      'useGroundWaterCount': [null, Validators.required],
      'avgUsageWater': this.fb.group({
        'usageType': [null, Validators.required],
        'usageCubicMeters': [null, Validators.required],
        'waterBill': [null, Validators.required],
        'hasPump': [null, Validators.required],
        'pumpCount': [null, Validators.required],
        'Pumps': this.fb.group({
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
        'UsageActivities' : this.fb.group({
          'Drink':[''],
          'Plant':[''],
          'Farm':[''],
          'Agriculture':[''],
          'Product':[''],
          'Service':[''],
        }),
        'HasQaulityProblem': [null, Validators.required],
        'QualityProblems' : this.fb.group({
          'TurbidWater':[''],
          'SaltWater':[''],
          'Smell':[''],
          'FilmOfOil':[''],
          'FogWater':[''],
          'HardWater':[''],
        }),
      }),
      'publicGroundWater': [null, Validators.required],
      'count': [null, Validators.required],
      'usePerMonth': this.fb.group({
        'cubicMeterPerMonth': [null, Validators.required],
        'unknow': [null, Validators.required],
        'hasPump': [null, Validators.required],
        'pumpCount': [null, Validators.required],
        'Pumps':this.fb.group({
          'PumpAuto':[''],
          'UnknowHoursPerPump':[''],
          'HoursPerPump':[''],
          'NumberOfPumpsPerYear':[''],
          'PumpRate':this.fb.group({
            'KnowPumpRate':[''],
            'PumpRateUsage':['']
          }),
          'EnergySource':this.fb.group({
            'ElecticPump':[''],
            'SolaPump':[''],
            'PetrolPump':[''],
            'TwoWheeledTractors':['']
          }),
          'PumpType':this.fb.group({
            'ElecticPump':[''],
            'SolaPump':[''],
            'PetrolPump':[''],
            'TwoWheeledTractors':['']

          }),
          'HorsePower':[''],
          'SuctionPipeSize':[''],
          'PipelineSize':['']
        }),
        'UsageActivities':this.fb.group({
          'Drink':[''],
          'Plant':[''],
          'Farm':[''],
          'Agriculture':[''],
          'Product':[''],
          'Service':['']
        }),
        'HasQualityProblem':[''],
        'QualityProblem':this.fb.group({
          'TurbidWater':[''],
          'SaltWater':[''],
          'Smell':[''],
          'FilmOfOil':[''],
          'FogWater':[''],
          'HardWater':[''],
        })
      }),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroundWaterPage');
  }

  ionViewDidEnter() {

  }
  public handleSubmit() {
    this.submitRequested = true;
    this.avgWater.submitRequest();
  }

  public isValid(name: string): boolean {
    var ctrl = this.groundWaterForm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
