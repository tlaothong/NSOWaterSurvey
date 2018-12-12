import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-scanqr',
  templateUrl: 'scanqr.html',
})
export class ScanqrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanqrPage');
  }

  goFirstLogin() {
    this.navCtrl.push("FirstloginPage")
  }

  goBack() {
    this.navCtrl.pop();
  }

}
