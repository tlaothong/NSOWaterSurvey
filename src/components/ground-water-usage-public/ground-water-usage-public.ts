import { Component, Input, AfterViewInit, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { PumpComponent } from '../pump/pump';

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
export class GroundWaterUsagePublicComponent implements AfterViewInit, ISubmitRequestable {

  @Input('no') text: string;
  @Input() public FormItem: FormGroup;

  @ViewChildren(PumpComponent) private pump: PumpComponent[];

  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {

    this.FormItem = PumpComponent.CreateFormGroup(this.fb);

  }

  ngAfterViewInit(): void {
    this.setupPumpCountChanges()
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'cubicMeterPerMonth': [null, Validators.required],
      'unknow': [null, Validators.required],
      'hasPump': [null, Validators.required],
      'pumpCount': [null, Validators.required],
      'pumps': fb.group({
        'pumpAuto': [''],
        'unknowHoursPerPump': [''],
        'hoursPerPump': [''],
        'numberOfPumpsPerYear': [''],
        'pumpRate': fb.group({
          'knowPumpRate': [''],
          'pumpRateUsage': ['']
        }),
        'energySource': fb.group({
          'electicPump': [''],
          'solaPump': [''],
          'petrolPump': [''],
          'twoWheeledTractors': ['']
        }),
        'pumpType': fb.group({
          'electicPump': [''],
          'solaPump': [''],
          'petrolPump': [''],
          'twoWheeledTractors': ['']
        }),
        'horsePower': [''],
        'suctionPipeSize': [''],
        'pipelineSize': ['']
      }),
    });
  }

  submitRequest() {
    this.submitRequested = true;
    this.pump.forEach(it => it.submitRequest());
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
