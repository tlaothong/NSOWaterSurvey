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
    private store: Store<LoggingState>, private appState: AppStateProvider) {
      var text = "c4f473a6-09ab-43fa-9123-7d2159148f0c$10300012$S0Ed1RjKKo5BwUYcyCKgFiYlGzWGMJpdhou1A7i479hAUBxvys6Sth6Cr4qKONl6PX0mh5QNnd2JxMya0jc62c47aiZiNl7zO4FPGrQEuQGyh5XWXezOzS3K2hyUtKLJOGGAxRHwOcOAaxKJb9nXbkSu2wBFyj5bcUa8wFvlo4SX3aOZvnLnq/luhHSAzw2BUrQFuJ8rUwFKMOiA63U3Q5ZosSKY4aSu9F7zbWsbvBiGvM9NGuaa2b8y3nC81y4VHS90OUHM1bLDnkopfFotzpqhg3GhdlHBc6io3RHapcEoTBttbzd93gMTf9cqKj2SG5jiUae0xM3MtwA==";
      let dataSplited = text.split("$");
      let guid = dataSplited[0];
      let username = dataSplited[1];
      let rawData = guid + "$" + username;
      let signature = dataSplited[2];
      let result = this.appState.Verify(rawData, signature)
      console.log(result);
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

  // Scan() {
  //   this.qrScanner.prepare()
  //     .then((status: QRScannerStatus) => {
  //       if (status.authorized) {
  //         // camera permission was granted


  //         // start scanning
  //         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //           console.log('Scanned something', text);

  //           this.qrScanner.hide(); // hide camera preview
  //           scanSub.unsubscribe(); // stop scanning
  //         });

  //       } else if (status.denied) {
  //         // camera permission was permanently denied
  //         // you must use QRScanner.openSettings() method to guide the user to the settings page
  //         // then they can grant the permission from there
  //       } else {
  //         // permission was denied, but not permanently. You can ask for permission again at a later time.
  //       }
  //     })
  //     .catch((e: any) => console.log('Error is', e));
  // }


  Scan() {
    if (this.platform.is('cordova')) {
      this.qrScanner.prepare()
        .then((status: QRScannerStatus) => {
          if (status.authorized) {
            // camera permission was granted
            let ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];
            setTimeout(() => {
              this.qrScanner.hide();
            }, 60000);

            // start scanning
            let scanSub = this.qrScanner.scan().timeout(60000).subscribe((text: string) => {
              //alert(text);

              if (text != null) {
                let alert = this.alertCtrl.create({
                  title: "กำลังเชื่อมต่อกับระบบ กรุณารอสักครู่ . . .",
                });
                alert.present();

                let dataSplited = text.split("$");
                let guid = dataSplited[0];
                let username = dataSplited[1];
                let rawData = guid + "$" + username;
                let signature = dataSplited[2];
                let result = this.appState.Verify(rawData, signature)
                if (result) {
                  this.appState.userId = username;
                  setTimeout(() => {
                    this.qrScanner.hide();
                    this.navCtrl.push("ConfirmloginPage", { username: username, guid: guid })
                  }, 900);

                  // this.scanData = text;
                  this.qrScanner.hide(); // hide camera preview
                  scanSub.unsubscribe(); // stop scanning
                  ionApp.style.display = "block";
                }
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

    } else {

    }
  }
}
