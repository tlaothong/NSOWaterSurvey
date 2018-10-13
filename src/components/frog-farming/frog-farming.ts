import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the FrogFarmingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'frog-farming',
  templateUrl: 'frog-farming.html'
})
export class FrogFarmingComponent {

  @Input() public FormItem: FormGroup;
  text: string;
  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    console.log('Hello FrogFarmingComponent Component');
    this.text = 'Hello World';

    this.FormItem = FrogFarmingComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      "doing": [null, Validators.required],
      "depression": [null, Validators.required],
      "stew": [null, Validators.required],
      "other": [null, Validators.required],
      "animalsCount": [null, Validators.required],
      "waterSources": fb.group({
        "plumbing": [null, Validators.required],
        "underGround": [null, Validators.required],
        "pool": [null, Validators.required],
        "river": [null, Validators.required],
        "irrigation": [null, Validators.required],
        "rain": [null, Validators.required],
        "buying": [null, Validators.required],
        "rainingAsIs": [null, Validators.required],
        "hasOther": [null, Validators.required],
        "other": [null, Validators.required]
      })
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
    
}
