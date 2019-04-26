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
  private static checkSelectRice: boolean;
  private static checkSelectAgronomy: boolean;
  private static checkSelectRubber: boolean;
  private static checkSelectPerennial: boolean;
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

  ngOnInit() {
    FieldHerbsPlantComponent.checkSelectRice = this.getAgiSelectRice;
    FieldHerbsPlantComponent.checkSelectAgronomy = this.getAgiSelectAgronomy;
    FieldHerbsPlantComponent.checkSelectRubber = this.getAgiSelectRubber;
    FieldHerbsPlantComponent.checkSelectPerennial = this.getAgiSelectPerennial;
  }

  submitRequest() {
    this.submitRequested = true;
    this.fieldAreas.forEach(it => it.submitRequest());
    this.locationT.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.modalPlant.forEach(it => it.submitRequest());
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const plantings = c.get('plantings.plants').value as Array<any>;
      const primaryPlant = c.get('primaryPlant.plants').value as Array<any>;
      const thisPlantOnly = c.get('thisPlantOnly')

      if (plantings.length < 1 && thisPlantOnly.value == null && (FieldHerbsPlantComponent.checkSelectRice == true || FieldHerbsPlantComponent.checkSelectAgronomy == true || FieldHerbsPlantComponent.checkSelectRubber == true || FieldHerbsPlantComponent.checkSelectPerennial == true)) {
        return { 'plantings': true, 'thisPlantOnly': true };
      }
      if (plantings.length < 1 && (thisPlantOnly.value == false && primaryPlant.length < 1 && (FieldHerbsPlantComponent.checkSelectRice == true || FieldHerbsPlantComponent.checkSelectAgronomy == true || FieldHerbsPlantComponent.checkSelectRubber == true || FieldHerbsPlantComponent.checkSelectPerennial == true))) {
        return { 'plantings': true, 'primaryPlant': true };
      }
      if (plantings.length < 1) {
        return { 'plantings': true };
      }
      if (thisPlantOnly.value == null && (FieldHerbsPlantComponent.checkSelectRice == true || FieldHerbsPlantComponent.checkSelectAgronomy == true || FieldHerbsPlantComponent.checkSelectRubber == true || FieldHerbsPlantComponent.checkSelectPerennial == true)) {
        return { 'thisPlantOnly': true };
      }
      if (thisPlantOnly.value == false && primaryPlant.length < 1 && (FieldHerbsPlantComponent.checkSelectRice == true || FieldHerbsPlantComponent.checkSelectAgronomy == true || FieldHerbsPlantComponent.checkSelectRubber == true || FieldHerbsPlantComponent.checkSelectPerennial == true)) {
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
