import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { LoadUserDataByQRCode } from '../../states/logging/logging.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getUserData } from '../../states/logging';
import { map, delay } from 'rxjs/operators';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@IonicPage()
@Component({
  selector: 'page-scanqr',
  templateUrl: 'scanqr.html',
})

export class ScanqrPage {
  data: any;
  fg: FormGroup;
  qrCode: string;
  private formData$ = this.store.select(getUserData).pipe(map(s => s));
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private platform: Platform, private qrScanner: QRScanner, public navParams: NavParams, private store: Store<LoggingState>) {
  }

  ionViewDidLoad() {

  }

  goFirstLogin() {
    this.navCtrl.push("FirstpagePage")
    // this.qrCode = "f30d8fca-e7ad-4838-93b9-90179cfe9295";
    // this.store.dispatch(new LoadUserDataByQRCode(this.qrCode));
    // this.navCtrl.pop();
  }

  // scan() {

  //   this.qrScanner.prepare()
  //     .then((status: QRScannerStatus) => {
  //       if (status.authorized) {
  //         let ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];

  //         // camera permission was granted
  //         // start scanning
  //         let scanSub = this.qrScanner.scan().timeout(60000).subscribe((text: string) => {
  //           console.log('Scanned something', text);

  //           const alert = this.alertCtrl.create({
  //             title: text,
  //           });
  //           alert.present();

  //           this.qrScanner.hide(); // hide camera preview
  //           scanSub.unsubscribe(); // stop scanning
  //           ionApp.style.display = "block";

  //         });
  //         ionApp.style.display = "none";
  //         this.qrScanner.show();
  //       } else if (status.denied) {
  //         const alert = this.alertCtrl.create({
  //           title: "1111111111",
  //         });
  //         alert.present();
  //         // camera permission was permanently denied
  //         // you must use QRScanner.openSettings() method to guide the user to the settings page
  //         // then they can grant the permission from there
  //       } else {
  //         const alert = this.alertCtrl.create({
  //           title: "222222222222",
  //         });
  //         alert.present();
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

            // start scanning
            let scanSub = this.qrScanner.scan().timeout(60000).subscribe((text: string) => {
              //alert(text);
              let alert = this.alertCtrl.create({
                title: "กำลังเชื่อมต่อกับระบบ กรุณารอสักครู่...",
              });
              alert.present();

              // this.scanData = text;
              // let userID = this.scanData.slice(0, 7);
              // let password = this.scanData.slice(7);
              this.qrScanner.hide(); // hide camera preview
              scanSub.unsubscribe(); // stop scanning
              ionApp.style.display = "block";
              // this.navCtrl.push('createpassword', { 'userID': userID, 'password': password }, { animate: false });
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
              title: "5555555555555",
            });
            alert.present();
            // permission was denied, but not permanently. You can ask for permission again at a later time.
          }
        })
        .catch((e: any) => console.log('Error is', e));


    } else {

    }
  }
}
