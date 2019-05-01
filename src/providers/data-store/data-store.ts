import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs';
import { CloudSyncProvider } from '../cloud-sync/cloud-sync';
import { BuildingInList, Building, HouseHoldUnit, UnitInList, EA, CommunityInList } from '../../models/mobile/MobileModels';

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

  public saveNotiUid(notiIds): Promise<{}> {
    return this.storage.set("notiOneIds", notiIds);
  }

  public getNotiUid(): Observable<PushUserId> {
    return Observable.fromPromise(this.storage.get("notiOneIds"));
  }

  public saveNotiAppMsg(kind: string, title: string, msg: string, actionId: string): Promise<{}> {
    return this.storage.set("notiAppMsg", { kind: kind, title: title, msg: msg, actionId: actionId });
  }

  public getNotiAppMsg(): Observable<MsgNotiInfo> {
    return Observable.fromPromise(this.storage.get("notiAppMsg"));
  }
  /*********** */

  /**
  * ชั่วคราว ๆ
  */
  public saveUser(userId: string, password: string, token: string) {
    this.storage.set('ulogin' + userId, this.hashCode(password + userId));
    this.storage.set('tokenlogin' + userId, token);
  }

  public async validateUser(userId: string, password: string) {
    var pwdHash = this.hashCode(password + userId)
    let pwd = await this.storage.get('ulogin' + userId);
    return pwd == pwdHash;
  }

  private hashCode(str: string) {
    var hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
      hash = hash & hash;
    }
    return hash;
  }

  /*********** */

  /**
  * บันทึกข้อมูล Building 1 อาคาร
  */
  public saveBuilding(dataBuilding: Building): Observable<any> {
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

  public getBuilding(buildingId: string): Observable<Building> {
    return Observable.fromPromise(this.storage.get(buildingId));
  }

  /**
   * เรียกรายการ house hold ที่อยู่ใน building ที่ระบุ
   */
  public listHouseHoldInBuilding(buildingId: string): Observable<UnitInList[]> {
    return Observable.fromPromise(this.storage.get('unt4' + buildingId)).map((lst: UnitInList[]) => lst ? lst : []);
  }

  public saveHouseHoldInBuildingList(buildingId: string, unitsInBuilding: UnitInList[]) {
    return Observable.fromPromise(this.storage.set('unt4' + buildingId, unitsInBuilding));
  }

  /**
   * getHouseHold
   */
  public getHouseHold(houseHoldId: string): Observable<HouseHoldUnit> {
    return Observable.fromPromise(this.storage.get(houseHoldId));
  }

  /**
   * บันทึกรายการ household 1 unit
   */
  public saveHouseHold(household: HouseHoldUnit): Observable<any> {
    return Observable.fromPromise(this.storage.set(household._id, household));
  }

  /**
    * บันทึกสถานะการสำรวจของ User ใน EA นั้น
    */
  public saveUserEAStatus(eaCode: string, userId: string, status: string): Observable<any> {
    return Observable.fromPromise(this.storage.set("eastate" + eaCode + userId, status));
  }

  /**
    * บันทึกนามสกุล
    */
  public saveLastName(userId: string, lastname: string[]): Observable<any> {
    return Observable.fromPromise(this.storage.set("user" + userId, lastname));
  }

  /**
   * เรียกนามสกุลที่บันทึกไว้
   */
  public loadLastName(userId: string): Observable<any> {
    return Observable.fromPromise(this.storage.get("user" + userId));
  }

  /**
     * บันทึก Community 1 Community
     */
  public saveCommunity(dataCommunity: any): Observable<any> {
    return Observable.fromPromise(this.storage.set(dataCommunity._id, dataCommunity));
  }

  /**
    * บันทึก Community แบบ เป็น List
    */
  public saveCommunityList(eaCode: string, community: CommunityInList[]): Observable<any> {
    return Observable.fromPromise(this.storage.set("comlst" + eaCode, community));
  }

  /**
    * เรียกข้อมูล Community
    */
  public loadCommunity(communityId: string): Observable<any> {
    return Observable.fromPromise(this.storage.get(communityId));
  }

  /**
    * เรียกข้อมูล Community แบบ เป็น List
    */
  public loadCommunityList(eaCode: string): Observable<any> {
    return Observable.fromPromise(this.storage.get("comlst" + eaCode));
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


export interface PushUserId {
  userId: string;
  pushToken: string;
}

export interface MsgNotiInfo {
  kind: string;
  title: string;
  msg: string;
  actionId: string;
}
