import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dlg-rain-picture',
  templateUrl: 'dlg-rain-picture.html',
})
export class DlgRainPicturePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgRainPicturePage');
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  pictureShow(src: string) {

    let profileModal = this.modalCtrl.create("DlgRainPictureShowPage", { src: src });
    profileModal.present();
  }

}
