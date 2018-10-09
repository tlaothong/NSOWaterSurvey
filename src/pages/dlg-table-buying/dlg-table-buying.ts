import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

/**
 * Generated class for the DlgTableBuyingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-table-buying',
  templateUrl: 'dlg-table-buying.html',
})
export class DlgTableBuyingPage {

  public FormItem: FormGroup;
  public text: string;
  public size: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("headline");
    this.size = navParams.get("size");
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

}
