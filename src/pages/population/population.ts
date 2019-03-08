import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TablePopulationComponent } from '../../components/table-population/table-population';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetSelectorIndex, LoadHouseHoldSample, SetHouseHold } from '../../states/household/household.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getIdEsWorkHomes } from '../../states/logging';
import { provinceData, Province } from '../../models/ProvinceData';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

@IonicPage()
@Component({
  selector: 'page-population',
  templateUrl: 'population.html',
})
export class PopulationPage {

  private submitRequested: boolean;
  public f: FormGroup;
  public whatever: any;
  private formData: any;
  private i:any
  // private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.population));
  private formData$ = this.store.select(getHouseHoldSample);
  public dataPop:any
  private getIdHomes$ = this.storeLog.select(getIdEsWorkHomes);
  public getIdHomes: any;
  public str: any;
  public pro: Province;
  public proName: any;
  public checkEnd: boolean;
  private frontNum: any;
  private backNum: any;

  @ViewChildren(TablePopulationComponent) private persons: TablePopulationComponent[];

  constructor(public navCtrl: NavController,private storage: Storage, public local: LocalStorageProvider, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private storeLog: Store<LoggingState>) {
    this.f = this.fb.group({
      'personCount': [null, Validators.required],
      'persons': this.fb.array([])
    }),
      this.setupPersonCountChanges();
  }

  ionViewDidLoad() {
    this.countNumberPage();
    this.formData$.subscribe(data => {
      if (data != null) {
        this.f.patchValue(data.population)
        this.dataPop = data;
      }
    });

    this.getIdHomes$.subscribe(data => this.str = data);

    this.getIdHomes = this.str.substring(0, 2); //10
    this.pro = provinceData.find(it => it.codeProvince == this.getIdHomes);
    this.proName = this.pro.name;
    this.i = this.navParams.get('i');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.persons.forEach(it => it.submitRequest());
    this.dataPop.population = this.f.value
    this.dataPop.status = "complete"
    if (this.f.valid && this.isCheckHaveHeadfamily()) {
      this.arrayIsCheckMethod();
      // this.store.dispatch(new SetHouseHold(this.dataPop)); 
      console.log(this.dataPop);
      // this.storage.set('unit', this.dataPop)  
      let id = this.dataPop._id
      this.storage.set(id, this.dataPop)
      this.local.updateListUnit(this.dataPop.buildingId,this.dataPop)
      this.navCtrl.setRoot("UnitPage");
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
    this.store.dispatch(new SetSelectorIndex(22));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 22)) {
          arrayIsCheck.push(22);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  public isCheckHaveHeadfamily(): boolean {
    if (this.submitRequested == true) {
      let persons = this.f.get('persons') as FormArray;
      for (let i = 0; i < persons.length; i++) {
        if (persons.at(i).get('relationship').value == "1") return true;
      }
      return false;
    }
    return true;
  }

  public isValid(name: string): boolean {
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
}
