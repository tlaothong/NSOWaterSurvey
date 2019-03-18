import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { PumpComponent } from '../pump/pump';
import { WaterActivity6Component } from '../water-activity6/water-activity6';
import { WaterProblem4Component } from '../water-problem4/water-problem4';
import { ModalController } from 'ionic-angular';
import { CountComponent } from '../count/count';

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
  @ViewChildren(CountComponent) private count: CountComponent[];

  constructor(public fb: FormBuilder, public modalCtrl: ModalController) {
    this.text = '1';
    this.FormItem = PoolUsageComponent.CreateFormGroup(this.fb)
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'hasCubicMeterPerMonth': [null, Validators],
      'cubicMeterPerMonth': [null, Validators],
      'hasPump': [null, Validators],
      'pumpCount': [0, [Validators.required, Validators.min(1)]],
      'pumps': fb.array([]),
      'waterActivities': WaterActivity6Component.CreateFormGroup(fb),
      'qualityProblem': WaterProblem4Component.CreateFormGroup(fb)
    }, {
        validator: PoolUsageComponent.checkAnyOrOther()
      });
    PoolUsageComponent.setupPumpCountChanges(fb, fg);
    return fg;
  }

  submitRequest() {
    this.submitRequested = true;
    this.pump.forEach(it => it.submitRequest());
    this.waterProblem4.forEach(it => it.submitRequest());
    this.waterActivity6.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
  }

  checkValid(): boolean {
    let activity = (!this.waterActivity6.find(it => it.checkValid()))
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

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const hasCubicMeterPerMonth = c.get('hasCubicMeterPerMonth');
      const cubicMeterPerMonth = c.get('cubicMeterPerMonth');
      const hasPump = c.get('hasPump');
      const pumpCount = c.get('pumpCount');

      if(hasCubicMeterPerMonth.value == null){
        return { 'hasCubicMeterPerMonth': true };
      }
      if ((hasCubicMeterPerMonth.value == true) && ((cubicMeterPerMonth.value == null) || (cubicMeterPerMonth.value <= 0))) {
        return { 'cubicMeterPerMonth': true };
      }
      if ((hasCubicMeterPerMonth.value == false) && (hasPump.value == null)) {
        return { 'hasPump': true };
      }
      if ((hasPump.value == true) && ((pumpCount.value == null) || (pumpCount.value <= 0))) {
        return { 'pumpCount': true };
      }
      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'hasCubicMeterPerMonth') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.hasCubicMeterPerMonth && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'cubicMeterPerMonth') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.cubicMeterPerMonth && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hasPump') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.hasPump && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'pumpCount') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.pumpCount && (ctrl.dirty || this.submitRequested);
    }
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