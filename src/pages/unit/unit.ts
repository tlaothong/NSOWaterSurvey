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

  public f: FormGroup;
  private submitRequested: boolean;

  @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      'amount': [10],
      'units': this.fb.array([]),
    });

    this.setupUnitsCountChanges();
  }

  ionViewDidEnter() {

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

  // public static CreateFormGroup(fb: FormBuilder): FormGroup {
  //   return fb.group({
  //     'subUnit': fb.group({
  //       'roomNumber': [null, Validators.required],
  //       'access': [null, Validators.required],
  //       'hasPlumbing': [null, Validators.required],
  //       'hasPlumbingMeter': [false, Validators.required],
  //       'isPlumbingMeterXWA': [false, Validators.required],
  //       'hasGroundWater': [null, Validators.required],
  //       'hasGroundWaterMeter': [false, Validators.required],
  //     }),
  //     'isHouseHold': [null, Validators.required],
  //     'isAgriculture': [null, Validators.required],
  //     'isFactorial': [null, Validators.required],
  //     'isCommercial': [null, Validators.required],
  //     'comments': fb.group({
  //       'at': [null],
  //       'text': [null],
  //     })
  //   });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitPage');
    this.unitButton.forEach(it => it.ionViewDidLoad());
  }

  // Unit() {
  //   const modal = this.modalCtrl.create("DlgUnitPage", { f: this.f });
  //   modal.onDidDismiss(data => {
  //     if (data) {
  //       var fg = <FormGroup>data;
  //       this.f.setValue(fg.value);
  //     }
  //   });
  //   modal.present();
  // }

  // public isValid(name: string): boolean {
  //   var ctrl = this.f.get(name);
  //   return ctrl.value == null && (ctrl.touched || this.submitRequested);
  // }
}
