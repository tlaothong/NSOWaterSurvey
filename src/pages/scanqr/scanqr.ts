import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getUserInformation } from '../../states/logging';
import { LoadUserInformation } from '../../states/logging/logging.actions';

@IonicPage()
@Component({
  selector: 'page-scanqr',
  templateUrl: 'scanqr.html',
})
export class ScanqrPage {
  data: any;
  private formData$ = this.store.select(getUserInformation).pipe(map(s => s));
  constructor(public navCtrl: NavController, public navParams: NavParams,private store: Store<HouseHoldState>) {
  }

  ionViewDidLoad() {
    
  }

  goFirstLogin() {
    this.store.dispatch(new LoadUserInformation());
  }

  goBack() {
    this.navCtrl.pop();
  }

}
