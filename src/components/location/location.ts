import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, Directive } from '@angular/core';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { provinceData } from '../../models/ProvinceData';
import { LocationDataProvider } from '../../providers/location-data/location-data';
import { districtData, District } from '../../models/DistrictData';
import { subDistrictData } from '../../models/SubDistrictData';

@Component({
  selector: 'location',
  templateUrl: 'location.html'
})

export class LocationComponent implements ISubmitRequestable {

  public provinceData: any;
  public province: any;
  public district: any;
  public subDistrict: any
  @Input() public FormItem: FormGroup;
  @Input() public checkIsPool: boolean;
  private submitRequested: boolean;
  public text: string;

  constructor(public fb: FormBuilder) {
    this.text = 'Hello World';
    this.checkIsPool = false;
    // this.getprovince();
    this.FormItem = LocationComponent.CreateFormGroup(this.fb);
  }

  ngOnInit() {
    if (this.checkIsPool && this.FormItem.get('province').value == 0) {
      this.FormItem.reset();
    }
    this.provinceData = provinceData.sort((a, b) => a.name.localeCompare(b.name))
    if (this.FormItem.get('province').value != 0) {
      this.onChange(this.FormItem.get('province').value);
      if (this.FormItem.get('district').value != 0) {
        this.onChange1(this.FormItem.get('district').value);
      }
    }
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'province': [0, Validators.required],
      'district': [0, Validators.required],
      'subDistrict': [0, Validators.required]
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested)
  }

  submitRequest() {
    this.submitRequested = true;
  }

  onChange(name: any) {
    let code = provinceData.find(it => it.name == name)
    let order = LocationDataProvider.getDistric(code.codeProvince);
    this.district = order.sort((a, b) => a.name.localeCompare(b.name))
    console.log(code);
    console.log(code.codeProvince);
  }

  onChange1(name: any) {
    var code = districtData.find(it => it.name == name)
    let order = LocationDataProvider.getSubdistric(code.codeDistrict);
    this.subDistrict = order.sort((a, b) => a.name.localeCompare(b.name))
  }

}