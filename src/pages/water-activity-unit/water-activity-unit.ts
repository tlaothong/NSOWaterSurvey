import { getNextPageDirection } from './../../states/household/index';
import { SetWaterSourcesAgiculture, SetSelectorIndex, SetBackToRoot, LoadHouseHoldSample, SetSelectG1234, SetNextPageDirection, SetBack, LoadHouseHoldSampleSuccess, SaveHouseHold } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { SetIsHouseHold, SetIsAgriculture, SetIsFactorial, SetIsCommercial } from '../../states/household/household.actions';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';
import { UnitButtonComponent } from '../../components/unit-button/unit-button';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-water-activity-unit',
  templateUrl: 'water-activity-unit.html',
})
export class WaterActivityUnitPage {
  @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];
  public f: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample);
  public dataHouseHold: any;
  public unitCount: any;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public local: LocalStorageProvider, public navParams: NavParams, private storage: Storage, private fb: FormBuilder, private store: Store<HouseHoldState>, private appState: AppStateProvider) {
    // this.f = UnitButtonComponent.CreateFormGroup(fb);
    // this.f = navParams.get('FormItem');
    console.log(this.f);
    this.f = fb.group({
      'subUnit': fb.group({
        'roomNumber': [null],
        'accessCount': [0],
        'accesses': fb.array([0]),
        'hasPlumbing': [false],
        'hasPlumbingMeter': [false],
        'isPlumbingMeterXWA': [false],
        'hasGroundWater': [false],
        'hasGroundWaterMeter': [false],
      }),
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
      'comments': fb.array([]),

    });
  }

  ionViewDidEnter() {
    this.unitCount = this.navParams.get('unitCount');
    console.log("WaterActivityUnitPage");

    this.setupAccessCountChanges();
    this.setupAccessCountChangesForComments();

    // this.formData$.subscribe(data => {
    //   if (data != null) {
    //     this.dataHouseHold = data;
    //     console.log(this.dataHouseHold);

    //     this.f.get('subUnit.accessCount').patchValue(this.dataHouseHold.subUnit.accessCount)
        
    //     this.setupAccessCountChanges();
    //     this.setupAccessCountChangesForComments();

    //     this.f.get('subUnit').patchValue(this.dataHouseHold.subUnit)
    //     this.f.get('comments').patchValue(this.dataHouseHold.comments)
    //     this.f.get('isHouseHold').setValue(this.dataHouseHold.isHouseHold)
    //     this.f.get('isAgriculture').setValue(this.dataHouseHold.isAgriculture)
    //     this.f.get('isFactorial').setValue(this.dataHouseHold.isFactorial)
    //     this.f.get('isCommercial').setValue(this.dataHouseHold.isCommercial)
    //     console.log(this.f.value);
    //     console.log("this.dataHouseHold.isAgriculture");
    //     console.log(this.dataHouseHold.isAgriculture);


    //   }
    // });
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.arrayNextPageMedthod();
    // let objRes: any = {
    //   isHouseHold: this.f.get('isHouseHold').value,
    //   isAgriculture: this.f.get('isAgriculture').value,
    //   isFactorial: this.f.get('isFactorial').value,
    //   isCommercial: this.f.get('isCommercial').value,
    // }

    if (this.f.valid) {
      let houseHold = {
        ...this.appState.houseHoldUnit,
        isHouseHold: this.f.get('isHouseHold').value,
        isAgriculture: this.f.get('isAgriculture').value,
        isFactorial: this.f.get('isFactorial').value,
        isCommercial: this.f.get('isCommercial').value,
      };

      this.store.dispatch(new SaveHouseHold(houseHold));
      this.navCtrl.push("CheckListPage", { id: houseHold._id });
    }
    
    // let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    // let pilot: any
    // arrayNextPage$.subscribe(data => {
    //   if (data != null) {
    //     pilot = data
    //   }
    // });

    // this.dataHouseHold.isHouseHold = this.f.get('isHouseHold').value;
    // this.dataHouseHold.isAgriculture = this.f.get('isAgriculture').value;
    // this.dataHouseHold.isFactorial = this.f.get('isFactorial').value;
    // this.dataHouseHold.isCommercial = this.f.get('isCommercial').value;
    // this.dataHouseHold.subUnit = this.f.get('subUnit').value;
    // this.dataHouseHold.subUnit.accessCount = this.f.get('subUnit.accessCount').value;
    // this.dataHouseHold.comments = this.f.get('comments').value;

    // if ((this.f.get('isHouseHold').value != null)
    //   && (this.f.get('isAgriculture').value != null)
    //   && (this.f.get('isFactorial').value != null)
    //   && (this.f.get('isCommercial').value != null)) {
    //   console.log(this.f.value);
    //   let id = this.dataHouseHold._id;
    //   this.storage.set(id, this.dataHouseHold);
    //   let key = this.dataHouseHold.buildingId;

    //   // TODO: Replace this code with the new one

    //   // this.storage.get(this.dataHouseHold.buildingId).then((val) => {
    //   //   let bd = val
    //   //   bd.lastUpdate = Date.now()
    //   //   this.storage.set(this.dataHouseHold.buildingId, bd)
    //   //   this.storage.get(bd.ea).then((val) => {
    //   //     let BDlist = val
    //   //     let index = BDlist.findIndex(it => it._id == bd._id)
    //   //     BDlist.splice(index, 1, bd);
    //   //     this.storage.set(bd.ea, BDlist)
    //   //   })
    //   // })

    //   // TODO: Replace with the working code

    //   // if (this.dataHouseHold.status == "complete") {
    //   //   this.storage.get(this.dataHouseHold.buildingId).then((val) => {
    //   //     if (val != null) {
    //   //       let building = val;
    //   //       // building.unitCountComplete++;
    //   //       // if (building.unitCountComplete == building.unitCount) {
    //   //       //   building.status = "done-all";
    //   //       // }
    //   //       this.storage.set(this.dataHouseHold.buildingId, building);
    //   //       this.storage.get(building.ea).then((val) => {
    //   //         let BDlist = val
    //   //         let index = BDlist.findIndex(it => it._id == building._id)
    //   //         BDlist.splice(index, 1, building);
    //   //         this.storage.set(building.ea, BDlist)
    //   //       })
    //   //     }
    //   //   });
    //   // }
    //   let fin: any
    //   let list: any[]

    //   // TODO: Replace with the working strategy

    //   // this.storage.get(key).then((val) => {
    //   //   list = val
    //   //   console.log(list);
    //   //   if (list != null) {
    //   //     fin = list.find(it => it._id == id)
    //   //     if (fin == null) {
    //   //       list.push(this.dataHouseHold);
    //   //       this.storage.set(key, list)
    //   //     } else {
    //   //       let index = list.findIndex(it => it._id == id)
    //   //       list.splice(index, 1, this.dataHouseHold);
    //   //       this.storage.set(key, list)
    //   //     }
    //   //   } else {
    //   //     list = []
    //   //     list.push(this.dataHouseHold);
    //   //     this.storage.set(key, list)
    //   //   }
    //   // })
    //   console.log(this.dataHouseHold);
    //   this.navCtrl.push("CheckListPage", { id: this.dataHouseHold._id });
    // }
  }

  arrayNextPageMedthod() {
    let arrayNextPage: Array<boolean> = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    this.store.dispatch(new SetNextPageDirection(arrayNextPage));
    this.store.dispatch(new SetSelectorIndex(-1));
    this.store.dispatch(new SetBackToRoot(false));
    this.store.dispatch(new SetBack(false));
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
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
