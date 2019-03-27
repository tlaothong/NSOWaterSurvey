import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

@Component({
  selector: 'detail-org-water-supply',
  templateUrl: 'detail-org-water-supply.html'
})
export class DetailOrgWaterSupplyComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input('no') public no: string;
  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    console.log('Hello DetailOrgWaterSupplyComponent Component');
    this.FormItem = DetailOrgWaterSupplyComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': [null, Validators],
      'hasSurfaceWater': [null, Validators],
      'surfaceWaterPerMonth': [null, Validators.compose([Validators.pattern('[0-9.]*')])],
      'useGroundWater': [null, Validators],
      'groundWaterCount': [null, Validators],
      'groundWaterUsePerMonth': [null, Validators.compose([Validators.pattern('[0-9.]*')])],
      'plumbingPrice': [null, Validators.compose([Validators.pattern('[0-9.]*')])],
      'meterRentalFee': [null, Validators.compose([Validators.pattern('[0-9.]*')])],
      'disinfection': [0, Validators],
      'otherDisinfection': [null, Validators],
    }, {
        validator: DetailOrgWaterSupplyComponent.checkAnyOrOther()
      });
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'name') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.name && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hasSurfaceWater') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.hasSurfaceWater && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'surfaceWaterPerMonth') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.surfaceWaterPerMonth && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'useGroundWater') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.useGroundWater && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'groundWaterCount') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.groundWaterCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'groundWaterUsePerMonth') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.groundWaterUsePerMonth && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'plumbingPrice') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.plumbingPrice && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'meterRentalFee') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.meterRentalFee && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'disinfection') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.disinfection && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'otherDisinfection') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.otherDisinfection && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const name = c.get('name');
      const hasSurfaceWater = c.get('hasSurfaceWater');
      const surfaceWaterPerMonth = c.get('surfaceWaterPerMonth');
      const useGroundWater = c.get('useGroundWater');
      const groundWaterCount = c.get('groundWaterCount');
      const groundWaterUsePerMonth = c.get('groundWaterUsePerMonth');
      const plumbingPrice = c.get('plumbingPrice');
      const meterRentalFee = c.get('meterRentalFee');
      const disinfection = c.get('disinfection');
      const otherDisinfection = c.get('otherDisinfection');

      if (name.value == null) {
        return { 'name': true };
      }
      if (name.value != null && hasSurfaceWater.value == null) {
        return { 'hasSurfaceWater': true };
      }
      if (name.value != null && hasSurfaceWater.value == true && surfaceWaterPerMonth.value == null) {
        return { 'surfaceWaterPerMonth': true };
      }
      if (useGroundWater.value == null) {
        return { 'useGroundWater': true };
      }
      if (useGroundWater.value != null && useGroundWater.value == true && groundWaterCount.value == null) {
        return { 'groundWaterCount': true };
      }
      if (useGroundWater.value != null && useGroundWater.value == true && groundWaterUsePerMonth.value == null) {
        return { 'groundWaterUsePerMonth': true };
      }
      if (plumbingPrice.value == null) {
        return { 'plumbingPrice': true };
      }
      if (meterRentalFee.value == null) {
        return { 'meterRentalFee': true };
      }
      if (disinfection.value <= 0) {
        return { 'disinfection': true };
      }
      if (disinfection.value == 2 && otherDisinfection.value == null) {
        return { 'otherDisinfection': true };
      }
      return null;
    }

  }

  submitRequest() {
    this.submitRequested = true;
  }

}
