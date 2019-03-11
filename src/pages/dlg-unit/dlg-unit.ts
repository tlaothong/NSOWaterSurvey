import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, DateTime } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { setHomeBuilding } from '../../states/building';
import { LoadHouseHoldSample, SetHouseHold, LoadHouseHoldSampleSuccess, SetNumberRoom } from '../../states/household/household.actions';
import { getHouseHoldSample } from '../../states/household';
import { SwithStateProvider } from '../../providers/swith-state/swith-state';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

// import { Guid } from "guid-typescript";
@IonicPage()
@Component({
  selector: 'page-dlg-unit',
  templateUrl: 'dlg-unit.html',
})
export class DlgUnitPage {
  public submitRequested: boolean;
  public FormItem: FormGroup;

  public index: number;
  public access: number;
  public comment: string = '';
  public count: number;

  private fgac: FormArray;
  private fgcm: FormArray;
  public id_BD: string;

  private dataHomeBuilding$ = this.storeBuilding.select(setHomeBuilding);
  private dataHouseHold$ = this.store.select(getHouseHoldSample);

  constructor(private swithHouseHold: SwithStateProvider, public local: LocalStorageProvider, private storage: Storage, public navCtrl: NavController, private store: Store<HouseHoldState>, private storeBuilding: Store<HouseHoldState>, public navParams: NavParams, private viewCtrl: ViewController, public fb: FormBuilder) {
    this.FormItem = navParams.get('FormItem');
    this.dataHomeBuilding$.subscribe(data => {
      if(data != null){
        this.id_BD = data._id
        this.FormItem.controls['buildingId'].setValue(this.id_BD);
      }
    });
    this.setEnvironment();
  }

  ionViewDidLoad() {
    // this.store.dispatch(new LoadDataOfUnit(this.FormItem.get('_id').value));
    // this.dataHouseHold$.subscribe(data => {
    //   if (data != null) {
    //     this.FormItem.setValue(data);
    //     console.log(data);
    //     this.setEnvironment();
    //   }
    // });
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    console.log(this.FormItem.get('subUnit.roomNumber').value);
    this.store.dispatch(new SetNumberRoom(this.FormItem.get('subUnit.roomNumber').value));
    if (this.FormItem.get('subUnit.roomNumber').valid && this.access != null) {
      this.setAccesses();
      this.AddUnit();
      this.viewCtrl.dismiss(this.FormItem);
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public setAccesses() {
    this.FormItem.get('subUnit.accessCount').setValue(this.count);
    this.fgac.at(this.index).setValue(this.access);
    this.fgcm.at(this.index).setValue({ 'at': Date.now(), 'text': this.comment, });
    this.updateStatus();
  }

  public updateStatus() {
    let status: string;
    switch (this.access) {
      case 1:
        status = "pause";
        break;
      case 2:
      case 3:
        status = (this.index < 2) ? "return" : "complete";
        break;
      default:
        status = "complete";
        break;
    }
    console.log(status);

    this.FormItem.get('status').setValue(status);
  }

  public setEnvironment() {
    this.count = this.FormItem.get('subUnit.accessCount').value;
    this.index = this.count - 1;

    this.fgac = this.FormItem.get('subUnit.accesses') as FormArray;
    this.fgcm = this.FormItem.get('comments') as FormArray;

    this.access = this.fgac.at(this.index).value;
    this.comment = this.fgcm.at(this.index).value.text;
  }

  AddUnit() {
    let id = this.FormItem.get('_id').value
    this.storage.set(id, this.FormItem.value)
    this.store.dispatch(new LoadHouseHoldSampleSuccess(this.FormItem.value))
    let key = "BL" + this.id_BD 
    console.log(this.id_BD);
    this.storage.get(this.FormItem.get('buildingId').value).then((val) => {
      let bd = val
      bd.lastUpdate = Date.now()
      this.storage.set(this.FormItem.get('buildingId').value, bd)
      this.storage.get(bd.ea).then((val) => {
        let BDlist = val
        let index = BDlist.findIndex(it => it._id == bd._id)
        BDlist.splice(index, 1, bd);
        // BDlist.push(building)
        this.storage.set(bd.ea, BDlist)
      })
    })
    if (this.FormItem.get('status').value == "complete") {
      this.storage.get(this.FormItem.get('buildingId').value).then((val) => {
        if (val != null) {
          let building = val;
          building.unitCountComplete++;
          if (building.unitCountComplete == building.unitCount) {
            building.status = "done-all";
          }        
          this.storage.set(this.FormItem.get('buildingId').value, building);
          this.storage.get(building.ea).then((val) => {
            let BDlist = val
            let index = BDlist.findIndex(it => it._id == building._id)
            BDlist.splice(index, 1, building);
            // BDlist.push(building)
            this.storage.set(building.ea, BDlist)
          })
        }
      });
    }

    let fin: any
    let list: any[]
    this.storage.get(key).then((val) => {
      list = val
      console.log(list);
      if (list != null) {
        fin = list.find(it => it._id == id)
        if (fin == null) {
          list.push(this.FormItem.value);
          this.storage.set(key, list)
        } else {
          let index = list.findIndex(it => it._id == id)
          list.splice(index, 1, this.FormItem.value);
          // list.push(this.FormItem.value);
          this.storage.set(key, list)
        }
      } else {
        list = []
        list.push(this.FormItem.value);
        this.storage.set(key, list)
      }
    })
    console.log(this.FormItem.value);
  }
}
