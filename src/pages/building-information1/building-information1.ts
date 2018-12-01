import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommunityState } from '../../states/community/community.reducer';
import { getBuildingSample } from '../../states/building';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-building-information1',
  templateUrl: 'building-information1.html',
})
export class BuildingInformation1Page {

  public f: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getBuildingSample).pipe(map(s => s));

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<CommunityState>) {
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
    this.formData$.subscribe(data => this.f.setValue(data));
  }

  public handleSubmit() {
    this.submitRequested = true;
    console.log('unitCount');
    console.log(this.submitRequested);
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
