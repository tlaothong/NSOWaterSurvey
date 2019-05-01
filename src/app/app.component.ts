import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { Pro } from '@ionic/pro';
import { DataStoreProvider } from '../providers/data-store/data-store';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "FirstpagePage";

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menuCtrl: MenuController, private oneSignal: OneSignal, private dataStore: DataStoreProvider) {
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

      if (this.platform.is("cordova")) {
        Pro.monitoring.init();

        Pro.monitoring.call(() => {
          // var notificationOpenedCallback = function(jsonData) {
          //   console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
          // };
      
          // window["plugins"].OneSignal
          //   .startInit("73e3979b-f314-47c0-99e3-9087fe31cef1", "202873334662")
          //   .handleNotificationOpened(notificationOpenedCallback)
          //   .endInit();
          this.oneSignal.startInit("73e3979b-f314-47c0-99e3-9087fe31cef1", "202873334662");
  
          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    
          this.oneSignal.getIds().then(p => {
            console.log('Get noti ids', p);
            if (p)
              this.dataStore.saveNotiUid(p);
          });
    
          this.oneSignal.handleNotificationReceived().subscribe(v => {
            console.log('Noti received', v.payload);
            let title = v.payload.title;
            let message = v.payload.body;

            let kind = v.payload.additionalData['k'];
            let user = v.payload.additionalData['u'];
            let actionId = v.payload.additionalData['id'];

            switch (kind) {
              case "updateReq":
              case "appMsg":
                this.dataStore.saveNotiAppMsg(kind, title, message, actionId);
                break;      
              default:
                if (user) {
                  // TODO: Implement this later
                }
                break;
            }
          });
    
          this.oneSignal.handleNotificationOpened().subscribe(v => {
            console.log('Noti opened', v.notification.payload.body);
            // v.notification.payload.additionalData[""];
          });
    
          this.oneSignal.endInit();
        });
      }
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

  /**
   * updateApp
   */
  public updateApp() {
    this.nav.push("UpdateAppPage");
  }
  
  logOut() {
    this.menuCtrl.close();
    this.nav.setRoot("FirstpagePage");
  }
}
