import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
/**
 * Generated class for the RubberTreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rubber-tree',
  templateUrl: 'rubber-tree.html',
})
export class RubberTreePage {


  Rubberform: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RubberTreePage');
  }

  ionViewDidEnter() {
    this.Rubberform = this.fb.group({
      rubbertree: this.fb.group({
        "doing": true,
        "fieldCount": 0,
        "fields": this.fb.group({
          "location":this.fb.group( {
            "province": "string",
            "distric": "string",
            "subDistric": "string"
          }),
          "area": this.fb.group({
            "rai": 0,
            "ngan": 0,
            "sqWa": 0
          }),
          "irrigationField": true,
          "waterSources":  this.fb.group({
            "plumbing": true,
            "underGround": true,
            "pool": true,
            "river": true,
            "irrigation": true,
            "rain": true,
            "buying": true,
            "rainingAsIs": true,
            "other": "string"
          })
        })

      })


    })





  }

}
