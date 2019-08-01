import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';

@Component({
  selector: 'frog-farming',
  templateUrl: 'frog-farming.html'
})
export class FrogFarmingComponent {

  @Input() public FormItem: FormGroup;
  @Input('headline') public text: string;
  private submitRequested: boolean;
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];

  constructor(public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
    this.FormItem = FrogFarmingComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'doing': null,
      'depression': [false, Validators.required],
      'stew': [false, Validators.required],
      'other': [null, Validators],
      'hasOther': [false, Validators.required],
      'animalsCount': [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    }, {
        validator: FrogFarmingComponent.checkAnyOrOther()
      });
  }

  submitRequest() {
    this.submitRequested = true;
    this.waterSources9.forEach(it => it.submitRequest());
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

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const depression = c.get('depression');
      const stew = c.get('stew');
      const other = c.get('other');
      const hasOther = c.get('hasOther');

      if (!depression.value && !stew.value && !hasOther.value) {
        return { 'anycheck': true };
      } else if (hasOther.value == true && (other.value == null || other.value.trim() == '')) {
        return { 'other': true };
      }
      return null;
    }
  }

}
