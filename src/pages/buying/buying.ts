import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableBuyingComponent } from '../../components/table-buying/table-buying';
import { TableBuyingOtherComponent } from '../../components/table-buying-other/table-buying-other';
import { getHouseHoldSample, getIsHouseHold, getIsAgriculture, getIsFactorial, getIsCommercial } from '../../states/household';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';

@IonicPage()
@Component({
  selector: 'page-buying',
  templateUrl: 'buying.html',
})
export class BuyingPage {
  @ViewChildren(TableBuyingComponent) private tableBuying: TableBuyingComponent[];
  @ViewChildren(TableBuyingOtherComponent) private tableBuyingOther: TableBuyingOtherComponent[];
  BuyingForm: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.buying));

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
    console.log(this.getIsHouseHold,this.getIsAgriculture,this.getIsCommercial,this.getIsFactorial);
  }
}
