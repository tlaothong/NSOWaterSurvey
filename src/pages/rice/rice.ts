import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rice',
  templateUrl: 'rice.html',
})
export class RicePage {

  RiceForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RicePage');
  }

  ionViewDidEnter() {
    this.RiceForm = this.fb.group({
      ricePlant: this.fb.group({
        'doing': true,
        'fieldCount': 1,
        'fields': this.fb.group({
          'location' : this.fb.group({
            'province' : "ขอนแก่น",
            'district' : "เมือง",
            'subDistrict' : "เมือง"
          }),
          'area' : this.fb.group({
            'rai' : 5,
           'ngan' : 3,
            'sqWa' : 1
          }),
          'plantingCount' : 1,
          'plantingArea' : 1,
          'areaUsed' : this.fb.group({
            'rai' : 5,
            'ngan' : 3,
            'sqWa' : 1
          })
        }),
        'plantingFromMonth' : 6,
        'plantingThruMonth' : 11,
        'waterFillingCount' : 1,
        'waterHigh' : 2,
        'irrigationField' : false,
        'waterSources' : this.fb.group({
        'plumbing' :  false,
          'underGround' :  false,
          'pool': false,
            'river':  false,
            'irrigation':  false,
            'rain':  true,
            'buying': true,
            'rainingAsIs': true,
            'other': "no",
        })
      }),
    });
  }








  

}
