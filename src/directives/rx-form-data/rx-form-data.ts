import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

/**
 * Generated class for the RxFormDataDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[rx-form-data]' // Attribute selector
})
export class RxFormDataDirective {

  @Input('rx-form-data')
  set data(val: any) {
    if (val) {
      this.formGroupDirective.form.patchValue(val);
      this.formGroupDirective.form.markAsPristine();
    }
  }
  constructor(private formGroupDirective: FormGroupDirective) {
    console.log('Hello RxFormDataDirective Directive');
  }

}
