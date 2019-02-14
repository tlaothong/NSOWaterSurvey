import { Component, Input, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { PoolAreaComponent } from '../pool-area/pool-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';

@Component({
  selector: 'fish-farming',
  templateUrl: 'fish-farming.html'
})
export class FishFarmingComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input('headline') public text: string;
  @Input('type') public type: string;
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];
  @ViewChildren(PoolAreaComponent) private poolArea: PoolAreaComponent[];
  private submitRequested: boolean;

  constructor(public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
    this.type = 'กก.';
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'doing': [null, Validators.required],
      'depression': [false, Validators.required],
      'gardenGroove': [false, Validators.required],
      'stew': [false, Validators.required],
      'riceField': [false, Validators.required],
      'hasOther': [false, Validators.required],
      'other': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fieldsAreSameSize': [null, Validators.required],
      'fields': fb.array([]),
      'animalsCount': [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    }, {
        validator: FishFarmingComponent.checkAnyOrOther()
      });

    FishFarmingComponent.setupPoolCountChanges(fb, fg);
    return fg;
  }

  submitRequest() {

    this.submitRequested = true;
    this.poolArea.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.dispatchWaterSource();

  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const depression = c.get('depression');
      const gardenGroove = c.get('gardenGroove');
      const stew = c.get('stew');
      const riceField = c.get('riceField');
      const hasOther = c.get('hasOther');
      const other = c.get('other');

      if (!depression.value && !gardenGroove.value && !stew.value && !hasOther.value && !riceField.value) {
        return { 'anycheck': true };
      } else if (hasOther.value == true && (!other.value || other.value.trim() == '')) {
        return { 'other': true };
      }
      return null;
    }
  }

  private dispatchWaterSource() {
      this.store.dispatch(new SetCheckWaterPlumbing(this.FormItem.get('waterSources.plumbing').value));
      this.store.dispatch(new SetCheckWaterRiver(this.FormItem.get('waterSources.river').value));
      this.store.dispatch(new SetCheckWaterIrrigation(this.FormItem.get('waterSources.irrigation').value));
      this.store.dispatch(new SetCheckWaterRain(this.FormItem.get('waterSources.rain').value));
      this.store.dispatch(new SetCheckWaterBuying(this.FormItem.get('waterSources.buying').value));
    console.log("dispatch fish can work");
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anycheck') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    } else if (name == 'other') {
      return this.FormItem.errors && this.FormItem.errors.other && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  private static setupPoolCountChanges(fb: FormBuilder, fg: FormGroup) {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (fg.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = fg.get(componentCount).value || 0;
      var pool = fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = PoolAreaComponent.CreateFormGroup(fb);
        }

        pool.push(ctrl);
      }
      fg.setControl(componentFormArray, pool);
    };

    fg.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
