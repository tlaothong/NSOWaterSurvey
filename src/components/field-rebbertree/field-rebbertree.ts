import { Component, Input, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationComponent } from '../location/location';
import { FieldAreaComponent } from '../field-area/field-area';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';

@Component({
  selector: 'field-rebbertree',
  templateUrl: 'field-rebbertree.html'
})

export class FieldRebbertreeComponent implements ISubmitRequestable {
  @Input() public FormItem: FormGroup;
  @Input('no') public text: string;
  private submitRequested: boolean;
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];

  constructor(public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.FormItem = FieldRebbertreeComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'irrigationField': ['', Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    })
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.fieldArea.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
    this.dispatchWaterSource();
  }

  private dispatchWaterSource() {
      this.store.dispatch(new SetCheckWaterPlumbing(this.FormItem.get('waterSources.plumbing').value));
      this.store.dispatch(new SetCheckWaterRiver(this.FormItem.get('waterSources.river').value));
      this.store.dispatch(new SetCheckWaterIrrigation(this.FormItem.get('waterSources.irrigation').value));
      this.store.dispatch(new SetCheckWaterRain(this.FormItem.get('waterSources.rain').value));
      this.store.dispatch(new SetCheckWaterBuying(this.FormItem.get('waterSources.buying').value));
    console.log("dispatch rubber can work");
  }
}
