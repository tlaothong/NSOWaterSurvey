import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
