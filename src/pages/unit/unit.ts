import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DlgUnitPage } from '../dlg-unit/dlg-unit';
import { unitModel } from '../../app/models';

/**
 * Generated class for the UnitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage {

  unitM: unitModel = new unitModel;
  // roomNo : string;
  // access : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.unitM.roomNumber = "1";
    this.unitM.access = 1;
    // this.roomNo = "1";
    // this.access = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitPage');
  }

  Unit() {
    const modal = this.modalCtrl.create("DlgUnitPage", { _unitM: this.unitM });
    modal.present();
  }
}
