import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FieldMushroomComponent } from '../../components/field-mushroom/field-mushroom';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample } from '../../states/household';
import { SetSelectorIndex, SaveHouseHold } from '../../states/household/household.actions';
import { CountComponent } from '../../components/count/count';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-mushroom',
  templateUrl: 'mushroom.html',
})
export class MushroomPage {
  public f: FormGroup;
  private submitRequested: boolean;
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;
  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture));
  private formData$ = this.store.select(getHouseHoldSample);
  // private formData: any;

  @ViewChildren(FieldMushroomComponent) private fieldMushroom: FieldMushroomComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private store: Store<HouseHoldState>, public navParams: NavParams, private fb: FormBuilder, private appState: AppStateProvider) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required, Validators.min(1)])],
      'fields': this.fb.array([]),
    });
    this.setupPlantingCountChanges()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MushroomPage');
    
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldMushroom.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
    this.isCheckWarningBox = this.f.valid || (this.f.get('doing').value == false);
    if (this.f.valid || (this.f.get('doing').value == false)) {
      this.arrayIsCheckMethod();
      let mushroom = {
        ...this.appState.houseHoldUnit.agriculture,
        mushroomPlant: this.f.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        agriculture: mushroom,
      }
      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(8));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 8)) {
    //       arrayIsCheck.push(8);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public copyToTheRest(srcIndex: number) {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    let fields = (this.f.get(componentFormArray) as FormArray);
    let fieldCount = this.f.get(componentCount).value || 0;

    const fsrc = fields.at(srcIndex).value;

    for (let index = srcIndex + 1; index < fieldCount; index++) {
      const copy = FieldMushroomComponent.CreateFormGroup(this.fb);
      copy.setValue(fsrc);
      fields.setControl(index, copy);
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
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
