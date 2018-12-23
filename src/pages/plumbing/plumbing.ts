import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaterProblem6Component } from '../../components/water-problem6/water-problem6';
import { WaterActivity5Component } from '../../components/water-activity5/water-activity5';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getResidentialGardeningUse, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-plumbing',
  templateUrl: 'plumbing.html',
})
export class PlumbingPage {

  @ViewChildren(WaterProblem6Component) private waterProblem6: WaterProblem6Component[];
  @ViewChildren(WaterActivity5Component) private waterActivity5: WaterActivity5Component[];

  public f: FormGroup;
  private submitRequested: boolean;
  private formDataPlumbing$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.plumbing));
  private formDataHouseHold$ = this.store.select(getHouseHoldSample).pipe(map(s => s));

  private gardeningUse$ = this.store.select(getResidentialGardeningUse);
  public gardeningUse: boolean;
  private commerceUse$ = this.store.select(getIsCommercial);
  public commerceUse: boolean;
  private factoryUse$ = this.store.select(getIsFactorial);
  public factoryUse: boolean;
  private residenceUse$ = this.store.select(getIsHouseHold);
  public residenceUse: boolean;
  private agricultureUse$ = this.store.select(getIsAgriculture);
  public agricultureUse: boolean;

  public household: any;
  public resultSumOfWaterActivities: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'mwa': this.fb.group({
        'doing': [null, Validators.required],
        'qualityProblem': this.fb.group({
          'hasProblem': [null, Validators.required],
          'problem': WaterProblem6Component.CreateFormGroup(fb),
        }),
        'plumbingUsage': this.fb.group({
          'waterQuantity': [null, Validators.required],
          'cubicMeterPerMonth': [null, Validators.required],
          'waterBill': [null, Validators.required]
        })
      }),
      'pwa': this.fb.group({
        'doing': [null, Validators.required],
        'qualityProblem': this.fb.group({
          'hasProblem': [null, Validators.required],
          'problem': WaterProblem6Component.CreateFormGroup(fb),
        }),
        'plumbingUsage': this.fb.group({
          'waterQuantity': [null, Validators.required],
          'cubicMeterPerMonth': [null, Validators.required],
          'waterBill': [null, Validators.required],
        })
      }),
      'other': this.fb.group({
        'doing': [null, Validators.required],
        'qualityProblem': this.fb.group({
          'hasProblem': [null, Validators.required],
          'problem': WaterProblem6Component.CreateFormGroup(fb),
        }),
        'plumbingUsage': this.fb.group({
          'waterQuantity': [null, Validators.required],
          'cubicMeterPerMonth': [null, Validators.required],
          'waterBill': [null, Validators.required],
        })
      }),
      'waterActivityMWA': WaterActivity5Component.CreateFormGroup(this.fb),
      'waterActivityPWA': WaterActivity5Component.CreateFormGroup(this.fb),
      'waterActivityOther': WaterActivity5Component.CreateFormGroup(this.fb),
      'hasWaterNotRunning': [null, Validators.required],
      'waterNotRunningCount': [null, Validators.required]
    });
    this.resultSumOfWaterActivities = {
      'MWA': 0,
      'PWA': 0,
      'Other': 0,
    };
  }

  ionViewDidLoad() {
    this.formDataPlumbing$.subscribe(data => this.f.setValue(data));
    this.formDataHouseHold$.subscribe(data => this.household = data);
    this.gardeningUse$.subscribe(data => this.gardeningUse = data);
    this.commerceUse$.subscribe(data => this.commerceUse = data);
    this.factoryUse$.subscribe(data => this.factoryUse = data);
    this.residenceUse$.subscribe(data => this.residenceUse = data);
    this.agricultureUse$.subscribe(data => this.agricultureUse = data);
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.waterProblem6.forEach(it => it.submitRequest());
    this.waterActivity5.forEach(it => it.submitRequest());
  }

  public resetSumOfWaterActivities() {
    this.resultSumOfWaterActivities = {
      'MWA': 0,
      'PWA': 0,
      'Other': 0,
    };
  }

  public sumWaterActivities() {

  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
