import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dlg-pump-picture-show',
  templateUrl: 'dlg-pump-picture-show.html',
})
export class DlgPumpPictureShowPage {

  private images: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
    this.images = this.navParams.get('src');
    console.log(this.images);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgPumpPictureShowPage');
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

}
