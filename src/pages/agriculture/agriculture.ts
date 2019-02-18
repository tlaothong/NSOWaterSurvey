import { SetAgiSelectRice, SetAgiSelectAgronomy, SetAgiSelectRubber, SetAgiSelectPerennial, SetArraySkipPageAgiculture, SetSelectorIndex, } from './../../states/household/household.actions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { map } from 'rxjs/operators';
import { getArraySkipPageAgiculture, getArrayIsCheck, getNextPageDirection, getHouseHoldSample } from '../../states/household';

@IonicPage()
@Component({
  selector: 'page-agriculture',
  templateUrl: 'agriculture.html',
})
export class AgriculturePage {
  private submitRequested: boolean;
  public f: FormGroup;
  // private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture));
  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private frontNum: any;
  private backNum: any;
  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public fb: FormBuilder, public navParams: NavParams) {
    this.f = this.fb.group({
      "ricePlant": this.fb.group({
        'doing': [false, Validators.required],
      }),
      'agronomyPlant': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'rubberTree': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'perennialPlant': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'herbsPlant': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'flowerCrop': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'mushroomPlant': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'animalFarm': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'aquaticAnimals': this.fb.group({
        'doing': [false, Validators.required],
      }),
    }, {
        validator: AgriculturePage.checkAnyOrOther()
      });
  }



  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {

      const ricePlant = c.get('ricePlant');
      const agronomyPlant = c.get('agronomyPlant');
      const rubberTree = c.get('rubberTree');
      const perennialPlant = c.get('perennialPlant');
      const herbsPlant = c.get('herbsPlant');
      const flowerCrop = c.get('flowerCrop');
      const mushroomPlant = c.get('mushroomPlant');
      const animalFarm = c.get('animalFarm');
      const aquaticAnimals = c.get('aquaticAnimals');

      if (!ricePlant.value && !agronomyPlant.value && !rubberTree.value && !perennialPlant.value && !herbsPlant.value && !flowerCrop.value && !mushroomPlant.value
        && !animalFarm.value && !aquaticAnimals.value) {
        return { 'anycheck': true };
      }
      return null;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgriculturePage');
    this.countNumberPage();
    this.formDatAgiculture$.subscribe(data => {
      if (data != null) {
        console.log("data agi", data);

        this.f.get('ricePlant.doing').setValue(data.ricePlant);
        this.f.get('agronomyPlant.doing').setValue(data.agronomyPlant);
        this.f.get('rubberTree.doing').setValue(data.rubberTree);
        this.f.get('perennialPlant.doing').setValue(data.perennialPlant);
        this.f.get('herbsPlant.doing').setValue(data.herbsPlant);
        this.f.get('flowerCrop.doing').setValue(data.flowerCrop);
        this.f.get('mushroomPlant.doing').setValue(data.mushroomPlant);
        this.f.get('animalFarm.doing').setValue(data.animalFarm);
        this.f.get('aquaticAnimals.doing').setValue(data.aquaticAnimals);
      }
    });
  }

  public handleSubmit() {
    this.submitRequested = true;
    console.log(this.submitRequested);


    if (!this.isValid('anycheck')) {
      this.store.dispatch(new SetArraySkipPageAgiculture(this.f.value));

      this.arrayIsCheckMethod();
      this.navCtrl.popTo("CheckListPage");
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(1));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;

        if (arrayIsCheck.every(it => it != 1)) {
          arrayIsCheck.push(1);
        }

        console.log(arrayIsCheck);
      }
    });
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

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'anycheck') {
      ctrl = this.f;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
