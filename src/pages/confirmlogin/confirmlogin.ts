import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-confirmlogin',
  templateUrl: 'confirmlogin.html',
})
export class ConfirmloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmloginPage');
  }

  goGetworkPage() {
    this.navCtrl.push("GetworkPage")
  }
  
  goBack() {
    this.navCtrl.pop();
  }
}
