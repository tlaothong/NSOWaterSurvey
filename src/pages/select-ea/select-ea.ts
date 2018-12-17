import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { LoggingState } from '../../states/logging/logging.reducer';
import { LoadDataWorkEA } from '../../states/logging/logging.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getDataWorkEA, getUserInformation } from '../../states/logging';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select-ea',
  templateUrl: 'select-ea.html',
})

export class SelectEaPage {
  f: FormGroup;
  private worksEachUser: any;
  private formDataUser$ = this.store.select(getUserInformation).pipe(map(s => s));

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<LoggingState>) {
    this.f = fb.group({
      'idEA': null,
      'idUser': null,
      'province': null,
      'district': null,
      'subDistrict': null,
      'administrative': null,
      'municipalities': null
    });
    this.worksEachUser = null;
  }

  ionViewDidLoad() {
    var userObj: any = null;
    this.formDataUser$.subscribe(data => userObj = data);
    this.store.dispatch(new LoadDataWorkEA(userObj));
    this.store.select(getDataWorkEA).pipe(map(s => s)).subscribe(data => this.worksEachUser = data);
  }

  goConfirmSeletEAPage() {
    this.navCtrl.push("HomesPage")
  }

  goBack() {
    this.navCtrl.pop();
  }

}
