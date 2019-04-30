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
import { Device } from '@ionic-native/device';
import { CloudSyncProvider } from '../../providers/cloud-sync/cloud-sync';

@IonicPage()
@Component({
  selector: 'page-firstlogin',
  templateUrl: 'firstlogin.html',
})

export class FirstloginPage {
  f: FormGroup;
  private formData$ = this.store.select(getUserData).pipe(map(s => s));
  public riceDoing: boolean;
  private guid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>,
    private fb: FormBuilder, private alertCtrl: AlertController, private appState: AppStateProvider,
    private dataStore: DataStoreProvider, private device: Device, private cloud: CloudSyncProvider) {

    this.f = this.fb.group({
      '_idqr': null,
      'idUser': null,
      'password': null,
      'name': null,
      'email': null,
      'idEA': null
    });
    this.f.setValue(this.navParams.data.form);
    this.guid = this.navParams.data.guid;
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

      var deviceId = this.device.serial;
      this.cloud.saveUserInfo({
        username: this.f.get('idUser').value,
        deviceId: deviceId,
        guid: this.guid
      }).subscribe((response: any) => {

        // TODO: Check decode encription token
        var token = response.token;

        // TODO: Save token file
        this.navCtrl.setRoot("LoginPage");
      })
    }
    else {
      alert.present();
    }
  }
}
