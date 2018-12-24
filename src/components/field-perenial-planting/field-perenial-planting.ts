import { WaterSources9Component } from './../water-sources9/water-sources9';
import { ISubmitRequestable } from './../../shared/ISubmitRequestable';
import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationComponent } from '../location/location';
import { FieldAreaComponent } from '../field-area/field-area';
import { ModalController } from 'ionic-angular';
import { EX_TREETON_LIST } from '../../models/tree';
import { ModalPlantComponent } from '../modal-plant/modal-plant';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';

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
      'irrigationField': ['', Validators.required],
      'plantings': ModalPlantComponent.CreateFormGroup(fb),
      'otherPlantings': ModalPlantComponent.CreateFormGroup(fb),
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    });
    return fg;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.fieldArea.forEach(it => it.submitRequest());
    this.modalPlant.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.dispatchWaterSource();
  }
  
  private dispatchWaterSource() {
    if (this.FormItem.get('waterSources.plumbing').value) {
      this.store.dispatch(new SetCheckWaterPlumbing(this.FormItem.get('waterSources.plumbing').value));
    }
    if (this.FormItem.get('waterSources.river').value) {
      this.store.dispatch(new SetCheckWaterRiver(this.FormItem.get('waterSources.river').value));
    }
    if (this.FormItem.get('waterSources.irrigation').value) {
      this.store.dispatch(new SetCheckWaterIrrigation(this.FormItem.get('waterSources.irrigation').value));
    }
    if (this.FormItem.get('waterSources.rain').value) {
      this.store.dispatch(new SetCheckWaterRain(this.FormItem.get('waterSources.rain').value));
    }
    if (this.FormItem.get('waterSources.buying').value) {
      this.store.dispatch(new SetCheckWaterBuying(this.FormItem.get('waterSources.buying').value));
    }
    console.log("dispatch perenial can work");
  }


}
