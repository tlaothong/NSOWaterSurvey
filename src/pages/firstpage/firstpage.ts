import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, Platform } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { LoadBootstrap, LoginUser, SetCurrentWorkingEA } from '../../states/bootup/bootup.actions';
import { DataStoreProvider } from '../../providers/data-store/data-store';
import { CloudSyncProvider } from '../../providers/cloud-sync/cloud-sync';
import { WebStateProvider } from '../../providers/web-state/web-state';
import { SetCurrentWorkingBuilding, SaveBuilding } from '../../states/building/building.actions';
import { Building } from '../../models/mobile/MobileModels';
import { SaveHouseHold } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {

  private appMsg$ = Promise.resolve({});// this.dataStore.getNotiAppMsg();
  private mustStop = false;

  constructor(public navCtrl: NavController, private store: Store<BootupState>, public navParams: NavParams, private platform: Platform, private dataStore: DataStoreProvider, private cloudSync: CloudSyncProvider, private webState: WebStateProvider) {
    this.store.dispatch(new LoadBootstrap());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstpagePage');

    // this.appMsg$.take(1).subscribe(appMsg => {
    //   if (appMsg) {
    //     if (appMsg.kind == "updateReq") {
    //       this.mustStop = true;
    //     }
    //   }
    // });

    this.initSession();

  }

  private async initSession() {
    let params = new URLSearchParams(window.location.search);
    let sessionId = params.get('sessionId');

    try {
      let bld = await this.cloudSync.getWebState(sessionId);
      this.store.dispatch(new LoginUser(this.webState.userId));
      this.store.dispatch(new SetCurrentWorkingEA(this.webState.eaCode));
      this.store.dispatch(new SaveBuilding(bld));

      let units = this.webState.units;
      for (const uid of units) {
        let unt = await this.cloudSync.getWebUnit(uid);
        this.store.dispatch(new SaveHouseHold(unt));
      }
    } catch {
      alert("Invalid session");
    }
  }

  public viewSurvey() {
    this.store.dispatch(new SetCurrentWorkingBuilding(this.webState.buildingId));
    this.navCtrl.push('BuildingInformation1Page', { ea: this.webState.eaCode, id: this.webState.buildingId });
  }

}
