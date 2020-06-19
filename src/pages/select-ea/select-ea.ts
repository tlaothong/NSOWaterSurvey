import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { getListOfEAs } from '../../states/bootup';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { SetCurrentWorkingEA, SetCurrentStatusState, LoginUser, DownloadUserToMobile, SetCurrentWorkingEA4NoLogin } from '../../states/bootup/bootup.actions';
import { EA } from '../../models/mobile/MobileModels';

@IonicPage()
@Component({
  selector: 'page-select-ea',
  templateUrl: 'select-ea.html',
})

export class SelectEaPage {

  private listOfEAs$ = this.store.select(getListOfEAs);
  private listOfEAs: EA[] = [];
  cwt: string;
  amp: string;
  tam: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<BootupState>) {

  }

  ionViewDidLoad() {

    console.log('Loaded SelectEaPage');
    this.listOfEAs.push({ "code": "11001011000001", "Area_Code": "100101", "REG": "1", "REG_NAME": "กรุงเทพมหานคร", "CWT": "10", "CWT_NAME": "กรุงเทพมหานคร", "AMP": "01", "AMP_NAME": "พระนคร", "TAM": "01", "TAM_NAME": "พระบรมมหาราชวัง", "DISTRICT": 1, "MUN": "000", "MUN_NAME": "กรุงเทพมหานคร", "TAO": "", "TAO_NAME": "", "EA": "001", "VIL": "00", "VIL_NAME": "", "MAP_STATUS": 1, "Building": 135, "Household": 83, "population": 242, "Agricultural_HH": 0, "ES_BUSI": "237", "ES_INDUS": "8", "ES_HOTEL": "", "ES_PV_HOS": "", "REMARK": "มหาวิทยาลัย 1 แห่ง,  โรงเรียน 2 แห่ง, ตึก 3 ชั้น 14 ห้อง", "linkcode": "", "Center": { "coordinates": [100.49042950774567, 13.758569035411838], "type": "Point" } },
    );
    this.store.dispatch(new LoginUser("32505940"));
    // this.store.dispatch(new DownloadUserToMobile());
    this.store.dispatch(new SetCurrentStatusState("Survey"));
  }

  goConfirmSeletEAPage() {
    let selectedEa = this.listOfEAs.find(it => it.code == "11001011000001");
    selectedEa.CWT_NAME = this.cwt;
    selectedEa.AMP_NAME = this.amp;
    selectedEa.TAM_NAME = this.tam;
    this.store.dispatch(new SetCurrentWorkingEA(selectedEa.code));
    this.store.dispatch(new SetCurrentWorkingEA4NoLogin(selectedEa));
    this.navCtrl.setRoot("HomesPage");
  }
  // goConfirmSeletEAPage(selectedEa: EA) {
  //   console.log(selectedEa);
  //   this.store.dispatch(new SetCurrentWorkingEA(selectedEa.code));
  //   this.navCtrl.setRoot("HomesPage");
  // }

}
