import { getBackToRoot, getHouseHoldSample, getCheckWaterPlumbing, getCheckWaterRiver, getCheckWaterIrrigation, getCheckWaterRain, getCheckWaterBuying, getDataOfUnit, getArraySkipPageAgiculture } from './../../states/household/index';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getNextPageDirection, getArrayIsCheck, getSelectorIndex } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetSelectorIndex, SetBackToRoot, SetNextPageDirection } from '../../states/household/household.actions';


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

    let selectorIndex$ = this.store.select(getSelectorIndex).pipe(map(s => s));
    selectorIndex$.subscribe(data => {
      if (data != null) {
        this.index = data;
      }
    });

    this.arrayIsCheckMethod();
    this.arrayNextPageMethod();
  }

  skipPageMedthod() {
    let formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s));
    formData$.subscribe(data => {
      if (data != null) {
        console.log("data pilot skipPage", data);
        this.objSkipPage = data
        if (!this.objSkipPage.isHouseHold && this.arrayNextPage.some(it => it == 0)) {
          let index1 = this.arrayNextPage.indexOf(0)
          this.arrayNextPage.splice(index1, 1);
          let index2 = this.arrayNextPage.indexOf(20)
          this.arrayNextPage.splice(index2, 1);
        }
        if (!this.objSkipPage.isAgriculture) {
          for (let i = 1; i <= 10; i++) {
            if (this.arrayNextPage.some(it => it == i)) {
              let index = this.arrayNextPage.indexOf(i)
              this.arrayNextPage.splice(index, 1);
            }
          }
        }
        else {
          let objSkipPageAgi$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
          let objSkipPageAgi: any
          objSkipPageAgi$.subscribe(data => {
            if (data != null) {
              console.log("data pilot objSkipPageAgi", data);
              objSkipPageAgi = data

              if (!objSkipPageAgi.ricePlant.doing && this.arrayNextPage.some(it => it == 2)) {
                let index4 = this.arrayNextPage.indexOf(2)
                console.log(index4);

                this.arrayNextPage.splice(index4, 1);
              }
              if (!objSkipPageAgi.agronomyPlant.doing && this.arrayNextPage.some(it => it == 3)) {
                let index = this.arrayNextPage.indexOf(3)
                console.log(index);

                this.arrayNextPage.splice(index, 1);
              }
              if (!objSkipPageAgi.rubberTree.doing && this.arrayNextPage.some(it => it == 4)) {
                let index = this.arrayNextPage.indexOf(4)
                console.log(index);

                this.arrayNextPage.splice(index, 1);
              }
              if (!objSkipPageAgi.perennialPlant.doing && this.arrayNextPage.some(it => it == 5)) {
                let index = this.arrayNextPage.indexOf(5)
                console.log(index);

                this.arrayNextPage.splice(index, 1);
              }
              if (!objSkipPageAgi.herbsPlant.doing && this.arrayNextPage.some(it => it == 6)) {
                let index = this.arrayNextPage.indexOf(6)
                this.arrayNextPage.splice(index, 1);
              }
              if (!objSkipPageAgi.flowerCrop.doing && this.arrayNextPage.some(it => it == 7)) {
                let index = this.arrayNextPage.indexOf(7)
                this.arrayNextPage.splice(index, 1);
              }
              if (!objSkipPageAgi.mushroomPlant.doing && this.arrayNextPage.some(it => it == 8)) {
                let index = this.arrayNextPage.indexOf(8)
                this.arrayNextPage.splice(index, 1);
              }
              if (!objSkipPageAgi.animalFarm.doing && this.arrayNextPage.some(it => it == 9)) {
                let index = this.arrayNextPage.indexOf(9)
                this.arrayNextPage.splice(index, 1);
              }
              if (!objSkipPageAgi.aquaticAnimals.doing && this.arrayNextPage.some(it => it == 10)) {
                let index = this.arrayNextPage.indexOf(10)
                this.arrayNextPage.splice(index, 1);
              }
            }
          });

        }
        if (!this.objSkipPage.isFactorial && this.arrayNextPage.some(it => it == 11)) {
          let index = this.arrayNextPage.indexOf(11)
          this.arrayNextPage.splice(index, 1);
        }
        if (!this.objSkipPage.isCommercial && this.arrayNextPage.some(it => it == 12)) {
          let index = this.arrayNextPage.indexOf(12)
          this.arrayNextPage.splice(index, 1);
        }
        console.log("Array page after splice", this.arrayNextPage);

        let formCheckPlumbing$ = this.store.select(getCheckWaterPlumbing).pipe(map(s => s));
        let itPlumbing: any;
        formCheckPlumbing$.subscribe(data => {
          if (data != null) {
            console.log("itPlumbing", data);

            itPlumbing = data;

            if (!itPlumbing && this.arrayNextPage.some(it => it == 13)) {
              let index = this.arrayNextPage.indexOf(13);
              this.arrayNextPage.splice(index, 1);
            }

          }
          console.log("Array page after splice", this.arrayNextPage);

        });

        let formCheckRiver$ = this.store.select(getCheckWaterRiver).pipe(map(s => s));
        let itRiver: any;
        formCheckRiver$.subscribe(data => {
          if (data != null) {
            console.log("itRiver", data);

            itRiver = data;

            if (!itRiver && this.arrayNextPage.some(it => it == 15)) {
              let index = this.arrayNextPage.indexOf(15);
              this.arrayNextPage.splice(index, 1);
            }
          }
          console.log("Array page after splice", this.arrayNextPage);

        });

        let formCheckIrrigation$ = this.store.select(getCheckWaterIrrigation).pipe(map(s => s));
        let itIrrigation: any;
        formCheckIrrigation$.subscribe(data => {
          if (data != null) {
            console.log("itIrrigation", data);

            itIrrigation = data;

            if (!itIrrigation && this.arrayNextPage.some(it => it == 17)) {
              let index = this.arrayNextPage.indexOf(17);
              this.arrayNextPage.splice(index, 1);
            }
          }
          console.log("Array page after splice", this.arrayNextPage);

        });

        let formCheckRain$ = this.store.select(getCheckWaterRain).pipe(map(s => s));
        let itRain: any;
        formCheckRain$.subscribe(data => {
          if (data != null) {
            console.log("itRain", data);

            itRain = data;

            if (!itRain && this.arrayNextPage.some(it => it == 18)) {
              let index = this.arrayNextPage.indexOf(18);
              this.arrayNextPage.splice(index, 1);
            }
          }
          console.log("Array page after splice", this.arrayNextPage);

        });

        let formCheckBuying$ = this.store.select(getCheckWaterBuying).pipe(map(s => s));
        let itBuying: any;
        formCheckBuying$.subscribe(data => {
          if (data != null) {
            console.log("itBuying", data);

            itBuying = data;

            if (!itBuying && this.arrayNextPage.some(it => it == 19)) {
              let index = this.arrayNextPage.indexOf(19);
              this.arrayNextPage.splice(index, 1);
            }
          }
        });

        console.log("Array page after splice", this.arrayNextPage);

        // let ojbResident$ = this.store.select(getHouseHoldSample).pipe(map(s => s.residence.waterSources));
        // let ojbResident: any;
        // ojbResident$.subscribe(data => {
        //   if (data != null) {
        //     console.log("data pilot ojbResident", data);
        //     ojbResident = data
        //   }
        // });

        // let ojbFactory$ = this.store.select(getHouseHoldSample).pipe(map(s => s.factory.waterSources));
        // let ojbFactory: any;
        // ojbFactory$.subscribe(data => {
        //   if (data != null) {
        //     console.log("data pilot ojbFactory", data);
        //     ojbFactory = data
        //   }
        // });

        // let ojbCommerce$ = this.store.select(getHouseHoldSample).pipe(map(s => s.commerce.waterSources));
        // let ojbCommerce: any;
        // ojbCommerce$.subscribe(data => {
        //   if (data != null) {
        //     console.log("data pilot ojbCommerce", data);
        //     ojbCommerce = data
        //   }
        // });

        // let merge = ojbResident$.merge(ojbFactory$, ojbCommerce$);
        // console.log("merge", merge);

        // let ojbRice$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.ricePlant.fields));
        // let ojbRice: any;
        // ojbRice$.subscribe(data => {
        //   console.log("data pilot ojbRice", data);
        //   if (data != null) {
        //     ojbRice = data

        //   }
        // });


        let backToRoot$ = this.store.select(getBackToRoot);
        let backToRoot: any;
        backToRoot$.subscribe(data => {
          if (data != null) {
            backToRoot = data;
            if (!backToRoot) {

              if (this.index == -1) {
                this.index += 1;
                let page = this.pages[this.arrayNextPage[this.index]];
                console.log("index: ", this.index);
                console.log("page: ", page);
                this.store.dispatch(new SetSelectorIndex(this.index));
                this.navCtrl.push(page.component, this.store.dispatch(new SetBackToRoot(false)));
                console.log("Array page ก่อน dispatch", this.arrayNextPage);
                // this.store.dispatch(new SetNextPageDirection(this.arrayNextPage));
              }
              else {
                let page = this.pages[this.arrayNextPage[this.index]];
                console.log("index: ", this.index);
                console.log("page: ", page);
                this.navCtrl.push(page.component, this.store.dispatch(new SetBackToRoot(false)));
                console.log("Array page ก่อน dispatch", this.arrayNextPage);

                // this.store.dispatch(new SetNextPageDirection(this.arrayNextPage));
              }
            }
          }
          console.log("backToRoot", backToRoot);

        });
      }
      console.log("Array page ก่อน", this.arrayNextPage);

    });

  }

  arrayNextPageMethod() {
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    arrayNextPage$.subscribe(data => this.arrayNextPage = data);
    this.skipPageMedthod();



  }

  arrayIsCheckMethod() {
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data
        for (let i = 0; i < arrayIsCheck.length; i++) {
          this.pages[arrayIsCheck[i]].isCheck = true;
        }
      }
    });

  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component, this.store.dispatch(new SetBackToRoot(false)));


  }
}
