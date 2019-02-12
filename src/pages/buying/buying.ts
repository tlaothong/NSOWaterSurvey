import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableBuyingComponent } from '../../components/table-buying/table-buying';
import { TableBuyingOtherComponent } from '../../components/table-buying-other/table-buying-other';
import { getHouseHoldSample, getIsHouseHold, getIsAgriculture, getIsFactorial, getIsCommercial, getArrayIsCheck, getNextPageDirection, getDataOfUnit } from '../../states/household';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetSelectorIndex, LoadHouseHoldSample } from '../../states/household/household.actions';

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
  private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage));
  private formData$: any;
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
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
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        this.formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.buying));
        this.formData$.subscribe(data => {
          if(data != null){
            this.BuyingForm.patchValue(data)
          }
        })
      }
    })
    // this.formData$.subscribe(data => this.BuyingForm.setValue(data));
    this.getIsHouseHold$.subscribe(data => this.getIsHouseHold = data);
    this.getIsAgriculture$.subscribe(data => this.getIsAgriculture = data);
    this.getIsFactorial$.subscribe(data => this.getIsFactorial = data);
    this.getIsCommercial$.subscribe(data => this.getIsCommercial = data);
    console.log(this.getIsHouseHold, this.getIsAgriculture, this.getIsFactorial, this.getIsCommercial);
  }

  public handleSubmit() {
    this.submitRequested = true;
    // if (this.BuyingForm.valid) {
      this.arrayIsCheckMethod();
      // this.store.dispatch(new LoadHouseHoldSample(this.BuyingForm));
      this.navCtrl.pop();
    // }
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
