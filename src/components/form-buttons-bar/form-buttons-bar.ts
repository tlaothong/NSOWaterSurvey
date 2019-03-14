import { Component, Input } from '@angular/core';
import { SetSelectorIndex, SetBackToRoot, SetBack } from '../../states/household/household.actions';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'form-buttons-bar',
  templateUrl: 'form-buttons-bar.html'
})
export class FormButtonsBarComponent {

  public text: string;
  @Input("checkEnd") public checkEnd: boolean;
  @Input("isDisabled") public isDisabled: boolean;
  @Input("frontNum") public frontNum: any;
  @Input("backNum") public backNum: any;

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
  }

  ionViewDidEnter() {
    console.log(this.isDisabled);
  }

  backToHome() {
    if (this.isDisabled == true) {
      this.navCtrl.popTo("HomesPage");
    } else {
      this.store.dispatch(new SetSelectorIndex(-1));
      this.store.dispatch(new SetBackToRoot(true));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  previouPage() {
    if (this.isDisabled == true) {
      this.navCtrl.popTo("HomesPage");
    } else {
      this.store.dispatch(new SetBack(true));
      this.navCtrl.popTo("CheckListPage");
    }
  }
}
