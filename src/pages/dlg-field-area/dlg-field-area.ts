import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the DlgFieldAreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-field-area',
  templateUrl: 'dlg-field-area.html',
})
export class DlgFieldAreaPage {

  public FormItem: FormGroup;
  public text: string;

  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private viewCtrl: ViewController) {
    this.FormItem = this.fb.group({
      'rai': [null, [Validators.required, Validators.min(0)]],
      'ngan': [null, [Validators.required, Validators.min(0), Validators.max(3)]],
      'sqWa': [null, [Validators.required, Validators.min(0), Validators.max(99)]],
    });
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);
    this.text = navParams.get("headline");
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    if (this.FormItem.valid) {
      this.viewCtrl.dismiss(this.FormItem);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgFieldAreaPage');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
