import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { LoadUserDataByQRCode, LoadUserDataById } from '../../states/logging/logging.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getUserData } from '../../states/logging';
import { map, delay } from 'rxjs/operators';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Storage } from '@ionic/storage';
import { stringify } from '@angular/core/src/render3/util';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-scanqr',
  templateUrl: 'scanqr.html',
})

export class ScanqrPage {
  data: any;
  fg: FormGroup;
  qrCode: string;
  private formDataUser$ = this.store.select(getUserData);
  public userObj: any
  private formData$ = this.store.select(getUserData).pipe(map(s => s));
  constructor(public navCtrl: NavController, private storage: Storage,
    private alertCtrl: AlertController, private platform: Platform,
    private qrScanner: QRScanner, public navParams: NavParams,
    private store: Store<LoggingState>, private appState: AppStateProvider) {
  }

  ionViewDidLoad() {

  }

  goFirstLogin() {
    // this.navCtrl.push("FirstpagePage")
    // this.qrCode = "f30d8fca-e7ad-4838-93b9-90179cfe9295";
    // this.qrCode = "40500841234";
    // this.store.dispatch(new LoadUserDataById("4050084"));
    // this.formDataUser$.subscribe(data => {
    //   if (data != null) {
    //     this.userObj = data
    //     console.log(this.userObj);
    //     this.storage.set('UserInfo', this.userObj);
    //   }
    // });
    // this.store.dispatch(new LoadUserDataByQRCode(this.qrCode));
    // this.navCtrl.pop();

  }


  Scan() {
    if (this.platform.is('cordova')) {
      this.qrScanner.prepare()
        .then((status: QRScannerStatus) => {
          if (status.authorized) {
            // camera permission was granted
            let ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];

            // start scanning
            let scanSub = this.qrScanner.scan().timeout(60000).subscribe((text: string) => {
              //alert(text);
              setTimeout(() => {
                this.qrScanner.hide();
              }, 60000);
              if (text.length >= 7) {
                let alert = this.alertCtrl.create({
                  title: "กำลังเชื่อมต่อกับระบบ กรุณารอสักครู่ . . .",
                });
                alert.present();

                this.appState.userId = text.substr(0, 7);

                setTimeout(() => {
                  alert.dismiss();
                  this.qrScanner.hide();
                  this.navCtrl.push("ConfirmloginPage")
                }, 900);
              } else {
                let alert = this.alertCtrl.create({
                  title: "Tablet เครื่องนี้ยังไม่ได้ลงทะเบียนในระบบ กรุณาตรวจสอบ",
                });
                alert.present();
              }

              // this.scanData = text;
              this.qrScanner.hide(); // hide camera preview
              scanSub.unsubscribe(); // stop scanning
              ionApp.style.display = "block";
            });

            // show camera preview
            ionApp.style.display = "none";
            this.qrScanner.show();
            // setTimeout(() => {
            //     ionApp.style.display = "block";
            //     scanSub.unsubscribe(); // stop scanning
            //     this.qrScanner.hide();
            //   }, 5000);
            // wait for user to scan something, then the observable callback will be called

          } else if (status.denied) {
            let alert = this.alertCtrl.create({
              title: "status.denied",
            });
            alert.present();
            // camera permission was permanently denied
            // you must use QRScanner.openSettings() method to guide the user to the settings page
            // then they can grant the permission from there
          } else {
            let alert = this.alertCtrl.create({
              title: "Error",
            });
            alert.present();
            // permission was denied, but not permanently. You can ask for permission again at a later time.
          }
        })
        .catch((e: any) => {
          let alert = this.alertCtrl.create({
            title: "Error",
          });
          alert.present();
        });

      this.qrScanner.scan();

    } else {

    }
  }

}
