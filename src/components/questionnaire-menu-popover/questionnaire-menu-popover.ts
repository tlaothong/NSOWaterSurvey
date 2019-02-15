import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getStoreWorkEaOneRecord } from '../../states/logging';

@Component({
  selector: 'questionnaire-menu-popover',
  templateUrl: 'questionnaire-menu-popover.html'
})
export class QuestionnaireMenuPopoverComponent {

  public dataWorkEARow: any;
  private navCtrl: NavController;

  private DataStoreWorkEaOneRecord$ = this.store.select(getStoreWorkEaOneRecord);
  constructor(public navParams: NavParams, public viewCtrl: ViewController, private store: Store<LoggingState>) {
    console.log('Hello QuestionnaireMenuPopoverComponent Component');

    this.navCtrl = navParams.get('nav');
  }

  ionViewDidLoad() {
    this.DataStoreWorkEaOneRecord$.subscribe(data => {
      if (data != null) {
        this.dataWorkEARow = data
      }
    });
  }

  public goHome() {
    this.navCtrl.popToRoot();
    this.viewCtrl.dismiss();
  }

}