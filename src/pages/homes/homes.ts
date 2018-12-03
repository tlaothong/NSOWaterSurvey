import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommunityState } from '../../states/community/community.reducer';
import { getBuildingSample } from '../../states/building';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-homes',
  templateUrl: 'homes.html',
})
export class HomesPage {
  office: string = "building";
  public f: FormGroup;
  data:any={};
  private formData$ = this.store.select(getBuildingSample).pipe(map(s => s));


  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<CommunityState>) {
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
      'vacantRoomCount': [null],
      'unitCount': [null],
      'unitAccess': [null],
      'occupiedRoomCount': [null],
      'waterQuantity': this.fb.group({
        'waterQuantity': [null],
        'cubicMeterPerMonth': [null],
        'waterBill': [null]
      }),
      'floorCount': [null],
      '_id': [null],
    });
  }
  
  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));
  }

  goBuildingInfo(){
    this.navCtrl.push("BuildingInformation1Page")
  }
}
