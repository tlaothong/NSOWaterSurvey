import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { PumpComponent } from '../../components/pump/pump';
import { WaterActivity6Component } from '../../components/water-activity6/water-activity6';
import { WaterProblem4Component } from '../../components/water-problem4/water-problem4';
import { getHouseHoldSample, getResidentialGardeningUse, getRiceDoing, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture, getWaterSourcesResidential, getWateringResidential, getWaterSourcesRice, getWaterSourcesAgiculture, getWaterSourcesFactory, getWaterSourcesCommercial, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { CountComponent } from '../../components/count/count';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-irrigation',
  templateUrl: 'irrigation.html',
})
export class IrrigationPage {

  private submitRequested: boolean;
  f: FormGroup;
  public G: boolean = false;
  @ViewChildren(PumpComponent) private pump: PumpComponent[];
  @ViewChildren(WaterActivity6Component) private waterActivity6: WaterActivity6Component[];
  @ViewChildren(WaterProblem4Component) private waterProblem4: WaterProblem4Component[];
  @ViewChildren(CountComponent) private count: CountComponent[];

  private formData$ = this.store.select(getHouseHoldSample);
  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage));
  // private formData: any;
  private gardeningUse$ = this.store.select(getResidentialGardeningUse);
  public gardeningUse: boolean;
  private riceDoing$ = this.store.select(getRiceDoing);
  public riceDoing: boolean;
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
  private activityRice$ = this.store.select(getWaterSourcesRice);
  private activityRice: any;
  private activityAgiculture$ = this.store.select(getWaterSourcesAgiculture);
  private activityAgiculture: any;
  private activityFactory$ = this.store.select(getWaterSourcesFactory);
  private activityFactory: any;
  private activityCommercial$ = this.store.select(getWaterSourcesCommercial);
  private activityCommercial: any;
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage, public local: LocalStorageProvider, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {

    this.f = this.fb.group({
      'hasCubicMeterPerMonth': [null, Validators],
      'cubicMeterPerMonth': [null, Validators.compose([Validators.pattern('[0-9]*')])],
      'hasPump': [null, Validators],
      'pumpCount': [null, Validators],
      'pumps': this.fb.array([]),
      'waterActivities': WaterActivity6Component.CreateFormGroup(fb),
      'qualityProblem': WaterProblem4Component.CreateFormGroup(fb)
    }, {
        validator: IrrigationPage.checkAnyOrOther()
      });
    this.setupPumpCountChanges()
  }

  ionViewDidLoad() {
    this.countNumberPage();
    this.gardeningUse$.subscribe(data => this.gardeningUse = data);
    this.riceDoing$.subscribe(data => this.riceDoing = data);
    this.commerceUse$.subscribe(data => this.commerceUse = data);
    this.factoryUse$.subscribe(data => this.factoryUse = data);
    this.residenceUse$.subscribe(data => this.residenceUse = data);
    this.agricultureUse$.subscribe(data => this.agricultureUse = data);
    this.activityResidential$.subscribe(data => {
      this.activityResidential = (data != null) ? data.irrigation : null;
    });
    this.activityWateringRes$.subscribe(data => {
      this.activityWateringRes = (data != null && this.activityResidential) ? data : null;
    });
    this.activityRice$.subscribe(data => {
      this.activityRice = (data != null) ? data.irrigation : null;
    });
    this.activityAgiculture$.subscribe(data => {
      this.activityAgiculture = (data != null) ? data.irrigation : null;
    });
    this.activityFactory$.subscribe(data => {
      this.activityFactory = (data != null) ? data.irrigation : null;
    });
    this.activityCommercial$.subscribe(data => {
      this.activityCommercial = (data != null) ? data.irrigation : null;
    });
    this.changeValueActivity();
    console.log("activityResidential", this.activityResidential);
    console.log("activityWateringRes", this.activityWateringRes);
    console.log("activityRice", this.activityRice);
    console.log("activityAgiculture", this.activityAgiculture);
    console.log("activityFactory", this.activityFactory);
    console.log("activityCommercial", this.activityCommercial);
  }

  changeValueActivity() {
    if (this.activityResidential == false) {
      this.activityResidential = null;
    }
    if (this.activityWateringRes == false) {
      this.activityWateringRes = null;
    }
    if (this.activityRice == false) {
      this.activityRice = null;
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
    this.pump.forEach(it => it.submitRequest());
    this.waterActivity6.forEach(it => it.submitRequest());
    this.waterProblem4.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
    this.isCheckWarningBox = (this.f.valid && !this.waterActivity6.some(it => it.isCheck == false));
   
    if (this.f.valid && !this.waterActivity6.some(it => it.isCheck == false)) {
      this.arrayIsCheckMethod();
      let irri = {
        ...this.appState.houseHoldUnit.waterUsage,
        irrigation: this.f.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        waterUsage: irri,
      }
      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const hasCubicMeterPerMonth = c.get('hasCubicMeterPerMonth');
      const cubicMeterPerMonth = c.get('cubicMeterPerMonth');
      const hasPump = c.get('hasPump');
      const pumpCount = c.get('pumpCount');
      const hasProblem = c.get('qualityProblem.hasProblem');

      if (hasCubicMeterPerMonth.value == null) {
        return { 'hasCubicMeterPerMonth': true };
      }
      if ((hasCubicMeterPerMonth.value == true)
        && ((cubicMeterPerMonth.value == null)
          || (cubicMeterPerMonth.value <= 0))) {
        return { 'cubicMeterPerMonth': true };
      }
      if ((hasCubicMeterPerMonth.value == false) && (hasPump.value == null)) {
        return { 'hasPump': true };
      }
      if ((hasPump.value == true) && ((pumpCount.value == null) || (pumpCount.value < 1))) {
        return { 'pumpCount': true };
      }
      if (hasProblem.value == null) {
        return { 'hasProblem': true };
      }
      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'hasCubicMeterPerMonth') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.hasCubicMeterPerMonth && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'cubicMeterPerMonth') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.cubicMeterPerMonth && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hasPump') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.hasPump && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'pumpCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.pumpCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hasProblem') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.hasProblem && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
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
    this.store.dispatch(new SetSelectorIndex(17));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 17)) {
          arrayIsCheck.push(17);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  private setupPumpCountChanges() {
    const componentFormArray: string = "pumps";
    const componentCount: string = "pumpCount";

    var onComponentCountChanges = () => {
      var pump = (this.f.get(componentFormArray) as FormArray).controls || [];
      var pumpCount = this.f.get(componentCount).value || 0;
      var p = this.fb.array([]);

      pumpCount = Math.max(0, pumpCount);

      for (let i = 0; i < pumpCount; i++) {
        var ctrl = null;
        if (i < pump.length) {
          const fld = pump[i];
          ctrl = fld;
        } else {
          ctrl = PumpComponent.CreateFormGroup(this.fb);
        }

        p.push(ctrl);
      }
      this.f.setControl(componentFormArray, p);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
