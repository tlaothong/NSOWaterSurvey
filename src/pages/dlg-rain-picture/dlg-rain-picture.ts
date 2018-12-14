import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dlg-rain-picture',
  templateUrl: 'dlg-rain-picture.html',
})
export class DlgRainPicturePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgRainPicturePage');
  }
  
  public closeDialog() {
    this.viewCtrl.dismiss();
  }

}
