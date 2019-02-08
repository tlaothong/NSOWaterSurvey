import { getArraySkipPage, getNextPageDirection, getSelectorIndex, getDataOfUnit } from './../../states/household/index';
import { SetArraySkipPage, SetWaterSourcesAgiculture, SetSelectorIndex, SetBackToRoot, LoadHouseHoldSample, LoadDataOfUnit, SetSelectG1234, SetNextPageDirection, SetBack } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { SetIsHouseHold, SetIsAgriculture, SetIsFactorial, SetIsCommercial } from '../../states/household/household.actions';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';
import { UnitButtonComponent } from '../../components/unit-button/unit-button';

@IonicPage()
@Component({
  selector: 'page-water-activity-unit',
  templateUrl: 'water-activity-unit.html',
})
export class WaterActivityUnitPage {
  @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];
  public f: FormGroup;
  private submitRequested: boolean;
  private formDataRecieve$ = this.store.select(getDataOfUnit);
  private formData$ = this.store.select(getArraySkipPage).pipe(map(s => s));
  private it: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = UnitButtonComponent.CreateFormGroup(fb);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterActivityUnitPage');
    this.formDataRecieve$.subscribe(data => {
      if (data != null) {
        this.f.get('subUnit.accessCount').setValue(data.subUnit.accessCount)
        this.setupAccessCountChanges();
        this.setupAccessCountChangesForComments();
        this.f.setValue(data);
        console.log(this.f.value);
      }
    });
  }

  public handleSubmit() {
    this.submitRequested = true;
    // this.store.dispatch(new SetArraySkipPage(this.f.value));
    this.arrayNextPageMedthod();
    console.log(this.f.value);
    
    this.store.dispatch(new LoadHouseHoldSample(this.f.value));
    this.store.dispatch(new SetSelectG1234(this.f.value));

    
    

    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let pilot: any
    arrayNextPage$.subscribe(data => {
      console.log("pilot: ", data);

      if (data != null) {
        pilot = data
      }
    });

    // this.store.dispatch(new SetIsHouseHold(this.f.get('isHouseHold').value));
    // this.store.dispatch(new SetIsAgriculture(this.f.get('isAgriculture').value));
    // this.store.dispatch(new SetIsFactorial(this.f.get('isFactorial').value));
    // this.store.dispatch(new SetIsCommercial(this.f.get('isCommercial').value));
    // this.store.dispatch(new SetWaterSourcesAgiculture(this.f.get('isAgriculture').value));

    this.navCtrl.push("CheckListPage");

    // this.checkNextPage();

  }

  arrayNextPageMedthod() {
    // let selectorIndex$ = this.store.select(getSelectorIndex).pipe(map(s => s));
    // let index: any;
    // selectorIndex$.subscribe(data => {

    //   if (data != null) {
    //     index = data
    //     console.log("selectIndex: ",index);

    //   }
    // });


    let arrayNextPage: Array<boolean> = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    this.store.dispatch(new SetNextPageDirection(arrayNextPage));
    this.store.dispatch(new SetSelectorIndex(-1));
    this.store.dispatch(new SetBackToRoot(false));
    this.store.dispatch(new SetBack(false));
  }

  private checkNextPage() {
    this.formData$.subscribe(data => {
      if (data != null) {
        this.it = data;
      }
      console.log("it: ", this.it)
    });


    // if (this.it.isHouseHold) {
    // this.navCtrl.push("ResidentialPage");
    // this.store.dispatch(new SetNextPageDirection(0));
    // }
    // else if (this.it.isAgriculture) {
    // this.navCtrl.push("AgriculturePage");
    // this.store.dispatch(new SetNextPageDirection(1));
    // }
    // else if (this.it.isFactorial) {
    // this.navCtrl.push("FactorialPage");
    // this.store.dispatch(new SetNextPageDirection(11));
    // }
    // else if (this.it.isCommercial) {
    // this.navCtrl.push("CommercialPage");
    // this.store.dispatch(new SetNextPageDirection(11));
    // }

  }
  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupAccessCountChanges() {
    const componentFormArray: string = "subUnit.accesses";
    const componentCount: string = "subUnit.accessCount";

    var onComponentCountChanges = () => {
      var accesses = (this.f.get(componentFormArray) as FormArray).controls || [];
      var accessCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      accessCount = Math.max(0, accessCount);

      for (let i = 0; i < accessCount; i++) {
        var ctrl = null;
        if (i < accesses.length) {
          const fld = accesses[i];
          ctrl = fld;
        } else {
          ctrl = new FormControl();
        }

        farr.push(ctrl);
      }
      let fgrp = this.f.get('subUnit') as FormGroup;
      fgrp.setControl('accesses', farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupAccessCountChangesForComments() {
    const componentFormArray: string = "comments";
    const componentCount: string = "subUnit.accessCount";

    var onComponentCountChanges = () => {
      var comments = (this.f.get(componentFormArray) as FormArray).controls || [];
      var accessCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      accessCount = Math.max(0, accessCount);

      for (let i = 0; i < accessCount; i++) {
        var ctrl = null;
        if (i < comments.length) {
          const fld = comments[i];
          ctrl = fld;
        } else {
          ctrl = UnitButtonComponent.CreateComment(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
