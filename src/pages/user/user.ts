import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  userInfo: FormGroup;
  private submitRequested: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.userInfo = this.fb.group({
      
        "name": ['',Validators.required],
        "category": this.fb.group({
          "string": ['',Validators.required]
        }),
        "serviceType": this.fb.group({
          "string": ['',Validators.required]
        })
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  ionViewDidEnter() {


  }

  public handleSubmit() {
    this.submitRequested = true;

  }

  public isValid(name: string): boolean {
    var ctrl = this.userInfo.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}