import { Store } from '@ngrx/store'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getUserInformation } from '../../states/logging';
import { LoggingState } from '../../states/logging/logging.reducer';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-firstlogin',
  templateUrl: 'firstlogin.html',
})

export class FirstloginPage {
  datauser: any;
  f: FormGroup;
  formConfirm: FormGroup;
  disBtn: boolean;
  private formData$ = this.store.select(getUserInformation).pipe(map(s => s));
  confirmpassword: string;
  public riceDoing: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>, private fb: FormBuilder) {
    this.f = this.fb.group({
      '_idqr': [null],
      'idUser': [null],
      'password': [null],
      'name': [null],
      'email': [null],
    });

    this.confirmpassword = '';
    this.disBtn = true;
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));
  }

  goBack() {
    this.navCtrl.pop();
  }

  onKey(value: string) {
    this.confirmpassword = value;
    if (this.f.get('password').value == this.confirmpassword) {
      this.disBtn = false;
    } else {
      this.disBtn = true;
    }
  }
}
