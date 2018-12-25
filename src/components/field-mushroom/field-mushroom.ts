import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationComponent } from '../location/location';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetCheckWaterPlumbing, SetCheckWaterRiver, SetCheckWaterIrrigation, SetCheckWaterRain, SetCheckWaterBuying } from '../../states/household/household.actions';

@Component({
  selector: 'field-mushroom',
  templateUrl: 'field-mushroom.html'
})
export class FieldMushroomComponent {

  @Input() public FormItem: FormGroup;
  @Input('no') public no: string;
  private submitRequested: boolean;
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  @ViewChildren(WaterSources9Component) private waterSources9: WaterSources9Component[];

  constructor(public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.FormItem = FieldMushroomComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': LocationComponent.CreateFormGroup(fb),
      'areaSqM': [null, Validators.required],
      'irrigationField': [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
    });
  }

  submitRequest() {
    this.submitRequested = true;
    this.locationT.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it => it.submitRequest());
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
    console.log("dispatch mushroom can work");

  }
  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
