import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { FieldMushroomComponent } from '../../components/field-mushroom/field-mushroom';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample } from '../../states/household';
import { SetSelectorIndex, SaveHouseHold } from '../../states/household/household.actions';
import { CountComponent } from '../../components/count/count';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-mushroom',
  templateUrl: 'mushroom.html',
})
export class MushroomPage {
  public f: FormGroup;
  private submitRequested: boolean;
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;
  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture));
  private formData$ = this.store.select(getHouseHoldSample);
  // private formData: any;

  @ViewChildren(FieldMushroomComponent) private fieldMushroom: FieldMushroomComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public modalCtrl: ModalController, private store: Store<HouseHoldState>, public navParams: NavParams, private fb: FormBuilder, private appState: AppStateProvider) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [0, Validators.compose([Validators.pattern('[0-9]*')])],
      'fields': this.fb.array([]),
    }, {
        validator: MushroomPage.checkAnyOrOther()
      });
    this.setupPlantingCountChanges()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MushroomPage');

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldMushroom.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
    this.isCheckWarningBox = this.f.valid;

    if (this.f.valid) {
      this.arrayIsCheckMethod();
      let mushroom = {
        ...this.appState.houseHoldUnit.agriculture,
        mushroomPlant: this.f.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        agriculture: mushroom,
      }
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
    this.store.dispatch(new SetSelectorIndex(8));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 8)) {
    //       arrayIsCheck.push(8);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public copyToTheRest(srcIndex: number) {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    let fields = (this.f.get(componentFormArray) as FormArray);
    let fieldCount = this.f.get(componentCount).value || 0;

    const fsrc = fields.at(srcIndex).value;

    for (let index = srcIndex + 1; index < fieldCount; index++) {
      const copy = FieldMushroomComponent.CreateFormGroup(this.fb);
      copy.setValue(fsrc);
      fields.setControl(index, copy);
    }
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

  private setupPlantingCountChanges() {
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
          ctrl = FieldMushroomComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
