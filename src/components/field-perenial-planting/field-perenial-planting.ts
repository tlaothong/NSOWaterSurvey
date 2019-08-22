import { WaterSources9Component } from './../water-sources9/water-sources9';
import { ISubmitRequestable } from './../../shared/ISubmitRequestable';
import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { LocationComponent } from '../location/location';
import { FieldAreaComponent } from '../field-area/field-area';
import { ModalController } from 'ionic-angular';
import { EX_TREETON_LIST } from '../../models/tree';
import { ModalPlantComponent } from '../modal-plant/modal-plant';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'field-perenial-planting',
  templateUrl: 'field-perenial-planting.html'
})

export class FieldPerenialPlantingComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input('no') public text: string;
  private submitRequested: boolean;
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];
  @ViewChildren(ModalPlantComponent) private modalPlant: FieldAreaComponent[];
  public shownData = EX_TREETON_LIST;

  constructor(public fb: FormBuilder, private store: Store<HouseHoldState>, public modalCtrl: ModalController) {
    this.text = 'Hello World';
    this.FormItem = FieldPerenialPlantingComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': [null, Validators.required],
      'plantings': ModalPlantComponent.CreateFormGroup(fb),
      'otherPlantings': ModalPlantComponent.CreateFormGroup(fb),
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    }, {
        validator: FieldPerenialPlantingComponent.checkAnyOrOther()
      });
    return fg;
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const plantings = c.get('plantings.plants').value as Array<any>;

      if (plantings.length <= 0) {
        return { 'plantings': true };
      }

      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == "plantings") {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.plantings && (ctrl.dirty || this.submitRequested);
    };
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.fieldArea.forEach(it => it.submitRequest());
    this.modalPlant.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
  }
}
