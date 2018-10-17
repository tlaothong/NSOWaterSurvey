import { Component,ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FishFarmingComponent } from '../../components/fish-farming/fish-farming';
import { FrogFarmingComponent } from '../../components/frog-farming/frog-farming';
import { CrocodileFarmingComponent } from '../../components/crocodile-farming/crocodile-farming';

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

  @ViewChildren(FishFarmingComponent) private fishFarming : FishFarmingComponent[];
  @ViewChildren(FrogFarmingComponent) private frogFarming : FrogFarmingComponent[];
  @ViewChildren(CrocodileFarmingComponent) private crocodileFarming : CrocodileFarmingComponent[];
  public f: FormGroup;

  private submitRequested: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      "doing": [null, Validators.required],
      "isFish": [null, Validators.required],
      "fish": FishFarmingComponent.CreateFormGroup(fb),
      "isShrimp": [null, Validators.required],
      "shrimp": FishFarmingComponent.CreateFormGroup(fb),
      "isFrog": [null, Validators.required],
      "frog": FrogFarmingComponent.CreateFormGroup(fb),
      "isCrocodile": [null, Validators.required],
      "crocodile": CrocodileFarmingComponent.CreateFormGroup(fb),
      "isSnappingTurtle": [null, Validators.required],
      "snappingTurtle": CrocodileFarmingComponent.CreateFormGroup(fb),
      "isCrab": [null, Validators.required],
      "crab": FishFarmingComponent.CreateFormGroup(fb),
      "isShellFish": [null, Validators.required],
      "shellFish": FishFarmingComponent.CreateFormGroup(fb),
      "isTurtle": [null, Validators.required],
      "turtle": CrocodileFarmingComponent.CreateFormGroup(fb),
      "isReddish": [null, Validators.required],
      "reddish": FishFarmingComponent.CreateFormGroup(fb),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterAnimalPlantingPage');

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fishFarming.forEach(it => it.submitRequest());
    this.frogFarming.forEach(it => it.submitRequest());
    this.crocodileFarming.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
