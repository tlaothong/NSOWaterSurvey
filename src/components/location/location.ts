import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { provinceData } from '../../models/ProvinceData';
import { LocationDataProvider } from '../../providers/location-data/location-data';
import { districtData } from '../../models/DistrictData';
import { subDistrictData } from '../../models/SubDistrictData';

@Component({
  selector: 'location',
  templateUrl: 'location.html'
})

export class LocationComponent implements ISubmitRequestable {

  public provinceData = provinceData;
  public province: any;
  public district: any;
  public subDistrict: any
  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;
  public text: string;

  constructor(public fb: FormBuilder) {
    this.text = 'Hello World';
    // this.getprovince();
    this.FormItem = LocationComponent.CreateFormGroup(this.fb);
  }

  ngOnInit() {
    if (this.FormItem.get('province').value != null) {
      this.onChange(this.FormItem.get('province').value);
      if(this.FormItem.get('district').value != null){
        this.onChange1(this.FormItem.get('district').value);
      }
    }
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
    return ctrl.invalid && (ctrl.dirty || this.submitRequested)
  }

  submitRequest() {
    this.submitRequested = true;
  }

  onChange(name: any) {
    let code = provinceData.find(it => it.name == name)
    this.district = LocationDataProvider.getDistric(code.codeProvince);
    console.log(code);
    console.log(code.codeProvince);
  }

  onChange1(name: any) {
    var code = districtData.find(it => it.name == name)
    this.subDistrict = LocationDataProvider.getSubdistric(code.codeDistrict);
  }

}