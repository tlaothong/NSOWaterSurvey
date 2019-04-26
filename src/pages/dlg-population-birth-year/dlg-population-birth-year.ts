import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dlg-population-birth-year',
  templateUrl: 'dlg-population-birth-year.html',
})
export class DlgPopulationBirthYearPage {

  public birthYear: Array<number> = [];
  public orders = [0, 1, 2, 3, 4];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgPopulationBirthYearPage');
    for (let i = 560; i >= 442; i -= 5) {
      this.birthYear.push(i);
    }
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog(year: number) {
    this.viewCtrl.dismiss(year);
  }

}
