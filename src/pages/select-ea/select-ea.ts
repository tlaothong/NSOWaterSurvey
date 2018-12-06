import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select-ea',
  templateUrl: 'select-ea.html',
})
export class SelectEaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectEaPage');
  }

  goConfirmSeletEAPage() {
    this.navCtrl.push("HomesPage")
  }
  goBack() {
    this.navCtrl.pop();
  }

}
