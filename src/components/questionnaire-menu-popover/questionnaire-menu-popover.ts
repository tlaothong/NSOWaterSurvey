import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getStoreWorkEaOneRecord } from '../../states/logging';
import { SetBackToRoot } from '../../states/household/household.actions';
import { UnitPage } from '../../pages/unit/unit';

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
    this.navCtrl.setRoot("HomesPage")
    this.viewCtrl.dismiss();
  }

  goMeasure() {
    this.navCtrl.push("MeasurePage")
  }

  goToUnitPage() {
    this.store.dispatch(new SetBackToRoot(true));
    this.navCtrl.popTo(this.navCtrl.getByIndex(3));
  }
}