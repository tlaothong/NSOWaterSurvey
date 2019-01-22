import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableBuyingComponent } from '../../components/table-buying/table-buying';
import { TableBuyingOtherComponent } from '../../components/table-buying-other/table-buying-other';
import { getHouseHoldSample, getIsHouseHold, getIsAgriculture, getIsFactorial, getIsCommercial, getArraySkipPage, getArrayIsCheck } from '../../states/household';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetNextPageDirection } from '../../states/household/household.actions';

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
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.buying));
  private formDataG1_G4$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private itG1_G4: any;
  private getIsHouseHold$ = this.store.select(getIsHouseHold);
  public getIsHouseHold: boolean;
  private getIsAgriculture$ = this.store.select(getIsAgriculture);
  public getIsAgriculture: boolean;
  private getIsFactorial$ = this.store.select(getIsFactorial);
  public getIsFactorial: boolean;
  private getIsCommercial$ = this.store.select(getIsCommercial);
  public getIsCommercial: boolean;

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
    this.formData$.subscribe(data => this.BuyingForm.setValue(data));
    this.getIsHouseHold$.subscribe(data => this.getIsHouseHold = data);
    this.getIsAgriculture$.subscribe(data => this.getIsAgriculture = data);
    this.getIsFactorial$.subscribe(data => this.getIsFactorial = data);
    this.getIsCommercial$.subscribe(data => this.getIsCommercial = data);
    console.log(this.getIsHouseHold, this.getIsAgriculture, this.getIsFactorial, this.getIsCommercial);
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.store.dispatch(new SetNextPageDirection(20));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck :Array<number>;
    arrayIsCheck$.subscribe(data => arrayIsCheck = data);
    arrayIsCheck.push(19);
    console.log(arrayIsCheck);
    if (this.BuyingForm.valid) {
      this.navCtrl.pop();
      // this.checkNextPage();
    }
  }

  private checkNextPage() {
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
