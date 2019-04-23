import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-pool-area',
  templateUrl: 'dlg-pool-area.html',
})
export class DlgPoolAreaPage {

  public FormItem: FormGroup;
  public text: string;
  public head: string;
  public submitRequested: boolean;
  public isAnimal: boolean;
  public isCommunity: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private fb: FormBuilder) {
    this.FormItem = navParams.get('FormItem').get('rectangle');
    this.text = navParams.get("headline");
    this.head = navParams.get("head");
    this.isAnimal = navParams.get("isAnimal");
    this.isCommunity = navParams.get("isCommunity");

    // this.FormItem = PoolAreaComponent.CreateFormGroup(this.fb);
    //const datain = navParams.get('FormItem') as FormGroup;
    // this.FormItem.setValue(datain.value);
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    this.viewCtrl.dismiss(this.FormItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgFieldAreaPage');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anyCheck') {
      return (this.FormItem.get('width').value == null || this.FormItem.get('width').value <= 0)
        || (this.FormItem.get('length').value == null || this.FormItem.get('length').value <= 0);
    }
    return (ctrl.value == null || ctrl.value <= 0) && (ctrl.dirty || this.submitRequested);
  }

}
