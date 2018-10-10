import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { QuestionnaireMenuPopoverComponent } from '../../components/questionnaire-menu-popover/questionnaire-menu-popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
    // used for an example of ngFor and navigation
    this.pages = [
      // test push
      { title: 'Zero', component: "ZeroPage" },
      { title: 'ตอนที่4 การค้าและบริการ', component: "CommercialPage" },
      { title: 'ตอนที่ 2.1 ข้าว ', component: "RicePage" },
      { title: 'ตอนที่ 2.7 เพาะเชื้อและปลูกเห็ด', component: "MushroomPage" },
      { title: '5.1 น้้ำประปา ', component: "PlumbingPage" },
      { title: '5.2 น้ำบาดาล ', component: "GroundWaterPage" },
      { title: '5.3 น้ำจากแม่น้ำ/ลำคลอง/แหล่งน้ำสาธารณะ', component: "RiverPage" },
      { title: 'ตอนที่ 2.6 ไม้ดอกไม้ประดับ การเพาะพันธุ์ไม้ ', component: "FlowerCropPage" },
      { title: 'ตอนที่ 2.5 พืชผัก สมุนไพร', component: "HerbsPlantPage" },
      { title: 'ตอนที่ 2.8 การเลี้ยงสัตว์เพื่อขายหรือใช้งานเกษตร', component: "AnimalFarmPage" },
      { title: 'ตอนที่ 3 การผลิตสินค้า ', component: "FactorialPage" },
      { title: 'Disaster', component: "DisasterPage" },
      { title: 'ตอนที่ 1 ครัวเรือนอยู่อาศัย', component: "ResidentialPage" },
      { title: '5.7 น้ำที่ซื้อมาใช้', component: "BuyingPage" },
      { title: 'ตอนที่ 6 ปัญหาอุทกภัย', component: "DisasterousPage" },
      { title: '5.5 น้ำจากชลประทาน', component: "IrrigationPage" },
      { title: '5.6 การกักเก็บน้ำฝน', component: "RainPage" },
      { title: 'ตอนที่ 2.2 พืชไร่ ', component: "DryCropPlantingPage" },
      { title: 'ตอนที่ 2.3 ยางพารา', component: "RubberTreePage" },
      { title: 'ตอนที่ 2.4 พืชยืนต้น ไม้ผล สวนป่า', component: "PerennialPlantingPage" },
      { title: 'ตอนที่ 2.9 การเพาะเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด', component: "WaterAnimalPlantingPage" },
      { title: 'ข้อมูลพื้นฐานส่วนบุคคล', component: "UserPage" },
      { title: '5.4 น้ำจากสระน้ำ/หนองน้ำ/บึง ', component: "PoolPage" },
    ];
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }
}
