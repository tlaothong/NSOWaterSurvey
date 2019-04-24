import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'water-sources9',
  templateUrl: 'water-sources9.html'
})
export class WaterSources9Component {

  @Input('headline') public text: string;
  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    this.text = '';

    // TODO: Remove this
    this.FormItem = WaterSources9Component.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'plumbing': [false, Validators],
      'underGround': [false, Validators],
      'pool': [false, Validators],
      'river': [false, Validators],
      'irrigation': [false, Validators],
      'rain': [false, Validators],
      'rainingAsIs': [false, Validators],
      'buying': [false, Validators],
      'hasOther': [false, Validators],
      'other': [''],
    }, {
        validator: WaterSources9Component.checkAnyOrOther()
      });
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

  submitRequest() {
    this.submitRequested = true;
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {

      const plumbing = c.get('plumbing');
      const underGround = c.get('underGround');
      const pool = c.get('pool');
      const river = c.get('river');
      const other = c.get('other');
      const hasOther = c.get('hasOther');
      const irrigation = c.get('irrigation');
      const rain = c.get('rain');
      const buying = c.get('buying');
      const rainingAsIs = c.get('rainingAsIs');
      const doing = c.parent ? c.parent.get('doing') : new FormControl;

      if (doing.value && !plumbing.value && !underGround.value && !pool.value && !river.value && !hasOther.value && !irrigation.value
        && !rain.value && !buying.value && !rainingAsIs.value) {
        return { 'anycheck': true };
      } else if (doing.value && hasOther.value == true && (!other.value || other.value.trim() == '')) {
        return { 'other': true };
      }
      return null;
    }
  }

}