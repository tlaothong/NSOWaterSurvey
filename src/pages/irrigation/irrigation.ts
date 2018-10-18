import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PumpComponent } from '../../components/pump/pump';

/**
 * Generated class for the IrrigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-irrigation',
  templateUrl: 'irrigation.html',
})
export class IrrigationPage {

  private submitRequested: boolean;
  f: FormGroup;

  @ViewChildren(PumpComponent) private pump: PumpComponent[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.f = this.fb.group({
      'hasCubicMeterPerMonth': ['', Validators.required],
      'cubicMeterPerMonth': ['', Validators.required],
      'hasPump': ['', Validators.required],
      'pumpCount': ['', Validators.required],
      "pumps":  this.fb.array([]),
    });

    this.setupPumpCountChanges()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IrrigationPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.pump.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupPumpCountChanges() {
    const componentFormArray: string = "pumps";
    const componentCount: string = "pumpCount";

    var onComponentCountChanges = () => {
      var pumps = (this.f.get(componentFormArray) as FormArray).controls || [];
      var pumpCount = this.f.get(componentCount).value || 0;
      var pump = this.fb.array([]);

      pumpCount = Math.max(0, pumpCount);

      for (let i = 0; i < pumpCount; i++) {
        var ctrl = null;
        if (i < pumps.length) {
          const fld = pumps[i];
          ctrl = fld;
        } else {
          ctrl = PumpComponent.CreateFormGroup(this.fb);
        }

        pump.push(ctrl);
      }
      this.f.setControl(componentFormArray, pump);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
