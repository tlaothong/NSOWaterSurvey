import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterSources9Component } from '../water-sources9/water-sources9';

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
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];
  
  constructor(public fb: FormBuilder) {
    console.log('Hello FrogFarmingComponent Component');
    this.text = 'Hello World';

    this.FormItem = FrogFarmingComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      "doing": [false, Validators.required],
      "depression": [false, Validators.required],
      "stew": [false, Validators.required],
      "other": [false, Validators.required],
      'hasOther': ['', Validators.required],
      "animalsCount": [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
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
