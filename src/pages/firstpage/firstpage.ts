import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, Platform } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { LoadBootstrap } from '../../states/bootup/bootup.actions';
import { DataStoreProvider } from '../../providers/data-store/data-store';
@IonicPage()
@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {

  private appMsg$ = this.dataStore.getNotiAppMsg();
  private mustStop = false;

  constructor(public navCtrl: NavController, private store: Store<BootupState>, public navParams: NavParams, private platform: Platform, private dataStore: DataStoreProvider) {
    this.store.dispatch(new LoadBootstrap());
  }

  ionViewDidLoad() {

    this.appMsg$.take(1).subscribe(appMsg => {
      if (appMsg) {
        if (appMsg.kind == "updateReq") {
          this.mustStop = true;
        }
      }
    });
  }

}
