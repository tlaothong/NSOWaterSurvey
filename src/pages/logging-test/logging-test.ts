import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { LoadUserInformation } from '../../states/logging/logging.actions';

@IonicPage()
@Component({
  selector: 'page-logging-test',
  templateUrl: 'logging-test.html',
})
export class LoggingTestPage {

  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private store: Store<LoggingState>) {
    this.pages = [
      { title: 'เปิดใช้งาน Tablet', component: "ScanqrPage" },
      { title: 'First Login', component: "FirstloginPage" },
      { title: 'Login', component: "LoginPage" },
      
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggingTestPage');
    this.store.dispatch(new LoadUserInformation());
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }
}
