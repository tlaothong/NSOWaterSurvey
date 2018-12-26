import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PumpComponent } from '../../components/pump/pump';
import { WaterActivity6Component } from '../../components/water-activity6/water-activity6';
import { WaterProblem4Component } from '../../components/water-problem4/water-problem4';
import { getHouseHoldSample, getResidentialGardeningUse, getRiceDoing, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture, getCheckWaterRain, getCheckWaterBuying, getArraySkipPage } from '../../states/household';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';

@IonicPage()
@Component({
  selector: 'page-irrigation',
  templateUrl: 'irrigation.html',
})
export class IrrigationPage {

  private submitRequested: boolean;
  f: FormGroup;
  @ViewChildren(PumpComponent) private pump: PumpComponent[];
  @ViewChildren(WaterActivity6Component) private waterActivity6: WaterActivity6Component[];
  @ViewChildren(WaterProblem4Component) private waterProblem4: WaterProblem4Component[];

  private formDataG1_G4$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private itG1_G4: any;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.irrigation));
  private formCheckRain$ = this.store.select(getCheckWaterRain).pipe(map(s => s));
  private itRain: any;
  private formCheckBuying$ = this.store.select(getCheckWaterBuying).pipe(map(s => s));
  private itBuying: any;
  private gardeningUse$ = this.store.select(getResidentialGardeningUse);
  public gardeningUse: boolean;

  private riceDoing$ = this.store.select(getRiceDoing);
  public riceDoing: boolean;

  private commerceUse$ = this.store.select(getIsCommercial);
  public commerceUse: boolean;
  private factoryUse$ = this.store.select(getIsFactorial);
  public factoryUse: boolean;
  private residenceUse$ = this.store.select(getIsHouseHold);
  public residenceUse: boolean;
  private agricultureUse$ = this.store.select(getIsAgriculture);
  public agricultureUse: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {

    this.f = this.fb.group({
      'hasCubicMeterPerMonth': [null, Validators.required],
      'cubicMeterPerMonth': [null, Validators.required],
      'hasPump': [null, Validators.required],
      'pumpCount': [null, Validators.required],
      "pumps": this.fb.array([]),
      'waterActivities': WaterActivity6Component.CreateFormGroup(fb),
      'qualityProblem': fb.group({
        "hasProblem": [null, Validators.required],
        "problem": WaterProblem4Component.CreateFormGroup(fb)
      })
    });
    this.setupPumpCountChanges()
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));
    this.gardeningUse$.subscribe(data => this.gardeningUse = data);
    this.riceDoing$.subscribe(data => this.riceDoing = data);
    this.commerceUse$.subscribe(data => this.commerceUse = data);
    this.factoryUse$.subscribe(data => this.factoryUse = data);
    this.residenceUse$.subscribe(data => this.residenceUse = data);
    this.agricultureUse$.subscribe(data => this.agricultureUse = data);
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.pump.forEach(it => it.submitRequest());
    this.waterActivity6.forEach(it => it.submitRequest());
    this.waterProblem4.forEach(it => it.submitRequest());
    if (this.f.valid) {
      this.checkNextPage();
    }
  }

  private checkNextPage() {
    this.formCheckRain$.subscribe(data => {
      if (data != null) {
        this.itRain = data;
      }
      console.log("itRain: ", this.itRain);
    });
    this.formCheckBuying$.subscribe(data => {
      if (data != null) {
        this.itBuying = data;
      }
      console.log("itBuying: ", this.itBuying);
    });

    if (this.itRain) {
      this.navCtrl.push("RainPage")
    }
    else if (this.itBuying) {
      this.navCtrl.push("BuyingPage")
    }
    else {
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

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupPumpCountChanges() {
    const componentFormArray: string = "pumps";
    const componentCount: string = "pumpCount";

    var onComponentCountChanges = () => {
      var pump = (this.f.get(componentFormArray) as FormArray).controls || [];
      var pumpCount = this.f.get(componentCount).value || 0;
      var p = this.fb.array([]);

      pumpCount = Math.max(0, pumpCount);

      for (let i = 0; i < pumpCount; i++) {
        var ctrl = null;
        if (i < pump.length) {
          const fld = pump[i];
          ctrl = fld;
        } else {
          ctrl = PumpComponent.CreateFormGroup(this.fb);
        }

        p.push(ctrl);
      }
      this.f.setControl(componentFormArray, p);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
