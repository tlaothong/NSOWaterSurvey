import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-population',
  templateUrl: 'population.html',
})
export class PopulationPage {
  public f: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    // this.f = this.fb.group({
    //   'population': this.fb.group({
    //     'PersonCount': [null, Validators.required],
    //     'Persons':
    //   }),
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopulationPage');
  }

}
