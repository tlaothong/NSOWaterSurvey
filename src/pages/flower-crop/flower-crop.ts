import { FieldFlowerCropComponent } from './../../components/field-flower-crop/field-flower-crop';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { EX_TREEDOK_LIST } from '../../models/tree';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getPerennialPlantSelectPlant, getAgronomyPlantSelectPlant, getRicePlantSelectPlant, getRubberTreeSelectPlant, getAgiSelectRice, getAgiSelectAgronomy, getAgiSelectRubber, getAgiSelectPerennial } from '../../states/household';
import { SetSelectorIndex, SaveHouseHold } from '../../states/household/household.actions';
import { CountComponent } from '../../components/count/count';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-flower-crop',
  templateUrl: 'flower-crop.html',
})
export class FlowerCropPage {


  @ViewChildren(FieldFlowerCropComponent) private fieldFlowerCrop: FieldFlowerCropComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  private submitRequested: boolean;
  public flowerCropFrm: FormGroup;
  public shownData: string[];
  private formData$ = this.store.select(getHouseHoldSample);
  private GetPlantDrycrop$ = this.store.select(getAgronomyPlantSelectPlant);
  private GetPlantPerennial$ = this.store.select(getPerennialPlantSelectPlant);
  private GetPlantRice$ = this.store.select(getRicePlantSelectPlant);
  private GetPlantRubber$ = this.store.select(getRubberTreeSelectPlant);
  private getAgiSelectRice$ = this.store.select(getAgiSelectRice);
  private getAgiSelectAgronomy$ = this.store.select(getAgiSelectAgronomy);
  private getAgiSelectRubber$ = this.store.select(getAgiSelectRubber);
  private getAgiSelectPerennial$ = this.store.select(getAgiSelectPerennial);
  public listDryCropData: any = [];
  public listPerenialData: any = [];
  public listRiceData: any = [];
  public listRubberData: any = [];
  public listSumData: any = [];
  public getAgiSelectRice: boolean;
  public getAgiSelectAgronomy: boolean;
  public getAgiSelectRubber: boolean;
  public getAgiSelectPerennial: boolean;
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private appState: AppStateProvider, public navParams: NavParams, public fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    this.flowerCropFrm = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [0, Validators.compose([Validators.pattern('[0-9]*')])],
      'fields': fb.array([
        FieldFlowerCropComponent.CreateFormGroup(fb)]),
    }, {
        validator: FlowerCropPage.checkAnyOrOther()
      });
    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {

    this.GetPlantRice$.subscribe(data => {
      if (data != null) {
        this.listRiceData = data
      }

    });
    this.GetPlantDrycrop$.subscribe(data => {
      if (data != null) {
        this.listDryCropData = data
      }
    }
    );
    this.GetPlantRubber$.subscribe(data => {
      if (data != null) {
        this.listRubberData = data
      }
    });
    this.GetPlantPerennial$.subscribe(data => {
      if (data != null) {
        this.listPerenialData = data
      }
    });
    this.getAgiSelectRice$.subscribe(data => {
      if (data != null) {
        this.getAgiSelectRice = data
      }
    });
    this.getAgiSelectAgronomy$.subscribe(data => {
      if (data != null) {
        this.getAgiSelectAgronomy = data
      }
    });
    this.getAgiSelectRubber$.subscribe(data => {
      if (data != null) {
        this.getAgiSelectRubber = data
      }
    });
    this.getAgiSelectPerennial$.subscribe(data => {
      if (data != null) {
        this.getAgiSelectPerennial = data
      }
    });
    console.log(this.listRiceData, this.listPerenialData, this.listRubberData, this.listDryCropData);

    var sum = this.listDryCropData.concat(this.listPerenialData).concat(this.listRiceData).concat(this.listRubberData)
    this.listSumData = sum;
  }

  model() {
    const modal = this.modalCtrl.create("SearchDropdownPage",
      { title: "ไม้ดอก ไม้ประดับ การเพาะพันธุ์ไม้", selected: [], list: EX_TREEDOK_LIST, limit: 5 });

    modal.onDidDismiss(data => {
      if (data) {
        var adata = data as Array<string>;
        this.shownData = adata.map(it => it.split(".")[1]);
      }
    });

    modal.present();
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldFlowerCrop.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
    console.log(this.flowerCropFrm.value);
    this.isCheckWarningBox = this.flowerCropFrm.valid;

    if (this.flowerCropFrm.valid) {
      this.arrayIsCheckMethod();

      let argi = {
        ...this.appState.houseHoldUnit.agriculture,
        flowerCrop: this.flowerCropFrm.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        agriculture: argi,
      };
      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    } else {
      const doing = this.flowerCropFrm.get('doing').value;
      const fieldsInvalid = this.flowerCropFrm.get('fields').invalid;
      const fieldCountValid = this.flowerCropFrm.get('fieldCount').valid;

      if (doing == false && fieldCountValid && fieldsInvalid) { // เข้าเงื่อนไขที่ยกเว้นได้
        const confirmChanged = this.alertCtrl.create({
          title: 'แก้ไขข้อมูลให้ถูกต้อง',
          message: 'ไม่สามารถบันทึกรายการได้ เพราะมีข้อมูลรายละเอียดที่ไม่สมบูรณ์ <p>กด<b>ยืนยัน</b>หากท่านต้องการให้ระบบลบข้อมูลที่กรอกไว้เหล่านั้นทิ้ง แล้วกดบันทึกอีกครั้ง</p> <p>หรือกด<b>ยกเลิก</b>เพื่อกลับไปปรับปรุงข้อมูลด้วยตัวท่านเอง</p>',
          buttons: [
            "ยกเลิก",
            {
              text: "ยืนยัน",
              handler: () => {
                this.flowerCropFrm.get('fieldCount').setValue(0);
              },
            },
          ]
        });
        confirmChanged.present();
      }
    }
  }



  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(7));
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
    var ctrl = this.flowerCropFrm.get(name);
    if (name == 'doing') {
      let ctrls = this.flowerCropFrm;
      return ctrls.errors && ctrls.errors.doing && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'fieldCount') {
      let ctrls = this.flowerCropFrm;
      return ctrls.errors && ctrls.errors.fieldCount && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldFlowerCrop = (this.flowerCropFrm.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.flowerCropFrm.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldFlowerCrop.length) {
          const fld = fieldFlowerCrop[i];
          ctrl = fld;
        } else {
          ctrl = FieldFlowerCropComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.flowerCropFrm.setControl(componentFormArray, field);
    };

    this.flowerCropFrm.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
