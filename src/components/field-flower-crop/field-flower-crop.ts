import { FieldAreaComponent } from './../field-area/field-area';
import { LocationComponent } from './../location/location';
import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { ModalController } from 'ionic-angular';
import { EX_TREEDOK_LIST } from '../../models/tree';
import { ModalPlantComponent } from '../modal-plant/modal-plant';

/**
 * Generated class for the FieldFlowerCropComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-flower-crop',
  templateUrl: 'field-flower-crop.html'
})
export class FieldFlowerCropComponent implements ISubmitRequestable {

  @Input('no') text: string;
  @Input() public FormItem: FormGroup;
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  @ViewChildren(WaterSources9Component) private waterSource9: WaterSources9Component[];
  private submitRequested: boolean;
  shownData = EX_TREEDOK_LIST;
  constructor(public fb: FormBuilder, public modalCtrl: ModalController) {
    console.log('Hello FieldFlowerCropComponent Component');
    this.text = 'Hello World';

    this.FormItem = FieldFlowerCropComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': [null, Validators.required],
      'plantings':  fb.array([]),
      'otherPlantings': [null],
      'thisPlantOnly': [null, Validators.required],
      'mixedWithPrimaryPlantCode': [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    })
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.fieldArea.forEach(it => it.submitRequest());
    this.waterSource9.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  // model() {
  //   const modal = this.modalCtrl.create("SearchDropdownPage", 
  //   { title: "ไม้ดอก ไม่ประดับ", selected: [], list: EX_TREEDOK_LIST, limit: 5 });

  //   modal.onDidDismiss(data => {
  //     if (data) {
  //       // this.FormItem = data;
  //       // var fg = <FormGroup>data;
  //       // this.FormItem.setValue(fg.value);

  //       var adata = data as Array<string>;
  //       this.shownData = adata.map(it => it.split(".")[1]);
  //     }
  //   });

  //   modal.present();
  // }

  model2() {
    const modal = this.modalCtrl.create("SearchDropdownPage",
      { title: "พืชที่ปลูกหลัก", selected: [], list: [], limit: 5 });

    modal.onDidDismiss(data => {
      if (data) {
        // this.FormItem = data;
        // var fg = <FormGroup>data;
        // this.FormItem.setValue(fg.value);

        // var adata = data as Array<string>;
        // this.shownData = adata.map(it => it.split(".")[1]);
      }
    });

    modal.present();
  }
}
