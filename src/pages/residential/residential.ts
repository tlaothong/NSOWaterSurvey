import { getArrayIsCheck, getNextPageDirection, getResidentialGardeningUse } from './../../states/household/index';
import { SetWaterSourcesResidential, SetSelectorIndex, LoadHouseHoldSample } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetResidentialGardeningUse, SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying, SetWateringResidential } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-residential',
  templateUrl: 'residential.html',
})
export class ResidentialPage {

  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];
  public residentialFrm: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.residence));
  private frontNum: any;
  private backNum: any;
  public data: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.residentialFrm = this.fb.group({
      'memberCount': [null, Validators.required],
      'workingAge': [null, Validators.required],
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
      'gardeningUse': [null, Validators.required],
    });
  }

  ionViewDidLoad() {
    this.countNumberPage();
    this.formData$.subscribe(data => {
      if (data != null) {
        this.residentialFrm.setValue(data)
      }
    });
  // let  formDataPilot$ = this.store.select(getResidentialGardeningUse).subscribe(data => this.residentialFrm.get('gardeningUse').setValue(data));

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.waterSources8B.forEach(it => it.submitRequest());
    this.store.dispatch(new SetResidentialGardeningUse(this.residentialFrm.get('gardeningUse').value));
    // (this.residentialFrm.get('waterSources.underGround').value),
    // (this.residentialFrm.get('waterSources.river').value),
    // (this.residentialFrm.get('waterSources.pool').value),
    // (this.residentialFrm.get('waterSources.irrigation').value),
    // (this.residentialFrm.get('waterSources.rain').value),
    // (this.residentialFrm.get('waterSources.buying').value)]));
    
    this.store.dispatch(new SetWaterSourcesResidential(this.residentialFrm.get('waterSources').value));

    console.log("gardeningUse", this.residentialFrm.get('gardeningUse').value);
    console.log("waterRes", this.residentialFrm.get('waterSources').value);
    // this.store.dispatch(new SetNextPageDirection(1));
    // this.checkNextPageWaterSounces();
    if (this.residentialFrm.valid) {
      this.arrayIsCheckMethod();
      this.dispatchWaterSource();
      // this.store.dispatch(new LoadHouseHoldSample(this.residentialFrm));
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
    this.store.dispatch(new SetSelectorIndex(0));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 0)) {
          arrayIsCheck.push(0);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  private dispatchWaterSource() {
    this.store.dispatch(new SetCheckWaterPlumbing(this.residentialFrm.get('waterSources.plumbing').value));
    this.store.dispatch(new SetCheckWaterRiver(this.residentialFrm.get('waterSources.river').value));
    this.store.dispatch(new SetCheckWaterIrrigation(this.residentialFrm.get('waterSources.irrigation').value));
    this.store.dispatch(new SetCheckWaterRain(this.residentialFrm.get('waterSources.rain').value));
    this.store.dispatch(new SetCheckWaterBuying(this.residentialFrm.get('waterSources.buying').value));
    this.store.dispatch(new SetWateringResidential(this.residentialFrm.get('gardeningUse').value));
  }

  public isValid(name: string): boolean {
    var ctrl = this.residentialFrm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
