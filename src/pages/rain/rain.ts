import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WaterActivity6Component } from '../../components/water-activity6/water-activity6';
import { RainStorageComponent } from '../../components/rain-storage/rain-storage';
import { WaterActivity5Component } from '../../components/water-activity5/water-activity5';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getHouseHoldSample, getResidentialGardeningUse, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture, getCheckWaterBuying, getArraySkipPage } from '../../states/household';
import { DlgRainPicturePage } from '../dlg-rain-picture/dlg-rain-picture';

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
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.rain));
  private formDataG1_G4$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private itG1_G4: any;
  private formCheckBuying$ = this.store.select(getCheckWaterBuying).pipe(map(s => s));
  private itBuying: any;

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

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
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
    this.formData$.subscribe(data => this.RainFrm.setValue(data));
    this.gardeningUse$.subscribe(data => this.gardeningUse = data);
    this.commerceUse$.subscribe(data => this.commerceUse = data);
    this.factoryUse$.subscribe(data => this.factoryUse = data);
    this.residenceUse$.subscribe(data => this.residenceUse = data);
    this.agricultureUse$.subscribe(data => this.agricultureUse = data);
    console.log('ionViewDidLoad RainPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.rainStorage.forEach(it => it.submitRequest());
    this.waterActivity5.forEach(it => it.submitRequest());
    if (this.RainFrm.valid) {
      if (!this.waterActivity5.find(it => it.resultSum != 100)) {
        this.checkNextPage();
      }
    }
  }

  private checkNextPage() {
    this.formCheckBuying$.subscribe(data => {
      if (data != null) {
        this.itBuying = data;
      }
      console.log("itBuying: ", this.itBuying);
    });

    if (this.itBuying) {
      this.navCtrl.push("BuyingPage")
    }
    else {
      this.formDataG1_G4$.subscribe(data => {
        if (data != null) {
          this.itG1_G4 = data;
        }
        console.log("itG1_G4: ", this.itG1_G4);
      });
      if (this.itG1_G4.isHouseHold) {
        this.navCtrl.push("DisasterousPage")
      }
      else
        this.navCtrl.push("UserPage")
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.RainFrm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
  }

  picture() {
    let profileModal = this.modalCtrl.create("DlgRainPicturePage", {});
    profileModal.present();
  }
}
