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
  private formData$ = this.store.select(getBuildingSample).pipe(map(s => s.true));


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
      'access': this.fb.array([]),
      'vacancyCount': [null, Validators.required],
      'abandonedCount': [null, Validators.required],
      'unitCount': [null],
      'unitAccess': [null],
      'vacantRoomCount': [null],
      'occupiedRoomCount': [null],
      'waterQuantity': this.fb.group([]),
      'floorCount': [null],
      'comments': this.fb.array([]),
      'recCtrl': this.fb.group([]),
      '_id': [null],

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingInformation1Page');
    this.formData$.subscribe(data => this.f.setValue(data));

  }
  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }


}
