import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { setPassword } from '../../app/models';

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

  public setNewUserPassword(o: any): Observable<any> {
    /*headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    params: HttpParams = new HttpParams()
      .set('_idqr', 'a8445b5d-f846-4084-bd9f-e1b089bed430')
      .set('password', '00000');

    httpOptions = {
      headers: this.headers,
      params: this.params,
      withCredentials: true
    };*/
    return this.http.post('http://nsovars.azurewebsites.net/api/Demo/SetPasswordUser/', o);
  }

}
