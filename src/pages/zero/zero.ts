import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private modalCtrl: ModalController, private fb: FormBuilder) {
    this.f = this.fb.group({
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
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZeroPage');
  }

  public handleSubmit() { }

  public showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableCheckItemCountPage");
    modal.present();
  }

}
