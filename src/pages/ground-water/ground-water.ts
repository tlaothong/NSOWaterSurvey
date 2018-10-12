import { Component, ViewChild, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { GroundWaterUsageComponent } from '../../components/ground-water-usage/ground-water-usage';

/**
 * Generated class for the GroundWaterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ground-water',
  templateUrl: 'ground-water.html',
})

export class GroundWaterPage  {

  @ViewChildren(GroundWaterUsageComponent) private groundWaterUsage: GroundWaterUsageComponent[];
  private submitRequested: boolean;
  public f: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      'privateGroundWater': [null, Validators.required],
      'groundWaterCount': [null, Validators.required],
      'useGroundWaterCount': [null, Validators.required],
      'avgUsageWater': this.fb.array([]),
      'publicGroundWater': [null, Validators.required],
      'count': [null, Validators.required],
      'usePerMonth': this.fb.array([]),
    });

    this.setupuseGroundWaterCountChanges();
    this.setupusePublicGroundWaterCountChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroundWaterPage');
  }

  ionViewDidEnter() {

  }
  public handleSubmit() {
    this.submitRequested = true;
    this.groundWaterUsage.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupuseGroundWaterCountChanges() {
    const componentFormArray: string = "avgUsageWater";
    const componentCount: string = "useGroundWaterCount";

    var onComponentCountChanges = () => {
      var avgUsageWater = (this.f.get(componentFormArray) as FormArray).controls || [];
      var useGroundWaterCount = this.f.get(componentCount).value || 0;
      var avg = this.fb.array([]);

      useGroundWaterCount = Math.max(0, useGroundWaterCount);

      for (let i = 0; i < useGroundWaterCount; i++) {
        var ctrl = null;
        if (i < avgUsageWater.length) {
          const fld = avgUsageWater[i];
          ctrl = fld;
        } else {
          ctrl = GroundWaterUsageComponent.CreateFormGroup(this.fb);
        }

        avg.push(ctrl);
      }
      this.f.setControl(componentFormArray, avg);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupusePublicGroundWaterCountChanges() {
    const componentFormArray: string = "usePerMonth";
    const componentCount: string = "count";

    var onComponentCountChanges = () => {
      var usePerMonth = (this.f.get(componentFormArray) as FormArray).controls || [];
      var count = this.f.get(componentCount).value || 0;
      var avg = this.fb.array([]);

      count = Math.max(0, count);

      for (let i = 0; i < count; i++) {
        var ctrl = null;
        if (i < usePerMonth.length) {
          const fld = usePerMonth[i];
          ctrl = fld;
        } else {
          ctrl = GroundWaterUsageComponent.CreateFormGroup(this.fb);
        }

        avg.push(ctrl);
      }
      this.f.setControl(componentFormArray, avg);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
