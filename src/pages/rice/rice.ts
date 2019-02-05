import { SetRicePlantSelectPlant, SetRiceDoing, SetWaterSources, SetAgiSelectRice, SetNextPageDirection, SetSelectorIndex } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FieldFarmingComponent } from '../../components/field-farming/field-farming';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getArraySkipPageAgiculture, getWaterSource, getCheckWaterPlumbing, getArraySkipPage, getArrayIsCheck, getSelectorIndex, getNextPageDirection, getDataOfUnit } from '../../states/household';
import { map } from 'rxjs/operators';
import { EX_RICH_LIST } from '../../models/tree';

@IonicPage()
@Component({
  selector: 'page-rice',
  templateUrl: 'rice.html',
})
export class RicePage {
  private submitRequested: boolean;
  f: FormGroup;
  // private formDataWater$ = this.store.select(getWaterSource).pipe(map(s => s));
  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private itAgi: any;
  private formCheckPlumbing$ = this.store.select(getCheckWaterPlumbing).pipe(map(s => s));
  private itPlumbing: any;
  private formDataG1_G4$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private itG1_G4: any;
  private frontNum: any;
  private backNum: any;
  // private itWater: any;
  @ViewChildren(FieldFarmingComponent) private fieldFarmings: FieldFarmingComponent[];
  public DataList = EX_RICH_LIST;
  private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture));
  private formData$: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields': this.fb.array([]),
    });
    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    this.countNumberPage();
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        this.formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.ricePlant));
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
    this.fieldFarmings.forEach(it => it.submitRequest());
    // this.fieldFarmings.forEach(it => this.store.dispatch(new SetWaterSources(it.FormItem.get('waterSources').value)));
    this.store.dispatch(new SetRicePlantSelectPlant(this.DataList));
    this.store.dispatch(new SetRiceDoing(this.f.get('doing').value));
    this.store.dispatch(new SetAgiSelectRice(true));
    // this.store.dispatch(new SetNextPageDirection(3));

    if (this.f.valid || (this.f.get('doing').value == false)) {
      // this.checkNextPage();
      this.arrayIsCheckMethod();
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
        if (arrayIsCheck.every(it => it != 2)) {
          arrayIsCheck.push(2);
        }
        console.log(arrayIsCheck);
      }
    });
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
    if (this.itAgi.agronomyPlant) {
      this.navCtrl.push("DryCropPlantingPage")
    }
    else if (this.itAgi.rubberTree) {
      this.navCtrl.push("RubberTreePage")
    }
    else if (this.itAgi.perennialPlant) {
      this.navCtrl.push("PerennialPlantingPage")
    }
    else if (this.itAgi.herbsPlant) {
      this.navCtrl.push("HerbsPlantPage")
    }
    else if (this.itAgi.flowerCrop) {
      this.navCtrl.push("FlowerCropPage")
    }
    else if (this.itAgi.mushroomPlant) {
      this.navCtrl.push("MushroomPage")
    }
    else if (this.itAgi.animalFarm) {
      this.navCtrl.push("AnimalFarmPage")
    }
    else if (this.itAgi.aquaticAnimals) {
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
        console.log("it: ", this.itPlumbing);
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

  private setupFieldCountChanges() {
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
