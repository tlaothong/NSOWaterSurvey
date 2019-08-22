import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WaterActivity6Component } from '../../components/water-activity6/water-activity6';
import { RainStorageComponent } from '../../components/rain-storage/rain-storage';
import { WaterActivity5Component } from '../../components/water-activity5/water-activity5';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getResidentialGardeningUse, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture, getWaterSourcesResidential, getWateringResidential, getWaterSourcesAgiculture, getWaterSourcesFactory, getWaterSourcesCommercial } from '../../states/household';
import { SetSelectorIndex, SaveHouseHold } from '../../states/household/household.actions';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-rain',
  templateUrl: 'rain.html',
})
export class RainPage {

  @ViewChildren(RainStorageComponent) private rainStorage: RainStorageComponent[];
  @ViewChildren(WaterActivity5Component) private waterActivity5: WaterActivity5Component[];
  RainFrm: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample);
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
  private frontNum: any;
  private backNum: any;
  public isCheckWarningBox: boolean;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.RainFrm = this.fb.group({
      'rainContainers': this.fb.array([
        RainStorageComponent.CreateFormGroup(this.fb),
        RainStorageComponent.CreateFormGroup(this.fb),
        RainStorageComponent.CreateFormGroup(this.fb),
        RainStorageComponent.CreateFormGroup(this.fb),
        RainStorageComponent.CreateFormGroup(this.fb),
        RainStorageComponent.CreateFormGroup(this.fb),
        RainStorageComponent.CreateFormGroup(this.fb),
        RainStorageComponent.CreateFormGroup(this.fb),
      ]),
      'waterActivities': WaterActivity6Component.CreateFormGroup(fb),
    });
  }

  ionViewDidLoad() {
    this.gardeningUse$.subscribe(data => this.gardeningUse = data);
    this.commerceUse$.subscribe(data => this.commerceUse = data);
    this.factoryUse$.subscribe(data => this.factoryUse = data);
    this.residenceUse$.subscribe(data => this.residenceUse = data);
    this.agricultureUse$.subscribe(data => this.agricultureUse = data);
    this.activityResidential$.subscribe(data => {
      this.activityResidential = (data != null) ? data.rain : null;
    });
    this.activityWateringRes$.subscribe(data => {
      this.activityWateringRes = (data != null && this.activityResidential) ? data : null;
    });
    this.activityAgiculture$.subscribe(data => {
      this.activityAgiculture = (data != null) ? data.rain : null;
    });
    this.activityFactory$.subscribe(data => {
      this.activityFactory = (data != null) ? data.rain : null;
    });
    this.activityCommercial$.subscribe(data => {
      this.activityCommercial = (data != null) ? data.rain : null;
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
    this.rainStorage.forEach(it => it.submitRequest());
    this.waterActivity5.forEach(it => it.submitRequest());
    this.isCheckWarningBox = !this.waterActivity5.some(it => it.isCheck == false) && this.rainStorage.some(it => it.FormItem.valid);
    if (!this.waterActivity5.some(it => it.isCheck == false) && this.rainStorage.some(it => it.FormItem.valid)) {
      this.arrayIsCheckMethod();
      let water = {
        ...this.appState.houseHoldUnit.waterUsage,
        rain: this.RainFrm.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        waterUsage: water,
      };
      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }



  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(18));
  }

  public isValid(name: string): boolean {
    var ctrl = this.RainFrm.get(name);
    var isCheckRainStorage = this.rainStorage ? (this.rainStorage.some(it => it.FormItem.valid)) : false;
    
    return (!isCheckRainStorage) && this.submitRequested;
  }

  submitRequest() {
    this.submitRequested = true;
  }

  picture() {
    let profileModal = this.modalCtrl.create("DlgRainPicturePage", {});
    profileModal.present();
  }
}
