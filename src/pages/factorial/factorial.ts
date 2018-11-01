import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';
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
  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];


  private submitRequested: boolean;
  FactoryForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.FactoryForm = this.fb.group({
      'name': ['', Validators.required],
      'category': ['', Validators.required],
      'workersCount': ['', Validators.required],
      'heavyMachine': ['', Validators.required],
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
      'hasWasteWaterFromProduction': ['', Validators.required],
      'hasWasteWaterTreatment': ['', Validators.required],
      'wasteWaterReuse': ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactorialPage');
  }
  ionViewDidEnter() {

  }
  public handleSubmit() {
    this.submitRequested = true;
    this.waterSources8B.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.FactoryForm.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
