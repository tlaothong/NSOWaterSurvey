import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { LocationData } from '../../providers/location-data/location-data';

@Component({
  selector: 'location',
  templateUrl: 'location.html'
})

export class LocationComponent implements ISubmitRequestable {

  public locationData = LocationData;
  public province: any;
  public district: any;
  public subDistrict: any;
  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;
  public text: string;

  constructor(public fb: FormBuilder) {
    this.text = 'Hello World';
    this.getprovince();
    this.FormItem = LocationComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'province': [null, Validators.required],
      'district': [null, Validators.required],
      'subDistrict': [null, Validators.required]
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested)
  }

  submitRequest() {
    this.submitRequested = true;
  }

  getprovince() {
    this.province = Array.from(new Set(this.locationData.map(it => it.province)));
  }

  getdistrict(item){
    var dis = this.locationData.find
    this.district = Array.from(new Set(this.locationData.map(it => it.province)));
  }
}