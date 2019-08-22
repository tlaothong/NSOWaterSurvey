import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { getListOfEAs } from '../../states/bootup';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { SetCurrentWorkingEA, SetCurrentStatusState } from '../../states/bootup/bootup.actions';
import { EA } from '../../models/mobile/MobileModels';

@IonicPage()
@Component({
  selector: 'page-select-ea',
  templateUrl: 'select-ea.html',
})

export class SelectEaPage {

  private listOfEAs$ = this.store.select(getListOfEAs);

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<BootupState>) {

  }

  ionViewDidLoad() {
    console.log('Loaded SelectEaPage');
    this.store.dispatch(new SetCurrentStatusState("Survey"));
  }

  goConfirmSeletEAPage(selectedEa: EA) {
    this.store.dispatch(new SetCurrentWorkingEA(selectedEa.code));
    this.navCtrl.setRoot("HomesPage");
  }

}
