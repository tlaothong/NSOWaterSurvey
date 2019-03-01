import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { WaterSources9Component } from '../../components/water-sources9/water-sources9';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying, SetSelectorIndex, LoadHouseHoldSample, SetHouseHold } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

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
  private formDataUnit$ = this.store.select(getHouseHoldSample);
  public dataAni: any;
  private frontNum: any;
  private backNum: any;

  constructor(public navCtrl: NavController, public local: LocalStorageProvider, private storage: Storage, private store: Store<HouseHoldState>, public navParams: NavParams, public alertCtrl: AlertController, public fb: FormBuilder) {
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
      // 'otherName': null,
      'waterSources': WaterSources9Component.CreateFormGroup(this.fb)
    }, {
        validator: AnimalFarmPage.checkAnyOrOther()
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalFarmPage');
    this.countNumberPage();
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        this.f.patchValue(data.agriculture.animalFarm)
        this.dataAni = data;
      }
    })
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.tableCheckItemCount.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    // this.dispatchWaterSource();
    this.dataAni.agriculture.animalFarm = this.f.value
    if (this.f.valid || (this.f.get('doing').value == false)) {
      this.arrayIsCheckMethod();
      // this.store.dispatch(new SetHouseHold(this.dataAni));
      // this.storage.set('unit', this.dataAni)
      let id = this.dataAni._id
      this.storage.set(id, this.dataAni)
      this.local.updateListUnit(this.dataAni.buildingId, this.dataAni)
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
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 9)) {
          arrayIsCheck.push(9);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  private dispatchWaterSource() {
    this.store.dispatch(new SetCheckWaterPlumbing(this.f.get('waterSources.plumbing').value));
    this.store.dispatch(new SetCheckWaterRiver(this.f.get('waterSources.river').value));
    this.store.dispatch(new SetCheckWaterIrrigation(this.f.get('waterSources.irrigation').value));
    this.store.dispatch(new SetCheckWaterRain(this.f.get('waterSources.rain').value));
    this.store.dispatch(new SetCheckWaterBuying(this.f.get('waterSources.buying').value));
    console.log("dispatch animalFarm can work");
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
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
      console.log(cow.value.itemCount);

      if (!cow.value.itemCount && !buffalo.value.itemCount && !pig.value.itemCount && !goat.value.itemCount && !sheep.value.itemCount
        && !chicken.value.itemCount && !duck.value.itemCount && !goose.value.itemCount && !silkWool.value.itemCount && !other.value.itemCount) {
        return { 'anycheck': true };
      }
      return null;
    }
  }
}    