import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getFactorialCategory, getCommercialServiceType, getIsFactorial, getIsCommercial } from '../../states/household';
import { SetSelectorIndex, SaveHouseHold, SetBackToRoot } from '../../states/household/household.actions';
import { BuildingState } from '../../states/building/building.reducer';
import { getRecieveDataFromBuilding } from '../../states/building';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  public userInfo: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample);
  private factorialCategory$ = this.store.select(getFactorialCategory);
  public facCategory: string;
  private commercialServiceType$ = this.store.select(getCommercialServiceType);
  public commercialServiceType: string;
  private facCategoryUse$ = this.store.select(getIsFactorial);
  public facCategoryUse: boolean;
  private commercialServiceUse$ = this.store.select(getIsCommercial);
  public commercialServiceUse: boolean;
  private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);
  private GetDataFromBuilding: any;
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;
  private oldStatus: string;
  private static checkCommerc: boolean;
  private static checkFactorail: boolean;

  constructor(public navCtrl: NavController, private appState: AppStateProvider, private storeBuild: Store<BuildingState>, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.userInfo = this.fb.group({
      "informer": [null, Validators.required],
      "factorialCategoryCode": [null, Validators],
      "serviceTypeCode": [null, Validators]
    }, {
        validator: UserPage.checkAnyOrOther()
      });
  }

  ionViewDidLoad() {

    this.factorialCategory$.subscribe(data => this.facCategory = data);
    this.commercialServiceType$.subscribe(data => this.commercialServiceType = data);
    this.facCategoryUse$.subscribe(data => this.facCategoryUse = data);
    this.commercialServiceUse$.subscribe(data => this.commercialServiceUse = data);
    UserPage.checkCommerc = this.commercialServiceUse;
    UserPage.checkFactorail = this.facCategoryUse;
  }

  public handleSubmit() {
    this.submitRequested = true;
    console.log(this.userInfo);


    this.isCheckWarningBox = this.userInfo.valid;
    if (this.userInfo.valid) {
      this.arrayIsCheckMethod();
      let originalHouseHold = this.appState.houseHoldUnit;
      let newHouseHold = {
        ...originalHouseHold,
        closing: this.userInfo.value,
        status: "complete"
      };
      this.store.dispatch(new SaveHouseHold(newHouseHold));
      this.GetDataFromBuilding$.subscribe(data => this.GetDataFromBuilding = data);
      if (this.GetDataFromBuilding == 1) {
        this.store.dispatch(new SetBackToRoot(true));
        this.navCtrl.popToRoot();
      } else {
        this.store.dispatch(new SetBackToRoot(true));
        this.navCtrl.popTo(this.navCtrl.getByIndex(3))
      }
    }
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const informer = c.get('informer');
      const factorialCategoryCode = c.get('factorialCategoryCode');
      const serviceTypeCode = c.get('serviceTypeCode');

      if ((informer.value == null || (informer.value.trim() == '')) && (UserPage.checkFactorail == true && factorialCategoryCode.value == null) && (UserPage.checkCommerc == true && serviceTypeCode.value == null)) {
        return { 'informer': true, 'factorialCategoryCode': true, 'serviceTypeCode': true }
      }
      if ((informer.value == null || (informer.value.trim() == '')) && (UserPage.checkFactorail == true && factorialCategoryCode.value == null)) {
        return { 'informer': true, 'factorialCategoryCode': true }
      }
      if ((informer.value == null || (informer.value.trim() == '')) && (UserPage.checkCommerc == true && serviceTypeCode.value == null)) {
        return { 'informer': true, 'serviceTypeCode': true }
      }
      if ((informer.value == null || (informer.value.trim() == ''))) {
        return { 'informer': true }
      }
      if ((UserPage.checkFactorail == true && factorialCategoryCode.value == null) && (UserPage.checkCommerc == true && serviceTypeCode.value == null)) {
        return { 'factorialCategoryCode': true, 'serviceTypeCode': true };
      }
      if (UserPage.checkFactorail == true && factorialCategoryCode.value == null) {
        return { 'factorialCategoryCode': true };
      }
      if (UserPage.checkCommerc == true && serviceTypeCode.value == null) {
        return { 'serviceTypeCode': true };
      }
      return null;
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(21));
  }

  public isValid(name: string): boolean {
    var ctrl = this.userInfo.get(name);

    if (name == 'informer') {
      var ctrls = this.userInfo;
      return ctrls.errors && ctrls.errors.informer && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'factorialCategoryCode') {
      var ctrls = this.userInfo;
      return ctrls.errors && ctrls.errors.factorialCategoryCode && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'serviceTypeCode') {
      var ctrls = this.userInfo;
      return ctrls.errors && ctrls.errors.serviceTypeCode && (ctrl.dirty || this.submitRequested);
    }

    return ctrl.invalid && (ctrl.dirty || this.submitRequested);

  }
}