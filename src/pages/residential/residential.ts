import { CountComponent } from './../../components/count/count';
import { SetSelectorIndex, SaveHouseHold } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-residential',
  templateUrl: 'residential.html',
})
export class ResidentialPage {

  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  public residentialFrm: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample);
  private isCheckWarningBox: boolean;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.residentialFrm = this.fb.group({
      'memberCount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required, Validators.min(1)])],
      'workingAge': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
      'gardeningUse': [null, Validators.required],
    }, {
        validator: ResidentialPage.checkAnyOrOther()
      });
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.waterSources8B.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());

    this.isCheckWarningBox = this.residentialFrm.valid;
    console.log(this.residentialFrm);

    if (this.residentialFrm.valid) {
      this.arrayIsCheckMethod();
      let originalHouseHold = this.appState.houseHoldUnit;
      let newHouseHold = {
        ...originalHouseHold,
        residence: this.residentialFrm.value,
      };

      this.store.dispatch(new SaveHouseHold(newHouseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const workingAge = c.get('workingAge');
      const memberCount = c.get('memberCount');

      if (+workingAge.value > +memberCount.value) {
        return { 'checkMember': true };
      }
      return null;
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(0));
  }

  public isValid(name: string): boolean {
    var ctrl = this.residentialFrm.get(name);
    if (name == 'checkMember') {
      let ctrls = this.residentialFrm;
      return ctrls.errors && ctrls.errors.checkMember && (ctrls.dirty || this.submitRequested);
    }

    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
