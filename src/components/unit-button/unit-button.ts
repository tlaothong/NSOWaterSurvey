import { UnitButtonComponent } from './../../components/unit-button/unit-button';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage {

  public class: string;
  public f: FormGroup;
  private submitRequested: boolean;

  @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      'amount': [9],
      'units': this.fb.array([]),
    });

    this.setupUnitsCountChanges();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter UnitPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.unitButton.forEach(it => it.submitRequest());
  }

  private setupUnitsCountChanges() {
    const componentFormArray: string = "units";
    const componentCount: string = "amount";

    var onComponentCountChanges = () => {
      var units = (this.f.get(componentFormArray) as FormArray).controls || [];
      var amount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      amount = Math.max(0, amount);

      for (let i = 0; i < amount; i++) {
        var ctrl = null;
        if (i < units.length) {
          const fld = units[i];
          ctrl = fld;
        } else {
          ctrl = UnitButtonComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
