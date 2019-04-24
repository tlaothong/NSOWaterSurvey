import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
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
      'irrigationField': [null, Validators.required],
      'plantings': ModalPlantComponent.CreateFormGroup(fb),
      'primaryPlant': ModalPlantComponent.CreateFormGroup(fb),
      'thisPlantOnly': [null, Validators],
      'otherPlantings': ModalPlantComponent.CreateFormGroup(fb),
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    }, {
        validator: FieldHerbsPlantComponent.checkAnyOrOther()
      });
  }

  submitRequest() {
    this.submitRequested = true;
    this.fieldAreas.forEach(it => it.submitRequest());
    this.locationT.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.modalPlant.forEach(it => it.submitRequest());
    console.log(this.getAgiSelectRice, this.getAgiSelectAgronomy, this.getAgiSelectRubber, this.getAgiSelectPerennial);
    console.log();

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

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const plantings = c.get('plantings.plants').value as Array<any>;
      const primaryPlant = c.get('primaryPlant.plants').value as Array<any>;
      const thisPlantOnly = c.get('thisPlantOnly')
      // const getAgiSelectRice = getAgiSelectRice
      // const getAgiSelectAgronomy = c.get('getAgiSelectAgronomy');
      // const getAgiSelectRubber = c.get('getAgiSelectRubber');
      // const getAgiSelectPerennial = c.get('getAgiSelectPerennial');

      // console.log("check data", getAgiSelectRice, getAgiSelectAgronomy, getAgiSelectRubber, getAgiSelectPerennial);

      if (plantings.length <= 0 && thisPlantOnly.value == null) {
        return { 'plantings': true, 'thisPlantOnly': true };
      }
      if (plantings.length <= 0) {
        return { 'plantings': true };
      }
      if (thisPlantOnly.value == null) {
        return { 'thisPlantOnly': true };
      }
      if (!thisPlantOnly.value && primaryPlant.length <= 0) {
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
