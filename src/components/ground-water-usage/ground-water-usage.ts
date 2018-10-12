import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
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
  @ViewChild('pumpComponent') public pumpComponent: ISubmitRequestable;

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
        'pumpAuto': ['', Validators.required],
        'unknowHoursPerPump': ['', Validators.required],
        'hoursPerPump': ['', Validators.required],
        'numberOfPumpsPerYear': ['', Validators.required],
        'pumpRate': this.fb.group({
          'knowPumpRate': ['', Validators.required],
          'pumpRateUsage': ['', Validators.required],
        }),
        'waterMachine': this.fb.group({
          'energySource': ['', Validators.required],
          'pumpType': ['', Validators.required],
          'horsePower': ['', Validators.required],
          'suctionPipeSize': ['', Validators.required],
          'pipelineSize': ['', Validators.required],
        })
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
    // this.FormItem = GroundWaterUsageComponent.CreateFormGroup(this.fb);
  }

  // public static CreateFormGroup(fb: FormBuilder) : FormGroup {
  //   return fb.group({
  //     'usageType': [null, Validators.required],
  //     'usageCubicMeters': [null, Validators.required],
  //     'waterBill': [null, Validators.required],
  //     'hasPump': [null, Validators.required],
  //     'pumpCount': [null, Validators.required],
  //     'pumps': this.fb.group({
  //       'pumpAuto': ['', Validators.required],
  //       'unknowHoursPerPump': ['', Validators.required],
  //       'hoursPerPump': ['', Validators.required],
  //       'numberOfPumpsPerYear': ['', Validators.required],
  //       'pumpRate': this.fb.group({
  //         'knowPumpRate': ['', Validators.required],
  //         'pumpRateUsage': ['', Validators.required],
  //       }),
  //       'waterMachine': this.fb.group({
  //         'energySource': ['', Validators.required],
  //         'pumpType': ['', Validators.required],
  //         'horsePower': ['', Validators.required],
  //         'suctionPipeSize': ['', Validators.required],
  //         'pipelineSize': ['', Validators.required],
  //       })
  //     }),
  //     'usageActivities': this.fb.group({
  //       'drink': [null, Validators.required],
  //       'plant': [null, Validators.required],
  //       'farm': [null, Validators.required],
  //       'agriculture': [null, Validators.required],
  //       'product': [null, Validators.required],
  //       'service': [null, Validators.required],
  //     }),
  //     'hasQaulityProblem': [null, Validators.required],
  //     'qualityProblems': this.fb.group({
  //       'turbidWater': [null, Validators.required],
  //       'saltWater': [null, Validators.required],
  //       'smell': [null, Validators.required],
  //       'filmOfOil': [null, Validators.required],
  //       'fogWater': [null, Validators.required],
  //       'hardWater': [null, Validators.required],
  //     }),
  //   });
  // }

  submitRequest() {
    this.submitRequested = true;
    this.pumpComponent.submitRequest();
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
