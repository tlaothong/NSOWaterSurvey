import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirstloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
