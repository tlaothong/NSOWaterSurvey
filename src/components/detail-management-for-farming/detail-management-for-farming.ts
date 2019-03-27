import { Component, Input, ViewChildren } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
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
      'name': [null, Validators],
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'memberCount': [null, Validators.compose([Validators.pattern('[0-9]*')])],
      'avgSurfaceWaterUse': [null, Validators.compose([Validators.pattern('[0-9]*')])],
      'groundWaterCount': [null, Validators.compose([Validators.pattern('[0-9]*')])],
      'avgGroundWaterUse': [null, Validators.compose([Validators.pattern('[0-9]*')])],
    }, {
        validator: DetailManagementForFarmingComponent.checkAnyOrOther()
      });
  }

  submitRequest() {
    this.fieldArea.forEach(it => it.submitRequest());
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'name') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.name && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'memberCount') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.memberCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'avgSurfaceWaterUse') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.avgSurfaceWaterUse && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'groundWaterCount') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.groundWaterCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'avgGroundWaterUse') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.avgGroundWaterUse && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const name = c.get('name');
      const memberCount = c.get('memberCount');
      const avgSurfaceWaterUse = c.get('avgSurfaceWaterUse');
      const groundWaterCount = c.get('groundWaterCount');
      const avgGroundWaterUse = c.get('avgGroundWaterUse');

      if (name.value == null) {
        return { 'name': true };
      }
      if (memberCount.value == null) {
        return { 'memberCount': true };
      }
      if (avgSurfaceWaterUse.value == null) {
        return { 'avgSurfaceWaterUse': true };
      }
      if (groundWaterCount.value == null) {
        return { 'groundWaterCount': true };
      }
      if (avgGroundWaterUse.value == null) {
        return { 'avgGroundWaterUse': true };
      }
      return null;
    }
  }

}
