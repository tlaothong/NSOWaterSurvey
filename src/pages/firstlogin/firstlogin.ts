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
import { File } from '@ionic-native/file';

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
    private dataStore: DataStoreProvider, private device: Device, private cloud: CloudSyncProvider, private file: File) {

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

      let deviceId = this.device.serial;
      this.cloud.saveUserInfo({
        userId: this.f.get('idUser').value,
        deviceId: deviceId,
        guidId: this.guid
      }).subscribe((response: any) => {

        // TODO: Check decode encription token
        var isTokenValid = response != null && response.token != null;
        if (isTokenValid) {
          let token = response.token;
          var data = {
            username: this.f.get('idUser').value,
            password: this.f.get('password').value,
            token: token
          };
          this.file.writeFile(this.file.dataDirectory, "userdata.json", JSON.stringify(data), { replace: true })
          this.navCtrl.setRoot("LoginPage");
        }
        else {
          // TODO: Alert error token is null
        }
      })
    }
    else {
      alert.present();
    }
  }
}
