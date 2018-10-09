import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the WaterAnimalPlantingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-water-animal-planting',
  templateUrl: 'water-animal-planting.html',
})
export class WaterAnimalPlantingPage {
  aquaticAnimalForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fb: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterAnimalPlantingPage');
  }

}
