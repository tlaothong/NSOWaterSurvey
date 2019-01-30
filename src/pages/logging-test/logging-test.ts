import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getIsCheckShow } from '../../states/logging';

@IonicPage()
@Component({
  selector: 'page-logging-test',
  templateUrl: 'logging-test.html',
})
export class LoggingTestPage {

  pagesFirstLogin: Array<{ title: string, component: any }>;
  pagesLogin: Array<{ title: string, component: any }>;
  isCheckShow: boolean;
  index: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>) {
    this.pagesFirstLogin = [
      { title: 'เปิดใช้งาน Tablet', component: "ScanqrPage" },
      { title: 'First Login', component: "FirstloginPage" },
      { title: 'Confirm Login', component: "ConfirmloginPage" },
      { title: 'Get Work', component: "GetworkPage" },
      { title: 'Select EA', component: "SelectEaPage" },
      { title: 'Homes', component: "HomesPage" },

    ];

    this.pagesLogin = [
      { title: 'Login', component: "LoginPage" },
      { title: 'Select EA', component: "SelectEaPage" },
      { title: 'Homes', component: "HomesPage" },
    ];
  }

  ionViewDidEnter() {
    let getCheck$ = this.store.select(getIsCheckShow);
    getCheck$.subscribe(data => {
      if (data != null) {
        this.isCheckShow = data
      }
    });


    console.log("check", this.isCheckShow);
    if (this.isCheckShow == true) {
      let page = this.pagesFirstLogin[this.index]
      this.navCtrl.push(page.component,this.index++);
    } else if (this.isCheckShow == false) {
      let page = this.pagesLogin[this.index]
      this.navCtrl.push(page.component, this.index++);

    } else
      this.navCtrl.push("FirstpagePage");
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }
}
