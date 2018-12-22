import { FieldDryCropPlantingComponent } from './../../components/field-dry-crop-planting/field-dry-crop-planting';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { map } from 'rxjs/operators';
import { SetAgronomyPlantSelectPlant, SetWaterSources } from '../../states/household/household.actions';
import { getHouseHoldSample, getArraySkipPageAgiculture, getWaterSource } from '../../states/household';

@IonicPage()
@Component({
  selector: 'page-dry-crop-planting',
  templateUrl: 'dry-crop-planting.html',
})

export class DryCropPlantingPage {
  private formDataWater$ = this.store.select(getWaterSource).pipe(map(s => s));
  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private itAgi: any;
  private itWater: any;

  @ViewChildren(FieldDryCropPlantingComponent) private fieldDryCrop: FieldDryCropPlantingComponent[];

  public agronomyPlant: FormGroup;
  private submitRequested: boolean;
  shownData: string[];
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.agronomyPlant));

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    this.agronomyPlant = this.fb.group({
      "doing": [null, Validators.required],
      "fieldCount": [null, Validators.required],
      "fields": this.fb.array([]),
    });
    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.agronomyPlant.setValue(data));
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldDryCrop.forEach(it => it.submitRequest());
    this.fieldDryCrop.forEach(it => this.store.dispatch(new SetWaterSources(it.FormItem.get('waterSources').value)));
    let fields = this.agronomyPlant.get('fields').value as Array<any>;
    let selectedMap = new Map<string, any>();
    fields.forEach(f => {
      if (f.plantings && f.plantings.plants) {
        f.plantings.plants.forEach(p => selectedMap.set(p.code, p));
      }
    });
    let selected = [];
    selectedMap.forEach(v => selected.push(v));
    this.store.dispatch(new SetAgronomyPlantSelectPlant(selected));
    this.checkNextPage();

  }

  private checkNextPage() {
    this.formDatAgiculture$.subscribe(data => {
      if (data != null) {
        this.itAgi = data;
      }
      console.log("it: ", this.itAgi);
    });
    if (this.itAgi.rubberTree) {
      this.navCtrl.push("RubberTreePage")
    }
    else if (this.itAgi.perennialPlant) {
      this.navCtrl.push("PerennialPlantingPage")
    }
    else if (this.itAgi.herbsPlant) {
      this.navCtrl.push("HerbsPlantPage")
    }
    else if (this.itAgi.flowerCrop) {
      this.navCtrl.push("FlowerCropPage")
    }
    else if (this.itAgi.mushroomPlant) {
      this.navCtrl.push("MushroomPage")
    }
    else if (this.itAgi.animalFarm) {
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
    var ctrl = this.agronomyPlant.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldDryCrop = (this.agronomyPlant.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.agronomyPlant.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;

        if (i < fieldDryCrop.length) {
          const fld = fieldDryCrop[i];
          ctrl = fld;
        } else {
          ctrl = FieldDryCropPlantingComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.agronomyPlant.setControl(componentFormArray, field);
    };

    this.agronomyPlant.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
