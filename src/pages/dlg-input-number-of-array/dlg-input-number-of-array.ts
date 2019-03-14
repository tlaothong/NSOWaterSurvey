import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DlgInputNumberOfArrayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-input-number-of-array',
  templateUrl: 'dlg-input-number-of-array.html',
})
export class DlgInputNumberOfArrayPage {

  public text: string;
  public inputNumber:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgInputNumberOfArrayPage');
  }

}
