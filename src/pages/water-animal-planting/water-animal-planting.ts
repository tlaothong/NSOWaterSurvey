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
  f: FormGroup;
  private submitRequested: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      "doing": ['', Validators.required],
      "fish": this.fb.group({
        "doing": ['', Validators.required],
        "depression": ['', Validators.required],
        "gardenGroove": ['', Validators.required],
        "stew": ['', Validators.required],
        "riceField": ['', Validators.required],
        "other": ['', Validators.required],
        "fieldCount": ['', Validators.required],
        "fieldsAreSameSize": ['', Validators.required],
        "fields": this.fb.group({
          "shape": ['', Validators.required],
          "area": this.fb.group({
            "rai": ['', Validators.required],
            "ngan": ['', Validators.required],
            "sqWa": ['', Validators.required]
          }),
          "depth": ['', Validators.required],
          "rectangle": this.fb.group({
            "width": ['', Validators.required],
            "length": ['', Validators.required],
            "_id": ['', Validators.required]
          }),
          "diameter": ['', Validators.required]
        }),

        "animalsCount": ['', Validators.required],
        "waterSources": this.fb.group({
          "plumbing": ['', Validators.required],
          "underGround": ['', Validators.required],
          "pool": ['', Validators.required],
          "river": ['', Validators.required],
          "irrigation": ['', Validators.required],
          "rain": ['', Validators.required],
          "buying": ['', Validators.required],
          "rainingAsIs": ['', Validators.required],
          "other": ['', Validators.required]
        })
      }),
      "frog": this.fb.group({
        "doing": [null, Validators.required],
        "depression": [null, Validators.required],
        "stew": [null, Validators.required],
        "other": [null, Validators.required],
        "animalsCount": [null, Validators.required],
        "waterSources": this.fb.group({
          "plumbing": [null, Validators.required],
          "underGround": [null, Validators.required],
          "pool": [null, Validators.required],
          "river": [null, Validators.required],
          "irrigation": [null, Validators.required],
          "rain": [null, Validators.required],
          "buying": [null, Validators.required],
          "rainingAsIs": [null, Validators.required],
          "hasOther": [null, Validators.required],
          "other": [null, Validators.required]
        })

      }),
      "crocodile": this.fb.group({
        "doing": [null, Validators.required],
        "depression": [null, Validators.required],
        "other": [null, Validators.required],
        "fieldCount": [null, Validators.required],
        "fieldsAreSameSize": [null, Validators.required],
        "fields": this.fb.group({
          "shape": [null, Validators.required],
          "area": this.fb.group({
            "rai": [null, Validators.required],
            "ngan": [null, Validators.required],
            "sqWa": [null, Validators.required]
          }),
          "depth": [null, Validators.required],
          "rectangle": this.fb.group({
            "width": [null, Validators.required],
            "length": [null, Validators.required],
            "_id": [null, Validators.required]
          }),
          "diameter": [null, Validators.required]
        }),
        "animalsCount": [null, Validators.required],
        "waterSources": this.fb.group({
          "plumbing": [null, Validators.required],
          "underGround": [null, Validators.required],
          "pool": [null, Validators.required],
          "river": [null, Validators.required],
          "irrigation": [null, Validators.required],
          "rain": [null, Validators.required],
          "buying": [null, Validators.required],
          "rainingAsIs": [null, Validators.required],
          "hasOther": [null, Validators.required],
          "other": [null, Validators.required]
        }),
      }),
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterAnimalPlantingPage');

  }
  public handleSubmit() {
    this.submitRequested = true;

  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
