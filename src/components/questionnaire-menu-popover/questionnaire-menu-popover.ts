import { Component } from '@angular/core';
import { NavParams, NavController, ViewController, AlertController } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getStoreWorkEaOneRecord } from '../../states/logging';
import { SetBackToRoot } from '../../states/household/household.actions';
import { UnitPage } from '../../pages/unit/unit';
import { BuildingState } from '../../states/building/building.reducer';
import { getRecieveDataFromBuilding } from '../../states/building';
import { getCurrentWorkingEA } from '../../states/bootup';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { HouseHoldState } from '../../states/household/household.reducer';

@Component({
  selector: 'questionnaire-menu-popover',
  templateUrl: 'questionnaire-menu-popover.html'
})
export class QuestionnaireMenuPopoverComponent {

  // public dataWorkEARow: any;
  private navCtrl: NavController;

  public currentEA$ = this.store.select(getCurrentWorkingEA);
  // private DataStoreWorkEaOneRecord$ = this.store.select(getStoreWorkEaOneRecord);
  private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);
  public unitCount: number;
  public isDisabled: boolean;
  public isCommunity: boolean;
  public Pop: boolean;
  public No: string;

  constructor(public alertCtrl: AlertController, public navParams: NavParams, 
      public viewCtrl: ViewController, 
      private store: Store<LoggingState>, private storeBuild: Store<BuildingState>,
      private storeUnit: Store<HouseHoldState>,
      private appState: AppStateProvider) {

    console.log('Hello QuestionnaireMenuPopoverComponent Component');
    this.navCtrl = navParams.get('nav');
    this.isDisabled = false;
    this.isCommunity = false;
  }

  ionViewDidLoad() {
    this.Pop = this.navParams.get('Pop');
    this.No = this.navParams.get('No');
    console.log("Pop: " + this.Pop);
    console.log("No: " + this.No);

    // this.DataStoreWorkEaOneRecord$.subscribe(data => {
    //   if (data != null) {
    //     this.dataWorkEARow = data
    //   }
    // });
  }

  public openMap() {
    const mapPage = 'EaMapPage';
    const ea$ = this.currentEA$.take(1).subscribe(ea => {
      if (ea.Center) {
        this.navCtrl.push(mapPage, { lat: ea.Center.coordinates[1], lng: ea.Center.coordinates[0] });
      } else {
        const alertNoMap = this.alertCtrl.create({
          title: "ไม่มีแผนที่",
          message: "ไม่พบแผนที่สำหรับ EA นี้ ระบบไม่สามารถแสดงแผนที่ได้",
          buttons: ["ตกลง"],
        });
        alertNoMap.present();
      }
    });
  }

  public goHome() {
    const alert = this.alertCtrl.create({
      title: 'คุณต้องการกลับหน้าหลักหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            this.navCtrl.setRoot("HomesPage")
            this.viewCtrl.dismiss();
          }
        }
      ]
    });
    alert.present();
  }

  goMeasure() {
    this.navCtrl.push("MeasurePage")
  }

  goToUnitPage() {
    const alert = this.alertCtrl.create({
      title: 'คุณต้องการหยุดการทำงานชั่วคราวหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            this.GetDataFromBuilding$.take(1).subscribe(data => {
              this.unitCount = data
              this.isDisabled = this.navParams.get('isDisabled');
              this.isCommunity = this.navParams.get('isCommunity');
              console.log("isDisabled: " + this.isDisabled);
              console.log("unitCount: " + this.unitCount);
              this.storeUnit.dispatch(new SetBackToRoot(true));
              // (this.isDisabled || this.isCommunity || this.unitCount == 1) ? this.navCtrl.popToRoot() : this.navCtrl.popTo(this.navCtrl.getByIndex(3));
              if (this.isDisabled || this.isCommunity || this.unitCount == 1)
                this.navCtrl.popToRoot();
              else
                this.navCtrl.popTo(this.navCtrl.getByIndex(3));
            });
          }
        }
      ]
    });
    alert.present();
  }
}