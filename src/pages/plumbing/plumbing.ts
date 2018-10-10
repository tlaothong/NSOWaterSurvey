import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the PlumbingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plumbing',
  templateUrl: 'plumbing.html',
})
export class PlumbingPage {
  public PlumbingFrm: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.PlumbingFrm = this.fb.group({
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlumbingPage');
  }

  // public handleSubmit() {
  //   this.submitRequested = true;
  // }

  // public isValid(name: string) : boolean {
  //   var ctrl = this.PlumbingFrm.get(name);
  //   return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  // }
}
