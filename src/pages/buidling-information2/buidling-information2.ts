import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the BuidlingInformation2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buidling-information2',
  templateUrl: 'buidling-information2.html',
})
export class BuidlingInformation2Page {


  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuidlingInformation2Page');
  }

}
