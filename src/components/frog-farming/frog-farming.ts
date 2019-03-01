import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';

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

      if (!depression.value && !stew.value) {
        return { 'anycheck': true };
      } else if (hasOther.value == true && (!other.value || other.value.trim() == '')) {
        return { 'other': true };
      }
      return null;
    }
  }

}
