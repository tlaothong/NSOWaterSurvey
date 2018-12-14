import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HouseHoldState } from '../../states/household/household.reducer';
import { LoadUserInformation } from '../../states/logging/logging.actions';

@IonicPage()
@Component({
  selector: 'page-scanqr',
  templateUrl: 'scanqr.html',
})

export class ScanqrPage {
  data: any;
  fg: FormGroup;

  constructor(private navCtrl: NavController, private store: Store<HouseHoldState>) {
  }

  goFirstLogin() {
    this.store.dispatch(new LoadUserInformation());
  }

  goBack() {
    this.navCtrl.pop();
  }
}
