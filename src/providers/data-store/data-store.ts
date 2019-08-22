import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs';
import { CloudSyncProvider } from '../cloud-sync/cloud-sync';
import { BuildingInList, Building, HouseHoldUnit, UnitInList, EA, CommunityInList, EAwStat } from '../../models/mobile/MobileModels';
import { WebStateProvider } from '../web-state/web-state';

/*
  Generated class for the DataStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var CryptoJS;
@Injectable()
export class DataStoreProvider {

  constructor(private storage: Storage, private cloudSync: CloudSyncProvider, private webState: WebStateProvider) {
    console.log('Hello DataStoreProvider Provider');
  }

  /**
   * Download Cloud to Device update for sync
   */
  public downloadCloudUpdate(userId: string): Observable<EA[]> {
    let x = this.cloudSync.downloadCloudUpdate(userId).retry(3)
      .switchMap(update => Observable.of(this.storage.set('uea1v' + userId, update))
        .mapTo(update));
    return x;
  }

  /**
   * รายการ EA ทั้งหมดที่ถูก download เรียบร้อยแล้ว
   */
  public listDownloadedEAs(userId: string): Observable<EAwStat[]> {
    return Observable.of([ this.webState.ea ]);
  }

  /**
   * รายการ EAs ได้ถูก Download แล้วหรือยัง?f
   */
  public hasEasDownloaded(userId: string): Observable<boolean> {
    return Observable.of(true);
  }

  public saveNotiUid(notiIds): Promise<{}> {
    return this.storage.set("notiOneIds", notiIds);
  }

  public getNotiUid(): Observable<PushUserId> {
    return Observable.fromPromise(this.storage.get("notiOneIds"));
  }

  public saveNotiAppMsg(kind: string, title: string, msg: string, actionId: string, link: string): Promise<{}> {
    return this.storage.set("notiAppMsg", { kind: kind, title: title, msg: msg, actionId: actionId, uri: link });
  }

  public getNotiAppMsg(): Observable<MsgNotiInfo> {
    return Observable.fromPromise(this.storage.get("notiAppMsg"));
  }

  public deleteNotiAppMsg(): Promise<{}> {
    return this.storage.remove("notiAppMsg");
  }

  /*********** */

  /**
  * ชั่วคราว ๆ
  */
  public saveUser(userId: string, password: string, token: string) {
    this.storage.set('ulogin1v' + userId, CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(password + userId)).toString());
    this.storage.set('tokenlogin' + userId, token);
  }

  public async validateUser(userId: string, password: string) {
    var pwdHash = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(password + userId)).toString();
    let pwd = await this.storage.get('ulogin1v' + userId);
    return pwd == pwdHash;
  }

  /*********** */

  /**
  * บันทึกข้อมูล Building 1 อาคาร
  */
  public saveBuilding(dataBuilding: Building): Observable<any> {

    return Observable.fromPromise(this.storage.set(dataBuilding._id, dataBuilding));
  }

  /**
   * บันทึกรายการ Building แบบบันทึกเป็น List
   */
  public saveBuildingList(eaCode: string, buildings: BuildingInList[]) {

    return Observable.fromPromise(this.storage.set('bldlst1v' + eaCode, buildings));
  }

  /**
   * เรียกรายการ Buildings ที่เก็บไว้เป็น list สำหรับ EA ที่ระบุ
   */
  public listBuildingsForEA(eaCode: string): Observable<BuildingInList[]> {

    return Observable.fromPromise(this.storage.get('bldlst1v' + eaCode)).map((lst: BuildingInList[]) => lst ? lst : []);
  }

  public getBuilding(buildingId: string): Observable<Building> {
    return Observable.fromPromise(this.storage.get(buildingId));
  }

  /**
   * เรียกรายการ house hold ที่อยู่ใน building ที่ระบุ
   */
  public listHouseHoldInBuilding(buildingId: string): Observable<UnitInList[]> {
    return Observable.fromPromise(this.storage.get('unt4b1v' + buildingId)).map((lst: UnitInList[]) => lst ? lst : []);
  }

  public saveHouseHoldInBuildingList(buildingId: string, unitsInBuilding: UnitInList[]) {
    console.log("saveHouseHoldInBuildingList", unitsInBuilding);

    return Observable.fromPromise(this.storage.set('unt4b1v' + buildingId, unitsInBuilding));
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
    console.log("saveHouseHold", household);
    return Observable.fromPromise(this.storage.set(household._id, household));
  }

  /**
    * บันทึกสถานะการสำรวจของ User ใน EA นั้น
    */
  public async saveUserEAStatus(eaCode: string, userId: string, status: string): Promise<any> {
    const key = 'uea1v' + userId;
    let eaList = <EAwStat[]>await this.storage.get(key);
    let ea = eaList.find((it, idx) => it.code == eaCode);
    if (ea) {
      ea.status = status;
      await this.storage.set(key, eaList);
    }
  }

  /**
    * บันทึกนามสกุล
    */
  public saveLastName(userId: string, lastname: string[]): Observable<any> {
    return Observable.fromPromise(this.storage.set("user1v" + userId, lastname));
  }

  /**
   * เรียกนามสกุลที่บันทึกไว้
   */
  public loadLastName(userId: string): Observable<any> {
    return Observable.fromPromise(this.storage.get("user1v" + userId));
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
    return Observable.fromPromise(this.storage.set("comlst1v" + eaCode, community));
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
    return Observable.fromPromise(this.storage.get("comlst1v" + eaCode));
  }

  public saveStatusEA(eaCode: string, status: StatusEA): Observable<any> {
    return Observable.fromPromise(this.storage.set('bldsta1v' + eaCode, status));
  }

  public loadStatusEA(eaCode: string): Observable<any> {
    return Observable.fromPromise(this.storage.get('bldsta1v' + eaCode));
  }
  /*********** */
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
  uri: string;
}

export interface StatusEA {
  status: any;
  date: any;
}

