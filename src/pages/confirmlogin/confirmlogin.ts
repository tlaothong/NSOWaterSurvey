import { Store } from '@ngrx/store'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { getUserData } from '../../states/logging';
import { LoggingState } from '../../states/logging/logging.reducer';

@IonicPage()
@Component({
  selector: 'page-confirmlogin',
  templateUrl: 'confirmlogin.html',
})

export class ConfirmloginPage {

  private formData$ = this.store.select(getUserData).pipe(map(s => s));
  private userData: any;
  private fg: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController, private store: Store<LoggingState>) {
    this.fg = fb.group({
      '_idqr': null,
      'idUser': null,
      'password': null,
      'name': null,
      'email': null
    });
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.userData = data);
    this.fg.setValue(this.userData);
  }

  goGetworkPage() {
    this.navCtrl.push("GetworkPage")
  }

  goBack() {
    this.navCtrl.pop();
  }
}
