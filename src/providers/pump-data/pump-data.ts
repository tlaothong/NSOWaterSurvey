import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { surfacePumpTypeData, surfacePumpType } from '../../models/SurfacePumpTypeData';
import { surfaceWattHpData, surfaceWattHp } from '../../models/SurfaceWattHpData';
import { surfaceSuctionPipeData, surfaceSuctionPipe } from '../../models/SurfaceSuctionPipeData';
import { surfacePipeLine, surfacePipeLineData } from '../../models/SurfacePipeLineData';

/*
  Generated class for the PumpDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PumpDataProvider {
  static getSurfacePumpTypeData(code: string): surfacePumpType[] {
    return surfacePumpTypeData.filter(it => it.codePowerSource == code);
  }

  static getSurfaceWattHpData(code: string): surfaceWattHp[] {
    return surfaceWattHpData.filter(it => it.codePumpType == code);
  }

  static getSurfaceSuctionPipeData(code: string): surfaceSuctionPipe[] {
    return surfaceSuctionPipeData.filter(it => it.codeWattHp == code);
  }

  static getSurfacePipeLineData(code: string): surfacePipeLine[] {
    return surfacePipeLineData.filter(it => it.codeSuctionPipe == code);
  }

  constructor(public http: HttpClient) {
    console.log('Hello PumpDataProvider Provider');
  }
}