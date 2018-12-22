import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { EX_RUBBER_LIST } from './../../models/tree';
import { Component, ViewChildren } from '@angular/core';
import { getHouseHoldSample, getArraySkipPageAgiculture, getWaterSource } from '../../states/household';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HouseHoldState } from '../../states/household/household.reducer';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { FieldRebbertreeComponent } from '../../components/field-rebbertree/field-rebbertree';
import { SetRubberTreeSelectPlant, SetWaterSources } from './../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-rubber-tree',
  templateUrl: 'rubber-tree.html',
})
export class RubberTreePage {

  public rubbertree: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.rubberTree));
  private formDataWater$ = this.store.select(getWaterSource).pipe(map(s => s));
  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private itAgi: any;
  private itWater: any;
  @ViewChildren(FieldRebbertreeComponent) private fieldrebbertree: FieldRebbertreeComponent[];
  public DataList = EX_RUBBER_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.rubbertree = this.fb.group({
      "doing": [null, Validators.required],
      "fieldCount": [null, Validators.required],
      'fields': fb.array([]),
    });

    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.rubbertree.setValue(data));
  }

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldrebbertree.forEach(it => it.submitRequest());
    this.fieldrebbertree.forEach(it => this.store.dispatch(new SetWaterSources(it.FormItem.get('waterSources').value)));
    this.store.dispatch(new SetRubberTreeSelectPlant(this.DataList));
    this.checkNextPage();
  }
  
  private checkNextPage() {
    this.formDatAgiculture$.subscribe(data => {
      if (data != null) {
        this.itAgi = data;
      }
      console.log("it: ", this.itAgi);
    });
    if (this.itAgi.perennialPlant) {
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
    var ctrl = this.rubbertree.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldRubbertree = (this.rubbertree.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.rubbertree.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldRubbertree.length) {
          const fld = fieldRubbertree[i];
          ctrl = fld;
        } else {
          ctrl = FieldRebbertreeComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.rubbertree.setControl(componentFormArray, field);
    };

    this.rubbertree.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
