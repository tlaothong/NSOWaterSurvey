import { schoolCount } from './../../app/models';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalGunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-gun',
  templateUrl: 'modal-gun.html',
})
export class ModalGunPage {

  doReceive : schoolCount = new schoolCount;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalGunPage');
  }

  ionViewDidEnter(){
    this.doReceive = this.navParams.data._amountPeople;
  }

  confirm() {
    this.navCtrl.pop();
  }

  
}
