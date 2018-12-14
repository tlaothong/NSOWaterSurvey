import { Store } from '@ngrx/store'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getUserInformation } from '../../states/logging';
import { LoggingState } from '../../states/logging/logging.reducer';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetUserPassword, LoadDataWorkEA } from '../../states/logging/logging.actions';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-firstlogin',
  templateUrl: 'firstlogin.html',
})

export class FirstloginPage {
  datauser: any;
  f: FormGroup;
  formConfirm: FormGroup;
  checkConfirmPassword: boolean;
  private formData$ = this.store.select(getUserInformation).pipe(map(s => s));
  confirmpassword: string;
  public riceDoing: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>, private fb: FormBuilder, private alertCtrl: AlertController) {
    this.f = this.fb.group({
      '_idqr': [null],
      'idUser': [null],
      'password': [null],
      'name': [null],
      'email': [null],
    });

    this.confirmpassword = '';
    this.checkConfirmPassword = true;
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
      this.checkConfirmPassword = false;
    } else {
      this.checkConfirmPassword = true;
    }
  }

  goConfirmloginPage() {
    var data = {
      '_idqr': this.f.get('_idqr').value,
      'password': this.f.get('password').value
    }

    let alert = this.alertCtrl.create({
      message: 'กรุณากรอกรหัสผ่านให้ถูกต้อง',
      buttons: ['ยืนยัน']
    });

    if (!this.checkConfirmPassword) {
      this.store.dispatch(new SetUserPassword(data));
      
    } else {
      alert.present()
    }
  }
}
