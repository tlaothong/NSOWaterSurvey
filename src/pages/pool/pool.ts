import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PoolAreaComponent } from '../../components/pool-area/pool-area';
import { PoolUsageComponent } from '../../components/pool-usage/pool-usage';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getResidentialGardeningUse, getRiceDoing, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture, getWaterSourcesResidential, getWateringResidential, getWaterSourcesRice, getWaterSourcesAgiculture, getWaterSourcesFactory, getWaterSourcesCommercial, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetSelectorIndex, LoadHouseHoldSample, SetHouseHold } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-pool',
  templateUrl: 'pool.html',
})
export class PoolPage {

  public f: FormGroup;
  @ViewChildren(PoolAreaComponent) private poolArea: PoolAreaComponent[];
  @ViewChildren(PoolUsageComponent) private poolUsage: PoolUsageComponent[];
  private submitRequested: boolean;
  private formDataUnit$ = this.store.select(getHouseHoldSample);
  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage));
  private formData: any;
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'poolCount': [null, [Validators.required, Validators.min(1)]],
      'hasSameSize': [null, Validators.required],
      'poolSizes': this.fb.array([]),
      'waterResourceCount': [null, Validators.required],
      'waterResources': this.fb.array([]),
    });
    this.setupPoolCountChanges();
    this.setupPoolCountUsageChanges();
  }

  ionViewDidLoad() {
    this.countNumberPage();
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        this.f.setValue(data.waterUsage.pool);
        this.formData = data;
        // this.formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.pool));
        // this.formData$.subscribe(data =>{
        //   if(data != null){
        //   }
        // })
      }
    })
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
      this.activityWateringRes = (data != null) ? data : null;
    });
    this.activityRice$.subscribe(data => {
      this.activityRice = (data != null) ? data.pool : null;
    });
    this.activityAgiculture$.subscribe(data => {
      this.activityAgiculture = (data != null) ? data : null;
    });
    this.activityFactory$.subscribe(data => {
      this.activityFactory = (data != null) ? data.pool : null;
    });
    this.activityCommercial$.subscribe(data => {
      this.activityCommercial = (data != null) ? data.pool : null;
    });
    this.changeValueActivity();
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
    console.log("valid", this.f.valid);
    console.log("this.f", this.f.value);
    if (this.checkValid()) {
      this.arrayIsCheckMethod();
      // this.store.dispatch(new SetHouseHold(this.f.value));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  checkValid(): boolean {
    let doing = false;
    let sameSize = false;
    let waterResourceCount = false;
    let usage = false;
    let area = false;

    if (this.f.get('doing').value == true) {
      doing = true;
      if (this.f.get('poolCount').value >= 0
        && this.f.get('hasSameSize').value != null) {
        sameSize = true;
      }
      if (this.f.get('waterResourceCount').value > 0
        && this.f.get('waterResourceCount').value <= this.f.get('poolCount').value) {
        waterResourceCount = true;
        usage = this.poolUsage.find(it => it.checkValid() == it.checkValid()).checkValid();
        area = this.poolArea.find(it => it.checkPoolValid() == it.checkPoolValid()).checkPoolValid();
      }
    }
    else {
      return true;
    }
    return doing && sameSize && waterResourceCount && area && usage;
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
    this.store.dispatch(new SetSelectorIndex(16));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 16)) {
          arrayIsCheck.push(16);
        }
        console.log(arrayIsCheck);
      }
    });
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

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
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
