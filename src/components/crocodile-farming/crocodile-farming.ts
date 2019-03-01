import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { PoolAreaComponent } from '../pool-area/pool-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';

@Component({
  selector: 'crocodile-farming',
  templateUrl: 'crocodile-farming.html'
})
export class CrocodileFarmingComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input("headline") public text: string;
  @Input('no') public no: string;

  @ViewChildren(PoolAreaComponent) private poolArea: PoolAreaComponent[];

  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];

  private submitRequested: boolean;

  constructor(public fb: FormBuilder, private store: Store<HouseHoldState>) {
    console.log('Hello CrocodileFarmingComponent Component');
    this.text = 'Hello World';
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'doing': null,
      'depression': [false, Validators.required],
      'hasOther': [false, Validators.required],
      'other': [null, Validators],
      'fieldCount': [null, Validators.required],
      'fieldsAreSameSize': [null, Validators.required],
      'fields': fb.array([]),
      'animalsCount': [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    }, {
        validator: CrocodileFarmingComponent.checkAnyOrOther()
      }
    );
    CrocodileFarmingComponent.setupFieldCountChanges(fb, fg);
    return fg;
  }

  checkCrocValid() {
    let area = false;
    if ((this.FormItem.get('depression').value
      || this.FormItem.get('hasOther').value)
      && ((this.FormItem.get('fieldCount').value != null)
        && (this.FormItem.get('fieldsAreSameSize').value != null))) {
      area = this.FormItem.get('poolArea').valid;
    }
    if ((this.FormItem.get('fieldCount').value != null)
      && (area)
      && (this.FormItem.get('animalsCount').value != null)
      && this.FormItem.get('waterSources').valid) {
      return true;
    }
  }

  submitRequest() {
    this.submitRequested = true;
    this.poolArea.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    // this.dispatchWaterSource();
  }

  private dispatchWaterSource() {
    this.store.dispatch(new SetCheckWaterPlumbing(this.FormItem.get('waterSources.plumbing').value));
    this.store.dispatch(new SetCheckWaterRiver(this.FormItem.get('waterSources.river').value));
    this.store.dispatch(new SetCheckWaterIrrigation(this.FormItem.get('waterSources.irrigation').value));
    this.store.dispatch(new SetCheckWaterRain(this.FormItem.get('waterSources.rain').value));
    this.store.dispatch(new SetCheckWaterBuying(this.FormItem.get('waterSources.buying').value));
    console.log("dispatch crocodile can work");
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const depression = c.get('depression');
      const hasOther = c.get('hasOther');
      const other = c.get('other');
      const fieldCount = c.get('fieldCount');
      const fieldsAreSameSize = c.get('fieldsAreSameSize');
      const animalsCount = c.get('animalsCount');

      if (!depression.value && !hasOther.value) {
        return { 'anycheck': true };
      } else if (hasOther.value == true && (!other.value || other.value.trim() == '')) {
        return { 'other': true };
      }
      if ((depression.value || hasOther.value) && (fieldCount.value < 1)) {
        return { 'fieldCount': true };
      }
      if ((depression.value || hasOther.value) && (fieldsAreSameSize.value == null)) {
        return { 'fieldsAreSameSize': true };
      }
      if ((depression.value || hasOther.value) && (animalsCount.value == null)) {
        return { 'animalsCount': true };
      }
      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);

    if (name == 'anycheck') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    } else if (name == 'other') {
      return this.FormItem.errors && this.FormItem.errors.other && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'fieldCount') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.fieldCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'fieldsAreSameSize') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.fieldsAreSameSize && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'animalsCount') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.animalsCount && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  private static setupFieldCountChanges(fb: FormBuilder, fg: FormGroup) {

    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (fg.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = fg.get(componentCount).value || 0;
      var field = fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = PoolAreaComponent.CreateFormGroup(fb);
        }

        field.push(ctrl);
      }
      fg.setControl(componentFormArray, field);
    };

    fg.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
