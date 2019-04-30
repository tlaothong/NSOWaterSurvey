import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { TablePopulationComponent } from '../../components/table-population/table-population';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getMemberCount } from '../../states/household';
import { SetSelectorIndex, SaveHouseHold, SaveLastNameSuccess, LoadLastName } from '../../states/household/household.actions';
import { provinceData, Province } from '../../models/ProvinceData';
import { Storage } from '@ionic/storage';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { CountComponent } from '../../components/count/count';

@IonicPage()
@Component({
  selector: 'page-population',
  templateUrl: 'population.html',
})
export class PopulationPage {
  private getMemberCount$ = this.store.select(getMemberCount);

  private submitRequested: boolean;
  public f: FormGroup;
  public whatever: any;
  private i: any
  private formData$ = this.store.select(getHouseHoldSample);
  public dataPop: any
  public getIdHomes: any;
  public str: any;
  public pro: Province;
  public proName: any;
  public checkEnd: boolean;
  private isCheckWarningBox: boolean;

  @ViewChildren(TablePopulationComponent) private persons: TablePopulationComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public modalCtrl: ModalController, private storage: Storage,
    public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider, public alertController: AlertController) {
    this.f = PopulationPage.CreateFormGroup(this.fb);
    this.setupPersonCountChanges();
    console.log(this.getMemberCount$);
    this.getMember();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'skip': [null, Validators.required],
      'personCount': [0, Validators.compose([Validators.pattern('[0-9]*')])],
      'persons': fb.array([])
    }, {
        validator: PopulationPage.checkAnyOrOther()
      });
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const skip = c.get('skip');
      const persons = c.get('persons') as FormArray;
      const personCount = c.get('personCount');

      let headFamily = 0;
      for (let i = 0; i < persons.length; i++) {
        if (persons.at(i).get('relationship').value == "1") headFamily++;
      };

      if (personCount.value <= 0 && skip.value == false) {
        return { 'personCount': true };
      }
      if (headFamily == 0 && skip.value == false) {
        return { 'headFamily': true };
      }
      return null;
    }
  }

  getMember() {
    let count = 0;
    this.getMemberCount$.take(1).subscribe((data) => {
      count = data
      this.f.get('personCount').setValue(count);
      console.log(this.f.get('personCount').value);
    });
  }

  ionViewDidLoad() {
    this.store.dispatch(new LoadLastName(this.appState.userId));
    this.getIdHomes = this.appState.eaCode.substr(1, 2); // this.str.substring(0, 2); //10
    this.pro = provinceData.find(it => it.codeProvince == this.getIdHomes);
    this.proName = this.pro.name;
    this.i = this.navParams.get('i');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.persons.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
    // this.dataPop.population = this.f.value
    // this.dataPop.status = "complete"
    this.isCheckWarningBox = this.f.valid;
    console.log(this.f);

    if (this.f.valid) {
      this.arrayIsCheckMethod();
      let originalHouseHold = this.appState.houseHoldUnit;
      let newHouseHold = {
        ...originalHouseHold,
        population: this.f.value,
      };
      this.store.dispatch(new SaveHouseHold(newHouseHold));
      this.navCtrl.popTo("CheckListPage");
    } else {
      const skip = this.f.get('skip').value;
      const personsInvalid = this.f.get('persons').invalid;
      const personCountValid = this.f.get('personCount').valid;

      if (skip == true && personCountValid && personsInvalid) { // เข้าเงื่อนไขที่ยกเว้นได้
        const confirmChanged = this.alertCtrl.create({
          title: 'แก้ไขข้อมูลให้ถูกต้อง',
          message: 'ไม่สามารถบันทึกรายการได้ เพราะมีข้อมูลรายละเอียดที่ไม่สมบูรณ์ <p>กด<b>ยืนยัน</b>หากท่านต้องการให้ระบบลบข้อมูลที่กรอกไว้เหล่านั้นทิ้ง แล้วกดบันทึกอีกครั้ง</p> <p>หรือกด<b>ยกเลิก</b>เพื่อกลับไปปรับปรุงข้อมูลด้วยตัวท่านเอง</p>',
          buttons: [
            "ยกเลิก",
            {
              text: "ยืนยัน",
              handler: () => {
                this.f.get('personCount').setValue(0);
              },
            },
          ]
        });
        confirmChanged.present();
      }
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(21));
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'headFamily') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.headFamily && (ctrls.dirty || this.submitRequested);
    }
    if (name == 'personCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.personCount && (ctrls.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  private setupPersonCountChanges() {
    const componentFormArray: string = "persons";
    const componentCount: string = "personCount";

    var onComponentCountChanges = () => {
      var persons = (this.f.get(componentFormArray) as FormArray).controls || [];
      var personCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      console.log(this.f.get(componentCount).value);

      personCount = Math.max(0, personCount);

      for (let i = 0; i < personCount; i++) {
        var ctrl = null;
        if (i < persons.length) {
          const fld = persons[i];
          ctrl = fld;
        } else {
          ctrl = TablePopulationComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  // presentAlertPopulation(num) {
  //   const alert = this.alertController.create({
  //     title: 'คุณต้องการจะลบข้อมูลหรือไม่',
  //     buttons: [
  //       {
  //         text: 'ยกเลิก',
  //         handler: data => {
  //         }
  //       },
  //       {
  //         text: 'ยืนยัน',
  //         handler: data => {
  //           let del = this.f.get('persons') as FormArray;
  //           del.removeAt(num);
  //           let count = this.f.get('personCount').value;
  //           this.f.get('personCount').setValue(count);
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  // deleteData(num: any) {
  //   this.presentAlertPopulation(num);
  // }

  // let del = this.f.get('persons') as FormArray;
  //   del.removeAt(num);
  //   let count = this.f.get('personCount').value;
  //   this.f.get('personCount').setValue(count);
}
