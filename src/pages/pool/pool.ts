import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { PoolAreaComponent } from '../../components/pool-area/pool-area';
import { PoolUsageComponent } from '../../components/pool-usage/pool-usage';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getResidentialGardeningUse, getRiceDoing, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture, getWaterSourcesResidential, getWateringResidential, getWaterSourcesRice, getWaterSourcesAgiculture, getWaterSourcesFactory, getWaterSourcesCommercial, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { CountComponent } from '../../components/count/count';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-pool',
  templateUrl: 'pool.html',
})
export class PoolPage {

  public f: FormGroup;
  @ViewChildren(PoolAreaComponent) private poolArea: PoolAreaComponent[];
  @ViewChildren(PoolUsageComponent) private poolUsage: PoolUsageComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  private submitRequested: boolean;
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
  public checked: boolean
  public checkIsPool: boolean = true;
  public isCheckWarningBox: boolean;

  public static checkActivityResidential: any;
  public static checkActivityWateringRes: any;
  public static checkActivityRice: any;
  public static checkActivityAgiculture: any;
  public static checkActivityFactory: any;
  public static checkActivityCommercial: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage, public local: LocalStorageProvider, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'poolCount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'hasSameSize': [true, Validators.required],
      'poolSizes': this.fb.array([]),
      'waterResourceCount': [null, Validators.required],
      'waterResources': this.fb.array([]),
    }, {
        validator: PoolPage.checkAnyOrOther()
      });
    this.setupPoolCountChanges();
    this.setupPoolCountUsageChanges();
  }

  ionViewDidLoad() {
    this.gardeningUse$.subscribe(data => this.gardeningUse = data);
    this.riceDoing$.subscribe(data => this.riceDoing = data);
    this.commerceUse$.subscribe(data => this.commerceUse = data);
    this.factoryUse$.subscribe(data => this.factoryUse = data);
    this.residenceUse$.subscribe(data => this.residenceUse = data);
    this.agricultureUse$.subscribe(data => this.agricultureUse = data);
    this.activityResidential$.subscribe(data => {
      this.activityResidential = (data != null) ? data.pool : null;
    });
    this.activityWateringRes$.subscribe(data => {
      this.activityWateringRes = (data != null && this.activityResidential) ? data : null;
    });
    this.activityRice$.subscribe(data => {
      this.activityRice = (data != null) ? data.pool : null;
    });
    this.activityAgiculture$.subscribe(data => {
      this.activityAgiculture = (data != null) ? data.pool : null;
    });
    this.activityFactory$.subscribe(data => {
      this.activityFactory = (data != null) ? data.pool : null;
    });
    this.activityCommercial$.subscribe(data => {
      this.activityCommercial = (data != null) ? data.pool : null;
    });
    this.changeValueActivity();
    PoolPage.checkActivityResidential = this.activityResidential;
    PoolPage.checkActivityWateringRes = this.activityWateringRes;
    PoolPage.checkActivityRice = this.activityRice;
    PoolPage.checkActivityAgiculture = this.activityAgiculture;
    PoolPage.checkActivityFactory = this.activityFactory;
    PoolPage.checkActivityCommercial = this.activityCommercial;

    console.log("activityResidential", this.activityResidential);
    console.log("activityWateringRes", this.activityWateringRes);
    console.log("activityRice", this.activityRice);
    console.log("activityAgiculture", this.activityAgiculture);
    console.log("activityFactory", this.activityFactory);
    console.log("activityCommercial", this.activityCommercial);
  }

  check(): boolean {
    if (Number(this.f.get('waterResourceCount').value) > Number(this.f.get('poolCount').value)) {
      return this.checked = true
    }
    return this.checked = false
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.poolUsage.forEach(it => it.submitRequest());
    this.poolArea.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());

    if (this.f.get('hasSameSize').value) {
      let val = this.f.get('poolSizes').value
      for (let index = 1; index < val.length; index++) {
        val[index] = val[0]
      }
      this.f.get('poolSizes').setValue(val)
    }
    this.isCheckWarningBox = this.checkValid();
    let isCheckPoolUsage = !this.poolUsage.some(it => it.checkValid() == false);
    if (this.checkValid()) {
      this.arrayIsCheckMethod();
      let water = {
        ...this.appState.houseHoldUnit.waterUsage,
        pool: this.f.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        waterUsage: water,
      };
      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  public checkValid(): boolean {
    // return this.f.get('doing').value ? (this.isCheckPool() && this.isCheckWaterResources()) : false;
    if (this.f.get('doing').valid == true) {
      if (this.f.get('doing').value) {
        return this.isCheckPool() && this.isCheckWaterResources()
      }
      if (!this.f.get('doing').value && !this.isCheckActivity()) {
        return true
      }
      return false;
    }
    return false;
  }

  public isCheckPool(): boolean {
    let isCheckPoolArea = this.poolArea.find(it => it.FormItem.invalid) ? false : true;
    return this.f.get('poolCount').valid && isCheckPoolArea;
  }

  public isCheckWaterResources(): boolean {
    // let isCheckPoolUsage = this.poolUsage.find(it => !it.checkValid()) ? false : true;
    let isCheckPoolUsage = !this.poolUsage.some(it => it.checkValid() == false);;
    let isCheckWaterResourceCount = this.isCheckActivity() ? this.f.get('waterResourceCount').value > 0 : this.f.get('waterResourceCount').valid;
    return this.f.get('waterResourceCount').value <= this.f.get('poolCount').value && isCheckPoolUsage && isCheckWaterResourceCount;
  }

  public isCheckActivity(): boolean {
    return (this.activityResidential || this.activityWateringRes || this.activityRice || this.activityAgiculture || this.activityFactory || this.activityCommercial) ? true : false;
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const doing = c.get('doing');
      const poolCount = c.get('poolCount');
      const hasSameSize = c.get('hasSameSize');
      const waterResourceCount = c.get('waterResourceCount');

      if (doing.value == null) {
        return { 'doing': true };
      }
      if ((doing.value == true) && ((poolCount.value == null) || (poolCount.value <= 0))) {
        return { 'poolCount': true };
      }
      if ((doing.value == true) && (hasSameSize.value == null)) {
        return { 'hasSameSize': true };
      }
      if ((doing.value == true) && ((waterResourceCount.value == null)
        || (waterResourceCount.value <= 0 && (PoolPage.checkActivityResidential == true
          || PoolPage.checkActivityWateringRes == true
          || PoolPage.checkActivityRice == true
          || PoolPage.checkActivityAgiculture == true
          || PoolPage.checkActivityFactory == true
          || PoolPage.checkActivityCommercial == true)))) {
        return { 'waterResourceCount': true };
      }
      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    // if (name == 'doing') {
    //   let ctrls = this.f;
    //   return ctrls.errors && ctrls.errors.doing && (ctrl.dirty || this.submitRequested);
    // }
    if (name == 'poolCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.poolCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hasSameSize') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.hasSameSize && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'waterResourceCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.waterResourceCount && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }



  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(16));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 16)) {
    //       arrayIsCheck.push(16);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
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

  private setupPoolCountChanges() {
    const componentFormArray: string = "poolSizes";
    const componentCount: string = "poolCount";

    var onComponentCountChanges = () => {
      var poolSizes = (this.f.get(componentFormArray) as FormArray).controls || [];
      var poolCount = this.f.get(componentCount).value || 0;
      var pool = this.fb.array([]);

      poolCount = Math.max(0, poolCount);

      for (let i = 0; i < poolCount; i++) {
        var ctrl = null;
        if (i < poolSizes.length) {
          const fld = poolSizes[i];
          ctrl = fld;
        } else {
          ctrl = PoolAreaComponent.CreateFormGroup(this.fb);
        }
        pool.push(ctrl);
      }
      this.f.setControl(componentFormArray, pool);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupPoolCountUsageChanges() {
    const componentFormArray: string = "waterResources";
    const componentCount: string = "waterResourceCount";

    var onComponentCountChanges = () => {
      var poolUsage = (this.f.get(componentFormArray) as FormArray).controls || [];
      var poolCountUsage = this.f.get(componentCount).value || 0;
      var pool = this.fb.array([]);
      poolCountUsage = Math.max(0, poolCountUsage);
      for (let i = 0; i < poolCountUsage; i++) {
        var ctrl = null;
        if (i < poolUsage.length) {
          const fld = poolUsage[i];
          ctrl = fld;
        } else {
          ctrl = PoolUsageComponent.CreateFormGroup(this.fb);
        }
        pool.push(ctrl);
      }
      this.f.setControl(componentFormArray, pool);
    };
    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());
    onComponentCountChanges();
  }
}
