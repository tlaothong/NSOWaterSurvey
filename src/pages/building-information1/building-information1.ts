import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getBuildingSample } from '../../states/building';
import { map } from 'rxjs/operators';
import { BuildingState } from '../../states/building/building.reducer';
import { SetSendBuildingType } from '../../states/building/building.actions';
import { SetOtherBuildingType } from '../../states/household/household.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
import { SetHomeBuilding } from '../../states/logging/logging.actions';
import { BuidlingInformation2Page } from '../buidling-information2/buidling-information2';

@IonicPage()
@Component({
  selector: 'page-building-information1',
  templateUrl: 'building-information1.html',
})
export class BuildingInformation1Page {

  public f: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getBuildingSample).pipe(map(s => s));

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<BuildingState>,private storeLog: Store<LoggingState>) {
    this.f = this.fb.group({
      'ea': [null],
      'ordering': [null],
      'road': [null, Validators.required],
      'alley': [null, Validators.required],
      'name': [null, Validators.required],
      'houseNo': [null, Validators.required],
      'latitude': [null, Validators.required],
      'longitude': [null, Validators.required],
      'buildingType': [null, Validators.required],
      'other': [null, Validators.required],
      'access': [null, Validators.required],
      'vacancyCount': [null, Validators.required],
      'abandonedCount': [null, Validators.required],
      'comments': fb.array([
        {
          'at': [null, Validators.required],
          'text': [null, Validators.required],
        }
      ]),
      'recCtrl': fb.group({
        'createdDateTime': [null, Validators.required],
        'lastModified': [null, Validators.required],
        'deletedDateTime': [null, Validators.required],
        'lastUpload': [null, Validators.required],
        'lastDownload': [null, Validators.required],
        'logs': fb.array([{
          'at': [null, Validators.required],
          'operationCode': [null, Validators.required],
        }]),
      }),
      'vacantRoomCount': [null, Validators.required],
      'unitCount': [null, Validators.required],
      'unitAccess': [null, Validators.required],
      'occupiedRoomCount': [null, Validators.required],
      'waterQuantity': this.fb.group({
        'waterQuantity': [null, Validators.required],
        'cubicMeterPerMonth': [null, Validators.required],
        'waterBill': [null, Validators.required]
      }),
      'floorCount': [null, Validators.required],
      '_id': [null],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingInformation1Page');
    // this.formData$.subscribe(data => this.f.setValue(data));
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.store.dispatch(new SetSendBuildingType(this.f.get('buildingType').value));
    this.store.dispatch(new SetOtherBuildingType(this.f.get('other').value));
    this.storeLog.dispatch(new SetHomeBuilding(this.f));
    console.log(this.f)
    this.navCtrl.push("BuidlingInformation2Page");

  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
