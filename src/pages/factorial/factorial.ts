import { SetWaterSourcesFactory, SetSelectorIndex, SaveHouseHold } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { SetFactorialCategory } from '../../states/household/household.actions';
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
  private formData$ = this.store.select(getHouseHoldSample);
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, 
    private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.FactoryForm = this.fb.group({
      'name': ['', Validators.required],
      'category': ['', Validators.required],
      'workersCount': ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'heavyMachine': ['', Validators.required],
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
      'hasWasteWaterFromProduction': ['', Validators.required],
      'hasWasteWaterTreatment': [null, Validators.required],
      'wasteWaterReuse': ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactorialPage');
    
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.waterSources8B.forEach(it => it.submitRequest());
    this.store.dispatch(new SetFactorialCategory(this.FactoryForm.get('category').value));
    this.store.dispatch(new SetWaterSourcesFactory(this.FactoryForm.get('waterSources').value));
    console.log("waterFac", this.FactoryForm.get('waterSources').value);
    this.isCheckWarningBox = this.FactoryForm.valid;
    if (this.FactoryForm.valid) {
      this.arrayIsCheckMethod();
      let originalHouseHold = this.appState.houseHoldUnit;
      let newHouseHold = {
        ...originalHouseHold,
        factory: this.FactoryForm.value,
      };
      this.store.dispatch(new SaveHouseHold(newHouseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(11));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 11)) {
    //       arrayIsCheck.push(11);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public setValueNull() {
    this.FactoryForm.get('hasWasteWaterTreatment').setValue(null);
  }
  public setValueFalse() {
    this.FactoryForm.get('hasWasteWaterTreatment').setValue(false);
  }

  public isValid(name: string): boolean {
    var ctrl = this.FactoryForm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
