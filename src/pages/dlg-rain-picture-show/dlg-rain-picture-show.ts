import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the DlgRainPictureShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-rain-picture-show',
  templateUrl: 'dlg-rain-picture-show.html',
})
export class DlgRainPictureShowPage {

  private images : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
    this.images = this.navParams.get('src');
    console.log(this.images);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgRainPictureShowPage');
  }
  public closeDialog() {
    this.viewCtrl.dismiss();
  }

}
