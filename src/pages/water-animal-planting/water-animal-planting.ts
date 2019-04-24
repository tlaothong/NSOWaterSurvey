import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CrocodileFarmingComponent } from '../../components/crocodile-farming/crocodile-farming';
import { FrogFarmingComponent } from '../../components/frog-farming/frog-farming';
import { FishFarmingComponent } from '../../components/fish-farming/fish-farming';
import { SetSelectorIndex, SaveHouseHold } from '../../states/household/household.actions';
import { HouseHoldState } from '../../states/household/household.reducer';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { getHouseHoldSample } from '../../states/household';
import { Component, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-water-animal-planting',
  templateUrl: 'water-animal-planting.html',
})
export class WaterAnimalPlantingPage {

  @ViewChildren(FishFarmingComponent) private fishFarming: FishFarmingComponent[];
  @ViewChildren(FrogFarmingComponent) private frogFarming: FrogFarmingComponent[];
  @ViewChildren(CrocodileFarmingComponent) private crocodileFarming: CrocodileFarmingComponent[];
  public f: FormGroup;
  public isAnimal: boolean = true;
  // private formDataUnit$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture));
  private formData$ = this.store.select(getHouseHoldSample);
  private submitRequested: boolean;
  private frontNum: any;
  private backNum: any;
  private isCheckWarningBox: boolean;

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, public fb: FormBuilder, private appState: AppStateProvider) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'isFish': [false, Validators.required],
      'fish': FishFarmingComponent.CreateFormGroup(fb),
      'isShrimp': [false, Validators.required],
      'shrimp': FishFarmingComponent.CreateFormGroup(fb),
      'isFrog': [false, Validators.required],
      'frog': FrogFarmingComponent.CreateFormGroup(fb),
      'isCrocodile': [false, Validators.required],
      'crocodile': CrocodileFarmingComponent.CreateFormGroup(fb),
      'isSnappingTurtle': [false, Validators.required],
      'snappingTurtle': CrocodileFarmingComponent.CreateFormGroup(fb),
      'isCrab': [false, Validators.required],
      'crab': FishFarmingComponent.CreateFormGroup(fb),
      'isShellFish': [false, Validators.required],
      'shellFish': FishFarmingComponent.CreateFormGroup(fb),
      'isTurtle': [false, Validators.required],
      'turtle': CrocodileFarmingComponent.CreateFormGroup(fb),
      'isReddish': [false, Validators.required],
      'reddish': FishFarmingComponent.CreateFormGroup(fb),
    }, {
        validator: WaterAnimalPlantingPage.checkAnyOrOther()
      });
  }

  ionViewDidLoad() {
    
    // this.formDataUnit$.subscribe(data => {
    //   if (data != null) {
    //     this.f.patchValue(data.agriculture.aquaticAnimals)
    //     this.formData = data;
    //   }
    // })
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fishFarming.forEach(it => it.submitRequest());
    this.frogFarming.forEach(it => it.submitRequest());
    this.crocodileFarming.forEach(it => it.submitRequest());
    // this.formData.agriculture.aquaticAnimals = this.f.value;
    this.isCheckWarningBox = (this.f.get('doing').value == false) || ((!this.isValid('anycheck')) && this.checkValid());
    if ((this.f.get('doing').value == false) || ((!this.isValid('anycheck')) && this.checkValid())) {
      this.arrayIsCheckMethod();
      // this.store.dispatch(new SetHouseHold(this.formData));
      // this.storage.set('unit', this.formData)

      // let id = this.formData._id
      // this.storage.set(id, this.formData)
      // this.local.updateListUnit(this.formData.buildingId,this.formData)

      let agriculture = {
        ...this.appState.houseHoldUnit.agriculture,
        aquaticAnimals: this.f.value,
      }
      let houseHold = {
        ...this.appState.houseHoldUnit,
        agriculture: agriculture,
      };
      this.store.dispatch(new SaveHouseHold(houseHold));

      this.navCtrl.popTo("CheckListPage");
    }
  }

  checkValid(): boolean {
    let fish = false;
    let shrimp = false;
    let frog = false;
    let crocodile = false;
    let snappingTurtle = false;
    let crab = false;
    let shellFish = false;
    let turtle = false;
    let reddish = false;

    if (this.f.get('isFish').value) {
      fish = this.f.get('fish').valid;
    } else {
      fish = true;
    }
    if (this.f.get('isShrimp').value) {
      shrimp = this.f.get('shrimp').valid;
    } else {
      shrimp = true;
    }
    if (this.f.get('isFrog').value) {
      frog = this.f.get('frog').valid
    } else {
      frog = true;
    }
    if (this.f.get('isCrocodile').value) {
      crocodile = this.f.get('crocodile').valid;
    } else {
      crocodile = true;
    }
    if (this.f.get('isSnappingTurtle').value) {
      snappingTurtle = this.f.get('snappingTurtle').valid;
    } else {
      snappingTurtle = true;
    }
    if (this.f.get('isCrab').value) {
      crab = this.f.get('crab').valid;
    } else {
      crab = true;
    }
    if (this.f.get('isShellFish').value) {
      shellFish = this.f.get('shellFish').valid;
    } else {
      shellFish = true;
    }
    if (this.f.get('isTurtle').value) {
      turtle = this.f.get('turtle').valid;
    } else {
      turtle = true;
    }
    if (this.f.get('isReddish').value) {
      reddish = this.f.get('reddish').valid;
    } else {
      reddish = true;
    }
    return fish && shrimp && frog && crocodile && snappingTurtle && crab && shellFish && turtle && reddish;
  }

  

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(10));
    // let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    // let arrayIsCheck: Array<number>;
    // arrayIsCheck$.subscribe(data => {
    //   if (data != null) {
    //     arrayIsCheck = data;
    //     if (arrayIsCheck.every(it => it != 10)) {
    //       arrayIsCheck.push(10);
    //     }
    //     console.log(arrayIsCheck);
    //   }
    // });
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'anycheck') {
      ctrl = this.f;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const isFish = c.get('isFish');
      const isShrimp = c.get('isShrimp');
      const isFrog = c.get('isFrog');
      const isSnappingTurtle = c.get('isSnappingTurtle');
      const isCrocodile = c.get('isCrocodile');
      const isCrab = c.get('isCrab');
      const isShellFish = c.get('isShellFish');
      const isTurtle = c.get('isTurtle');
      const isReddish = c.get('isReddish');

      if (!isFish.value && !isShrimp.value && !isFrog.value && !isCrocodile.value && !isCrab.value
        && !isShellFish.value && !isTurtle.value && !isReddish.value && !isSnappingTurtle.value) {
        return { 'anycheck': true };
      }
      return null;
    }
  }
  // public static checkAnyOrOther(): ValidatorFn {
  //   return (c: AbstractControl): ValidationErrors | null => {
  //     const isFish = c.get('isFish');
  //     const isShrimp = c.get('isShrimp');
  //     const isFrog = c.get('isFrog');
  //     const isSnappingTurtle = c.get('isSnappingTurtle');
  //     const isCrocodile = c.get('isCrocodile');
  //     const isCrab = c.get('isCrab');
  //     const isShellFish = c.get('isShellFish');
  //     const isTurtle = c.get('isTurtle');
  //     const isReddish = c.get('isReddish');
  //     const fish = c.get('fish');
  //     const shrimp = c.get('shrimp');
  //     const frog = c.get('frog');
  //     const snappingTurtle = c.get('snappingTurtle');
  //     const crocodile = c.get('crocodile');
  //     const crab = c.get('crab');
  //     const shellFish = c.get('shellFish');
  //     const turtle = c.get('turtle');
  //     const reddish = c.get('reddish');

  //     if (!isFish.value && !isShrimp.value && !isFrog.value && !isCrocodile.value && !isCrab.value
  //       && !isShellFish.value && !isTurtle.value && !isReddish.value && !isSnappingTurtle.value) {
  //       return { 'anycheck': true };
  //     }
  //     if (isFish.value && fish.invalid) {
  //       return { 'fish': true };
  //     }
  //     if (isShrimp.value && shrimp.invalid) {
  //       return { 'shrimp': true };
  //     }
  //     if (isFrog.value && frog.invalid) {
  //       return { 'frog': true };
  //     }
  //     if (isSnappingTurtle.value && snappingTurtle.invalid) {
  //       return { 'snappingTurtle': true };
  //     }
  //     if (isCrocodile.value && crocodile.invalid) {
  //       return { 'crocodile': true };
  //     }
  //     if (isCrab.value && crab.invalid) {
  //       return { 'crab': true };
  //     }
  //     if (isShellFish.value && shellFish.invalid) {
  //       return { 'shellFish': true };
  //     }
  //     if (isReddish.value && turtle.invalid) {
  //       return { 'turtle': true };
  //     }
  //     if (isShrimp.value && reddish.invalid) {
  //       return { 'reddish': true };
  //     }
  //     return null;
  //   }
  // }
}
