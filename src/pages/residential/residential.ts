import { CountComponent } from './../../components/count/count';
import { SetWaterSourcesResidential, SetSelectorIndex, SetMemberCount, SaveHouseHold } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-residential',
  templateUrl: 'residential.html',
})
export class ResidentialPage {

  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  public residentialFrm: FormGroup;
  private submitRequested: boolean;
  // private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.residence));
  private formData$ = this.store.select(getHouseHoldSample);
  public checked: boolean;
  private isCheckWarningBox: boolean;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public local: LocalStorageProvider, public navParams: NavParams, private storage: Storage, public fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.residentialFrm = this.fb.group({
      'memberCount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required, Validators.min(1)])],
      'workingAge': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
      'gardeningUse': [null, Validators.required],
    });
  }

  ionViewDidLoad() {

  }

  check(): boolean {
    if (Number(this.residentialFrm.get('workingAge').value) > Number(this.residentialFrm.get('memberCount').value)) {
      return this.checked = true
    }
    return this.checked = false
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.waterSources8B.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());

    this.isCheckWarningBox = this.residentialFrm.valid && !(this.check());
    if (this.residentialFrm.valid && !(this.check())) {
      this.arrayIsCheckMethod();
      let originalHouseHold = this.appState.houseHoldUnit;
      let newHouseHold = {
        ...originalHouseHold,
        residence: this.residentialFrm.value,
      };

      this.store.dispatch(new SaveHouseHold(newHouseHold));
      this.navCtrl.popTo("CheckListPage");
    }
    // else {
    //   const doing = this.managementforfarming.get('doing').value;
    //   const detaisInvalid = this.managementforfarming.get('details').invalid;
    //   const projectCountValid = this.managementforfarming.get('projectCount').valid;

    //   if (doing == false && projectCountValid && detaisInvalid) { // เข้าเงื่อนไขที่ยกเว้นได้
    //     const confirmChanged = this.alertCtrl.create({
    //       title: 'แก้ไขข้อมูลให้ถูกต้อง',
    //       message: 'ไม่สามารถบันทึกรายการได้ เพราะมีข้อมูลรายละเอียดที่ไม่สมบูรณ์ <p>กด<b>ยืนยัน</b>หากท่านต้องการให้ระบบลบข้อมูลที่กรอกไว้เหล่านั้นทิ้ง แล้วกดบันทึกอีกครั้ง</p> <p>หรือกด<b>ยกเลิก</b>เพื่อกลับไปปรับปรุงข้อมูลด้วยตัวท่านเอง</p>',
    //       buttons: [
    //         "ยกเลิก",
    //         {
    //           text: "ยืนยัน",
    //           handler: () => {
    //             this.managementforfarming.get('projectCount').setValue(0);
    //           },
    //         },
    //       ]
    //     });
    //     confirmChanged.present();
    //   }
    // }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(0));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 0)) {
    //       arrayIsCheck.push(0);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public isValid(name: string): boolean {
    var ctrl = this.residentialFrm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
