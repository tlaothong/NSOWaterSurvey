import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs';
import { EA } from '../../states/bootup/bootup.reducer';
import { CloudSyncProvider } from '../cloud-sync/cloud-sync';
import { tap, map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { switchMap } from 'rxjs/operator/switchMap';
import { BuildingInList } from '../../states/building/building.actions';

/*
  Generated class for the DataStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataStoreProvider {

  constructor(private storage: Storage, private cloudSync: CloudSyncProvider) {
    console.log('Hello DataStoreProvider Provider');
  }

  /**
   * Download Cloud to Device update for sync
   */
  public downloadCloudUpdate(userId: string): Observable<EA[]> {
    let x = this.cloudSync.downloadCloudUpdate(userId).retry(3)
      .switchMap(update => Observable.of(this.storage.set('uea' + userId, update))
      .mapTo(update));
    return x;
  }

  /**
   * รายการ EA ทั้งหมดที่ถูก download เรียบร้อยแล้ว
   */
  public listDownloadedEAs(userId: string): Observable<EA[]> {
    return Observable.fromPromise(this.storage.get('uea' + userId));
  }

  /**
   * รายการ EAs ได้ถูก Download แล้วหรือยัง?f
   */
  public hasEasDownloaded(userId: string): Observable<boolean> {
    return Observable.fromPromise(this.storage.get('uea' + userId)).map(it => it != null);
  }

  /*********** */

   /**
   * บันทึกข้อมูล Building 1 อาคาร
   */
  public saveBuilding(dataBuilding: any): Observable<any> {
    console.log(dataBuilding._id);
    console.log("BLD Data: " + JSON.stringify(dataBuilding));
    
    return Observable.fromPromise(this.storage.set(dataBuilding._id, dataBuilding));
  }

  /**
   * บันทึกรายการ Building แบบบันทึกเป็น List
   */
  public saveBuildingList(eaCode: string, buildings: BuildingInList[]) {
    return Observable.fromPromise(this.storage.set('bldlst' + eaCode, buildings));
  }

  /**
   * เรียกรายการ Buildings ที่เก็บไว้เป็น list สำหรับ EA ที่ระบุ
   */
  public listBuildingsForEA(eaCode: string): Observable<BuildingInList[]> {
    return Observable.fromPromise(this.storage.get('bldlst' + eaCode));
  }


  /*********** */

  /**
   * setEaForTest
   */
  public setEaForTest(userId: string): Observable<any> {
    return Observable.fromPromise(this.storage.set('uea' + userId, [{
        code: "11001011000002",
        "Area_Code": "100101",
        "REG": "1",
        "REG_NAME": "กรุงเทพมหานคร",
        "CWT": "10",
        "CWT_NAME": "กรุงเทพมหานคร",
        "AMP": "01",
        "AMP_NAME": "พระนคร",
        "TAM": "01",
        "TAM_NAME": "พระบรมมหาราชวัง",
        "DISTRICT": 1,
        "MUN": "000",
        "MUN_NAME": "กรุงเทพมหานคร",
        "TAO": "",
        "TAO_NAME": "",
        "EA": "002",
        "VIL": "00",
        "VIL_NAME": "",
        "MAP_STATUS": 1,
        "Building": 75,
        "Household": 73,
        "population": 405,
        "Agricultural_HH": 0,
        "ES_BUSI": "93",
        "ES_INDUS": "5",
        "ES_HOTEL": "",
        "ES_PV_HOS": "",
        "REMARK": "วัด 1 แห่ง  , สถานที่ราชการ 1 แห่ง ,โรงเรียน 1 แห่ง, มหาวิทยาลัย 1 แห่ง",
    }])).switchMap(_ => this.listDownloadedEAs(userId));
  }
}
