import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-firstlogin',
  templateUrl: 'firstlogin.html',
})
export class FirstloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstloginPage');
  }

  goConfirmloginPage() {
    this.navCtrl.push("ConfirmloginPage")
  }
  
  goBack() {
    this.navCtrl.pop();
  }
}
