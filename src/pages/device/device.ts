import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Platform } from 'ionic-angular/platform/platform';

/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {

  public lat;
  public long;
  public locat;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }

  public scanQR() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert('Barcode data' + barcodeData);
    }).catch(err => {
      alert('Error' + err);
    });
  }

  public getLocation() {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(pos => {
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;

      if (this.platform.is("cordova")) {
        this.nativeGeocoder.reverseGeocode(this.lat, this.long, { defaultLocale: "th-TH", maxResults: 1, useLocale: true }).then(arr => {
          if (arr && arr.length > 0) {
            let r = arr[0];
            this.locat = r.administrativeArea + ', ' + r.locality + ', ' + r.countryName + ', ' + r.postalCode;
          }
        });
      }
    });
  }

}
