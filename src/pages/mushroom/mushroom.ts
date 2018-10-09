import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the MushroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mushroom',
  templateUrl: 'mushroom.html',
})
export class MushroomPage {
  public MushroomPlantFrm: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.MushroomPlantFrm = this.fb.group({
      'doing': [''],
      'fieldCount': [''],
      'fields': this.fb.group({
        'irrigationField': [''],
        // ขนาดพื้นที่เท่าไหร่กี่ตารางเมตร,
        'waterSource': this.fb.group({
          'rainingAsIs': [''],
          'plumbing': [''],
          'underGround': [''],
          'pool': [''],
          'river': [''],
          'irrigation': [''],
          'rain': [''],
          'buying': [''],
          'other': [''],
        })
      }),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MushroomPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string) : boolean {
    var ctrl = this.MushroomPlantFrm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
