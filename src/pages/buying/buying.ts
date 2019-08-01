import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, ValidatorFn, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';
import { TableBuyingComponent } from '../../components/table-buying/table-buying';
import { TableBuyingOtherComponent } from '../../components/table-buying-other/table-buying-other';
import { getHouseHoldSample, getIsHouseHold, getIsAgriculture, getIsFactorial, getIsCommercial } from '../../states/household';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetSelectorIndex, SaveHouseHold } from '../../states/household/household.actions';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-buying',
  templateUrl: 'buying.html',
})
export class BuyingPage {
  private submitRequested: boolean;
  @ViewChildren(TableBuyingComponent) private tableBuying: TableBuyingComponent[];
  @ViewChildren(TableBuyingOtherComponent) private tableBuyingOther: TableBuyingOtherComponent[];
  BuyingForm: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample);
  private getIsHouseHold$ = this.store.select(getIsHouseHold);
  public getIsHouseHold: boolean;
  private getIsAgriculture$ = this.store.select(getIsAgriculture);
  public getIsAgriculture: boolean;
  private getIsFactorial$ = this.store.select(getIsFactorial);
  public getIsFactorial: boolean;
  private getIsCommercial$ = this.store.select(getIsCommercial);
  public getIsCommercial: boolean;
  private frontNum: any;
  private backNum: any;
  public isCheckWarningBox: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>,
    private appState: AppStateProvider) {
    this.BuyingForm = BuyingPage.CreateFormGroup(this.fb)
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'package': fb.array([
        TableBuyingComponent.CreateFormGruop(fb),
        TableBuyingComponent.CreateFormGruop(fb),
        TableBuyingComponent.CreateFormGruop(fb),
        TableBuyingComponent.CreateFormGruop(fb),
        TableBuyingComponent.CreateFormGruop(fb),
        TableBuyingComponent.CreateFormGruop(fb),
        TableBuyingComponent.CreateFormGruop(fb),
        TableBuyingComponent.CreateFormGruop(fb),
        TableBuyingOtherComponent.CreateFormGroup(fb),
      ]),
    }, {
        validator: BuyingPage.checkAnyOrOther()
      });
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const packages = c.get('package') as FormArray;

      let anyCheck = 0;
      for (let i = 0; i < packages.length; i++) {
        let pack = packages.at(i);
        if (pack.get('name').value != null && pack.get('size').value != null &&
          (pack.get('drink').value != null || pack.get('agriculture').value != null ||
            pack.get('factory').value != null || pack.get('service').value != null)) {
          anyCheck++;
        }
      }

      if (anyCheck == 0) {
        return { 'anyCheck': true };
      }
      return null;
    }
  }

  ionViewDidLoad() {
    this.getIsHouseHold$.subscribe(data => this.getIsHouseHold = data);
    this.getIsAgriculture$.subscribe(data => this.getIsAgriculture = data);
    this.getIsFactorial$.subscribe(data => this.getIsFactorial = data);
    this.getIsCommercial$.subscribe(data => this.getIsCommercial = data);
    console.log(this.getIsHouseHold, this.getIsAgriculture, this.getIsFactorial, this.getIsCommercial);
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.isCheckWarningBox = this.BuyingForm.valid;

    if (this.BuyingForm.valid) {
      this.arrayIsCheckMethod();
      let water = {
        ...this.appState.houseHoldUnit.waterUsage,
        buying: this.BuyingForm.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        waterUsage: water,
      };

      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.pop();
    }
  }

  public isValid(name: string): boolean {
    if (name == 'anyCheck') {
      var ctrls = this.BuyingForm;
      return ctrls.errors && ctrls.errors.anyCheck && (ctrls.dirty || this.submitRequested);
    }
    var ctrl = this.BuyingForm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(19));
  }
}
