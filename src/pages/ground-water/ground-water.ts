import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { GroundWaterUsageComponent } from '../../components/ground-water-usage/ground-water-usage';
import { GroundWaterUsagePublicComponent } from '../../components/ground-water-usage-public/ground-water-usage-public';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getResidentialGardeningUse, getRiceDoing, getIsCommercial, getIsFactorial, getIsHouseHold, getIsAgriculture } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-ground-water',
  templateUrl: 'ground-water.html',
})

export class GroundWaterPage {

  @ViewChildren(GroundWaterUsagePublicComponent) private groundWaterUsagePublic: GroundWaterUsagePublicComponent[];
  @ViewChildren(GroundWaterUsageComponent) private groundWaterUsage: GroundWaterUsageComponent[];

  private submitRequested: boolean;
  public f: FormGroup;

  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.waterUsage.groundWater));

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

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      'privateGroundWater': this.fb.group({
        'doing': [null, Validators.required],
        'allCount': [null, Validators.required],
        'waterResourceCount': [null, Validators.required],
        'waterResources': this.fb.array([])
      }),
      'publicGroundWater': this.fb.group({
        'doing': [null, Validators.required],
        'waterResourceCount': [null, Validators.required],
        'waterResources': this.fb.array([])
      })
    });

    this.setupuseGroundWaterCountChanges();
    this.setupusePublicGroundWaterCountChanges();
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

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.groundWaterUsage.forEach(it => it.submitRequest());
    this.groundWaterUsagePublic.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupuseGroundWaterCountChanges() {
    const componentFormArray: string = "privateGroundWater.waterResources";
    const componentCount: string = "privateGroundWater.waterResourceCount";

    var onComponentCountChanges = () => {
      var avgUsageWater = (this.f.get(componentFormArray) as FormArray).controls || [];
      var useGroundWaterCount = this.f.get(componentCount).value || 0;
      var avg = this.fb.array([]);

      useGroundWaterCount = Math.max(0, useGroundWaterCount);

      for (let i = 0; i < useGroundWaterCount; i++) {
        var ctrl = null;
        if (i < avgUsageWater.length) {
          const fld = avgUsageWater[i];
          ctrl = fld;
        } else {
          ctrl = GroundWaterUsageComponent.CreateFormGroup(this.fb);
        }

        avg.push(ctrl);
      }
      (this.f.get('privateGroundWater') as FormGroup).setControl('waterResources', avg);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupusePublicGroundWaterCountChanges() {
    const componentFormArray: string = "publicGroundWater.waterResources";
    const componentCount: string = "publicGroundWater.waterResourceCount";

    var onComponentCountChanges = () => {
      var usePerMonth = (this.f.get(componentFormArray) as FormArray).controls || [];
      var count = this.f.get(componentCount).value || 0;
      var avgp = this.fb.array([]);

      count = Math.max(0, count);

      for (let i = 0; i < count; i++) {
        var ctrl = null;
        if (i < usePerMonth.length) {
          const fld = usePerMonth[i];
          ctrl = fld;
        } else {
          ctrl = GroundWaterUsagePublicComponent.CreateFormGroup(this.fb);
        }

        avgp.push(ctrl);
      }
      (this.f.get('publicGroundWater') as FormGroup).setControl('waterResources', avgp);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
