import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'natural-disaster',
  templateUrl: 'natural-disaster.html'
})
export class NaturalDisasterComponent {

  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    this.FormItem = NaturalDisasterComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'tsunami': [false, Validators],
      'landSlide': [false, Validators],
      'earthquake': [false, Validators],
      'cyclone': [false, Validators],
      'forestFire': [false, Validators],
      'drought': [false, Validators],
      'cold': [false, Validators],
      'epidemic': [false, Validators],
      'pest': [false, Validators],
      'epizootics': [false, Validators],
    }, 
    // {
    //     validator: NaturalDisasterComponent.checkAnyOrOther()
    //   }
      );
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const tsunami = c.get('tsunami');
      const landSlide = c.get('landSlide');
      const earthquake = c.get('earthquake');
      const cyclone = c.get('cyclone');
      const forestFire = c.get('forestFire');
      const drought = c.get('drought');
      const cold = c.get('cold');
      const epidemic = c.get('epidemic');
      const pest = c.get('pest');
      const epizootics = c.get('epizootics');

      if (!tsunami.value && !landSlide.value && !earthquake.value && !cyclone.value && !drought.value &&
        !cold.value && !epidemic.value && !pest.value && !forestFire.value && !epizootics.value) {
        return { 'anycheck': true };
      }
      return null;
    }

  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anycheck') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}