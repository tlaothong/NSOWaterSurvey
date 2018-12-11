import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-getwork',
  templateUrl: 'getwork.html',
})
export class GetworkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetworkPage');
  }
  goConfirmDownLoadPage() {
    this.navCtrl.push("SelectEaPage")
  }
  
  goBack() {
    this.navCtrl.pop();
  }

}
