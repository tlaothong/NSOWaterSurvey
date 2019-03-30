import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "FirstpagePage";

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // test push
      // { title: 'Home', component: HomePage },
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
    // this.nav.pop();
    this.menuCtrl.close();
    this.nav.setRoot("GetworkPage")
  }

  goSelectEaPage() {
    this.menuCtrl.close();
    this.nav.setRoot("SelectEaPage")
  }

  goSendPage() {
    this.menuCtrl.close();
    this.nav.push("SendPage")
  }

  /**
   * Open manual
   */
  public openManual() {
    window.open('http://water.surveydb.app/assets/fi.pdf', '_system', 'location=yes');
  }
  
  logOut() {
    this.menuCtrl.close();
    this.nav.setRoot("FirstpagePage");
  }
}
