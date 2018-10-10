import { Component, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
/**
 * Generated class for the GroundWaterUsageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ground-water-usage',
  templateUrl: 'ground-water-usage.html'
})
export class GroundWaterUsageComponent implements ISubmitRequestable {
  
  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;
 
  constructor(private fb: FormBuilder) {
    console.log('Hello GroundWaterUsageComponent Component');
    this.text = '1';
    this.FormItem = this.fb.group({
      'usageType': [null, Validators.required],
      'usageCubicMeters': [null, Validators.required],
      'waterBill': [null, Validators.required],
      'hasPump': [null, Validators.required],
      'pumpCount': [null, Validators.required],
      'Pumps': this.fb.group({
        'PumpAuto': [null, Validators.required],
        'UnknowHoursPerPump': [null, Validators.required],
        'HoursPerPump': [null, Validators.required],
        'NumberOfPumpsPerYear': [null, Validators.required],
        'PumpRate': this.fb.group({
          'KnowPumpRate': [null, Validators.required],
          'PumpRateUsage': [null, Validators.required],
        }),
        'EnergySource': this.fb.group({
          'ElecticPump': [null, Validators.required],
          'SolaPump': [null, Validators.required],
          'PetrolPump': [null, Validators.required],
          'TwoWheeledTractors': [null, Validators.required],
        }),
        'PumpType': this.fb.group({
          'ElecticPump': [null, Validators.required],
          'SolaPump': [null, Validators.required],
          'PetrolPump': [null, Validators.required],
          'TwoWheeledTractors': [null, Validators.required],
        }),
        'HorsePower': [null, Validators.required],
        'SuctionPipeSize': [null, Validators.required],
        'PipelineSize': [null, Validators.required],
      }),
      'UsageActivities': this.fb.group({
        'Drink': [null, Validators.required],
        'Plant': [null, Validators.required],
        'Farm': [null, Validators.required],
        'Agriculture': [null, Validators.required],
        'Product': [null, Validators.required],
        'Service': [null, Validators.required],
      }),
      'HasQaulityProblem': [null, Validators.required],
      'QualityProblems': this.fb.group({
        'TurbidWater': [null, Validators.required],
        'SaltWater': [null, Validators.required],
        'Smell': [null, Validators.required],
        'FilmOfOil': [null, Validators.required],
        'FogWater': [null, Validators.required],
        'HardWater': [null, Validators.required],
      }),
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
