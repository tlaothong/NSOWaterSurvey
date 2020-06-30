import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { getListOfEAs } from '../../states/bootup';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { SetCurrentWorkingEA, SetCurrentStatusState, LoginUser, DownloadUserToMobile, DownloadUserToMobileSuccess } from '../../states/bootup/bootup.actions';
import { EA } from '../../models/mobile/MobileModels';
import { DataStoreProvider } from '../../providers/data-store/data-store';
import { provinceData } from '../../models/ProvinceData';
import { LocationDataProvider } from '../../providers/location-data/location-data';
import { districtData } from '../../models/DistrictData';
import { subDistrictData } from '../../models/SubDistrictData';
@IonicPage()
@Component({
  selector: 'page-select-ea',
  templateUrl: 'select-ea.html',
})

export class SelectEaPage {

  private listOfEAs: EA[] = [];
  oldLstEA: EA[]
  private provinceData: any;
  private province: any;
  private district: any;
  private subDistrict: any
  private provinceCode: any;
  cwt: any;
  amp: any;
  ampCode: any;
  tam: any;
  code: string;
  constructor(private dataStore: DataStoreProvider, public navCtrl: NavController, public navParams: NavParams, private store: Store<BootupState>) {

  }

  ionViewDidLoad() {
    this.procressSetLocation()

    this.listOfEAs.push({ "code": "1", "Area_Code": "100101", "REG": "1", "REG_NAME": "", "CWT": "10", "CWT_NAME": "ไม่ระบุพื้นที่", "AMP": "01", "AMP_NAME": "", "TAM": "01", "TAM_NAME": "", "DISTRICT": 1, "MUN": "000", "MUN_NAME": "กรุงเทพมหานคร", "TAO": "", "TAO_NAME": "", "EA": "001", "VIL": "00", "VIL_NAME": "", "MAP_STATUS": 1, "Building": 135, "Household": 83, "population": 242, "Agricultural_HH": 0, "ES_BUSI": "237", "ES_INDUS": "8", "ES_HOTEL": "", "ES_PV_HOS": "", "REMARK": "มหาวิทยาลัย 1 แห่ง,  โรงเรียน 2 แห่ง, ตึก 3 ชั้น 14 ห้อง", "Center": { "coordinates": [100.49042950774567, 13.758569035411838] } },
    );
    this.dataStore.listDownloadedEAs("32505940").subscribe(it => {
      this.oldLstEA = it
      this.listOfEAs = this.oldLstEA != null && this.oldLstEA != undefined ? this.oldLstEA : this.listOfEAs;
      console.log("oldLst", this.oldLstEA);

      this.store.dispatch(new LoginUser("32505940"));
      this.store.dispatch(new DownloadUserToMobile());
      this.store.dispatch(new SetCurrentStatusState("Survey"));
    });
  }

  procressSetLocation() {
    this.provinceData = provinceData.sort((a, b) => a.name.localeCompare(b.name));

    if (this.province == 999) {
      this.province = null;
      this.district = null;
      this.subDistrict = null;
    }
    else if (this.province != 999) {
      this.onChange(this.province);
      if (this.district != 999) {
        this.onChange1(this.district);
      }
    }
  }

  onChange(name: any) {
    let code = provinceData.find(it => it.name == name) || null;

    if (code != null) {
      this.code = code.codeProvince;
      this.provinceCode = code.codeProvince;
      let order = LocationDataProvider.getDistric(code.codeProvince);
      this.district = order.sort((a, b) => a.name.localeCompare(b.name))
    }
  }

  onChange1(name: any) {
    var code = districtData.find(it => it.name == name && it.codeProvince == this.provinceCode) || null;

    if (code != null) {
      this.ampCode = code.codeDistrict
      if (code.AMP != undefined) this.code += code.AMP;
      let order = LocationDataProvider.getSubdistric(code.codeDistrict);
      this.subDistrict = order.sort((a, b) => a.name.localeCompare(b.name))
    }
  }

  onChange2(name: any) {
    var code = subDistrictData.find(it => it.name == name && it.codeDistrict == this.ampCode) || null;

    if (code != null) {
      this.code += '0' + code.TAM;
    }
  }

  goConfirmSeletEAPage() {
    console.log(this.listOfEAs);
    let selectedEa = {
      "code": "1", "Area_Code": "100101", "REG": "1", "REG_NAME": "",
      "CWT": "10", "CWT_NAME": "กรุงเทพมหานคร", "AMP": "01", "AMP_NAME": "พระนคร",
      "TAM": "01", "TAM_NAME": "พระบรมมหาราชวัง", "DISTRICT": 1, "MUN": "000",
      "MUN_NAME": "กรุงเทพมหานคร", "TAO": "", "TAO_NAME": "", "EA": "001",
      "VIL": "00", "VIL_NAME": "", "MAP_STATUS": 1, "Building": 135,
      "Household": 83, "population": 242, "Agricultural_HH": 0, "ES_BUSI": "237",
      "ES_INDUS": "8", "ES_HOTEL": "", "ES_PV_HOS": "", "REMARK": "มหาวิทยาลัย 1 แห่ง,  โรงเรียน 2 แห่ง, ตึก 3 ชั้น 14 ห้อง",
      "Center": { "coordinates": [100.49042950774567, 13.758569035411838] }
    };

    selectedEa.CWT_NAME = this.cwt;
    selectedEa.AMP_NAME = this.amp;
    selectedEa.TAM_NAME = this.tam;
    selectedEa.code = this.code;
    this.listOfEAs.some(it => it.code == selectedEa.code) ? null : this.listOfEAs.push(selectedEa);
    console.log("after push ", this.listOfEAs);

    this.dataStore.savedEAs("32505940", this.listOfEAs).toPromise().then(_ => {
      this.store.dispatch(new DownloadUserToMobileSuccess(this.listOfEAs));
      this.store.dispatch(new SetCurrentWorkingEA(selectedEa.code));
      this.navCtrl.setRoot("HomesPage");
    })
  }

  goContinuseSeletEAPage(selectedEa: EA) {
    this.dataStore.savedEAs("32505940", this.listOfEAs).toPromise().then(_ => {
      this.store.dispatch(new DownloadUserToMobileSuccess(this.listOfEAs));
      this.store.dispatch(new SetCurrentWorkingEA(selectedEa.code));
      this.navCtrl.setRoot("HomesPage");
    })
  }

}
