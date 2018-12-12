import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstpagePage');
  }

  goScanqrPage() {
    this.navCtrl.push("ScanqrPage")
  }
  
  goLoginPage() {
    this.navCtrl.push("LoginPage")
  }

}
