import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { SetSendBuildingType, SaveBuilding, SetOtherBuildingType } from '../../states/building/building.actions';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { getBuildingSample } from '../../states/building';

@IonicPage()
@Component({
  selector: 'page-building-information1',
  templateUrl: 'building-information1.html',
})
export class BuildingInformation1Page {

  public f: FormGroup;
  private submitRequested: boolean;

  public lat: any;
  public long: any;

  // public index: number;
  public access: number;
  public comment: string = '';

  public lastAccess: number;
  public unitCount: number;

  public checkFormButtonsForBuilding: boolean = true;
  private isCheckWarningBox: boolean;

  private dataBuilding$ = this.store.select(getBuildingSample);

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
    private alertCtrl: AlertController, private geolocation: Geolocation, public fb: FormBuilder,
    private store: Store<BuildingState>, private appState: AppStateProvider) {
    this.f = BuildingInformation1Page.CreateFormGroup(fb);

    this.setupAccessCountChanges();
    this.setupAccessCountChangesForComments();
    this.setupCountChangesForLogs();

    this.f.get('ea').setValue(this.appState.eaCode);
    this.f.get('_id').setValue(navParams.get('id'));
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'ea': null,
      'ordering': 0,
      'road': [null, Validators.required],
      'alley': [null, Validators.required],
      'name': [null, Validators.required],
      'houseNo': [null, Validators.required],
      'latitude': [null, Validators.required],
      'longitude': [null, Validators.required],
      'buildingType': [null, Validators.required],
      'other': [null, Validators],
      'accessCount': 0,
      'accesses': fb.array([]),
      'vacancyCount': [null, Validators],
      'abandonedCount': [null, Validators],
      'unitCountComplete': 0,
      'unitCount': 0,
      'unitAccess': 0,
      'vacantRoomCount': null,
      'occupiedRoomCount': null,
      'waterQuantity': fb.group({
        "waterQuantity": 0,
        "cubicMeterPerMonth": null,
        "waterBill": null,
      }),
      'floorCount': null,
      'comments': fb.array([]),
      'recCtrl': fb.group({
        'createdDateTime': null,
        'lastModified': null,
        'deletedDateTime': null,
        'lastUpload': null,
        'lastDownload': null,
        'logCount': 0,
        'logs': fb.array([])
      }),
      'status': null,
      '_id': null,
      // 'lastUpdate': null,
    }, {
        validator: BuildingInformation1Page.checkAnyOrOther()
      });
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const buildingType = c.get('buildingType');
      const other = c.get('other');
      const accesses = c.get('accesses');
      const accessCount = c.get('accessCount');
      const vacancyCount = c.get('vacancyCount');
      const abandonedCount = c.get('abandonedCount');

      if (buildingType.value == 16 && (other.value == null || other.value.trim() == '')) {
        return { 'other': true };
      }
      if (accesses.value[accessCount.value - 1] == null) {
        return { 'access': true };
      }
      if (accesses.value[accessCount.value - 1] == 4 && (vacancyCount.value == null || abandonedCount.value == null
        || (vacancyCount.value == 0 && abandonedCount.value == 0))) {
        return { 'access4': true };
      }
      return null;
    }
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter BuildingInformation1Page');
    this.loadMap()
    // this.dataBuilding$.subscribe(data => {
    //   if (data != null) {
    //     console.log(data);
    //     this.f.get('accessCount').setValue(data.accessCount);
    //     this.setupCountChanges();
    //     this.f.setValue(data);
    //   }
    // });
    let id = this.f.get('_id').value;
    this.setupCountChanges();
    console.log(id);

    if (this.appState.buildingId == '') {
      this.storage.get('road').then((val) => {
        if (val != null) {
          this.f.get('road').setValue(val);
        }
      })
      this.storage.get('alley').then((val) => {
        if (val != null) {
          this.f.get('alley').setValue(val);
        }
      })
      this.storage.get('name').then((val) => {
        if (val != null) {
          this.f.get('name').setValue(val);
        }
      })
    }

    let accesses = this.f.get('accesses').value;
    this.lastAccess = accesses.length > 0 ? accesses[accesses.length - 1] : null;
    this.unitCount = this.f.get('unitCount').value;
    // this.storage.get(id).then((data) => {
    //   if (data != null) {
    //     console.log("DATA: " + JSON.stringify(data));
    //     this.f.patchValue(data);
    //     this.f.get('accessCount').setValue(data.accessCount);
    //     this.setupCountChanges();
    //   } else {
    //     this.storage.get('road').then((val) => {
    //       if (val != null) {
    //         this.f.get('road').setValue(val);
    //       }
    //     })
    //     this.storage.get('alley').then((val) => {
    //       if (val != null) {
    //         this.f.get('alley').setValue(val);
    //       }
    //     })
    //     this.storage.get('name').then((val) => {
    //       if (val != null) {
    //         this.f.get('name').setValue(val);
    //       }
    //     })
    //   }
    // });
  }

  loadMap() {
    let options = { enableHighAccuracy: true };
    this.geolocation.getCurrentPosition(options).then((loacation) => {
      this.long = loacation.coords.longitude,
        this.lat = loacation.coords.latitude
    }, err => {
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
    // this.updateStatus();
    this.f.get('status').setValue('');
    this.dispatch();
    this.isCheckWarningBox = this.f.valid;
    console.log(this.f);

    if (this.f.valid) {
      (this.access == 1) ? this.navCtrl.push("BuidlingInformation2Page", { f: this.f }) : this.navCtrl.push("HomesPage", { f: this.f });
    }

    // if (this.f.valid && this.access == 1) {
    //   this.navCtrl.push("BuidlingInformation2Page", { f: this.f });
    //   // this.storage.set('key', this.f.value)
    // }
    // else if (this.f.valid && this.checkAccess()) {
    //   // this.dispatch();
    //   this.navCtrl.push("HomesPage", { f: this.f });
    // }
  }

  public dispatch() {
    let idBD = this.f.get('_id').value
    let listBD: any;
    let fgac = this.f.get('accesses') as FormArray;
    let fgcm = this.f.get('comments') as FormArray;
    const index = this.f.get('accessCount').value - 1;
    if (index >= 0) {
      fgac.at(index).setValue(this.access);
      fgcm.at(index).setValue({ 'at': Date.now(), 'text': this.comment });
    }
    // this.f.get('lastUpdate').setValue(Date.now())
    // console.log(this.f.get('lastUpdate').value);

    this.store.dispatch(new SetSendBuildingType(this.f.get('buildingType').value));
    this.store.dispatch(new SetOtherBuildingType(this.f.get('other').value));
    // this.store.dispatch(new SetHomeBuilding(this.f.value));

    if (idBD == null || idBD == '') {
      this.f.get('_id').setValue(this.appState.generateId('bld1v'));
      // idBD = this.f.get('_id').value
    }
    console.log(this.f.value);
    this.storage.set('road', this.f.get('road').value)
    this.storage.set('alley', this.f.get('alley').value)
    this.storage.set('name', this.f.get('name').value)

    // this.storage.set(idBD, this.f.value)
    this.store.dispatch(new SaveBuilding(this.f.value));

    // this.storage.get(this.f.get('ea').value).then((data) => {
    //   listBD = data
    //   if (listBD != null) {
    //     let fin = listBD.find(it => it._id == idBD)
    //     if (fin == null) {
    //       listBD.push(this.f.value)
    //       this.storage.set(this.f.get('ea').value, listBD)
    //     } else {
    //       let index = listBD.findIndex(it => it._id == idBD)
    //       listBD.splice(index, 1, this.f.value);
    //       // listBD.push(this.f.value);
    //       this.storage.set(this.f.get('ea').value, listBD)
    //     }
    //   } else {
    //     listBD = []
    //     listBD.push(this.f.value)
    //     this.storage.set(this.f.get('ea').value, listBD)
    //   }
    // })
  }

  public updateStatus() {
    const index = this.f.get('accessCount').value;
    // if (this.access)
    //   this.f.get('access').setValue(this.access);

    switch (this.access) {
      case 1:
        if (this.f.get('status').value == null) {
          this.f.get('status').setValue('pause');
        }
        break;
      case 2:
      case 3:
        (index < 2) ? this.f.get('status').setValue('refresh') : this.f.get('status').setValue('done-all')
        break;
      case 4:
        this.f.get('status').setValue('done-all')
        break;
      default:
        break;
    }
  }

  // public checkAccess() {
  //   if (this.access != null) {
  //     return (this.access == 4) ?
  //       (this.f.get('vacancyCount').value > 0 || this.f.get('abandonedCount').value > 0)
  //       && this.f.get('vacancyCount').value != null
  //       && this.f.get('abandonedCount').value != null
  //       : true;
  //   }
  //   return false;
  // }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'other') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.other && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'access4') {
      let ctrls = this.f;
      return ctrls.errors && ctrls.errors.access4 && (ctrls.dirty || this.submitRequested);
    }
    // if (name == 'vacancyCount' || name == 'abandonedCount') {
    //   let vacancyCount = this.f.get('vacancyCount');
    //   let abandonedCount = this.f.get('abandonedCount');
    //   return (!(vacancyCount.value > 0 || abandonedCount.value > 0) || ctrl.value == null) && (ctrl.dirty || this.submitRequested);
    // }
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

  public static CreateLog(fb: FormBuilder): FormGroup {
    return fb.group({
      'at': null,
      'operationCode': null,
    });
  }

  private setupCountChanges() {
    const accesses: number[] = this.f.get('accesses').value;
    const lastAccess = accesses.length > 0 ? accesses[accesses.length - 1] : null;
    const accessCount: number = this.f.get('accessCount').value;

    if (accessCount > 0) {
      this.access = lastAccess;
      if (lastAccess == 2 || lastAccess == 3) {
        if (accessCount < 3) {
          this.f.get('accessCount').setValue(accessCount + 1);
        }
      }
    } else {
      this.access = null;
      this.f.get('accessCount').setValue(accessCount + 1);
    }
    // this.index = this.f.get('accessCount').value - 1;
    // console.log('index', this.index);
  }

  private setupAccessCountChanges() {
    const componentFormArray: string = "accesses";
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

  private setupCountChangesForLogs() {
    const componentFormArray: string = "recCtrl.logs";
    const componentCount: string = "recCtrl.logCount";

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
          ctrl = BuildingInformation1Page.CreateLog(this.fb);
        }

        farr.push(ctrl);
      }
      (this.f.get('recCtrl') as FormGroup).setControl('logs', farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
