import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getUserData } from '../../states/logging';
import { map } from 'rxjs/operators';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
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
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController, private platform: Platform,
    private qrScanner: QRScanner, public navParams: NavParams,
    private store: Store<LoggingState>, private appState: AppStateProvider,
    private appstate: AppStateProvider) {
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
              setTimeout(() => {
                this.qrScanner.hide();
              }, 60000);

              let dataSplited = text.split("$");
              let guid = dataSplited[0];
              let username = dataSplited[1];
              let rawData = guid + "$" + username;
              let signature = dataSplited[2];
              let result = this.appstate.Verify(rawData, signature)
              if (result) {
                this.appState.userId = username;
                setTimeout(() => {
                  this.qrScanner.hide();
                  this.navCtrl.push("ConfirmloginPage", { username: username, guid: guid })
                }, 900);

                this.qrScanner.hide(); // hide camera preview
                scanSub.unsubscribe(); // stop scanning
                ionApp.style.display = "block";
              }
              else {
                let alertVerifyFail = this.alertCtrl.create({
                  title: "พบข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
                });
                alertVerifyFail.present();
              }
            });

            // show camera preview
            ionApp.style.display = "none";
            this.qrScanner.show();
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

    } else {

    }
  }

}
