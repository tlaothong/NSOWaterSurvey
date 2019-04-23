import { CountComponent } from './../../components/count/count';
import { SetAgiSelectRice, SetSelectorIndex, SaveHouseHold } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { FieldFarmingComponent } from '../../components/field-farming/field-farming';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { EX_RICH_LIST } from '../../models/tree';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-rice',
  templateUrl: 'rice.html',
})
export class RicePage {
  private submitRequested: boolean;
  f: FormGroup;

  private frontNum: any;
  private backNum: any;
  // private itWater: any;
  @ViewChildren(FieldFarmingComponent) private fieldFarmings: FieldFarmingComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  private isCheckWarningBox: boolean;
  public DataList = EX_RICH_LIST;
  private formData$ = this.store.select(getHouseHoldSample);
  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture));
  // private data: any
  // formData$: any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [0, Validators.compose([Validators.pattern('[0-9]*')])],
      'fields': this.fb.array([]),
    }, {
        validator: RicePage.checkAnyOrOther()
      });
    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldFarmings.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());

    this.store.dispatch(new SetAgiSelectRice(true));
    this.isCheckWarningBox = this.f.valid;

    if (this.f.valid) {
      this.arrayIsCheckMethod();
      let argi = {
        ...this.appState.houseHoldUnit.agriculture,
        ricePlant: this.f.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        agriculture: argi,
      };

      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
    else {
      const doing = this.f.get('doing').value;
      const fieldsInvalid = this.f.get('fields').invalid;
      const fieldCountValid = this.f.get('fieldCount').valid;

      if (doing == false && fieldCountValid && fieldsInvalid) { // เข้าเงื่อนไขที่ยกเว้นได้
        const confirmChanged = this.alertCtrl.create({
          title: 'แก้ไขข้อมูลให้ถูกต้อง',
          message: 'ไม่สามารถบันทึกรายการได้ เพราะมีข้อมูลรายละเอียดที่ไม่สมบูรณ์ <p>กด<b>ยืนยัน</b>หากท่านต้องการให้ระบบลบข้อมูลที่กรอกไว้เหล่านั้นทิ้ง แล้วกดบันทึกอีกครั้ง</p> <p>หรือกด<b>ยกเลิก</b>เพื่อกลับไปปรับปรุงข้อมูลด้วยตัวท่านเอง</p>',
          buttons: [
            "ยกเลิก",
            {
              text: "ยืนยัน",
              handler: () => {
                this.f.get('fieldCount').setValue(0);
              },
            },
          ]
        });
        confirmChanged.present();
      }
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(2));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 2)) {
    //       arrayIsCheck.push(2);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const doing = c.get('doing');
      const fieldCount = c.get('fieldCount');

      if (doing.value == null) {
        return { 'doing': true };
      }
      if (doing.value != null && doing.value == true && fieldCount.value <= 0) {
        return { 'fieldCount': true };
      }

      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'doing') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.doing && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'fieldCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.fieldCount && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }


  public setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (this.f.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = FieldFarmingComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
