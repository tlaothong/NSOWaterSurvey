import { FieldFlowerCropComponent } from './../../components/field-flower-crop/field-flower-crop';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EX_TREEDOK_LIST } from '../../models/tree';
/**
 * Generated class for the FlowerCropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flower-crop',
  templateUrl: 'flower-crop.html',
})
export class FlowerCropPage {
  @ViewChildren(FieldFlowerCropComponent) private fieldFlowerCrop : FieldFlowerCropComponent[];
  private submitRequested: boolean;
  flowerCropFrm: FormGroup;
  shownData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public modalCtrl: ModalController) {
    this.flowerCropFrm = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields' : fb.array([
        FieldFlowerCropComponent.CreateFormGroup(fb)]),
    });
    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowerCropPage');
  }

  model() {
    const modal = this.modalCtrl.create("SearchDropdownPage",
      { title: "ไม้ดอก ไม้ประดับ การเพาะพันธุ์ไม้", selected: [], list: EX_TREEDOK_LIST , limit: 5});


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

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldFlowerCrop.forEach(it=>it.submitRequest());

  }

  public isValid(name: string): boolean {
    var ctrl = this.flowerCropFrm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldFlowerCrop = (this.flowerCropFrm.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.flowerCropFrm.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldFlowerCrop.length) {
          const fld = fieldFlowerCrop[i];
          ctrl = fld;
        } else {
          ctrl = FieldFlowerCropComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.flowerCropFrm.setControl(componentFormArray, field);
    };

    this.flowerCropFrm.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
