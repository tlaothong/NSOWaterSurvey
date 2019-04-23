import { Store } from '@ngrx/store';
import { EX_RUBBER_LIST } from './../../models/tree';
import { Component, ViewChildren } from '@angular/core';
import { getHouseHoldSample } from '../../states/household';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HouseHoldState } from '../../states/household/household.reducer';
import { FormBuilder, FormGroup, Validators, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { FieldRebbertreeComponent } from '../../components/field-rebbertree/field-rebbertree';
import { SetSelectorIndex, SaveHouseHold } from './../../states/household/household.actions';
import { CountComponent } from '../../components/count/count';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-rubber-tree',
  templateUrl: 'rubber-tree.html',
})
export class RubberTreePage {

  @ViewChildren(FieldRebbertreeComponent) private fieldrebbertree: FieldRebbertreeComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  public rubbertree: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample);
  public DataList = EX_RUBBER_LIST;
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    this.rubbertree = this.fb.group({
      "doing": [null, Validators.required],
      "fieldCount": [null, [Validators.required, Validators.min(1)]],
      'fields': fb.array([]),
    },
      {
        validator: RubberTreePage.checkAnyOrOther()
      });

    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldrebbertree.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
    this.isCheckWarningBox = this.rubbertree.valid || (this.rubbertree.get('doing').value == false);

    if (this.rubbertree.valid) {
      this.arrayIsCheckMethod();

      let argi = {
        ...this.appState.houseHoldUnit.agriculture,
        rubberTree: this.rubbertree.value,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        agriculture: argi,
      };
      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.popTo("CheckListPage");
    }
  }



  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(4));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {

    //   if (data != null) {
    //     arrayIsCheck = data;

    //     if (arrayIsCheck.every(it => it != 4)) {
    //       arrayIsCheck.push(4);
    //     }

    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const doing = c.get('doing');
      const fieldCount = c.get('fieldCount');

      if (doing.value == null) {
        return { 'doing': true };
      }
      if (doing.value != null && doing.value == true && fieldCount.value <= 0) {
        return { 'fieldCount': true };
      }

      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.rubbertree.get(name);
    if (name == 'doing') {
      let ctrls = this.rubbertree;
      return ctrls.errors && ctrls.errors.doing && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'fieldCount') {
      let ctrls = this.rubbertree;
      return ctrls.errors && ctrls.errors.fieldCount && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
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
