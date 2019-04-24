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
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;

  @ViewChildren(TablePopulationComponent) private persons: TablePopulationComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage,
    public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider, public alertController: AlertController) {
    this.f = PopulationPage.CreateFormGroup(this.fb);
    this.setupPersonCountChanges();
    console.log(this.getMemberCount$);
    this.getMember();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'personCount': [0, [Validators.required, Validators.min(1)]],
      'persons': fb.array([])
    }, {
        validator: PopulationPage.checkAnyOrOther()
      });
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const persons = c.get('persons') as FormArray;

      let headFamily = 0;
      for (let i = 0; i < persons.length; i++) {
        if (persons.at(i).get('relationship').value == "1") headFamily++;
      };

      if (headFamily == 0) {
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
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(21));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 21)) {
    //       arrayIsCheck.push(21);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public isValid(name: string): boolean {
    if (name == 'headFamily') {
      var ctrls = this.f;
      return ctrls.errors && ctrls.errors.headFamily && (ctrls.dirty || this.submitRequested);
    }
    var ctrl = this.f.get(name);
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
