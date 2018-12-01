import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-agriculture',
  templateUrl: 'agriculture.html',
})
export class AgriculturePage {

  private submitRequested: boolean;
  public f: FormGroup;

  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams) {
    this.f = this.fb.group({
      "ricePlant": [false, Validators.required],
      'agronomyPlant': [false, Validators.required],
      'rubberTree': [false, Validators.required],
      'perennialPlant': [false, Validators.required],
      'herbsPlant': [false, Validators.required],
      'flowerCrop': [false, Validators.required],
      'mushroomPlant': [false, Validators.required],
      'animalFarm': [false, Validators.required],
      'aquaticAnimals': [false, Validators.required],
    }, {
        validator: AgriculturePage.checkAnyOrOther()
      });
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {

      const ricePlant = c.get('ricePlant');
      const agronomyPlant = c.get('agronomyPlant');
      const rubberTree = c.get('rubberTree');
      const perennialPlant = c.get('perennialPlant');
      const herbsPlant = c.get('herbsPlant');
      const flowerCrop = c.get('flowerCrop');
      const mushroomPlant = c.get('mushroomPlant');
      const animalFarm = c.get('animalFarm');
      const aquaticAnimals = c.get('aquaticAnimals');

      if (!ricePlant.value && !agronomyPlant.value && !rubberTree.value && !perennialPlant.value && !herbsPlant.value && !flowerCrop.value && !mushroomPlant.value
        && !animalFarm.value && !aquaticAnimals.value) {
        return { 'anycheck': true };
      }
      return null;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgriculturePage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    console.log(this.submitRequested);
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'anycheck') {
      ctrl = this.f;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
