import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { WaterSources9Component } from '../../components/water-sources9/water-sources9';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getArraySkipPageAgiculture, getCheckWaterPlumbing } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetResidentialGardeningUse, SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-animal-farm',
  templateUrl: 'animal-farm.html',
})
export class AnimalFarmPage {

  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private itAgi: any;
  private formCheckPlumbing$ = this.store.select(getCheckWaterPlumbing).pipe(map(s => s));
  private itPlumbing: any;
  @ViewChildren(TableCheckItemCountComponent) private tableCheckItemCount: TableCheckItemCountComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];

  private submitRequested: boolean;
  public f: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.animalFarm));

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, public alertCtrl: AlertController, public fb: FormBuilder) {
    this.f = this.fb.group({
      "doing": [null, Validators.required],
      'cow': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'buffalo': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'pig': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'goat': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'sheep': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'chicken': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'duck': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'goose': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'silkWool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'other': TableCheckItemCountComponent.CreateFormGroup(this.fb),
      'otherName': [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(this.fb)
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalFarmPage');
    this.formData$.subscribe(data => this.f.setValue(data));
  }

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.tableCheckItemCount.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.dispatchWaterSource();
    this.checkNextPage();
  }

  private dispatchWaterSource() {
    if (this.f.get('waterSources.plumbing').value) {
      this.store.dispatch(new SetCheckWaterPlumbing(this.f.get('waterSources.plumbing').value));
    }
    if (this.f.get('waterSources.river').value) {
      this.store.dispatch(new SetCheckWaterRiver(this.f.get('waterSources.river').value));
    }
    if (this.f.get('waterSources.irrigation').value) {
      this.store.dispatch(new SetCheckWaterIrrigation(this.f.get('waterSources.irrigation').value));
    }
    if (this.f.get('waterSources.rain').value) {
      this.store.dispatch(new SetCheckWaterRain(this.f.get('waterSources.rain').value));
    }
    if (this.f.get('waterSources.buying').value) {
      this.store.dispatch(new SetCheckWaterBuying(this.f.get('waterSources.buying').value));
    }
    console.log("dispatch animalFarm can work");
  }

  private checkNextPage() {
    this.formDatAgiculture$.subscribe(data => {
      if (data != null) {
        this.itAgi = data;
      }
      console.log("it: ", this.itAgi);
    });
    if (this.itAgi.aquaticAnimals) {
      this.navCtrl.push("WaterAnimalPlantingPage")
    }
    else {
      this.formCheckPlumbing$.subscribe(data => {
        if (data != null) {
          this.itPlumbing = data;
        }
        console.log("itPlumbing: ", this.itPlumbing);
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
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}    