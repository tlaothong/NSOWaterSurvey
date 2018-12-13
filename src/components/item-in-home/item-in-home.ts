import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'item-in-home',
  templateUrl: 'item-in-home.html'
})
export class ItemInHomeComponent {

  public text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = 'Hello World';
  }

  goBuildingInfo(){
    this.navCtrl.push("BuildingInformation1Page")
  }
  
}
