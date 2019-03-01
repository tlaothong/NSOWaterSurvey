import { getWaterSourcesRice, getWateringResidential, getWaterSourcesResidential, getWaterSourcesAgiculture, getWaterSourcesFactory, getWaterSourcesCommercial, getArrayIsCheck, getNextPageDirection } from './../../states/household/index';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { GroundWaterUsageComponent } from '../../components/ground-water-usage/ground-water-usage';
import { GroundWaterUsagePublicComponent } from '../../components/ground-water-usage-public/ground-water-usage-public';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getResidentialGardeningUse, getRiceDoing, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetSelectorIndex, LoadHouseHoldSample, SetHouseHold } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

@IonicPage()
@Component({
  selector: 'page-ground-water',
  templateUrl: 'ground-water.html',
})

export class GroundWaterPage {

  @ViewChildren(GroundWaterUsagePublicComponent) private groundWaterUsagePublic: GroundWaterUsagePublicComponent[];
  @ViewChildren(GroundWaterUsageComponent) public groundWaterUsage: GroundWaterUsageComponent[];

  private submitRequested: boolean;
  public f: FormGroup;
  public G: boolean = true;

  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage));
  private formDataUnit$ = this.store.select(getHouseHoldSample);
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
  public checked: boolean;

  constructor(public navCtrl: NavController,private storage: Storage, public local: LocalStorageProvider, private store: Store<HouseHoldState>, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      'privateGroundWater': this.fb.group({
        'doing': [null, Validators.required],
        'allCount': [null, [Validators.required, Validators.min(1)]],
        'waterResourceCount': [null, [Validators.required, Validators.min(1)]],
        'waterResources': this.fb.array([])
      }),
      'publicGroundWater': this.fb.group({
        'doing': [null, Validators.required],
        'waterResourceCount': [null, [Validators.required, Validators.min(1)]],
        'waterResources': this.fb.array([]) 
      })
    });

    this.setupuseGroundWaterCountChanges();
    this.setupusePublicGroundWaterCountChanges();
  }

  ionViewDidLoad() {
    this.countNumberPage();
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        this.f.patchValue(data.waterUsage.groundWater);
        this.formData = data;
      }
    })
  
    this.gardeningUse$.subscribe(data => this.gardeningUse = data);
    this.riceDoing$.subscribe(data => this.riceDoing = data);
    this.commerceUse$.subscribe(data => this.commerceUse = data);
    this.factoryUse$.subscribe(data => this.factoryUse = data);
    this.residenceUse$.subscribe(data => this.residenceUse = data);
    this.agricultureUse$.subscribe(data => this.agricultureUse = data);
    this.activityResidential$.subscribe(data => {
      this.activityResidential = (data != null) ? data.underGround : null;
    });
    this.activityWateringRes$.subscribe(data => {
      this.activityWateringRes = (data != null) ? data : null;
    });
    this.activityRice$.subscribe(data => {
      this.activityRice = (data != null) ? data.underGround : null;
    });
    this.activityAgiculture$.subscribe(data => {
      this.activityAgiculture = (data != null) ? data : null;
    });
    this.activityFactory$.subscribe(data => {
      this.activityFactory = (data != null) ? data.underGround : null;
    });
    this.activityCommercial$.subscribe(data => {
      this.activityCommercial = (data != null) ? data.underGround : null;
    });
    this.changeValueActivity();
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
    this.groundWaterUsage.forEach(it => it.submitRequest());
    this.groundWaterUsagePublic.forEach(it => it.submitRequest());
    this.formData.waterUsage.groundWater = this.f.value;
    if (this.isCheck()) {
      this.arrayIsCheckMethod();
      
      // this.store.dispatch(new SetHouseHold(this.formData));
      // this.storage.set('unit', this.formData)
      let id = this.formData._id
      this.storage.set(id, this.formData)
      this.local.updateListUnit(this.formData.buildingId,this.formData)
      this.navCtrl.popTo("CheckListPage");
      // console.log("ผ่านแล้วจ้า");
      
    }
  }

  public isCheck(): boolean {
    return this.isCheckPrivate() && this.isCheckPublic();
  }

  public isCheckPrivate(): boolean {
    let ischeckGroundWater = this.groundWaterUsage.find(it => !it.checkValid()) ? false : true;
    return (this.f.get('privateGroundWater.doing').value) ?
      (this.f.get('privateGroundWater.allCount').valid
        && this.f.get('privateGroundWater.waterResourceCount').valid
        && ischeckGroundWater)
      : this.f.get('privateGroundWater.doing').valid;
  }

  public isCheckPublic(): boolean {
    let ischeckGroundWater = this.groundWaterUsagePublic.find(it => !it.checkValid()) ? false : true;
    return (this.f.get('publicGroundWater.doing').value) ?
      (this.f.get('publicGroundWater.waterResourceCount').valid
        && ischeckGroundWater)
      : this.f.get('publicGroundWater.doing').valid;
  }

  public check(): boolean {
    if (Number(this.f.get('privateGroundWater.waterResourceCount').value) > Number(this.f.get('privateGroundWater.allCount').value)) {
      return this.checked = true
    }
    return this.checked = false
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
    this.store.dispatch(new SetSelectorIndex(14));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 14)) {
          arrayIsCheck.push(14);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  private setupuseGroundWaterCountChanges() {
    const componentFormArray: string = "privateGroundWater.waterResources";
    const componentCount: string = "privateGroundWater.waterResourceCount";

    var onComponentCountChanges = () => {
      var avgUsageWater = (this.f.get(componentFormArray) as FormArray).controls || [];
      var useGroundWaterCount = this.f.get(componentCount).value || 0;
      var avg = this.fb.array([]);

      useGroundWaterCount = Math.max(0, useGroundWaterCount);

      for (let i = 0; i < useGroundWaterCount; i++) {
        var ctrl = null;
        if (i < avgUsageWater.length) {
          const fld = avgUsageWater[i];
          ctrl = fld;
        } else {
          ctrl = GroundWaterUsageComponent.CreateFormGroup(this.fb);
        }

        avg.push(ctrl);
      }
      (this.f.get('privateGroundWater') as FormGroup).setControl('waterResources', avg);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupusePublicGroundWaterCountChanges() {
    const componentFormArray: string = "publicGroundWater.waterResources";
    const componentCount: string = "publicGroundWater.waterResourceCount";

    var onComponentCountChanges = () => {
      var usePerMonth = (this.f.get(componentFormArray) as FormArray).controls || [];
      var count = this.f.get(componentCount).value || 0;
      var avgp = this.fb.array([]);

      count = Math.max(0, count);

      for (let i = 0; i < count; i++) {
        var ctrl = null;
        if (i < usePerMonth.length) {
          const fld = usePerMonth[i];
          ctrl = fld;
        } else {
          ctrl = GroundWaterUsagePublicComponent.CreateFormGroup(this.fb);
        }

        avgp.push(ctrl);
      }
      (this.f.get('publicGroundWater') as FormGroup).setControl('waterResources', avgp);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
