import { getBackToRoot, getHouseHoldSample, getBack } from './../../states/household/index';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getNextPageDirection, getArrayIsCheck, getSelectorIndex } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetSelectorIndex, SetBackToRoot, SetBack, LoadHouseHoldSample, SetHouseHold, SetHouseHoldSuccess, LoadHouseHoldSampleSuccess } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';


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
  private objSkipPage: any;
  private arrayNextPage: any[];
  // private indexBack: any;

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private store: Store<HouseHoldState>) {
    // this.store.dispatch(new LoadHouseHoldSample(this.navParams.get('id')));
    this.storage.get('unit').then((val) => {
      console.log(val);
      this.store.dispatch(new LoadHouseHoldSampleSuccess(val))
    })
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
      { title: 'ตอนที่ 4 การค้าและการบริการ', component: "CommercialPage", isCheck: false },//12
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

    this.arrayIsCheckMethod();
    this.arrayNextPageMethod();
  }

  skipPageMedthod() {
    let backToRoot: boolean;
    let back: boolean;
    let backToRoot$ = this.store.select(getBackToRoot).subscribe(data => backToRoot = data);
    let back$ = this.store.select(getBack).subscribe(data => back = data);
    if (!backToRoot) {
      back ? this.goBackPage() : this.goNextPage();
    }
  }

  goNextPage() {
    for (let i = this.index + 1; i <= 23; i++) {
      if (this.arrayNextPage[i]) {
        console.log("goNextPage");
        this.store.dispatch(new SetSelectorIndex(i));
        this.navCtrl.push(this.pages[i].component, this.store.dispatch(new SetBackToRoot(false)));
        break;
      }
    }
  }

  goBackPage() {
    for (let i = this.index - 1; i >= 0; i--) {
      if (this.arrayNextPage[i]) {
        console.log("goBackPage");
        this.store.dispatch(new SetSelectorIndex(i));
        this.store.dispatch(new SetBack(false));
        this.navCtrl.push(this.pages[i].component, this.store.dispatch(new SetBackToRoot(false)));
        break;
      }
    }
  }

  arrayNextPageMethod() {
    let selectorIndex$ = this.store.select(getSelectorIndex).pipe(map(s => s));
    selectorIndex$.subscribe(data => this.index = data);
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    arrayNextPage$.subscribe(data => {
      if (data != null) {
        this.arrayNextPage = data
        this.skipPageMedthod();
        console.log("boolean arr", this.arrayNextPage);
        
      }
    });
  }

  arrayIsCheckMethod() {
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data
        console.log("arrayIsCheck", arrayIsCheck);

        for (let i = 0; i < arrayIsCheck.length; i++) {
          this.pages[arrayIsCheck[i]].isCheck = true;
        }
      }
    });
  }

  public openPage(page, index) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.store.dispatch(new SetSelectorIndex(index));
    this.store.dispatch(new SetBackToRoot(false));
    this.store.dispatch(new SetBack(false));
    this.navCtrl.push(page.component);
  }
}
