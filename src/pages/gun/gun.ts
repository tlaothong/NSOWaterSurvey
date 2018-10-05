import { schoolCount, theOther } from './../../app/models';
import { ModalGunPage } from './../modal-gun/modal-gun';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalGun2Page } from '../modal-gun2/modal-gun2';

/**
 * Generated class for the GunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gun',
  templateUrl: 'gun.html',
})
export class GunPage {
  do1 : schoolCount = new schoolCount;
  do2 : schoolCount = new schoolCount;
  do3 : schoolCount = new schoolCount;
  do4 : schoolCount = new schoolCount;
  do5 : schoolCount = new schoolCount;
  do6 : schoolCount = new schoolCount;

  act1 : theOther = new theOther;
  act2 : theOther = new theOther;
  act3 : theOther = new theOther;
  act4 : theOther = new theOther;
  act5 : theOther = new theOther;
  act6 : theOther = new theOther;
  act7 : theOther = new theOther;
  act8 : theOther = new theOther;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.do1.name = '1. ก่อนวัยเรียน';
    this.do2.name = '2. อนุบาล';
    this.do3.name = '3. ประถมศึกษา';
    this.do4.name = '4. มัธยมศึกษา';
    this.do5.name = '5. ปวช./ปวส.';
    this.do6.name = '6. อุดมศึกษา';

    this.act8.name = "8. อื่นๆ";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GunPage');
  }

  showModal(amountPeople : schoolCount) {
    const modal = this.modalCtrl.create(ModalGunPage, { _amountPeople: amountPeople });
    modal.present();
  }

  showModal2(choiceOther : theOther) {
    const modal = this.modalCtrl.create(ModalGun2Page, { _choiceOther: choiceOther });
    modal.present();
  }

}
