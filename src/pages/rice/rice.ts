import { SetRicePlantSelectPlant, SetRiceDoing, SetAgiSelectRice, SetSelectorIndex, LoadHouseHoldSample, SetHouseHold } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FieldFarmingComponent } from '../../components/field-farming/field-farming';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { EX_RICH_LIST } from '../../models/tree';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

@IonicPage()
@Component({
  selector: 'page-rice',
  templateUrl: 'rice.html',
})
export class RicePage {
  private submitRequested: boolean;
  f: FormGroup;

  private frontNum: any;
  private backNum: any;
  // private itWater: any;
  @ViewChildren(FieldFarmingComponent) private fieldFarmings: FieldFarmingComponent[];
  public DataList = EX_RICH_LIST;
  private formDataUnit$ = this.store.select(getHouseHoldSample);
  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture));
  private data: any
  formData$: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage, public local: LocalStorageProvider, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields': this.fb.array([]),
    });
    this.setupFieldCountChanges();
  }

  presentModalCount(item: string, title: string) {
    const modal = this.modalCtrl.create("DlgCountPage", { count: this.f.get(item).value, title: title });
    modal.onDidDismiss(data => {
      if (data) {
        this.f.get(item).setValue(data);
      }
    });
    modal.present();
  }

  ionViewDidLoad() {
    this.countNumberPage();
    this.formDataUnit$.subscribe(data => {
      if (data != null) {
        this.f.patchValue(data.agriculture.ricePlant);
        this.data = data;
      }
    })
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldFarmings.forEach(it => it.submitRequest());
    // this.store.dispatch(new SetRicePlantSelectPlant(this.DataList));
    // this.store.dispatch(new SetRiceDoing(this.f.get('doing').value));
    this.store.dispatch(new SetAgiSelectRice(true));
    this.data.agriculture.ricePlant = this.f.value;
    if (this.f.valid || (this.f.get('doing').value == false)) {
      this.arrayIsCheckMethod();
      // this.store.dispatch(new SetHouseHold(this.data));
      // this.storage.set('unit', this.data)
      let id = this.data._id
      this.storage.set(id, this.data)
      this.local.updateListUnit(this.data.buildingId, this.data)
      this.navCtrl.popTo("CheckListPage");
    }
  }

  countNumberPage() {
    console.log("countNumberPage ==> ");
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: any[];
    arrayNextPage$.subscribe(data => {
      if (data != null) {
        arrayNextPage = data;
        let arrLength = arrayNextPage.filter((it) => it == true);
        this.backNum = arrLength.length;
      }
    });
    console.log("back", this.backNum);

    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data
        this.frontNum = arrayIsCheck.length;
      }
    });
    console.log("frontNum", this.frontNum);
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(2));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 2)) {
          arrayIsCheck.push(2);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (this.f.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = FieldFarmingComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
