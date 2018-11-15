import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { EX_TREEVET_LIST } from '../../models/tree';
import { FieldAreaComponent } from '../field-area/field-area';
import { LocationComponent } from '../location/location';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { ModalPlantComponent } from '../modal-plant/modal-plant';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getAgronomyPlantDoing, getPlant } from '../../states/household';

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
  shownData = EX_TREEVET_LIST;
  shownData2: string[];

  private submitRequested: boolean;

  @ViewChildren(FieldAreaComponent) private fieldAreas: FieldAreaComponent[];
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];
  @ViewChildren(ModalPlantComponent) private modalPlant: FieldAreaComponent[];

  // private dataPlant$ = this.store.select(getPlant);
  // private agronomyPlantDoing$ = this.store.select(getAgronomyPlantDoing);


  constructor(public fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>) {

    this.FormItem = FieldHerbsPlantComponent.CreateFormGroup(this.fb);

  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': ['', Validators.required], //แปลงนี้ตั้งอยู่ในเขตชลประทานหรือไม่
      'plantings': ModalPlantComponent.CreateFormGroup(fb),
      'mixedWithPrimaryPlantCode': [null, Validators.required], //ลักษณะการปลูกเป็นแบบใด
      'thisPlantOnly': [null, Validators.required],
      'otherPlantings': ModalPlantComponent.CreateFormGroup(fb),
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DryCropPlantingPage');
    // TODO
    // this.agronomyPlantDoing$.subscribe(data => this.FormItem.get('otherPlantings').setValue(data));
    // console.log(this.FormItem.value);
    // this.dataPlant$.subscribe(data => this.Plant = data);
    // console.log("xxxxx");
    // console.log(this.Plant);


  }


  submitRequest() {
    this.submitRequested = true;
    this.fieldAreas.forEach(it => it.submitRequest());
    this.locationT.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.modalPlant.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  // model() {
  //   const modal = this.modalCtrl.create("SearchDropdownPage",
  //     { title: "พืชผัก สมุนไพร", selected: [], list: EX_TREEVET_LIST, limit: 5 });

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
