import { WaterSources9Component } from './../water-sources9/water-sources9';
import { ISubmitRequestable } from './../../shared/ISubmitRequestable';
import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationComponent } from '../location/location';
import { FieldAreaComponent } from '../field-area/field-area';
import { ModalController } from 'ionic-angular';
import { EX_TREERAI_LIST } from '../../models/tree';


/**
 * Generated class for the FieldDryCropPlantingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-dry-crop-planting',
  templateUrl: 'field-dry-crop-planting.html'
})
export class FieldDryCropPlantingComponent implements ISubmitRequestable {



  @Input() public FormItem: FormGroup;
  @Input('no') text :string;
  private submitRequested: boolean;
  @ViewChildren(LocationComponent) private locationT : LocationComponent[];
  @ViewChildren(FieldAreaComponent) private fieldArea : FieldAreaComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9 : WaterSources9Component[];
  shownData: string[];

  constructor(public fb:FormBuilder,public modalCtrl: ModalController) {
    console.log('Hello FieldDryCropPlantingComponent Component');
    this.text = 'Hello World';

    this.FormItem = FieldDryCropPlantingComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': [''],
      'nameDryCrop': [''],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    })
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it=>it.submitRequest());
    this.fieldArea.forEach(it=>it.submitRequest());
    this.waterSources9.forEach(it=>it.submitRequest());
  }

  model() {
    const modal = this.modalCtrl.create("SearchDropdownPage",
      { title: "พืชไร่", selected: [], list: EX_TREERAI_LIST, limit: 5 });
    modal.onDidDismiss(data => {
      if (data) {
        // this.FormItem = data;
        // var fg = <FormGroup>data;
        // this.FormItem.setValue(fg.value);
        var adata = data as Array<string>;
        this.shownData = adata.map(it => it.split(".")[1]);
      }
    });

    modal.present();
  }
}
