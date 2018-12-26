import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { District, districtData } from '../../models/DistrictData';
import { SubDistrict, subDistrictData } from '../../models/SubDistrictData';

/*
  Generated class for the LocationDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationDataProvider {

  static getDistric(code: number): District[] {
    return districtData.filter(it => it.codeProvince == code);
  }

  static getSubdistric(code: number): SubDistrict[] {
    return subDistrictData.filter(it => it.codeDistrict == code);
  }

  constructor(public http: HttpClient) {
    console.log('Hello LocationDataProvider Provider');
  }



}