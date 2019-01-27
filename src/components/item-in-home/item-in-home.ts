import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getHomeBuilding } from '../../states/logging';
import { DeleteHomeBuilding } from '../../states/logging/logging.actions';

@Component({
  selector: 'item-in-home',
  templateUrl: 'item-in-home.html'
})
export class ItemInHomeComponent {

  @Input() public FormItem: FormGroup;

  private dataHomeBuild$ = this.store.select(getHomeBuilding);
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,public store:Store<LoggingState>) {
    this.FormItem = ItemInHomeComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'ea': [null],
      'ordering': [0],
      'road': [null],
      'alley': [null],
      'name': [null],
      'houseNo': [null],
      'latitude': [null],
      'longitude': [null],
      'buildingType': [null],
      'other': [null],
      'access': [null],
      'vacancyCount': [0],
      'abandonedCount': [0],
      'comments': fb.array([0]),
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

  goBuildingInfo() {
    this.navCtrl.push("BuildingInformation1Page")
  }

  DeleteBuilding(id:string){
    this.store.dispatch(new DeleteHomeBuilding(id));
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
