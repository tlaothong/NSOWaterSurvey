import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { LoadBootstrap } from '../../states/bootup/bootup.actions';
import { Device } from '@ionic-native/device/ngx';

@IonicPage()
@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {

  constructor(public navCtrl: NavController, private store: Store<BootupState>, public navParams: NavParams,
    private device: Device) {
    this.store.dispatch(new LoadBootstrap());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstpagePage');
    alert(JSON.stringify(this.device));
  }

}
