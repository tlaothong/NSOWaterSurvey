import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the FactorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-factorial',
  templateUrl: 'factorial.html',
})
export class FactorialPage {

  private submitRequested: boolean;
  FactoryForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.FactoryForm = this.fb.group({
      'name': ['',Validators.required],
      'category': ['',Validators.required],
      'workersCount': ['',Validators.required],
      'heavyMachine': ['',Validators.required],
      'waterSource': this.fb.group({
        'plumbing': ['',Validators.required],
        'underGround': ['',Validators.required],
        'pool': ['',Validators.required],
        'river': ['',Validators.required],
        'irrigation': ['',Validators.required],
        'rain': ['',Validators.required],
        'buying': ['',Validators.required],
        'other': ['',Validators.required]
      }),
      'hasWasteWaterFromProduction': ['',Validators.required],
      'hasWasteWaterTreatment': ['',Validators.required],
      'wasteWaterReuse': ['',Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactorialPage');
  }
  ionViewDidEnter() {

  }
  public handleSubmit() {
    this.submitRequested = true;

  }

  public isValid(name: string) : boolean {
    var ctrl = this.FactoryForm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
