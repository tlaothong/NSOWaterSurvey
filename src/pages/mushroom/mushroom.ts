import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      'doing': ['', Validators.required],
      'fieldCount': ['', Validators.required],
      'irrigationField': ['', Validators.required],
      'areaMeter':['', Validators.required],// ขนาดพื้นที่เท่าไหร่กี่ตารางเมตร
      'houseNumber':['', Validators.required],
      'fields': this.fb.group({
        'waterSource': this.fb.group({
          'rainingAsIs': ['', Validators.required],
          'plumbing': ['', Validators.required],
          'underGround': ['', Validators.required],
          'pool': ['', Validators.required],
          'river': ['', Validators.required],
          'irrigation': ['', Validators.required],
          'rain': ['', Validators.required],
          'buying': ['', Validators.required],
          'other': ['', Validators.required],
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
