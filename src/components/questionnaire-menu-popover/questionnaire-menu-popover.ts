import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getStoreWorkEaOneRecord } from '../../states/logging';
import { SetBackToRoot } from '../../states/household/household.actions';
import { UnitPage } from '../../pages/unit/unit';
import { BuildingState } from '../../states/building/building.reducer';
import { getRecieveDataFromBuilding } from '../../states/building';

@Component({
  selector: 'questionnaire-menu-popover',
  templateUrl: 'questionnaire-menu-popover.html'
})
export class QuestionnaireMenuPopoverComponent {

  public dataWorkEARow: any;
  private navCtrl: NavController;

  private DataStoreWorkEaOneRecord$ = this.store.select(getStoreWorkEaOneRecord);
  private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);
  public unitCount: number;
  public isBuilding: boolean;

  constructor(public navParams: NavParams, public viewCtrl: ViewController, private store: Store<LoggingState>, private storeBuild: Store<BuildingState>) {
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
    this.GetDataFromBuilding$.subscribe(data => this.unitCount = data);
    this.isBuilding = this.navParams.get('isBuilding');
    console.log("isBuilding: " + this.isBuilding);
    console.log("unitCount: " + this.unitCount);

    this.store.dispatch(new SetBackToRoot(true));
    (this.isBuilding || this.unitCount == 1) ? this.navCtrl.popToRoot() : this.navCtrl.popTo(this.navCtrl.getByIndex(3));
  }
}