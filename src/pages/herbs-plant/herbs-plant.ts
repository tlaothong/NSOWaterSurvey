import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the HerbsPlantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-herbs-plant',
  templateUrl: 'herbs-plant.html',
})
export class HerbsPlantPage {
  private submitRequested: boolean;
  public HerbsPlantFrm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.HerbsPlantFrm = this.fb.group({
      'doing': [null, Validators.required], //ในรอบ 12 เดือนที่ผ่านมาครัวเรือนนี้ได้ปลูกพืชผัก สมุนไพร หรือไม่
      'fieldCount': [null, Validators.required], // ถ้า “ปลูก” มีพื้นที่ปลูกพืชผัก สมุนไพร จ้านวนกี่แปลง
      'fields': this.fb.group({
        'names': [null, Validators.required], //ในรอบ 12 เดือนที่ผ่านมาที่แปลงนี้ปลูก พืชผัก สมุนไพร ชนิดใด (ระบุได้ไม่เกิน 5 ชนิด)
        'irrigationField': [null, Validators.required], //แปลงนี้ตั้งอยู่ในเขตชลประทานหรือไม่
        'MixedWithPrimaryPlant': [null, Validators.required], //ลักษณะการปลูกเป็นแบบใด
        'thisPlantOnly': [null, Validators.required]
      })

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HerbsPlantPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.HerbsPlantFrm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }


}
