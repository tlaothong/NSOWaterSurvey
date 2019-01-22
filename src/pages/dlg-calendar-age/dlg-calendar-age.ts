import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dlg-calendar-age',
  templateUrl: 'dlg-calendar-age.html',
})
export class DlgCalendarAgePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgCalendarAgePage');
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }
}
