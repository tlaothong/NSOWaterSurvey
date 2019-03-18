import { Component, Input } from '@angular/core';
import { SetSelectorIndex, SetBackToRoot, SetBack } from '../../states/household/household.actions';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { NavController } from 'ionic-angular';
import { BuildingState } from '../../states/building/building.reducer';
import { getRecieveDataFromBuilding } from '../../states/building';

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
  public unitCount: number;
  private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);


  constructor(public navCtrl: NavController, private storeBuild: Store<BuildingState>, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
    this.GetDataFromBuilding$.subscribe(data => this.unitCount = data);
  }

  backToHome() {
    console.log(this.isDisabled);
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

  previouPage() {
    console.log(this.isDisabled);
    console.log(this.unitCount);
    console.log(this.for1Unit);
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
