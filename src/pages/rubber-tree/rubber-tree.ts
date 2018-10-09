import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
/**
 * Generated class for the RubberTreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rubber-tree',
  templateUrl: 'rubber-tree.html',
})
export class RubberTreePage {
  rubberTreeForm : FormGroup;
  doingPlant : FormControl;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RubberTreePage');
  }

  // ionViewDidEnter() {
  //   this.rubberTreeForm = new FormGroup({
  //     doing : new FormControl(),
  //     fieldCount : new FormControl('')
  //   });

  //   this.doingPlant = new FormControl('');
  // }

}
