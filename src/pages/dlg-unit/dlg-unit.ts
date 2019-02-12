import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, DateTime } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { setHomeBuilding } from '../../states/building';
import { LoadHouseHoldSample} from '../../states/household/household.actions';
import { getHouseHoldSample } from '../../states/household';
import { SwithStateProvider } from '../../providers/swith-state/swith-state';
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

  constructor(private swithHouseHold: SwithStateProvider, public navCtrl: NavController, private store: Store<HouseHoldState>, private storeBuilding: Store<HouseHoldState>, public navParams: NavParams, private viewCtrl: ViewController, public fb: FormBuilder) {
    this.FormItem = navParams.get('FormItem');
    this.dataHomeBuilding$.subscribe(data => this.id_BD = data._id);
    this.FormItem.controls['buildingId'].setValue(this.id_BD);
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
    if (this.FormItem.get('subUnit.roomNumber').valid && this.access != null) {
      this.setAccesses();
      this.AddUnit();
      this.viewCtrl.dismiss(this.FormItem);
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public setAccesses() {
    this.FormItem.get('subUnit.accessCount').setValue(this.count);
    this.fgac.at(this.index).setValue(this.access);
    this.fgcm.at(this.index).setValue({ 'at': new Date(), 'text': this.comment, });
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
    // this.store.dispatch(new SetUnit(this.FormItem.value));
    // this.FormItem.get('_id').setValue(String(Guid.create()))
    // console.log(this.FormItem.get('_id').value);
    
    this.store.dispatch(new LoadHouseHoldSample(this.FormItem.value));
    // if (this.FormItem.get('_id').value != null) {
    //   this.swithHouseHold.updateHouseholdState(this.FormItem.get('_id').value);
    // }
  }
}
