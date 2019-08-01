import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { LoadHouseHoldSample } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-house-hold-test',
  templateUrl: 'house-hold-test.html',
})
export class HouseHoldTestPage {

  pages: Array<{ title: string, component: any }>;
  private num: number = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<HouseHoldState>) {

    this.pages = [
      { title: 'Unit Page', component: "UnitPage" },
      { title: 'CheckList Page', component: "CheckListPage" },
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HouseHoldTestPage');
    this.navCtrl.push('UnitPage');
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}
