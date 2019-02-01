import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { WaterSources9Component } from '../../components/water-sources9/water-sources9';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getArraySkipPageAgiculture, getCheckWaterPlumbing, getArraySkipPage, getArrayIsCheck, getSelectorIndex, getNextPageDirection, getDataOfUnit } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetResidentialGardeningUse, SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying, SetNextPageDirection, SetSelectorIndex } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-animal-farm',
  templateUrl: 'animal-farm.html',
})
export class AnimalFarmPage {

  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private itAgi: any;
  private formDataG1_G4$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private itG1_G4: any;
  private formCheckPlumbing$ = this.store.select(getCheckWaterPlumbing).pipe(map(s => s));
  private itPlumbing: any;
  @ViewChildren(TableCheckItemCountComponent) private tableCheckItemCount: TableCheckItemCountComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];

  private submitRequested: boolean;
  public f: FormGroup;
  private formDataUnit$ = this.store.select(getDataOfUnit).pipe(map(s => s.agriculture));
  private formData$: any;
  private frontNum: any;
  private backNum: any;
  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, public alertCtrl: AlertController, public fb: FormBuilder) {
    this.f = this.fb.group({
      "doing": [null, Validators.required],
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
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalFarmPage');
    this.countNumberPage();
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        this.formData$ = this.store.select(getDataOfUnit).pipe(map(s => s.agriculture.animalFarm));
        this.formData$.subscribe(data => {
          if (data != null) {
            this.f.setValue(data)
          }
        });
      }
    })
  }


  public handleSubmit() {
    this.submitRequested = true;
    this.tableCheckItemCount.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.dispatchWaterSource();
    console.log("valid", this.f.valid);
    // this.store.dispatch(new SetNextPageDirection(10));

    // if (this.f.valid) {
    this.arrayIsCheckMethod();
    this.navCtrl.setRoot("CheckListPage");
    // this.checkNextPage();
    // }
  }

  countNumberPage() {
    console.log("onSubmit ");
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: any[];
    arrayNextPage$.subscribe(data => {

      if (data != null) {
        arrayNextPage = data;
        this.backNum = arrayNextPage.length;
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
    let selectorIndex$ = this.store.select(getSelectorIndex).pipe(map(s => s));
    let index: any;
    selectorIndex$.subscribe(data => {

      if (data != null) {
        index = data
        console.log("selectIndex: ", index);
      }
    });

    this.store.dispatch(new SetSelectorIndex(index + 1));
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
    if (this.f.get('waterSources.plumbing').value) {
      this.store.dispatch(new SetCheckWaterPlumbing(this.f.get('waterSources.plumbing').value));
    }
    if (this.f.get('waterSources.river').value) {
      this.store.dispatch(new SetCheckWaterRiver(this.f.get('waterSources.river').value));
    }
    if (this.f.get('waterSources.irrigation').value) {
      this.store.dispatch(new SetCheckWaterIrrigation(this.f.get('waterSources.irrigation').value));
    }
    if (this.f.get('waterSources.rain').value) {
      this.store.dispatch(new SetCheckWaterRain(this.f.get('waterSources.rain').value));
    }
    if (this.f.get('waterSources.buying').value) {
      this.store.dispatch(new SetCheckWaterBuying(this.f.get('waterSources.buying').value));
    }
    console.log("dispatch animalFarm can work");
  }

  private checkNextPage() {
    this.formDataG1_G4$.subscribe(data => {
      if (data != null) {
        this.itG1_G4 = data;
      }
      console.log("itG1_G4: ", this.itG1_G4);
    });
    this.formDatAgiculture$.subscribe(data => {
      if (data != null) {
        this.itAgi = data;
      }
      console.log("it: ", this.itAgi);
    });
    if (this.itAgi.aquaticAnimals) {
      this.navCtrl.push("WaterAnimalPlantingPage")
    }
    else if (this.itG1_G4.isFactorial) {
      this.navCtrl.push("FactorialPage")
    }
    else if (this.itG1_G4.isCommercial) {
      this.navCtrl.push("CommercialPage")
    }
    else {
      this.formCheckPlumbing$.subscribe(data => {
        if (data != null) {
          this.itPlumbing = data;
        }
        console.log("itPlumbing: ", this.itPlumbing);
      });
      if (this.itPlumbing) {
        this.navCtrl.push("PlumbingPage")
      }
      else {
        this.navCtrl.push("GroundWaterPage")
      }
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}    