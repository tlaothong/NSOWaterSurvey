import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PoolAreaComponent } from '../../components/pool-area/pool-area';
import { PoolUsageComponent } from '../../components/pool-usage/pool-usage';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getResidentialGardeningUse, getRiceDoing, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture, getCheckWaterIrrigation, getCheckWaterRain, getCheckWaterBuying } from '../../states/household';
import { map } from 'rxjs/operators';

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

  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.pool));
  private formCheckIrrigation$ = this.store.select(getCheckWaterIrrigation).pipe(map(s => s));
  private itIrrigation: any;
  private formCheckRain$ = this.store.select(getCheckWaterRain).pipe(map(s => s));
  private itRain: any;
  private formCheckBuying$ = this.store.select(getCheckWaterBuying).pipe(map(s => s));
  private itBuying: any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'poolCount': [null, Validators.required],
      'hasSameSize': [null, Validators.required],
      'poolSizes': this.fb.array([]),
      'waterResourceCount': [null, Validators.required],
      'waterResources': this.fb.array([]),
    });
    this.setupPoolCountChanges();
    this.setupPoolCountUsageChanges();
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));
    this.gardeningUse$.subscribe(data => this.gardeningUse = data);
    this.riceDoing$.subscribe(data => this.riceDoing = data);
    this.commerceUse$.subscribe(data => this.commerceUse = data);
    this.factoryUse$.subscribe(data => this.factoryUse = data);
    this.residenceUse$.subscribe(data => this.residenceUse = data);
    this.agricultureUse$.subscribe(data => this.agricultureUse = data);
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.poolUsage.forEach(it => it.submitRequest());
    this.poolArea.forEach(it => it.submitRequest());
    this.checkNextPage();

  }

  // formCheckIrrigation$ = this.store.select(getCheckWaterIrrigation).pipe(map(s => s));
  // private itIrrigation: any;
  // private formCheckRain$ = this.store.select(getCheckWaterRain).pipe(map(s => s));
  // private itRain: any;
  // private formCheckBuying$ = this.store.select(getCheckWaterBuying).pipe(map(s => s));
  // private itBuying: any;
  private checkNextPage() {
    this.formCheckIrrigation$.subscribe(data => {
      if (data != null) {
        this.itIrrigation = data;
      }
      console.log("itIrrigation: ", this.itIrrigation);
    });
    this.formCheckRain$.subscribe(data => {
      if (data != null) {
        this.itRain = data;
      }
      console.log("itRain: ", this.itRain);
    });
    this.formCheckBuying$.subscribe(data => {
      if (data != null) {
        this.itBuying = data;
      }
      console.log("itIrrigation: ", this.itBuying);
    });

    if (this.itIrrigation) {
      this.navCtrl.push("IrrigationPage")
    }
    else if (this.itRain) {
      this.navCtrl.push("RainPage")
    }
    else if (this.itBuying) {
      this.navCtrl.push("BuyingPage")
    }
  }


  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
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
