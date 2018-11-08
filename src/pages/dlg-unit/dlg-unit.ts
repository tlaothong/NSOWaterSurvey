import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the DlgUnitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-unit',
  templateUrl: 'dlg-unit.html',
})
export class DlgUnitPage {
  private submitRequested: boolean;
  public FormItem: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public fb: FormBuilder) {

    // this.FormItem = this.fb.group({
    //   'roomNumber': [null, Validators.required],
    //   'access': [null, Validators.required],
    //   'hasPlumbing': [null, Validators.required],
    //   'hasPlumbingMeter': [null, Validators.required],
    //   'isPlumbingMeterXWA': [null, Validators.required],
    //   'hasGroundWater': [null, Validators.required],
    //   'hasGroundWaterMeter': [null, Validators.required],
    //   'isHouseHold': [null, Validators.required],
    //   'isAgriculture': [null, Validators.required],
    //   'isFactorial': [null, Validators.required],
    //   'isCommercial': [null, Validators.required],
    //   'comments': this.fb.group({
    //     'text': [null, Validators.required],
    //   })
    // });
    // const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem = navParams.get('FormItem') as FormGroup;
    // this.FormItem.setValue(datain.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgUnitPage');
  }
  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    this.viewCtrl.dismiss(this.FormItem);
    console.log(this.FormItem.status);
    this.IsCheckValid(this.FormItem);
  }

  public IsCheckValid(formItem: FormGroup) {
    if (formItem.valid) {
      this.FormItem.get('access').setValue('a7');
    }
    else if (formItem.invalid) {
      this.FormItem.get('access').setValue('a6');
    }
  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
