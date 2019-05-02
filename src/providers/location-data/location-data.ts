import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { District, districtData } from '../../models/DistrictData';
import { SubDistrict, subDistrictData } from '../../models/SubDistrictData';

@Injectable()
export class LocationDataProvider {

  static getDistric(code: string): District[] {
    return districtData.filter(it => it.codeProvince == code);
  }

  static getSubdistric(code: string): SubDistrict[] {
    return subDistrictData.filter(it => it.codeDistrict == code);
  }

  constructor(public http: HttpClient) {
    console.log('Hello LocationDataProvider Provider');
  }

}