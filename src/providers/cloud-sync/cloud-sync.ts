import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CloudSyncProvider {
  LoadWorkByIdEASuccess(payload: any): any {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) {
    console.log('Create CloudSyncProvider Provider');
  }

  public loadHousHoldSampleTestData(data: any): Observable<any> {
    return this.http.post('http://nsovars.azurewebsites.net/api/Demo/CreateUnit',data);
  }

  public getDataOfUnit(id: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net//api/Demo/GetdataOfUnit/' + id);
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
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetAllCommunityByIdEA/'+ id);
  }

  public loadCommunityForEdit(id: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetCommunity/'+ id);
  }

}
