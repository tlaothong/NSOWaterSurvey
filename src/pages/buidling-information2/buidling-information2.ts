import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, Option } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { getBuildingSample, getSendBuildingType, setHomeBuilding } from '../../states/building';
import { SetRecieveDataFromBuilding, SetHomeBuilding } from '../../states/building/building.actions';
import { map, delay } from 'rxjs/operators';
import { LoggingState } from '../../states/logging/logging.reducer';
import { BuildingInformation1Page } from '../building-information1/building-information1';

@IonicPage()
@Component({
  selector: 'page-buidling-information2',
  templateUrl: 'buidling-information2.html',
})
export class BuidlingInformation2Page {
  public f: FormGroup;
  private submitRequested: boolean;
  public isBuilding:boolean;

  // private formData$ = this.store.select(getBuildingSample).pipe(map(s => s));
  // private formDataFromBuilding1$ = this.store.select(setHomeBuilding).pipe(map(s => s));

  private getBuildingType$ = this.store.select(getSendBuildingType)
  private dataHomeBuilding$ = this.store.select(setHomeBuilding).pipe(map(s => s));

  @ViewChildren(BuildingInformation1Page) private buildingInformation1: BuildingInformation1Page[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private storeLog: Store<LoggingState>, private store: Store<BuildingState>) {
    this.f = BuildingInformation1Page.CreateFormGroup(fb);
    this.dataHomeBuilding$.subscribe(data => {
      if (data != null) {
        this.f.setValue(data);
        console.log(this.f.value);
      }
    });
  }

  ionViewDidLoad() {
    // this.formDataFromBuilding1$.subscribe(data => {
    //   if (data != null) {
    //     this.f.setValue(data)
        this.getBuildingType$.subscribe(data => this.f.get('buildingType').setValue(data));
    //   }
    // });
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.store.dispatch(new SetRecieveDataFromBuilding(this.f.get('unitCount').value));

    this.store.dispatch(new SetHomeBuilding(this.f.value));
    console.log("data ยิง API", this.f.value);
    console.log("f.valid", this.f.valid);

    if (this.f.valid) {
      
      if (this.f.get('unitCount').value == 1) { 
        this.navCtrl.push("HouseHoldTestPage", { num: 1 });
      }
      else {
        this.navCtrl.push("HouseHoldTestPage"), { num: null };
      }
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
