import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-population',
  templateUrl: 'population.html',
})
export class PopulationPage {
  public f: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopulationPage');
  }

}
