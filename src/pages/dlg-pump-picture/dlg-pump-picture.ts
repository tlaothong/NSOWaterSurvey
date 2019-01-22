import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the DlgPumpPicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-pump-picture',
  templateUrl: 'dlg-pump-picture.html',
})
export class DlgPumpPicturePage {

  private checkedPump : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.checkedPump = this.navParams.get('checkg');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgPumpPicturePage');
     console.log(this.checkedPump)
     console.log('checkg')
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  pictureShow(src: string) {

    let profileModal = this.modalCtrl.create("DlgCalendarAgePage", { src: src });
    profileModal.present();
  }

}
