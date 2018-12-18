import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadUserInformation } from '../../states/logging/logging.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getUserInformation } from '../../states/logging';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-scanqr',
  templateUrl: 'scanqr.html',
})

export class ScanqrPage {
  data: any;
  fg: FormGroup;
  qrCode: string;
  private formData$ = this.store.select(getUserInformation).pipe(map(s => s));
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>) {
  }

  ionViewDidLoad() {

  }

  goFirstLogin() {
    this.qrCode = "a8445b5d-f846-4084-bd9f-e1b089bed430";
    this.store.dispatch(new LoadUserInformation(this.qrCode));
  }

  goBack() {
    this.navCtrl.pop();
  }
}
