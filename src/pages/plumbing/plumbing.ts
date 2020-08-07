import { getWaterSourcesResidential, getWaterSourcesAgiculture, getWaterSourcesFactory, getWaterSourcesCommercial, getWateringResidential } from './../../states/household/index';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterProblem6Component } from '../../components/water-problem6/water-problem6';
import { WaterActivity5Component } from '../../components/water-activity5/water-activity5';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getResidentialGardeningUse, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture } from '../../states/household';
import { SetSelectorIndex, SaveHouseHold } from '../../states/household/household.actions';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { Observable } from 'rxjs';
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
  private formData$ = this.store.select(getHouseHoldSample);
  private gardeningUse$ = this.store.select(getResidentialGardeningUse);
  private commerceUse$ = this.store.select(getIsCommercial);
  private factoryUse$ = this.store.select(getIsFactorial);
  private residenceUse$ = this.store.select(getIsHouseHold);
  private agricultureUse$ = this.store.select(getIsAgriculture);
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
  private getIdHomes: any;

  public subDistrict: any;
  public MWA: boolean;
  public PWA: boolean;
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.f = this.fb.group({
      'mwa': this.fb.group({
        'doing': [null, Validators.required],
        'qualityProblem': this.fb.group({
          'hasProblem': [null, Validators.required],
          'problem': WaterProblem6Component.CreateFormGroup(fb),
        }),
        'plumbingUsage': this.fb.group({
          'waterQuantity': [null, Validators.required],
          'cubicMeterPerMonth': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
          'waterBill': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])]
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
          'cubicMeterPerMonth': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
          'waterBill': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
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
          'cubicMeterPerMonth': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
          'waterBill': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
        })
      }),
      'waterActivityMWA': WaterActivity5Component.CreateFormGroup(this.fb),
      'waterActivityPWA': WaterActivity5Component.CreateFormGroup(this.fb),
      'waterActivityOther': WaterActivity5Component.CreateFormGroup(this.fb),
      'hasWaterNotRunning': [null, Validators.required],
      'waterNotRunningCount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required, Validators.min(1), Validators.max(12)])]
    });
  }

  ionViewDidLoad() {
    Observable.combineLatest(
      this.activityResidential$,
      this.activityWateringRes$,
      this.activityAgiculture$,
      this.activityFactory$,
      this.activityCommercial$,
      this.formData$
    ).map(([res, garden, agri, fac, commerce, hh]) => {
      return {
        residential: res ? res.plumbing : null,
        gardening: garden ? garden : null,
        agriculture: agri ? agri.plumbing : null,
        factorial: fac ? fac.plumbing : null,
        commercial: commerce ? commerce.plumbing : null,
        subUnit: hh.subUnit,
      };
    }).take(1).subscribe(it => {
      this.activityResidential = it.residential;
      this.activityWateringRes = it.gardening;
      this.activityAgiculture = it.agriculture;
      this.activityFactory = it.factorial;
      this.activityCommercial = it.commercial;

      var cwtamptam = this.appState.eaCode.substr(1, 6);
      console.log(cwtamptam);
      this.subDistrict = subDistrictData.find(it => it.codeSubDistrict == cwtamptam);
      this.MWA = this.subDistrict && this.subDistrict.MWA;
      this.PWA = this.subDistrict && this.subDistrict.PWA;

      const subUnit = it.subUnit;
      if (subUnit && subUnit.hasPlumbingMeter == false) {
        const pwa = this.f.get('pwa.plumbingUsage.waterQuantity');
        const mwa = this.f.get('mwa.plumbingUsage.waterQuantity');
        const owa = this.f.get('other.plumbingUsage.waterQuantity');

        if (this.PWA)
          pwa.setValue(3);
        if (this.MWA)
          mwa.setValue(3);

        owa.setValue(3);
      }

      this.changeValueActivity();
    });
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
    this.isCheckWarningBox = (!this.MWA || this.isCheckValid('mwa')) && (!this.PWA || this.isCheckValid('pwa')) && this.isCheckValid('other');

    if ((!this.MWA || this.isCheckValid('mwa')) && (!this.PWA || this.isCheckValid('pwa')) && this.isCheckValid('other')) {
      this.arrayIsCheckMethod();

      let water = {
        ...this.appState.houseHoldUnit.waterUsage,
        plumbing: this.f.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        waterUsage: water,
      };

      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  isCheckValid(name: string): boolean {
    let ctrl = this.f.get(name);
    let isCheck = true;
    let isCheckProblem = true;
    let isCheckQuantity = true;
    let isCheckNotRunning = true;
    let hundred = !this.waterActivity5.some(it => it.isCheck == false);
    console.log("isCheckValidComponent", hundred);

    if (ctrl.value.doing) {
      isCheck = (ctrl.value.qualityProblem.hasProblem != null)
        && (ctrl.value.plumbingUsage.waterQuantity > 0)
        && (this.f.get('hasWaterNotRunning').value != null);
      if (ctrl.value.qualityProblem.hasProblem) {
        isCheckProblem = this.f.get(name + '.qualityProblem.problem').valid;
      }
      switch (ctrl.value.plumbingUsage.waterQuantity) {
        case "1":
          isCheckQuantity = (ctrl.value.plumbingUsage.cubicMeterPerMonth != null)
          break;
        case "2":
          isCheckQuantity = (ctrl.value.plumbingUsage.waterBill != null)
          break;
        default:
          break;
      }
      if (this.f.get('hasWaterNotRunning').value) {
        isCheckNotRunning = this.f.get('waterNotRunningCount').valid
      }
      return isCheck && isCheckProblem && isCheckQuantity && isCheckNotRunning && hundred;
    }
    else {
      return this.f.get(name + '.doing').valid;
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(13));
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
