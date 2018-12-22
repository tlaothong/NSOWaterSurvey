import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getArraySkipPage, getWaterSource } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetFactorialCategory, SetWaterSources } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-factorial',
  templateUrl: 'factorial.html',
})
export class FactorialPage {

  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];
  private itG1_G4: any;
  private itWater: any;
  private submitRequested: boolean;
  FactoryForm: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.factory));
  private formDataG1_G4$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private formDataWater$ = this.store.select(getWaterSource).pipe(map(s => s));

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.FactoryForm = this.fb.group({
      'name': ['', Validators.required],
      'category': ['', Validators.required],
      'workersCount': ['', Validators.required],
      'heavyMachine': ['', Validators.required],
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
      'hasWasteWaterFromProduction': ['', Validators.required],
      'hasWasteWaterTreatment': ['', Validators.required],
      'wasteWaterReuse': ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.FactoryForm.setValue(data));
    console.log('ionViewDidLoad FactorialPage');
  }

  ionViewDidEnter() {

  }
  public handleSubmit() {
    this.submitRequested = true;
    this.waterSources8B.forEach(it => it.submitRequest());
    this.store.dispatch(new SetFactorialCategory(this.FactoryForm.get('category').value));
    this.store.dispatch(new SetWaterSources(this.FactoryForm.get('waterSources').value));
    this.checkNextPage();
  }

  private checkNextPage() {
    this.formDataG1_G4$.subscribe(data => {
      if (data != null) {
        this.itG1_G4 = data;
      }
      console.log("it: ", this.itG1_G4);
    });
    if (this.itG1_G4.isCommercial) {
      this.navCtrl.push("CommercialPage")
    }
    else {
      this.formDataWater$.subscribe(data => {
        if (data != null) {
          this.itWater = data;
        }
        console.log("it: ", this.itWater);
      });
      if (this.itWater != null) {
        if (this.itWater.plumbing) {
          this.navCtrl.push("PlumbingPage")
        }
        else if (this.itWater.pool) {
          this.navCtrl.push("PoolPage")
        }
        else if (this.itWater.irrigation) {
          this.navCtrl.push("IrrigationPage")
        }
        else if (this.itWater.rain) {
          this.navCtrl.push("RainPage")
        }
        else if (this.itWater.buying) {
          this.navCtrl.push("BuyingPage")
        }
      }
      else {
        this.navCtrl.push("GroundWaterPage")
      }
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FactoryForm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
