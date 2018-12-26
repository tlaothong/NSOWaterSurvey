import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getBuildingSample } from '../../states/building';
import { map } from 'rxjs/operators';
import { BuildingState } from '../../states/building/building.reducer';
import { SetSendBuildingType, SetHomeBuilding } from '../../states/building/building.actions';
import { SetOtherBuildingType } from '../../states/household/household.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
<<<<<<< HEAD
import { BuidlingInformation2Page } from '../buidling-information2/buidling-information2';
=======
>>>>>>> rn0z

@IonicPage()
@Component({
  selector: 'page-building-information1',
  templateUrl: 'building-information1.html',
})
export class BuildingInformation1Page {

  public f: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getBuildingSample).pipe(map(s => s));

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<BuildingState>, private storeLog: Store<LoggingState>) {
    this.f = BuildingInformation1Page.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'ea': [null],
      'ordering': [0],
      'road': [null, Validators.required],
      'alley': [null, Validators.required],
      'name': [null, Validators.required],
      'houseNo': [null, Validators.required],
      'latitude': [null, Validators.required],
      'longitude': [null, Validators.required],
      'buildingType': [null, Validators.required],
      'other': [null],
      // 'buildingAccessCount': [0],
      'access': [null, Validators.required],
      'vacancyCount': [null],
      'abandonedCount': [null],
      'comments': fb.array([
        {
          "at": [null],
          "text": [null]
        }
      ]),
      'recCtrl': [null],
      'vacantRoomCount': [null],
      'unitCount': [0],
      'unitAccess': [0],
      'occupiedRoomCount': [null],
      'waterQuantity': [null],
      'floorCount': [null],
      '_id': [null],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingInformation1Page');
    this.formData$.subscribe(data => {
      if (data != null) {
        this.f.setValue(data)
      }
    });
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.store.dispatch(new SetSendBuildingType(this.f.get('buildingType').value));
    this.store.dispatch(new SetOtherBuildingType(this.f.get('other').value));

    console.log(this.f.value);
    this.store.dispatch(new SetHomeBuilding(this.f.value));

    if (this.f.valid && this.f.get('access').value == 1) {
      this.navCtrl.push("BuidlingInformation2Page", { f: this.f });
    }
    if (this.f.valid && (this.f.get('access').value == 2 || this.f.get('access').value == 3 || this.f.get('access').value == 4)) {
      this.navCtrl.push("HomesPage", { f: this.f });
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
