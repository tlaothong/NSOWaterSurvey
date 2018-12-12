import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menudetail',
  templateUrl: 'menudetail.html',
})

export class MenudetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenudetailPage');
  }

  goGetworkPage() {
    this.navCtrl.push("GetworkPage")
  }

  goSelectEaPage() {
    this.navCtrl.push("SelectEaPage")
  }
  
  goSendPage() {
    this.navCtrl.push("SendPage")
  }

}
