import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the AnimalFarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal-farm',
  templateUrl: 'animal-farm.html',
})
export class AnimalFarmPage {

  private submitRequested: boolean;
  public AnimalFarmForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public fb: FormBuilder) {
    this.AnimalFarmForm = this.fb.group({
      "doing": [null, Validators.required],
      'cow': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'buffalo': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'pig': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'goat': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'sheep': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'chicken': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'duck': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'goose': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'silk': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'other': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
    });

  }
    
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalFarmPage');
  }

  ionViewDidEnter() {

  }
  public handleSubmit() {
    this.submitRequested = true;

  }

  public isValid(name: string) : boolean {
    var ctrl = this.AnimalFarmForm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

    
  
}    