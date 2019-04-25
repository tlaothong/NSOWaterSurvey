import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { Geolocation } from '@ionic-native/geolocation';
import { Subscription } from 'rxjs/Subscription';

declare var google;

/**
 * Generated class for the EaMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ea-map',
  templateUrl: 'ea-map.html',
})
export class EaMapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mapCenter: any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, public navParams: NavParams, private appState: AppStateProvider) {
    this.mapCenter = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EaMapPage');
    this.loadInitialMap(this.mapElement.nativeElement);
  }

  markCurrentLocation() {
    let mapOptions = {
      // center: new google.maps.LatLng('13.754599', '100.492011'),
      center: new google.maps.LatLng(this.mapCenter),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: true,
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.geolocation.getCurrentPosition().then((loacation) => {

      var latLong = new google.maps.LatLng(loacation.coords.latitude, loacation.coords.longitude);
      var marker = new google.maps.Marker({
        position: latLong,
        map : this.map,
        title: 'You are here! ',
      });
      
      this.map.setZoom(15);
      this.map.setCenter(marker.getPosition());

    }, err => {
      console.log(err);
    });
  }

  loadInitialMap(nativeElemt) {
    let mapOptions = {
      // center: new google.maps.LatLng('13.754599', '100.492011'),
      center: new google.maps.LatLng(this.mapCenter),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false
    }
    let map = new google.maps.Map(nativeElemt, mapOptions);

    map.data.loadGeoJson('https://nsomap.blob.core.windows.net/byea/' + this.appState.eaCode + '.json');

    map.data.setStyle({
      fillColor: 'yellow',
      fillOpacity: 0.1,
      strokeColor: 'red',
      strokeWeight: 2
    });

    this.map = map;

    return map;
  }

}
