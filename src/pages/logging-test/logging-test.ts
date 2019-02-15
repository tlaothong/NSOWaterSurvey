import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getIsCheckShow, getBackToRoot } from '../../states/logging';
import { SetBackToRoot } from '../../states/logging/logging.actions';

@IonicPage()
@Component({
  selector: 'page-logging-test',
  templateUrl: 'logging-test.html',
})
export class LoggingTestPage {

  pagesFirstLogin: Array<{ title: string, component: any }>;
  pagesLogin: Array<{ title: string, component: any }>;
  isCheckShow: boolean;
  isCheckBack: boolean;
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

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    let getCheck$ = this.store.select(getIsCheckShow);
    let backToRoot$ = this.store.select(getBackToRoot);
    getCheck$.subscribe(data => {
      if (data != null) {
        this.isCheckShow = data;
      }
    });
    backToRoot$.subscribe(data => {
      if (data != null) {
        this.isCheckBack = data;
      }
    });
    if (this.isCheckBack) this.index -= 2;
    if (this.index < 0) this.isCheckShow = null;
    if (this.isCheckShow == true) {
      let page = this.pagesFirstLogin[this.index]
      this.navCtrl.push(page.component, this.index++);
      this.store.dispatch(new SetBackToRoot(false));
    } else if (this.isCheckShow == false) {
      let page = this.pagesLogin[this.index]
      this.navCtrl.push(page.component, this.index++);
      this.store.dispatch(new SetBackToRoot(false));
    } else {
      this.navCtrl.push("FirstpagePage", this.index = 0);
      this.store.dispatch(new SetBackToRoot(false));
    }
  }

  public openPage(page) {
    this.navCtrl.push(page.component);
  }
}
