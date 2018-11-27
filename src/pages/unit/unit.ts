import { UnitButtonComponent } from './../../components/unit-button/unit-button';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { getRecieveDataFromBuilding } from '../../states/building';

@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage {

  public f: FormGroup;
  private submitRequested: boolean;

  @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];
  // private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);
  constructor(public navCtrl: NavController, public navParams: NavParams, private storeBuild: Store<BuildingState>, public fb: FormBuilder) {
    this.f = this.fb.group({
      'unitCount': [3, Validators.required],
      'units': this.fb.array([]),
    });
    
    this.setupUnitsCountChanges();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitPage');
    // this.GetDataFromBuilding$.subscribe(data => this.f.get('unitCount').setValue(data));
  }
  ionViewDidEnter() {
    console.log("enter");

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.unitButton.forEach(it => it.submitRequest());
  }

  private setupUnitsCountChanges() {
    const componentFormArray: string = "units";
    const componentCount: string = "unitCount";

    var onComponentCountChanges = () => {
      var units = (this.f.get(componentFormArray) as FormArray).controls || [];
      var unitCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      unitCount = Math.max(0, unitCount);

      for (let i = 0; i < unitCount; i++) {
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
