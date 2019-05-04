import { Component, Input, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormArray } from '@angular/forms';
import { TableDisasterousComponent } from '../../components/table-disasterous/table-disasterous';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample } from '../../states/household';
import { SetSelectorIndex, SaveHouseHold } from '../../states/household/household.actions';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-disasterous',
  templateUrl: 'disasterous.html',
})
export class DisasterousPage {

  @ViewChildren(TableDisasterousComponent) private tableDisasterous: TableDisasterousComponent[];
  @Input("headline") private text: string;

  private submitRequested: boolean;
  public Disasterous: FormGroup;
  // private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.disaster));
  private formData$ = this.store.select(getHouseHoldSample);
  public dataDis: any;
  private frontNum: any;
  private backNum: any;
  public isCheckWarningBox: boolean;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,
    private store: Store<HouseHoldState>, private appState: AppStateProvider, public alertController: AlertController) {
    this.Disasterous = this.fb.group({
      '_id': null,
      'flooded': [null, Validators.required],
      'yearsDisasterous': this.fb.array([
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
      ]),
    }, {
        validator: DisasterousPage.checkAnyOrOther()
      })
  }

  ionViewDidLoad() {

  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableDisasterousPage", { FormItem: this.Disasterous, headline: this.text });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.Disasterous.patchValue(fg.value);
      }
    });
    modal.present();
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.tableDisasterous.forEach(it => it.submitRequest());
    this.isCheckWarningBox = this.Disasterous.valid;
    console.log(this.Disasterous);

    if (this.Disasterous.valid) {
      this.arrayIsCheckMethod();
      let originalHouseHold = this.appState.houseHoldUnit;
      let newHouseHold = {
        ...originalHouseHold,
        disaster: this.Disasterous.value,
      };
      this.store.dispatch(new SaveHouseHold(newHouseHold));
      this.navCtrl.popTo("CheckListPage");
    }
    else {
      const flooded = this.Disasterous.get('flooded').value;
      const yearsDisasterousInvalid = this.Disasterous.get('yearsDisasterous').invalid;

      if (flooded == false && yearsDisasterousInvalid) { // เข้าเงื่อนไขที่ยกเว้นได้
        const confirmChanged = this.alertController.create({
          title: 'แก้ไขข้อมูลให้ถูกต้อง',
          message: 'ไม่สามารถบันทึกรายการได้ เพราะมีข้อมูลรายละเอียดที่ไม่สมบูรณ์ <p>กด<b>ยืนยัน</b>หากท่านต้องการให้ระบบลบข้อมูลที่กรอกไว้เหล่านั้นทิ้ง แล้วกดบันทึกอีกครั้ง</p> <p>หรือกด<b>ยกเลิก</b>เพื่อกลับไปปรับปรุงข้อมูลด้วยตัวท่านเอง</p>',
          buttons: [
            "ยกเลิก",
            {
              text: "ยืนยัน",
              handler: () => {
                this.Disasterous.get('yearsDisasterous').setValue(0);
              },
            },
          ]
        });
        confirmChanged.present();
      }
    }
    console.log(this.Disasterous.valid);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const flooded = c.get('flooded');
      const yearsDisasterous = c.get('yearsDisasterous') as FormArray;

      let checkYearsDisasterous = 0;
      for (let i = 0; i < yearsDisasterous.length; i++) {
        let years = yearsDisasterous.at(i);
        if (years.get('count').value != null || years.get('avgDay').value != null ||
          (years.get('avgHour').value != null || years.get('waterHeightCm').value != null)) {

          checkYearsDisasterous++;
        }
      }
      if (flooded.value == null) {
        return { 'flooded': true };
      }

      if (flooded.value && checkYearsDisasterous == 0) {
        return { 'checkYearsDisasterous': true }
      }

      return null;
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(20));
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.Disasterous.get(name);
    if (name == 'flooded') {
      var ctrls = this.Disasterous;
      return ctrls.errors && ctrls.errors.flooded && (ctrls.dirty || this.submitRequested);
    }
    if (name == 'checkYearsDisasterous') {
      var ctrls = this.Disasterous;
      return ctrls.errors && ctrls.errors.checkYearsDisasterous && (ctrls.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);



  }
}
