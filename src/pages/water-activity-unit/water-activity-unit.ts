import { getArraySkipPage, getNextPageDirection } from './../../states/household/index';
import { SetArraySkipPage, SetWaterSourcesAgiculture, SetNextPageDirection } from './../../states/household/household.actions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { SetIsHouseHold, SetIsAgriculture, SetIsFactorial, SetIsCommercial } from '../../states/household/household.actions';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-water-activity-unit',
  templateUrl: 'water-activity-unit.html',
})
export class WaterActivityUnitPage {

  public f: FormGroup;
  private submitRequested: boolean;
  // private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s));
  private formData$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private it: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = navParams.get('FormItem');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterActivityUnitPage');
    // this.formData$.subscribe(data => this.f.setValue(data));
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.store.dispatch(new SetArraySkipPage(this.f.value));
    console.log("f", this.f.value);

    this.store.dispatch(new SetIsHouseHold(this.f.get('isHouseHold').value));
    this.store.dispatch(new SetIsAgriculture(this.f.get('isAgriculture').value));
    this.store.dispatch(new SetIsFactorial(this.f.get('isFactorial').value));
    this.store.dispatch(new SetIsCommercial(this.f.get('isCommercial').value));
    this.store.dispatch(new SetWaterSourcesAgiculture(this.f.get('isAgriculture').value));

    this.arrayNextPageMedthod();

    // this.checkNextPage();

  }

  arrayNextPageMedthod() {
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: Array<number>;
    arrayNextPage$.subscribe(data => arrayNextPage = data);
    arrayNextPage.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22);
    console.log(arrayNextPage);
    this.navCtrl.setRoot("CheckListPage", { i: -1 });
  }

  private checkNextPage() {
    this.formData$.subscribe(data => {
      if (data != null) {
        this.it = data;
      }
      console.log("it: ", this.it)
    });


    // if (this.it.isHouseHold) {
    // this.navCtrl.push("ResidentialPage");
    // this.store.dispatch(new SetNextPageDirection(0));
    // }
    // else if (this.it.isAgriculture) {
    // this.navCtrl.push("AgriculturePage");
    // this.store.dispatch(new SetNextPageDirection(1));
    // }
    // else if (this.it.isFactorial) {
    // this.navCtrl.push("FactorialPage");
    // this.store.dispatch(new SetNextPageDirection(11));
    // }
    // else if (this.it.isCommercial) {
    // this.navCtrl.push("CommercialPage");
    // this.store.dispatch(new SetNextPageDirection(11));
    // }

  }
  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
