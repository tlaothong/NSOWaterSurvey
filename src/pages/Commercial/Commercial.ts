import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Commercial',
  templateUrl: 'Commercial.html',
})
export class CommercialPage {
  private CommercialFrm: FormGroup;
  private submitRequested:boolean;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fb: FormBuilder) {
    this.CommercialFrm = this.fb.group({
      'name':[null, Validators.required],
      'serviceType':[null, Validators.required],
      'questionForAcademy':this.fb.group({
        'preSchool':this.fb.group({
          'hasItem':[null, Validators.required],
          'itemCount':[null, Validators.required],
        }),
        'kindergarten':this.fb.group({
          'hasItem':[null, Validators.required],
          'itemCount':[null, Validators.required],
        }),
        'primarySchool':this.fb.group({
          'hasItem':[null, Validators.required],
          'itemCount':[null, Validators.required],
        }),
        'highschool':this.fb.group({
          'hasItem':[null, Validators.required],
          'itemCount':[null, Validators.required],
        }),
        'vocational':this.fb.group({
          'hasItem':[null, Validators.required],
          'itemCount':[null, Validators.required],
        }),
        'higherEducation':this.fb.group({
          'hasItem':[null, Validators.required],
          'itemCount':[null, Validators.required],
        }),

        'personnelCount':[null, Validators.required],

      }),
      'hotelsAndResorts':this.fb.group({
        'roomCount':[null, Validators.required],
        'personnelCount':[null, Validators.required],
      }),
      'hospital':this.fb.group({
        'bedCount':[null, Validators.required],
        'personnelCount':[null, Validators.required],
      }),
      'building':this.fb.group({
        'roomCount':[null, Validators.required],
        'occupiedRoomCount':[null, Validators.required],
        'personnelCount':[null, Validators.required],
      }),
      'religious':this.fb.group({
        'peopleCount':[null, Validators.required],
      }),
      'otherBuilding':this.fb.group({
        'personnelCount':[null, Validators.required],
      }),
      'waterSources':this.fb.group({
        'plumbing':[null, Validators.required],
        'underGround':[null, Validators.required],
        'pool':[null, Validators.required],
        'river':[null, Validators.required],
        'irrigation':[null, Validators.required],
        'rain':[null, Validators.required],
        'buying':[null, Validators.required],
        'rainingAsIs':[null, Validators.required],
        'hasOther':[null, Validators.required],
        'other':[null, Validators.required],
        
        
      }),


        
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommercialPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    
  }

  public isValid(name: string): boolean {
    var ctrl = this.CommercialFrm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
