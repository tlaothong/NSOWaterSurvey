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
  private submitRequested: boolean;
  ricePlant: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.ricePlant = this.fb.group({
      
        'doing': ['',Validators.required],
        'fieldCount': ['',Validators.required],
        'fields': this.fb.group({
          'location': this.fb.group({
            'province': ['',Validators.required],
            'district':['',Validators.required],
            'subDistrict':['',Validators.required]
          }),
          'area': this.fb.group({
            'rai': ['',Validators.required],
            'ngan': ['',Validators.required],
            'sqWa': ['',Validators.required]
          }),
          'plantingCount': ['',Validators.required],
          'plantingArea': ['',Validators.required],
          'areaUsed': this.fb.group({
            'rai': ['',Validators.required],
            'ngan': ['',Validators.required],
            'sqWa': ['',Validators.required]
          })
        }),
        'plantingFromMonth': ['',Validators.required],
        'plantingThruMonth': ['',Validators.required],
        'waterFillingCount': ['',Validators.required],
        'waterHigh': ['',Validators.required],
        'irrigationField': ['',Validators.required],
        'waterSources': this.fb.group({
          'plumbing': ['',Validators.required],
          'underGround': ['',Validators.required],
          'pool': ['',Validators.required],
          'river': ['',Validators.required],
          'irrigation': ['',Validators.required],
          'rain': ['',Validators.required],
          'buying': ['',Validators.required],
          'rainingAsIs': ['',Validators.required],
          'other': ['',Validators.required],
        })
    
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RicePage');
  }

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;

  }

  public isValid(name: string): boolean {
    var ctrl = this.ricePlant.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }









}
