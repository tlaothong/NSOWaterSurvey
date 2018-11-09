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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public fb: FormBuilder) {
    this.FormItem = UnitPage.CreateFormGroup(this.fb);
  }

  ionViewDidEnter() {

  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'subUnit': fb.group({
        'roomNumber': [null, Validators.required],
        'access': [0, Validators.required],
        'hasPlumbing': [null, Validators.required],
        'hasPlumbingMeter': [false, Validators.required],
        'isPlumbingMeterXWA': [false, Validators.required],
        'hasGroundWater': [null, Validators.required],
        'hasGroundWaterMeter': [false, Validators.required],
      }),
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
      'comments': fb.group({
        'at': [null],
        'text': [null],
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitPage');
    console.log(this.FormItem.get('subUnit.access').value);
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
  //   return ctrl.value == null && (ctrl.touched || this.submitRequested);
  // }
}
