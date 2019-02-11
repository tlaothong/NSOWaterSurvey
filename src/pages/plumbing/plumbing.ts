import { getWaterSourcesResidential, getWaterSourcesAgiculture, getWaterSourcesFactory, getWaterSourcesCommercial, getWateringResidential, getArrayIsCheck,  getNextPageDirection, getDataOfUnit } from './../../states/household/index';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterProblem6Component } from '../../components/water-problem6/water-problem6';
import { WaterActivity5Component } from '../../components/water-activity5/water-activity5';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getResidentialGardeningUse, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetNextPageDirection, SetSelectorIndex, LoadHouseHoldSample } from '../../states/household/household.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getIdEsWorkHomes } from '../../states/logging';
import { subDistrictData } from '../../models/SubDistrictData';

@IonicPage()
@Component({
  selector: 'page-plumbing',
  templateUrl: 'plumbing.html',
})
export class PlumbingPage {

  @ViewChildren(WaterProblem6Component) private waterProblem6: WaterProblem6Component[];
  @ViewChildren(WaterActivity5Component) private waterActivity5: WaterActivity5Component[];

  public f: FormGroup;
  private submitRequested: boolean;

  private formDataUnit$ = this.store.select(getDataOfUnit)
  private formData$: any;

  private gardeningUse$ = this.store.select(getResidentialGardeningUse);
  public gardeningUse: boolean;
  private commerceUse$ = this.store.select(getIsCommercial);
  public commerceUse: boolean;
  private factoryUse$ = this.store.select(getIsFactorial);
  public factoryUse: boolean;
  private residenceUse$ = this.store.select(getIsHouseHold);
  public residenceUse: boolean;
  private agricultureUse$ = this.store.select(getIsAgriculture);
  public agricultureUse: boolean;
  private activityResidential$ = this.store.select(getWaterSourcesResidential);
  private activityResidential: any;
  private activityWateringRes$ = this.store.select(getWateringResidential);
  private activityWateringRes: any;
  private activityAgiculture$ = this.store.select(getWaterSourcesAgiculture);
  private activityAgiculture: any;
  private activityFactory$ = this.store.select(getWaterSourcesFactory);
  private activityFactory: any;
  private activityCommercial$ = this.store.select(getWaterSourcesCommercial);
  private activityCommercial: any;
  private getIdHomes$ = this.storeLog.select(getIdEsWorkHomes);
  private getIdHomes: any;

  public subDistrict: any;
  public MWA: boolean;
  public PWA: boolean;
  private frontNum: any;
  private backNum: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private storeLog: Store<LoggingState>) {
    this.f = this.fb.group({
      'mwa': this.fb.group({
        'doing': [null, Validators.required],
        'qualityProblem': this.fb.group({
          'hasProblem': [null, Validators.required],
          'problem': WaterProblem6Component.CreateFormGroup(fb),
        }),
        'plumbingUsage': this.fb.group({
          'waterQuantity': [null, Validators.required],
          'cubicMeterPerMonth': [null, Validators.required],
          'waterBill': [null, Validators.required]
        })
      }),
      'pwa': this.fb.group({
        'doing': [null, Validators.required],
        'qualityProblem': this.fb.group({
          'hasProblem': [null, Validators.required],
          'problem': WaterProblem6Component.CreateFormGroup(fb),
        }),
        'plumbingUsage': this.fb.group({
          'waterQuantity': [null, Validators.required],
          'cubicMeterPerMonth': [null, Validators.required],
          'waterBill': [null, Validators.required],
        })
      }),
      'other': this.fb.group({
        'doing': [null, Validators.required],
        'qualityProblem': this.fb.group({
          'hasProblem': [null, Validators.required],
          'problem': WaterProblem6Component.CreateFormGroup(fb),
        }),
        'plumbingUsage': this.fb.group({
          'waterQuantity': [null, Validators.required],
          'cubicMeterPerMonth': [null, Validators.required],
          'waterBill': [null, Validators.required],
        })
      }),
      'waterActivityMWA': WaterActivity5Component.CreateFormGroup(this.fb),
      'waterActivityPWA': WaterActivity5Component.CreateFormGroup(this.fb),
      'waterActivityOther': WaterActivity5Component.CreateFormGroup(this.fb),
      'hasWaterNotRunning': [null, Validators.required],
      'waterNotRunningCount': [null, Validators.required]
    });
  }

  ionViewDidLoad() {
    this.countNumberPage();
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        // this.formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.plumbing));
        this.formData$ = data;
        this.f.setValue(data.waterUsage.plumbing)
      }
    })

    this.gardeningUse$.subscribe(data => this.gardeningUse = data);
    this.commerceUse$.subscribe(data => this.commerceUse = data);
    this.factoryUse$.subscribe(data => this.factoryUse = data);
    this.residenceUse$.subscribe(data => this.residenceUse = data);
    this.agricultureUse$.subscribe(data => this.agricultureUse = data);
    this.activityResidential$.subscribe(data => {
      this.activityResidential = (data != null) ? data.plumbing : null;
    });
    this.activityWateringRes$.subscribe(data => {
      this.activityWateringRes = (data != null) ? data : null;
    });
    this.activityAgiculture$.subscribe(data => {
      this.activityAgiculture = (data != null) ? data : null;
    });
    this.activityFactory$.subscribe(data => {
      this.activityFactory = (data != null) ? data.plumbing : null;
    });
    this.activityCommercial$.subscribe(data => {
      this.activityCommercial = (data != null) ? data.plumbing : null;
    });
    this.changeValueActivity();
    this.getIdHomes$.subscribe(data => this.getIdHomes = data);
    this.subDistrict = subDistrictData.find(it => it.codeSubDistrict == this.getIdHomes);
    //1 103004 1000165

    this.MWA = this.subDistrict.MWA;
    this.PWA = this.subDistrict.PWA;
    console.log("Id", this.getIdHomes);
    // console.log("activityResidential", this.activityResidential);
    // console.log("activityWateringRes", this.activityWateringRes);
    // console.log("activityAgiculture", this.activityAgiculture);
    // console.log("activityFactory", this.activityFactory);
    // console.log("activityCommercial", this.activityCommercial);
  }

  changeValueActivity() {
    if (this.activityResidential == false) {
      this.activityResidential = null;
    }
    if (this.activityWateringRes == false) {
      this.activityWateringRes = null;
    }
    if (this.activityAgiculture == false) {
      this.activityAgiculture = null;
    }
    if (this.activityFactory == false) {
      this.activityFactory = null;
    }
    if (this.activityCommercial == false) {
      this.activityCommercial = null;
    }
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.waterProblem6.forEach(it => it.submitRequest());
    this.waterActivity5.forEach(it => it.submitRequest());
    console.log(this.f.get('mwa').value);
    this.formData$.waterUsage.plumbing = this.f.value
    if (this.f.valid
      || ((this.f.get('mwa').value.doing == false) && (!this.f.get('pwa').value.doing) && (this.f.get('other').value.doing == false))
      || ((!this.f.get('mwa').value.doing) && (this.f.get('pwa').value.doing == false) && (this.f.get('other').value.doing == false))
      || ((this.f.get('mwa').value.doing == false) && (this.f.get('pwa').value.doing == false) && (this.f.get('other').value.doing == false))) {
      // if (!this.waterActivity5.find(it => it.resultSum != 100)) {
      this.arrayIsCheckMethod();
      this.store.dispatch(new LoadHouseHoldSample(this.formData$));
      this.navCtrl.popTo("CheckListPage");
      // }
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
    this.store.dispatch(new SetSelectorIndex(13));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 13)) {
          arrayIsCheck.push(13);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
