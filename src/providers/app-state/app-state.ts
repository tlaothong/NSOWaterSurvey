import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppStateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  *** This class will hold the Global States of the Application ***
*/
@Injectable()
export class AppStateProvider {

  constructor() {
    console.log('Hello AppStateProvider Provider');
  }

  public userId: string;
  public eaCode: string;
  public buildingId: string;

}
