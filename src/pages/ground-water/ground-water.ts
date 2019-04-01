import { getWaterSourcesRice, getWateringResidential, getWaterSourcesResidential, getWaterSourcesAgiculture, getWaterSourcesFactory, getWaterSourcesCommercial, getArrayIsCheck, getNextPageDirection } from './../../states/household/index';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { GroundWaterUsageComponent } from '../../components/ground-water-usage/ground-water-usage';
import { GroundWaterUsagePublicComponent } from '../../components/ground-water-usage-public/ground-water-usage-public';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getResidentialGardeningUse, getRiceDoing, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { CountComponent } from '../../components/count/count';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-ground-water',
  templateUrl: 'ground-water.html',
})

export class GroundWaterPage {

  @ViewChildren(GroundWaterUsagePublicComponent) private groundWaterUsagePublic: GroundWaterUsagePublicComponent[];
  @ViewChildren(GroundWaterUsageComponent) public groundWaterUsage: GroundWaterUsageComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];

  private submitRequested: boolean;
  public f: FormGroup;
  public G: boolean = true;

  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage));
  private formData$ = this.store.select(getHouseHoldSample);
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
  public checked: boolean;
  public isCheckWarnBox: boolean;

  public static checkActivityResidential: any;
  public static checkActivityWateringRes: any;
  public static checkActivityRice: any;
  public static checkActivityAgiculture: any;
  public static checkActivityFactory: any;
  public static checkActivityCommercial: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage, public local: LocalStorageProvider, private store: Store<HouseHoldState>, public navParams: NavParams, public fb: FormBuilder, private appState: AppStateProvider) {
    this.f = this.fb.group({
      'privateGroundWater': this.fb.group({
        'doing': [null, Validators.required],
        'allCount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
        'waterResourceCount': [null, Validators.required],
        'waterResources': this.fb.array([])
      }),
      'publicGroundWater': this.fb.group({
        'doing': [null, Validators.required],
        'waterResourceCount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
        'waterResources': this.fb.array([])
      })
    }, {
        validator: GroundWaterPage.checkAnyOrOther()
      });
    this.setupuseGroundWaterCountChanges();
    this.setupusePublicGroundWaterCountChanges();
  }

  ionViewDidLoad() {
    
    // this.formData$.subscribe(data => {
    //   if (data != null) {
    //     this.f.patchValue(data.waterUsage.groundWater);
    //     this.formData = data;
    //   }
    // })

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
      this.activityWateringRes = (data != null && this.activityResidential) ? data : null;
    });
    this.activityRice$.subscribe(data => {
      this.activityRice = (data != null) ? data.underGround : null;
    });
    this.activityAgiculture$.subscribe(data => {
      this.activityAgiculture = (data != null) ? data.underGround : null;
    });
    this.activityFactory$.subscribe(data => {
      this.activityFactory = (data != null) ? data.underGround : null;
    });
    this.activityCommercial$.subscribe(data => {
      this.activityCommercial = (data != null) ? data.underGround : null;
    });
    this.changeValueActivity();

    GroundWaterPage.checkActivityResidential = this.activityResidential;
    GroundWaterPage.checkActivityWateringRes = this.activityWateringRes;
    GroundWaterPage.checkActivityRice = this.activityRice;
    GroundWaterPage.checkActivityAgiculture = this.activityAgiculture;
    GroundWaterPage.checkActivityFactory = this.activityFactory;
    GroundWaterPage.checkActivityCommercial = this.activityCommercial;

    console.log("activityResidential", GroundWaterPage.checkActivityResidential);
    console.log("activityWateringRes", GroundWaterPage.checkActivityWateringRes);
    console.log("activityRice", GroundWaterPage.checkActivityRice);
    console.log("activityAgiculture", GroundWaterPage.checkActivityAgiculture);
    console.log("activityFactory", GroundWaterPage.checkActivityFactory);
    console.log("activityCommercial", GroundWaterPage.checkActivityCommercial);
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
    this.count.forEach(it => it.submitRequest());
    // this.formData.waterUsage.groundWater = this.f.value;

    console.log(this.isCheckPrivate());
    console.log(this.isCheckPublic());
    console.log(this.isCheckBoth());
    console.log(this.isCheckActivity());

    this.isCheckWarnBox = this.isCheck();
    if (this.isCheck()) {
      this.arrayIsCheckMethod();
      // this.store.dispatch(new SetHouseHold(this.formData));
      // this.storage.set('unit', this.formData)
      // let id = this.formData._id
      // this.storage.set(id, this.formData)
      // this.local.updateListUnit(this.formData.buildingId, this.formData)
      let ground = {
        ...this.appState.houseHoldUnit.waterUsage,
        groundWater: this.f.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        waterUsage: ground,
      };

      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  public isCheck(): boolean {
    return this.isCheckPrivate() && this.isCheckPublic() && this.isCheckBoth();
  }

  public isCheckBoth(): boolean {
    if (this.isCheckActivity()) {
      if ((this.f.get('privateGroundWater.doing').value && !this.f.get('publicGroundWater.doing').value)) {
        return (this.f.get('privateGroundWater.waterResourceCount').value > 0);
      }
      else if (this.f.get('privateGroundWater.doing').value && this.f.get('publicGroundWater.doing').value) {
        return this.f.get('privateGroundWater.waterResourceCount').value >= 0;
      }
      else if (!this.f.get('publicGroundWater.doing').value && !this.f.get('privateGroundWater.doing').value) {
        return false;
      }
    }
    else if (this.f.get('privateGroundWater.doing').value && !this.f.get('publicGroundWater.doing').value) {
      return this.f.get('privateGroundWater.waterResourceCount').value >= 0;
    }
    return true;
  }

  public isCheckActivity(): boolean {
    return (this.activityResidential || this.activityWateringRes || this.activityRice || this.activityAgiculture || this.activityFactory || this.activityCommercial) ? true : false;
  }

  public isCheckPrivate(): boolean {
    let isCheckGroundWater = this.groundWaterUsage.find(it => !it.checkValid()) ? false : true;
    return (this.f.get('privateGroundWater.doing').value) ?
      (this.f.get('privateGroundWater.allCount').valid
        && this.f.get('privateGroundWater.waterResourceCount').valid
        && isCheckGroundWater
        && this.checkValid())
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

  

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(14));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 14)) {
    //       arrayIsCheck.push(14);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public checkValid(): boolean {
    if ((this.activityResidential == true
      || this.activityWateringRes == true
      || this.activityRice == true
      || this.activityAgiculture == true
      || this.activityFactory == true
      || this.activityCommercial == true)
      && (this.f.get('privateGroundWater.waterResourceCount').value < 0)) {
      return false;
    }
    return true;
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const waterResourceCount = c.get('privateGroundWater.waterResourceCount');
      const doing = c.get('privateGroundWater.doing');

      if ((doing.value == true) && ((waterResourceCount.value == null)
        || (waterResourceCount.value <= 0 && (GroundWaterPage.checkActivityResidential == true
          || GroundWaterPage.checkActivityWateringRes == true
          || GroundWaterPage.checkActivityRice == true
          || GroundWaterPage.checkActivityAgiculture == true
          || GroundWaterPage.checkActivityFactory == true
          || GroundWaterPage.checkActivityCommercial == true)))) {
        return { 'waterResourceCount': true };
      }
      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    var cw = this.f.get('privateGroundWater.waterResourceCount');
    if (name == 'privateGroundWater.waterResourceCount') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.waterResourceCount && (cw.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  private setupuseGroundWaterCountChanges() {
    const componentFormArray: string = "privateGroundWater.waterResources";
    const componentCount: string = "privateGroundWater.allCount";

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
