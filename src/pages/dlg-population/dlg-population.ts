import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-population',
  templateUrl: 'dlg-population.html',
})
export class DlgPopulationPage {

  public FormItem: FormGroup;
  public text: string;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private fb: FormBuilder) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("iTitle");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgPopulationPage');
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

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public isDisabled(){
    return this.FormItem.get('nameTitle').value == '6' && this.FormItem.get('otherTitle').value == null 
    || this.FormItem.get('registration').value == '3' && this.FormItem.get('otherProvince').value == null;
  }
}
