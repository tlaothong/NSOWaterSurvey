import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FieldMushroomComponent } from '../../components/field-mushroom/field-mushroom';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getArraySkipPageAgiculture, getWaterSource } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetWaterSources } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-mushroom',
  templateUrl: 'mushroom.html',
})
export class MushroomPage {
  public f: FormGroup;
  private submitRequested: boolean;
  private formDataWater$ = this.store.select(getWaterSource).pipe(map(s => s));
  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private itAgi: any;
  private itWater: any;

  @ViewChildren(FieldMushroomComponent) private fieldMushroom: FieldMushroomComponent[];

  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.mushroomPlant));

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, private fb: FormBuilder) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields': this.fb.array([]),
    });

    this.setupPlantingCountChanges()
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));

    console.log('ionViewDidLoad MushroomPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldMushroom.forEach(it => it.submitRequest());
    this.fieldMushroom.forEach(it => this.store.dispatch(new SetWaterSources(it.FormItem.get('waterSources').value)));
    this.checkNextPage();
  }

  private checkNextPage() {
    this.formDatAgiculture$.subscribe(data => {
      if (data != null) {
        this.itAgi = data;
      }
      console.log("it: ", this.itAgi);
    });
    if (this.itAgi.animalFarm) {
      this.navCtrl.push("AnimalFarmPage")
    }
    else if (this.itAgi.aquaticAnimals) {
      this.navCtrl.push("WaterAnimalPlantingPage")
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
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupPlantingCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (this.f.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      fieldCount = Math.max(1, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = FieldMushroomComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
