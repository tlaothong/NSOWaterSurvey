import { getNextPageDirection } from './../../states/household/index';
import { Component } from '@angular/core';
import { NavController, PopoverController, ModalController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{ title: string, component: any, value: any }>;
  private getNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
  private i: number;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController,
    public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    // used for an example of ngFor and navigation
    this.pages = [
      // test push
      { title: 'Zero', component: "ZeroPage", value: 0 },
      { title: 'Building Test', component: "BuildingTestPage", value: 100 },
      { title: 'HouseHold Test', component: "HouseHoldTestPage", value: 0 },
      { title: 'Community Test', component: "CommunityTestPage", value: 0 },
      { title: 'Login Test', component: "LoggingTestPage", value: 0 },
      { title: 'Homesสำรวจน้ำ', component: "HomesPage", value: 0 },
      { title: 'ระบบการจัดเก็บข้อมูลในครัวเรือน ครัวเรือนเกษตร สถานประกอบการ และพื้นที่ย่อย', component: "FirstpagePage", value: 0 },
      { title: 'เปิดใช้งาน Tablet', component: "ScanqrPage", value: 0 },
      { title: 'ยืนยันการเปลี่ยนรหัสผ่าน', component: "FirstloginPage", value: 0 },
      { title: 'เข้าสู่ระบบ Tablet', component: "LoginPage", value: 0 },
      { title: 'ยืนยันการเปิดใช้งาน Tablet', component: "ConfirmloginPage", value: 0 },
      { title: 'Menu', component: "MenudetailPage", value: 0 },
      { title: 'รับงาน', component: "GetworkPage", value: 0 },
      { title: 'เลือก EA', component: "SelectEaPage", value: 0 },
      { title: 'ส่งงาน', component: "SendPage", value: 0 },
      { title: 'แบบสอบถามสำมะโนประชากรและเคหะ', component: "PopulationPage", value: 0 },
      { title: 'Unit', component: "UnitPage", value: 0 },
      { title: 'ตอนที่ 1', component: "BuildingInformation1Page", value: 0 },
      { title: 'ตอนที่ 2', component: "BuidlingInformation2Page", value: 0 },
      { title: 'ตอนที่ 1 ครัวเรือนอยู่อาศัย', component: "ResidentialPage", value: 1 },
      { title: 'ตอนที่ 2 การทำการเกษตร ', component: "AgriculturePage", value: 2 },
      { title: 'ตอนที่ 2.1 ข้าว ', component: "RicePage", value: 3 },
      { title: 'ตอนที่ 2.2 พืชไร่ ', component: "DryCropPlantingPage", value: 4 },
      { title: 'ตอนที่ 2.3 ยางพารา', component: "RubberTreePage", value: 5 },
      { title: 'ตอนที่ 2.4 พืชยืนต้น ไม้ผล สวนป่า', component: "PerennialPlantingPage", value: 6 },
      { title: 'ตอนที่ 2.5 พืชผัก สมุนไพร', component: "HerbsPlantPage", value: 7 },
      { title: 'ตอนที่ 2.6 ไม้ดอก ไม้ประดับ การเพาะพันธุ์ไม้ ', component: "FlowerCropPage", value: 8 },
      { title: 'ตอนที่ 2.7 เพาะเชื้อและปลูกเห็ด', component: "MushroomPage", value: 9 },
      { title: 'ตอนที่ 2.8 การเลี้ยงสัตว์เพื่อขายหรือใช้งานเกษตร', component: "AnimalFarmPage", value: 10 },
      { title: 'ตอนที่ 2.9 การเพาะเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด', component: "WaterAnimalPlantingPage", value: 11 },
      { title: 'ตอนที่ 3 การผลิตสินค้า ', component: "FactorialPage", value: 12 },
      { title: 'ตอนที่ 4 การค้าและการบริการ', component: "CommercialPage", value: 13 },
      { title: '5.1 น้้ำประปา ', component: "PlumbingPage", value: 14 },
      { title: '5.2 น้ำบาดาล ', component: "GroundWaterPage", value: 15 },
      { title: '5.3 น้ำจากแม่น้ำ/ลำคลอง/แหล่งน้ำสาธารณะ', component: "RiverPage", value: 16 },
      { title: '5.4 น้ำจากสระน้ำส่วนบุคคล/หนองน้ำ/บึง ', component: "PoolPage", value: 17 },
      { title: '5.5 น้ำจากชลประทาน', component: "IrrigationPage", value: 18 },
      { title: '5.6 การกักเก็บน้ำฝน', component: "RainPage", value: 19 },
      { title: '5.7 น้ำที่ซื้อมาใช้', component: "BuyingPage", value: 20 },
      { title: 'ตอนที่ 6 ปัญหาอุทกภัย', component: "DisasterousPage", value: 21 },
      { title: 'ข้อมูลพื้นฐานส่วนบุคคล', component: "UserPage", value: 22 },
      // { title: 'Disaster', component: "DisasterPage", value: 23 },
      { title: 'การจัดการน้ำในหมู่บ้านชุมชน', component: "CommunityWaterManagementPage", value: 23 },
      { title: 'โครงการจัดการน้ำเพื่อการเกษตรชุมชน โดยใช้พื้นที่สาธารณะ', component: "ManagementForFarmingPage", value: 24 },
      { title: 'รูปภาพภาชนะกักเก็บน้ำฝน', component: "DlgRainPicturePage", value: 25 },
      { title: 'หน้าเลือก activity', component: "WaterActivityUnitPage", value: 26 },
    ];
  }

  ionViewDidEnter() {
    this.getNextPage$.subscribe(data => {
      if (data != null) {
        this.i = data;
      }
      else this.i = 99;
      console.log("i: ", this.i);
    });
    this.i = this.i + 1;
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

  Unit() {

    const modal = this.modalCtrl.create("DlgUnitPage");
    modal.present();
  }
}
