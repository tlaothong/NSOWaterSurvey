import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

@Component({
  selector: 'field-rice-harvest',
  templateUrl: 'field-rice-harvest.html'
})
export class FieldRiceHarvestComponent implements ISubmitRequestable {

  @Input('i') public text: string;
  @Input() public FormItem: FormGroup;
  @Input() public FormArray: FormArray;
  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    this.text = 'Hello World';
    this.FormItem = FieldRiceHarvestComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      "plantingFromMonth": [null, Validators.required],
      "plantingThruMonth": [null, Validators.required],
      "waterFillingCount": [null, Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
      "waterHeightCm": [null, Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public isCheck(month: number, from: string): boolean {
    let index = parseInt(this.text) - 1;
    if (index > 0) {
      let start = this.FormArray.at(0).get('plantingFromMonth').value;
      let end = (from == "from") ? this.FormArray.at(index - 1).get('plantingThruMonth').value : this.FormItem.get('plantingFromMonth').value;
      return (start < end) ? !(start < month && month < end) : !(start < month || month < end);
    }
    else {
      return true;
    }
  }
}