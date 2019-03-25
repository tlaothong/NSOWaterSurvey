import { Component, ViewChildren, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { HouseHoldState } from '../../states/household/household.reducer';
import { LoadUnitByIdBuildingSuccess, NewHouseHoldWithSubUnit, SetCurrentWorkingHouseHold } from '../../states/household/household.actions';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { getHouseHoldUnitList } from '../../states/household';
import { Observable, Subject } from 'rxjs';
import { UnitInList } from '../../models/mobile/MobileModels';
import { getUnitCount } from '../../states/building';

@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage {

  // public f: FormGroup;
  // public g: FormGroup;
  // @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];
  // private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);
  // private dataHomeBuilding$ = this.store.select(setHomeBuilding);
  // public units: any;
  // public FormItem: FormGroup;

  public unitList$ = this.store.select(getHouseHoldUnitList);
  public unitCount$ = this.storeBuild.select(getUnitCount);
  public emptyUnits$ = Observable.of([]);
  public terminator$ = new Subject<number>();

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,
      public navParams: NavParams, private alertCtrl: AlertController,
      private modalCtrl: ModalController,
      private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>, 
      /* public fb: FormBuilder, */ private appState: AppStateProvider) {

      let obs = this.unitList$.subscribe(_ => {
        console.log('TAKE TAKE');
      });

  
        
    // this.emptyUnits$ = this.unitList$
    //   .withLatestFrom(this.store.select(getUnitCount))
    //   .map(([it, untCnt]) => {
    //       const start = it.length + 1;
    //     const len = untCnt - it.length;
    //     if(len > 0)
    //     {
    //       let arr: number[] = [];
    //       for (let idx = 0; idx < len; ++idx) {
    //         arr.push(idx + start);
    //       }
    //       return arr;
    //     }
    //     else return [];
    //   });


      // this.f = this.fb.group({
    //   'unitCount': null,
    //   'units': this.fb.array([]),
    // });
  }

  public updateTheEmptyList() {
    this.emptyUnits$ = Observable.combineLatest(
      this.unitList$, this.unitCount$)
    .map(([it, untCnt]) => {
      const start = it.length + 1;
      const len = untCnt - it.length;
      if(len > 0)
      {
        let arr: number[] = [];
        for (let idx = 0; idx < len; ++idx) {
          arr.push(idx + start);
        }
        return arr;
      }
      else return [];
    });
  }

  ngOnDestroy() {
    this.terminator$.next(0);
  }

  public showUnitButtonPopover() {
    let alertUnderConstruction = this.alertCtrl.create({
      message: "ความสามารถส่วนนี้กำลังปรับปรุง จะเปิดกลับมาให้ใช้งานได้เร็วๆนี้",
      title: "กำลังปรับปรุง",
      buttons: ["OK"],
    });
    alertUnderConstruction.present();
  }

  public newUnit() {
    const modal = this.modalCtrl.create("DlgUnitPage", { unitInfo: {
      subUnit: {
        roomNumber: null,
        accessCount: 0,
        accesses: [],
        hasPlumbing: null,
        hasPlumbingMeter: null,
        isPlumbingMeterXWA: null,
        hasGroundWater: null,
        hasGroundWaterMeter: null,
      }
    }});
    modal.onDidDismiss(data => {
      if (data) {
        this.store.dispatch(new NewHouseHoldWithSubUnit(data.subUnit, data.comment));
        let cnt = data.subUnit.accessCount;
        let lastIndex = Math.max(0, cnt - 1);
        if (data.subUnit.accesses && data.subUnit.accesses.length > 0 && data.subUnit.accesses[lastIndex] == 1) {
          this.navCtrl.push('WaterActivityUnitPage');
        }
      }
    });
    modal.present();
  }

  public continueUnit(unt: UnitInList) {
    // if (unt.subUnit) {
    // } else {      
    // }
    this.store.dispatch(new SetCurrentWorkingHouseHold(unt.houseHoldId));
    this.navCtrl.push('WaterActivityUnitPage');
  }

  public showComments() {
    let alertUnderConstruction = this.alertCtrl.create({
      message: "ความสามารถส่วนนี้กำลังปรับปรุง จะเปิดกลับมาให้ใช้งานได้เร็วๆนี้",
      title: "กำลังปรับปรุง",
      buttons: ["OK"],
    });
    alertUnderConstruction.present();
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad UnitPage');
    // this.GetDataFromBuilding$.subscribe(data => this.f.get('unitCount').setValue(data));
    // console.log(this.f.get('unitCount').value);
    // this.setupUnitsCountChanges();
    // this.dataHomeBuilding$.subscribe(data => {
    //   console.log(data);
    //   if (data != null) {
    //     this.id_BD = data._id
    //     let key = "BL" + this.id_BD
    //     this.storage.get(key).then((val) => {
    //       console.log(val);
    //       this.store.dispatch(new LoadUnitByIdBuildingSuccess(val));
    //     })
    //   }
    // });

    // this.store.dispatch(new LoadUnitByIdBuildingSuccess(null));
    // let key = this.appState.buildingId;
    // this.storage.get(key).then((val) => {
    //   console.log(val);
    //   this.store.dispatch(new LoadUnitByIdBuildingSuccess(val));
    // });
    // console.log(this.f.get('units').value);
    // this.presentLoading();
  }

  // private setupUnitsCountChanges() {
  //   const componentFormArray: string = "units";
  //   const componentCount: string = "unitCount";

  //   var onComponentCountChanges = () => {
  //     var units = (this.f.get(componentFormArray) as FormArray).controls || [];
  //     var unitCount = this.f.get(componentCount).value || 0;
  //     var farr = this.fb.array([]);

  //     unitCount = Math.max(0, unitCount);

  //     for (let i = 0; i < unitCount; i++) {
  //       var ctrl = null;
  //       if (i < units.length) {
  //         const fld = units[i];
  //         ctrl = fld;
  //       } else {
  //         ctrl = UnitButtonComponent.CreateFormGroup(this.fb);
  //       }

  //       farr.push(ctrl);
  //     }
  //     this.f.setControl(componentFormArray, farr);
  //   };

  //   this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

  //   onComponentCountChanges();
  // }
  // presentLoading() {
  //   const loader = this.loadingCtrl.create({
  //     content: "กรุณารอสักครู่...",
  //     duration: 1500
  //   });
  //   loader.present();
  // }

  deleteUnit(HH: any) {
    // let keyHH = HH._id;
    // let keyBD = "BL" + HH.buildingId;
    // this.storage.get(keyBD).then((val) => {
    //   let BDList = val;
    //   let index = BDList.findIndex(it => it._id == HH._id);
    //   BDList.splice(index, 1);
    //   this.storage.set(keyBD, BDList);
    //   this.storage.remove(keyHH)
    // })
    
  }

}
