import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

@Component({
  selector: 'field-rice-harvest',
  templateUrl: 'field-rice-harvest.html'
})
export class FieldRiceHarvestComponent implements ISubmitRequestable {

  @Input('i') public text: string;
  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    this.text = 'Hello World';
    this.FormItem = FieldRiceHarvestComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      "plantingFromMonth": [null, Validators.required],
      "plantingThruMonth": [null, Validators.required],
      "waterFillingCount": [null, Validators.required],
      "waterHeightCm": [null, Validators.required],
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