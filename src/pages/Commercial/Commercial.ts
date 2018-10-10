import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Commercial',
  templateUrl: 'Commercial.html',
})
export class CommercialPage {
  private f: FormGroup;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fb: FormBuilder) {
    this.f = this.fb.group({
      'PreSchool': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'Kindergarten': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'PrimarySchool': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'Highschool': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'Vocational': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'HigherEducation': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommercialPage');
  }

}
