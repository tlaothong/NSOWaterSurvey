import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgPumpPicturePage');
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

}
