import { theOther } from './../../app/models';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalGun2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-gun2',
  templateUrl: 'modal-gun2.html',
})
export class ModalGun2Page {

  doReceive : theOther = new theOther;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalGun2Page');
  }

  ionViewDidEnter(){
    this.doReceive = this.navParams.data._choiceOther;
  }

  confirm() {
    this.navCtrl.pop();
  }

}
