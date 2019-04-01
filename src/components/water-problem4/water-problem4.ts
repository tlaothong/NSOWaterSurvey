import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'water-problem4',
  templateUrl: 'water-problem4.html'
})
export class WaterProblem4Component {

  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    this.text = 'Hello World';
    this.text = '1';
    this.FormItem = WaterProblem4Component.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'hasProblem': [null, Validators],
      'problem': fb.group({
        'turbidWater': [false, Validators],
        'saltWater': [false, Validators],
        'smell': [false, Validators],
        'filmOfOil': [false, Validators],
        'fogWater': [false, Validators],
        'hardWater': [false, Validators],
      })
    }, {
        validator: WaterProblem4Component.checkAnyOrOther()
      });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'hasProblem') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.hasProblem && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'anycheck') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.anycheck && (ctrls.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const hasProblem = c.get('hasProblem');
      const saltWater = c.get('problem.saltWater');
      const smell = c.get('problem.smell');
      const filmOfOil = c.get('problem.filmOfOil');
      const fogWater = c.get('problem.fogWater');

      if (hasProblem.value == null) {
        return { 'hasProblem': true };
      }
      if ((hasProblem.value == true) && (!saltWater.value && !smell.value && !filmOfOil.value && !fogWater.value)) {
        return { 'anycheck': true };
      }
      return null;
    }
  }

  setCheckboxFalse() {
    this.FormItem.get('problem.saltWater').setValue(false);
    this.FormItem.get('problem.smell').setValue(false);
    this.FormItem.get('problem.filmOfOil').setValue(false);
    this.FormItem.get('problem.fogWater').setValue(false);
    this.FormItem.get('problem.turbidWater').setValue(false);
    this.FormItem.get('problem.hardWater').setValue(false);
  }
}