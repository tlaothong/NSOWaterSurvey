import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WaterActivity6Component } from '../../components/water-activity6/water-activity6';
import { RainStorageComponent } from '../../components/rain-storage/rain-storage';
import { WaterActivity5Component } from '../../components/water-activity5/water-activity5';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getHouseHoldSample, getResidentialGardeningUse, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture, getWaterSourcesResidential, getWateringResidential, getWaterSourcesAgiculture, getWaterSourcesFactory, getWaterSourcesCommercial, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { DlgRainPicturePage } from '../dlg-rain-picture/dlg-rain-picture';
import { SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
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
  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage));
  // private formData: any;
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

  constructor(public modalCtrl: ModalController, private storage: Storage, public local: LocalStorageProvider, public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
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
    this.countNumberPage();
    // this.formData$.subscribe(data => {
    //   if (data != null) {
    //     this.RainFrm.patchValue(data.waterUsage.rain);
    //     this.formData = data;
    //   }
    // })

    this.gardeningUse$.subscribe(data => this.gardeningUse = data);
    this.commerceUse$.subscribe(data => this.commerceUse = data);
    this.factoryUse$.subscribe(data => this.factoryUse = data);
    this.residenceUse$.subscribe(data => this.residenceUse = data);
    this.agricultureUse$.subscribe(data => this.agricultureUse = data);
    console.log('ionViewDidLoad RainPage');
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
    console.log("activityResidential", this.activityResidential);
    console.log("activityWateringRes", this.activityWateringRes);
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
    this.store.dispatch(new SetSelectorIndex(18));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 18)) {
          arrayIsCheck.push(18);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.RainFrm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
  }

  picture() {
    let profileModal = this.modalCtrl.create("DlgRainPicturePage", {});
    profileModal.present();
  }
}
