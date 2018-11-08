import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DlgUnitPage } from '../dlg-unit/dlg-unit';
import { unitModel } from '../../app/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the UnitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage {
  public FormItem: FormGroup;
  unitM: unitModel = new unitModel;
  private submitRequested: boolean;

  // roomNo : string;
  // access : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public fb: FormBuilder) {
    // this.unitM.roomNumber = "1";
    // this.unitM.access = 2;

    this.FormItem = this.fb.group({
      // 'subUnit': this.fb.group({
      //   'roomNumber': ["1", Validators.required],
      //   'access': ["a1", Validators.required],
      //   'hasPlumbing': [null, Validators.required],
      //   'hasPlumbingMeter': [null, Validators.required],
      //   'isPlumbingMeterXWA': [null, Validators.required],
      //   'hasGroundWater': [null, Validators.required],
      //   'hasGroundWaterMeter': [null, Validators.required]
      // })
      'roomNumber': ["1", Validators.required],
      'access': ["a1", Validators.required],
      'hasPlumbing': [null, Validators.required],
      'hasPlumbingMeter': [null, Validators.required],
      'isPlumbingMeterXWA': [null, Validators.required],
      'hasGroundWater': [null, Validators.required],
      'hasGroundWaterMeter': [null, Validators.required]
      ,
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
      'comments': this.fb.group({
        'text': [null, Validators.required],
      })
    });

    // this.roomNo = "1";
    // this.access = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitPage');
  }

  ionViewDidEnter() {
    // if (this.FormItem.invalid) {
    //   this.FormItem.get('access').setValue('a6');
    // }
    // else {
    //   this.FormItem.get('access').setValue('a7');
    // }
  }

  Unit() {
    const modal = this.modalCtrl.create("DlgUnitPage", { FormItem: this.FormItem });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.FormItem.setValue(fg.value);
      }
    });
    modal.present();
  }

  // public isValid(name: string): boolean {
  //   var ctrl = this.FormItem.get(name);
  //   return ctrl.invalid && (ctrl.touched || this.submitRequested);
  // }
}
