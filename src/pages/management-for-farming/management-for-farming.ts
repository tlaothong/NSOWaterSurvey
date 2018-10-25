import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the ManagementForFarmingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-management-for-farming',
  templateUrl: 'management-for-farming.html',
})
export class ManagementForFarmingPage {

  public f: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      'managementforfarming': this.fb.group({
        'doing': [null, Validators.required],
        'projectcount': [null, Validators.required],
      }),
      'detailmanagementforfarming': this.fb.group({
        'name': [null, Validators.required],
        'area': this.fb.array([]),
        'membercount': [null, Validators.required],
        'avgsurfacewateruse': [null, Validators.required],
        'groundwatercount': [null, Validators.required],
        'avggroundwateruse': [null, Validators.required],

      })
    });
  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagementForFarmingPage');
  }

}
