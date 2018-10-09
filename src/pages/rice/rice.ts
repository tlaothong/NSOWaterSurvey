import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rice',
  templateUrl: 'rice.html',
})
export class RicePage {

  RiceForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fb : FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RicePage');
  }

  ionViewDidEnter() {
    this.RiceForm = this.fb.group({

    });
  }

}
