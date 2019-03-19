import { UnitButtonComponent } from './../../components/unit-button/unit-button';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { getRecieveDataFromBuilding, setHomeBuilding } from '../../states/building';
import { HouseHoldState } from '../../states/household/household.reducer';
import { LoadUnitByIdBuilding, LoadUnitByIdBuildingSuccess, LoadHouseHoldSampleSuccess } from '../../states/household/household.actions';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage {

  public f: FormGroup;
  public g: FormGroup;
  @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];
  private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);
  private dataHomeBuilding$ = this.store.select(setHomeBuilding);
  public id_BD: string;
  public units: any;
  public FormItem: FormGroup;

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>, public fb: FormBuilder, private appState: AppStateProvider) {
    this.f = this.fb.group({
      'unitCount': [null],
      'units': this.fb.array([]),
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad UnitPage');
    this.GetDataFromBuilding$.subscribe(data => this.f.get('unitCount').setValue(data));
    console.log(this.f.get('unitCount').value);
    this.setupUnitsCountChanges();
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

    this.store.dispatch(new LoadUnitByIdBuildingSuccess(null));
    let key = "BL" + this.appState.buildingId;
    this.storage.get(key).then((val) => {
      console.log(val);
      this.store.dispatch(new LoadUnitByIdBuildingSuccess(val));
    });
    console.log(this.f.get('units').value);
    this.presentLoading();
  }

  private setupUnitsCountChanges() {
    const componentFormArray: string = "units";
    const componentCount: string = "unitCount";

    var onComponentCountChanges = () => {
      var units = (this.f.get(componentFormArray) as FormArray).controls || [];
      var unitCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      unitCount = Math.max(0, unitCount);

      for (let i = 0; i < unitCount; i++) {
        var ctrl = null;
        if (i < units.length) {
          const fld = units[i];
          ctrl = fld;
        } else {
          ctrl = UnitButtonComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "กรุณารอสักครู่...",
      duration: 1500
    });
    loader.present();
  }

  deleteUnit(HH: any) {
    let keyHH = HH._id;
    let keyBD = "BL" + HH.buildingId;
    this.storage.get(keyBD).then((val) => {
      let BDList = val;
      let index = BDList.findIndex(it => it._id == HH._id);
      BDList.splice(index, 1);
      this.storage.set(keyBD, BDList);
      this.storage.remove(keyHH)
    })
  }

}
