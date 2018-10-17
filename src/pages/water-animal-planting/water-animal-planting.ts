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
  f: FormGroup;
  private submitRequested: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      "doing": ['', Validators.required],
      "fish": FishFarmingComponent.CreateFormGroup(fb),
      "shrimp": FishFarmingComponent.CreateFormGroup(fb),
      "frog": FrogFarmingComponent.CreateFormGroup(fb),
      "crocodile": CrocodileFarmingComponent.CreateFormGroup(fb),
      "snappingTurtle": CrocodileFarmingComponent.CreateFormGroup(fb),
      "crab": FishFarmingComponent.CreateFormGroup(fb),
      "shellFish": FishFarmingComponent.CreateFormGroup(fb),
      "turtle": CrocodileFarmingComponent.CreateFormGroup(fb),
      "reddish": FishFarmingComponent.CreateFormGroup(fb),
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
