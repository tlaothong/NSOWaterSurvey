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
export class GroundWaterUsageComponent implements AfterViewInit, ISubmitRequestable {

  @Input('no') text: string;
  @Input() public FormItem: FormGroup;

  @ViewChildren(PumpComponent) private pump: PumpComponent[];
  @ViewChildren(WaterActivity6Component) private waterActivity6t: WaterActivity6Component[];
  @ViewChildren(WaterProblem6Component) private waterProblem6: WaterProblem6Component[];

  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {

    this.FormItem = PumpComponent.CreateFormGroup(this.fb);

    // this.setupPumpCountChanges()
  }

  ngAfterViewInit(): void {
    this.setupPumpCountChanges()
  }
  
  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'usageType': ['', Validators.required],
      'usageCubicMeters': ['', Validators.required],
      'waterBill': ['', Validators.required],
      'hasPump': ['', Validators.required],
      'pumpCount': ['', Validators.required],
      'pumps': fb.array([]),
      'usageActivities': WaterActivity6Component.CreateFormGroup(fb),
      'hasQaulityProblem': ['', Validators.required],
      'qualityProblems': WaterProblem6Component.CreateFormGroup(fb),
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
    this.pump.forEach(it => it.submitRequest());
    this.waterProblem6.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupPumpCountChanges() {
    const componentFormArray: string = "pumps";
    const componentCount: string = "pumpCount";

    var onComponentCountChanges = () => {
      var pumps = (this.FormItem.get(componentFormArray) as FormArray).controls || [];
      var pumpCount = this.FormItem.get(componentCount).value || 0;
      var pump = this.fb.array([]);

      pumpCount = Math.max(0, pumpCount);

      for (let i = 0; i < pumpCount; i++) {
        var ctrl = null;
        if (i < pumps.length) {
          const fld = pumps[i];
          ctrl = fld;
        } else {
          ctrl = PumpComponent.CreateFormGroup(this.fb);
        }

        pump.push(ctrl);
      }
      this.FormItem.setControl(componentFormArray, pump);
    };

    this.FormItem.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
