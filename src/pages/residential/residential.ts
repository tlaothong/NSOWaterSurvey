import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the ResidentialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-residential',
  templateUrl: 'residential.html',
})
export class ResidentialPage {
  residentialFrm: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.residentialFrm = this.fb.group({
      'memberCount': [null, Validators.required],
      'workingAge': [null, Validators.required],
      'gardeningUse': [null, Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentialPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.residentialFrm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
