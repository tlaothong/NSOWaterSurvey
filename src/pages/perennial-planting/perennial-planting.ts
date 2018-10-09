import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the PerennialPlantingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perennial-planting',
  templateUrl: 'perennial-planting.html',
})
export class PerennialPlantingPage {
  public PerennialPlantingFrm: FormGroup;
  private submitRequested: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.PerennialPlantingFrm = this.fb.group({
      'doing':[''],
      'fieldCount':[''],
      'fields':this.fb.group({
        'area': this.fb.group({
          'rai':[''],
          'ngan':[''],
          'sqWa':['']
        }),
        'irrigationField':[''],
        // ในรอบ 12 เดือนที่ผ่านมาที่แปลงน้ปลูกพืชไร่ชนิดใด(ระบุได้ไม่เกิน 5 ชนิด) 
        'waterSource':this.fb.group({
          'rainingAsIs': [''],
            'plumbing': [''],
            'underGround': [''],
            'pool': [''],
            'river': [''],
            'irrigation': [''],
            'rain': [''],
            'buying': [''],
            'other': ['']
        })
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerennialPlantingPage');
  }
  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string) : boolean {
    var ctrl = this.PerennialPlantingFrm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
