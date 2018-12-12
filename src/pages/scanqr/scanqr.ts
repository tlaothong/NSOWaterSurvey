import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getUserByQr } from '../../states/household';
import { map } from 'rxjs/operators';
import { LoadUserByQrCodeSample } from '../../states/household/household.actions';

/**
 * Generated class for the ScanqrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanqr',
  templateUrl: 'scanqr.html',
})
export class ScanqrPage {
  data: any;
  private formData$ = this.store.select(getUserByQr).pipe(map(s => s));
  constructor(public navCtrl: NavController, public navParams: NavParams,private store: Store<HouseHoldState>) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanqrPage');
  }

  goFirstLogin() {
    console.log("kjuyjyu",this.store.dispatch(new LoadUserByQrCodeSample('a4daa261-451c-46a0-bbda-02dd6084d0f4')));
  }
  goBack() {
    this.navCtrl.pop();
  }

}
