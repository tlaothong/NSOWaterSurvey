import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the FieldRiceHarvestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-rice-harvest',
  templateUrl: 'field-rice-harvest.html'
})
export class FieldRiceHarvestComponent implements ISubmitRequestable {

  text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor() {
    console.log('Hello FieldRiceHarvestComponent Component');
    this.text = 'Hello World';
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      "plantingFromMonth": null,
      "plantingThruMonth": null,
      "waterFillingCount": null,
      "waterHighCm": null
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
