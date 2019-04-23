import { FieldDryCropPlantingComponent } from './../../components/field-dry-crop-planting/field-dry-crop-planting';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { map } from 'rxjs/operators';
import { SetAgronomyPlantSelectPlant, SetAgiSelectAgronomy, SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold } from '../../states/household/household.actions';
import { getHouseHoldSample, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { CountComponent } from '../../components/count/count';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-dry-crop-planting',
  templateUrl: 'dry-crop-planting.html',
})

export class DryCropPlantingPage {
  @ViewChildren(FieldDryCropPlantingComponent) private fieldDryCrop: FieldDryCropPlantingComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  private frontNum: any;
  private backNum: any;

  public agronomyPlant: FormGroup;
  private submitRequested: boolean;
  private isCheckWarningBox: boolean;
  shownData: string[];
  private formData$ = this.store.select(getHouseHoldSample);

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private storage: Storage, public local: LocalStorageProvider, public navParams: NavParams, private fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.agronomyPlant = this.fb.group({
      "doing": [null, Validators.required],
      "fieldCount": [0, Validators.compose([Validators.pattern('[0-9]*')])],
      "fields": this.fb.array([]),
    }, {
        validator: DryCropPlantingPage.checkAnyOrOther()
      });
    this.setupFieldCountChanges();
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldDryCrop.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
    let fields = this.agronomyPlant.get('fields').value as Array<any>;
    let selectedMap = new Map<string, any>();
    fields.forEach(f => {
      if (f.plantings && f.plantings.plants) {
        f.plantings.plants.forEach(p => selectedMap.set(p.code, p));
      }
    });
    let selected = [];
    selectedMap.forEach(v => selected.push(v));

    this.isCheckWarningBox = ((this.agronomyPlant.valid));
    if ((this.agronomyPlant.valid)) {
      this.arrayIsCheckMethod();
      let argi = {
        ...this.appState.houseHoldUnit.agriculture,
        agronomyPlant: this.agronomyPlant.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        agriculture: argi,
      };
      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
    else {
      const doing = this.agronomyPlant.get('doing').value;
      const fieldsInvalid = this.agronomyPlant.get('fields').invalid;
      const fieldCountValid = this.agronomyPlant.get('fieldCount').valid;

      if (doing == false && fieldCountValid && fieldsInvalid) { // เข้าเงื่อนไขที่ยกเว้นได้
        const confirmChanged = this.alertCtrl.create({
          title: 'แก้ไขข้อมูลให้ถูกต้อง',
          message: 'ไม่สามารถบันทึกรายการได้ เพราะมีข้อมูลรายละเอียดที่ไม่สมบูรณ์ <p>กด<b>ยืนยัน</b>หากท่านต้องการให้ระบบลบข้อมูลที่กรอกไว้เหล่านั้นทิ้ง แล้วกดบันทึกอีกครั้ง</p> <p>หรือกด<b>ยกเลิก</b>เพื่อกลับไปปรับปรุงข้อมูลด้วยตัวท่านเอง</p>',
          buttons: [
            "ยกเลิก",
            {
              text: "ยืนยัน",
              handler: () => {
                this.agronomyPlant.get('fieldCount').setValue(0);
              },
            },
          ]
        });
        confirmChanged.present();
      }
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(3));
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
    var ctrl = this.agronomyPlant.get(name);
    if (name == 'doing') {
      let ctrls = this.agronomyPlant;
      return ctrls.errors && ctrls.errors.doing && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'fieldCount') {
      let ctrls = this.agronomyPlant;
      return ctrls.errors && ctrls.errors.fieldCount && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldDryCrop = (this.agronomyPlant.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.agronomyPlant.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;

        if (i < fieldDryCrop.length) {
          const fld = fieldDryCrop[i];
          ctrl = fld;
        } else {
          ctrl = FieldDryCropPlantingComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.agronomyPlant.setControl(componentFormArray, field);
    };

    this.agronomyPlant.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
