import { FieldAreaComponent } from './../field-area/field-area';
import { LocationComponent } from './../location/location';
import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { ModalController } from 'ionic-angular';
import { EX_TREEDOK_LIST } from '../../models/tree';
import { ModalPlantComponent } from '../modal-plant/modal-plant';
import { SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';

@Component({
  selector: 'field-flower-crop',
  templateUrl: 'field-flower-crop.html'
})
export class FieldFlowerCropComponent implements ISubmitRequestable {

  @Input('no') public text: string;
  @Input() public forwardListPlant: any[];
  @Input() public FormItem: FormGroup;
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(ModalPlantComponent) private modalPlant: FieldAreaComponent[];
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  @ViewChildren(WaterSources9Component) private waterSource9: WaterSources9Component[];
  @Input('agiselectrice') public getAgiSelectRice: boolean;
  @Input('agiselectagronomy') public getAgiSelectAgronomy: boolean;
  @Input('agiselectrubber') public getAgiSelectRubber: boolean;
  @Input('agiselectperennial') public getAgiSelectPerennial: boolean;
  private submitRequested: boolean;
  public shownData = EX_TREEDOK_LIST;

  constructor(public fb: FormBuilder, private store: Store<HouseHoldState>, public modalCtrl: ModalController) {
    this.text = 'Hello World';
    this.FormItem = FieldFlowerCropComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': [null, Validators.required],
      'plantings': ModalPlantComponent.CreateFormGroup(fb),
      'otherPlantings': ModalPlantComponent.CreateFormGroup(fb),
      'thisPlantOnly': [null, Validators],
      'primaryPlant': ModalPlantComponent.CreateFormGroup(fb),
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    })
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.fieldArea.forEach(it => it.submitRequest());
    this.modalPlant.forEach(it => it.submitRequest());
    this.waterSource9.forEach(it => it.submitRequest());
  }

  public checkPrimaryPlant(): boolean {
    if (this.FormItem.get('thisPlantOnly').value == false) {
      if (this.FormItem.get('primaryPlant.plants').value == null) {
        return false;
      }
    }
    return true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == "thisPlantOnly") {
      return ctrl.value == null && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
