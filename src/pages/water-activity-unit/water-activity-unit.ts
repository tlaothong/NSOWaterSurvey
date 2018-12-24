import { getArraySkipPage } from './../../states/household/index';
import { SetArraySkipPage } from './../../states/household/household.actions';
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

    this.checkNextPage();

  }

  private checkNextPage() {
    this.formData$.subscribe(data => {
      if (data != null) {
        this.it = data;
      }
      console.log("it: ", this.it)
    });
    if (this.it.isHouseHold) {
      this.navCtrl.push("ResidentialPage");
    }
    else if (this.it.isAgriculture) {
      this.navCtrl.push("AgriculturePage");
    }
    else if (this.it.isFactorial) {
      this.navCtrl.push("FactorialPage");
    }
    else if (this.it.isCommercial) {
      this.navCtrl.push("CommercialPage");
    }
  }
  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
