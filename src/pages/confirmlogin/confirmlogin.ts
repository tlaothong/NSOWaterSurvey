import { Store } from '@ngrx/store'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { getUserData } from '../../states/logging';
import { LoggingState } from '../../states/logging/logging.reducer';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-confirmlogin',
  templateUrl: 'confirmlogin.html',
})

export class ConfirmloginPage {

  private formData$ = this.store.select(getUserData).pipe(map(s => s));
  private userData: any;
  private fg: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController, private store: Store<LoggingState>,
      private appState: AppStateProvider) {
    this.fg = fb.group({
      '_idqr': null,
      'idUser': this.appState.userId,
      'password': null,
      'name': "ทดสอบ เปิดใช้งาน",
      'email': "pee@gmail.com",
      'idEA':[null]
    });
  }

  ionViewDidLoad() {
    // this.formData$.subscribe(data => this.userData = data);
    // this.fg.setValue(this.userData);
  }

  goGetworkPage() {
    this.navCtrl.push("FirstloginPage");
  }
}
