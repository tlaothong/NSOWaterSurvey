import { Store } from '@ngrx/store'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getUserData } from '../../states/logging';
import { LoggingState } from '../../states/logging/logging.reducer';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { DataStoreProvider } from '../../providers/data-store/data-store';


@IonicPage()
@Component({
  selector: 'page-firstlogin',
  templateUrl: 'firstlogin.html',
})

export class FirstloginPage {
  f: FormGroup;
  private formData$ = this.store.select(getUserData).pipe(map(s => s));
  public riceDoing: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>,
      private fb: FormBuilder, private alertCtrl: AlertController, private appState: AppStateProvider,
      private dataStore: DataStoreProvider) {
    this.f = this.fb.group({
      '_idqr': [null],
      'idUser': this.appState.userId,
      'password': null,
      'name': null,
      'email': null,
      'idEA': null
    });
  }

  ionViewDidLoad() {
    // this.formData$.subscribe(data => {
    //   if (data != null) {
    //     this.f.setValue(data)
    //   }
    // });
  }



  goConfirmloginPage(confirmPassword: any) {
    // let _idqr = this.f.get('_idqr').value;
    let password = this.f.get('password').value;

    let alert = this.alertCtrl.create({
      message: 'กรุณากรอกรหัสผ่านให้ถูกต้อง',
      buttons: ['ยืนยัน']
    });

    if (password == confirmPassword) {
      this.dataStore.saveUser(this.appState.userId, password);

      this.navCtrl.setRoot("LoginPage");
    } else {
      alert.present();
    }
  }
}
