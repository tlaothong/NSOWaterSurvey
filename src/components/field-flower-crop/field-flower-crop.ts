import { FieldAreaComponent } from './../field-area/field-area';
import { LocationComponent } from './../location/location';
import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { ModalController } from 'ionic-angular';
import { EX_TREEDOK_LIST } from '../../models/tree';
import { ModalPlantComponent } from '../modal-plant/modal-plant';

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
  private static checkSelectRice: boolean;
  private static checkSelectAgronomy: boolean;
  private static checkSelectRubber: boolean;
  private static checkSelectPerennial: boolean;
  public shownData = EX_TREEDOK_LIST;

  constructor(public fb: FormBuilder, public modalCtrl: ModalController) {
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
    }, {
        validator: FieldFlowerCropComponent.checkAnyOrOther()
      })
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.fieldArea.forEach(it => it.submitRequest());
    this.modalPlant.forEach(it => it.submitRequest());
    this.waterSource9.forEach(it => it.submitRequest());
  }

  ngOnInit() {
    FieldFlowerCropComponent.checkSelectRice = this.getAgiSelectRice;
    FieldFlowerCropComponent.checkSelectAgronomy = this.getAgiSelectAgronomy;
    FieldFlowerCropComponent.checkSelectRubber = this.getAgiSelectRubber;
    FieldFlowerCropComponent.checkSelectPerennial = this.getAgiSelectPerennial;
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const plantings = c.get('plantings.plants').value as Array<any>;
      const primaryPlant = c.get('primaryPlant.plants').value as Array<any>;
      const thisPlantOnly = c.get('thisPlantOnly')

      if (plantings.length < 1 && thisPlantOnly.value == null && (FieldFlowerCropComponent.checkSelectRice == true || FieldFlowerCropComponent.checkSelectAgronomy == true || FieldFlowerCropComponent.checkSelectRubber == true || FieldFlowerCropComponent.checkSelectPerennial == true)) {
        return { 'plantings': true, 'thisPlantOnly': true };
      }
      if (plantings.length < 1 && (thisPlantOnly.value == false && primaryPlant.length < 1 && (FieldFlowerCropComponent.checkSelectRice == true || FieldFlowerCropComponent.checkSelectAgronomy == true || FieldFlowerCropComponent.checkSelectRubber == true || FieldFlowerCropComponent.checkSelectPerennial == true))) {
        return { 'plantings': true, 'primaryPlant': true };
      }
      if (plantings.length < 1) {
        return { 'plantings': true };
      }
      if (thisPlantOnly.value == null && (FieldFlowerCropComponent.checkSelectRice == true || FieldFlowerCropComponent.checkSelectAgronomy == true || FieldFlowerCropComponent.checkSelectRubber == true || FieldFlowerCropComponent.checkSelectPerennial == true)) {
        return { 'thisPlantOnly': true };
      }
      if (thisPlantOnly.value == false && primaryPlant.length < 1 && (FieldFlowerCropComponent.checkSelectRice == true || FieldFlowerCropComponent.checkSelectAgronomy == true || FieldFlowerCropComponent.checkSelectRubber == true || FieldFlowerCropComponent.checkSelectPerennial == true)) {
        return { 'primaryPlant': true };
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
    if (name == "primaryPlant") {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.primaryPlant && (ctrl.dirty || this.submitRequested);
    }
    if (name == "thisPlantOnly") {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.thisPlantOnly && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
