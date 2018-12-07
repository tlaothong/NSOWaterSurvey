import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // test push
      { title: 'Home', component: HomePage },
      { title: 'Homes', component: "HomesPage" },
      { title: 'ระบบการจัดเก็บข้อมูลในครัวเรือน ครัวเรือนเกษตร สถานประกอบการ และพื้นที่ย่อย', component: "FirstpagePage" },
      { title: 'เปิดใช้งาน Tablet', component: "ScanqrPage" },
      { title: 'เข้าสู่ระบบ Tablet', component: "LoginPage" },
      { title: 'ยืนยันการเปิดใช้งาน Tablet', component: "ConfirmloginPage" },
      { title: 'Menu', component: "MenudetailPage" },
      { title: 'รับงาน', component: "GetworkPage" },
      { title: 'เลือก EA', component: "SelectEaPage" },
      { title: 'ส่งงาน', component: "SendPage" },
      { title: 'Zero', component: "ZeroPage" },
      { title: 'Commercial', component: "CommercialPage" },
      { title: 'Rice', component: "RicePage" },
      { title: 'Mushroom', component: "MushroomPage" },
      { title: 'Plumbing', component: "PlumbingPage" },
      { title: 'GroundWater', component: "GroundWaterPage" },
      { title: 'River', component: "RiverPage" },
      { title: 'FlowerCrop', component: "FlowerCropPage" },
      { title: 'HerbsPlant', component: "HerbsPlantPage" },
      { title: 'AnimalFarm', component: "AnimalFarmPage" },
      { title: 'Factorial', component: "FactorialPage" },
      { title: 'Disaster', component: "DisasterPage" },
      { title: 'Residential', component: "ResidentialPage" },
      { title: 'Buying', component: "BuyingPage" },
      { title: 'Disasterous', component: "DisasterousPage" },
      { title: 'Irrigation', component: "IrrigationPage" },
      { title: 'Rain', component: "RainPage" },
      { title: 'Dry-CropPlanting', component: "DryCropPlantingPage" },
      { title: 'RubberTree', component: "RubberTreePage" },
      { title: 'PerennialPlanting', component: "PerennialPlantingPage" },
      { title: 'WaterAnimalPlanting', component: "WaterAnimalPlantingPage" },
      { title: 'User', component: "UserPage" },
      { title: 'Pool', component: "PoolPage" },
      { title: 'Agriculture', component: "AgriculturePage" },
      { title: 'CommunityWaterManagement', component: "CommunityWaterManagementPage" },
      { title: 'ManagementForFarming', component: "ManagementForFarmingPage" },
      { title: 'BuildingInformation1Page', component: "BuildingInformation1Page" },
      { title: 'BuidlingInformation2Page', component: "BuidlingInformation2Page" },
      { title: 'Unit', component: "UnitPage" },
      { title: 'WaterActivityUnitPage', component: "WaterActivityUnitPage" },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goGetworkPage() {
    this.nav.push("GetworkPage")
  }

  goSelectEaPage() {
    this.nav.push("SelectEaPage")
  }

  goSendPage() {
    this.nav.push("SendPage")
  }
}
