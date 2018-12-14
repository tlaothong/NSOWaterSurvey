import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CloudSyncProvider {

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

  public loadUserFromQR(id: string): Observable<any> {
    return this.http.get('http://nsovars.azurewebsites.net/api/Demo/GetUserByQRCode/' + id);
  }

  public setNewUserPassword(data: any): Observable<any> {
    return this.http.post('http://nsovars.azurewebsites.net/api/Demo/SetPasswordUser/', data);
  }

  public loadAllWorkEA(id: string): Observable<any> {
    return this.http.get('http://localhost:64184/api/Demo/GetAllWorkByUserID/' + id);
  }

}
