import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FieldPerenialPlantingComponent } from '../../components/field-perenial-planting/field-perenial-planting';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getArrayIsCheck, getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetPerennialPlantSelectPlant, SetAgiSelectPerennial, SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { CountComponent } from '../../components/count/count';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-perennial-planting',
  templateUrl: 'perennial-planting.html',
})
export class PerennialPlantingPage {

  public PerennialPlantingFrm: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample);
  private isCheckWarningBox: boolean;
  private frontNum: any;
  private backNum: any;
  @ViewChildren(FieldPerenialPlantingComponent) private fieldPerenialPlanting: FieldPerenialPlantingComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];

  constructor(public navCtrl: NavController, private storage: Storage, public local: LocalStorageProvider, public navParams: NavParams, private fb: FormBuilder, public modalCtrl: ModalController, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.PerennialPlantingFrm = this.fb.group({
      "doing": [null, Validators.required],
      "fieldCount": [null, [Validators.required, Validators.min(1)]],
      "fields": fb.array([]),
    });
    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldPerenialPlanting.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
    console.log(this.PerennialPlantingFrm.value);
    let fields = this.PerennialPlantingFrm.get('fields').value as Array<any>;
    let selectedMap = new Map<string, any>();
    fields.forEach(f => {
      if (f.plantings && f.plantings.plants) {
        f.plantings.plants.forEach(p => selectedMap.set(p.code, p));
      }
    });
    let selected = [];
    selectedMap.forEach(v => selected.push(v));
    this.isCheckWarningBox = ((this.PerennialPlantingFrm.valid && selected.length > 0) || this.PerennialPlantingFrm.get('doing').value == false);

    if ((this.PerennialPlantingFrm.valid && selected.length > 0) || this.PerennialPlantingFrm.get('doing').value == false) {
      this.arrayIsCheckMethod();
      let perennial = {
        ...this.appState.houseHoldUnit.agriculture,
        perennialPlant: this.PerennialPlantingFrm.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        agriculture: perennial,
      };

      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(5));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 5)) {
    //       arrayIsCheck.push(5);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public isValid(name: string): boolean {
    var ctrl = this.PerennialPlantingFrm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fieldPerenial = (this.PerennialPlantingFrm.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.PerennialPlantingFrm.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldPerenial.length) {
          const fld = fieldPerenial[i];
          ctrl = fld;
        } else {
          ctrl = FieldPerenialPlantingComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.PerennialPlantingFrm.setControl(componentFormArray, field);
    };

    this.PerennialPlantingFrm.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
