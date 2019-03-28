import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { WaterSources9Component } from '../../components/water-sources9/water-sources9';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying, SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-animal-farm',
  templateUrl: 'animal-farm.html',
})
export class AnimalFarmPage {

  @ViewChildren(TableCheckItemCountComponent) private tableCheckItemCount: TableCheckItemCountComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];

  private submitRequested: boolean;
  public f: FormGroup;
  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture));
  private formData$ = this.store.select(getHouseHoldSample);
  // public dataAni: any;
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;

  constructor(public navCtrl: NavController, public local: LocalStorageProvider, private storage: Storage, private store: Store<HouseHoldState>, public navParams: NavParams, public alertCtrl: AlertController, public fb: FormBuilder, private appState: AppStateProvider) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'cow': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'buffalo': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'pig': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'goat': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'sheep': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'chicken': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'duck': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'goose': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'silkWool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'other': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'otherName': [null, Validators],
      'waterSources': WaterSources9Component.CreateFormGroup(this.fb)
    }, {
        validator: AnimalFarmPage.checkAnyOrOther()
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalFarmPage');
    this.countNumberPage();
    // this.formData$.subscribe(data => {
    //   if (data != null) {
    //     this.f.patchValue(data.agriculture.animalFarm)
    //     this.dataAni = data;
    //   }
    // })

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.tableCheckItemCount.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.isCheckWarningBox = this.f.valid || (this.f.get('doing').value == false);
    console.log(this.f);

    if (this.f.valid || (this.f.get('doing').value == false)) {

      this.arrayIsCheckMethod();
      let agri = {
        ...this.appState.houseHoldUnit.agriculture,
        animalFarm: this.f.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        agriculture: agri,
      };
      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  countNumberPage() {
    console.log("onSubmit ");
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: any[];
    arrayNextPage$.subscribe(data => {

      if (data != null) {
        arrayNextPage = data;
        let arrLength = arrayNextPage.filter((it) => it == true);
        this.backNum = arrLength.length;
      }

    });
    console.log("back", this.backNum);

    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {

      if (data != null) {
        arrayIsCheck = data
        this.frontNum = arrayIsCheck.length;
      }

    });
    console.log("frontNum", this.frontNum);
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(9));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 9)) {
    //       arrayIsCheck.push(9);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'otherName') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.otherName && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const cow = c.get('cow');
      const buffalo = c.get('buffalo');
      const pig = c.get('pig');
      const goat = c.get('goat');
      const sheep = c.get('sheep');
      const chicken = c.get('chicken');
      const duck = c.get('duck');
      const goose = c.get('goose');
      const silkWool = c.get('silkWool');
      const other = c.get('other');
      const otherName = c.get('otherName');
      console.log(cow.value.itemCount);
      console.log(otherName.value);


      if (!cow.value.itemCount && !buffalo.value.itemCount && !pig.value.itemCount && !goat.value.itemCount && !sheep.value.itemCount
        && !chicken.value.itemCount && !duck.value.itemCount && !goose.value.itemCount && !silkWool.value.itemCount && !other.value.itemCount) {
        return { 'anycheck': true };
      }
      if (other.value.hasItem && (otherName.value == null || otherName.value.trim() == '')) {
        return { 'otherName': true }
      }

      return null;
    }
  }
}    