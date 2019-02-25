import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { SetSendBuildingType, SetHomeBuilding, SetOtherBuildingType } from '../../states/building/building.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getDataBuilding } from '../../states/logging';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-building-information1',
  templateUrl: 'building-information1.html',
})
export class BuildingInformation1Page {

  public f: FormGroup;
  private submitRequested: boolean;
  public isBuilding: boolean;

  public lat: any;
  public long: any;

  private dataBuilding$ = this.store.select(getDataBuilding);
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private geolocation: Geolocation, public fb: FormBuilder, private store: Store<BuildingState>, private storeLog: Store<LoggingState>) {
    this.f = BuildingInformation1Page.CreateFormGroup(fb);
    this.f.controls['ea'].setValue(navParams.get('id'));
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
      'access': [null, Validators.required],
      'vacancyCount': null,
      'abandonedCount': null,
      'comments': fb.array([
      ]),
      'recCtrl': [null],
      'vacantRoomCount': [null],
      'unitCount': 0,
      'unitAccess': null,
      'occupiedRoomCount': [null],
      'waterQuantity': fb.group({
        "waterQuantity": null,
        "cubicMeterPerMonth": null,
        "waterBill": null,
      }),
      'floorCount': [null],
      '_id': [null],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingInformation1Page');
    this.loadMap()
    this.dataBuilding$.subscribe(data => {
      if (data != null) {
        this.f.setValue(data);
      }
    });
  }

  loadMap() {
    let options = { enableHighAccuracy: true };
    this.geolocation.getCurrentPosition(options).then((loacation) => {
      console.log(loacation);
      this.long = loacation.coords.longitude,
      this.lat = loacation.coords.latitude
    });
  }

  addLocation() {
    console.log(this.lat, this.long);
    
    if ((this.lat || this.long) == null) {
      const alert = this.alertCtrl.create({
        title: "กรุณารอสักครู่",

      });
      alert.present();
      this.loadMap()
    } else {
      this.f.get('latitude').setValue(this.lat);
      this.f.get('longitude').setValue(this.long);
    }
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.store.dispatch(new SetSendBuildingType(this.f.get('buildingType').value));
    this.store.dispatch(new SetOtherBuildingType(this.f.get('other').value));

    console.log(this.f.value);
    console.log(this.f.get('access').value);
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
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
