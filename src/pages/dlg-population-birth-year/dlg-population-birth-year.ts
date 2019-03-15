import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DlgPopulationBirthYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-population-birth-year',
  templateUrl: 'dlg-population-birth-year.html',
})
export class DlgPopulationBirthYearPage {

  public birthYear: Array<number> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgPopulationBirthYearPage');
    for (let i = 562; i >= 442; i--) {
      this.birthYear.push(i);
    }
    this.birthYear.push(999);
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog(year: number) {
    this.viewCtrl.dismiss(year);
  }

}
