import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableBuyingOtherComponent } from '../../components/table-buying-other/table-buying-other';

@IonicPage()
@Component({
  selector: 'page-dlg-table-buying-other',
  templateUrl: 'dlg-table-buying-other.html',
})
export class DlgTableBuyingOtherPage {

  public FormItem: FormGroup;
  public text: string;
  public size: string;
  public getIsHouseHold: string;
  public getIsAgriculture: string;
  public getIsFactorial: string;
  public getIsCommercial: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private viewCtrl: ViewController) {
    this.FormItem = navParams.get('FormItem');
    this.FormItem = TableBuyingOtherComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);
    this.text = navParams.get("headline");
    this.size = navParams.get("size");
    this.getIsHouseHold = navParams.get("getIsHouseHold");
    this.getIsAgriculture = navParams.get("getIsAgriculture");
    this.getIsFactorial = navParams.get("getIsFactorial");
    this.getIsCommercial = navParams.get("getIsCommercial");
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgTableBuyingPage');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched);
  }

}
