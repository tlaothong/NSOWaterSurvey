import { Component, Input } from '@angular/core';
import { SetSelectorIndex, SetBackToRoot, SetBack } from '../../states/household/household.actions';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { NavController, AlertController, ViewController } from 'ionic-angular';
import { BuildingState } from '../../states/building/building.reducer';
import { getRecieveDataFromBuilding } from '../../states/building';
import { getProgress } from '../../states/household';

@Component({
  selector: 'form-buttons-bar',
  templateUrl: 'form-buttons-bar.html'
})
export class FormButtonsBarComponent {

  public text: string;
  @Input("for1Unit") public for1Unit: boolean = false;
  @Input("checkEnd") public checkEnd: boolean;
  @Input("isDisabled") public isDisabled: boolean;
  @Input("frontNum") public frontNum: any;
  @Input("backNum") public backNum: any;
  @Input("checkFormButtonsForBuilding") public checkFormButtonsForBuilding: boolean;

  public unitCount: number;
  private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);

  public progress$ = this.store.select(getProgress);


  constructor(public alertCtrl: AlertController, public viewCtrl: ViewController, public navCtrl: NavController,
      private storeBuild: Store<BuildingState>, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
    this.GetDataFromBuilding$.take(1).subscribe(data => this.unitCount = data);
  }

  backToHome() {
    const alert = this.alertCtrl.create({
      title: 'ข้อมูลยังไม่ถูกบันทึก ต้องการดำเนินการต่อหรือไม่',
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
            if (this.unitCount == 1 && this.for1Unit) {
              this.navCtrl.popTo(this.navCtrl.getByIndex(0));
            }
            else {
              if (this.isDisabled == true) {
                this.navCtrl.popTo("HomesPage");
              } else {
                this.store.dispatch(new SetSelectorIndex(-1));
                this.store.dispatch(new SetBackToRoot(true));
                this.navCtrl.popTo("CheckListPage");
              }
            }
          }
        }
      ]
    });
    alert.present();
  }

  previouPage() {
    const alert = this.alertCtrl.create({
      title: 'ข้อมูลยังไม่ถูกบันทึก ต้องการดำเนินการต่อหรือไม่',
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
            if (this.unitCount == 1 && this.for1Unit) {
              this.navCtrl.popTo(this.navCtrl.getByIndex(2));
            }
            else {
              if (this.isDisabled == true) {
                this.navCtrl.popTo("HomesPage");
              } else {
                this.store.dispatch(new SetBack(true));
                this.navCtrl.popTo("CheckListPage");
              }
            }
          }
        }
      ]
    });
    alert.present();
  }
}
