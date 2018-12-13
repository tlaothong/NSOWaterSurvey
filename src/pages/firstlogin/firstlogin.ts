import { Store } from '@ngrx/store'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { getUserByQr } from '../../states/household';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getUserInformation } from '../../states/logging';
import { LoggingState } from '../../states/logging/logging.reducer';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HouseHoldState } from '../../states/household/household.reducer';

@IonicPage()
@Component({
  selector: 'page-firstlogin',
  templateUrl: 'firstlogin.html',
})

export class FirstloginPage {
  datauser: any;
  f: FormGroup;
  private formData$ = this.store.select(getUserByQr).pipe(map(s => s));

  // private riceDoing$ = this.store.select(getRiceDoing);
  public riceDoing: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<HouseHoldState>, private fb: FormBuilder) {
    this.f = this.fb.group({
      '_idqr': [null],
      'idUser': [null],
      'password': [null],
      'name': [null],
      'email': [null],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstloginPage');
    console.log("f", this.formData$)
    this.formData$.subscribe(data => this.f.setValue(data));

  }

  goConfirmloginPage() {
    this.navCtrl.push("ConfirmloginPage")
  }

  goBack() {
    this.navCtrl.pop();
  }
}