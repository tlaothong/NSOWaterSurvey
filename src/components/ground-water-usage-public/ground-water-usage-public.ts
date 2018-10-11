import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the GroundWaterUsagePublicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ground-water-usage-public',
  templateUrl: 'ground-water-usage-public.html'
})
export class GroundWaterUsagePublicComponent {

  @Input("headline") public text: string;
  FormGroundwaterPublic: FormGroup;
  constructor(private fb: FormBuilder) {
    console.log('Hello GroundWaterUsagePublicComponent Component');
    this.text = '1';

    this.FormGroundwaterPublic = this.fb.group({
      'cubicMeterPerMonth': [null, Validators.required],
      'unknow': [null, Validators.required],
      'hasPump': [null, Validators.required],
      'pumpCount': [null, Validators.required],
      'pumps': this.fb.group({
        'pumpAuto': [null, Validators.required],
        'unknowHoursPerPump': [null, Validators.required],
        'hoursPerPump': [null, Validators.required],
        'numberOfPumpsPerYear': [null, Validators.required],
        'pumpRate': this.fb.group({
          'knowPumpRate': [null, Validators.required],
          'pumpRateUsage': [null, Validators.required]
        }),
        'energySource': this.fb.group({
          'electicPump': [null, Validators.required],
          'solaPump': [null, Validators.required],
          'petrolPump': [null, Validators.required],
          'twoWheeledTractors': [null, Validators.required]
        }),
        'pumpType': this.fb.group({
          'electicPump': [null, Validators.required],
          'solaPump': [null, Validators.required],
          'petrolPump': [null, Validators.required],
          'twoWheeledTractors': [null, Validators.required]

        }),
        'horsePower': [null, Validators.required],
        'suctionPipeSize': [null, Validators.required],
        'pipelineSize': [null, Validators.required]
      }),
      'usageActivities': this.fb.group({
        'drink': [null, Validators.required],
        'plant': [null, Validators.required],
        'farm': [null, Validators.required],
        'agriculture': [null, Validators.required],
        'product': [null, Validators.required],
        'service': [null, Validators.required]
      }),
      'hasQualityProblem': [null, Validators.required],
      'qualityProblem': this.fb.group({
        'turbidWater': [null, Validators.required],
        'saltWater': [null, Validators.required],
        'smell': [null, Validators.required],
        'filmOfOil': [null, Validators.required],
        'fogWater': [null, Validators.required],
        'hardWater': [null, Validators.required],
      })
    })
  }

}
