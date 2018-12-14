import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getDataWorkEA } from '../../states/logging';
import { map } from 'rxjs/operators';
import { LoadDataWorkEA } from '../../states/logging/logging.actions';
import { FormBuilder, FormGroupName, FormGroup, FormArray } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-select-ea',
  templateUrl: 'select-ea.html',
})
export class SelectEaPage {
  f: FormGroup;
 
  userId: string;
  private formData$ = this.store.select(getDataWorkEA).pipe(map(s => s));
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<LoggingState>) {
    this.f = fb.group({
      'idEA': [null],
      'userId': [null],
      'province': [null],
      'district': [null],
      'subDistrict': [null],
      'administrative': [null],
      'municipalities': [null],
    });
  }

  ionViewDidLoad() {
    this.userId = "001";
    this.store.dispatch(new LoadDataWorkEA(this.userId));
    console.log('ionViewDidLoad SelectEaPage');
    // this.formData$.subscribe(data => this.f.setValue(data));
    console.log(this.formData$)
  }

  goConfirmSeletEAPage() {
    this.navCtrl.push("HomesPage")
  }

  goBack() {
    this.navCtrl.pop();
  }

}
