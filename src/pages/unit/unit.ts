import { UnitButtonComponent } from './../../components/unit-button/unit-button';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { getRecieveDataFromBuilding, setHomeBuilding } from '../../states/building';
import { HouseHoldState } from '../../states/household/household.reducer';
import { LoadUnitByIdBuilding } from '../../states/household/household.actions';
import { Guid } from 'guid-typescript';

@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage {

  public f: FormGroup;
  @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];
  private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);
  private dataHomeBuilding$ = this.store.select(setHomeBuilding);
  public id_BD: string;
  public units: any;
  public FormItem: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>, public fb: FormBuilder) {
    this.f = this.fb.group({
      'unitCount': [null],
      'units': this.fb.array([]),
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad UnitPage');
    this.GetDataFromBuilding$.subscribe(data => this.f.get('unitCount').setValue(data));
    console.log(this.f.get('unitCount').value);
    this.setupUnitsCountChanges();
    this.dataHomeBuilding$.subscribe(data => this.id_BD = data._id);
    this.store.dispatch(new LoadUnitByIdBuilding(this.id_BD));
    console.log(this.f.get('units').value);

    // if (this.f.get('unitCount').value == 1) {
    //   let fr = this.f.get('units') as FormArray;
    //   console.log(fr.at(0).value);
    //   if (fr.at(0).get('_id').invalid) {
    //     fr.at(0).get('_id').setValue(Guid.create().toString());
    //     fr.at(0).get('buildingId').setValue(this.id_BD);
    //   }
    //   this.navCtrl.push('WaterActivityUnitPage', { FormItem: fr.at(0) });
    // }

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

}
