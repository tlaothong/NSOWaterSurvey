import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppStateProvider } from '../../providers/app-state/app-state';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private appState: AppStateProvider) {
    this.mapCenter = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EaMapPage');
    this.loadInitialMap(this.mapElement.nativeElement);
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
