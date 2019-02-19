import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { PumpComponent } from '../pump/pump';
import { WaterActivity6Component } from '../water-activity6/water-activity6';
import { WaterProblem4Component } from '../water-problem4/water-problem4';

@Component({
  selector: 'pool-usage',
  templateUrl: 'pool-usage.html'
})
export class PoolUsageComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input("headline") public text: string;
  @Input('no') public no: string;
  @Input('use') public gardeningUse: boolean;
  @Input('doing') public riceDoing: boolean;
  @Input('commerce') public commerceUse: boolean;
  @Input('factory') public factoryUse: boolean;
  @Input('residence') public residenceUse: boolean;
  @Input('agriculture') public agricultureUse: boolean;
  @Input('activeRes') public activeRes: any;
  @Input('activeWateringRes') public activeWateringRes: any;
  @Input('activRice') public activRice: any;
  @Input('activeAgi') public activeAgi: any;
  @Input('activeFac') public activeFac: any;
  @Input('activeCom') public activeCom: any;
  private submitRequested: boolean;
  public G: boolean = false;
  @ViewChildren(PumpComponent) private pump: PumpComponent[];
  @ViewChildren(WaterActivity6Component) private waterActivity6: WaterActivity6Component[];
  @ViewChildren(WaterProblem4Component) private waterProblem4: WaterProblem4Component[];

  constructor(public fb: FormBuilder) {
    this.text = '1';
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'hasCubicMeterPerMonth': [null, Validators.required],
      'cubicMeterPerMonth': [null, Validators.required],
      'hasPump': [null, Validators.required],
      'pumpCount': [null, Validators.required],
      'pumps': fb.array([]),
      'waterActivities': WaterActivity6Component.CreateFormGroup(fb),
      'qualityProblem': WaterProblem4Component.CreateFormGroup(fb)
    });
    PoolUsageComponent.setupPumpCountChanges(fb, fg);
    return fg;
  }

  submitRequest() {
    this.submitRequested = true;
    this.pump.forEach(it => it.submitRequest());
    this.waterProblem4.forEach(it => it.submitRequest());
    this.waterActivity6.forEach(it => it.submitRequest());
  }

  checkValid(): boolean {
    let activity = (!this.waterActivity6.find(it => it.totalSum != 100))
    let cubic: boolean;
    let problem: boolean;
    let pump: boolean;
    let pumps = true;
    if (this.FormItem.get('hasCubicMeterPerMonth').value == true) {
      cubic = (this.FormItem.get('cubicMeterPerMonth').value != null)
      pump = true
    }
    if (this.FormItem.get('hasCubicMeterPerMonth').value == false) {
      // this.FormItem.get('cubicMeterPerMonth').setValue(null);
      if (this.FormItem.get('hasPump').value == false) {
        // this.FormItem.get('pumpCount').setValue('0');
        cubic = true;
        pump = true;
      }
      if (this.FormItem.get('hasPump').value == true) {
        if (this.FormItem.get('pumpCount').value > 0) {
          cubic = true;
          pump = true;
          pumps = this.FormItem.get('pumps').valid
        }
      }
    }
    
    if (this.FormItem.get('hasCubicMeterPerMonth').value == false && this.FormItem.get('hasPump').value == false) {
      // if (!("residenceUse == 'true' || gardeningUse == 'true' || agricultureUse == 'true' || factoryUse == 'true' || commerceUse == 'true' || riceDoing == 'true'")) {
      console.log("entrane condition");

      this.FormItem.get('qualityProblem.hasProblem').setValue(false);
    }
    if (!this.FormItem.get('qualityProblem.hasProblem').value) {
      problem = true;
    } else {
      problem = this.FormItem.get('qualityProblem.problem').valid
    }
    return activity && cubic && problem && pump && pumps
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
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