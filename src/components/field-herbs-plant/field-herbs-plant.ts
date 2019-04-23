import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from 'ionic-angular';
import { EX_TREEVET_LIST } from '../../models/tree';
import { FieldAreaComponent } from '../field-area/field-area';
import { LocationComponent } from '../location/location';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { ModalPlantComponent } from '../modal-plant/modal-plant';

@Component({
  selector: 'field-herbs-plant',
  templateUrl: 'field-herbs-plant.html'
})
export class FieldHerbsPlantComponent {

  @Input() public FormItem: FormGroup;
  @Input('no') public no: string;
  @Input() public forwardListPlant: any = [];
  @Input('agiselectrice') public getAgiSelectRice: boolean;
  @Input('agiselectagronomy') public getAgiSelectAgronomy: boolean;
  @Input('agiselectrubber') public getAgiSelectRubber: boolean;
  @Input('agiselectperennial') public getAgiSelectPerennial: boolean;
  public shownData = EX_TREEVET_LIST;
  private submitRequested: boolean;

  @ViewChildren(FieldAreaComponent) private fieldAreas: FieldAreaComponent[];
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];
  @ViewChildren(ModalPlantComponent) private modalPlant: FieldAreaComponent[];

  constructor(public fb: FormBuilder, public modalCtrl: ModalController, public navParams: NavParams) {
    this.FormItem = FieldHerbsPlantComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': ['', Validators.required],
      'plantings': ModalPlantComponent.CreateFormGroup(fb),
      'primaryPlant': ModalPlantComponent.CreateFormGroup(fb),
      'thisPlantOnly': [null, Validators],
      'otherPlantings': ModalPlantComponent.CreateFormGroup(fb),
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    });
  }

  submitRequest() {
    this.submitRequested = true;
    this.fieldAreas.forEach(it => it.submitRequest());
    this.locationT.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.modalPlant.forEach(it => it.submitRequest());
  }

  public checkPrimaryPlant(): boolean {
    var arr = this.FormItem.get('primaryPlant.plants').value as any[]
    console.log(arr);

    if (!this.FormItem.get('thisPlantOnly').value && (this.getAgiSelectRice || this.getAgiSelectAgronomy || this.getAgiSelectRubber || this.getAgiSelectPerennial)) {
      if (arr.length == 0) {
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
