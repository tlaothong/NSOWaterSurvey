import { Component, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the FieldFarmingCountComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-farming-count',
  templateUrl: 'field-farming-count.html'
})
export class FieldFarmingCountComponent {

  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    console.log('Hello FieldFarmingCountComponent Component');
    this.text = 'Hello World';

    this.FormItem = this.fb.group({
      'plantingFromMonth': ['', Validators.required],
      'plantingThruMonth': ['', Validators.required],
      'waterFillingCount': ['', Validators.required],
      'waterHigh': ['', Validators.required],
    });

  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
