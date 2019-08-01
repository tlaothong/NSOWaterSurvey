import { SetSelectorIndex, SetBackToRoot, SetNextPageDirection, SetBack, SaveHouseHold } from './../../states/household/household.actions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample } from '../../states/household';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-water-activity-unit',
  templateUrl: 'water-activity-unit.html',
})
export class WaterActivityUnitPage {

  public f: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample);
  private isCheckWarningBox: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.f = fb.group({
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
    });
  }

  ionViewDidEnter() {
    console.log("WaterActivityUnitPage");
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.arrayNextPageMedthod();
    this.isCheckWarningBox = this.f.valid;

    if (this.f.valid) {
      let houseHold = {
        ...this.appState.houseHoldUnit,
        isHouseHold: this.f.get('isHouseHold').value,
        isAgriculture: this.f.get('isAgriculture').value,
        isFactorial: this.f.get('isFactorial').value,
        isCommercial: this.f.get('isCommercial').value,
      };

      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.push("CheckListPage", { id: houseHold._id });
    }
  }

  arrayNextPageMedthod() {
    let arrayNextPage: Array<boolean> = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    this.store.dispatch(new SetNextPageDirection(arrayNextPage));
    this.store.dispatch(new SetSelectorIndex(-1));
    this.store.dispatch(new SetBackToRoot(false));
    this.store.dispatch(new SetBack(false));
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
