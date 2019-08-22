import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EA, EAwStat } from '../../models/mobile/MobileModels';

/*
  Generated class for the WebStateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebStateProvider {

  constructor() {
    console.log('Hello WebStateProvider Provider');
  }

  public sessionId: string;
  public userId: string;
  public eaCode: string;
  public buildingId: string;
  public baseUri: string;
  public cmp: string;
  public units: string[];
  public ea: EAwStat;

}
