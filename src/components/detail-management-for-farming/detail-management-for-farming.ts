import { Component, Input, ViewChildren } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FieldAreaComponent } from '../field-area/field-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { FieldFarmingComponent } from '../field-farming/field-farming';

@Component({
  selector: 'detail-management-for-farming',
  templateUrl: 'detail-management-for-farming.html'
})
export class DetailManagementForFarmingComponent implements ISubmitRequestable {

  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  @Input() public FormItem: FormGroup;
  @Input('no') public fieldNo: string;
  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    this.FormItem = DetailManagementForFarmingComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': [null, Validators.required],
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'memberCount': [null, Validators.required],
      'avgSurfaceWaterUse': [null, Validators.required],
      'groundWaterCount': [null, Validators.required],
      'avgGroundWaterUse': [null, Validators.required],
    });
  }

  submitRequest() {
    this.fieldArea.forEach(it => it.submitRequest());
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
