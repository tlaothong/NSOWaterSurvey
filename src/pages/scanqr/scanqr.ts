import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadUserDataByQRCode } from '../../states/logging/logging.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getUserData } from '../../states/logging';
import { map, delay } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-scanqr',
  templateUrl: 'scanqr.html',
})

export class ScanqrPage {
  data: any;
  fg: FormGroup;
  qrCode: string;
  private formData$ = this.store.select(getUserData).pipe(map(s => s));
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>) {
  }

  ionViewDidLoad() {

  }

  goFirstLogin() {
    this.qrCode = "a1dde9b8-b281-44bf-8d43-d9adf55206a4";
    this.store.dispatch(new LoadUserDataByQRCode(this.qrCode));
    delay(7000);
    this.navCtrl.pop();
    this.navCtrl.push("FirstloginPage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
