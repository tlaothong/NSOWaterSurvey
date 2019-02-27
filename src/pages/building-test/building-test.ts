import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuildingState } from '../../states/building/building.reducer';
import { Store } from '@ngrx/store';
import { LoadBuildingSample, SetRecieveDataFromBuilding, SetHomeBuilding } from '../../states/building/building.actions';

@IonicPage()
@Component({
  selector: 'page-building-test',
  templateUrl: 'building-test.html',
})
export class BuildingTestPage {

  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<BuildingState>) {
    this.pages = [
      { title: 'Homes', component: "HomesPage" },
      { title: 'Building Info Page 1', component: "BuildingInformation1Page" },
      { title: 'Building Info Page 2', component: "BuidlingInformation2Page" }
    ];
    this.store.dispatch(new LoadBuildingSample);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingTestPage');
    let item = this.navParams.get('item');
    let status = item ? item.status : 'refresh';
    switch (status) {
      case 'refresh':
        this.navCtrl.push('BuildingInformation1Page', { id: this.navParams.get('id') });
        break;
      case 'pause':
        this.store.dispatch(new SetRecieveDataFromBuilding(item.unitCount));
        this.store.dispatch(new SetHomeBuilding(item));
        this.navCtrl.push("HouseHoldTestPage");
        break;
      default:
        break;
    }
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }
}
