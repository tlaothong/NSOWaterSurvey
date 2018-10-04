import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BuyingPage } from '../pages/buying/buying';
import { DisasterousPage } from '../pages/disasterous/disasterous';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BuyingPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Zero', component: "ZeroPage" },
      { title: 'Demo', component: "DemoPage" },
      { title: 'List', component: ListPage },
      { title: 'Factorial', component: "FactorialPage" },
      { title: 'Disaster', component: "DisasterPage" },
      { title: 'Residential', component: "ResidentialPage" },
      { title: 'Buying', component: BuyingPage},
      { title: 'Disasterous', component: DisasterousPage},
      { title: 'DryCropPlanting', component: "DryCropPlantingPage"}
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
}
