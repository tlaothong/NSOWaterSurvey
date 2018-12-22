import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FieldHerbsPlantComponent } from '../../components/field-herbs-plant/field-herbs-plant';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getAgronomyPlantSelectPlant, getPerennialPlantSelectPlant, getRicePlantSelectPlant, getRubberTreeSelectPlant, getAgiSelectRice, getAgiSelectAgronomy, getAgiSelectRubber, getAgiSelectPerennial, getArraySkipPageAgiculture, getWaterSource } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetWaterSources } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-herbs-plant',
  templateUrl: 'herbs-plant.html',
})

export class HerbsPlantPage {
  private submitRequested: boolean;
  public f: FormGroup;
  public shownData: string[];
  public Plant: string[];
  private formDataWater$ = this.store.select(getWaterSource).pipe(map(s => s));
  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private itAgi: any;
  private itWater: any;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.herbsPlant));
  private GetPlantDrycrop$ = this.store.select(getAgronomyPlantSelectPlant);
  private GetPlantPerennial$ = this.store.select(getPerennialPlantSelectPlant);
  private GetPlantRice$ = this.store.select(getRicePlantSelectPlant);
  private GetPlantRubber$ = this.store.select(getRubberTreeSelectPlant);
  private getAgiSelectRice$ = this.store.select(getAgiSelectRice);
  private getAgiSelectAgronomy$ = this.store.select(getAgiSelectAgronomy);
  private getAgiSelectRubber$ = this.store.select(getAgiSelectRubber);
  private getAgiSelectPerennial$ = this.store.select(getAgiSelectPerennial);

  public listDryCropData: any = [];
  public listPerenialData: any = [];
  public listRiceData: any = [];
  public listRubberData: any = [];
  public listSumData: any = [];
  public getAgiSelectRice:boolean;
  public getAgiSelectAgronomy:boolean;
  public getAgiSelectRubber:boolean;
  public getAgiSelectPerennial:boolean;

  @ViewChildren(FieldHerbsPlantComponent) private fieldHerbsPlant: FieldHerbsPlantComponent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields': this.fb.array([]),
    });
    this.setupPlantingCountChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HerbsPlantPage');
    this.formData$.subscribe(data => this.f.setValue(data));
    this.GetPlantRice$.subscribe(data => this.listRiceData = data);
    this.GetPlantDrycrop$.subscribe(data => this.listDryCropData = data);
    this.GetPlantRubber$.subscribe(data => this.listRubberData = data);
    this.GetPlantPerennial$.subscribe(data => this.listPerenialData = data);
    this.getAgiSelectRice$.subscribe(data => this.getAgiSelectRice = data);
    this.getAgiSelectAgronomy$.subscribe(data => this.getAgiSelectAgronomy = data);
    this.getAgiSelectRubber$.subscribe(data => this.getAgiSelectRubber = data);
    this.getAgiSelectPerennial$.subscribe(data => this.getAgiSelectPerennial = data);
    var sum = this.listDryCropData.concat(this.listPerenialData).concat(this.listRiceData).concat(this.listRubberData)
    this.listSumData = sum;
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldHerbsPlant.forEach(it => it.submitRequest());
    this.fieldHerbsPlant.forEach(it => this.store.dispatch(new SetWaterSources(it.FormItem.get('waterSources').value)));
    let fields = this.f.get('fields').value as Array<any>;
    let selectedMap = new Map<string, any>();
    fields.forEach(f => {
      if (f.plantings && f.plantings.plants) {
        f.plantings.plants.forEach(p => selectedMap.set(p.code, p));
      }
    });
    let selected = [];
    selectedMap.forEach(v => selected.push(v));
    this.checkNextPage();
  }

  private checkNextPage() {
    this.formDatAgiculture$.subscribe(data => {
      if (data != null) {
        this.itAgi = data;
      }
      console.log("it: ", this.itAgi);
    });
    if (this.itAgi.flowerCrop) {
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
          ctrl = FieldHerbsPlantComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
