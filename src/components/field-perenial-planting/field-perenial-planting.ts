import { WaterSources9Component } from './../water-sources9/water-sources9';
import { ISubmitRequestable } from './../../shared/ISubmitRequestable';
import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationComponent } from '../location/location';
import { FieldAreaComponent } from '../field-area/field-area';
import { ModalController } from 'ionic-angular';
import { EX_TREETON_LIST } from '../../models/tree';

/**
 * Generated class for the FieldPerenialPlantingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-perenial-planting',
  templateUrl: 'field-perenial-planting.html'
})
export class FieldPerenialPlantingComponent implements ISubmitRequestable {

  
  @Input() public FormItem: FormGroup;
  @Input('no') text: string;
  private submitRequested: boolean;

  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];
  shownData: string[];




  constructor(public fb:FormBuilder,public modalCtrl: ModalController) {
    console.log('Hello FieldPerenialPlantingComponent Component');
    this.text = 'Hello World';

    this.FormItem = FieldPerenialPlantingComponent.CreateFormGroup(this.fb);
  }



  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': [''],
      'plantings': [''],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    })
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.fieldArea.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
  }


  
  model() {
    const modal = this.modalCtrl.create("SearchDropdownPage", 
    { title: "พืชยืนต้น ไม้ผล สวนป่า", selected: [], list: EX_TREETON_LIST, limit: 5 });

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
