import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EaMapPage');
    this.loadInitialMap(this.mapElement.nativeElement);
  }

  loadInitialMap(nativeElemt) {
    let mapOptions = {
      center: new google.maps.LatLng('16.4265872', '102.8518399'),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false
    }
    let map = new google.maps.Map(nativeElemt, mapOptions);

    map.data.loadGeoJson('https://water.surveydb.app/assets/test.json');

    map.data.setStyle({
      fillColor: 'red',
      fillOpacity: 0.3,
      strokeColor: 'red',
      strokeWeight: 2
    });

    this.map = map;

    return map;
  }

}