import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { getBuildingSample, getSendBuildingType } from '../../states/building';
import { SetRecieveDataFromBuilding } from '../../states/building/building.actions';
import { map } from 'rxjs/operators';
import { HomePage } from '../home/home';
import { LoggingState } from '../../states/logging/logging.reducer';
import { SetHomeBuilding } from '../../states/logging/logging.actions';

@IonicPage()
@Component({
  selector: 'page-buidling-information2',
  templateUrl: 'buidling-information2.html',
})
export class BuidlingInformation2Page {
  public f: FormGroup;
  private submitRequested: boolean;

  private formData$ = this.store.select(getBuildingSample).pipe(map(s => s));
  // private formDataFromBuilding1$ = this.storeLog.select(getDataCreateBuilding).pipe(map(s => s));

  private getBuildingType$ = this.store.select(getSendBuildingType)

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private storeLog: Store<LoggingState>, private store: Store<BuildingState>) {
    this.f = this.fb.group({
      'ea': [null],
      'ordering': [null],
      'road': [null],
      'alley': [null],
      'name': [null],
      'houseNo': [null],
      'latitude': [null],
      'longitude': [null],
      'buildingType': [null],
      'other': [null],
      'access': [null],
      'vacancyCount': [null],
      'abandonedCount': [null],
      'comments': fb.array([
        {
          'at': [null],
          'text': [null],
        }
      ]),
      'recCtrl': fb.group({
        'createdDateTime': [null],
        'lastModified': [null],
        'deletedDateTime': [null],
        'lastUpload': [null],
        'lastDownload': [null],
        'logs': fb.array([{
          'at': [null],
          'operationCode': [null],
        }]),
      }),
      //
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
    console.log('ionViewDidLoad BuidlingInformation2Page');
    this.formData$.subscribe(data => this.f.setValue(data));
    this.getBuildingType$.subscribe(data => this.f.get('buildingType').setValue(data));
    this.f = this.navParams.get('f');
    // this.formDataFromBuilding1$.subscribe(data => this.f.setValue(data));
    console.log(" data ที่จะ post", this.f);
    console.log("buildingType จาก building1", this.f.get('buildingType').value);
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.store.dispatch(new SetRecieveDataFromBuilding(this.f.get('unitCount').value));
    console.log('unitCount');
    console.log(this.f.get('unitCount').value);
    this.storeLog.dispatch(new SetHomeBuilding(this.f.value));
    console.log("data ยิง API",this.f.value);
    
    this.navCtrl.popTo("SelectEaPage");
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
