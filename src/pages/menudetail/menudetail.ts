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
    this.navCtrl.setRoot("GetworkPage")
  }

  goSelectEaPage() {
    this.navCtrl.setRoot("SelectEaPage")
  }
  
  goSendPage() {
    this.navCtrl.setRoot("SendPage")
  }

}
