import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getFactorialCategory, getCommercialServiceType, getIsFactorial, getIsCommercial } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetNextPageDirection } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  public userInfo: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.closing));
  private factorialCategory$ = this.store.select(getFactorialCategory);
  public facCategory: string;
  private commercialServiceType$ = this.store.select(getCommercialServiceType);
  public commercialServiceType: string;
  private facCategoryUse$ = this.store.select(getIsFactorial);
  public facCategoryUse: boolean;
  private  commercialServiceUse$ = this.store.select(getIsCommercial);
  public commercialServiceUse: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.userInfo = this.fb.group({
      "informer": [null, Validators.required],
      "factorialCategoryCode": [null, Validators.required],
      "serviceTypeCode": [null, Validators.required]
    });
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.userInfo.setValue(data));
    this.factorialCategory$.subscribe(data => this.facCategory = data);
    this.commercialServiceType$.subscribe(data => this.commercialServiceType = data);
    this.facCategoryUse$.subscribe(data => this.facCategoryUse = data);
    this.commercialServiceUse$.subscribe(data => this.commercialServiceUse = data);
  }

  ionViewDidEnter() {
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.store.dispatch(new SetNextPageDirection(22));
    if (this.userInfo.valid) {
      this.navCtrl.popToRoot();
      // this.navCtrl.push("PopulationPage");
      }
  }

  public isValid(name: string): boolean {
    var ctrl = this.userInfo.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}