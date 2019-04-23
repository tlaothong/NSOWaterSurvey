import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { getListOfEAs } from '../../states/bootup';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { EaComponent } from '../../components/ea/ea';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { SetCurrentWorkingEA } from '../../states/bootup/bootup.actions';
import { EA } from '../../models/mobile/MobileModels';

@IonicPage()
@Component({
  selector: 'page-select-ea',
  templateUrl: 'select-ea.html',
})

export class SelectEaPage {

  // @ViewChildren(EaComponent) private ea: EaComponent[];
  // private formDataUser$ = this.store.select(getUserData).pipe(map(s => s));
  // private formDataEa$ = this.store.select(getDataWorkEA).pipe(map(s => s));
  // public dataEa: any;
  private listOfEAs$ = this.store.select(getListOfEAs);

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<BootupState>) {
  }

  ionViewDidLoad() {
    console.log('Loaded SelectEaPage');
  }

  goConfirmSeletEAPage(selectedEa: EA) {
    this.store.dispatch(new SetCurrentWorkingEA(selectedEa.code));
    this.navCtrl.setRoot("HomesPage");
  }

}
