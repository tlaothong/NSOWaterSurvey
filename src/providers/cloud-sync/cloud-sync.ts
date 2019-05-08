import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EA, Building, HouseHoldUnit } from '../../models/mobile/MobileModels';
import { WebStateProvider } from '../web-state/web-state';

@Injectable()
export class CloudSyncProvider {

  // private readonly baseUrl: string = "https://watersurveyapi.azurewebsites.net/api/";
  private readonly baseUrl: string = "https://nso-manage-dev.azurewebsites.net/api/"; // dev url

  constructor(private http: HttpClient, private webState: WebStateProvider) {
    console.log('Create CloudSyncProvider Provider');
  }

  public downloadCloudUpdate(userId: string): Observable<EA[]> {
    return <Observable<any>>(this.http.get(this.baseUrl + 'MobileConnect/' + userId));
  }

  public getUploadToCloud(userId: string): Observable<DeviceToCloudInfo> {
    return Observable.of(null);
  }

  public async getWebState(sessionId: string) {
    let getState = this.http.get(this.baseUrl + 'WebConnect/' + sessionId).toPromise();
    let wstate: any = await getState;
    if (wstate) {
      this.webState.sessionId = sessionId;
      this.webState.userId = wstate.userId;
      this.webState.eaCode = wstate.eaCode;
      this.webState.buildingId = wstate.buildingId;
      this.webState.baseUri = wstate.baseUri;
      this.webState.cmp = wstate.cmp;
      this.webState.units = wstate.units;
      this.webState.ea = wstate.ea;
    }

    let result: any = await this.http.get(this.webState.baseUri + this.webState.buildingId + ".txt" + this.webState.cmp).toPromise();
    let bld:Building = result;
    return Promise.resolve(bld);
  }

  public async getWebUnit(id: string) {
    let uri = this.webState.baseUri + id + '.txt' + this.webState.cmp;
    let result:any = await this.http.get(uri).toPromise();
    let unit: HouseHoldUnit = result;
    return unit;
  }

  /*************************
   * ของเก่า
   *************************/

  LoadWorkByIdEASuccess(payload: any): any {
    throw new Error("Method not implemented.");
  }

  public setHouseHold(data: any): Observable<any> {
    return this.http.post('http://nsovars.azurewebsites.net/api/Demo/CreateUnit', data);
  }

  public loadHouseHoldSampleTestData(id: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetdataOfUnit/' + id);
  }

  public loadCommunitySampleTestData(): Observable<any> {
    return this.http.get('https://nsovars.azurewebsites.net/api/survey/community');
  }

  public loadBuildingSampleTestData(): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/survey/building');
  }

  public loadUserFromQR(code: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetUserByQRCode/' + code);
  }

  public loadUserFromId(idUser: string): Observable<any> {
    console.log(idUser + ", LOADING USER...");
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetUserByID/' + idUser);
  }

  public setNewUserPassword(data: any): Observable<any> {
    return this.http.post('http://nsovars.azurewebsites.net/api/Demo/SetPasswordUser/', data);
  }

  public loadAllWorkEA(obj: any): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetAllWorkByUserID/' + obj.idUser);
  }

  public loadCountOfWorkEA(obj: any): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetCountWorkByIDUser/' + obj.idUser);
  }

  public loadWorkEAbyIdEA(idEA: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetWorkByIdEA/' + idEA);
  }

  public loadHomeBuilding(id: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetBuildingByIdEA/' + id);
  }

  public loadCountHomeBuilding(): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetCountBuilding');
  }

  public setHomeBuilding(data: any): Observable<any> {
    return this.http.post('http://nsovars.azurewebsites.net/api/Demo/CreateBuilding', data);
  }

  public deleteHomeBuilding(id: any): Observable<any> {
    return this.http.delete('http://nsovars.azurewebsites.net/api/Demo/RemoveBuilding/' + id);
  }

  public getDataBuilding(id: any): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetBuilding/' + id);
  }

  public getUnitByIdBuilding(Id_BD: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetUnitByIdBuilding/' + Id_BD);
  }

  public getLogin(data: any): Observable<any> {
    return this.http.post('http://nsovars.azurewebsites.net/api/Demo/GetLogin', data);
  }

  public setCommunity(data: any): Observable<any> {
    return this.http.post('http://nsovars.azurewebsites.net/api/Demo/CreateCommunity', data);
  }

  public loadCommunity(id: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetAllCommunityByIdEA/' + id);
  }

  public loadCommunityForEdit(id: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetCommunity/' + id);
  }

  public getUserInfo(username: string): Observable<any> {
    return this.http.get(this.baseUrl + "User/GetUser/" + username);
  }

  public saveUserInfo(userInfo: any): Observable<any> {
    return this.http.post(this.baseUrl + "User/CheckGuidUser", userInfo);
  }
}

export interface DeviceToCloudInfo {
  containerName: string;
  complementary: string;
}