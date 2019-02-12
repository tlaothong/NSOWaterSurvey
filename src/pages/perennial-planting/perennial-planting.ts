import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FieldPerenialPlantingComponent } from '../../components/field-perenial-planting/field-perenial-planting';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getArrayIsCheck, getNextPageDirection, getDataOfUnit } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetPerennialPlantSelectPlant, SetAgiSelectPerennial, SetSelectorIndex, LoadHouseHoldSample } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-perennial-planting',
  templateUrl: 'perennial-planting.html',
})
export class PerennialPlantingPage {

  public PerennialPlantingFrm: FormGroup;
  private submitRequested: boolean;
  private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture));
  private formData$: any;
  private frontNum: any;
  private backNum: any;
  @ViewChildren(FieldPerenialPlantingComponent) private fieldPerenialPlanting: FieldPerenialPlantingComponent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    this.PerennialPlantingFrm = this.fb.group({
      "doing": [null, Validators.required],
      "fieldCount": [null, Validators.required],
      "fields": fb.array([]),
    });
    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    this.countNumberPage();
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        this.formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.perennialPlant));
        this.formData$.subscribe(data => {
          if (data != null) {
            this.PerennialPlantingFrm.patchValue(data)
          }
        });
      }
    })
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldPerenialPlanting.forEach(it => it.submitRequest());
    console.log(this.PerennialPlantingFrm.value);
    let fields = this.PerennialPlantingFrm.get('fields').value as Array<any>;
    let selectedMap = new Map<string, any>();
    fields.forEach(f => {
      if (f.plantings && f.plantings.plants) {
        f.plantings.plants.forEach(p => selectedMap.set(p.code, p));
      }
    });
    let selected = [];
    selectedMap.forEach(v => selected.push(v));
    this.store.dispatch(new SetPerennialPlantSelectPlant(selected));
    this.store.dispatch(new SetAgiSelectPerennial(true));
    // if (this.PerennialPlantingFrm.valid || (this.PerennialPlantingFrm.get('doing').value == false))  {
      this.arrayIsCheckMethod();
      // this.store.dispatch(new LoadHouseHoldSample(this.PerennialPlantingFrm));
      this.navCtrl.popTo("CheckListPage");
    // }
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
    this.store.dispatch(new SetSelectorIndex(5));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 5)) {
          arrayIsCheck.push(5);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.PerennialPlantingFrm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldPerenial = (this.PerennialPlantingFrm.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.PerennialPlantingFrm.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldPerenial.length) {
          const fld = fieldPerenial[i];
          ctrl = fld;
        } else {
          ctrl = FieldPerenialPlantingComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.PerennialPlantingFrm.setControl(componentFormArray, field);
    };

    this.PerennialPlantingFrm.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
