import { SetWaterSourcesFactory, SetNextPageDirection } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getArraySkipPage, getWaterSource, getCheckWaterPlumbing, getArrayIsCheck } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetFactorialCategory, SetWaterSources, SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-factorial',
  templateUrl: 'factorial.html',
})
export class FactorialPage {

  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];
  private itG1_G4: any;
  private itPlumbing: any;
  private submitRequested: boolean;
  FactoryForm: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.factory));
  private formDataG1_G4$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private formCheckPlumbing$ = this.store.select(getCheckWaterPlumbing).pipe(map(s => s));

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
    this.dispatchWaterSource();
    this.store.dispatch(new SetWaterSourcesFactory(this.FactoryForm.get('waterSources').value));
    console.log("waterFac",this.FactoryForm.get('waterSources').value);
    this.store.dispatch(new SetNextPageDirection(12));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck :Array<number>;
    arrayIsCheck$.subscribe(data => arrayIsCheck = data);
    arrayIsCheck.push(11);
    console.log(arrayIsCheck);
    if (this.FactoryForm.valid) {
    // this.navCtrl.setRoot("CheckListPage");
    this.navCtrl.pop();
      // this.checkNextPage();
    }
  }

  private dispatchWaterSource() {
   if (this.FactoryForm.get('waterSources.plumbing').value) {
      this.store.dispatch(new SetCheckWaterPlumbing(this.FactoryForm.get('waterSources.plumbing').value));
    }
    if (this.FactoryForm.get('waterSources.river').value) {
      this.store.dispatch(new SetCheckWaterRiver(this.FactoryForm.get('waterSources.river').value));
    }
    if (this.FactoryForm.get('waterSources.irrigation').value) {
      this.store.dispatch(new SetCheckWaterIrrigation(this.FactoryForm.get('waterSources.irrigation').value));
    }
    if (this.FactoryForm.get('waterSources.rain').value) {
      this.store.dispatch(new SetCheckWaterRain(this.FactoryForm.get('waterSources.rain').value));
    }
    if (this.FactoryForm.get('waterSources.buying').value) {
      this.store.dispatch(new SetCheckWaterBuying(this.FactoryForm.get('waterSources.buying').value));
    }
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
      this.formCheckPlumbing$.subscribe(data => {
        if (data != null) {
          this.itPlumbing = data;
        }
        console.log("itWaterAfter: ", this.itPlumbing);
      });
      if (this.itPlumbing) {
        this.navCtrl.push("PlumbingPage")
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
