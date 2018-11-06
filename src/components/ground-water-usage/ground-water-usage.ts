import { Component, Input, AfterViewInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { PumpComponent } from '../pump/pump';
import { WaterActivity6Component } from '../water-activity6/water-activity6';
import { WaterProblem6Component } from '../water-problem6/water-problem6';
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

  @Input('no') text: string;
  @Input() public FormItem: FormGroup;

  @ViewChildren(PumpComponent) private pump: PumpComponent[];
  @ViewChildren(WaterActivity6Component) private waterActivity6: WaterActivity6Component[];
  @ViewChildren(WaterProblem6Component) private waterProblem6: WaterProblem6Component[];

  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {

    this.FormItem = PumpComponent.CreateFormGroup(this.fb);

    // this.setupPumpCountChanges()
  }
  
  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'usageType': [null, Validators.required],
      'cubicMeterPerMonth': [null, Validators.required],
      'waterBill': [null, Validators.required],
      'hasPump': [null, Validators.required],
      'pumpCount': [null, Validators.required],
      'pumps': fb.array([]),
      'waterActivities': WaterActivity6Component.CreateFormGroup(fb),
      // 'hasQaulityProblem': [null, Validators.required],
      "qualityProblem": fb.group({
        "hasProblem": [null, Validators.required],
        "problem": WaterProblem6Component.CreateFormGroup(fb)
      })
    });
    GroundWaterUsageComponent.setupPumpCountChanges(fb, fg);
    return fg;

    // this.FormItem = GroundWaterUsageComponent.CreateFormGroup(this.fb);
  }

  // public static CreateFormGroup(fb: FormBuilder) : FormGroup {
  //   return fb.group({
  //     'usageType': [null, Validators.required],
  //     'usageCubicMeters': [null, Validators.required],
  //     'waterBill': [null, Validators.required],
  //     'hasPump': [null, Validators.required],
  //     'pumpCount': [null, Validators.required],
  //     'pump': this.fb.group({
  //       'pumpAuto': ['', Validators.required],
  //       'unknowHoursPerPump': ['', Validators.required],
  //       'hoursPerPump': ['', Validators.required],
  //       'numberOfpumpPerYear': ['', Validators.required],
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
    this.pump.forEach(it => it.submitRequest());
    this.waterProblem6.forEach(it => it.submitRequest());
    this.waterActivity6.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private static setupPumpCountChanges(fb: FormBuilder, fg: FormGroup) {
    const componentFormArray: string = "pumps";
    const componentCount: string = "pumpCount";

    var onComponentCountChanges = () => {
      var pump = (fg.get(componentFormArray) as FormArray).controls || [];
      var pumpCount = fg.get(componentCount).value || 0;
      var p = fb.array([]);

      pumpCount = Math.max(0, pumpCount);

      for (let i = 0; i < pumpCount; i++) {
        var ctrl = null;
        if (i < pump.length) {
          const fld = pump[i];
          ctrl = fld;
        } else {
          ctrl = PumpComponent.CreateFormGroup(fb);
        }

        p.push(ctrl);
      }
      fg.setControl(componentFormArray, p);
    };

    fg.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
