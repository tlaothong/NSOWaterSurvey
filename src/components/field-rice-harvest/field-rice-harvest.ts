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
  @Input() public FormItemBefore: FormGroup;
  private submitRequested: boolean;

  private beforeFrom: number;
  private beforeThru: number;
  private from: number;
  private thru: number;

  constructor(public fb: FormBuilder) {
    this.text = 'Hello World';
    this.FormItem = FieldRiceHarvestComponent.CreateFormGroup(this.fb);
    this.FormItemBefore = FieldRiceHarvestComponent.CreateFormGroup(this.fb);
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

  public isCheck(): boolean {
    if (this.text != "1") {
      this.beforeFrom = this.FormItemBefore.get('plantingFromMonth').value;
      this.beforeThru = this.FormItemBefore.get('plantingThruMonth').value;
      this.from = this.FormItem.get('plantingFromMonth').value;
      this.thru = this.FormItem.get('plantingThruMonth').value;

      if (this.beforeThru < this.beforeFrom) {
        if (this.from < this.beforeThru) {
          this.from += 12;
          this.thru += 12;
        }
        this.beforeThru += 12;
      }
      if (this.thru < this.from) {
        this.thru += 12;
      }
      
      return (this.beforeFrom < this.from && this.from < this.beforeThru) || (this.beforeFrom < this.thru && this.thru < this.beforeThru);
    }
    else {
      return false;
    }
  }



}