import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HouseHoldUnit } from '../../models/mobile/MobileModels';

/*
  Generated class for the AppStateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  *** This class will hold the Global States of the Application ***
*/
declare var JSEncrypt;
declare var CryptoJS;
@Injectable()
export class AppStateProvider {

  private readonly PublicKey: string = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvuyZDwuOKL/LVp7tV4dmEuWjXM2Kn94NiTR3p0t5QcKQH8w+xTuT9qi1KXfQunpPxuP/JSpuFUKGjQ7Oz0BENH6mXwbRaXiJEPIPgpYsaMTMF7kSiiH80yBGEmL9cgWksWbe1NRilQOhJPoKyVUE3NhmwJG8qSyKEuOHKhEgPSJ/aOfbQJlBYXQn95hUGwD5jRh3b01TXCDwQdrkbaSEhEPNLPC8/et8ANeQjnzhfCyijLd52APJyFesyzDhpbfOZ4OcLxrgH50gmfJ2NtTDVe++HL6m5h2VFM+CfIaZC5BFTbdSd8HFzm1fmgbWJlunqmapWcC6B8hXEVcIujr/vwIDAQAB-----END PUBLIC KEY-----";

  constructor() {
    console.log('Hello AppStateProvider Provider');
  }

  public userId: string;
  public eaCode: string;
  public buildingId: string;

  public communityId: string;
  public communityData: any;

  public houseHoldUnit: HouseHoldUnit;
  public statusEa: any;

  public deviceID: any;

  /**
   * สร้าง Id สำหรับใช้กับข้อมูลต่างๆ โดยใช้เวลาและคนมาประกอบกัน
   */
  public generateId(prefix: string): string {
    return prefix + Date.now().valueOf() + this.userId;
  }

  Verify(rawData, signature) {
    var publicKey = this.PublicKey;
    var verify = new JSEncrypt();
    verify.setPublicKey(publicKey);
    var verified = verify.verify(rawData, signature, CryptoJS.SHA256);
    return verified;
  }
}
