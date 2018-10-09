import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the FlowerCropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flower-crop',
  templateUrl: 'flower-crop.html',
})
export class FlowerCropPage {

  flowerCrop : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fb : FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowerCropPage');
  }
  ionViewDidEnter(){
    this.flowerCrop = this.fb.group({
      doing : [''],
      fieldCount : [''],
      fields : this.fb.group({
        thisPlantOnly : [''],
        mixedWithPrimaryPlant : [''],
        waterSources : this.fb.group({
          rainingAsIs : [''],
          plumbing : [''],
          underGround : [''],
          pool : [''],
          river : [''],
          irrigation : [''],
          rain : [''],
          buying: [''],
          other : ['']
        })
      })
    })
  }


}
