import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EA, upload1, downloadFile } from '../../models/mobile/MobileModels';
import { JsonPipe } from '@angular/common';

@Injectable()
export class CloudSyncProvider {

  // private readonly baseUrl: string = "https://watersurveyapi.azurewebsites.net/api/";
  private readonly baseUrl: string = "https://nso-manage-dev.azurewebsites.net/api/"; // dev url
  // private readonly baseUrl: string = "https://localhost:5001/api/"; // local 
  // private readonly baseUrl: string = "https://nso-manage.azurewebsites.net/api/";
  listOfEAs: EA[] = [];

  constructor(private http: HttpClient) {
    this.listOfEAs.push({ "code": "11001011000001", "Area_Code": "100101", "REG": "1", "REG_NAME": "กรุงเทพมหานคร", "CWT": "10", "CWT_NAME": "กรุงเทพมหานคร", "AMP": "01", "AMP_NAME": "พระนคร", "TAM": "01", "TAM_NAME": "พระบรมมหาราชวัง", "DISTRICT": 1, "MUN": "000", "MUN_NAME": "กรุงเทพมหานคร", "TAO": "", "TAO_NAME": "", "EA": "001", "VIL": "00", "VIL_NAME": "", "MAP_STATUS": 1, "Building": 135, "Household": 83, "population": 242, "Agricultural_HH": 0, "ES_BUSI": "237", "ES_INDUS": "8", "ES_HOTEL": "", "ES_PV_HOS": "", "REMARK": "มหาวิทยาลัย 1 แห่ง,  โรงเรียน 2 แห่ง, ตึก 3 ชั้น 14 ห้อง", "Center": { "coordinates": [100.49042950774567, 13.758569035411838] } },
    );
    console.log('Create CloudSyncProvider Provider');
  }

  public pilot(): Observable<EA[]> {
    return Observable.of(this.listOfEAs);
  }

  public downloadCloudUpdate(userId: string): Observable<EA[]> {
    return <Observable<any>>(this.http.get(this.baseUrl + 'MobileConnect/' + userId));
  }
  //1 get session
  public getUploadToCloud(userId: string): Observable<DeviceToCloudInfo> {
    return <Observable<any>>this.http.post(this.baseUrl + 'MobileConnect/up2cloud/' + userId, {});
  }

  //1  get session
  public uploadTocloud1(userId: string, deviceID: any) {
    return this.http.post<upload1>(this.baseUrl + 'mobileconnect/up2cloud/' + userId, { "deviceID": deviceID });
  }
  public uploadcloud2(sessionId: string) {
    console.log(this.baseUrl + 'mobileconnect/up2cloud/' + sessionId);
    return this.http.put(this.baseUrl + 'mobileconnect/up2cloud/' + sessionId, {});
  }
  //3
  public getUploadToCloud2(ssId: string, file: number): Observable<isSuccess> {
    console.log(ssId, file);
    return <Observable<any>>this.http.get(this.baseUrl + 'MobileConnect/up2cloud/' + ssId + '/' + file);
  }

  public downloadFromCloud1(sessionId: string): Observable<any> {
    return this.http.post<downloadFile>(this.baseUrl + 'mobileconnect/downfromcloud/' + sessionId, {});
  }

  public downloadFromCloud2(sessionId: string): Observable<any> {
    return this.http.put(this.baseUrl + 'mobileconnect/downfromcloud/' + sessionId, {});
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
  sessionId: string;
}

export interface isSuccess {
  isCompleted: boolean,
  errorStatus: string
}