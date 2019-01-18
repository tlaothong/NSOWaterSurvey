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

  pages: Array<{ title: string, component: any }>;
  // private getNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
  private i: number;
  private checkDoing: boolean ;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController,
    public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    // used for an example of ngFor and navigation
    this.pages = [
      // test push
      { title: 'Zero', component: "ZeroPage" },
      { title: 'Building Test', component: "BuildingTestPage" },
      { title: 'HouseHold Test', component: "HouseHoldTestPage" },
      { title: 'Community Test', component: "CommunityTestPage" },
      { title: 'Login Test', component: "LoggingTestPage" },
      { title: 'Homesสำรวจน้ำ', component: "HomesPage" },
      { title: 'ระบบการจัดเก็บข้อมูลในครัวเรือน ครัวเรือนเกษตร สถานประกอบการ และพื้นที่ย่อย', component: "FirstpagePage" },
      { title: 'เปิดใช้งาน Tablet', component: "ScanqrPage" },
      { title: 'ยืนยันการเปลี่ยนรหัสผ่าน', component: "FirstloginPage" },
      { title: 'เข้าสู่ระบบ Tablet', component: "LoginPage" },
      { title: 'ยืนยันการเปิดใช้งาน Tablet', component: "ConfirmloginPage" },
      { title: 'Menu', component: "MenudetailPage" },
      { title: 'รับงาน', component: "GetworkPage" },
      { title: 'เลือก EA', component: "SelectEaPage" },
      { title: 'ส่งงาน', component: "SendPage" }, //14
      { title: 'Unit', component: "UnitPage" },
      { title: 'ตอนที่ 1', component: "BuildingInformation1Page" }, //16
      { title: 'ตอนที่ 2', component: "BuidlingInformation2Page" },
      { title: 'ตอนที่ 1 ครัวเรือนอยู่อาศัย', component: "ResidentialPage" }, //18
      { title: 'ตอนที่ 2 การทำการเกษตร ', component: "AgriculturePage", },
      { title: 'ตอนที่ 2.1 ข้าว ', component: "RicePage" },//20
      { title: 'ตอนที่ 2.2 พืชไร่ ', component: "DryCropPlantingPage" },
      { title: 'ตอนที่ 2.3 ยางพารา', component: "RubberTreePage" }, //22
      { title: 'ตอนที่ 2.4 พืชยืนต้น ไม้ผล สวนป่า', component: "PerennialPlantingPage" },
      { title: 'ตอนที่ 2.5 พืชผัก สมุนไพร', component: "HerbsPlantPage" },//24
      { title: 'ตอนที่ 2.6 ไม้ดอก ไม้ประดับ การเพาะพันธุ์ไม้ ', component: "FlowerCropPage" },
      { title: 'ตอนที่ 2.7 เพาะเชื้อและปลูกเห็ด', component: "MushroomPage" }, //26
      { title: 'ตอนที่ 2.8 การเลี้ยงสัตว์เพื่อขายหรือใช้งานเกษตร', component: "AnimalFarmPage" },
      { title: 'ตอนที่ 2.9 การเพาะเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด', component: "WaterAnimalPlantingPage" },//28
      { title: 'ตอนที่ 3 การผลิตสินค้า ', component: "FactorialPage" },
      { title: 'ตอนที่ 4 การค้าและการบริการ', component: "CommercialPage" },//30
      { title: '5.1 น้้ำประปา ', component: "PlumbingPage" },
      { title: '5.2 น้ำบาดาล ', component: "GroundWaterPage" },//32
      { title: '5.3 น้ำจากแม่น้ำ/ลำคลอง/แหล่งน้ำสาธารณะ', component: "RiverPage" },
      { title: '5.4 น้ำจากสระน้ำส่วนบุคคล/หนองน้ำ/บึง ', component: "PoolPage" },//34
      { title: '5.5 น้ำจากชลประทาน', component: "IrrigationPage" },
      { title: '5.6 การกักเก็บน้ำฝน', component: "RainPage" },//36
      { title: '5.7 น้ำที่ซื้อมาใช้', component: "BuyingPage" },
      { title: 'ตอนที่ 6 ปัญหาอุทกภัย', component: "DisasterousPage" },//38
      { title: 'ข้อมูลพื้นฐานส่วนบุคคล', component: "UserPage" },
      { title: 'แบบสอบถามสำมะโนประชากรและเคหะ', component: "PopulationPage" },//40
      // { title: 'Disaster', component: "DisasterPage", value: 23 },
      { title: 'การจัดการน้ำในหมู่บ้านชุมชน', component: "CommunityWaterManagementPage" },
      { title: 'โครงการจัดการน้ำเพื่อการเกษตรชุมชน โดยใช้พื้นที่สาธารณะ', component: "ManagementForFarmingPage" },//42
      { title: 'รูปภาพภาชนะกักเก็บน้ำฝน', component: "DlgRainPicturePage" },
      { title: 'หน้าเลือก activity', component: "WaterActivityUnitPage" },
    ];
  }

  public ionViewDidEnter() {
    let getNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    getNextPage$.subscribe(data => {
      if (data != null) {
        this.i = data;
      }
      else this.i = null;
      console.log("i: ", this.i);
    });
    let index = this.i + 18;
    if (index != 0) {
      let page = this.pages[index];
      console.log("index: ", index);
      console.log("page: ", page);
      this.navCtrl.push(page.component);
      if (index == this.i + 18) {
        this.checkDoing = true;
      }else  this.checkDoing = false;
    }
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
