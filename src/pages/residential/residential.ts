import { CountComponent } from './../../components/count/count';
import { SetSelectorIndex, SaveHouseHold } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-residential',
  templateUrl: 'residential.html',
})
export class ResidentialPage {

  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  public residentialFrm: FormGroup;
  private submitRequested: boolean;
  // private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.residence));
  private formData$ = this.store.select(getHouseHoldSample);
  private frontNum: any;
  private backNum: any;
  public checked: boolean;
  private isCheckWarningBox: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.residentialFrm = this.fb.group({
      'memberCount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required, Validators.min(1)])],
      'workingAge': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
      'gardeningUse': [null, Validators.required],
    });
  }

  ionViewDidLoad() {
    
  }

  check(): boolean {
    if (Number(this.residentialFrm.get('workingAge').value) > Number(this.residentialFrm.get('memberCount').value)) {
      return this.checked = true
    }
    return this.checked = false
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.waterSources8B.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
  
    this.isCheckWarningBox = this.residentialFrm.valid && !(this.check());
    if (this.residentialFrm.valid && !(this.check())) {
      this.arrayIsCheckMethod();
      let originalHouseHold = this.appState.houseHoldUnit;
      let newHouseHold = {
        ...originalHouseHold,
        residence: this.residentialFrm.value,
      };
    
      this.store.dispatch(new SaveHouseHold(newHouseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(0));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 0)) {
    //       arrayIsCheck.push(0);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public isValid(name: string): boolean {
    var ctrl = this.residentialFrm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
