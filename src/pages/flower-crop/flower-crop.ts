import { FieldFlowerCropComponent } from './../../components/field-flower-crop/field-flower-crop';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EX_TREEDOK_LIST } from '../../models/tree';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getPerennialPlantSelectPlant, getAgronomyPlantSelectPlant, getRicePlantSelectPlant, getRubberTreeSelectPlant, getAgiSelectRice, getAgiSelectAgronomy, getAgiSelectRubber, getAgiSelectPerennial, getWaterSource, getArraySkipPageAgiculture, getCheckWaterPlumbing, getArraySkipPage, getArrayIsCheck, getSelectorIndex, getNextPageDirection, getDataOfUnit } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetWaterSources, SetNextPageDirection, SetSelectorIndex } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-flower-crop',
  templateUrl: 'flower-crop.html',
})
export class FlowerCropPage {


  @ViewChildren(FieldFlowerCropComponent) private fieldFlowerCrop: FieldFlowerCropComponent[];
  private submitRequested: boolean;
  public flowerCropFrm: FormGroup;
  public shownData: string[];
  private formCheckPlumbing$ = this.store.select(getCheckWaterPlumbing).pipe(map(s => s));
  private itPlumbing: any;
  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private itAgi: any;
  private formDataG1_G4$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private itG1_G4: any;
  private formDataUnit$ = this.store.select(getDataOfUnit).pipe(map(s => s.agriculture));
  private formData$: any;
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
  public getAgiSelectRice: boolean;
  public getAgiSelectAgronomy: boolean;
  public getAgiSelectRubber: boolean;
  public getAgiSelectPerennial: boolean;
  private frontNum: any;
  private backNum: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>) {
    this.flowerCropFrm = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields': fb.array([
        FieldFlowerCropComponent.CreateFormGroup(fb)]),
    });
    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowerCropPage');
    this.countNumberPage();
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        this.formData$ = this.store.select(getDataOfUnit).pipe(map(s => s.agriculture.flowerCrop));
        this.formData$.subscribe(data => {
          if (data != null) {
            this.flowerCropFrm.setValue(data)
          }
        });
      }
    })
    this.GetPlantRice$.subscribe(data => this.listRiceData = data);
    this.GetPlantDrycrop$.subscribe(data => this.listDryCropData = data);
    this.GetPlantRubber$.subscribe(data => this.listRubberData = data);
    this.GetPlantPerennial$.subscribe(data => this.listPerenialData = data);
    var sum = this.listDryCropData.concat(this.listPerenialData).concat(this.listRiceData).concat(this.listRubberData)
    this.getAgiSelectRice$.subscribe(data => this.getAgiSelectRice = data);
    this.getAgiSelectAgronomy$.subscribe(data => this.getAgiSelectAgronomy = data);
    this.getAgiSelectRubber$.subscribe(data => this.getAgiSelectRubber = data);
    this.getAgiSelectPerennial$.subscribe(data => this.getAgiSelectPerennial = data);
    console.log("rice agronomy rubber peren ",this.getAgiSelectRice,this.getAgiSelectAgronomy,this.getAgiSelectRubber,this.getAgiSelectPerennial);
    
    this.listSumData = sum;
    console.log('listSumData');
    console.log(this.listSumData);
  }

  model() {
    const modal = this.modalCtrl.create("SearchDropdownPage",
      { title: "ไม้ดอก ไม้ประดับ การเพาะพันธุ์ไม้", selected: [], list: EX_TREEDOK_LIST, limit: 5 });

    modal.onDidDismiss(data => {
      if (data) {
        var adata = data as Array<string>;
        this.shownData = adata.map(it => it.split(".")[1]);
      }
    });

    modal.present();
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldFlowerCrop.forEach(it => it.submitRequest());
    console.log(this.flowerCropFrm.value);
    let fields = this.flowerCropFrm.get('fields').value as Array<any>;
    let selectedMap = new Map<string, any>();
    fields.forEach(f => {
      if (f.plantings && f.plantings.plants) {
        f.plantings.plants.forEach(p => selectedMap.set(p.code, p));
      }
    });
    let selected = [];
    selectedMap.forEach(v => selected.push(v));
    // this.store.dispatch(new SetNextPageDirection(8));

    if (this.flowerCropFrm.valid) {
      this.arrayIsCheckMethod();
      this.navCtrl.setRoot("CheckListPage");
      // this.checkNextPage();
    }
  }

  countNumberPage() {
    console.log("onSubmit ");
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: any[];
    arrayNextPage$.subscribe(data => {

      if (data != null) {
        arrayNextPage = data;
        this.backNum = arrayNextPage.length;
      }

    });
    console.log("back",this.backNum);

    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {

      if (data != null) {
        arrayIsCheck = data
         this.frontNum = arrayIsCheck.length;
      }

    });
    console.log("frontNum",this.frontNum);
  }

  arrayIsCheckMethod() {
    let selectorIndex$ = this.store.select(getSelectorIndex).pipe(map(s => s));
      let index: any;
      selectorIndex$.subscribe(data => {
  
        if (data != null) {
          index = data
          console.log("selectIndex: ", index);
        }
      });
      
      this.store.dispatch(new SetSelectorIndex(index + 1));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 7)) {
          arrayIsCheck.push(7);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  private checkNextPage() {
    this.formDataG1_G4$.subscribe(data => {
      if (data != null) {
        this.itG1_G4 = data;
      }
      console.log("itG1_G4: ", this.itG1_G4);
    });
    this.formDatAgiculture$.subscribe(data => {
      if (data != null) {
        this.itAgi = data;
      }
      console.log("it: ", this.itAgi);
    });
    if (this.itAgi.mushroomPlant) {
      this.navCtrl.push("MushroomPage")
    }
    else if (this.itAgi.animalFarm) {
      this.navCtrl.push("AnimalFarmPage")
    }
    else if (this.itAgi.aquaticAnimals) {
      this.navCtrl.push("WaterAnimalPlantingPage")
    }
    else if (this.itG1_G4.isFactorial) {
      this.navCtrl.push("FactorialPage")
    }
    else if (this.itG1_G4.isCommercial) {
      this.navCtrl.push("CommercialPage")
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
    var ctrl = this.flowerCropFrm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldFlowerCrop = (this.flowerCropFrm.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.flowerCropFrm.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldFlowerCrop.length) {
          const fld = fieldFlowerCrop[i];
          ctrl = fld;
        } else {
          ctrl = FieldFlowerCropComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.flowerCropFrm.setControl(componentFormArray, field);
    };

    this.flowerCropFrm.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
