import { Input, Component, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { combineLatest } from 'rxjs/operators';
import { FieldAreaComponent } from '../field-area/field-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { FieldRiceHarvestComponent } from '../field-rice-harvest/field-rice-harvest';
import { LocationComponent } from '../location/location';
import { WaterSources8AComponent } from '../water-sources8-a/water-sources8-a';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';

@Component({
  selector: 'field-farming',
  templateUrl: 'field-farming.html'
})

export class FieldFarmingComponent implements ISubmitRequestable {
  @Input() public FormItem: FormGroup;
  @Input('no') public fieldNo: string;

  @ViewChildren(FieldAreaComponent) private fieldAreas: FieldAreaComponent[];
  @ViewChildren(FieldRiceHarvestComponent) private riceHarvests: FieldRiceHarvestComponent[];
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(WaterSources8AComponent) private waterSources8A: WaterSources8AComponent[];
  private submitRequested: boolean;

  private area: number;
  private areaUsed: number;

  constructor(public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.FormItem = FieldFarmingComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'plantingCount': [null, [Validators.required, Validators.min(1), Validators.max(4)]],
      'plantingArea': [null, Validators.required],
      'areaUsed': fb.array([]),
      'harvests': fb.array([]),
      'irrigationField': [null, Validators.required],
      'waterSources': WaterSources8AComponent.CreateFormGroup(fb)
    });
    FieldFarmingComponent.setupPlantingAreaChanges(fb, fg);
    FieldFarmingComponent.setupPlantingCountChanges(fb, fg);
    return fg
  }

  submitRequest() {
    this.submitRequested = true;
    this.fieldAreas.forEach(it => it.submitRequest());
    this.riceHarvests.forEach(it => it.submitRequest());
    this.locationT.forEach(it => it.submitRequest());
    this.waterSources8A.forEach(it => it.submitRequest());
    this.dispatchWaterSource();
  }

  private dispatchWaterSource() {
    if (this.FormItem.get('waterSources.plumbing').value) {
      this.store.dispatch(new SetCheckWaterPlumbing(this.FormItem.get('waterSources.plumbing').value));
    }
    if (this.FormItem.get('waterSources.river').value) {
      this.store.dispatch(new SetCheckWaterRiver(this.FormItem.get('waterSources.river').value));
    }
    if (this.FormItem.get('waterSources.irrigation').value) {
      this.store.dispatch(new SetCheckWaterIrrigation(this.FormItem.get('waterSources.irrigation').value));
    }
    if (this.FormItem.get('waterSources.rain').value) {
      this.store.dispatch(new SetCheckWaterRain(this.FormItem.get('waterSources.rain').value));
    }
    if (this.FormItem.get('waterSources.buying').value) {
      this.store.dispatch(new SetCheckWaterBuying(this.FormItem.get('waterSources.buying').value));
    }
    console.log("dispatch rice can work");
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public isCheckArea(): boolean {
    this.area = Number(this.FormItem.get('area.rai').value) * 400
      + Number(this.FormItem.get('area.ngan').value) * 100
      + Number(this.FormItem.get('area.sqWa').value);

    let fgar = this.FormItem.get('areaUsed') as FormArray;
    let sumArea = 0;
    switch (this.FormItem.get('plantingArea').value) {
      case "2":
        sumArea += Number(fgar.at(0).get('rai').value) * 400
          + Number(fgar.at(0).get('ngan').value) * 100
          + Number(fgar.at(0).get('sqWa').value)
        break;
      case "3":
        for (let i = 0; i < this.FormItem.get('plantingCount').value; i++) {
          sumArea += Number(fgar.at(i).get('rai').value) * 400
            + Number(fgar.at(i).get('ngan').value) * 100
            + Number(fgar.at(i).get('sqWa').value)
        }
        break;
      default:
        break;
    }
    this.areaUsed = sumArea;
    return this.areaUsed > this.area;
  }

  private static setupPlantingAreaChanges(fb: FormBuilder, fg: FormGroup) {
    const areaUsed: string = "areaUsed";
    const areaCount: string = "plantingCount";
    const areaOption: string = "plantingArea";

    var onPlantingAreaChanges = () => {
      var fields = (fg.get(areaUsed) as FormArray).controls || [];
      var fieldCount = fg.get(areaCount).value || 0;
      var farr = fb.array([]);

      fieldCount = Math.max(1, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = FieldAreaComponent.CreateFormGroup(fb);
        }

        farr.push(ctrl);
      }
      fg.setControl(areaUsed, farr);
    };

    const areaCountCtrl = fg.get(areaCount);
    fg.get(areaOption).valueChanges.pipe(
      combineLatest(areaCountCtrl.valueChanges)
    ).subscribe(it => onPlantingAreaChanges());

    onPlantingAreaChanges();
  }

  private static setupPlantingCountChanges(fb: FormBuilder, fg: FormGroup) {
    const componentFormArray: string = "harvests";
    const componentCount: string = "plantingCount";

    var onComponentCountChanges = () => {
      var fields = (fg.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = fg.get(componentCount).value || 0;
      var farr = fb.array([]);

      fieldCount = Math.max(1, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = FieldRiceHarvestComponent.CreateFormGroup(fb);
        }

        farr.push(ctrl);
      }
      fg.setControl(componentFormArray, farr);
    };

    fg.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
