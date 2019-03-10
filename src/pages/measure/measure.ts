import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Measure } from '../../models/Measure';

/**
 * Generated class for the MeasurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-measure',
  templateUrl: 'measure.html',
})
export class MeasurePage {

  public scale = new Measure;
  public table1
  public table2
  public table3
  public table4
  public table5
  public table6
  public table7

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    this.table1 = this.scale.table1
    this.table2 = this.scale.table2
    this.table3 = this.scale.table3
    this.table4 = this.scale.table4
    this.table5 = this.scale.table5
    this.table6 = this.scale.table6
    this.table7 = this.scale.table7
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeasurePage');
  }

  back() {
    this.navCtrl.pop();
  }

  range(l: any) {
    let result = []
    for (let i = 0; i < l.length; i++) {
      result.push(i)
    }
    return result
  }
}
