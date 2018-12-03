import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'item-in-home',
  templateUrl: 'item-in-home.html'
})
export class ItemInHomeComponent {

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello ItemInHomeComponent Component');
    this.text = 'Hello World';
  }

  goBuildingInfo(){
    this.navCtrl.push("BuildingInformation1Page")
  }
}
