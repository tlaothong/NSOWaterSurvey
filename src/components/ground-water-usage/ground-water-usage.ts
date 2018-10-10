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
      'pumps': this.fb.group({
        'pumpAuto': [null, Validators.required],
        'unknowHoursPerPump': [null, Validators.required],
        'hoursPerPump': [null, Validators.required],
        'numberOfPumpsPerYear': [null, Validators.required],
        'pumpRate': this.fb.group({
          'knowPumpRate': [null, Validators.required],
          'pumpRateUsage': [null, Validators.required],
        }),
        'energySource': this.fb.group({
          'electicPump': [null, Validators.required],
          'solaPump': [null, Validators.required],
          'petrolPump': [null, Validators.required],
          'twoWheeledTractors': [null, Validators.required],
        }),
        'pumpType': this.fb.group({
          'electicPump': [null, Validators.required],
          'solaPump': [null, Validators.required],
          'petrolPump': [null, Validators.required],
          'twoWheeledTractors': [null, Validators.required],
        }),
        'horsePower': [null, Validators.required],
        'suctionPipeSize': [null, Validators.required],
        'pipelineSize': [null, Validators.required],
      }),
      'usageActivities': this.fb.group({
        'drink': [null, Validators.required],
        'plant': [null, Validators.required],
        'farm': [null, Validators.required],
        'agriculture': [null, Validators.required],
        'product': [null, Validators.required],
        'service': [null, Validators.required],
      }),
      'hasQaulityProblem': [null, Validators.required],
      'qualityProblems': this.fb.group({
        'turbidWater': [null, Validators.required],
        'saltWater': [null, Validators.required],
        'smell': [null, Validators.required],
        'filmOfOil': [null, Validators.required],
        'fogWater': [null, Validators.required],
        'hardWater': [null, Validators.required],
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
