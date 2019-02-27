import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { SetSendBuildingType, SetHomeBuilding, SetOtherBuildingType } from '../../states/building/building.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getDataBuilding } from '../../states/logging';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

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

  public index: number;
  public access: number;
  public comment: string;

  private dataBuilding$ = this.store.select(getDataBuilding);
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, private alertCtrl: AlertController, private geolocation: Geolocation, public fb: FormBuilder, private store: Store<BuildingState>, private storeLog: Store<LoggingState>) {
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
      'accessCount': [0],
      'access': fb.array([]),
      'vacancyCount': null,
      'abandonedCount': null,
      'comments': fb.array([]),
      'recCtrl': [null],
      'vacantRoomCount': [null],
      'unitCount': 0,
      'unitAccess': 0,
      'occupiedRoomCount': [null],
      'waterQuantity': fb.group({
        "waterQuantity": 0,
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
        console.log(data);
        this.f.get('accessCount').setValue(data.accessCount);
        this.setupCountChanges();
        this.f.setValue(data);
      }
    });
    this.setupCountChanges();
  }

  loadMap() {
    let options = { enableHighAccuracy: true };
    this.geolocation.getCurrentPosition(options).then((loacation) => {
      console.log(loacation);
      this.long = loacation.coords.longitude,
      this.lat = loacation.coords.latitude
    },err =>{
      console.log(err);    

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
    if (this.f.valid && this.access == 1) {
      this.dispatch();
      this.navCtrl.push("BuidlingInformation2Page", { f: this.f });
      // this.storage.set('key',this.f.value)
    }
    if (this.f.valid && (this.access == 2 || this.access == 3 || this.access == 4)) {
      this.dispatch();
      this.navCtrl.push("HomesPage", { f: this.f });
    }
  }

  public dispatch() {
    let fgac = this.f.get('access') as FormArray;
    let fgcm = this.f.get('comments') as FormArray;
    fgac.at(this.index).setValue(this.access);
    fgcm.at(this.index).setValue({ 'at': new Date(), 'text': this.comment });

    console.log(this.f.value);
    this.store.dispatch(new SetSendBuildingType(this.f.get('buildingType').value));
    this.store.dispatch(new SetOtherBuildingType(this.f.get('other').value));
    this.store.dispatch(new SetHomeBuilding(this.f.value));

  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public isValidAccess(): boolean {
    return !this.access && this.submitRequested;
  }

  public static CreateComment(fb: FormBuilder): FormGroup {
    return fb.group({
      'at': null,
      'text': null,
    });
  }

  private setupCountChanges() {
    this.index = this.f.get('accessCount').value;
    this.f.get('accessCount').setValue(this.index + 1);
    this.setupAccessCountChanges();
    this.setupAccessCountChangesForComments();
  }

  private setupAccessCountChanges() {
    const componentFormArray: string = "access";
    const componentCount: string = "accessCount";

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
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupAccessCountChangesForComments() {
    const componentFormArray: string = "comments";
    const componentCount: string = "accessCount";

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
          ctrl = BuildingInformation1Page.CreateComment(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
