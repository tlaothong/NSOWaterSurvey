import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the WaterAnimalPlantingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-water-animal-planting',
  templateUrl: 'water-animal-planting.html',
})
export class WaterAnimalPlantingPage {
  aquaticAnimal: FormGroup;
  private submitRequested: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.aquaticAnimal = this.fb.group({
      
        "doing": ['',Validators.required],
        "fish": this.fb.group({
          "doing": ['',Validators.required],
          "depression": ['',Validators.required],
          "gardenGroove": ['',Validators.required],
          "stew": ['',Validators.required],
          "riceField": ['',Validators.required],
          "other": ['',Validators.required],
          "fieldCount": ['',Validators.required],
          "fieldsAreSameSize": ['',Validators.required],
          "fields": this.fb.group({
            "shape": ['',Validators.required],
            "area": this.fb.group({
              "rai": ['',Validators.required],
              "ngan": ['',Validators.required],
              "sqWa": ['',Validators.required]
            }),
            "depth": ['',Validators.required],
            "rectangle": this.fb.group({
              "width": ['',Validators.required],
              "length": ['',Validators.required],
              "_id": ['',Validators.required]
            }),
            "diameter": ['',Validators.required]
          }),

          "animalsCount": ['',Validators.required],
          "waterSources": this.fb.group({
            "plumbing": ['',Validators.required],
            "underGround": ['',Validators.required],
            "pool": ['',Validators.required],
            "river": ['',Validators.required],
            "irrigation": ['',Validators.required],
            "rain": ['',Validators.required],
            "buying": ['',Validators.required],
            "rainingAsIs": ['',Validators.required],
            "other": ['',Validators.required]
          })
        })
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterAnimalPlantingPage');

  }
  public handleSubmit() {
    this.submitRequested = true;

  }

  public isValid(name: string): boolean {
    var ctrl = this.aquaticAnimal.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
