import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityState } from '../../states/community/community.reducer';
import { LoadCommunitySample } from '../../states/community/community.actions';

@IonicPage()
@Component({
  selector: 'page-community-test',
  templateUrl: 'community-test.html',
})
export class CommunityTestPage {

  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<CommunityState>) {
    this.pages = [
      { title: 'การจัดการน้ำในหมู่บ้านชุมชน', component: "CommunityWaterManagementPage" },
      { title: 'โครงการจัดการน้ำเพื่อการเกษตรชุมชน โดยใช้พื้นที่สาธารณะ', component: "ManagementForFarmingPage" },
    ];

    this.store.dispatch(new LoadCommunitySample);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityTestPage');
  }

  public openPage(page) {
    this.navCtrl.push(page.component);
  }

}
