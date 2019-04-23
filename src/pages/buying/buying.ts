import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage));
  private formData$ = this.store.select(getHouseHoldSample);
  // private formData: any;
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
    this.BuyingForm = this.fb.group({
      'package': this.fb.array([
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingOtherComponent.CreateFormGroup(this.fb),
      ]),
    });
  }

  ionViewDidLoad() {
    // this.formDataUnit$.subscribe(data => {
    //   if (data != null) {
    //     this.BuyingForm.patchValue(data.waterUsage.buying);
    //     this.formData = data;
    //   }
    // })
    this.getIsHouseHold$.subscribe(data => this.getIsHouseHold = data);
    this.getIsAgriculture$.subscribe(data => this.getIsAgriculture = data);
    this.getIsFactorial$.subscribe(data => this.getIsFactorial = data);
    this.getIsCommercial$.subscribe(data => this.getIsCommercial = data);
    console.log(this.getIsHouseHold, this.getIsAgriculture, this.getIsFactorial, this.getIsCommercial);
  }

  public handleSubmit() {
    this.submitRequested = true;
    // this.formData.waterUsage.buying = this.BuyingForm.value;
    this.isCheckWarningBox = this.BuyingForm.valid || (this.tableBuying.some(it => it.FormItem.valid)) || (this.tableBuyingOther.some(it => it.FormItem.valid));
    if (this.BuyingForm.valid
      || (this.tableBuying.some(it => it.FormItem.valid))
      || (this.tableBuyingOther.some(it => it.FormItem.valid))) {
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

  public isValid(): boolean {
    let isCheckBuying = this.tableBuying ? this.tableBuying.some(it => it.FormItem.valid) : false;
    let isCheckBuyingOther = this.tableBuyingOther ? this.tableBuyingOther.some(it => it.FormItem.valid) : false;
    return (!isCheckBuying && !isCheckBuyingOther) && this.submitRequested;
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(19));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.some(it => it != 19)) {
    //       arrayIsCheck.push(19);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }
}
