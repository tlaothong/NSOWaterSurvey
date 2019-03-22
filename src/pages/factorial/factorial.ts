import { SetWaterSourcesFactory,  SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample,  getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetFactorialCategory, SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-factorial',
  templateUrl: 'factorial.html',
})
export class FactorialPage {

  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];
  private submitRequested: boolean;
  FactoryForm: FormGroup;
  // private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.factory));
  private formData$ = this.store.select(getHouseHoldSample);
  // private formData: any
  private frontNum: any;
  private backNum: any;
  constructor(public navCtrl: NavController,private storage: Storage,public local: LocalStorageProvider,public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.FactoryForm = this.fb.group({
      'name': ['', Validators.required],
      'category': ['', Validators.required],
      'workersCount': ['', Validators.required],
      'heavyMachine': ['', Validators.required],
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
      'hasWasteWaterFromProduction': ['', Validators.required],
      'hasWasteWaterTreatment': [null],
      'wasteWaterReuse': ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactorialPage');
    this.countNumberPage();
    // this.formData$.subscribe(data => {
    //   if (data != null) {
    //     this.FactoryForm.setValue(data.factory);
    //     this.formData = data;
    //     console.log(data);
        
    //   }
    // });
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.waterSources8B.forEach(it => it.submitRequest());
    this.store.dispatch(new SetFactorialCategory(this.FactoryForm.get('category').value));
    // this.dispatchWaterSource();
    this.store.dispatch(new SetWaterSourcesFactory(this.FactoryForm.get('waterSources').value));
    console.log("waterFac", this.FactoryForm.get('waterSources').value);
    // this.formData.factory = this.FactoryForm.value
    if (this.FactoryForm.valid) {
      this.arrayIsCheckMethod();
      // this.store.dispatch(new SetHouseHold(this.formData));
      // this.storage.set('unit', this.formData)
      // let id = this.formData._id
      // this.storage.set(id, this.formData)
      // this.local.updateListUnit(this.formData.buildingId, this.formData)
      let originalHouseHold = this.appState.houseHoldUnit;
      let newHouseHold = {
        ...originalHouseHold,
        factory: this.FactoryForm.value,
      };
      this.store.dispatch(new SaveHouseHold(newHouseHold));
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
    this.store.dispatch(new SetSelectorIndex(11));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 11)) {
          arrayIsCheck.push(11);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  private dispatchWaterSource() {
    this.store.dispatch(new SetCheckWaterPlumbing(this.FactoryForm.get('waterSources.plumbing').value));
    this.store.dispatch(new SetCheckWaterRiver(this.FactoryForm.get('waterSources.river').value));
    this.store.dispatch(new SetCheckWaterIrrigation(this.FactoryForm.get('waterSources.irrigation').value));
    this.store.dispatch(new SetCheckWaterRain(this.FactoryForm.get('waterSources.rain').value));
    this.store.dispatch(new SetCheckWaterBuying(this.FactoryForm.get('waterSources.buying').value));
  }



  public isValid(name: string): boolean {
    var ctrl = this.FactoryForm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
