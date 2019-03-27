import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableBuyingComponent } from '../../components/table-buying/table-buying';
import { TableBuyingOtherComponent } from '../../components/table-buying-other/table-buying-other';
import { getHouseHoldSample, getIsHouseHold, getIsAgriculture, getIsFactorial, getIsCommercial, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
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

  constructor(public navCtrl: NavController, public local: LocalStorageProvider, private storage: Storage, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
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
    this.countNumberPage();
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
      // this.store.dispatch(new SetHouseHold(this.formData));
      // this.storage.set('unit', this.formData)
      // let id = this.formData._id
      // this.storage.set(id, this.formData)
      // this.local.updateListUnit(this.formData.buildingId,this.formData)  
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
    this.store.dispatch(new SetSelectorIndex(19));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.some(it => it != 19)) {
          arrayIsCheck.push(19);
        }
        console.log(arrayIsCheck);
      }
    });
  }
}
