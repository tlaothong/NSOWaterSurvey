import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

/**
 * Generated class for the ZeroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zero',
  templateUrl: 'zero.html',
})
export class ZeroPage {

  public f: FormGroup;

  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private modalCtrl: ModalController, private fb: FormBuilder) {
    this.f = this.fb.group({
      'name': [null, Validators.required],
      'preSchool': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'kindergarten': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'secondarySchool': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'vocational': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'waterSources': this.fb.group({
        'hasOther': false,
        'other': [null, Validators.required]
      })
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZeroPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string) : boolean {
    var ctrl = this.f.get(name);
    return !ctrl.valid && (ctrl.dirty || this.submitRequested);
  }

}
