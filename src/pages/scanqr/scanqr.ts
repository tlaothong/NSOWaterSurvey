import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getUserInformation } from '../../states/logging';
import { LoadUserInformation } from '../../states/logging/logging.actions';
import { LoggingState } from '../../states/logging/logging.reducer';

@IonicPage()
@Component({
  selector: 'page-scanqr',
  templateUrl: 'scanqr.html',
})
export class ScanqrPage {
  data: any;
  qrCode: string;
  private formData$ = this.store.select(getUserInformation).pipe(map(s => s));
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>) {
  }

  ionViewDidLoad() {

  }

  goFirstLogin() {
    this.qrCode = "a1dde9b8-b281-44bf-8d43-d9adf55206a4";
    this.store.dispatch(new LoadUserInformation(this.qrCode))
  }

  goBack() {
    this.navCtrl.pop();
  }

}
