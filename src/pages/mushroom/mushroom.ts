import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FieldMushroomComponent } from '../../components/field-mushroom/field-mushroom';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getArraySkipPageAgiculture, getWaterSource, getCheckWaterPlumbing, getArraySkipPage, getArrayIsCheck, getSelectorIndex, getNextPageDirection, getDataOfUnit } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetResidentialGardeningUse, SetWaterSources, SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying, SetNextPageDirection, SetSelectorIndex, LoadHouseHoldSample } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-mushroom',
  templateUrl: 'mushroom.html',
})
export class MushroomPage {
  public f: FormGroup;
  private submitRequested: boolean;
  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private itAgi: any;
  private formDataG1_G4$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private itG1_G4: any;
  private formCheckPlumbing$ = this.store.select(getCheckWaterPlumbing).pipe(map(s => s));
  private itPlumbing: any;
  private frontNum: any;
  private backNum: any;

  @ViewChildren(FieldMushroomComponent) private fieldMushroom: FieldMushroomComponent[];

  private formDataUnit$ = this.store.select(getDataOfUnit)
  private formData$: any;

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, private fb: FormBuilder) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields': this.fb.array([]),
    });

    this.setupPlantingCountChanges()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MushroomPage');
    this.countNumberPage();
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        // this.formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.mushroomPlant));
        this.formData$ = data
        this.f.patchValue(data.agriculture.mushroomPlant)
      }
    })
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldMushroom.forEach(it => it.submitRequest());
    this.fieldMushroom.forEach(it => this.store.dispatch(new SetWaterSources(it.FormItem.get('waterSources').value)));
    this.formData$.agriculture.mushroomPlant = this.f.value
    if (this.f.valid || (this.f.get('doing').value == false)) {
      this.arrayIsCheckMethod();
      this.store.dispatch(new LoadHouseHoldSample(this.formData$));
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
    console.log("back",this.backNum);

    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {

      if (data != null) {
        arrayIsCheck = data
         this.frontNum = arrayIsCheck.length;
      }

    });
    console.log("frontNum",this.frontNum);
  }
  
  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(8));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 8)) {
          arrayIsCheck.push(8);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupPlantingCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (this.f.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      fieldCount = Math.max(1, fieldCount);

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
