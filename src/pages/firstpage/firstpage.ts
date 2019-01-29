import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { LoggingState } from '../../states/logging/logging.reducer';
import { SetIsCheckShow } from '../../states/logging/logging.actions';

@IonicPage()
@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {

  constructor(public navCtrl: NavController, private store: Store<LoggingState>, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstpagePage');
  }

  goScanqrPage() {
    this.store.dispatch(new SetIsCheckShow(true))
    // this.navCtrl.push("ScanqrPage")
    this.navCtrl.pop();
  }

  goLoginPage() {
    this.store.dispatch(new SetIsCheckShow(false))
    this.navCtrl.pop();
    // this.navCtrl.push("LoginPage")
  }

}
