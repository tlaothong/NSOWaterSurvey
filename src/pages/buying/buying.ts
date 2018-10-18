import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the BuyingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buying',
  templateUrl: 'buying.html',
})
export class BuyingPage {
  BuyingForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyingPage');
  }
  ionViewDidEnter() {
    this.BuyingForm = this.fb.group({
      'package': this.fb.group({
        'name': [null, Validators.required],
        'size': [null, Validators.required],
        'drink': [null, Validators.required],
        'agriculture': [null, Validators.required],
        'factory': [null, Validators.required],
        'service': [null, Validators.required]
      })
    });
  }

}
