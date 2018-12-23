import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-table-buying',
  templateUrl: 'dlg-table-buying.html',
})
export class DlgTableBuyingPage {

  public FormItem: FormGroup;
  public text: string;
  public size: number;
  public volumn: string;
  public getIsHouseHold: string;
  public getIsAgriculture: string;
  public getIsFactorial: string;
  public getIsCommercial: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("headline");
    this.size = navParams.get("size");
    this.volumn = navParams.get("volumn");
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
    if (this.FormItem.get('size').invalid) {
      this.FormItem.get('size').setValue(this.size);
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched);
  }

}
