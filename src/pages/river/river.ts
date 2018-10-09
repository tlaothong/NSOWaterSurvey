import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the RiverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-river',
  templateUrl: 'river.html',
})
export class RiverPage {

  RiverForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiverPage');
  }

  ionViewDidEnter() {
    this.RiverForm = this.fb.group({
      river: this.fb.group({
        "hasPump": true,
        "pumpCount": 0,
        "pumps": this.fb.group(
          {
            "pumpAuto": true,
            "unknowHoursPerPump": true,
            "hoursPerPump": 0,
            "numberOfPumpsPerYear": 0,
            "pumpRate": this.fb.group({
              "knowPumpRate": true,
              "pumpRateUsage": 0
            }),
            "energySource": this.fb.group({
              "electicPump": true,
              "solaPump": true,
              "petrolPump": true,
              "twoWheeledTractors": true
            }),
            "pumpType": this.fb.group({
              "electicPump": true,
              "solaPump": true,
              "petrolPump": true,
              "twoWheeledTractors": true
            }),
            "horsePower": 0,
            "suctionPipeSize": 0,
            "pipelineSize": 0
          }),
        "usageActivities": this.fb.group({
          "drink": 0,
          "plant": 0,
          "farm": 0,
          "agriculture": 0,
          "product": 0,
          "service": 0
        }),
        "qualityProblem": this.fb.group({
          "hasProblem": true,
          "problem": this.fb.group({
            "turbidWater": true,
            "saltWater": true,
            "smell": true,
            "filmOfOil": true,
            "fogWater": true,
            "hardWater": true
          })
        })
      })

    })
  }
}
