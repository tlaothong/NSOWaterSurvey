import { getBackToRoot } from './../../states/household/index';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getNextPageDirection, getArrayIsCheck, getSelectorIndex } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetSelectorIndex, SetBackToRoot } from '../../states/household/household.actions';

/**
 * Generated class for the CheckListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-list',
  templateUrl: 'check-list.html',
})
export class CheckListPage {
  pages: Array<{ title: string, component: any, isCheck: boolean }>;
  private index: any;
  // private indexBack: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<HouseHoldState>) {
    this.pages = [
      { title: 'ตอนที่ 1 ครัวเรือนอยู่อาศัย', component: "ResidentialPage", isCheck: false },
      { title: 'ตอนที่ 2 การทำการเกษตร ', component: "AgriculturePage", isCheck: false },
      { title: 'ตอนที่ 2.1 ข้าว ', component: "RicePage", isCheck: false },
      { title: 'ตอนที่ 2.2 พืชไร่ ', component: "DryCropPlantingPage", isCheck: false },
      { title: 'ตอนที่ 2.3 ยางพารา', component: "RubberTreePage", isCheck: false },
      { title: 'ตอนที่ 2.4 พืชยืนต้น ไม้ผล สวนป่า', component: "PerennialPlantingPage", isCheck: false },
      { title: 'ตอนที่ 2.5 พืชผัก สมุนไพร', component: "HerbsPlantPage", isCheck: false },
      { title: 'ตอนที่ 2.6 ไม้ดอก ไม้ประดับ การเพาะพันธุ์ไม้ ', component: "FlowerCropPage", isCheck: false },
      { title: 'ตอนที่ 2.7 เพาะเชื้อและปลูกเห็ด', component: "MushroomPage", isCheck: false },
      { title: 'ตอนที่ 2.8 การเลี้ยงสัตว์เพื่อขายหรือใช้งานเกษตร', component: "AnimalFarmPage", isCheck: false },
      { title: 'ตอนที่ 2.9 การเพาะเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด', component: "WaterAnimalPlantingPage", isCheck: false },
      { title: 'ตอนที่ 3 การผลิตสินค้า ', component: "FactorialPage", isCheck: false },
      { title: 'ตอนที่ 4 การค้าและการบริการ', component: "CommercialPage", isCheck: false },
      { title: '5.1 น้้ำประปา ', component: "PlumbingPage", isCheck: false },
      { title: '5.2 น้ำบาดาล ', component: "GroundWaterPage", isCheck: false },
      { title: '5.3 น้ำจากแม่น้ำ/ลำคลอง/แหล่งน้ำสาธารณะ', component: "RiverPage", isCheck: false },
      { title: '5.4 น้ำจากสระน้ำส่วนบุคคล/หนองน้ำ/บึง ', component: "PoolPage", isCheck: false },
      { title: '5.5 น้ำจากชลประทาน', component: "IrrigationPage", isCheck: false },
      { title: '5.6 การกักเก็บน้ำฝน', component: "RainPage", isCheck: false },
      { title: '5.7 น้ำที่ซื้อมาใช้', component: "BuyingPage", isCheck: false },
      { title: 'ตอนที่ 6 ปัญหาอุทกภัย', component: "DisasterousPage", isCheck: false },
      { title: 'ข้อมูลพื้นฐานส่วนบุคคล', component: "UserPage", isCheck: false },
      { title: 'แบบสอบถามสำมะโนประชากรและเคหะ', component: "PopulationPage", isCheck: false },
    ];
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CheckListPage');

    let selectorIndex$ = this.store.select(getSelectorIndex).pipe(map(s => s));
    selectorIndex$.subscribe(data => {
      if (data != null) {
        this.index = data;
      }
    });



    this.arrayIsCheckMethod();
    this.arrayNextPageMethod();
  }

  arrayNextPageMethod() {
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: any[];
    arrayNextPage$.subscribe(data => arrayNextPage = data);

    let backToRoot$ = this.store.select(getBackToRoot);
    let backToRoot: any;
    backToRoot$.subscribe(data => {
      if (data != null) {
        backToRoot = data;
      }
      console.log("backToRoot", backToRoot);

    });
  
    if (!backToRoot) {

      if (this.index == -1) {
        this.index += 1;
        let page = this.pages[arrayNextPage[this.index]];
        console.log("index: ", this.index);
        console.log("page: ", page);
        this.store.dispatch(new SetSelectorIndex(this.index));
        this.navCtrl.push(page.component);
      }
      else {
        let page = this.pages[arrayNextPage[this.index]];
        console.log("index: ", this.index);
        console.log("page: ", page);
        this.navCtrl.push(page.component);
      }
    }

  }

  arrayIsCheckMethod() {
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => arrayIsCheck = data);

    for (let i = 0; i < arrayIsCheck.length; i++) {
      this.pages[arrayIsCheck[i]].isCheck = true;
    }
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
    this.store.dispatch(new SetBackToRoot(false));

  }
}
