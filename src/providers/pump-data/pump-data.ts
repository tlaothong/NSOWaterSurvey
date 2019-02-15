import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { surfacePumpTypeData, surfacePumpType } from '../../models/SurfacePumpTypeData';
import { surfaceWattHpData, surfaceWattHp } from '../../models/SurfaceWattHpData';
import { surfaceSuctionPipeData, surfaceSuctionPipe } from '../../models/SurfaceSuctionPipeData';
import { surfacePipeLine, surfacePipeLineData } from '../../models/SurfacePipeLineData';
import { GroundWaterPumpType, groundWaterPumpTypeData } from '../../models/GroundPumpTypeData';
import { GroundWaterWattHp, groundWaterWattHpData } from '../../models/GroundWattHpData';
import { groundWaterSuctionPipeData, GroundWaterSuctionPipe } from '../../models/GroundSuctionPipeData';
import { GroundWaterPipeLine, groundWaterPipeLineData } from '../../models/GroundPipeLineData';

/*
  Generated class for the PumpDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PumpDataProvider {
  static getPipeLineData(codeSuction: string): any {
    throw new Error("Method not implemented.");
  }
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

  static getGroundWaterPumpTypeData(code: string): GroundWaterPumpType[] {
    return groundWaterPumpTypeData.filter(it => it.codePowerSource == code);
  }

  static getGroundWaterWattHpData(code: string): GroundWaterWattHp[] {
    return groundWaterWattHpData.filter(it => it.codePumpType == code);
  }

  static getGroundWaterSuctionPipeData(code: string): GroundWaterSuctionPipe[] {
    return groundWaterSuctionPipeData.filter(it => it.codeWattHp == code);
  }

  static getGroundWaterPipeLineData(code: string): GroundWaterPipeLine[] {
    return groundWaterPipeLineData.filter(it => it.codeSuction == code);
  }


  constructor(public http: HttpClient) {
    console.log('Hello PumpDataProvider Provider');
  }
}