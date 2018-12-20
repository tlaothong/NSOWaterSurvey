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

  public loadHousHoldSampleTestData(): Observable<any> {
    return this.http.get('https://nsovars.azurewebsites.net/api/survey');
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

  public setNewUserPassword(data: any): Observable<any> {
    return this.http.post('http://nsovars.azurewebsites.net/api/Demo/SetPasswordUser/', data);
  }

  public loadAllWorkEA(obj: any): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetAllWorkByIDUser/' + obj.idUser);
  }

  public loadCountOfWorkEA(obj: any): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetCountWorkByIDUser/' + obj.idUser);
  }

  public loadWorkEAbyIdEA(idEA: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetWorkByIdEA/' + idEA);
  }

  public loadHomeBuilding(): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetAllBuildingByIdUser');
  }

  public loadCountHomeBuilding(): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetCountBuildingByIdUser');
  }

  
}
