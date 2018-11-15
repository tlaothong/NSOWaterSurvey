import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { SetIsHouseHold, SetIsAgriculture, SetIsFactorial, SetIsCommercial } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-water-activity-unit',
  templateUrl: 'water-activity-unit.html',
})
export class WaterActivityUnitPage {

  public f: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder ,private store: Store<HouseHoldState>) {
    this.f = WaterActivityUnitPage.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterActivityUnitPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.store.dispatch(new SetIsHouseHold(this.f.get('isHouseHold').value));
    this.store.dispatch(new SetIsAgriculture(this.f.get('isAgriculture').value));
    this.store.dispatch(new SetIsFactorial(this.f.get('isFactorial').value));
    this.store.dispatch(new SetIsCommercial(this.f.get('isCommercial').value));
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
