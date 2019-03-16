import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { LoadBootstrap } from '../../states/bootup/bootup.actions';

@IonicPage()
@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {

  constructor(public navCtrl: NavController, private store: Store<BootupState>, public navParams: NavParams) {
    this.store.dispatch(new LoadBootstrap());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstpagePage');
  }

  goScanqrPage() {
    this.navCtrl.pop();
  }

  goLoginPage() {
    this.navCtrl.pop();
  }

  
}
