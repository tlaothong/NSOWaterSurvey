import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { EX_TREEVET_LIST } from '../../models/tree';
import { FieldAreaComponent } from '../field-area/field-area';
import { LocationComponent } from '../location/location';
import { WaterSources9Component } from '../water-sources9/water-sources9';

/**
 * Generated class for the FieldHerbsPlantComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-herbs-plant',
  templateUrl: 'field-herbs-plant.html'
})
export class FieldHerbsPlantComponent {

  @Input() public FormItem: FormGroup;
  @Input('no') public no: string;
  shownData: string[];

  private submitRequested: boolean;

  @ViewChildren(FieldAreaComponent) private fieldAreas: FieldAreaComponent[];
  @ViewChildren(LocationComponent) private locationT : LocationComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9 : WaterSources9Component[];

  constructor(public fb: FormBuilder, public modalCtrl: ModalController) {

    this.FormItem = FieldHerbsPlantComponent.CreateFormGroup(this.fb);

  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'names': [null, Validators.required], //ในรอบ 12 เดือนที่ผ่านมาที่แปลงนี้ปลูก พืชผัก สมุนไพร ชนิดใด (ระบุได้ไม่เกิน 5 ชนิด)
      'irrigationField': [null, Validators.required], //แปลงนี้ตั้งอยู่ในเขตชลประทานหรือไม่
      'mixedWithPrimaryPlant': [null, Validators.required], //ลักษณะการปลูกเป็นแบบใด
      'thisPlantOnly': [null, Validators.required],
      'location': LocationComponent.CreateFormGroup(fb) ,
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  model() {
    const modal = this.modalCtrl.create("SearchDropdownPage",
      { title: "พืชผัก สมุนไพร", selected: [], list: EX_TREEVET_LIST, limit: 5 });

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
