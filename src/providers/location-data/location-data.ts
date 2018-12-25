import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocationDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LocationDataProvider Provider');
  }

}

export interface Location {
  code: number;
  province: string;
  district: string;
  subDistrict: string;
}

export const LocationData: Location[] = [
  {
    code: 100101,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "พระบรมมหาราชวัง"
  },
  {
    code: 100102,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "วังบูรพาภิรมย์"
  },
  {
    code: 100103,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "วัดราชบพิธ"
  },
  {
    code: 100104,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "สำราญราษฎร์"
  },
  {
    code: 100105,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "ศาลเจ้าพ่อเสือ"
  },
  {
    code: 100106,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "เสาชิงช้า"
  },
  {
    code: 100107,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "บวรนิเวศ"
  },
  {
    code: 100108,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "ตลาดยอด"
  },
  {
    code: 100109,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "ชนะสงคราม"
  },
  {
    code: 100110,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "บ้านพานถม"
  },
  {
    code: 100111,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "บางขุนพรหม"
  },
  {
    code: 100112,
    province: "กรุงเทพมหานคร",
    district: "เขตพระนคร",
    subDistrict: "วัดสามพระยา"
  },
  {
    code: 100201,
    province: "กรุงเทพมหานคร",
    district: "เขตดุสิต",
    subDistrict: "ดุสิต"
  },
  {
    code: 100202,
    province: "กรุงเทพมหานคร",
    district: "เขตดุสิต",
    subDistrict: "วชิรพยาบาล"
  },
  {
    code: 100203,
    province: "กรุงเทพมหานคร",
    district: "เขตดุสิต",
    subDistrict: "สวนจิตรลดา"
  },
  {
    code: 100204,
    province: "กรุงเทพมหานคร",
    district: "เขตดุสิต",
    subDistrict: "สี่แยกมหานาค"
  },
  {
    code: 100206,
    province: "กรุงเทพมหานคร",
    district: "เขตดุสิต",
    subDistrict: "ถนนนครไชยศรี"
  },
  {
    code: 100301,
    province: "กรุงเทพมหานคร",
    district: "เขตหนองจอก",
    subDistrict: "กระทุ่มราย"
  },
  {
    code: 100302,
    province: "กรุงเทพมหานคร",
    district: "เขตหนองจอก",
    subDistrict: "หนองจอก"
  },
  {
    code: 100303,
    province: "กรุงเทพมหานคร",
    district: "เขตหนองจอก",
    subDistrict: "คลองสิบ"
  },
  {
    code: 100304,
    province: "กรุงเทพมหานคร",
    district: "เขตหนองจอก",
    subDistrict: "คลองสิบสอง"
  },
  {
    code: 100305,
    province: "กรุงเทพมหานคร",
    district: "เขตหนองจอก",
    subDistrict: "โคกแฝด"
  },
  {
    code: 100306,
    province: "กรุงเทพมหานคร",
    district: "เขตหนองจอก",
    subDistrict: "คู้ฝั่งเหนือ"
  },
  {
    code: 100307,
    province: "กรุงเทพมหานคร",
    district: "เขตหนองจอก",
    subDistrict: "ลำผักชี"
  },
  {
    code: 100308,
    province: "กรุงเทพมหานคร",
    district: "เขตหนองจอก",
    subDistrict: "ลำต้อยติ่ง"
  },
  {
    code: 100401,
    province: "กรุงเทพมหานคร",
    district: "เขตบางรัก",
    subDistrict: "มหาพฤฒาราม"
  },
  {
    code: 100402,
    province: "กรุงเทพมหานคร",
    district: "เขตบางรัก",
    subDistrict: "สีลม"
  },
  {
    code: 100403,
    province: "กรุงเทพมหานคร",
    district: "เขตบางรัก",
    subDistrict: "สุริยวงศ์"
  },
  {
    code: 100404,
    province: "กรุงเทพมหานคร",
    district: "เขตบางรัก",
    subDistrict: "บางรัก"
  },
  {
    code: 100405,
    province: "กรุงเทพมหานคร",
    district: "เขตบางรัก",
    subDistrict: "สี่พระยา"
  },
  {
    code: 100502,
    province: "กรุงเทพมหานคร",
    district: "เขตบางเขน",
    subDistrict: "อนุสาวรีย์"
  },
  {
    code: 100508,
    province: "กรุงเทพมหานคร",
    district: "เขตบางเขน",
    subDistrict: "ท่าแร้ง"
  },
  {
    code: 100601,
    province: "กรุงเทพมหานคร",
    district: "เขตบางกะปิ",
    subDistrict: "คลองจั่น"
  },
  {
    code: 100608,
    province: "กรุงเทพมหานคร",
    district: "เขตบางกะปิ",
    subDistrict: "หัวหมาก"
  },
  {
    code: 100701,
    province: "กรุงเทพมหานคร",
    district: "เขตปทุมวัน",
    subDistrict: "รองเมือง"
  },
  {
    code: 100702,
    province: "กรุงเทพมหานคร",
    district: "เขตปทุมวัน",
    subDistrict: "วังใหม่"
  },
  {
    code: 100703,
    province: "กรุงเทพมหานคร",
    district: "เขตปทุมวัน",
    subDistrict: "ปทุมวัน"
  },
  {
    code: 100704,
    province: "กรุงเทพมหานคร",
    district: "เขตปทุมวัน",
    subDistrict: "ลุมพินี"
  },
  {
    code: 100801,
    province: "กรุงเทพมหานคร",
    district: "เขตป้อมปราบศัตรูพ่าย",
    subDistrict: "ป้อมปราบ"
  },
  {
    code: 100802,
    province: "กรุงเทพมหานคร",
    district: "เขตป้อมปราบศัตรูพ่าย",
    subDistrict: "วัดเทพศิรินทร์"
  },
  {
    code: 100803,
    province: "กรุงเทพมหานคร",
    district: "เขตป้อมปราบศัตรูพ่าย",
    subDistrict: "คลองมหานาค"
  },
  {
    code: 100804,
    province: "กรุงเทพมหานคร",
    district: "เขตป้อมปราบศัตรูพ่าย",
    subDistrict: "บ้านบาตร"
  },
  {
    code: 100805,
    province: "กรุงเทพมหานคร",
    district: "เขตป้อมปราบศัตรูพ่าย",
    subDistrict: "วัดโสมนัส"
  },
  {
    code: 100905,
    province: "กรุงเทพมหานคร",
    district: "เขตพระโขนง",
    subDistrict: "บางจาก"
  },
  {
    code: 101001,
    province: "กรุงเทพมหานคร",
    district: "เขตมีนบุรี",
    subDistrict: "มีนบุรี"
  },
  {
    code: 101002,
    province: "กรุงเทพมหานคร",
    district: "เขตมีนบุรี",
    subDistrict: "แสนแสบ"
  },
  {
    code: 101101,
    province: "กรุงเทพมหานคร",
    district: "เขตลาดกระบัง",
    subDistrict: "ลาดกระบัง"
  },
  {
    code: 101102,
    province: "กรุงเทพมหานคร",
    district: "เขตลาดกระบัง",
    subDistrict: "คลองสองต้นนุ่น"
  },
  {
    code: 101103,
    province: "กรุงเทพมหานคร",
    district: "เขตลาดกระบัง",
    subDistrict: "คลองสามประเวศ"
  },
  {
    code: 101104,
    province: "กรุงเทพมหานคร",
    district: "เขตลาดกระบัง",
    subDistrict: "ลำปลาทิว"
  },
  {
    code: 101105,
    province: "กรุงเทพมหานคร",
    district: "เขตลาดกระบัง",
    subDistrict: "ทับยาว"
  },
  {
    code: 101106,
    province: "กรุงเทพมหานคร",
    district: "เขตลาดกระบัง",
    subDistrict: "ขุมทอง"
  },
  {
    code: 101203,
    province: "กรุงเทพมหานคร",
    district: "เขตยานนาวา",
    subDistrict: "ช่องนนทรี"
  },
  {
    code: 101204,
    province: "กรุงเทพมหานคร",
    district: "เขตยานนาวา",
    subDistrict: "บางโพงพาง"
  },
  {
    code: 101301,
    province: "กรุงเทพมหานคร",
    district: "เขตสัมพันธวงศ์",
    subDistrict: "จักรวรรดิ"
  },
  {
    code: 101302,
    province: "กรุงเทพมหานคร",
    district: "เขตสัมพันธวงศ์",
    subDistrict: "สัมพันธวงศ์"
  },
  {
    code: 101303,
    province: "กรุงเทพมหานคร",
    district: "เขตสัมพันธวงศ์",
    subDistrict: "ตลาดน้อย"
  },
  {
    code: 101401,
    province: "กรุงเทพมหานคร",
    district: "เขตพญาไท",
    subDistrict: "สามเสนใน"
  },
  {
    code: 101501,
    province: "กรุงเทพมหานคร",
    district: "เขตธนบุรี",
    subDistrict: "วัดกัลยาณ์"
  },
  {
    code: 101502,
    province: "กรุงเทพมหานคร",
    district: "เขตธนบุรี",
    subDistrict: "หิรัญรูจี"
  },
  {
    code: 101503,
    province: "กรุงเทพมหานคร",
    district: "เขตธนบุรี",
    subDistrict: "บางยี่เรือ"
  },
  {
    code: 101504,
    province: "กรุงเทพมหานคร",
    district: "เขตธนบุรี",
    subDistrict: "บุคคโล"
  },
  {
    code: 101505,
    province: "กรุงเทพมหานคร",
    district: "เขตธนบุรี",
    subDistrict: "ตลาดพลู"
  },
  {
    code: 101506,
    province: "กรุงเทพมหานคร",
    district: "เขตธนบุรี",
    subDistrict: "ดาวคะนอง"
  },
  {
    code: 101507,
    province: "กรุงเทพมหานคร",
    district: "เขตธนบุรี",
    subDistrict: "สำเหร่"
  },
  {
    code: 101601,
    province: "กรุงเทพมหานคร",
    district: "เขตบางกอกใหญ่",
    subDistrict: "วัดอรุณ"
  },
  {
    code: 101602,
    province: "กรุงเทพมหานคร",
    district: "เขตบางกอกใหญ่",
    subDistrict: "วัดท่าพระ"
  },
  {
    code: 101701,
    province: "กรุงเทพมหานคร",
    district: "เขตห้วยขวาง",
    subDistrict: "ห้วยขวาง"
  },
  {
    code: 101702,
    province: "กรุงเทพมหานคร",
    district: "เขตห้วยขวาง",
    subDistrict: "บางกะปิ"
  },
  {
    code: 101704,
    province: "กรุงเทพมหานคร",
    district: "เขตห้วยขวาง",
    subDistrict: "สามเสนนอก"
  },
  {
    code: 101801,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองสาน",
    subDistrict: "สมเด็จเจ้าพระยา"
  },
  {
    code: 101802,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองสาน",
    subDistrict: "คลองสาน"
  },
  {
    code: 101803,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองสาน",
    subDistrict: "บางลำภูล่าง"
  },
  {
    code: 101804,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองสาน",
    subDistrict: "คลองต้นไทร"
  },
  {
    code: 101901,
    province: "กรุงเทพมหานคร",
    district: "เขตตลิ่งชัน",
    subDistrict: "คลองชักพระ"
  },
  {
    code: 101902,
    province: "กรุงเทพมหานคร",
    district: "เขตตลิ่งชัน",
    subDistrict: "ตลิ่งชัน"
  },
  {
    code: 101903,
    province: "กรุงเทพมหานคร",
    district: "เขตตลิ่งชัน",
    subDistrict: "ฉิมพลี"
  },
  {
    code: 101904,
    province: "กรุงเทพมหานคร",
    district: "เขตตลิ่งชัน",
    subDistrict: "บางพรม"
  },
  {
    code: 101905,
    province: "กรุงเทพมหานคร",
    district: "เขตตลิ่งชัน",
    subDistrict: "บางระมาด"
  },
  {
    code: 101907,
    province: "กรุงเทพมหานคร",
    district: "เขตตลิ่งชัน",
    subDistrict: "บางเชือกหนัง"
  },
  {
    code: 102004,
    province: "กรุงเทพมหานคร",
    district: "เขตบางกอกน้อย",
    subDistrict: "ศิริราช"
  },
  {
    code: 102005,
    province: "กรุงเทพมหานคร",
    district: "เขตบางกอกน้อย",
    subDistrict: "บ้านช่างหล่อ"
  },
  {
    code: 102006,
    province: "กรุงเทพมหานคร",
    district: "เขตบางกอกน้อย",
    subDistrict: "บางขุนนนท์"
  },
  {
    code: 102007,
    province: "กรุงเทพมหานคร",
    district: "เขตบางกอกน้อย",
    subDistrict: "บางขุนศรี"
  },
  {
    code: 102009,
    province: "กรุงเทพมหานคร",
    district: "เขตบางกอกน้อย",
    subDistrict: "อรุณอมรินทร์"
  },
  {
    code: 102105,
    province: "กรุงเทพมหานคร",
    district: "เขตบางขุนเทียน",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 102107,
    province: "กรุงเทพมหานคร",
    district: "เขตบางขุนเทียน",
    subDistrict: "แสมดำ"
  },
  {
    code: 102201,
    province: "กรุงเทพมหานคร",
    district: "เขตภาษีเจริญ",
    subDistrict: "บางหว้า"
  },
  {
    code: 102202,
    province: "กรุงเทพมหานคร",
    district: "เขตภาษีเจริญ",
    subDistrict: "บางด้วน"
  },
  {
    code: 102206,
    province: "กรุงเทพมหานคร",
    district: "เขตภาษีเจริญ",
    subDistrict: "บางจาก"
  },
  {
    code: 102207,
    province: "กรุงเทพมหานคร",
    district: "เขตภาษีเจริญ",
    subDistrict: "บางแวก"
  },
  {
    code: 102208,
    province: "กรุงเทพมหานคร",
    district: "เขตภาษีเจริญ",
    subDistrict: "คลองขวาง"
  },
  {
    code: 102209,
    province: "กรุงเทพมหานคร",
    district: "เขตภาษีเจริญ",
    subDistrict: "ปากคลองภาษีเจริญ"
  },
  {
    code: 102210,
    province: "กรุงเทพมหานคร",
    district: "เขตภาษีเจริญ",
    subDistrict: "คูหาสวรรค์"
  },
  {
    code: 102302,
    province: "กรุงเทพมหานคร",
    district: "เขตหนองแขม",
    subDistrict: "หนองแขม"
  },
  {
    code: 102303,
    province: "กรุงเทพมหานคร",
    district: "เขตหนองแขม",
    subDistrict: "หนองค้างพลู"
  },
  {
    code: 102401,
    province: "กรุงเทพมหานคร",
    district: "เขตราษฎร์บูรณะ",
    subDistrict: "ราษฎร์บูรณะ"
  },
  {
    code: 102402,
    province: "กรุงเทพมหานคร",
    district: "เขตราษฎร์บูรณะ",
    subDistrict: "บางปะกอก"
  },
  {
    code: 102501,
    province: "กรุงเทพมหานคร",
    district: "เขตบางพลัด",
    subDistrict: "บางพลัด"
  },
  {
    code: 102502,
    province: "กรุงเทพมหานคร",
    district: "เขตบางพลัด",
    subDistrict: "บางอ้อ"
  },
  {
    code: 102503,
    province: "กรุงเทพมหานคร",
    district: "เขตบางพลัด",
    subDistrict: "บางบำหรุ"
  },
  {
    code: 102504,
    province: "กรุงเทพมหานคร",
    district: "เขตบางพลัด",
    subDistrict: "บางยี่ขัน"
  },
  {
    code: 102601,
    province: "กรุงเทพมหานคร",
    district: "เขตดินแดง",
    subDistrict: "ดินแดง"
  },
  {
    code: 102701,
    province: "กรุงเทพมหานคร",
    district: "เขตบึงกุ่ม",
    subDistrict: "คลองกุ่ม"
  },
  {
    code: 102704,
    province: "กรุงเทพมหานคร",
    district: "เขตบึงกุ่ม",
    subDistrict: "นวมินทร์"
  },
  {
    code: 102705,
    province: "กรุงเทพมหานคร",
    district: "เขตบึงกุ่ม",
    subDistrict: "นวลจันทร์"
  },
  {
    code: 102801,
    province: "กรุงเทพมหานคร",
    district: "เขตสาทร",
    subDistrict: "ทุ่งวัดดอน"
  },
  {
    code: 102802,
    province: "กรุงเทพมหานคร",
    district: "เขตสาทร",
    subDistrict: "ยานนาวา"
  },
  {
    code: 102803,
    province: "กรุงเทพมหานคร",
    district: "เขตสาทร",
    subDistrict: "ทุ่งมหาเมฆ"
  },
  {
    code: 102901,
    province: "กรุงเทพมหานคร",
    district: "เขตบางซื่อ",
    subDistrict: "บางซื่อ"
  },
  {
    code: 102902,
    province: "กรุงเทพมหานคร",
    district: "เขตบางซื่อ",
    subDistrict: "วงศ์สว่าง"
  },
  {
    code: 103001,
    province: "กรุงเทพมหานคร",
    district: "เขตจตุจักร",
    subDistrict: "ลาดยาว"
  },
  {
    code: 103002,
    province: "กรุงเทพมหานคร",
    district: "เขตจตุจักร",
    subDistrict: "เสนานิคม"
  },
  {
    code: 103003,
    province: "กรุงเทพมหานคร",
    district: "เขตจตุจักร",
    subDistrict: "จันทรเกษม"
  },
  {
    code: 103004,
    province: "กรุงเทพมหานคร",
    district: "เขตจตุจักร",
    subDistrict: "จอมพล"
  },
  {
    code: 103005,
    province: "กรุงเทพมหานคร",
    district: "เขตจตุจักร",
    subDistrict: "จตุจักร"
  },
  {
    code: 103101,
    province: "กรุงเทพมหานคร",
    district: "เขตบางคอแหลม",
    subDistrict: "บางคอแหลม"
  },
  {
    code: 103102,
    province: "กรุงเทพมหานคร",
    district: "เขตบางคอแหลม",
    subDistrict: "วัดพระยาไกร"
  },
  {
    code: 103103,
    province: "กรุงเทพมหานคร",
    district: "เขตบางคอแหลม",
    subDistrict: "บางโคล่"
  },
  {
    code: 103201,
    province: "กรุงเทพมหานคร",
    district: "เขตประเวศ",
    subDistrict: "ประเวศ"
  },
  {
    code: 103202,
    province: "กรุงเทพมหานคร",
    district: "เขตประเวศ",
    subDistrict: "หนองบอน"
  },
  {
    code: 103203,
    province: "กรุงเทพมหานคร",
    district: "เขตประเวศ",
    subDistrict: "ดอกไม้"
  },
  {
    code: 103301,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองเตย",
    subDistrict: "คลองเตย"
  },
  {
    code: 103302,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองเตย",
    subDistrict: "คลองตัน"
  },
  {
    code: 103303,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองเตย",
    subDistrict: "พระโขนง"
  },
  {
    code: 103401,
    province: "กรุงเทพมหานคร",
    district: "เขตสวนหลวง",
    subDistrict: "สวนหลวง"
  },
  {
    code: 103501,
    province: "กรุงเทพมหานคร",
    district: "เขตจอมทอง",
    subDistrict: "บางขุนเทียน"
  },
  {
    code: 103502,
    province: "กรุงเทพมหานคร",
    district: "เขตจอมทอง",
    subDistrict: "บางค้อ"
  },
  {
    code: 103503,
    province: "กรุงเทพมหานคร",
    district: "เขตจอมทอง",
    subDistrict: "บางมด"
  },
  {
    code: 103504,
    province: "กรุงเทพมหานคร",
    district: "เขตจอมทอง",
    subDistrict: "จอมทอง"
  },
  {
    code: 103602,
    province: "กรุงเทพมหานคร",
    district: "เขตดอนเมือง",
    subDistrict: "สีกัน"
  },
  {
    code: 103604,
    province: "กรุงเทพมหานคร",
    district: "เขตดอนเมือง",
    subDistrict: "ดอนเมือง"
  },
  {
    code: 103605,
    province: "กรุงเทพมหานคร",
    district: "เขตดอนเมือง",
    subDistrict: "สนามบิน"
  },
  {
    code: 103701,
    province: "กรุงเทพมหานคร",
    district: "เขตราชเทวี",
    subDistrict: "ทุ่งพญาไท"
  },
  {
    code: 103702,
    province: "กรุงเทพมหานคร",
    district: "เขตราชเทวี",
    subDistrict: "ถนนพญาไท"
  },
  {
    code: 103703,
    province: "กรุงเทพมหานคร",
    district: "เขตราชเทวี",
    subDistrict: "ถนนเพชรบุรี"
  },
  {
    code: 103704,
    province: "กรุงเทพมหานคร",
    district: "เขตราชเทวี",
    subDistrict: "มักกะสัน"
  },
  {
    code: 103801,
    province: "กรุงเทพมหานคร",
    district: "เขตลาดพร้าว",
    subDistrict: "ลาดพร้าว"
  },
  {
    code: 103802,
    province: "กรุงเทพมหานคร",
    district: "เขตลาดพร้าว",
    subDistrict: "จรเข้บัว"
  },
  {
    code: 103901,
    province: "กรุงเทพมหานคร",
    district: "เขตวัฒนา",
    subDistrict: "คลองเตยเหนือ"
  },
  {
    code: 103902,
    province: "กรุงเทพมหานคร",
    district: "เขตวัฒนา",
    subDistrict: "คลองตันเหนือ"
  },
  {
    code: 103903,
    province: "กรุงเทพมหานคร",
    district: "เขตวัฒนา",
    subDistrict: "พระโขนงเหนือ"
  },
  {
    code: 104001,
    province: "กรุงเทพมหานคร",
    district: "เขตบางแค",
    subDistrict: "บางแค"
  },
  {
    code: 104002,
    province: "กรุงเทพมหานคร",
    district: "เขตบางแค",
    subDistrict: "บางแคเหนือ"
  },
  {
    code: 104003,
    province: "กรุงเทพมหานคร",
    district: "เขตบางแค",
    subDistrict: "บางไผ่"
  },
  {
    code: 104004,
    province: "กรุงเทพมหานคร",
    district: "เขตบางแค",
    subDistrict: "หลักสอง"
  },
  {
    code: 104101,
    province: "กรุงเทพมหานคร",
    district: "เขตหลักสี่",
    subDistrict: "ทุ่งสองห้อง"
  },
  {
    code: 104102,
    province: "กรุงเทพมหานคร",
    district: "เขตหลักสี่",
    subDistrict: "ตลาดบางเขน"
  },
  {
    code: 104201,
    province: "กรุงเทพมหานคร",
    district: "เขตสายไหม",
    subDistrict: "สายไหม"
  },
  {
    code: 104202,
    province: "กรุงเทพมหานคร",
    district: "เขตสายไหม",
    subDistrict: "ออเงิน"
  },
  {
    code: 104203,
    province: "กรุงเทพมหานคร",
    district: "เขตสายไหม",
    subDistrict: "คลองถนน"
  },
  {
    code: 104301,
    province: "กรุงเทพมหานคร",
    district: "เขตคันนายาว",
    subDistrict: "คันนายาว"
  },
  {
    code: 104302,
    province: "กรุงเทพมหานคร",
    district: "เขตคันนายาว",
    subDistrict: "รามอินทรา"
  },
  {
    code: 104401,
    province: "กรุงเทพมหานคร",
    district: "เขตสะพานสูง",
    subDistrict: "สะพานสูง"
  },
  {
    code: 104501,
    province: "กรุงเทพมหานคร",
    district: "เขตวังทองหลาง",
    subDistrict: "วังทองหลาง"
  },
  {
    code: 104502,
    province: "กรุงเทพมหานคร",
    district: "เขตวังทองหลาง",
    subDistrict: "สะพานสอง"
  },
  {
    code: 104503,
    province: "กรุงเทพมหานคร",
    district: "เขตวังทองหลาง",
    subDistrict: "คลองเจ้าคุณสิงห์"
  },
  {
    code: 104504,
    province: "กรุงเทพมหานคร",
    district: "เขตวังทองหลาง",
    subDistrict: "พลับพลา"
  },
  {
    code: 104601,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองสามวา",
    subDistrict: "สามวาตะวันตก"
  },
  {
    code: 104602,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองสามวา",
    subDistrict: "สามวาตะวันออก"
  },
  {
    code: 104603,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองสามวา",
    subDistrict: "บางชัน"
  },
  {
    code: 104604,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองสามวา",
    subDistrict: "ทรายกองดิน"
  },
  {
    code: 104605,
    province: "กรุงเทพมหานคร",
    district: "เขตคลองสามวา",
    subDistrict: "ทรายกองดินใต้"
  },
  {
    code: 104701,
    province: "กรุงเทพมหานคร",
    district: "เขตบางนา",
    subDistrict: "บางนา"
  },
  {
    code: 104801,
    province: "กรุงเทพมหานคร",
    district: "เขตทวีวัฒนา",
    subDistrict: "ทวีวัฒนา"
  },
  {
    code: 104802,
    province: "กรุงเทพมหานคร",
    district: "เขตทวีวัฒนา",
    subDistrict: "ศาลาธรรมสพน์"
  },
  {
    code: 104901,
    province: "กรุงเทพมหานคร",
    district: "เขตทุ่งครุ",
    subDistrict: "บางมด"
  },
  {
    code: 104902,
    province: "กรุงเทพมหานคร",
    district: "เขตทุ่งครุ",
    subDistrict: "ทุ่งครุ"
  },
  {
    code: 105001,
    province: "กรุงเทพมหานคร",
    district: "เขตบางบอน",
    subDistrict: "บางบอน"
  },
  {
    code: 110101,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "ปากน้ำ"
  },
  {
    code: 110102,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "สำโรงเหนือ"
  },
  {
    code: 110103,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "บางเมือง"
  },
  {
    code: 110104,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "ท้ายบ้าน"
  },
  {
    code: 110108,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "บางปูใหม่"
  },
  {
    code: 110110,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "แพรกษา"
  },
  {
    code: 110111,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "บางโปรง"
  },
  {
    code: 110112,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "บางปู"
  },
  {
    code: 110113,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "บางด้วน"
  },
  {
    code: 110114,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "บางเมืองใหม่"
  },
  {
    code: 110115,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "เทพารักษ์"
  },
  {
    code: 110116,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "ท้ายบ้านใหม่"
  },
  {
    code: 110117,
    province: "สมุทรปราการ",
    district: "อำเภอเมืองสมุทรปราการ",
    subDistrict: "แพรกษาใหม่"
  },
  {
    code: 110201,
    province: "สมุทรปราการ",
    district: "อำเภอบางบ่อ",
    subDistrict: "บางบ่อ"
  },
  {
    code: 110202,
    province: "สมุทรปราการ",
    district: "อำเภอบางบ่อ",
    subDistrict: "บ้านระกาศ"
  },
  {
    code: 110203,
    province: "สมุทรปราการ",
    district: "อำเภอบางบ่อ",
    subDistrict: "บางพลีน้อย"
  },
  {
    code: 110204,
    province: "สมุทรปราการ",
    district: "อำเภอบางบ่อ",
    subDistrict: "บางเพรียง"
  },
  {
    code: 110205,
    province: "สมุทรปราการ",
    district: "อำเภอบางบ่อ",
    subDistrict: "คลองด่าน"
  },
  {
    code: 110206,
    province: "สมุทรปราการ",
    district: "อำเภอบางบ่อ",
    subDistrict: "คลองสวน"
  },
  {
    code: 110207,
    province: "สมุทรปราการ",
    district: "อำเภอบางบ่อ",
    subDistrict: "เปร็ง"
  },
  {
    code: 110208,
    province: "สมุทรปราการ",
    district: "อำเภอบางบ่อ",
    subDistrict: "คลองนิยมยาตรา"
  },
  {
    code: 110301,
    province: "สมุทรปราการ",
    district: "อำเภอบางพลี",
    subDistrict: "บางพลีใหญ่"
  },
  {
    code: 110302,
    province: "สมุทรปราการ",
    district: "อำเภอบางพลี",
    subDistrict: "บางแก้ว"
  },
  {
    code: 110303,
    province: "สมุทรปราการ",
    district: "อำเภอบางพลี",
    subDistrict: "บางปลา"
  },
  {
    code: 110304,
    province: "สมุทรปราการ",
    district: "อำเภอบางพลี",
    subDistrict: "บางโฉลง"
  },
  {
    code: 110308,
    province: "สมุทรปราการ",
    district: "อำเภอบางพลี",
    subDistrict: "ราชาเทวะ"
  },
  {
    code: 110309,
    province: "สมุทรปราการ",
    district: "อำเภอบางพลี",
    subDistrict: "หนองปรือ"
  },
  {
    code: 110401,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "ตลาด"
  },
  {
    code: 110402,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "บางพึ่ง"
  },
  {
    code: 110403,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "บางจาก"
  },
  {
    code: 110404,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "บางครุ"
  },
  {
    code: 110405,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "บางหญ้าแพรก"
  },
  {
    code: 110406,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "บางหัวเสือ"
  },
  {
    code: 110407,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "สำโรงใต้"
  },
  {
    code: 110408,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "บางยอ"
  },
  {
    code: 110409,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "บางกะเจ้า"
  },
  {
    code: 110410,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "บางน้ำผึ้ง"
  },
  {
    code: 110411,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "บางกระสอบ"
  },
  {
    code: 110412,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "บางกอบัว"
  },
  {
    code: 110413,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "ทรงคนอง"
  },
  {
    code: 110414,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "สำโรง"
  },
  {
    code: 110415,
    province: "สมุทรปราการ",
    district: "อำเภอพระประแดง",
    subDistrict: "สำโรงกลาง"
  },
  {
    code: 110501,
    province: "สมุทรปราการ",
    district: "อำเภอพระสมุทรเจดีย์",
    subDistrict: "นาเกลือ"
  },
  {
    code: 110502,
    province: "สมุทรปราการ",
    district: "อำเภอพระสมุทรเจดีย์",
    subDistrict: "บ้านคลองสวน"
  },
  {
    code: 110503,
    province: "สมุทรปราการ",
    district: "อำเภอพระสมุทรเจดีย์",
    subDistrict: "แหลมฟ้าผ่า"
  },
  {
    code: 110504,
    province: "สมุทรปราการ",
    district: "อำเภอพระสมุทรเจดีย์",
    subDistrict: "ปากคลองบางปลากด"
  },
  {
    code: 110505,
    province: "สมุทรปราการ",
    district: "อำเภอพระสมุทรเจดีย์",
    subDistrict: "ในคลองบางปลากด"
  },
  {
    code: 110601,
    province: "สมุทรปราการ",
    district: "อำเภอบางเสาธง",
    subDistrict: "บางเสาธง"
  },
  {
    code: 110602,
    province: "สมุทรปราการ",
    district: "อำเภอบางเสาธง",
    subDistrict: "ศีรษะจรเข้น้อย"
  },
  {
    code: 110603,
    province: "สมุทรปราการ",
    district: "อำเภอบางเสาธง",
    subDistrict: "ศีรษะจรเข้ใหญ่"
  },
  {
    code: 120101,
    province: "นนทบุรี",
    district: "อำเภอเมืองนนทบุรี",
    subDistrict: "สวนใหญ่"
  },
  {
    code: 120102,
    province: "นนทบุรี",
    district: "อำเภอเมืองนนทบุรี",
    subDistrict: "ตลาดขวัญ"
  },
  {
    code: 120103,
    province: "นนทบุรี",
    district: "อำเภอเมืองนนทบุรี",
    subDistrict: "บางเขน"
  },
  {
    code: 120104,
    province: "นนทบุรี",
    district: "อำเภอเมืองนนทบุรี",
    subDistrict: "บางกระสอ"
  },
  {
    code: 120105,
    province: "นนทบุรี",
    district: "อำเภอเมืองนนทบุรี",
    subDistrict: "ท่าทราย"
  },
  {
    code: 120106,
    province: "นนทบุรี",
    district: "อำเภอเมืองนนทบุรี",
    subDistrict: "บางไผ่"
  },
  {
    code: 120107,
    province: "นนทบุรี",
    district: "อำเภอเมืองนนทบุรี",
    subDistrict: "บางศรีเมือง"
  },
  {
    code: 120108,
    province: "นนทบุรี",
    district: "อำเภอเมืองนนทบุรี",
    subDistrict: "บางกร่าง"
  },
  {
    code: 120109,
    province: "นนทบุรี",
    district: "อำเภอเมืองนนทบุรี",
    subDistrict: "ไทรม้า"
  },
  {
    code: 120110,
    province: "นนทบุรี",
    district: "อำเภอเมืองนนทบุรี",
    subDistrict: "บางรักน้อย"
  },
  {
    code: 120201,
    province: "นนทบุรี",
    district: "อำเภอบางกรวย",
    subDistrict: "วัดชลอ"
  },
  {
    code: 120202,
    province: "นนทบุรี",
    district: "อำเภอบางกรวย",
    subDistrict: "บางกรวย"
  },
  {
    code: 120203,
    province: "นนทบุรี",
    district: "อำเภอบางกรวย",
    subDistrict: "บางสีทอง"
  },
  {
    code: 120204,
    province: "นนทบุรี",
    district: "อำเภอบางกรวย",
    subDistrict: "บางขนุน"
  },
  {
    code: 120205,
    province: "นนทบุรี",
    district: "อำเภอบางกรวย",
    subDistrict: "บางขุนกอง"
  },
  {
    code: 120206,
    province: "นนทบุรี",
    district: "อำเภอบางกรวย",
    subDistrict: "บางคูเวียง"
  },
  {
    code: 120207,
    province: "นนทบุรี",
    district: "อำเภอบางกรวย",
    subDistrict: "มหาสวัสดิ์"
  },
  {
    code: 120208,
    province: "นนทบุรี",
    district: "อำเภอบางกรวย",
    subDistrict: "ปลายบาง"
  },
  {
    code: 120209,
    province: "นนทบุรี",
    district: "อำเภอบางกรวย",
    subDistrict: "ศาลากลาง"
  },
  {
    code: 120301,
    province: "นนทบุรี",
    district: "อำเภอบางใหญ่",
    subDistrict: "บางม่วง"
  },
  {
    code: 120302,
    province: "นนทบุรี",
    district: "อำเภอบางใหญ่",
    subDistrict: "บางแม่นาง"
  },
  {
    code: 120303,
    province: "นนทบุรี",
    district: "อำเภอบางใหญ่",
    subDistrict: "บางเลน"
  },
  {
    code: 120304,
    province: "นนทบุรี",
    district: "อำเภอบางใหญ่",
    subDistrict: "เสาธงหิน"
  },
  {
    code: 120305,
    province: "นนทบุรี",
    district: "อำเภอบางใหญ่",
    subDistrict: "บางใหญ่"
  },
  {
    code: 120306,
    province: "นนทบุรี",
    district: "อำเภอบางใหญ่",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 120401,
    province: "นนทบุรี",
    district: "อำเภอบางบัวทอง",
    subDistrict: "โสนลอย"
  },
  {
    code: 120402,
    province: "นนทบุรี",
    district: "อำเภอบางบัวทอง",
    subDistrict: "บางบัวทอง"
  },
  {
    code: 120403,
    province: "นนทบุรี",
    district: "อำเภอบางบัวทอง",
    subDistrict: "บางรักใหญ่"
  },
  {
    code: 120404,
    province: "นนทบุรี",
    district: "อำเภอบางบัวทอง",
    subDistrict: "บางคูรัด"
  },
  {
    code: 120405,
    province: "นนทบุรี",
    district: "อำเภอบางบัวทอง",
    subDistrict: "ละหาร"
  },
  {
    code: 120406,
    province: "นนทบุรี",
    district: "อำเภอบางบัวทอง",
    subDistrict: "ลำโพ"
  },
  {
    code: 120407,
    province: "นนทบุรี",
    district: "อำเภอบางบัวทอง",
    subDistrict: "พิมลราช"
  },
  {
    code: 120408,
    province: "นนทบุรี",
    district: "อำเภอบางบัวทอง",
    subDistrict: "บางรักพัฒนา"
  },
  {
    code: 120501,
    province: "นนทบุรี",
    district: "อำเภอไทรน้อย",
    subDistrict: "ไทรน้อย"
  },
  {
    code: 120502,
    province: "นนทบุรี",
    district: "อำเภอไทรน้อย",
    subDistrict: "ราษฎร์นิยม"
  },
  {
    code: 120503,
    province: "นนทบุรี",
    district: "อำเภอไทรน้อย",
    subDistrict: "หนองเพรางาย"
  },
  {
    code: 120504,
    province: "นนทบุรี",
    district: "อำเภอไทรน้อย",
    subDistrict: "ไทรใหญ่"
  },
  {
    code: 120505,
    province: "นนทบุรี",
    district: "อำเภอไทรน้อย",
    subDistrict: "ขุนศรี"
  },
  {
    code: 120506,
    province: "นนทบุรี",
    district: "อำเภอไทรน้อย",
    subDistrict: "คลองขวาง"
  },
  {
    code: 120507,
    province: "นนทบุรี",
    district: "อำเภอไทรน้อย",
    subDistrict: "ทวีวัฒนา"
  },
  {
    code: 120601,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "ปากเกร็ด"
  },
  {
    code: 120602,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "บางตลาด"
  },
  {
    code: 120603,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 120604,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "บางพูด"
  },
  {
    code: 120605,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "บางตะไนย์"
  },
  {
    code: 120606,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "คลองพระอุดม"
  },
  {
    code: 120607,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "ท่าอิฐ"
  },
  {
    code: 120608,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "เกาะเกร็ด"
  },
  {
    code: 120609,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "อ้อมเกร็ด"
  },
  {
    code: 120610,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "คลองข่อย"
  },
  {
    code: 120611,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "บางพลับ"
  },
  {
    code: 120612,
    province: "นนทบุรี",
    district: "อำเภอปากเกร็ด",
    subDistrict: "คลองเกลือ"
  },
  {
    code: 130101,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บางปรอก"
  },
  {
    code: 130102,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 130103,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บ้านกลาง"
  },
  {
    code: 130104,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บ้านฉาง"
  },
  {
    code: 130105,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บ้านกระแชง"
  },
  {
    code: 130106,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บางขะแยง"
  },
  {
    code: 130107,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บางคูวัด"
  },
  {
    code: 130108,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บางหลวง"
  },
  {
    code: 130109,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บางเดื่อ"
  },
  {
    code: 130110,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บางพูด"
  },
  {
    code: 130111,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บางพูน"
  },
  {
    code: 130112,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "บางกะดี"
  },
  {
    code: 130113,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "สวนพริกไทย"
  },
  {
    code: 130114,
    province: "ปทุมธานี",
    district: "อำเภอเมืองปทุมธานี",
    subDistrict: "หลักหก"
  },
  {
    code: 130201,
    province: "ปทุมธานี",
    district: "อำเภอคลองหลวง",
    subDistrict: "คลองหนึ่ง"
  },
  {
    code: 130202,
    province: "ปทุมธานี",
    district: "อำเภอคลองหลวง",
    subDistrict: "คลองสอง"
  },
  {
    code: 130203,
    province: "ปทุมธานี",
    district: "อำเภอคลองหลวง",
    subDistrict: "คลองสาม"
  },
  {
    code: 130204,
    province: "ปทุมธานี",
    district: "อำเภอคลองหลวง",
    subDistrict: "คลองสี่"
  },
  {
    code: 130205,
    province: "ปทุมธานี",
    district: "อำเภอคลองหลวง",
    subDistrict: "คลองห้า"
  },
  {
    code: 130206,
    province: "ปทุมธานี",
    district: "อำเภอคลองหลวง",
    subDistrict: "คลองหก"
  },
  {
    code: 130207,
    province: "ปทุมธานี",
    district: "อำเภอคลองหลวง",
    subDistrict: "คลองเจ็ด"
  },
  {
    code: 130301,
    province: "ปทุมธานี",
    district: "อำเภอธัญบุรี",
    subDistrict: "ประชาธิปัตย์"
  },
  {
    code: 130302,
    province: "ปทุมธานี",
    district: "อำเภอธัญบุรี",
    subDistrict: "บึงยี่โถ"
  },
  {
    code: 130303,
    province: "ปทุมธานี",
    district: "อำเภอธัญบุรี",
    subDistrict: "รังสิต"
  },
  {
    code: 130304,
    province: "ปทุมธานี",
    district: "อำเภอธัญบุรี",
    subDistrict: "ลำผักกูด"
  },
  {
    code: 130305,
    province: "ปทุมธานี",
    district: "อำเภอธัญบุรี",
    subDistrict: "บึงสนั่น"
  },
  {
    code: 130306,
    province: "ปทุมธานี",
    district: "อำเภอธัญบุรี",
    subDistrict: "บึงน้ำรักษ์"
  },
  {
    code: 130401,
    province: "ปทุมธานี",
    district: "อำเภอหนองเสือ",
    subDistrict: "บึงบา"
  },
  {
    code: 130402,
    province: "ปทุมธานี",
    district: "อำเภอหนองเสือ",
    subDistrict: "บึงบอน"
  },
  {
    code: 130403,
    province: "ปทุมธานี",
    district: "อำเภอหนองเสือ",
    subDistrict: "บึงกาสาม"
  },
  {
    code: 130404,
    province: "ปทุมธานี",
    district: "อำเภอหนองเสือ",
    subDistrict: "บึงชำอ้อ"
  },
  {
    code: 130405,
    province: "ปทุมธานี",
    district: "อำเภอหนองเสือ",
    subDistrict: "หนองสามวัง"
  },
  {
    code: 130406,
    province: "ปทุมธานี",
    district: "อำเภอหนองเสือ",
    subDistrict: "ศาลาครุ"
  },
  {
    code: 130407,
    province: "ปทุมธานี",
    district: "อำเภอหนองเสือ",
    subDistrict: "นพรัตน์"
  },
  {
    code: 130501,
    province: "ปทุมธานี",
    district: "อำเภอลาดหลุมแก้ว",
    subDistrict: "ระแหง"
  },
  {
    code: 130502,
    province: "ปทุมธานี",
    district: "อำเภอลาดหลุมแก้ว",
    subDistrict: "ลาดหลุมแก้ว"
  },
  {
    code: 130503,
    province: "ปทุมธานี",
    district: "อำเภอลาดหลุมแก้ว",
    subDistrict: "คูบางหลวง"
  },
  {
    code: 130504,
    province: "ปทุมธานี",
    district: "อำเภอลาดหลุมแก้ว",
    subDistrict: "คูขวาง"
  },
  {
    code: 130505,
    province: "ปทุมธานี",
    district: "อำเภอลาดหลุมแก้ว",
    subDistrict: "คลองพระอุดม"
  },
  {
    code: 130506,
    province: "ปทุมธานี",
    district: "อำเภอลาดหลุมแก้ว",
    subDistrict: "บ่อเงิน"
  },
  {
    code: 130507,
    province: "ปทุมธานี",
    district: "อำเภอลาดหลุมแก้ว",
    subDistrict: "หน้าไม้"
  },
  {
    code: 130601,
    province: "ปทุมธานี",
    district: "อำเภอลำลูกกา",
    subDistrict: "คูคต"
  },
  {
    code: 130602,
    province: "ปทุมธานี",
    district: "อำเภอลำลูกกา",
    subDistrict: "ลาดสวาย"
  },
  {
    code: 130603,
    province: "ปทุมธานี",
    district: "อำเภอลำลูกกา",
    subDistrict: "บึงคำพร้อย"
  },
  {
    code: 130604,
    province: "ปทุมธานี",
    district: "อำเภอลำลูกกา",
    subDistrict: "ลำลูกกา"
  },
  {
    code: 130605,
    province: "ปทุมธานี",
    district: "อำเภอลำลูกกา",
    subDistrict: "บึงทองหลาง"
  },
  {
    code: 130606,
    province: "ปทุมธานี",
    district: "อำเภอลำลูกกา",
    subDistrict: "ลำไทร"
  },
  {
    code: 130607,
    province: "ปทุมธานี",
    district: "อำเภอลำลูกกา",
    subDistrict: "บึงคอไห"
  },
  {
    code: 130608,
    province: "ปทุมธานี",
    district: "อำเภอลำลูกกา",
    subDistrict: "พืชอุดม"
  },
  {
    code: 130701,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "บางเตย"
  },
  {
    code: 130702,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "คลองควาย"
  },
  {
    code: 130703,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "สามโคก"
  },
  {
    code: 130704,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "กระแชง"
  },
  {
    code: 130705,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "บางโพธิ์เหนือ"
  },
  {
    code: 130706,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "เชียงรากใหญ่"
  },
  {
    code: 130707,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "บ้านปทุม"
  },
  {
    code: 130708,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "บ้านงิ้ว"
  },
  {
    code: 130709,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "เชียงรากน้อย"
  },
  {
    code: 130710,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "บางกระบือ"
  },
  {
    code: 130711,
    province: "ปทุมธานี",
    district: "อำเภอสามโคก",
    subDistrict: "ท้ายเกาะ"
  },
  {
    code: 140101,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "ประตูชัย"
  },
  {
    code: 140102,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "กะมัง"
  },
  {
    code: 140103,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "หอรัตนไชย"
  },
  {
    code: 140104,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "หัวรอ"
  },
  {
    code: 140105,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "ท่าวาสุกรี"
  },
  {
    code: 140106,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "ไผ่ลิง"
  },
  {
    code: 140107,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "ปากกราน"
  },
  {
    code: 140108,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "ภูเขาทอง"
  },
  {
    code: 140109,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "สำเภาล่ม"
  },
  {
    code: 140110,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "สวนพริก"
  },
  {
    code: 140111,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "คลองตะเคียน"
  },
  {
    code: 140112,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "วัดตูม"
  },
  {
    code: 140113,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "หันตรา"
  },
  {
    code: 140114,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "ลุมพลี"
  },
  {
    code: 140115,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 140116,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "บ้านเกาะ"
  },
  {
    code: 140117,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "คลองสวนพลู"
  },
  {
    code: 140118,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "คลองสระบัว"
  },
  {
    code: 140119,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "เกาะเรียน"
  },
  {
    code: 140120,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "บ้านป้อม"
  },
  {
    code: 140121,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอพระนครศรีอยุธยา",
    subDistrict: "บ้านรุน"
  },
  {
    code: 140201,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอท่าเรือ",
    subDistrict: "ท่าเรือ"
  },
  {
    code: 140202,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอท่าเรือ",
    subDistrict: "จำปา"
  },
  {
    code: 140203,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอท่าเรือ",
    subDistrict: "ท่าหลวง"
  },
  {
    code: 140204,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอท่าเรือ",
    subDistrict: "บ้านร่อม"
  },
  {
    code: 140205,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอท่าเรือ",
    subDistrict: "ศาลาลอย"
  },
  {
    code: 140206,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอท่าเรือ",
    subDistrict: "วังแดง"
  },
  {
    code: 140207,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอท่าเรือ",
    subDistrict: "โพธิ์เอน"
  },
  {
    code: 140208,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอท่าเรือ",
    subDistrict: "ปากท่า"
  },
  {
    code: 140209,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอท่าเรือ",
    subDistrict: "หนองขนาก"
  },
  {
    code: 140210,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอท่าเรือ",
    subDistrict: "ท่าเจ้าสนุก"
  },
  {
    code: 140301,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "นครหลวง"
  },
  {
    code: 140302,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "ท่าช้าง"
  },
  {
    code: 140303,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "บ่อโพง"
  },
  {
    code: 140304,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "บ้านชุ้ง"
  },
  {
    code: 140305,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "ปากจั่น"
  },
  {
    code: 140306,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "บางระกำ"
  },
  {
    code: 140307,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "บางพระครู"
  },
  {
    code: 140308,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "แม่ลา"
  },
  {
    code: 140309,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "หนองปลิง"
  },
  {
    code: 140310,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "คลองสะแก"
  },
  {
    code: 140311,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "สามไถ"
  },
  {
    code: 140312,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอนครหลวง",
    subDistrict: "พระนอน"
  },
  {
    code: 140401,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "บางไทร"
  },
  {
    code: 140402,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "บางพลี"
  },
  {
    code: 140403,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "สนามชัย"
  },
  {
    code: 140404,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "บ้านแป้ง"
  },
  {
    code: 140405,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "หน้าไม้"
  },
  {
    code: 140406,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "บางยี่โท"
  },
  {
    code: 140407,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "แคออก"
  },
  {
    code: 140408,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "แคตก"
  },
  {
    code: 140409,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "ช่างเหล็ก"
  },
  {
    code: 140410,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "กระแชง"
  },
  {
    code: 140411,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "บ้านกลึง"
  },
  {
    code: 140412,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "ช้างน้อย"
  },
  {
    code: 140413,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "ห่อหมก"
  },
  {
    code: 140414,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "ไผ่พระ"
  },
  {
    code: 140415,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "กกแก้วบูรพา"
  },
  {
    code: 140416,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "ไม้ตรา"
  },
  {
    code: 140417,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "บ้านม้า"
  },
  {
    code: 140418,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "บ้านเกาะ"
  },
  {
    code: 140419,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "ราชคราม"
  },
  {
    code: 140420,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "ช้างใหญ่"
  },
  {
    code: 140421,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "โพแตง"
  },
  {
    code: 140422,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "เชียงรากน้อย"
  },
  {
    code: 140423,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางไทร",
    subDistrict: "โคกช้าง"
  },
  {
    code: 140501,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "บางบาล"
  },
  {
    code: 140502,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "วัดยม"
  },
  {
    code: 140503,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "ไทรน้อย"
  },
  {
    code: 140504,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "สะพานไทย"
  },
  {
    code: 140505,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "มหาพราหมณ์"
  },
  {
    code: 140506,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "กบเจา"
  },
  {
    code: 140507,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "บ้านคลัง"
  },
  {
    code: 140508,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "พระขาว"
  },
  {
    code: 140509,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "น้ำเต้า"
  },
  {
    code: 140510,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "ทางช้าง"
  },
  {
    code: 140511,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "วัดตะกู"
  },
  {
    code: 140512,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "บางหลวง"
  },
  {
    code: 140513,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "บางหลวงโดด"
  },
  {
    code: 140514,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "บางหัก"
  },
  {
    code: 140515,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "บางชะนี"
  },
  {
    code: 140516,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางบาล",
    subDistrict: "บ้านกุ่ม"
  },
  {
    code: 140601,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "บ้านเลน"
  },
  {
    code: 140602,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "เชียงรากน้อย"
  },
  {
    code: 140603,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "บ้านโพ"
  },
  {
    code: 140604,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "บ้านกรด"
  },
  {
    code: 140605,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "บางกระสั้น"
  },
  {
    code: 140606,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "คลองจิก"
  },
  {
    code: 140607,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "บ้านหว้า"
  },
  {
    code: 140608,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "วัดยม"
  },
  {
    code: 140609,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "บางประแดง"
  },
  {
    code: 140610,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "สามเรือน"
  },
  {
    code: 140611,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "เกาะเกิด"
  },
  {
    code: 140612,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "บ้านพลับ"
  },
  {
    code: 140613,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "บ้านแป้ง"
  },
  {
    code: 140614,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "คุ้งลาน"
  },
  {
    code: 140615,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "ตลิ่งชัน"
  },
  {
    code: 140616,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "บ้านสร้าง"
  },
  {
    code: 140617,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "ตลาดเกรียบ"
  },
  {
    code: 140618,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะอิน",
    subDistrict: "ขนอนหลวง"
  },
  {
    code: 140701,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "บางปะหัน"
  },
  {
    code: 140702,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "ขยาย"
  },
  {
    code: 140703,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "บางเดื่อ"
  },
  {
    code: 140704,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "เสาธง"
  },
  {
    code: 140705,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "ทางกลาง"
  },
  {
    code: 140706,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "บางเพลิง"
  },
  {
    code: 140707,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "หันสัง"
  },
  {
    code: 140708,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "บางนางร้า"
  },
  {
    code: 140709,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "ตานิม"
  },
  {
    code: 140710,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "ทับน้ำ"
  },
  {
    code: 140711,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "บ้านม้า"
  },
  {
    code: 140712,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "ขวัญเมือง"
  },
  {
    code: 140713,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "บ้านลี่"
  },
  {
    code: 140714,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "โพธิ์สามต้น"
  },
  {
    code: 140715,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "พุทเลา"
  },
  {
    code: 140716,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "ตาลเอน"
  },
  {
    code: 140717,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางปะหัน",
    subDistrict: "บ้านขล้อ"
  },
  {
    code: 140801,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "ผักไห่"
  },
  {
    code: 140802,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "อมฤต"
  },
  {
    code: 140803,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "บ้านแค"
  },
  {
    code: 140804,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "ลาดน้ำเค็ม"
  },
  {
    code: 140805,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "ตาลาน"
  },
  {
    code: 140806,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "ท่าดินแดง"
  },
  {
    code: 140807,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "ดอนลาน"
  },
  {
    code: 140808,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "นาคู"
  },
  {
    code: 140809,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "กุฎี"
  },
  {
    code: 140810,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "ลำตะเคียน"
  },
  {
    code: 140811,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "โคกช้าง"
  },
  {
    code: 140812,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "จักราช"
  },
  {
    code: 140813,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "หนองน้ำใหญ่"
  },
  {
    code: 140814,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "ลาดชิด"
  },
  {
    code: 140815,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "หน้าโคก"
  },
  {
    code: 140816,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอผักไห่",
    subDistrict: "บ้านใหญ่"
  },
  {
    code: 140901,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอภาชี",
    subDistrict: "ภาชี"
  },
  {
    code: 140902,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอภาชี",
    subDistrict: "โคกม่วง"
  },
  {
    code: 140903,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอภาชี",
    subDistrict: "ระโสม"
  },
  {
    code: 140904,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอภาชี",
    subDistrict: "หนองน้ำใส"
  },
  {
    code: 140905,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอภาชี",
    subDistrict: "ดอนหญ้านาง"
  },
  {
    code: 140906,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอภาชี",
    subDistrict: "ไผ่ล้อม"
  },
  {
    code: 140907,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอภาชี",
    subDistrict: "กระจิว"
  },
  {
    code: 140908,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอภาชี",
    subDistrict: "พระแก้ว"
  },
  {
    code: 141001,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอลาดบัวหลวง",
    subDistrict: "ลาดบัวหลวง"
  },
  {
    code: 141002,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอลาดบัวหลวง",
    subDistrict: "หลักชัย"
  },
  {
    code: 141003,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอลาดบัวหลวง",
    subDistrict: "สามเมือง"
  },
  {
    code: 141004,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอลาดบัวหลวง",
    subDistrict: "พระยาบันลือ"
  },
  {
    code: 141005,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอลาดบัวหลวง",
    subDistrict: "สิงหนาท"
  },
  {
    code: 141006,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอลาดบัวหลวง",
    subDistrict: "คู้สลอด"
  },
  {
    code: 141007,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอลาดบัวหลวง",
    subDistrict: "คลองพระยาบันลือ"
  },
  {
    code: 141101,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอวังน้อย",
    subDistrict: "ลำตาเสา"
  },
  {
    code: 141102,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอวังน้อย",
    subDistrict: "บ่อตาโล่"
  },
  {
    code: 141103,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอวังน้อย",
    subDistrict: "วังน้อย"
  },
  {
    code: 141104,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอวังน้อย",
    subDistrict: "ลำไทร"
  },
  {
    code: 141105,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอวังน้อย",
    subDistrict: "สนับทึบ"
  },
  {
    code: 141106,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอวังน้อย",
    subDistrict: "พยอม"
  },
  {
    code: 141107,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอวังน้อย",
    subDistrict: "หันตะเภา"
  },
  {
    code: 141108,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอวังน้อย",
    subDistrict: "วังจุฬา"
  },
  {
    code: 141109,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอวังน้อย",
    subDistrict: "ข้าวงาม"
  },
  {
    code: 141110,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอวังน้อย",
    subDistrict: "ชะแมบ"
  },
  {
    code: 141201,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "เสนา"
  },
  {
    code: 141202,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "บ้านแพน"
  },
  {
    code: 141203,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "เจ้าเจ็ด"
  },
  {
    code: 141204,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "สามกอ"
  },
  {
    code: 141205,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "บางนมโค"
  },
  {
    code: 141206,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "หัวเวียง"
  },
  {
    code: 141207,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "มารวิชัย"
  },
  {
    code: 141208,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "บ้านโพธิ์"
  },
  {
    code: 141209,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "รางจรเข้"
  },
  {
    code: 141210,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "บ้านกระทุ่ม"
  },
  {
    code: 141211,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "บ้านแถว"
  },
  {
    code: 141212,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "ชายนา"
  },
  {
    code: 141213,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "สามตุ่ม"
  },
  {
    code: 141214,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "ลาดงา"
  },
  {
    code: 141215,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "ดอนทอง"
  },
  {
    code: 141216,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "บ้านหลวง"
  },
  {
    code: 141217,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอเสนา",
    subDistrict: "เจ้าเสด็จ"
  },
  {
    code: 141301,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางซ้าย",
    subDistrict: "บางซ้าย"
  },
  {
    code: 141302,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางซ้าย",
    subDistrict: "แก้วฟ้า"
  },
  {
    code: 141303,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางซ้าย",
    subDistrict: "เต่าเล่า"
  },
  {
    code: 141304,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางซ้าย",
    subDistrict: "ปลายกลัด"
  },
  {
    code: 141305,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางซ้าย",
    subDistrict: "เทพมงคล"
  },
  {
    code: 141306,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบางซ้าย",
    subDistrict: "วังพัฒนา"
  },
  {
    code: 141401,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "คานหาม"
  },
  {
    code: 141402,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "บ้านช้าง"
  },
  {
    code: 141403,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "สามบัณฑิต"
  },
  {
    code: 141404,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "บ้านหีบ"
  },
  {
    code: 141405,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "หนองไม้ซุง"
  },
  {
    code: 141406,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "อุทัย"
  },
  {
    code: 141407,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "เสนา"
  },
  {
    code: 141408,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "หนองน้ำส้ม"
  },
  {
    code: 141409,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "โพสาวหาญ"
  },
  {
    code: 141410,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "ธนู"
  },
  {
    code: 141411,
    province: "พระนครศรีอยุธยา",
    district: "อำเภออุทัย",
    subDistrict: "ข้าวเม่า"
  },
  {
    code: 141501,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "หัวไผ่"
  },
  {
    code: 141502,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "กะทุ่ม"
  },
  {
    code: 141503,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "มหาราช"
  },
  {
    code: 141504,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "น้ำเต้า"
  },
  {
    code: 141505,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "บางนา"
  },
  {
    code: 141506,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "โรงช้าง"
  },
  {
    code: 141507,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "เจ้าปลุก"
  },
  {
    code: 141508,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "พิตเพียน"
  },
  {
    code: 141509,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "บ้านนา"
  },
  {
    code: 141510,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "บ้านขวาง"
  },
  {
    code: 141511,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "ท่าตอ"
  },
  {
    code: 141512,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอมหาราช",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 141601,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบ้านแพรก",
    subDistrict: "บ้านแพรก"
  },
  {
    code: 141602,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบ้านแพรก",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 141603,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบ้านแพรก",
    subDistrict: "สำพะเนียง"
  },
  {
    code: 141604,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบ้านแพรก",
    subDistrict: "คลองน้อย"
  },
  {
    code: 141605,
    province: "พระนครศรีอยุธยา",
    district: "อำเภอบ้านแพรก",
    subDistrict: "สองห้อง"
  },
  {
    code: 150101,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "ตลาดหลวง"
  },
  {
    code: 150102,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "บางแก้ว"
  },
  {
    code: 150103,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "ศาลาแดง"
  },
  {
    code: 150104,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "ป่างิ้ว"
  },
  {
    code: 150105,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "บ้านแห"
  },
  {
    code: 150106,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "ตลาดกรวด"
  },
  {
    code: 150107,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "มหาดไทย"
  },
  {
    code: 150108,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "บ้านอิฐ"
  },
  {
    code: 150109,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "หัวไผ่"
  },
  {
    code: 150110,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "จำปาหล่อ"
  },
  {
    code: 150111,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "โพสะ"
  },
  {
    code: 150112,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "บ้านรี"
  },
  {
    code: 150113,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "คลองวัว"
  },
  {
    code: 150114,
    province: "อ่างทอง",
    district: "อำเภอเมืองอ่างทอง",
    subDistrict: "ย่านซื่อ"
  },
  {
    code: 150201,
    province: "อ่างทอง",
    district: "อำเภอไชโย",
    subDistrict: "จรเข้ร้อง"
  },
  {
    code: 150202,
    province: "อ่างทอง",
    district: "อำเภอไชโย",
    subDistrict: "ไชยภูมิ"
  },
  {
    code: 150203,
    province: "อ่างทอง",
    district: "อำเภอไชโย",
    subDistrict: "ชัยฤทธิ์"
  },
  {
    code: 150204,
    province: "อ่างทอง",
    district: "อำเภอไชโย",
    subDistrict: "เทวราช"
  },
  {
    code: 150205,
    province: "อ่างทอง",
    district: "อำเภอไชโย",
    subDistrict: "ราชสถิตย์"
  },
  {
    code: 150206,
    province: "อ่างทอง",
    district: "อำเภอไชโย",
    subDistrict: "ไชโย"
  },
  {
    code: 150207,
    province: "อ่างทอง",
    district: "อำเภอไชโย",
    subDistrict: "หลักฟ้า"
  },
  {
    code: 150208,
    province: "อ่างทอง",
    district: "อำเภอไชโย",
    subDistrict: "ชะไว"
  },
  {
    code: 150209,
    province: "อ่างทอง",
    district: "อำเภอไชโย",
    subDistrict: "ตรีณรงค์"
  },
  {
    code: 150301,
    province: "อ่างทอง",
    district: "อำเภอป่าโมก",
    subDistrict: "บางปลากด"
  },
  {
    code: 150302,
    province: "อ่างทอง",
    district: "อำเภอป่าโมก",
    subDistrict: "ป่าโมก"
  },
  {
    code: 150303,
    province: "อ่างทอง",
    district: "อำเภอป่าโมก",
    subDistrict: "สายทอง"
  },
  {
    code: 150304,
    province: "อ่างทอง",
    district: "อำเภอป่าโมก",
    subDistrict: "โรงช้าง"
  },
  {
    code: 150305,
    province: "อ่างทอง",
    district: "อำเภอป่าโมก",
    subDistrict: "บางเสด็จ"
  },
  {
    code: 150306,
    province: "อ่างทอง",
    district: "อำเภอป่าโมก",
    subDistrict: "นรสิงห์"
  },
  {
    code: 150307,
    province: "อ่างทอง",
    district: "อำเภอป่าโมก",
    subDistrict: "เอกราช"
  },
  {
    code: 150308,
    province: "อ่างทอง",
    district: "อำเภอป่าโมก",
    subDistrict: "โผงเผง"
  },
  {
    code: 150401,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "อ่างแก้ว"
  },
  {
    code: 150402,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "อินทประมูล"
  },
  {
    code: 150403,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "บางพลับ"
  },
  {
    code: 150404,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "หนองแม่ไก่"
  },
  {
    code: 150405,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "รำมะสัก"
  },
  {
    code: 150406,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "บางระกำ"
  },
  {
    code: 150407,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "โพธิ์รังนก"
  },
  {
    code: 150408,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "องครักษ์"
  },
  {
    code: 150409,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "โคกพุทรา"
  },
  {
    code: 150410,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "ยางช้าย"
  },
  {
    code: 150411,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "บ่อแร่"
  },
  {
    code: 150412,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "ทางพระ"
  },
  {
    code: 150413,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "สามง่าม"
  },
  {
    code: 150414,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "บางเจ้าฉ่า"
  },
  {
    code: 150415,
    province: "อ่างทอง",
    district: "อำเภอโพธิ์ทอง",
    subDistrict: "คำหยาด"
  },
  {
    code: 150501,
    province: "อ่างทอง",
    district: "อำเภอแสวงหา",
    subDistrict: "แสวงหา"
  },
  {
    code: 150502,
    province: "อ่างทอง",
    district: "อำเภอแสวงหา",
    subDistrict: "ศรีพราน"
  },
  {
    code: 150503,
    province: "อ่างทอง",
    district: "อำเภอแสวงหา",
    subDistrict: "บ้านพราน"
  },
  {
    code: 150504,
    province: "อ่างทอง",
    district: "อำเภอแสวงหา",
    subDistrict: "วังน้ำเย็น"
  },
  {
    code: 150505,
    province: "อ่างทอง",
    district: "อำเภอแสวงหา",
    subDistrict: "สีบัวทอง"
  },
  {
    code: 150506,
    province: "อ่างทอง",
    district: "อำเภอแสวงหา",
    subDistrict: "ห้วยไผ่"
  },
  {
    code: 150507,
    province: "อ่างทอง",
    district: "อำเภอแสวงหา",
    subDistrict: "จำลอง"
  },
  {
    code: 150601,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "ไผ่จำศิล"
  },
  {
    code: 150602,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "ศาลเจ้าโรงทอง"
  },
  {
    code: 150603,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "ไผ่ดำพัฒนา"
  },
  {
    code: 150604,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "สาวร้องไห้"
  },
  {
    code: 150605,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "ท่าช้าง"
  },
  {
    code: 150606,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "ยี่ล้น"
  },
  {
    code: 150607,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "บางจัก"
  },
  {
    code: 150608,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "ห้วยคันแหลน"
  },
  {
    code: 150609,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "คลองขนาก"
  },
  {
    code: 150610,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "ไผ่วง"
  },
  {
    code: 150611,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "สี่ร้อย"
  },
  {
    code: 150612,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "ม่วงเตี้ย"
  },
  {
    code: 150613,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "หัวตะพาน"
  },
  {
    code: 150614,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "หลักแก้ว"
  },
  {
    code: 150615,
    province: "อ่างทอง",
    district: "อำเภอวิเศษชัยชาญ",
    subDistrict: "ตลาดใหม่"
  },
  {
    code: 150701,
    province: "อ่างทอง",
    district: "อำเภอสามโก้",
    subDistrict: "สามโก้"
  },
  {
    code: 150702,
    province: "อ่างทอง",
    district: "อำเภอสามโก้",
    subDistrict: "ราษฎรพัฒนา"
  },
  {
    code: 150703,
    province: "อ่างทอง",
    district: "อำเภอสามโก้",
    subDistrict: "อบทม"
  },
  {
    code: 150704,
    province: "อ่างทอง",
    district: "อำเภอสามโก้",
    subDistrict: "โพธิ์ม่วงพันธ์"
  },
  {
    code: 150705,
    province: "อ่างทอง",
    district: "อำเภอสามโก้",
    subDistrict: "มงคลธรรมนิมิต"
  },
  {
    code: 160101,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "ทะเลชุบศร"
  },
  {
    code: 160102,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "ท่าหิน"
  },
  {
    code: 160103,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "กกโก"
  },
  {
    code: 160104,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "โก่งธนู"
  },
  {
    code: 160105,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "เขาพระงาม"
  },
  {
    code: 160106,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "เขาสามยอด"
  },
  {
    code: 160107,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "โคกกะเทียม"
  },
  {
    code: 160108,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "โคกลำพาน"
  },
  {
    code: 160109,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "โคกตูม"
  },
  {
    code: 160110,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "งิ้วราย"
  },
  {
    code: 160111,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "ดอนโพธิ์"
  },
  {
    code: 160112,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "ตะลุง"
  },
  {
    code: 160114,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "ท่าแค"
  },
  {
    code: 160115,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "ท่าศาลา"
  },
  {
    code: 160116,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "นิคมสร้างตนเอง"
  },
  {
    code: 160117,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "บางขันหมาก"
  },
  {
    code: 160118,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "บ้านข่อย"
  },
  {
    code: 160119,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "ท้ายตลาด"
  },
  {
    code: 160120,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "ป่าตาล"
  },
  {
    code: 160121,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "พรหมมาสตร์"
  },
  {
    code: 160122,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "โพธิ์เก้าต้น"
  },
  {
    code: 160123,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "โพธิ์ตรุ"
  },
  {
    code: 160124,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "สี่คลอง"
  },
  {
    code: 160125,
    province: "ลพบุรี",
    district: "อำเภอเมืองลพบุรี",
    subDistrict: "ถนนใหญ่"
  },
  {
    code: 160201,
    province: "ลพบุรี",
    district: "อำเภอพัฒนานิคม",
    subDistrict: "พัฒนานิคม"
  },
  {
    code: 160202,
    province: "ลพบุรี",
    district: "อำเภอพัฒนานิคม",
    subDistrict: "ช่องสาริกา"
  },
  {
    code: 160203,
    province: "ลพบุรี",
    district: "อำเภอพัฒนานิคม",
    subDistrict: "มะนาวหวาน"
  },
  {
    code: 160204,
    province: "ลพบุรี",
    district: "อำเภอพัฒนานิคม",
    subDistrict: "ดีลัง"
  },
  {
    code: 160205,
    province: "ลพบุรี",
    district: "อำเภอพัฒนานิคม",
    subDistrict: "โคกสลุง"
  },
  {
    code: 160206,
    province: "ลพบุรี",
    district: "อำเภอพัฒนานิคม",
    subDistrict: "ชอนน้อย"
  },
  {
    code: 160207,
    province: "ลพบุรี",
    district: "อำเภอพัฒนานิคม",
    subDistrict: "หนองบัว"
  },
  {
    code: 160208,
    province: "ลพบุรี",
    district: "อำเภอพัฒนานิคม",
    subDistrict: "ห้วยขุนราม"
  },
  {
    code: 160209,
    province: "ลพบุรี",
    district: "อำเภอพัฒนานิคม",
    subDistrict: "น้ำสุด"
  },
  {
    code: 160301,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "โคกสำโรง"
  },
  {
    code: 160302,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "เกาะแก้ว"
  },
  {
    code: 160303,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "ถลุงเหล็ก"
  },
  {
    code: 160304,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "หลุมข้าว"
  },
  {
    code: 160305,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "ห้วยโป่ง"
  },
  {
    code: 160306,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "คลองเกตุ"
  },
  {
    code: 160307,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "สะแกราบ"
  },
  {
    code: 160308,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "เพนียด"
  },
  {
    code: 160309,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "วังเพลิง"
  },
  {
    code: 160310,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "ดงมะรุม"
  },
  {
    code: 160318,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "วังขอนขว้าง"
  },
  {
    code: 160320,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "วังจั่น"
  },
  {
    code: 160322,
    province: "ลพบุรี",
    district: "อำเภอโคกสำโรง",
    subDistrict: "หนองแขม"
  },
  {
    code: 160401,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "ลำนารายณ์"
  },
  {
    code: 160402,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "ชัยนารายณ์"
  },
  {
    code: 160403,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "ศิลาทิพย์"
  },
  {
    code: 160404,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "ห้วยหิน"
  },
  {
    code: 160405,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "ม่วงค่อม"
  },
  {
    code: 160406,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "บัวชุม"
  },
  {
    code: 160407,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "ท่าดินดำ"
  },
  {
    code: 160408,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "มะกอกหวาน"
  },
  {
    code: 160409,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "ซับตะเคียน"
  },
  {
    code: 160410,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "นาโสม"
  },
  {
    code: 160411,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "หนองยายโต๊ะ"
  },
  {
    code: 160412,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "เกาะรัง"
  },
  {
    code: 160414,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "ท่ามะนาว"
  },
  {
    code: 160417,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "นิคมลำนารายณ์"
  },
  {
    code: 160418,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "ชัยบาดาล"
  },
  {
    code: 160419,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "บ้านใหม่สามัคคี"
  },
  {
    code: 160422,
    province: "ลพบุรี",
    district: "อำเภอชัยบาดาล",
    subDistrict: "เขาแหลม"
  },
  {
    code: 160501,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "ท่าวุ้ง"
  },
  {
    code: 160502,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "บางคู้"
  },
  {
    code: 160503,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "โพตลาดแก้ว"
  },
  {
    code: 160504,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "บางลี่"
  },
  {
    code: 160505,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "บางงา"
  },
  {
    code: 160506,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "โคกสลุด"
  },
  {
    code: 160507,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "เขาสมอคอน"
  },
  {
    code: 160508,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "หัวสำโรง"
  },
  {
    code: 160509,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "ลาดสาลี่"
  },
  {
    code: 160510,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "บ้านเบิก"
  },
  {
    code: 160511,
    province: "ลพบุรี",
    district: "อำเภอท่าวุ้ง",
    subDistrict: "มุจลินท์"
  },
  {
    code: 160601,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "ไผ่ใหญ่"
  },
  {
    code: 160602,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "บ้านทราย"
  },
  {
    code: 160603,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "บ้านกล้วย"
  },
  {
    code: 160604,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "ดงพลับ"
  },
  {
    code: 160605,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "บ้านชี"
  },
  {
    code: 160606,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "พุคา"
  },
  {
    code: 160607,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "หินปัก"
  },
  {
    code: 160608,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "บางพึ่ง"
  },
  {
    code: 160609,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "หนองทรายขาว"
  },
  {
    code: 160610,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "บางกะพี้"
  },
  {
    code: 160611,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "หนองเต่า"
  },
  {
    code: 160612,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "โพนทอง"
  },
  {
    code: 160613,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "บางขาม"
  },
  {
    code: 160614,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "ดอนดึง"
  },
  {
    code: 160615,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "ชอนม่วง"
  },
  {
    code: 160616,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "หนองกระเบียน"
  },
  {
    code: 160617,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "สายห้วยแก้ว"
  },
  {
    code: 160618,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "มหาสอน"
  },
  {
    code: 160619,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "บ้านหมี่"
  },
  {
    code: 160620,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "เชียงงา"
  },
  {
    code: 160621,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "หนองเมือง"
  },
  {
    code: 160622,
    province: "ลพบุรี",
    district: "อำเภอบ้านหมี่",
    subDistrict: "สนามแจง"
  },
  {
    code: 160701,
    province: "ลพบุรี",
    district: "อำเภอท่าหลวง",
    subDistrict: "ท่าหลวง"
  },
  {
    code: 160702,
    province: "ลพบุรี",
    district: "อำเภอท่าหลวง",
    subDistrict: "แก่งผักกูด"
  },
  {
    code: 160703,
    province: "ลพบุรี",
    district: "อำเภอท่าหลวง",
    subDistrict: "ซับจำปา"
  },
  {
    code: 160704,
    province: "ลพบุรี",
    district: "อำเภอท่าหลวง",
    subDistrict: "หนองผักแว่น"
  },
  {
    code: 160705,
    province: "ลพบุรี",
    district: "อำเภอท่าหลวง",
    subDistrict: "ทะเลวังวัด"
  },
  {
    code: 160706,
    province: "ลพบุรี",
    district: "อำเภอท่าหลวง",
    subDistrict: "หัวลำ"
  },
  {
    code: 160801,
    province: "ลพบุรี",
    district: "อำเภอสระโบสถ์",
    subDistrict: "สระโบสถ์"
  },
  {
    code: 160802,
    province: "ลพบุรี",
    district: "อำเภอสระโบสถ์",
    subDistrict: "มหาโพธิ"
  },
  {
    code: 160803,
    province: "ลพบุรี",
    district: "อำเภอสระโบสถ์",
    subDistrict: "ทุ่งท่าช้าง"
  },
  {
    code: 160804,
    province: "ลพบุรี",
    district: "อำเภอสระโบสถ์",
    subDistrict: "ห้วยใหญ่"
  },
  {
    code: 160805,
    province: "ลพบุรี",
    district: "อำเภอสระโบสถ์",
    subDistrict: "นิยมชัย"
  },
  {
    code: 160901,
    province: "ลพบุรี",
    district: "อำเภอโคกเจริญ",
    subDistrict: "โคกเจริญ"
  },
  {
    code: 160902,
    province: "ลพบุรี",
    district: "อำเภอโคกเจริญ",
    subDistrict: "ยางราก"
  },
  {
    code: 160903,
    province: "ลพบุรี",
    district: "อำเภอโคกเจริญ",
    subDistrict: "หนองมะค่า"
  },
  {
    code: 160904,
    province: "ลพบุรี",
    district: "อำเภอโคกเจริญ",
    subDistrict: "วังทอง"
  },
  {
    code: 160905,
    province: "ลพบุรี",
    district: "อำเภอโคกเจริญ",
    subDistrict: "โคกแสมสาร"
  },
  {
    code: 161001,
    province: "ลพบุรี",
    district: "อำเภอลำสนธิ",
    subDistrict: "ลำสนธิ"
  },
  {
    code: 161002,
    province: "ลพบุรี",
    district: "อำเภอลำสนธิ",
    subDistrict: "ซับสมบูรณ์"
  },
  {
    code: 161003,
    province: "ลพบุรี",
    district: "อำเภอลำสนธิ",
    subDistrict: "หนองรี"
  },
  {
    code: 161004,
    province: "ลพบุรี",
    district: "อำเภอลำสนธิ",
    subDistrict: "กุดตาเพชร"
  },
  {
    code: 161005,
    province: "ลพบุรี",
    district: "อำเภอลำสนธิ",
    subDistrict: "เขารวก"
  },
  {
    code: 161006,
    province: "ลพบุรี",
    district: "อำเภอลำสนธิ",
    subDistrict: "เขาน้อย"
  },
  {
    code: 161101,
    province: "ลพบุรี",
    district: "อำเภอหนองม่วง",
    subDistrict: "หนองม่วง"
  },
  {
    code: 161102,
    province: "ลพบุรี",
    district: "อำเภอหนองม่วง",
    subDistrict: "บ่อทอง"
  },
  {
    code: 161103,
    province: "ลพบุรี",
    district: "อำเภอหนองม่วง",
    subDistrict: "ดงดินแดง"
  },
  {
    code: 161104,
    province: "ลพบุรี",
    district: "อำเภอหนองม่วง",
    subDistrict: "ชอนสมบูรณ์"
  },
  {
    code: 161105,
    province: "ลพบุรี",
    district: "อำเภอหนองม่วง",
    subDistrict: "ยางโทน"
  },
  {
    code: 161106,
    province: "ลพบุรี",
    district: "อำเภอหนองม่วง",
    subDistrict: "ชอนสารเดช"
  },
  {
    code: 170101,
    province: "สิงห์บุรี",
    district: "อำเภอเมืองสิงห์บุรี",
    subDistrict: "บางพุทรา"
  },
  {
    code: 170102,
    province: "สิงห์บุรี",
    district: "อำเภอเมืองสิงห์บุรี",
    subDistrict: "บางมัญ"
  },
  {
    code: 170103,
    province: "สิงห์บุรี",
    district: "อำเภอเมืองสิงห์บุรี",
    subDistrict: "โพกรวม"
  },
  {
    code: 170104,
    province: "สิงห์บุรี",
    district: "อำเภอเมืองสิงห์บุรี",
    subDistrict: "ม่วงหมู่"
  },
  {
    code: 170105,
    province: "สิงห์บุรี",
    district: "อำเภอเมืองสิงห์บุรี",
    subDistrict: "หัวไผ่"
  },
  {
    code: 170106,
    province: "สิงห์บุรี",
    district: "อำเภอเมืองสิงห์บุรี",
    subDistrict: "ต้นโพธิ์"
  },
  {
    code: 170107,
    province: "สิงห์บุรี",
    district: "อำเภอเมืองสิงห์บุรี",
    subDistrict: "จักรสีห์"
  },
  {
    code: 170108,
    province: "สิงห์บุรี",
    district: "อำเภอเมืองสิงห์บุรี",
    subDistrict: "บางกระบือ"
  },
  {
    code: 170201,
    province: "สิงห์บุรี",
    district: "อำเภอบางระจัน",
    subDistrict: "สิงห์"
  },
  {
    code: 170202,
    province: "สิงห์บุรี",
    district: "อำเภอบางระจัน",
    subDistrict: "ไม้ดัด"
  },
  {
    code: 170203,
    province: "สิงห์บุรี",
    district: "อำเภอบางระจัน",
    subDistrict: "เชิงกลัด"
  },
  {
    code: 170204,
    province: "สิงห์บุรี",
    district: "อำเภอบางระจัน",
    subDistrict: "โพชนไก่"
  },
  {
    code: 170205,
    province: "สิงห์บุรี",
    district: "อำเภอบางระจัน",
    subDistrict: "แม่ลา"
  },
  {
    code: 170206,
    province: "สิงห์บุรี",
    district: "อำเภอบางระจัน",
    subDistrict: "บ้านจ่า"
  },
  {
    code: 170207,
    province: "สิงห์บุรี",
    district: "อำเภอบางระจัน",
    subDistrict: "พักทัน"
  },
  {
    code: 170208,
    province: "สิงห์บุรี",
    district: "อำเภอบางระจัน",
    subDistrict: "สระแจง"
  },
  {
    code: 170301,
    province: "สิงห์บุรี",
    district: "อำเภอค่ายบางระจัน",
    subDistrict: "โพทะเล"
  },
  {
    code: 170302,
    province: "สิงห์บุรี",
    district: "อำเภอค่ายบางระจัน",
    subDistrict: "บางระจัน"
  },
  {
    code: 170303,
    province: "สิงห์บุรี",
    district: "อำเภอค่ายบางระจัน",
    subDistrict: "โพสังโฆ"
  },
  {
    code: 170304,
    province: "สิงห์บุรี",
    district: "อำเภอค่ายบางระจัน",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 170305,
    province: "สิงห์บุรี",
    district: "อำเภอค่ายบางระจัน",
    subDistrict: "คอทราย"
  },
  {
    code: 170306,
    province: "สิงห์บุรี",
    district: "อำเภอค่ายบางระจัน",
    subDistrict: "หนองกระทุ่ม"
  },
  {
    code: 170401,
    province: "สิงห์บุรี",
    district: "อำเภอพรหมบุรี",
    subDistrict: "พระงาม"
  },
  {
    code: 170402,
    province: "สิงห์บุรี",
    district: "อำเภอพรหมบุรี",
    subDistrict: "พรหมบุรี"
  },
  {
    code: 170403,
    province: "สิงห์บุรี",
    district: "อำเภอพรหมบุรี",
    subDistrict: "บางน้ำเชี่ยว"
  },
  {
    code: 170404,
    province: "สิงห์บุรี",
    district: "อำเภอพรหมบุรี",
    subDistrict: "บ้านหม้อ"
  },
  {
    code: 170405,
    province: "สิงห์บุรี",
    district: "อำเภอพรหมบุรี",
    subDistrict: "บ้านแป้ง"
  },
  {
    code: 170406,
    province: "สิงห์บุรี",
    district: "อำเภอพรหมบุรี",
    subDistrict: "หัวป่า"
  },
  {
    code: 170407,
    province: "สิงห์บุรี",
    district: "อำเภอพรหมบุรี",
    subDistrict: "โรงช้าง"
  },
  {
    code: 170501,
    province: "สิงห์บุรี",
    district: "อำเภอท่าช้าง",
    subDistrict: "ถอนสมอ"
  },
  {
    code: 170502,
    province: "สิงห์บุรี",
    district: "อำเภอท่าช้าง",
    subDistrict: "โพประจักษ์"
  },
  {
    code: 170503,
    province: "สิงห์บุรี",
    district: "อำเภอท่าช้าง",
    subDistrict: "วิหารขาว"
  },
  {
    code: 170504,
    province: "สิงห์บุรี",
    district: "อำเภอท่าช้าง",
    subDistrict: "พิกุลทอง"
  },
  {
    code: 170601,
    province: "สิงห์บุรี",
    district: "อำเภออินทร์บุรี",
    subDistrict: "อินทร์บุรี"
  },
  {
    code: 170602,
    province: "สิงห์บุรี",
    district: "อำเภออินทร์บุรี",
    subDistrict: "ประศุก"
  },
  {
    code: 170603,
    province: "สิงห์บุรี",
    district: "อำเภออินทร์บุรี",
    subDistrict: "ทับยา"
  },
  {
    code: 170604,
    province: "สิงห์บุรี",
    district: "อำเภออินทร์บุรี",
    subDistrict: "งิ้วราย"
  },
  {
    code: 170605,
    province: "สิงห์บุรี",
    district: "อำเภออินทร์บุรี",
    subDistrict: "ชีน้ำร้าย"
  },
  {
    code: 170606,
    province: "สิงห์บุรี",
    district: "อำเภออินทร์บุรี",
    subDistrict: "ท่างาม"
  },
  {
    code: 170607,
    province: "สิงห์บุรี",
    district: "อำเภออินทร์บุรี",
    subDistrict: "น้ำตาล"
  },
  {
    code: 170608,
    province: "สิงห์บุรี",
    district: "อำเภออินทร์บุรี",
    subDistrict: "ทองเอน"
  },
  {
    code: 170609,
    province: "สิงห์บุรี",
    district: "อำเภออินทร์บุรี",
    subDistrict: "ห้วยชัน"
  },
  {
    code: 170610,
    province: "สิงห์บุรี",
    district: "อำเภออินทร์บุรี",
    subDistrict: "โพธิ์ชัย"
  },
  {
    code: 180101,
    province: "ชัยนาท",
    district: "อำเภอเมืองชัยนาท",
    subDistrict: "ในเมือง"
  },
  {
    code: 180102,
    province: "ชัยนาท",
    district: "อำเภอเมืองชัยนาท",
    subDistrict: "บ้านกล้วย"
  },
  {
    code: 180103,
    province: "ชัยนาท",
    district: "อำเภอเมืองชัยนาท",
    subDistrict: "ท่าชัย"
  },
  {
    code: 180104,
    province: "ชัยนาท",
    district: "อำเภอเมืองชัยนาท",
    subDistrict: "ชัยนาท"
  },
  {
    code: 180105,
    province: "ชัยนาท",
    district: "อำเภอเมืองชัยนาท",
    subDistrict: "เขาท่าพระ"
  },
  {
    code: 180106,
    province: "ชัยนาท",
    district: "อำเภอเมืองชัยนาท",
    subDistrict: "หาดท่าเสา"
  },
  {
    code: 180107,
    province: "ชัยนาท",
    district: "อำเภอเมืองชัยนาท",
    subDistrict: "ธรรมามูล"
  },
  {
    code: 180108,
    province: "ชัยนาท",
    district: "อำเภอเมืองชัยนาท",
    subDistrict: "เสือโฮก"
  },
  {
    code: 180109,
    province: "ชัยนาท",
    district: "อำเภอเมืองชัยนาท",
    subDistrict: "นางลือ"
  },
  {
    code: 180201,
    province: "ชัยนาท",
    district: "อำเภอมโนรมย์",
    subDistrict: "คุ้งสำเภา"
  },
  {
    code: 180202,
    province: "ชัยนาท",
    district: "อำเภอมโนรมย์",
    subDistrict: "วัดโคก"
  },
  {
    code: 180203,
    province: "ชัยนาท",
    district: "อำเภอมโนรมย์",
    subDistrict: "ศิลาดาน"
  },
  {
    code: 180204,
    province: "ชัยนาท",
    district: "อำเภอมโนรมย์",
    subDistrict: "ท่าฉนวน"
  },
  {
    code: 180205,
    province: "ชัยนาท",
    district: "อำเภอมโนรมย์",
    subDistrict: "หางน้ำสาคร"
  },
  {
    code: 180206,
    province: "ชัยนาท",
    district: "อำเภอมโนรมย์",
    subDistrict: "ไร่พัฒนา"
  },
  {
    code: 180207,
    province: "ชัยนาท",
    district: "อำเภอมโนรมย์",
    subDistrict: "อู่ตะเภา"
  },
  {
    code: 180301,
    province: "ชัยนาท",
    district: "อำเภอวัดสิงห์",
    subDistrict: "วัดสิงห์"
  },
  {
    code: 180302,
    province: "ชัยนาท",
    district: "อำเภอวัดสิงห์",
    subDistrict: "มะขามเฒ่า"
  },
  {
    code: 180303,
    province: "ชัยนาท",
    district: "อำเภอวัดสิงห์",
    subDistrict: "หนองน้อย"
  },
  {
    code: 180304,
    province: "ชัยนาท",
    district: "อำเภอวัดสิงห์",
    subDistrict: "หนองบัว"
  },
  {
    code: 180306,
    province: "ชัยนาท",
    district: "อำเภอวัดสิงห์",
    subDistrict: "หนองขุ่น"
  },
  {
    code: 180307,
    province: "ชัยนาท",
    district: "อำเภอวัดสิงห์",
    subDistrict: "บ่อแร่"
  },
  {
    code: 180311,
    province: "ชัยนาท",
    district: "อำเภอวัดสิงห์",
    subDistrict: "วังหมัน"
  },
  {
    code: 180401,
    province: "ชัยนาท",
    district: "อำเภอสรรพยา",
    subDistrict: "สรรพยา"
  },
  {
    code: 180402,
    province: "ชัยนาท",
    district: "อำเภอสรรพยา",
    subDistrict: "ตลุก"
  },
  {
    code: 180403,
    province: "ชัยนาท",
    district: "อำเภอสรรพยา",
    subDistrict: "เขาแก้ว"
  },
  {
    code: 180404,
    province: "ชัยนาท",
    district: "อำเภอสรรพยา",
    subDistrict: "โพนางดำตก"
  },
  {
    code: 180405,
    province: "ชัยนาท",
    district: "อำเภอสรรพยา",
    subDistrict: "โพนางดำออก"
  },
  {
    code: 180406,
    province: "ชัยนาท",
    district: "อำเภอสรรพยา",
    subDistrict: "บางหลวง"
  },
  {
    code: 180407,
    province: "ชัยนาท",
    district: "อำเภอสรรพยา",
    subDistrict: "หาดอาษา"
  },
  {
    code: 180501,
    province: "ชัยนาท",
    district: "อำเภอสรรคบุรี",
    subDistrict: "แพรกศรีราชา"
  },
  {
    code: 180502,
    province: "ชัยนาท",
    district: "อำเภอสรรคบุรี",
    subDistrict: "เที่ยงแท้"
  },
  {
    code: 180503,
    province: "ชัยนาท",
    district: "อำเภอสรรคบุรี",
    subDistrict: "ห้วยกรด"
  },
  {
    code: 180504,
    province: "ชัยนาท",
    district: "อำเภอสรรคบุรี",
    subDistrict: "โพงาม"
  },
  {
    code: 180505,
    province: "ชัยนาท",
    district: "อำเภอสรรคบุรี",
    subDistrict: "บางขุด"
  },
  {
    code: 180506,
    province: "ชัยนาท",
    district: "อำเภอสรรคบุรี",
    subDistrict: "ดงคอน"
  },
  {
    code: 180507,
    province: "ชัยนาท",
    district: "อำเภอสรรคบุรี",
    subDistrict: "ดอนกำ"
  },
  {
    code: 180508,
    province: "ชัยนาท",
    district: "อำเภอสรรคบุรี",
    subDistrict: "ห้วยกรดพัฒนา"
  },
  {
    code: 180601,
    province: "ชัยนาท",
    district: "อำเภอหันคา",
    subDistrict: "หันคา"
  },
  {
    code: 180602,
    province: "ชัยนาท",
    district: "อำเภอหันคา",
    subDistrict: "บ้านเชี่ยน"
  },
  {
    code: 180605,
    province: "ชัยนาท",
    district: "อำเภอหันคา",
    subDistrict: "ไพรนกยูง"
  },
  {
    code: 180606,
    province: "ชัยนาท",
    district: "อำเภอหันคา",
    subDistrict: "หนองแซง"
  },
  {
    code: 180607,
    province: "ชัยนาท",
    district: "อำเภอหันคา",
    subDistrict: "ห้วยงู"
  },
  {
    code: 180608,
    province: "ชัยนาท",
    district: "อำเภอหันคา",
    subDistrict: "วังไก่เถื่อน"
  },
  {
    code: 180609,
    province: "ชัยนาท",
    district: "อำเภอหันคา",
    subDistrict: "เด่นใหญ่"
  },
  {
    code: 180611,
    province: "ชัยนาท",
    district: "อำเภอหันคา",
    subDistrict: "สามง่ามท่าโบสถ์"
  },
  {
    code: 180701,
    province: "ชัยนาท",
    district: "อำเภอหนองมะโมง",
    subDistrict: "หนองมะโมง"
  },
  {
    code: 180702,
    province: "ชัยนาท",
    district: "อำเภอหนองมะโมง",
    subDistrict: "วังตะเคียน"
  },
  {
    code: 180703,
    province: "ชัยนาท",
    district: "อำเภอหนองมะโมง",
    subDistrict: "สะพานหิน"
  },
  {
    code: 180704,
    province: "ชัยนาท",
    district: "อำเภอหนองมะโมง",
    subDistrict: "กุดจอก"
  },
  {
    code: 180801,
    province: "ชัยนาท",
    district: "อำเภอเนินขาม",
    subDistrict: "เนินขาม"
  },
  {
    code: 180802,
    province: "ชัยนาท",
    district: "อำเภอเนินขาม",
    subDistrict: "กะบกเตี้ย"
  },
  {
    code: 180803,
    province: "ชัยนาท",
    district: "อำเภอเนินขาม",
    subDistrict: "สุขเดือนห้า"
  },
  {
    code: 190101,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "ปากเพรียว"
  },
  {
    code: 190105,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "ดาวเรือง"
  },
  {
    code: 190106,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "นาโฉง"
  },
  {
    code: 190107,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "โคกสว่าง"
  },
  {
    code: 190108,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "หนองโน"
  },
  {
    code: 190109,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "หนองยาว"
  },
  {
    code: 190110,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "ปากข้าวสาร"
  },
  {
    code: 190111,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "หนองปลาไหล"
  },
  {
    code: 190112,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "กุดนกเปล้า"
  },
  {
    code: 190113,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "ตลิ่งชัน"
  },
  {
    code: 190114,
    province: "สระบุรี",
    district: "อำเภอเมืองสระบุรี",
    subDistrict: "ตะกุด"
  },
  {
    code: 190201,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "แก่งคอย"
  },
  {
    code: 190202,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "ทับกวาง"
  },
  {
    code: 190203,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "ตาลเดี่ยว"
  },
  {
    code: 190204,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "ห้วยแห้ง"
  },
  {
    code: 190205,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "ท่าคล้อ"
  },
  {
    code: 190206,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "หินซ้อน"
  },
  {
    code: 190207,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "บ้านธาตุ"
  },
  {
    code: 190208,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "บ้านป่า"
  },
  {
    code: 190209,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "ท่าตูม"
  },
  {
    code: 190210,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "ชะอม"
  },
  {
    code: 190211,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "สองคอน"
  },
  {
    code: 190212,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "เตาปูน"
  },
  {
    code: 190213,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "ชำผักแพว"
  },
  {
    code: 190215,
    province: "สระบุรี",
    district: "อำเภอแก่งคอย",
    subDistrict: "ท่ามะปราง"
  },
  {
    code: 190301,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "หนองแค"
  },
  {
    code: 190302,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "กุ่มหัก"
  },
  {
    code: 190303,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "คชสิทธิ์"
  },
  {
    code: 190304,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "โคกตูม"
  },
  {
    code: 190305,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "โคกแย้"
  },
  {
    code: 190306,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "บัวลอย"
  },
  {
    code: 190307,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "ไผ่ต่ำ"
  },
  {
    code: 190308,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "โพนทอง"
  },
  {
    code: 190309,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "ห้วยขมิ้น"
  },
  {
    code: 190310,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "ห้วยทราย"
  },
  {
    code: 190311,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "หนองไข่น้ำ"
  },
  {
    code: 190312,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "หนองแขม"
  },
  {
    code: 190313,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "หนองจิก"
  },
  {
    code: 190314,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "หนองจรเข้"
  },
  {
    code: 190315,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "หนองนาก"
  },
  {
    code: 190316,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "หนองปลาหมอ"
  },
  {
    code: 190317,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "หนองปลิง"
  },
  {
    code: 190318,
    province: "สระบุรี",
    district: "อำเภอหนองแค",
    subDistrict: "หนองโรง"
  },
  {
    code: 190401,
    province: "สระบุรี",
    district: "อำเภอวิหารแดง",
    subDistrict: "หนองหมู"
  },
  {
    code: 190402,
    province: "สระบุรี",
    district: "อำเภอวิหารแดง",
    subDistrict: "บ้านลำ"
  },
  {
    code: 190403,
    province: "สระบุรี",
    district: "อำเภอวิหารแดง",
    subDistrict: "คลองเรือ"
  },
  {
    code: 190404,
    province: "สระบุรี",
    district: "อำเภอวิหารแดง",
    subDistrict: "วิหารแดง"
  },
  {
    code: 190405,
    province: "สระบุรี",
    district: "อำเภอวิหารแดง",
    subDistrict: "หนองสรวง"
  },
  {
    code: 190406,
    province: "สระบุรี",
    district: "อำเภอวิหารแดง",
    subDistrict: "เจริญธรรม"
  },
  {
    code: 190501,
    province: "สระบุรี",
    district: "อำเภอหนองแซง",
    subDistrict: "หนองแซง"
  },
  {
    code: 190502,
    province: "สระบุรี",
    district: "อำเภอหนองแซง",
    subDistrict: "หนองควายโซ"
  },
  {
    code: 190503,
    province: "สระบุรี",
    district: "อำเภอหนองแซง",
    subDistrict: "หนองหัวโพ"
  },
  {
    code: 190504,
    province: "สระบุรี",
    district: "อำเภอหนองแซง",
    subDistrict: "หนองสีดา"
  },
  {
    code: 190505,
    province: "สระบุรี",
    district: "อำเภอหนองแซง",
    subDistrict: "หนองกบ"
  },
  {
    code: 190506,
    province: "สระบุรี",
    district: "อำเภอหนองแซง",
    subDistrict: "ไก่เส่า"
  },
  {
    code: 190507,
    province: "สระบุรี",
    district: "อำเภอหนองแซง",
    subDistrict: "โคกสะอาด"
  },
  {
    code: 190508,
    province: "สระบุรี",
    district: "อำเภอหนองแซง",
    subDistrict: "ม่วงหวาน"
  },
  {
    code: 190509,
    province: "สระบุรี",
    district: "อำเภอหนองแซง",
    subDistrict: "เขาดิน"
  },
  {
    code: 190601,
    province: "สระบุรี",
    district: "อำเภอบ้านหมอ",
    subDistrict: "บ้านหมอ"
  },
  {
    code: 190602,
    province: "สระบุรี",
    district: "อำเภอบ้านหมอ",
    subDistrict: "บางโขมด"
  },
  {
    code: 190603,
    province: "สระบุรี",
    district: "อำเภอบ้านหมอ",
    subDistrict: "สร่างโศก"
  },
  {
    code: 190604,
    province: "สระบุรี",
    district: "อำเภอบ้านหมอ",
    subDistrict: "ตลาดน้อย"
  },
  {
    code: 190605,
    province: "สระบุรี",
    district: "อำเภอบ้านหมอ",
    subDistrict: "หรเทพ"
  },
  {
    code: 190606,
    province: "สระบุรี",
    district: "อำเภอบ้านหมอ",
    subDistrict: "โคกใหญ่"
  },
  {
    code: 190607,
    province: "สระบุรี",
    district: "อำเภอบ้านหมอ",
    subDistrict: "ไผ่ขวาง"
  },
  {
    code: 190608,
    province: "สระบุรี",
    district: "อำเภอบ้านหมอ",
    subDistrict: "บ้านครัว"
  },
  {
    code: 190609,
    province: "สระบุรี",
    district: "อำเภอบ้านหมอ",
    subDistrict: "หนองบัว"
  },
  {
    code: 190701,
    province: "สระบุรี",
    district: "อำเภอดอนพุด",
    subDistrict: "ดอนพุด"
  },
  {
    code: 190702,
    province: "สระบุรี",
    district: "อำเภอดอนพุด",
    subDistrict: "ไผ่หลิ่ว"
  },
  {
    code: 190703,
    province: "สระบุรี",
    district: "อำเภอดอนพุด",
    subDistrict: "บ้านหลวง"
  },
  {
    code: 190704,
    province: "สระบุรี",
    district: "อำเภอดอนพุด",
    subDistrict: "ดงตะงาว"
  },
  {
    code: 190801,
    province: "สระบุรี",
    district: "อำเภอหนองโดน",
    subDistrict: "หนองโดน"
  },
  {
    code: 190802,
    province: "สระบุรี",
    district: "อำเภอหนองโดน",
    subDistrict: "บ้านกลับ"
  },
  {
    code: 190803,
    province: "สระบุรี",
    district: "อำเภอหนองโดน",
    subDistrict: "ดอนทอง"
  },
  {
    code: 190804,
    province: "สระบุรี",
    district: "อำเภอหนองโดน",
    subDistrict: "บ้านโปร่ง"
  },
  {
    code: 190901,
    province: "สระบุรี",
    district: "อำเภอพระพุทธบาท",
    subDistrict: "พระพุทธบาท"
  },
  {
    code: 190902,
    province: "สระบุรี",
    district: "อำเภอพระพุทธบาท",
    subDistrict: "ขุนโขลน"
  },
  {
    code: 190903,
    province: "สระบุรี",
    district: "อำเภอพระพุทธบาท",
    subDistrict: "ธารเกษม"
  },
  {
    code: 190904,
    province: "สระบุรี",
    district: "อำเภอพระพุทธบาท",
    subDistrict: "นายาว"
  },
  {
    code: 190905,
    province: "สระบุรี",
    district: "อำเภอพระพุทธบาท",
    subDistrict: "พุคำจาน"
  },
  {
    code: 190906,
    province: "สระบุรี",
    district: "อำเภอพระพุทธบาท",
    subDistrict: "เขาวง"
  },
  {
    code: 190907,
    province: "สระบุรี",
    district: "อำเภอพระพุทธบาท",
    subDistrict: "ห้วยป่าหวาย"
  },
  {
    code: 190908,
    province: "สระบุรี",
    district: "อำเภอพระพุทธบาท",
    subDistrict: "พุกร่าง"
  },
  {
    code: 190909,
    province: "สระบุรี",
    district: "อำเภอพระพุทธบาท",
    subDistrict: "หนองแก"
  },
  {
    code: 191001,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "เสาไห้"
  },
  {
    code: 191002,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "บ้านยาง"
  },
  {
    code: 191003,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "หัวปลวก"
  },
  {
    code: 191004,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "งิ้วงาม"
  },
  {
    code: 191005,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "ศาลารีไทย"
  },
  {
    code: 191006,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "ต้นตาล"
  },
  {
    code: 191007,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "ท่าช้าง"
  },
  {
    code: 191008,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "พระยาทด"
  },
  {
    code: 191009,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "ม่วงงาม"
  },
  {
    code: 191010,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "เริงราง"
  },
  {
    code: 191011,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "เมืองเก่า"
  },
  {
    code: 191012,
    province: "สระบุรี",
    district: "อำเภอเสาไห้",
    subDistrict: "สวนดอกไม้"
  },
  {
    code: 191101,
    province: "สระบุรี",
    district: "อำเภอมวกเหล็ก",
    subDistrict: "มวกเหล็ก"
  },
  {
    code: 191102,
    province: "สระบุรี",
    district: "อำเภอมวกเหล็ก",
    subDistrict: "มิตรภาพ"
  },
  {
    code: 191104,
    province: "สระบุรี",
    district: "อำเภอมวกเหล็ก",
    subDistrict: "หนองย่างเสือ"
  },
  {
    code: 191105,
    province: "สระบุรี",
    district: "อำเภอมวกเหล็ก",
    subDistrict: "ลำสมพุง"
  },
  {
    code: 191107,
    province: "สระบุรี",
    district: "อำเภอมวกเหล็ก",
    subDistrict: "ลำพญากลาง"
  },
  {
    code: 191109,
    province: "สระบุรี",
    district: "อำเภอมวกเหล็ก",
    subDistrict: "ซับสนุ่น"
  },
  {
    code: 191201,
    province: "สระบุรี",
    district: "อำเภอวังม่วง",
    subDistrict: "แสลงพัน"
  },
  {
    code: 191202,
    province: "สระบุรี",
    district: "อำเภอวังม่วง",
    subDistrict: "คำพราน"
  },
  {
    code: 191203,
    province: "สระบุรี",
    district: "อำเภอวังม่วง",
    subDistrict: "วังม่วง"
  },
  {
    code: 191301,
    province: "สระบุรี",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "เขาดินพัฒนา"
  },
  {
    code: 191302,
    province: "สระบุรี",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "บ้านแก้ง"
  },
  {
    code: 191303,
    province: "สระบุรี",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ผึ้งรวง"
  },
  {
    code: 191304,
    province: "สระบุรี",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "พุแค"
  },
  {
    code: 191305,
    province: "สระบุรี",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ห้วยบง"
  },
  {
    code: 191306,
    province: "สระบุรี",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "หน้าพระลาน"
  },
  {
    code: 200101,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "บางปลาสร้อย"
  },
  {
    code: 200102,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "มะขามหย่ง"
  },
  {
    code: 200103,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "บ้านโขด"
  },
  {
    code: 200104,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "แสนสุข"
  },
  {
    code: 200105,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "บ้านสวน"
  },
  {
    code: 200106,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "หนองรี"
  },
  {
    code: 200107,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "นาป่า"
  },
  {
    code: 200108,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "หนองข้างคอก"
  },
  {
    code: 200109,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "ดอนหัวฬ่อ"
  },
  {
    code: 200110,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "หนองไม้แดง"
  },
  {
    code: 200111,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "บางทราย"
  },
  {
    code: 200112,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "คลองตำหรุ"
  },
  {
    code: 200113,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "เหมือง"
  },
  {
    code: 200114,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "บ้านปึก"
  },
  {
    code: 200115,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "ห้วยกะปิ"
  },
  {
    code: 200116,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "เสม็ด"
  },
  {
    code: 200117,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "อ่างศิลา"
  },
  {
    code: 200118,
    province: "ชลบุรี",
    district: "อำเภอเมืองชลบุรี",
    subDistrict: "สำนักบก"
  },
  {
    code: 200201,
    province: "ชลบุรี",
    district: "อำเภอบ้านบึง",
    subDistrict: "บ้านบึง"
  },
  {
    code: 200202,
    province: "ชลบุรี",
    district: "อำเภอบ้านบึง",
    subDistrict: "คลองกิ่ว"
  },
  {
    code: 200203,
    province: "ชลบุรี",
    district: "อำเภอบ้านบึง",
    subDistrict: "มาบไผ่"
  },
  {
    code: 200204,
    province: "ชลบุรี",
    district: "อำเภอบ้านบึง",
    subDistrict: "หนองซ้ำซาก"
  },
  {
    code: 200205,
    province: "ชลบุรี",
    district: "อำเภอบ้านบึง",
    subDistrict: "หนองบอนแดง"
  },
  {
    code: 200206,
    province: "ชลบุรี",
    district: "อำเภอบ้านบึง",
    subDistrict: "หนองชาก"
  },
  {
    code: 200207,
    province: "ชลบุรี",
    district: "อำเภอบ้านบึง",
    subDistrict: "หนองอิรุณ"
  },
  {
    code: 200208,
    province: "ชลบุรี",
    district: "อำเภอบ้านบึง",
    subDistrict: "หนองไผ่แก้ว"
  },
  {
    code: 200301,
    province: "ชลบุรี",
    district: "อำเภอหนองใหญ่",
    subDistrict: "หนองใหญ่"
  },
  {
    code: 200302,
    province: "ชลบุรี",
    district: "อำเภอหนองใหญ่",
    subDistrict: "คลองพลู"
  },
  {
    code: 200303,
    province: "ชลบุรี",
    district: "อำเภอหนองใหญ่",
    subDistrict: "หนองเสือช้าง"
  },
  {
    code: 200304,
    province: "ชลบุรี",
    district: "อำเภอหนองใหญ่",
    subDistrict: "ห้างสูง"
  },
  {
    code: 200305,
    province: "ชลบุรี",
    district: "อำเภอหนองใหญ่",
    subDistrict: "เขาซก"
  },
  {
    code: 200401,
    province: "ชลบุรี",
    district: "อำเภอบางละมุง",
    subDistrict: "บางละมุง"
  },
  {
    code: 200402,
    province: "ชลบุรี",
    district: "อำเภอบางละมุง",
    subDistrict: "หนองปรือ"
  },
  {
    code: 200403,
    province: "ชลบุรี",
    district: "อำเภอบางละมุง",
    subDistrict: "หนองปลาไหล"
  },
  {
    code: 200404,
    province: "ชลบุรี",
    district: "อำเภอบางละมุง",
    subDistrict: "โป่ง"
  },
  {
    code: 200405,
    province: "ชลบุรี",
    district: "อำเภอบางละมุง",
    subDistrict: "เขาไม้แก้ว"
  },
  {
    code: 200406,
    province: "ชลบุรี",
    district: "อำเภอบางละมุง",
    subDistrict: "ห้วยใหญ่"
  },
  {
    code: 200407,
    province: "ชลบุรี",
    district: "อำเภอบางละมุง",
    subDistrict: "ตะเคียนเตี้ย"
  },
  {
    code: 200408,
    province: "ชลบุรี",
    district: "อำเภอบางละมุง",
    subDistrict: "นาเกลือ"
  },
  {
    code: 200501,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "พานทอง"
  },
  {
    code: 200502,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "หนองตำลึง"
  },
  {
    code: 200503,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "มาบโป่ง"
  },
  {
    code: 200504,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "หนองกะขะ"
  },
  {
    code: 200505,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "หนองหงษ์"
  },
  {
    code: 200506,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "โคกขี้หนอน"
  },
  {
    code: 200507,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "บ้านเก่า"
  },
  {
    code: 200508,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "หน้าประดู่"
  },
  {
    code: 200509,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "บางนาง"
  },
  {
    code: 200510,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "เกาะลอย"
  },
  {
    code: 200511,
    province: "ชลบุรี",
    district: "อำเภอพานทอง",
    subDistrict: "บางหัก"
  },
  {
    code: 200601,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "พนัสนิคม"
  },
  {
    code: 200602,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "หน้าพระธาตุ"
  },
  {
    code: 200603,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "วัดหลวง"
  },
  {
    code: 200604,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "บ้านเซิด"
  },
  {
    code: 200605,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "นาเริก"
  },
  {
    code: 200606,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "หมอนนาง"
  },
  {
    code: 200607,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "สระสี่เหลี่ยม"
  },
  {
    code: 200608,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "วัดโบสถ์"
  },
  {
    code: 200609,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "กุฎโง้ง"
  },
  {
    code: 200610,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "หัวถนน"
  },
  {
    code: 200611,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 200613,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "หนองปรือ"
  },
  {
    code: 200614,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "หนองขยาด"
  },
  {
    code: 200615,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "ทุ่งขวาง"
  },
  {
    code: 200616,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "หนองเหียง"
  },
  {
    code: 200617,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "นาวังหิน"
  },
  {
    code: 200618,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "บ้านช้าง"
  },
  {
    code: 200620,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "โคกเพลาะ"
  },
  {
    code: 200621,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "ไร่หลักทอง"
  },
  {
    code: 200622,
    province: "ชลบุรี",
    district: "อำเภอพนัสนิคม",
    subDistrict: "นามะตูม"
  },
  {
    code: 200701,
    province: "ชลบุรี",
    district: "อำเภอศรีราชา",
    subDistrict: "ศรีราชา"
  },
  {
    code: 200702,
    province: "ชลบุรี",
    district: "อำเภอศรีราชา",
    subDistrict: "สุรศักดิ์"
  },
  {
    code: 200703,
    province: "ชลบุรี",
    district: "อำเภอศรีราชา",
    subDistrict: "ทุ่งสุขลา"
  },
  {
    code: 200704,
    province: "ชลบุรี",
    district: "อำเภอศรีราชา",
    subDistrict: "บึง"
  },
  {
    code: 200705,
    province: "ชลบุรี",
    district: "อำเภอศรีราชา",
    subDistrict: "หนองขาม"
  },
  {
    code: 200706,
    province: "ชลบุรี",
    district: "อำเภอศรีราชา",
    subDistrict: "เขาคันทรง"
  },
  {
    code: 200707,
    province: "ชลบุรี",
    district: "อำเภอศรีราชา",
    subDistrict: "บางพระ"
  },
  {
    code: 200708,
    province: "ชลบุรี",
    district: "อำเภอศรีราชา",
    subDistrict: "บ่อวิน"
  },
  {
    code: 200801,
    province: "ชลบุรี",
    district: "อำเภอเกาะสีชัง",
    subDistrict: "ท่าเทววงษ์"
  },
  {
    code: 200901,
    province: "ชลบุรี",
    district: "อำเภอสัตหีบ",
    subDistrict: "สัตหีบ"
  },
  {
    code: 200902,
    province: "ชลบุรี",
    district: "อำเภอสัตหีบ",
    subDistrict: "นาจอมเทียน"
  },
  {
    code: 200903,
    province: "ชลบุรี",
    district: "อำเภอสัตหีบ",
    subDistrict: "พลูตาหลวง"
  },
  {
    code: 200904,
    province: "ชลบุรี",
    district: "อำเภอสัตหีบ",
    subDistrict: "บางเสร่"
  },
  {
    code: 200905,
    province: "ชลบุรี",
    district: "อำเภอสัตหีบ",
    subDistrict: "แสมสาร"
  },
  {
    code: 201001,
    province: "ชลบุรี",
    district: "อำเภอบ่อทอง",
    subDistrict: "บ่อทอง"
  },
  {
    code: 201002,
    province: "ชลบุรี",
    district: "อำเภอบ่อทอง",
    subDistrict: "วัดสุวรรณ"
  },
  {
    code: 201003,
    province: "ชลบุรี",
    district: "อำเภอบ่อทอง",
    subDistrict: "บ่อกวางทอง"
  },
  {
    code: 201004,
    province: "ชลบุรี",
    district: "อำเภอบ่อทอง",
    subDistrict: "ธาตุทอง"
  },
  {
    code: 201005,
    province: "ชลบุรี",
    district: "อำเภอบ่อทอง",
    subDistrict: "เกษตรสุวรรณ"
  },
  {
    code: 201006,
    province: "ชลบุรี",
    district: "อำเภอบ่อทอง",
    subDistrict: "พลวงทอง"
  },
  {
    code: 201101,
    province: "ชลบุรี",
    district: "อำเภอเกาะจันทร์",
    subDistrict: "เกาะจันทร์"
  },
  {
    code: 201102,
    province: "ชลบุรี",
    district: "อำเภอเกาะจันทร์",
    subDistrict: "ท่าบุญมี"
  },
  {
    code: 210101,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "ท่าประดู่"
  },
  {
    code: 210102,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "เชิงเนิน"
  },
  {
    code: 210103,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "ตะพง"
  },
  {
    code: 210104,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "ปากน้ำ"
  },
  {
    code: 210105,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "เพ"
  },
  {
    code: 210106,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "แกลง"
  },
  {
    code: 210107,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "บ้านแลง"
  },
  {
    code: 210108,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "นาตาขวัญ"
  },
  {
    code: 210109,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "เนินพระ"
  },
  {
    code: 210110,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "กะเฉด"
  },
  {
    code: 210111,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "ทับมา"
  },
  {
    code: 210112,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "น้ำคอก"
  },
  {
    code: 210113,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "ห้วยโป่ง"
  },
  {
    code: 210114,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "มาบตาพุด"
  },
  {
    code: 210115,
    province: "ระยอง",
    district: "อำเภอเมืองระยอง",
    subDistrict: "สำนักทอง"
  },
  {
    code: 210201,
    province: "ระยอง",
    district: "อำเภอบ้านฉาง",
    subDistrict: "สำนักท้อน"
  },
  {
    code: 210202,
    province: "ระยอง",
    district: "อำเภอบ้านฉาง",
    subDistrict: "พลา"
  },
  {
    code: 210203,
    province: "ระยอง",
    district: "อำเภอบ้านฉาง",
    subDistrict: "บ้านฉาง"
  },
  {
    code: 210301,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "ทางเกวียน"
  },
  {
    code: 210302,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "วังหว้า"
  },
  {
    code: 210303,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "ชากโดน"
  },
  {
    code: 210304,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "เนินฆ้อ"
  },
  {
    code: 210305,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "กร่ำ"
  },
  {
    code: 210306,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "ชากพง"
  },
  {
    code: 210307,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "กระแสบน"
  },
  {
    code: 210308,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "บ้านนา"
  },
  {
    code: 210309,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "ทุ่งควายกิน"
  },
  {
    code: 210310,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "กองดิน"
  },
  {
    code: 210311,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "คลองปูน"
  },
  {
    code: 210312,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "พังราด"
  },
  {
    code: 210313,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "ปากน้ำกระแส"
  },
  {
    code: 210317,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "ห้วยยาง"
  },
  {
    code: 210318,
    province: "ระยอง",
    district: "อำเภอแกลง",
    subDistrict: "สองสลึง"
  },
  {
    code: 210401,
    province: "ระยอง",
    district: "อำเภอวังจันทร์",
    subDistrict: "วังจันทร์"
  },
  {
    code: 210402,
    province: "ระยอง",
    district: "อำเภอวังจันทร์",
    subDistrict: "ชุมแสง"
  },
  {
    code: 210403,
    province: "ระยอง",
    district: "อำเภอวังจันทร์",
    subDistrict: "ป่ายุบใน"
  },
  {
    code: 210404,
    province: "ระยอง",
    district: "อำเภอวังจันทร์",
    subDistrict: "พลงตาเอี่ยม"
  },
  {
    code: 210501,
    province: "ระยอง",
    district: "อำเภอบ้านค่าย",
    subDistrict: "บ้านค่าย"
  },
  {
    code: 210502,
    province: "ระยอง",
    district: "อำเภอบ้านค่าย",
    subDistrict: "หนองละลอก"
  },
  {
    code: 210503,
    province: "ระยอง",
    district: "อำเภอบ้านค่าย",
    subDistrict: "หนองตะพาน"
  },
  {
    code: 210504,
    province: "ระยอง",
    district: "อำเภอบ้านค่าย",
    subDistrict: "ตาขัน"
  },
  {
    code: 210505,
    province: "ระยอง",
    district: "อำเภอบ้านค่าย",
    subDistrict: "บางบุตร"
  },
  {
    code: 210506,
    province: "ระยอง",
    district: "อำเภอบ้านค่าย",
    subDistrict: "หนองบัว"
  },
  {
    code: 210507,
    province: "ระยอง",
    district: "อำเภอบ้านค่าย",
    subDistrict: "ชากบก"
  },
  {
    code: 210601,
    province: "ระยอง",
    district: "อำเภอปลวกแดง",
    subDistrict: "ปลวกแดง"
  },
  {
    code: 210602,
    province: "ระยอง",
    district: "อำเภอปลวกแดง",
    subDistrict: "ตาสิทธิ์"
  },
  {
    code: 210603,
    province: "ระยอง",
    district: "อำเภอปลวกแดง",
    subDistrict: "ละหาร"
  },
  {
    code: 210604,
    province: "ระยอง",
    district: "อำเภอปลวกแดง",
    subDistrict: "แม่น้ำคู้"
  },
  {
    code: 210605,
    province: "ระยอง",
    district: "อำเภอปลวกแดง",
    subDistrict: "มาบยางพร"
  },
  {
    code: 210606,
    province: "ระยอง",
    district: "อำเภอปลวกแดง",
    subDistrict: "หนองไร่"
  },
  {
    code: 210701,
    province: "ระยอง",
    district: "อำเภอเขาชะเมา",
    subDistrict: "น้ำเป็น"
  },
  {
    code: 210702,
    province: "ระยอง",
    district: "อำเภอเขาชะเมา",
    subDistrict: "ห้วยทับมอญ"
  },
  {
    code: 210703,
    province: "ระยอง",
    district: "อำเภอเขาชะเมา",
    subDistrict: "ชำฆ้อ"
  },
  {
    code: 210704,
    province: "ระยอง",
    district: "อำเภอเขาชะเมา",
    subDistrict: "เขาน้อย"
  },
  {
    code: 210801,
    province: "ระยอง",
    district: "อำเภอนิคมพัฒนา",
    subDistrict: "นิคมพัฒนา"
  },
  {
    code: 210802,
    province: "ระยอง",
    district: "อำเภอนิคมพัฒนา",
    subDistrict: "มาบข่า"
  },
  {
    code: 210803,
    province: "ระยอง",
    district: "อำเภอนิคมพัฒนา",
    subDistrict: "พนานิคม"
  },
  {
    code: 210804,
    province: "ระยอง",
    district: "อำเภอนิคมพัฒนา",
    subDistrict: "มะขามคู่"
  },
  {
    code: 220101,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "ตลาด"
  },
  {
    code: 220102,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "วัดใหม่"
  },
  {
    code: 220103,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "คลองนารายณ์"
  },
  {
    code: 220104,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "เกาะขวาง"
  },
  {
    code: 220105,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "คมบาง"
  },
  {
    code: 220106,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "ท่าช้าง"
  },
  {
    code: 220107,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "จันทนิมิต"
  },
  {
    code: 220108,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "บางกะจะ"
  },
  {
    code: 220109,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "แสลง"
  },
  {
    code: 220110,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "หนองบัว"
  },
  {
    code: 220111,
    province: "จันทบุรี",
    district: "อำเภอเมืองจันทบุรี",
    subDistrict: "พลับพลา"
  },
  {
    code: 220201,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "ขลุง"
  },
  {
    code: 220202,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "บ่อ"
  },
  {
    code: 220203,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "เกวียนหัก"
  },
  {
    code: 220204,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "ตะปอน"
  },
  {
    code: 220205,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "บางชัน"
  },
  {
    code: 220206,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "วันยาว"
  },
  {
    code: 220207,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "ซึ้ง"
  },
  {
    code: 220208,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "มาบไพ"
  },
  {
    code: 220209,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "วังสรรพรส"
  },
  {
    code: 220210,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "ตรอกนอง"
  },
  {
    code: 220211,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "ตกพรม"
  },
  {
    code: 220212,
    province: "จันทบุรี",
    district: "อำเภอขลุง",
    subDistrict: "บ่อเวฬุ"
  },
  {
    code: 220301,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "ท่าใหม่"
  },
  {
    code: 220302,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "ยายร้า"
  },
  {
    code: 220303,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "สีพยา"
  },
  {
    code: 220304,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "บ่อพุ"
  },
  {
    code: 220305,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "พลอยแหวน"
  },
  {
    code: 220306,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "เขาวัว"
  },
  {
    code: 220307,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "เขาบายศรี"
  },
  {
    code: 220308,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "สองพี่น้อง"
  },
  {
    code: 220309,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "ทุ่งเบญจา"
  },
  {
    code: 220311,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "รำพัน"
  },
  {
    code: 220312,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "โขมง"
  },
  {
    code: 220313,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "ตะกาดเง้า"
  },
  {
    code: 220314,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "คลองขุด"
  },
  {
    code: 220324,
    province: "จันทบุรี",
    district: "อำเภอท่าใหม่",
    subDistrict: "เขาแก้ว"
  },
  {
    code: 220401,
    province: "จันทบุรี",
    district: "อำเภอโป่งน้ำร้อน",
    subDistrict: "ทับไทร"
  },
  {
    code: 220402,
    province: "จันทบุรี",
    district: "อำเภอโป่งน้ำร้อน",
    subDistrict: "โป่งน้ำร้อน"
  },
  {
    code: 220404,
    province: "จันทบุรี",
    district: "อำเภอโป่งน้ำร้อน",
    subDistrict: "หนองตาคง"
  },
  {
    code: 220409,
    province: "จันทบุรี",
    district: "อำเภอโป่งน้ำร้อน",
    subDistrict: "เทพนิมิต"
  },
  {
    code: 220410,
    province: "จันทบุรี",
    district: "อำเภอโป่งน้ำร้อน",
    subDistrict: "คลองใหญ่"
  },
  {
    code: 220501,
    province: "จันทบุรี",
    district: "อำเภอมะขาม",
    subDistrict: "มะขาม"
  },
  {
    code: 220502,
    province: "จันทบุรี",
    district: "อำเภอมะขาม",
    subDistrict: "ท่าหลวง"
  },
  {
    code: 220503,
    province: "จันทบุรี",
    district: "อำเภอมะขาม",
    subDistrict: "ปัถวี"
  },
  {
    code: 220504,
    province: "จันทบุรี",
    district: "อำเภอมะขาม",
    subDistrict: "วังแซ้ม"
  },
  {
    code: 220506,
    province: "จันทบุรี",
    district: "อำเภอมะขาม",
    subDistrict: "ฉมัน"
  },
  {
    code: 220508,
    province: "จันทบุรี",
    district: "อำเภอมะขาม",
    subDistrict: "อ่างคีรี"
  },
  {
    code: 220601,
    province: "จันทบุรี",
    district: "อำเภอแหลมสิงห์",
    subDistrict: "ปากน้ำแหลมสิงห์"
  },
  {
    code: 220602,
    province: "จันทบุรี",
    district: "อำเภอแหลมสิงห์",
    subDistrict: "เกาะเปริด"
  },
  {
    code: 220603,
    province: "จันทบุรี",
    district: "อำเภอแหลมสิงห์",
    subDistrict: "หนองชิ่ม"
  },
  {
    code: 220604,
    province: "จันทบุรี",
    district: "อำเภอแหลมสิงห์",
    subDistrict: "พลิ้ว"
  },
  {
    code: 220605,
    province: "จันทบุรี",
    district: "อำเภอแหลมสิงห์",
    subDistrict: "คลองน้ำเค็ม"
  },
  {
    code: 220606,
    province: "จันทบุรี",
    district: "อำเภอแหลมสิงห์",
    subDistrict: "บางสระเก้า"
  },
  {
    code: 220607,
    province: "จันทบุรี",
    district: "อำเภอแหลมสิงห์",
    subDistrict: "บางกะไชย"
  },
  {
    code: 220701,
    province: "จันทบุรี",
    district: "อำเภอสอยดาว",
    subDistrict: "ปะตง"
  },
  {
    code: 220702,
    province: "จันทบุรี",
    district: "อำเภอสอยดาว",
    subDistrict: "ทุ่งขนาน"
  },
  {
    code: 220703,
    province: "จันทบุรี",
    district: "อำเภอสอยดาว",
    subDistrict: "ทับช้าง"
  },
  {
    code: 220704,
    province: "จันทบุรี",
    district: "อำเภอสอยดาว",
    subDistrict: "ทรายขาว"
  },
  {
    code: 220705,
    province: "จันทบุรี",
    district: "อำเภอสอยดาว",
    subDistrict: "สะตอน"
  },
  {
    code: 220801,
    province: "จันทบุรี",
    district: "อำเภอแก่งหางแมว",
    subDistrict: "แก่งหางแมว"
  },
  {
    code: 220802,
    province: "จันทบุรี",
    district: "อำเภอแก่งหางแมว",
    subDistrict: "ขุนซ่อง"
  },
  {
    code: 220803,
    province: "จันทบุรี",
    district: "อำเภอแก่งหางแมว",
    subDistrict: "สามพี่น้อง"
  },
  {
    code: 220804,
    province: "จันทบุรี",
    district: "อำเภอแก่งหางแมว",
    subDistrict: "พวา"
  },
  {
    code: 220805,
    province: "จันทบุรี",
    district: "อำเภอแก่งหางแมว",
    subDistrict: "เขาวงกต"
  },
  {
    code: 220901,
    province: "จันทบุรี",
    district: "อำเภอนายายอาม",
    subDistrict: "นายายอาม"
  },
  {
    code: 220902,
    province: "จันทบุรี",
    district: "อำเภอนายายอาม",
    subDistrict: "วังโตนด"
  },
  {
    code: 220903,
    province: "จันทบุรี",
    district: "อำเภอนายายอาม",
    subDistrict: "กระแจะ"
  },
  {
    code: 220904,
    province: "จันทบุรี",
    district: "อำเภอนายายอาม",
    subDistrict: "สนามไชย"
  },
  {
    code: 220905,
    province: "จันทบุรี",
    district: "อำเภอนายายอาม",
    subDistrict: "ช้างข้าม"
  },
  {
    code: 220906,
    province: "จันทบุรี",
    district: "อำเภอนายายอาม",
    subDistrict: "วังใหม่"
  },
  {
    code: 221001,
    province: "จันทบุรี",
    district: "อำเภอเขาคิชฌกูฏ",
    subDistrict: "ชากไทย"
  },
  {
    code: 221002,
    province: "จันทบุรี",
    district: "อำเภอเขาคิชฌกูฏ",
    subDistrict: "พลวง"
  },
  {
    code: 221003,
    province: "จันทบุรี",
    district: "อำเภอเขาคิชฌกูฏ",
    subDistrict: "ตะเคียนทอง"
  },
  {
    code: 221004,
    province: "จันทบุรี",
    district: "อำเภอเขาคิชฌกูฏ",
    subDistrict: "คลองพลู"
  },
  {
    code: 221005,
    province: "จันทบุรี",
    district: "อำเภอเขาคิชฌกูฏ",
    subDistrict: "จันทเขลม"
  },
  {
    code: 230101,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "บางพระ"
  },
  {
    code: 230102,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "หนองเสม็ด"
  },
  {
    code: 230103,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "หนองโสน"
  },
  {
    code: 230104,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "หนองคันทรง"
  },
  {
    code: 230105,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "ห้วงน้ำขาว"
  },
  {
    code: 230106,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "อ่าวใหญ่"
  },
  {
    code: 230107,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "วังกระแจะ"
  },
  {
    code: 230108,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "ห้วยแร้ง"
  },
  {
    code: 230109,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "เนินทราย"
  },
  {
    code: 230110,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "ท่าพริก"
  },
  {
    code: 230111,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "ท่ากุ่ม"
  },
  {
    code: 230112,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "ตะกาง"
  },
  {
    code: 230113,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "ชำราก"
  },
  {
    code: 230114,
    province: "ตราด",
    district: "อำเภอเมืองตราด",
    subDistrict: "แหลมกลัด"
  },
  {
    code: 230201,
    province: "ตราด",
    district: "อำเภอคลองใหญ่",
    subDistrict: "คลองใหญ่"
  },
  {
    code: 230202,
    province: "ตราด",
    district: "อำเภอคลองใหญ่",
    subDistrict: "ไม้รูด"
  },
  {
    code: 230203,
    province: "ตราด",
    district: "อำเภอคลองใหญ่",
    subDistrict: "หาดเล็ก"
  },
  {
    code: 230301,
    province: "ตราด",
    district: "อำเภอเขาสมิง",
    subDistrict: "เขาสมิง"
  },
  {
    code: 230302,
    province: "ตราด",
    district: "อำเภอเขาสมิง",
    subDistrict: "แสนตุ้ง"
  },
  {
    code: 230303,
    province: "ตราด",
    district: "อำเภอเขาสมิง",
    subDistrict: "วังตะเคียน"
  },
  {
    code: 230304,
    province: "ตราด",
    district: "อำเภอเขาสมิง",
    subDistrict: "ท่าโสม"
  },
  {
    code: 230305,
    province: "ตราด",
    district: "อำเภอเขาสมิง",
    subDistrict: "สะตอ"
  },
  {
    code: 230306,
    province: "ตราด",
    district: "อำเภอเขาสมิง",
    subDistrict: "ประณีต"
  },
  {
    code: 230307,
    province: "ตราด",
    district: "อำเภอเขาสมิง",
    subDistrict: "เทพนิมิต"
  },
  {
    code: 230308,
    province: "ตราด",
    district: "อำเภอเขาสมิง",
    subDistrict: "ทุ่งนนทรี"
  },
  {
    code: 230401,
    province: "ตราด",
    district: "อำเภอบ่อไร่",
    subDistrict: "บ่อพลอย"
  },
  {
    code: 230402,
    province: "ตราด",
    district: "อำเภอบ่อไร่",
    subDistrict: "ช้างทูน"
  },
  {
    code: 230403,
    province: "ตราด",
    district: "อำเภอบ่อไร่",
    subDistrict: "ด่านชุมพล"
  },
  {
    code: 230404,
    province: "ตราด",
    district: "อำเภอบ่อไร่",
    subDistrict: "หนองบอน"
  },
  {
    code: 230405,
    province: "ตราด",
    district: "อำเภอบ่อไร่",
    subDistrict: "นนทรีย์"
  },
  {
    code: 230501,
    province: "ตราด",
    district: "อำเภอแหลมงอบ",
    subDistrict: "แหลมงอบ"
  },
  {
    code: 230502,
    province: "ตราด",
    district: "อำเภอแหลมงอบ",
    subDistrict: "น้ำเชี่ยว"
  },
  {
    code: 230503,
    province: "ตราด",
    district: "อำเภอแหลมงอบ",
    subDistrict: "บางปิด"
  },
  {
    code: 230507,
    province: "ตราด",
    district: "อำเภอแหลมงอบ",
    subDistrict: "คลองใหญ่"
  },
  {
    code: 230601,
    province: "ตราด",
    district: "อำเภอเกาะกูด",
    subDistrict: "เกาะหมาก"
  },
  {
    code: 230602,
    province: "ตราด",
    district: "อำเภอเกาะกูด",
    subDistrict: "เกาะกูด"
  },
  {
    code: 230701,
    province: "ตราด",
    district: "อำเภอเกาะช้าง",
    subDistrict: "เกาะช้าง"
  },
  {
    code: 230702,
    province: "ตราด",
    district: "อำเภอเกาะช้าง",
    subDistrict: "เกาะช้างใต้"
  },
  {
    code: 240101,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "หน้าเมือง"
  },
  {
    code: 240102,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "ท่าไข่"
  },
  {
    code: 240103,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 240104,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "คลองนา"
  },
  {
    code: 240105,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "บางตีนเป็ด"
  },
  {
    code: 240106,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "บางไผ่"
  },
  {
    code: 240107,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "คลองจุกกระเฌอ"
  },
  {
    code: 240108,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "บางแก้ว"
  },
  {
    code: 240109,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "บางขวัญ"
  },
  {
    code: 240110,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "คลองนครเนื่องเขต"
  },
  {
    code: 240111,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "วังตะเคียน"
  },
  {
    code: 240112,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "โสธร"
  },
  {
    code: 240113,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "บางพระ"
  },
  {
    code: 240114,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "บางกะไห"
  },
  {
    code: 240115,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "หนามแดง"
  },
  {
    code: 240116,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "คลองเปรง"
  },
  {
    code: 240117,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "คลองอุดมชลจร"
  },
  {
    code: 240118,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "คลองหลวงแพ่ง"
  },
  {
    code: 240119,
    province: "ฉะเชิงเทรา",
    district: "อำเภอเมืองฉะเชิงเทรา",
    subDistrict: "บางเตย"
  },
  {
    code: 240201,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางคล้า",
    subDistrict: "บางคล้า"
  },
  {
    code: 240204,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางคล้า",
    subDistrict: "บางสวน"
  },
  {
    code: 240208,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางคล้า",
    subDistrict: "บางกระเจ็ด"
  },
  {
    code: 240209,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางคล้า",
    subDistrict: "ปากน้ำ"
  },
  {
    code: 240210,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางคล้า",
    subDistrict: "ท่าทองหลาง"
  },
  {
    code: 240211,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางคล้า",
    subDistrict: "สาวชะโงก"
  },
  {
    code: 240212,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางคล้า",
    subDistrict: "เสม็ดเหนือ"
  },
  {
    code: 240213,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางคล้า",
    subDistrict: "เสม็ดใต้"
  },
  {
    code: 240214,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางคล้า",
    subDistrict: "หัวไทร"
  },
  {
    code: 240301,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางน้ำเปรี้ยว",
    subDistrict: "บางน้ำเปรี้ยว"
  },
  {
    code: 240302,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางน้ำเปรี้ยว",
    subDistrict: "บางขนาก"
  },
  {
    code: 240303,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางน้ำเปรี้ยว",
    subDistrict: "สิงโตทอง"
  },
  {
    code: 240304,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางน้ำเปรี้ยว",
    subDistrict: "หมอนทอง"
  },
  {
    code: 240305,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางน้ำเปรี้ยว",
    subDistrict: "บึงน้ำรักษ์"
  },
  {
    code: 240306,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางน้ำเปรี้ยว",
    subDistrict: "ดอนเกาะกา"
  },
  {
    code: 240307,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางน้ำเปรี้ยว",
    subDistrict: "โยธะกา"
  },
  {
    code: 240308,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางน้ำเปรี้ยว",
    subDistrict: "ดอนฉิมพลี"
  },
  {
    code: 240309,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางน้ำเปรี้ยว",
    subDistrict: "ศาลาแดง"
  },
  {
    code: 240310,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางน้ำเปรี้ยว",
    subDistrict: "โพรงอากาศ"
  },
  {
    code: 240401,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "บางปะกง"
  },
  {
    code: 240402,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "ท่าสะอ้าน"
  },
  {
    code: 240403,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "บางวัว"
  },
  {
    code: 240404,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "บางสมัคร"
  },
  {
    code: 240405,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "บางผึ้ง"
  },
  {
    code: 240406,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "บางเกลือ"
  },
  {
    code: 240407,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "สองคลอง"
  },
  {
    code: 240408,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "หนองจอก"
  },
  {
    code: 240409,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "พิมพา"
  },
  {
    code: 240410,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 240411,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "หอมศีล"
  },
  {
    code: 240412,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบางปะกง",
    subDistrict: "เขาดิน"
  },
  {
    code: 240501,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "บ้านโพธิ์"
  },
  {
    code: 240502,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "เกาะไร่"
  },
  {
    code: 240503,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "คลองขุด"
  },
  {
    code: 240504,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "คลองบ้านโพธิ์"
  },
  {
    code: 240505,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "คลองประเวศ"
  },
  {
    code: 240506,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "ดอนทราย"
  },
  {
    code: 240507,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "เทพราช"
  },
  {
    code: 240508,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "ท่าพลับ"
  },
  {
    code: 240509,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "หนองตีนนก"
  },
  {
    code: 240510,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "หนองบัว"
  },
  {
    code: 240511,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "บางซ่อน"
  },
  {
    code: 240512,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "บางกรูด"
  },
  {
    code: 240513,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "แหลมประดู่"
  },
  {
    code: 240514,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "ลาดขวาง"
  },
  {
    code: 240515,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "สนามจันทร์"
  },
  {
    code: 240516,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "แสนภูดาษ"
  },
  {
    code: 240517,
    province: "ฉะเชิงเทรา",
    district: "อำเภอบ้านโพธิ์",
    subDistrict: "สิบเอ็ดศอก"
  },
  {
    code: 240601,
    province: "ฉะเชิงเทรา",
    district: "อำเภอพนมสารคาม",
    subDistrict: "เกาะขนุน"
  },
  {
    code: 240602,
    province: "ฉะเชิงเทรา",
    district: "อำเภอพนมสารคาม",
    subDistrict: "บ้านซ่อง"
  },
  {
    code: 240603,
    province: "ฉะเชิงเทรา",
    district: "อำเภอพนมสารคาม",
    subDistrict: "พนมสารคาม"
  },
  {
    code: 240604,
    province: "ฉะเชิงเทรา",
    district: "อำเภอพนมสารคาม",
    subDistrict: "เมืองเก่า"
  },
  {
    code: 240605,
    province: "ฉะเชิงเทรา",
    district: "อำเภอพนมสารคาม",
    subDistrict: "หนองยาว"
  },
  {
    code: 240606,
    province: "ฉะเชิงเทรา",
    district: "อำเภอพนมสารคาม",
    subDistrict: "ท่าถ่าน"
  },
  {
    code: 240607,
    province: "ฉะเชิงเทรา",
    district: "อำเภอพนมสารคาม",
    subDistrict: "หนองแหน"
  },
  {
    code: 240608,
    province: "ฉะเชิงเทรา",
    district: "อำเภอพนมสารคาม",
    subDistrict: "เขาหินซ้อน"
  },
  {
    code: 240701,
    province: "ฉะเชิงเทรา",
    district: "อำเภอราชสาส์น",
    subDistrict: "บางคา"
  },
  {
    code: 240702,
    province: "ฉะเชิงเทรา",
    district: "อำเภอราชสาส์น",
    subDistrict: "เมืองใหม่"
  },
  {
    code: 240703,
    province: "ฉะเชิงเทรา",
    district: "อำเภอราชสาส์น",
    subDistrict: "ดงน้อย"
  },
  {
    code: 240801,
    province: "ฉะเชิงเทรา",
    district: "อำเภอสนามชัยเขต",
    subDistrict: "คู้ยายหมี"
  },
  {
    code: 240802,
    province: "ฉะเชิงเทรา",
    district: "อำเภอสนามชัยเขต",
    subDistrict: "ท่ากระดาน"
  },
  {
    code: 240803,
    province: "ฉะเชิงเทรา",
    district: "อำเภอสนามชัยเขต",
    subDistrict: "ทุ่งพระยา"
  },
  {
    code: 240805,
    province: "ฉะเชิงเทรา",
    district: "อำเภอสนามชัยเขต",
    subDistrict: "ลาดกระทิง"
  },
  {
    code: 240901,
    province: "ฉะเชิงเทรา",
    district: "อำเภอแปลงยาว",
    subDistrict: "แปลงยาว"
  },
  {
    code: 240902,
    province: "ฉะเชิงเทรา",
    district: "อำเภอแปลงยาว",
    subDistrict: "วังเย็น"
  },
  {
    code: 240903,
    province: "ฉะเชิงเทรา",
    district: "อำเภอแปลงยาว",
    subDistrict: "หัวสำโรง"
  },
  {
    code: 240904,
    province: "ฉะเชิงเทรา",
    district: "อำเภอแปลงยาว",
    subDistrict: "หนองไม้แก่น"
  },
  {
    code: 241001,
    province: "ฉะเชิงเทรา",
    district: "อำเภอท่าตะเกียบ",
    subDistrict: "ท่าตะเกียบ"
  },
  {
    code: 241002,
    province: "ฉะเชิงเทรา",
    district: "อำเภอท่าตะเกียบ",
    subDistrict: "คลองตะเกรา"
  },
  {
    code: 241101,
    province: "ฉะเชิงเทรา",
    district: "อำเภอคลองเขื่อน",
    subDistrict: "ก้อนแก้ว"
  },
  {
    code: 241102,
    province: "ฉะเชิงเทรา",
    district: "อำเภอคลองเขื่อน",
    subDistrict: "คลองเขื่อน"
  },
  {
    code: 241103,
    province: "ฉะเชิงเทรา",
    district: "อำเภอคลองเขื่อน",
    subDistrict: "บางเล่า"
  },
  {
    code: 241104,
    province: "ฉะเชิงเทรา",
    district: "อำเภอคลองเขื่อน",
    subDistrict: "บางโรง"
  },
  {
    code: 241105,
    province: "ฉะเชิงเทรา",
    district: "อำเภอคลองเขื่อน",
    subDistrict: "บางตลาด"
  },
  {
    code: 250101,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "หน้าเมือง"
  },
  {
    code: 250102,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "รอบเมือง"
  },
  {
    code: 250103,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "วัดโบสถ์"
  },
  {
    code: 250104,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "บางเดชะ"
  },
  {
    code: 250105,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "ท่างาม"
  },
  {
    code: 250106,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "บางบริบูรณ์"
  },
  {
    code: 250107,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "ดงพระราม"
  },
  {
    code: 250108,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "บ้านพระ"
  },
  {
    code: 250109,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "โคกไม้ลาย"
  },
  {
    code: 250110,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "ไม้เค็ด"
  },
  {
    code: 250111,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "ดงขี้เหล็ก"
  },
  {
    code: 250112,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "เนินหอม"
  },
  {
    code: 250113,
    province: "ปราจีนบุรี",
    district: "อำเภอเมืองปราจีนบุรี",
    subDistrict: "โนนห้อม"
  },
  {
    code: 250201,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "กบินทร์"
  },
  {
    code: 250202,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "เมืองเก่า"
  },
  {
    code: 250203,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "วังดาล"
  },
  {
    code: 250204,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "นนทรี"
  },
  {
    code: 250205,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "ย่านรี"
  },
  {
    code: 250206,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "วังตะเคียน"
  },
  {
    code: 250207,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "หาดนางแก้ว"
  },
  {
    code: 250208,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "ลาดตะเคียน"
  },
  {
    code: 250209,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "บ้านนา"
  },
  {
    code: 250210,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "บ่อทอง"
  },
  {
    code: 250211,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "หนองกี่"
  },
  {
    code: 250212,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "นาแขม"
  },
  {
    code: 250213,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "เขาไม้แก้ว"
  },
  {
    code: 250214,
    province: "ปราจีนบุรี",
    district: "อำเภอกบินทร์บุรี",
    subDistrict: "วังท่าช้าง"
  },
  {
    code: 250301,
    province: "ปราจีนบุรี",
    district: "อำเภอนาดี",
    subDistrict: "นาดี"
  },
  {
    code: 250302,
    province: "ปราจีนบุรี",
    district: "อำเภอนาดี",
    subDistrict: "สำพันตา"
  },
  {
    code: 250303,
    province: "ปราจีนบุรี",
    district: "อำเภอนาดี",
    subDistrict: "สะพานหิน"
  },
  {
    code: 250304,
    province: "ปราจีนบุรี",
    district: "อำเภอนาดี",
    subDistrict: "ทุ่งโพธิ์"
  },
  {
    code: 250305,
    province: "ปราจีนบุรี",
    district: "อำเภอนาดี",
    subDistrict: "แก่งดินสอ"
  },
  {
    code: 250306,
    province: "ปราจีนบุรี",
    district: "อำเภอนาดี",
    subDistrict: "บุพราหมณ์"
  },
  {
    code: 250601,
    province: "ปราจีนบุรี",
    district: "อำเภอบ้านสร้าง",
    subDistrict: "บ้านสร้าง"
  },
  {
    code: 250602,
    province: "ปราจีนบุรี",
    district: "อำเภอบ้านสร้าง",
    subDistrict: "บางกระเบา"
  },
  {
    code: 250603,
    province: "ปราจีนบุรี",
    district: "อำเภอบ้านสร้าง",
    subDistrict: "บางเตย"
  },
  {
    code: 250604,
    province: "ปราจีนบุรี",
    district: "อำเภอบ้านสร้าง",
    subDistrict: "บางยาง"
  },
  {
    code: 250605,
    province: "ปราจีนบุรี",
    district: "อำเภอบ้านสร้าง",
    subDistrict: "บางแตน"
  },
  {
    code: 250606,
    province: "ปราจีนบุรี",
    district: "อำเภอบ้านสร้าง",
    subDistrict: "บางพลวง"
  },
  {
    code: 250607,
    province: "ปราจีนบุรี",
    district: "อำเภอบ้านสร้าง",
    subDistrict: "บางปลาร้า"
  },
  {
    code: 250608,
    province: "ปราจีนบุรี",
    district: "อำเภอบ้านสร้าง",
    subDistrict: "บางขาม"
  },
  {
    code: 250609,
    province: "ปราจีนบุรี",
    district: "อำเภอบ้านสร้าง",
    subDistrict: "กระทุ่มแพ้ว"
  },
  {
    code: 250701,
    province: "ปราจีนบุรี",
    district: "อำเภอประจันตคาม",
    subDistrict: "ประจันตคาม"
  },
  {
    code: 250702,
    province: "ปราจีนบุรี",
    district: "อำเภอประจันตคาม",
    subDistrict: "เกาะลอย"
  },
  {
    code: 250703,
    province: "ปราจีนบุรี",
    district: "อำเภอประจันตคาม",
    subDistrict: "บ้านหอย"
  },
  {
    code: 250704,
    province: "ปราจีนบุรี",
    district: "อำเภอประจันตคาม",
    subDistrict: "หนองแสง"
  },
  {
    code: 250705,
    province: "ปราจีนบุรี",
    district: "อำเภอประจันตคาม",
    subDistrict: "ดงบัง"
  },
  {
    code: 250706,
    province: "ปราจีนบุรี",
    district: "อำเภอประจันตคาม",
    subDistrict: "คำโตนด"
  },
  {
    code: 250707,
    province: "ปราจีนบุรี",
    district: "อำเภอประจันตคาม",
    subDistrict: "บุฝ้าย"
  },
  {
    code: 250708,
    province: "ปราจีนบุรี",
    district: "อำเภอประจันตคาม",
    subDistrict: "หนองแก้ว"
  },
  {
    code: 250709,
    province: "ปราจีนบุรี",
    district: "อำเภอประจันตคาม",
    subDistrict: "โพธิ์งาม"
  },
  {
    code: 250801,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมหาโพธิ",
    subDistrict: "ศรีมหาโพธิ"
  },
  {
    code: 250802,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมหาโพธิ",
    subDistrict: "สัมพันธ์"
  },
  {
    code: 250803,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมหาโพธิ",
    subDistrict: "บ้านทาม"
  },
  {
    code: 250804,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมหาโพธิ",
    subDistrict: "ท่าตูม"
  },
  {
    code: 250805,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมหาโพธิ",
    subDistrict: "บางกุ้ง"
  },
  {
    code: 250806,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมหาโพธิ",
    subDistrict: "ดงกระทงยาม"
  },
  {
    code: 250807,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมหาโพธิ",
    subDistrict: "หนองโพรง"
  },
  {
    code: 250808,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมหาโพธิ",
    subDistrict: "หัวหว้า"
  },
  {
    code: 250809,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมหาโพธิ",
    subDistrict: "หาดยาง"
  },
  {
    code: 250810,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมหาโพธิ",
    subDistrict: "กรอกสมบูรณ์"
  },
  {
    code: 250901,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมโหสถ",
    subDistrict: "โคกปีบ"
  },
  {
    code: 250902,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมโหสถ",
    subDistrict: "โคกไทย"
  },
  {
    code: 250903,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมโหสถ",
    subDistrict: "คู้ลำพัน"
  },
  {
    code: 250904,
    province: "ปราจีนบุรี",
    district: "อำเภอศรีมโหสถ",
    subDistrict: "ไผ่ชะเลือด"
  },
  {
    code: 260101,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "นครนายก"
  },
  {
    code: 260102,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "ท่าช้าง"
  },
  {
    code: 260103,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "บ้านใหญ่"
  },
  {
    code: 260104,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "วังกระโจม"
  },
  {
    code: 260105,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "ท่าทราย"
  },
  {
    code: 260106,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "ดอนยอ"
  },
  {
    code: 260107,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "ศรีจุฬา"
  },
  {
    code: 260108,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "ดงละคร"
  },
  {
    code: 260109,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "ศรีนาวา"
  },
  {
    code: 260110,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "สาริกา"
  },
  {
    code: 260111,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "หินตั้ง"
  },
  {
    code: 260112,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "เขาพระ"
  },
  {
    code: 260113,
    province: "นครนายก",
    district: "อำเภอเมืองนครนายก",
    subDistrict: "พรหมณี"
  },
  {
    code: 260201,
    province: "นครนายก",
    district: "อำเภอปากพลี",
    subDistrict: "เกาะหวาย"
  },
  {
    code: 260202,
    province: "นครนายก",
    district: "อำเภอปากพลี",
    subDistrict: "เกาะโพธิ์"
  },
  {
    code: 260203,
    province: "นครนายก",
    district: "อำเภอปากพลี",
    subDistrict: "ปากพลี"
  },
  {
    code: 260204,
    province: "นครนายก",
    district: "อำเภอปากพลี",
    subDistrict: "โคกกรวด"
  },
  {
    code: 260205,
    province: "นครนายก",
    district: "อำเภอปากพลี",
    subDistrict: "ท่าเรือ"
  },
  {
    code: 260206,
    province: "นครนายก",
    district: "อำเภอปากพลี",
    subDistrict: "หนองแสง"
  },
  {
    code: 260207,
    province: "นครนายก",
    district: "อำเภอปากพลี",
    subDistrict: "นาหินลาด"
  },
  {
    code: 260301,
    province: "นครนายก",
    district: "อำเภอบ้านนา",
    subDistrict: "บ้านนา"
  },
  {
    code: 260302,
    province: "นครนายก",
    district: "อำเภอบ้านนา",
    subDistrict: "บ้านพร้าว"
  },
  {
    code: 260303,
    province: "นครนายก",
    district: "อำเภอบ้านนา",
    subDistrict: "บ้านพริก"
  },
  {
    code: 260304,
    province: "นครนายก",
    district: "อำเภอบ้านนา",
    subDistrict: "อาษา"
  },
  {
    code: 260305,
    province: "นครนายก",
    district: "อำเภอบ้านนา",
    subDistrict: "ทองหลาง"
  },
  {
    code: 260306,
    province: "นครนายก",
    district: "อำเภอบ้านนา",
    subDistrict: "บางอ้อ"
  },
  {
    code: 260307,
    province: "นครนายก",
    district: "อำเภอบ้านนา",
    subDistrict: "พิกุลออก"
  },
  {
    code: 260308,
    province: "นครนายก",
    district: "อำเภอบ้านนา",
    subDistrict: "ป่าขะ"
  },
  {
    code: 260309,
    province: "นครนายก",
    district: "อำเภอบ้านนา",
    subDistrict: "เขาเพิ่ม"
  },
  {
    code: 260310,
    province: "นครนายก",
    district: "อำเภอบ้านนา",
    subDistrict: "ศรีกะอาง"
  },
  {
    code: 260401,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "พระอาจารย์"
  },
  {
    code: 260402,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "บึงศาล"
  },
  {
    code: 260403,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "ศีรษะกระบือ"
  },
  {
    code: 260404,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "โพธิ์แทน"
  },
  {
    code: 260405,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "บางสมบูรณ์"
  },
  {
    code: 260406,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "ทรายมูล"
  },
  {
    code: 260407,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "บางปลากด"
  },
  {
    code: 260408,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "บางลูกเสือ"
  },
  {
    code: 260409,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "องครักษ์"
  },
  {
    code: 260410,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "ชุมพล"
  },
  {
    code: 260411,
    province: "นครนายก",
    district: "อำเภอองครักษ์",
    subDistrict: "คลองใหญ่"
  },
  {
    code: 270101,
    province: "สระแก้ว",
    district: "อำเภอเมืองสระแก้ว",
    subDistrict: "สระแก้ว"
  },
  {
    code: 270102,
    province: "สระแก้ว",
    district: "อำเภอเมืองสระแก้ว",
    subDistrict: "บ้านแก้ง"
  },
  {
    code: 270103,
    province: "สระแก้ว",
    district: "อำเภอเมืองสระแก้ว",
    subDistrict: "ศาลาลำดวน"
  },
  {
    code: 270104,
    province: "สระแก้ว",
    district: "อำเภอเมืองสระแก้ว",
    subDistrict: "โคกปี่ฆ้อง"
  },
  {
    code: 270105,
    province: "สระแก้ว",
    district: "อำเภอเมืองสระแก้ว",
    subDistrict: "ท่าแยก"
  },
  {
    code: 270106,
    province: "สระแก้ว",
    district: "อำเภอเมืองสระแก้ว",
    subDistrict: "ท่าเกษม"
  },
  {
    code: 270108,
    province: "สระแก้ว",
    district: "อำเภอเมืองสระแก้ว",
    subDistrict: "สระขวัญ"
  },
  {
    code: 270111,
    province: "สระแก้ว",
    district: "อำเภอเมืองสระแก้ว",
    subDistrict: "หนองบอน"
  },
  {
    code: 270201,
    province: "สระแก้ว",
    district: "อำเภอคลองหาด",
    subDistrict: "คลองหาด"
  },
  {
    code: 270202,
    province: "สระแก้ว",
    district: "อำเภอคลองหาด",
    subDistrict: "ไทยอุดม"
  },
  {
    code: 270203,
    province: "สระแก้ว",
    district: "อำเภอคลองหาด",
    subDistrict: "ซับมะกรูด"
  },
  {
    code: 270204,
    province: "สระแก้ว",
    district: "อำเภอคลองหาด",
    subDistrict: "ไทรเดี่ยว"
  },
  {
    code: 270205,
    province: "สระแก้ว",
    district: "อำเภอคลองหาด",
    subDistrict: "คลองไก่เถื่อน"
  },
  {
    code: 270206,
    province: "สระแก้ว",
    district: "อำเภอคลองหาด",
    subDistrict: "เบญจขร"
  },
  {
    code: 270207,
    province: "สระแก้ว",
    district: "อำเภอคลองหาด",
    subDistrict: "ไทรทอง"
  },
  {
    code: 270301,
    province: "สระแก้ว",
    district: "อำเภอตาพระยา",
    subDistrict: "ตาพระยา"
  },
  {
    code: 270302,
    province: "สระแก้ว",
    district: "อำเภอตาพระยา",
    subDistrict: "ทัพเสด็จ"
  },
  {
    code: 270306,
    province: "สระแก้ว",
    district: "อำเภอตาพระยา",
    subDistrict: "ทัพราช"
  },
  {
    code: 270307,
    province: "สระแก้ว",
    district: "อำเภอตาพระยา",
    subDistrict: "ทัพไทย"
  },
  {
    code: 270309,
    province: "สระแก้ว",
    district: "อำเภอตาพระยา",
    subDistrict: "โคคลาน"
  },
  {
    code: 270401,
    province: "สระแก้ว",
    district: "อำเภอวังน้ำเย็น",
    subDistrict: "วังน้ำเย็น"
  },
  {
    code: 270403,
    province: "สระแก้ว",
    district: "อำเภอวังน้ำเย็น",
    subDistrict: "ตาหลังใน"
  },
  {
    code: 270405,
    province: "สระแก้ว",
    district: "อำเภอวังน้ำเย็น",
    subDistrict: "คลองหินปูน"
  },
  {
    code: 270406,
    province: "สระแก้ว",
    district: "อำเภอวังน้ำเย็น",
    subDistrict: "ทุ่งมหาเจริญ"
  },
  {
    code: 270501,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "วัฒนานคร"
  },
  {
    code: 270502,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "ท่าเกวียน"
  },
  {
    code: 270503,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "ผักขะ"
  },
  {
    code: 270504,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "โนนหมากเค็ง"
  },
  {
    code: 270505,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "หนองน้ำใส"
  },
  {
    code: 270506,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "ช่องกุ่ม"
  },
  {
    code: 270507,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "หนองแวง"
  },
  {
    code: 270508,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "แซร์ออ"
  },
  {
    code: 270509,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "หนองหมากฝ้าย"
  },
  {
    code: 270510,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "หนองตะเคียนบอน"
  },
  {
    code: 270511,
    province: "สระแก้ว",
    district: "อำเภอวัฒนานคร",
    subDistrict: "ห้วยโจด"
  },
  {
    code: 270601,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "อรัญประเทศ"
  },
  {
    code: 270602,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "เมืองไผ่"
  },
  {
    code: 270603,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "หันทราย"
  },
  {
    code: 270604,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "คลองน้ำใส"
  },
  {
    code: 270605,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 270606,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "ป่าไร่"
  },
  {
    code: 270607,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "ทับพริก"
  },
  {
    code: 270608,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "บ้านใหม่หนองไทร"
  },
  {
    code: 270609,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "ผ่านศึก"
  },
  {
    code: 270610,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "หนองสังข์"
  },
  {
    code: 270611,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "คลองทับจันทร์"
  },
  {
    code: 270612,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "ฟากห้วย"
  },
  {
    code: 270613,
    province: "สระแก้ว",
    district: "อำเภออรัญประเทศ",
    subDistrict: "บ้านด่าน"
  },
  {
    code: 270701,
    province: "สระแก้ว",
    district: "อำเภอเขาฉกรรจ์",
    subDistrict: "เขาฉกรรจ์"
  },
  {
    code: 270702,
    province: "สระแก้ว",
    district: "อำเภอเขาฉกรรจ์",
    subDistrict: "หนองหว้า"
  },
  {
    code: 270703,
    province: "สระแก้ว",
    district: "อำเภอเขาฉกรรจ์",
    subDistrict: "พระเพลิง"
  },
  {
    code: 270704,
    province: "สระแก้ว",
    district: "อำเภอเขาฉกรรจ์",
    subDistrict: "เขาสามสิบ"
  },
  {
    code: 270801,
    province: "สระแก้ว",
    district: "อำเภอโคกสูง",
    subDistrict: "โคกสูง"
  },
  {
    code: 270802,
    province: "สระแก้ว",
    district: "อำเภอโคกสูง",
    subDistrict: "หนองม่วง"
  },
  {
    code: 270803,
    province: "สระแก้ว",
    district: "อำเภอโคกสูง",
    subDistrict: "หนองแวง"
  },
  {
    code: 270804,
    province: "สระแก้ว",
    district: "อำเภอโคกสูง",
    subDistrict: "โนนหมากมุ่น"
  },
  {
    code: 270901,
    province: "สระแก้ว",
    district: "อำเภอวังสมบูรณ์",
    subDistrict: "วังสมบูรณ์"
  },
  {
    code: 270902,
    province: "สระแก้ว",
    district: "อำเภอวังสมบูรณ์",
    subDistrict: "วังใหม่"
  },
  {
    code: 270903,
    province: "สระแก้ว",
    district: "อำเภอวังสมบูรณ์",
    subDistrict: "วังทอง"
  },
  {
    code: 300101,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "ในเมือง"
  },
  {
    code: 300102,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "โพธิ์กลาง"
  },
  {
    code: 300103,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "หนองจะบก"
  },
  {
    code: 300104,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "โคกสูง"
  },
  {
    code: 300105,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "มะเริง"
  },
  {
    code: 300106,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "หนองระเวียง"
  },
  {
    code: 300107,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "ปรุใหญ่"
  },
  {
    code: 300108,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "หมื่นไวย"
  },
  {
    code: 300109,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "พลกรัง"
  },
  {
    code: 300110,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "หนองไผ่ล้อม"
  },
  {
    code: 300111,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "หัวทะเล"
  },
  {
    code: 300112,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "บ้านเกาะ"
  },
  {
    code: 300113,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 300114,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "พุดซา"
  },
  {
    code: 300115,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "บ้านโพธิ์"
  },
  {
    code: 300116,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "จอหอ"
  },
  {
    code: 300117,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "โคกกรวด"
  },
  {
    code: 300118,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "ไชยมงคล"
  },
  {
    code: 300119,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "หนองบัวศาลา"
  },
  {
    code: 300120,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "สุรนารี"
  },
  {
    code: 300121,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "สีมุม"
  },
  {
    code: 300122,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "ตลาด"
  },
  {
    code: 300123,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "พะเนา"
  },
  {
    code: 300124,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "หนองกระทุ่ม"
  },
  {
    code: 300125,
    province: "นครราชสีมา",
    district: "อำเภอเมืองนครราชสีมา",
    subDistrict: "หนองไข่น้ำ"
  },
  {
    code: 300201,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "แชะ"
  },
  {
    code: 300202,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "เฉลียง"
  },
  {
    code: 300203,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "ครบุรี"
  },
  {
    code: 300204,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "โคกกระชาย"
  },
  {
    code: 300205,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "จระเข้หิน"
  },
  {
    code: 300206,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "มาบตะโกเอน"
  },
  {
    code: 300207,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "อรพิมพ์"
  },
  {
    code: 300208,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 300209,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "ลำเพียก"
  },
  {
    code: 300210,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "ครบุรีใต้"
  },
  {
    code: 300211,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "ตะแบกบาน"
  },
  {
    code: 300212,
    province: "นครราชสีมา",
    district: "อำเภอครบุรี",
    subDistrict: "สระว่านพระยา"
  },
  {
    code: 300301,
    province: "นครราชสีมา",
    district: "อำเภอเสิงสาง",
    subDistrict: "เสิงสาง"
  },
  {
    code: 300302,
    province: "นครราชสีมา",
    district: "อำเภอเสิงสาง",
    subDistrict: "สระตะเคียน"
  },
  {
    code: 300303,
    province: "นครราชสีมา",
    district: "อำเภอเสิงสาง",
    subDistrict: "โนนสมบูรณ์"
  },
  {
    code: 300304,
    province: "นครราชสีมา",
    district: "อำเภอเสิงสาง",
    subDistrict: "กุดโบสถ์"
  },
  {
    code: 300305,
    province: "นครราชสีมา",
    district: "อำเภอเสิงสาง",
    subDistrict: "สุขไพบูลย์"
  },
  {
    code: 300306,
    province: "นครราชสีมา",
    district: "อำเภอเสิงสาง",
    subDistrict: "บ้านราษฎร์"
  },
  {
    code: 300401,
    province: "นครราชสีมา",
    district: "อำเภอคง",
    subDistrict: "เมืองคง"
  },
  {
    code: 300402,
    province: "นครราชสีมา",
    district: "อำเภอคง",
    subDistrict: "คูขาด"
  },
  {
    code: 300403,
    province: "นครราชสีมา",
    district: "อำเภอคง",
    subDistrict: "เทพาลัย"
  },
  {
    code: 300404,
    province: "นครราชสีมา",
    district: "อำเภอคง",
    subDistrict: "ตาจั่น"
  },
  {
    code: 300405,
    province: "นครราชสีมา",
    district: "อำเภอคง",
    subDistrict: "บ้านปรางค์"
  },
  {
    code: 300406,
    province: "นครราชสีมา",
    district: "อำเภอคง",
    subDistrict: "หนองมะนาว"
  },
  {
    code: 300407,
    province: "นครราชสีมา",
    district: "อำเภอคง",
    subDistrict: "หนองบัว"
  },
  {
    code: 300408,
    province: "นครราชสีมา",
    district: "อำเภอคง",
    subDistrict: "โนนเต็ง"
  },
  {
    code: 300409,
    province: "นครราชสีมา",
    district: "อำเภอคง",
    subDistrict: "ดอนใหญ่"
  },
  {
    code: 300410,
    province: "นครราชสีมา",
    district: "อำเภอคง",
    subDistrict: "ขามสมบูรณ์"
  },
  {
    code: 300501,
    province: "นครราชสีมา",
    district: "อำเภอบ้านเหลื่อม",
    subDistrict: "บ้านเหลื่อม"
  },
  {
    code: 300502,
    province: "นครราชสีมา",
    district: "อำเภอบ้านเหลื่อม",
    subDistrict: "วังโพธิ์"
  },
  {
    code: 300503,
    province: "นครราชสีมา",
    district: "อำเภอบ้านเหลื่อม",
    subDistrict: "โคกกระเบื้อง"
  },
  {
    code: 300504,
    province: "นครราชสีมา",
    district: "อำเภอบ้านเหลื่อม",
    subDistrict: "ช่อระกา"
  },
  {
    code: 300601,
    province: "นครราชสีมา",
    district: "อำเภอจักราช",
    subDistrict: "จักราช"
  },
  {
    code: 300603,
    province: "นครราชสีมา",
    district: "อำเภอจักราช",
    subDistrict: "ทองหลาง"
  },
  {
    code: 300604,
    province: "นครราชสีมา",
    district: "อำเภอจักราช",
    subDistrict: "สีสุก"
  },
  {
    code: 300605,
    province: "นครราชสีมา",
    district: "อำเภอจักราช",
    subDistrict: "หนองขาม"
  },
  {
    code: 300607,
    province: "นครราชสีมา",
    district: "อำเภอจักราช",
    subDistrict: "หนองพลวง"
  },
  {
    code: 300610,
    province: "นครราชสีมา",
    district: "อำเภอจักราช",
    subDistrict: "ศรีละกอ"
  },
  {
    code: 300611,
    province: "นครราชสีมา",
    district: "อำเภอจักราช",
    subDistrict: "คลองเมือง"
  },
  {
    code: 300613,
    province: "นครราชสีมา",
    district: "อำเภอจักราช",
    subDistrict: "หินโคน"
  },
  {
    code: 300701,
    province: "นครราชสีมา",
    district: "อำเภอโชคชัย",
    subDistrict: "กระโทก"
  },
  {
    code: 300702,
    province: "นครราชสีมา",
    district: "อำเภอโชคชัย",
    subDistrict: "พลับพลา"
  },
  {
    code: 300703,
    province: "นครราชสีมา",
    district: "อำเภอโชคชัย",
    subDistrict: "ท่าอ่าง"
  },
  {
    code: 300704,
    province: "นครราชสีมา",
    district: "อำเภอโชคชัย",
    subDistrict: "ทุ่งอรุณ"
  },
  {
    code: 300705,
    province: "นครราชสีมา",
    district: "อำเภอโชคชัย",
    subDistrict: "ท่าลาดขาว"
  },
  {
    code: 300706,
    province: "นครราชสีมา",
    district: "อำเภอโชคชัย",
    subDistrict: "ท่าจะหลุง"
  },
  {
    code: 300707,
    province: "นครราชสีมา",
    district: "อำเภอโชคชัย",
    subDistrict: "ท่าเยี่ยม"
  },
  {
    code: 300708,
    province: "นครราชสีมา",
    district: "อำเภอโชคชัย",
    subDistrict: "โชคชัย"
  },
  {
    code: 300709,
    province: "นครราชสีมา",
    district: "อำเภอโชคชัย",
    subDistrict: "ละลมใหม่พัฒนา"
  },
  {
    code: 300710,
    province: "นครราชสีมา",
    district: "อำเภอโชคชัย",
    subDistrict: "ด่านเกวียน"
  },
  {
    code: 300801,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "กุดพิมาน"
  },
  {
    code: 300802,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "ด่านขุนทด"
  },
  {
    code: 300803,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "ด่านนอก"
  },
  {
    code: 300804,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "ด่านใน"
  },
  {
    code: 300805,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "ตะเคียน"
  },
  {
    code: 300806,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "บ้านเก่า"
  },
  {
    code: 300807,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "บ้านแปรง"
  },
  {
    code: 300808,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "พันชนะ"
  },
  {
    code: 300809,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "สระจรเข้"
  },
  {
    code: 300810,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "หนองกราด"
  },
  {
    code: 300811,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "หนองบัวตะเกียด"
  },
  {
    code: 300812,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "หนองบัวละคร"
  },
  {
    code: 300813,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "หินดาด"
  },
  {
    code: 300815,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "ห้วยบง"
  },
  {
    code: 300817,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "โนนเมืองพัฒนา"
  },
  {
    code: 300818,
    province: "นครราชสีมา",
    district: "อำเภอด่านขุนทด",
    subDistrict: "หนองไทร"
  },
  {
    code: 300901,
    province: "นครราชสีมา",
    district: "อำเภอโนนไทย",
    subDistrict: "โนนไทย"
  },
  {
    code: 300902,
    province: "นครราชสีมา",
    district: "อำเภอโนนไทย",
    subDistrict: "ด่านจาก"
  },
  {
    code: 300903,
    province: "นครราชสีมา",
    district: "อำเภอโนนไทย",
    subDistrict: "กำปัง"
  },
  {
    code: 300904,
    province: "นครราชสีมา",
    district: "อำเภอโนนไทย",
    subDistrict: "สำโรง"
  },
  {
    code: 300905,
    province: "นครราชสีมา",
    district: "อำเภอโนนไทย",
    subDistrict: "ค้างพลู"
  },
  {
    code: 300906,
    province: "นครราชสีมา",
    district: "อำเภอโนนไทย",
    subDistrict: "บ้านวัง"
  },
  {
    code: 300907,
    province: "นครราชสีมา",
    district: "อำเภอโนนไทย",
    subDistrict: "บัลลังก์"
  },
  {
    code: 300908,
    province: "นครราชสีมา",
    district: "อำเภอโนนไทย",
    subDistrict: "สายออ"
  },
  {
    code: 300909,
    province: "นครราชสีมา",
    district: "อำเภอโนนไทย",
    subDistrict: "ถนนโพธิ์"
  },
  {
    code: 300914,
    province: "นครราชสีมา",
    district: "อำเภอโนนไทย",
    subDistrict: "มะค่า"
  },
  {
    code: 301001,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "โนนสูง"
  },
  {
    code: 301002,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "ใหม่"
  },
  {
    code: 301003,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "โตนด"
  },
  {
    code: 301004,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "บิง"
  },
  {
    code: 301005,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "ดอนชมพู"
  },
  {
    code: 301006,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "ธารปราสาท"
  },
  {
    code: 301007,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "หลุมข้าว"
  },
  {
    code: 301008,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "มะค่า"
  },
  {
    code: 301009,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "พลสงคราม"
  },
  {
    code: 301010,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "จันอัด"
  },
  {
    code: 301011,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "ขามเฒ่า"
  },
  {
    code: 301012,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "ด่านคล้า"
  },
  {
    code: 301013,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "ลำคอหงษ์"
  },
  {
    code: 301014,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "เมืองปราสาท"
  },
  {
    code: 301015,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "ดอนหวาย"
  },
  {
    code: 301016,
    province: "นครราชสีมา",
    district: "อำเภอโนนสูง",
    subDistrict: "ลำมูล"
  },
  {
    code: 301101,
    province: "นครราชสีมา",
    district: "อำเภอขามสะแกแสง",
    subDistrict: "ขามสะแกแสง"
  },
  {
    code: 301102,
    province: "นครราชสีมา",
    district: "อำเภอขามสะแกแสง",
    subDistrict: "โนนเมือง"
  },
  {
    code: 301103,
    province: "นครราชสีมา",
    district: "อำเภอขามสะแกแสง",
    subDistrict: "เมืองนาท"
  },
  {
    code: 301104,
    province: "นครราชสีมา",
    district: "อำเภอขามสะแกแสง",
    subDistrict: "ชีวึก"
  },
  {
    code: 301105,
    province: "นครราชสีมา",
    district: "อำเภอขามสะแกแสง",
    subDistrict: "พะงาด"
  },
  {
    code: 301106,
    province: "นครราชสีมา",
    district: "อำเภอขามสะแกแสง",
    subDistrict: "หนองหัวฟาน"
  },
  {
    code: 301107,
    province: "นครราชสีมา",
    district: "อำเภอขามสะแกแสง",
    subDistrict: "เมืองเกษตร"
  },
  {
    code: 301201,
    province: "นครราชสีมา",
    district: "อำเภอบัวใหญ่",
    subDistrict: "บัวใหญ่"
  },
  {
    code: 301203,
    province: "นครราชสีมา",
    district: "อำเภอบัวใหญ่",
    subDistrict: "ห้วยยาง"
  },
  {
    code: 301204,
    province: "นครราชสีมา",
    district: "อำเภอบัวใหญ่",
    subDistrict: "เสมาใหญ่"
  },
  {
    code: 301206,
    province: "นครราชสีมา",
    district: "อำเภอบัวใหญ่",
    subDistrict: "ดอนตะหนิน"
  },
  {
    code: 301207,
    province: "นครราชสีมา",
    district: "อำเภอบัวใหญ่",
    subDistrict: "หนองบัวสะอาด"
  },
  {
    code: 301208,
    province: "นครราชสีมา",
    district: "อำเภอบัวใหญ่",
    subDistrict: "โนนทองหลาง"
  },
  {
    code: 301214,
    province: "นครราชสีมา",
    district: "อำเภอบัวใหญ่",
    subDistrict: "กุดจอก"
  },
  {
    code: 301215,
    province: "นครราชสีมา",
    district: "อำเภอบัวใหญ่",
    subDistrict: "ด่านช้าง"
  },
  {
    code: 301220,
    province: "นครราชสีมา",
    district: "อำเภอบัวใหญ่",
    subDistrict: "ขุนทอง"
  },
  {
    code: 301224,
    province: "นครราชสีมา",
    district: "อำเภอบัวใหญ่",
    subDistrict: "หนองแจ้งใหญ่"
  },
  {
    code: 301301,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "ประทาย"
  },
  {
    code: 301303,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "กระทุ่มราย"
  },
  {
    code: 301304,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "วังไม้แดง"
  },
  {
    code: 301306,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "ตลาดไทร"
  },
  {
    code: 301307,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "หนองพลวง"
  },
  {
    code: 301308,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "หนองค่าย"
  },
  {
    code: 301309,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "หันห้วยทราย"
  },
  {
    code: 301310,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "ดอนมัน"
  },
  {
    code: 301313,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "นางรำ"
  },
  {
    code: 301314,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "โนนเพ็ด"
  },
  {
    code: 301315,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "ทุ่งสว่าง"
  },
  {
    code: 301317,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "โคกกลาง"
  },
  {
    code: 301318,
    province: "นครราชสีมา",
    district: "อำเภอประทาย",
    subDistrict: "เมืองโดน"
  },
  {
    code: 301401,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "เมืองปัก"
  },
  {
    code: 301402,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "ตะคุ"
  },
  {
    code: 301403,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "โคกไทย"
  },
  {
    code: 301404,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "สำโรง"
  },
  {
    code: 301405,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "ตะขบ"
  },
  {
    code: 301406,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "นกออก"
  },
  {
    code: 301407,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "ดอน"
  },
  {
    code: 301409,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "ตูม"
  },
  {
    code: 301410,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "งิ้ว"
  },
  {
    code: 301411,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "สะแกราช"
  },
  {
    code: 301412,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "ลำนางแก้ว"
  },
  {
    code: 301416,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "ภูหลวง"
  },
  {
    code: 301417,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "ธงชัยเหนือ"
  },
  {
    code: 301418,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "สุขเกษม"
  },
  {
    code: 301419,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "เกษมทรัพย์"
  },
  {
    code: 301420,
    province: "นครราชสีมา",
    district: "อำเภอปักธงชัย",
    subDistrict: "บ่อปลาทอง"
  },
  {
    code: 301501,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "ในเมือง"
  },
  {
    code: 301502,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "สัมฤทธิ์"
  },
  {
    code: 301503,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "โบสถ์"
  },
  {
    code: 301504,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "กระเบื้องใหญ่"
  },
  {
    code: 301505,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "ท่าหลวง"
  },
  {
    code: 301506,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "รังกาใหญ่"
  },
  {
    code: 301507,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "ชีวาน"
  },
  {
    code: 301508,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "นิคมสร้างตนเอง"
  },
  {
    code: 301509,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "กระชอน"
  },
  {
    code: 301510,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "ดงใหญ่"
  },
  {
    code: 301511,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "ธารละหลอด"
  },
  {
    code: 301512,
    province: "นครราชสีมา",
    district: "อำเภอพิมาย",
    subDistrict: "หนองระเวียง"
  },
  {
    code: 301601,
    province: "นครราชสีมา",
    district: "อำเภอห้วยแถลง",
    subDistrict: "ห้วยแถลง"
  },
  {
    code: 301602,
    province: "นครราชสีมา",
    district: "อำเภอห้วยแถลง",
    subDistrict: "ทับสวาย"
  },
  {
    code: 301603,
    province: "นครราชสีมา",
    district: "อำเภอห้วยแถลง",
    subDistrict: "เมืองพลับพลา"
  },
  {
    code: 301604,
    province: "นครราชสีมา",
    district: "อำเภอห้วยแถลง",
    subDistrict: "หลุ่งตะเคียน"
  },
  {
    code: 301605,
    province: "นครราชสีมา",
    district: "อำเภอห้วยแถลง",
    subDistrict: "หินดาด"
  },
  {
    code: 301606,
    province: "นครราชสีมา",
    district: "อำเภอห้วยแถลง",
    subDistrict: "งิ้ว"
  },
  {
    code: 301607,
    province: "นครราชสีมา",
    district: "อำเภอห้วยแถลง",
    subDistrict: "กงรถ"
  },
  {
    code: 301608,
    province: "นครราชสีมา",
    district: "อำเภอห้วยแถลง",
    subDistrict: "หลุ่งประดู่"
  },
  {
    code: 301609,
    province: "นครราชสีมา",
    district: "อำเภอห้วยแถลง",
    subDistrict: "ตะโก"
  },
  {
    code: 301610,
    province: "นครราชสีมา",
    district: "อำเภอห้วยแถลง",
    subDistrict: "ห้วยแคน"
  },
  {
    code: 301701,
    province: "นครราชสีมา",
    district: "อำเภอชุมพวง",
    subDistrict: "ชุมพวง"
  },
  {
    code: 301702,
    province: "นครราชสีมา",
    district: "อำเภอชุมพวง",
    subDistrict: "ประสุข"
  },
  {
    code: 301703,
    province: "นครราชสีมา",
    district: "อำเภอชุมพวง",
    subDistrict: "ท่าลาด"
  },
  {
    code: 301704,
    province: "นครราชสีมา",
    district: "อำเภอชุมพวง",
    subDistrict: "สาหร่าย"
  },
  {
    code: 301705,
    province: "นครราชสีมา",
    district: "อำเภอชุมพวง",
    subDistrict: "ตลาดไทร"
  },
  {
    code: 301710,
    province: "นครราชสีมา",
    district: "อำเภอชุมพวง",
    subDistrict: "โนนรัง"
  },
  {
    code: 301714,
    province: "นครราชสีมา",
    district: "อำเภอชุมพวง",
    subDistrict: "หนองหลัก"
  },
  {
    code: 301716,
    province: "นครราชสีมา",
    district: "อำเภอชุมพวง",
    subDistrict: "โนนตูม"
  },
  {
    code: 301717,
    province: "นครราชสีมา",
    district: "อำเภอชุมพวง",
    subDistrict: "โนนยอ"
  },
  {
    code: 301801,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "สูงเนิน"
  },
  {
    code: 301802,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "เสมา"
  },
  {
    code: 301803,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "โคราช"
  },
  {
    code: 301804,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "บุ่งขี้เหล็ก"
  },
  {
    code: 301805,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "โนนค่า"
  },
  {
    code: 301806,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "โค้งยาง"
  },
  {
    code: 301807,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "มะเกลือเก่า"
  },
  {
    code: 301808,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "มะเกลือใหม่"
  },
  {
    code: 301809,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "นากลาง"
  },
  {
    code: 301810,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "หนองตะไก้"
  },
  {
    code: 301811,
    province: "นครราชสีมา",
    district: "อำเภอสูงเนิน",
    subDistrict: "กุดจิก"
  },
  {
    code: 301901,
    province: "นครราชสีมา",
    district: "อำเภอขามทะเลสอ",
    subDistrict: "ขามทะเลสอ"
  },
  {
    code: 301902,
    province: "นครราชสีมา",
    district: "อำเภอขามทะเลสอ",
    subDistrict: "โป่งแดง"
  },
  {
    code: 301903,
    province: "นครราชสีมา",
    district: "อำเภอขามทะเลสอ",
    subDistrict: "พันดุง"
  },
  {
    code: 301904,
    province: "นครราชสีมา",
    district: "อำเภอขามทะเลสอ",
    subDistrict: "หนองสรวง"
  },
  {
    code: 301905,
    province: "นครราชสีมา",
    district: "อำเภอขามทะเลสอ",
    subDistrict: "บึงอ้อ"
  },
  {
    code: 302001,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "สีคิ้ว"
  },
  {
    code: 302002,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "บ้านหัน"
  },
  {
    code: 302003,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "กฤษณา"
  },
  {
    code: 302004,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "ลาดบัวขาว"
  },
  {
    code: 302005,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "หนองหญ้าขาว"
  },
  {
    code: 302006,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "กุดน้อย"
  },
  {
    code: 302007,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "หนองน้ำใส"
  },
  {
    code: 302008,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "วังโรงใหญ่"
  },
  {
    code: 302009,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "มิตรภาพ"
  },
  {
    code: 302010,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "คลองไผ่"
  },
  {
    code: 302011,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "ดอนเมือง"
  },
  {
    code: 302012,
    province: "นครราชสีมา",
    district: "อำเภอสีคิ้ว",
    subDistrict: "หนองบัวน้อย"
  },
  {
    code: 302101,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "ปากช่อง"
  },
  {
    code: 302102,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "กลางดง"
  },
  {
    code: 302103,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "จันทึก"
  },
  {
    code: 302104,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "วังกะทะ"
  },
  {
    code: 302105,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "หมูสี"
  },
  {
    code: 302106,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "หนองสาหร่าย"
  },
  {
    code: 302107,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "ขนงพระ"
  },
  {
    code: 302108,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "โป่งตาลอง"
  },
  {
    code: 302109,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "คลองม่วง"
  },
  {
    code: 302110,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "หนองน้ำแดง"
  },
  {
    code: 302111,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "วังไทร"
  },
  {
    code: 302112,
    province: "นครราชสีมา",
    district: "อำเภอปากช่อง",
    subDistrict: "พญาเย็น"
  },
  {
    code: 302201,
    province: "นครราชสีมา",
    district: "อำเภอหนองบุญมาก",
    subDistrict: "หนองบุนนาก"
  },
  {
    code: 302202,
    province: "นครราชสีมา",
    district: "อำเภอหนองบุญมาก",
    subDistrict: "สารภี"
  },
  {
    code: 302203,
    province: "นครราชสีมา",
    district: "อำเภอหนองบุญมาก",
    subDistrict: "ไทยเจริญ"
  },
  {
    code: 302204,
    province: "นครราชสีมา",
    district: "อำเภอหนองบุญมาก",
    subDistrict: "หนองหัวแรต"
  },
  {
    code: 302205,
    province: "นครราชสีมา",
    district: "อำเภอหนองบุญมาก",
    subDistrict: "แหลมทอง"
  },
  {
    code: 302206,
    province: "นครราชสีมา",
    district: "อำเภอหนองบุญมาก",
    subDistrict: "หนองตะไก้"
  },
  {
    code: 302207,
    province: "นครราชสีมา",
    district: "อำเภอหนองบุญมาก",
    subDistrict: "ลุงเขว้า"
  },
  {
    code: 302208,
    province: "นครราชสีมา",
    district: "อำเภอหนองบุญมาก",
    subDistrict: "หนองไม้ไผ่"
  },
  {
    code: 302209,
    province: "นครราชสีมา",
    district: "อำเภอหนองบุญมาก",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 302301,
    province: "นครราชสีมา",
    district: "อำเภอแก้งสนามนาง",
    subDistrict: "แก้งสนามนาง"
  },
  {
    code: 302302,
    province: "นครราชสีมา",
    district: "อำเภอแก้งสนามนาง",
    subDistrict: "โนนสำราญ"
  },
  {
    code: 302303,
    province: "นครราชสีมา",
    district: "อำเภอแก้งสนามนาง",
    subDistrict: "บึงพะไล"
  },
  {
    code: 302304,
    province: "นครราชสีมา",
    district: "อำเภอแก้งสนามนาง",
    subDistrict: "สีสุก"
  },
  {
    code: 302305,
    province: "นครราชสีมา",
    district: "อำเภอแก้งสนามนาง",
    subDistrict: "บึงสำโรง"
  },
  {
    code: 302401,
    province: "นครราชสีมา",
    district: "อำเภอโนนแดง",
    subDistrict: "โนนแดง"
  },
  {
    code: 302402,
    province: "นครราชสีมา",
    district: "อำเภอโนนแดง",
    subDistrict: "โนนตาเถร"
  },
  {
    code: 302403,
    province: "นครราชสีมา",
    district: "อำเภอโนนแดง",
    subDistrict: "สำพะเนียง"
  },
  {
    code: 302404,
    province: "นครราชสีมา",
    district: "อำเภอโนนแดง",
    subDistrict: "วังหิน"
  },
  {
    code: 302405,
    province: "นครราชสีมา",
    district: "อำเภอโนนแดง",
    subDistrict: "ดอนยาวใหญ่"
  },
  {
    code: 302501,
    province: "นครราชสีมา",
    district: "อำเภอวังน้ำเขียว",
    subDistrict: "วังน้ำเขียว"
  },
  {
    code: 302502,
    province: "นครราชสีมา",
    district: "อำเภอวังน้ำเขียว",
    subDistrict: "วังหมี"
  },
  {
    code: 302503,
    province: "นครราชสีมา",
    district: "อำเภอวังน้ำเขียว",
    subDistrict: "ระเริง"
  },
  {
    code: 302504,
    province: "นครราชสีมา",
    district: "อำเภอวังน้ำเขียว",
    subDistrict: "อุดมทรัพย์"
  },
  {
    code: 302505,
    province: "นครราชสีมา",
    district: "อำเภอวังน้ำเขียว",
    subDistrict: "ไทยสามัคคี"
  },
  {
    code: 302601,
    province: "นครราชสีมา",
    district: "อำเภอเทพารักษ์",
    subDistrict: "สำนักตะคร้อ"
  },
  {
    code: 302602,
    province: "นครราชสีมา",
    district: "อำเภอเทพารักษ์",
    subDistrict: "หนองแวง"
  },
  {
    code: 302603,
    province: "นครราชสีมา",
    district: "อำเภอเทพารักษ์",
    subDistrict: "บึงปรือ"
  },
  {
    code: 302604,
    province: "นครราชสีมา",
    district: "อำเภอเทพารักษ์",
    subDistrict: "วังยายทอง"
  },
  {
    code: 302701,
    province: "นครราชสีมา",
    district: "อำเภอเมืองยาง",
    subDistrict: "เมืองยาง"
  },
  {
    code: 302702,
    province: "นครราชสีมา",
    district: "อำเภอเมืองยาง",
    subDistrict: "กระเบื้องนอก"
  },
  {
    code: 302703,
    province: "นครราชสีมา",
    district: "อำเภอเมืองยาง",
    subDistrict: "ละหานปลาค้าว"
  },
  {
    code: 302704,
    province: "นครราชสีมา",
    district: "อำเภอเมืองยาง",
    subDistrict: "โนนอุดม"
  },
  {
    code: 302801,
    province: "นครราชสีมา",
    district: "อำเภอพระทองคำ",
    subDistrict: "สระพระ"
  },
  {
    code: 302802,
    province: "นครราชสีมา",
    district: "อำเภอพระทองคำ",
    subDistrict: "มาบกราด"
  },
  {
    code: 302803,
    province: "นครราชสีมา",
    district: "อำเภอพระทองคำ",
    subDistrict: "พังเทียม"
  },
  {
    code: 302804,
    province: "นครราชสีมา",
    district: "อำเภอพระทองคำ",
    subDistrict: "ทัพรั้ง"
  },
  {
    code: 302805,
    province: "นครราชสีมา",
    district: "อำเภอพระทองคำ",
    subDistrict: "หนองหอย"
  },
  {
    code: 302901,
    province: "นครราชสีมา",
    district: "อำเภอลำทะเมนชัย",
    subDistrict: "ขุย"
  },
  {
    code: 302902,
    province: "นครราชสีมา",
    district: "อำเภอลำทะเมนชัย",
    subDistrict: "บ้านยาง"
  },
  {
    code: 302903,
    province: "นครราชสีมา",
    district: "อำเภอลำทะเมนชัย",
    subDistrict: "ช่องแมว"
  },
  {
    code: 302904,
    province: "นครราชสีมา",
    district: "อำเภอลำทะเมนชัย",
    subDistrict: "ไพล"
  },
  {
    code: 303001,
    province: "นครราชสีมา",
    district: "อำเภอบัวลาย",
    subDistrict: "เมืองพะไล"
  },
  {
    code: 303002,
    province: "นครราชสีมา",
    district: "อำเภอบัวลาย",
    subDistrict: "โนนจาน"
  },
  {
    code: 303003,
    province: "นครราชสีมา",
    district: "อำเภอบัวลาย",
    subDistrict: "บัวลาย"
  },
  {
    code: 303004,
    province: "นครราชสีมา",
    district: "อำเภอบัวลาย",
    subDistrict: "หนองหว้า"
  },
  {
    code: 303101,
    province: "นครราชสีมา",
    district: "อำเภอสีดา",
    subDistrict: "สีดา"
  },
  {
    code: 303102,
    province: "นครราชสีมา",
    district: "อำเภอสีดา",
    subDistrict: "โพนทอง"
  },
  {
    code: 303103,
    province: "นครราชสีมา",
    district: "อำเภอสีดา",
    subDistrict: "โนนประดู่"
  },
  {
    code: 303104,
    province: "นครราชสีมา",
    district: "อำเภอสีดา",
    subDistrict: "สามเมือง"
  },
  {
    code: 303105,
    province: "นครราชสีมา",
    district: "อำเภอสีดา",
    subDistrict: "หนองตาดใหญ่"
  },
  {
    code: 303201,
    province: "นครราชสีมา",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ช้างทอง"
  },
  {
    code: 303202,
    province: "นครราชสีมา",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ท่าช้าง"
  },
  {
    code: 303203,
    province: "นครราชสีมา",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "พระพุทธ"
  },
  {
    code: 303204,
    province: "นครราชสีมา",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "หนองงูเหลือม"
  },
  {
    code: 303205,
    province: "นครราชสีมา",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "หนองยาง"
  },
  {
    code: 310101,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "ในเมือง"
  },
  {
    code: 310102,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "อิสาณ"
  },
  {
    code: 310103,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "เสม็ด"
  },
  {
    code: 310104,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "บ้านบัว"
  },
  {
    code: 310105,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "สะแกโพรง"
  },
  {
    code: 310106,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "สวายจีก"
  },
  {
    code: 310108,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "บ้านยาง"
  },
  {
    code: 310112,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "พระครู"
  },
  {
    code: 310113,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "ถลุงเหล็ก"
  },
  {
    code: 310114,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "หนองตาด"
  },
  {
    code: 310117,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "ลุมปุ๊ก"
  },
  {
    code: 310118,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "สองห้อง"
  },
  {
    code: 310119,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "บัวทอง"
  },
  {
    code: 310120,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "ชุมเห็ด"
  },
  {
    code: 310122,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "หลักเขต"
  },
  {
    code: 310125,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "สะแกซำ"
  },
  {
    code: 310126,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "กลันทา"
  },
  {
    code: 310127,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "กระสัง"
  },
  {
    code: 310128,
    province: "บุรีรัมย์",
    district: "อำเภอเมืองบุรีรัมย์",
    subDistrict: "เมืองฝาง"
  },
  {
    code: 310201,
    province: "บุรีรัมย์",
    district: "อำเภอคูเมือง",
    subDistrict: "คูเมือง"
  },
  {
    code: 310202,
    province: "บุรีรัมย์",
    district: "อำเภอคูเมือง",
    subDistrict: "ปะเคียบ"
  },
  {
    code: 310203,
    province: "บุรีรัมย์",
    district: "อำเภอคูเมือง",
    subDistrict: "บ้านแพ"
  },
  {
    code: 310204,
    province: "บุรีรัมย์",
    district: "อำเภอคูเมือง",
    subDistrict: "พรสำราญ"
  },
  {
    code: 310205,
    province: "บุรีรัมย์",
    district: "อำเภอคูเมือง",
    subDistrict: "หินเหล็กไฟ"
  },
  {
    code: 310206,
    province: "บุรีรัมย์",
    district: "อำเภอคูเมือง",
    subDistrict: "ตูมใหญ่"
  },
  {
    code: 310207,
    province: "บุรีรัมย์",
    district: "อำเภอคูเมือง",
    subDistrict: "หนองขมาร"
  },
  {
    code: 310301,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "กระสัง"
  },
  {
    code: 310302,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "ลำดวน"
  },
  {
    code: 310303,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "สองชั้น"
  },
  {
    code: 310304,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "สูงเนิน"
  },
  {
    code: 310305,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "หนองเต็ง"
  },
  {
    code: 310306,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "เมืองไผ่"
  },
  {
    code: 310307,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "ชุมแสง"
  },
  {
    code: 310308,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "บ้านปรือ"
  },
  {
    code: 310309,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "ห้วยสำราญ"
  },
  {
    code: 310310,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "กันทรารมย์"
  },
  {
    code: 310311,
    province: "บุรีรัมย์",
    district: "อำเภอกระสัง",
    subDistrict: "ศรีภูมิ"
  },
  {
    code: 310401,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "นางรอง"
  },
  {
    code: 310403,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "สะเดา"
  },
  {
    code: 310405,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "ชุมแสง"
  },
  {
    code: 310406,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "หนองโบสถ์"
  },
  {
    code: 310408,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "หนองกง"
  },
  {
    code: 310413,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "ถนนหัก"
  },
  {
    code: 310414,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "หนองไทร"
  },
  {
    code: 310415,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "ก้านเหลือง"
  },
  {
    code: 310416,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "บ้านสิงห์"
  },
  {
    code: 310417,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "ลำไทรโยง"
  },
  {
    code: 310418,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "ทรัพย์พระยา"
  },
  {
    code: 310424,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "หนองยายพิมพ์"
  },
  {
    code: 310425,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "หัวถนน"
  },
  {
    code: 310426,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "ทุ่งแสงทอง"
  },
  {
    code: 310427,
    province: "บุรีรัมย์",
    district: "อำเภอนางรอง",
    subDistrict: "หนองโสน"
  },
  {
    code: 310501,
    province: "บุรีรัมย์",
    district: "อำเภอหนองกี่",
    subDistrict: "หนองกี่"
  },
  {
    code: 310502,
    province: "บุรีรัมย์",
    district: "อำเภอหนองกี่",
    subDistrict: "เย้ยปราสาท"
  },
  {
    code: 310503,
    province: "บุรีรัมย์",
    district: "อำเภอหนองกี่",
    subDistrict: "เมืองไผ่"
  },
  {
    code: 310504,
    province: "บุรีรัมย์",
    district: "อำเภอหนองกี่",
    subDistrict: "ดอนอะราง"
  },
  {
    code: 310505,
    province: "บุรีรัมย์",
    district: "อำเภอหนองกี่",
    subDistrict: "โคกสว่าง"
  },
  {
    code: 310506,
    province: "บุรีรัมย์",
    district: "อำเภอหนองกี่",
    subDistrict: "ทุ่งกระตาดพัฒนา"
  },
  {
    code: 310507,
    province: "บุรีรัมย์",
    district: "อำเภอหนองกี่",
    subDistrict: "ทุ่งกระเต็น"
  },
  {
    code: 310508,
    province: "บุรีรัมย์",
    district: "อำเภอหนองกี่",
    subDistrict: "ท่าโพธิ์ชัย"
  },
  {
    code: 310509,
    province: "บุรีรัมย์",
    district: "อำเภอหนองกี่",
    subDistrict: "โคกสูง"
  },
  {
    code: 310510,
    province: "บุรีรัมย์",
    district: "อำเภอหนองกี่",
    subDistrict: "บุกระสัง"
  },
  {
    code: 310601,
    province: "บุรีรัมย์",
    district: "อำเภอละหานทราย",
    subDistrict: "ละหานทราย"
  },
  {
    code: 310603,
    province: "บุรีรัมย์",
    district: "อำเภอละหานทราย",
    subDistrict: "ตาจง"
  },
  {
    code: 310604,
    province: "บุรีรัมย์",
    district: "อำเภอละหานทราย",
    subDistrict: "สำโรงใหม่"
  },
  {
    code: 310607,
    province: "บุรีรัมย์",
    district: "อำเภอละหานทราย",
    subDistrict: "หนองแวง"
  },
  {
    code: 310610,
    province: "บุรีรัมย์",
    district: "อำเภอละหานทราย",
    subDistrict: "หนองตะครอง"
  },
  {
    code: 310611,
    province: "บุรีรัมย์",
    district: "อำเภอละหานทราย",
    subDistrict: "โคกว่าน"
  },
  {
    code: 310701,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "ประโคนชัย"
  },
  {
    code: 310702,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "แสลงโทน"
  },
  {
    code: 310703,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "บ้านไทร"
  },
  {
    code: 310705,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "ละเวี้ย"
  },
  {
    code: 310706,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "จรเข้มาก"
  },
  {
    code: 310707,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "ปังกู"
  },
  {
    code: 310708,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "โคกย่าง"
  },
  {
    code: 310710,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "โคกม้า"
  },
  {
    code: 310713,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "ไพศาล"
  },
  {
    code: 310714,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "ตะโกตาพิ"
  },
  {
    code: 310715,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "เขาคอก"
  },
  {
    code: 310716,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "หนองบอน"
  },
  {
    code: 310718,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "โคกมะขาม"
  },
  {
    code: 310719,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "โคกตูม"
  },
  {
    code: 310720,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "ประทัดบุ"
  },
  {
    code: 310721,
    province: "บุรีรัมย์",
    district: "อำเภอประโคนชัย",
    subDistrict: "สี่เหลี่ยม"
  },
  {
    code: 310801,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านกรวด",
    subDistrict: "บ้านกรวด"
  },
  {
    code: 310802,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านกรวด",
    subDistrict: "โนนเจริญ"
  },
  {
    code: 310803,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านกรวด",
    subDistrict: "หนองไม้งาม"
  },
  {
    code: 310804,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านกรวด",
    subDistrict: "ปราสาท"
  },
  {
    code: 310805,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านกรวด",
    subDistrict: "สายตะกู"
  },
  {
    code: 310806,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านกรวด",
    subDistrict: "หินลาด"
  },
  {
    code: 310807,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านกรวด",
    subDistrict: "บึงเจริญ"
  },
  {
    code: 310808,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านกรวด",
    subDistrict: "จันทบเพชร"
  },
  {
    code: 310809,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านกรวด",
    subDistrict: "เขาดินเหนือ"
  },
  {
    code: 310901,
    province: "บุรีรัมย์",
    district: "อำเภอพุทไธสง",
    subDistrict: "พุทไธสง"
  },
  {
    code: 310902,
    province: "บุรีรัมย์",
    district: "อำเภอพุทไธสง",
    subDistrict: "มะเฟือง"
  },
  {
    code: 310903,
    province: "บุรีรัมย์",
    district: "อำเภอพุทไธสง",
    subDistrict: "บ้านจาน"
  },
  {
    code: 310906,
    province: "บุรีรัมย์",
    district: "อำเภอพุทไธสง",
    subDistrict: "บ้านเป้า"
  },
  {
    code: 310907,
    province: "บุรีรัมย์",
    district: "อำเภอพุทไธสง",
    subDistrict: "บ้านแวง"
  },
  {
    code: 310909,
    province: "บุรีรัมย์",
    district: "อำเภอพุทไธสง",
    subDistrict: "บ้านยาง"
  },
  {
    code: 310910,
    province: "บุรีรัมย์",
    district: "อำเภอพุทไธสง",
    subDistrict: "หายโศก"
  },
  {
    code: 311001,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "ลำปลายมาศ"
  },
  {
    code: 311002,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "หนองคู"
  },
  {
    code: 311003,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "แสลงพัน"
  },
  {
    code: 311004,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "ทะเมนชัย"
  },
  {
    code: 311005,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "ตลาดโพธิ์"
  },
  {
    code: 311006,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "หนองกะทิง"
  },
  {
    code: 311007,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "โคกกลาง"
  },
  {
    code: 311008,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "โคกสะอาด"
  },
  {
    code: 311009,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "เมืองแฝก"
  },
  {
    code: 311010,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "บ้านยาง"
  },
  {
    code: 311011,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "ผไทรินทร์"
  },
  {
    code: 311012,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "โคกล่าม"
  },
  {
    code: 311013,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "หินโคน"
  },
  {
    code: 311014,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "หนองบัวโคก"
  },
  {
    code: 311015,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "บุโพธิ์"
  },
  {
    code: 311016,
    province: "บุรีรัมย์",
    district: "อำเภอลำปลายมาศ",
    subDistrict: "หนองโดน"
  },
  {
    code: 311101,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "สตึก"
  },
  {
    code: 311102,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "นิคม"
  },
  {
    code: 311103,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "ทุ่งวัง"
  },
  {
    code: 311104,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "เมืองแก"
  },
  {
    code: 311105,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "หนองใหญ่"
  },
  {
    code: 311106,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "ร่อนทอง"
  },
  {
    code: 311109,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "ดอนมนต์"
  },
  {
    code: 311110,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "ชุมแสง"
  },
  {
    code: 311111,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "ท่าม่วง"
  },
  {
    code: 311112,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "สะแก"
  },
  {
    code: 311114,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "สนามชัย"
  },
  {
    code: 311115,
    province: "บุรีรัมย์",
    district: "อำเภอสตึก",
    subDistrict: "กระสัง"
  },
  {
    code: 311201,
    province: "บุรีรัมย์",
    district: "อำเภอปะคำ",
    subDistrict: "ปะคำ"
  },
  {
    code: 311202,
    province: "บุรีรัมย์",
    district: "อำเภอปะคำ",
    subDistrict: "ไทยเจริญ"
  },
  {
    code: 311203,
    province: "บุรีรัมย์",
    district: "อำเภอปะคำ",
    subDistrict: "หนองบัว"
  },
  {
    code: 311204,
    province: "บุรีรัมย์",
    district: "อำเภอปะคำ",
    subDistrict: "โคกมะม่วง"
  },
  {
    code: 311205,
    province: "บุรีรัมย์",
    district: "อำเภอปะคำ",
    subDistrict: "หูทำนบ"
  },
  {
    code: 311301,
    province: "บุรีรัมย์",
    district: "อำเภอนาโพธิ์",
    subDistrict: "นาโพธิ์"
  },
  {
    code: 311302,
    province: "บุรีรัมย์",
    district: "อำเภอนาโพธิ์",
    subDistrict: "บ้านคู"
  },
  {
    code: 311303,
    province: "บุรีรัมย์",
    district: "อำเภอนาโพธิ์",
    subDistrict: "บ้านดู่"
  },
  {
    code: 311304,
    province: "บุรีรัมย์",
    district: "อำเภอนาโพธิ์",
    subDistrict: "ดอนกอก"
  },
  {
    code: 311305,
    province: "บุรีรัมย์",
    district: "อำเภอนาโพธิ์",
    subDistrict: "ศรีสว่าง"
  },
  {
    code: 311401,
    province: "บุรีรัมย์",
    district: "อำเภอหนองหงส์",
    subDistrict: "สระแก้ว"
  },
  {
    code: 311402,
    province: "บุรีรัมย์",
    district: "อำเภอหนองหงส์",
    subDistrict: "ห้วยหิน"
  },
  {
    code: 311403,
    province: "บุรีรัมย์",
    district: "อำเภอหนองหงส์",
    subDistrict: "ไทยสามัคคี"
  },
  {
    code: 311404,
    province: "บุรีรัมย์",
    district: "อำเภอหนองหงส์",
    subDistrict: "หนองชัยศรี"
  },
  {
    code: 311405,
    province: "บุรีรัมย์",
    district: "อำเภอหนองหงส์",
    subDistrict: "เสาเดียว"
  },
  {
    code: 311406,
    province: "บุรีรัมย์",
    district: "อำเภอหนองหงส์",
    subDistrict: "เมืองฝ้าย"
  },
  {
    code: 311407,
    province: "บุรีรัมย์",
    district: "อำเภอหนองหงส์",
    subDistrict: "สระทอง"
  },
  {
    code: 311501,
    province: "บุรีรัมย์",
    district: "อำเภอพลับพลาชัย",
    subDistrict: "จันดุม"
  },
  {
    code: 311502,
    province: "บุรีรัมย์",
    district: "อำเภอพลับพลาชัย",
    subDistrict: "โคกขมิ้น"
  },
  {
    code: 311503,
    province: "บุรีรัมย์",
    district: "อำเภอพลับพลาชัย",
    subDistrict: "ป่าชัน"
  },
  {
    code: 311504,
    province: "บุรีรัมย์",
    district: "อำเภอพลับพลาชัย",
    subDistrict: "สะเดา"
  },
  {
    code: 311505,
    province: "บุรีรัมย์",
    district: "อำเภอพลับพลาชัย",
    subDistrict: "สำโรง"
  },
  {
    code: 311601,
    province: "บุรีรัมย์",
    district: "อำเภอห้วยราช",
    subDistrict: "ห้วยราช"
  },
  {
    code: 311602,
    province: "บุรีรัมย์",
    district: "อำเภอห้วยราช",
    subDistrict: "สามแวง"
  },
  {
    code: 311603,
    province: "บุรีรัมย์",
    district: "อำเภอห้วยราช",
    subDistrict: "ตาเสา"
  },
  {
    code: 311604,
    province: "บุรีรัมย์",
    district: "อำเภอห้วยราช",
    subDistrict: "บ้านตะโก"
  },
  {
    code: 311605,
    province: "บุรีรัมย์",
    district: "อำเภอห้วยราช",
    subDistrict: "สนวน"
  },
  {
    code: 311606,
    province: "บุรีรัมย์",
    district: "อำเภอห้วยราช",
    subDistrict: "โคกเหล็ก"
  },
  {
    code: 311607,
    province: "บุรีรัมย์",
    district: "อำเภอห้วยราช",
    subDistrict: "เมืองโพธิ์"
  },
  {
    code: 311608,
    province: "บุรีรัมย์",
    district: "อำเภอห้วยราช",
    subDistrict: "ห้วยราชา"
  },
  {
    code: 311701,
    province: "บุรีรัมย์",
    district: "อำเภอโนนสุวรรณ",
    subDistrict: "โนนสุวรรณ"
  },
  {
    code: 311702,
    province: "บุรีรัมย์",
    district: "อำเภอโนนสุวรรณ",
    subDistrict: "ทุ่งจังหัน"
  },
  {
    code: 311703,
    province: "บุรีรัมย์",
    district: "อำเภอโนนสุวรรณ",
    subDistrict: "โกรกแก้ว"
  },
  {
    code: 311704,
    province: "บุรีรัมย์",
    district: "อำเภอโนนสุวรรณ",
    subDistrict: "ดงอีจาน"
  },
  {
    code: 311801,
    province: "บุรีรัมย์",
    district: "อำเภอชำนิ",
    subDistrict: "ชำนิ"
  },
  {
    code: 311802,
    province: "บุรีรัมย์",
    district: "อำเภอชำนิ",
    subDistrict: "หนองปล่อง"
  },
  {
    code: 311803,
    province: "บุรีรัมย์",
    district: "อำเภอชำนิ",
    subDistrict: "เมืองยาง"
  },
  {
    code: 311804,
    province: "บุรีรัมย์",
    district: "อำเภอชำนิ",
    subDistrict: "ช่อผกา"
  },
  {
    code: 311805,
    province: "บุรีรัมย์",
    district: "อำเภอชำนิ",
    subDistrict: "ละลวด"
  },
  {
    code: 311806,
    province: "บุรีรัมย์",
    district: "อำเภอชำนิ",
    subDistrict: "โคกสนวน"
  },
  {
    code: 311901,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านใหม่ไชยพจน์",
    subDistrict: "หนองแวง"
  },
  {
    code: 311902,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านใหม่ไชยพจน์",
    subDistrict: "ทองหลาง"
  },
  {
    code: 311903,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านใหม่ไชยพจน์",
    subDistrict: "แดงใหญ่"
  },
  {
    code: 311904,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านใหม่ไชยพจน์",
    subDistrict: "กู่สวนแตง"
  },
  {
    code: 311905,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านใหม่ไชยพจน์",
    subDistrict: "หนองเยือง"
  },
  {
    code: 312001,
    province: "บุรีรัมย์",
    district: "อำเภอโนนดินแดง",
    subDistrict: "โนนดินแดง"
  },
  {
    code: 312002,
    province: "บุรีรัมย์",
    district: "อำเภอโนนดินแดง",
    subDistrict: "ส้มป่อย"
  },
  {
    code: 312003,
    province: "บุรีรัมย์",
    district: "อำเภอโนนดินแดง",
    subDistrict: "ลำนางรอง"
  },
  {
    code: 312101,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านด่าน",
    subDistrict: "บ้านด่าน"
  },
  {
    code: 312102,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านด่าน",
    subDistrict: "ปราสาท"
  },
  {
    code: 312103,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านด่าน",
    subDistrict: "วังเหนือ"
  },
  {
    code: 312104,
    province: "บุรีรัมย์",
    district: "อำเภอบ้านด่าน",
    subDistrict: "โนนขวาง"
  },
  {
    code: 312201,
    province: "บุรีรัมย์",
    district: "อำเภอแคนดง",
    subDistrict: "แคนดง"
  },
  {
    code: 312202,
    province: "บุรีรัมย์",
    district: "อำเภอแคนดง",
    subDistrict: "ดงพลอง"
  },
  {
    code: 312203,
    province: "บุรีรัมย์",
    district: "อำเภอแคนดง",
    subDistrict: "สระบัว"
  },
  {
    code: 312204,
    province: "บุรีรัมย์",
    district: "อำเภอแคนดง",
    subDistrict: "หัวฝาย"
  },
  {
    code: 312301,
    province: "บุรีรัมย์",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "เจริญสุข"
  },
  {
    code: 312302,
    province: "บุรีรัมย์",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ตาเป๊ก"
  },
  {
    code: 312303,
    province: "บุรีรัมย์",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "อีสานเขต"
  },
  {
    code: 312304,
    province: "บุรีรัมย์",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ถาวร"
  },
  {
    code: 312305,
    province: "บุรีรัมย์",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ยายแย้มวัฒนา"
  },
  {
    code: 320101,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "ในเมือง"
  },
  {
    code: 320102,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "ตั้งใจ"
  },
  {
    code: 320103,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "เพี้ยราม"
  },
  {
    code: 320104,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "นาดี"
  },
  {
    code: 320105,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "ท่าสว่าง"
  },
  {
    code: 320106,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "สลักได"
  },
  {
    code: 320107,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "ตาอ็อง"
  },
  {
    code: 320109,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "สำโรง"
  },
  {
    code: 320110,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "แกใหญ่"
  },
  {
    code: 320111,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "นอกเมือง"
  },
  {
    code: 320112,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "คอโค"
  },
  {
    code: 320113,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "สวาย"
  },
  {
    code: 320114,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "เฉนียง"
  },
  {
    code: 320116,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "เทนมีย์"
  },
  {
    code: 320118,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "นาบัว"
  },
  {
    code: 320119,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "เมืองที"
  },
  {
    code: 320120,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "ราม"
  },
  {
    code: 320121,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "บุฤาษี"
  },
  {
    code: 320122,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "ตระแสง"
  },
  {
    code: 320125,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "แสลงพันธ์"
  },
  {
    code: 320126,
    province: "สุรินทร์",
    district: "อำเภอเมืองสุรินทร์",
    subDistrict: "กาเกาะ"
  },
  {
    code: 320201,
    province: "สุรินทร์",
    district: "อำเภอชุมพลบุรี",
    subDistrict: "ชุมพลบุรี"
  },
  {
    code: 320202,
    province: "สุรินทร์",
    district: "อำเภอชุมพลบุรี",
    subDistrict: "นาหนองไผ่"
  },
  {
    code: 320203,
    province: "สุรินทร์",
    district: "อำเภอชุมพลบุรี",
    subDistrict: "ไพรขลา"
  },
  {
    code: 320204,
    province: "สุรินทร์",
    district: "อำเภอชุมพลบุรี",
    subDistrict: "ศรีณรงค์"
  },
  {
    code: 320205,
    province: "สุรินทร์",
    district: "อำเภอชุมพลบุรี",
    subDistrict: "ยะวึก"
  },
  {
    code: 320206,
    province: "สุรินทร์",
    district: "อำเภอชุมพลบุรี",
    subDistrict: "เมืองบัว"
  },
  {
    code: 320207,
    province: "สุรินทร์",
    district: "อำเภอชุมพลบุรี",
    subDistrict: "สระขุด"
  },
  {
    code: 320208,
    province: "สุรินทร์",
    district: "อำเภอชุมพลบุรี",
    subDistrict: "กระเบื้อง"
  },
  {
    code: 320209,
    province: "สุรินทร์",
    district: "อำเภอชุมพลบุรี",
    subDistrict: "หนองเรือ"
  },
  {
    code: 320301,
    province: "สุรินทร์",
    district: "อำเภอท่าตูม",
    subDistrict: "ท่าตูม"
  },
  {
    code: 320302,
    province: "สุรินทร์",
    district: "อำเภอท่าตูม",
    subDistrict: "กระโพ"
  },
  {
    code: 320303,
    province: "สุรินทร์",
    district: "อำเภอท่าตูม",
    subDistrict: "พรมเทพ"
  },
  {
    code: 320304,
    province: "สุรินทร์",
    district: "อำเภอท่าตูม",
    subDistrict: "โพนครก"
  },
  {
    code: 320305,
    province: "สุรินทร์",
    district: "อำเภอท่าตูม",
    subDistrict: "เมืองแก"
  },
  {
    code: 320306,
    province: "สุรินทร์",
    district: "อำเภอท่าตูม",
    subDistrict: "บะ"
  },
  {
    code: 320307,
    province: "สุรินทร์",
    district: "อำเภอท่าตูม",
    subDistrict: "หนองบัว"
  },
  {
    code: 320308,
    province: "สุรินทร์",
    district: "อำเภอท่าตูม",
    subDistrict: "บัวโคก"
  },
  {
    code: 320309,
    province: "สุรินทร์",
    district: "อำเภอท่าตูม",
    subDistrict: "หนองเมธี"
  },
  {
    code: 320310,
    province: "สุรินทร์",
    district: "อำเภอท่าตูม",
    subDistrict: "ทุ่งกุลา"
  },
  {
    code: 320401,
    province: "สุรินทร์",
    district: "อำเภอจอมพระ",
    subDistrict: "จอมพระ"
  },
  {
    code: 320402,
    province: "สุรินทร์",
    district: "อำเภอจอมพระ",
    subDistrict: "เมืองลีง"
  },
  {
    code: 320403,
    province: "สุรินทร์",
    district: "อำเภอจอมพระ",
    subDistrict: "กระหาด"
  },
  {
    code: 320404,
    province: "สุรินทร์",
    district: "อำเภอจอมพระ",
    subDistrict: "บุแกรง"
  },
  {
    code: 320405,
    province: "สุรินทร์",
    district: "อำเภอจอมพระ",
    subDistrict: "หนองสนิท"
  },
  {
    code: 320406,
    province: "สุรินทร์",
    district: "อำเภอจอมพระ",
    subDistrict: "บ้านผือ"
  },
  {
    code: 320407,
    province: "สุรินทร์",
    district: "อำเภอจอมพระ",
    subDistrict: "ลุ่มระวี"
  },
  {
    code: 320408,
    province: "สุรินทร์",
    district: "อำเภอจอมพระ",
    subDistrict: "ชุมแสง"
  },
  {
    code: 320409,
    province: "สุรินทร์",
    district: "อำเภอจอมพระ",
    subDistrict: "เป็นสุข"
  },
  {
    code: 320501,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "กังแอน"
  },
  {
    code: 320502,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "ทมอ"
  },
  {
    code: 320503,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "ไพล"
  },
  {
    code: 320504,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "ปรือ"
  },
  {
    code: 320505,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "ทุ่งมน"
  },
  {
    code: 320506,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "ตาเบา"
  },
  {
    code: 320507,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "หนองใหญ่"
  },
  {
    code: 320508,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "โคกยาง"
  },
  {
    code: 320509,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "โคกสะอาด"
  },
  {
    code: 320510,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "บ้านไทร"
  },
  {
    code: 320511,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "โชคนาสาม"
  },
  {
    code: 320512,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "เชื้อเพลิง"
  },
  {
    code: 320513,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "ปราสาททนง"
  },
  {
    code: 320514,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "ตานี"
  },
  {
    code: 320515,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "บ้านพลวง"
  },
  {
    code: 320516,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "กันตวจระมวล"
  },
  {
    code: 320517,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "สมุด"
  },
  {
    code: 320518,
    province: "สุรินทร์",
    district: "อำเภอปราสาท",
    subDistrict: "ประทัดบุ"
  },
  {
    code: 320601,
    province: "สุรินทร์",
    district: "อำเภอกาบเชิง",
    subDistrict: "กาบเชิง"
  },
  {
    code: 320604,
    province: "สุรินทร์",
    district: "อำเภอกาบเชิง",
    subDistrict: "คูตัน"
  },
  {
    code: 320605,
    province: "สุรินทร์",
    district: "อำเภอกาบเชิง",
    subDistrict: "ด่าน"
  },
  {
    code: 320606,
    province: "สุรินทร์",
    district: "อำเภอกาบเชิง",
    subDistrict: "แนงมุด"
  },
  {
    code: 320607,
    province: "สุรินทร์",
    district: "อำเภอกาบเชิง",
    subDistrict: "โคกตะเคียน"
  },
  {
    code: 320610,
    province: "สุรินทร์",
    district: "อำเภอกาบเชิง",
    subDistrict: "ตะเคียน"
  },
  {
    code: 320701,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "รัตนบุรี"
  },
  {
    code: 320702,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "ธาตุ"
  },
  {
    code: 320703,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "แก"
  },
  {
    code: 320704,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "ดอนแรด"
  },
  {
    code: 320705,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "หนองบัวทอง"
  },
  {
    code: 320706,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "หนองบัวบาน"
  },
  {
    code: 320709,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "ไผ่"
  },
  {
    code: 320711,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "เบิด"
  },
  {
    code: 320713,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "น้ำเขียว"
  },
  {
    code: 320714,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "กุดขาคีม"
  },
  {
    code: 320715,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "ยางสว่าง"
  },
  {
    code: 320716,
    province: "สุรินทร์",
    district: "อำเภอรัตนบุรี",
    subDistrict: "ทับใหญ่"
  },
  {
    code: 320801,
    province: "สุรินทร์",
    district: "อำเภอสนม",
    subDistrict: "สนม"
  },
  {
    code: 320802,
    province: "สุรินทร์",
    district: "อำเภอสนม",
    subDistrict: "โพนโก"
  },
  {
    code: 320803,
    province: "สุรินทร์",
    district: "อำเภอสนม",
    subDistrict: "หนองระฆัง"
  },
  {
    code: 320804,
    province: "สุรินทร์",
    district: "อำเภอสนม",
    subDistrict: "นานวน"
  },
  {
    code: 320805,
    province: "สุรินทร์",
    district: "อำเภอสนม",
    subDistrict: "แคน"
  },
  {
    code: 320806,
    province: "สุรินทร์",
    district: "อำเภอสนม",
    subDistrict: "หัวงัว"
  },
  {
    code: 320807,
    province: "สุรินทร์",
    district: "อำเภอสนม",
    subDistrict: "หนองอียอ"
  },
  {
    code: 320901,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "ระแงง"
  },
  {
    code: 320902,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "ตรึม"
  },
  {
    code: 320903,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "จารพัต"
  },
  {
    code: 320904,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "ยาง"
  },
  {
    code: 320905,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "แตล"
  },
  {
    code: 320906,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "หนองบัว"
  },
  {
    code: 320907,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "คาละแมะ"
  },
  {
    code: 320908,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "หนองเหล็ก"
  },
  {
    code: 320909,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "หนองขวาว"
  },
  {
    code: 320910,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "ช่างปี่"
  },
  {
    code: 320911,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "กุดหวาย"
  },
  {
    code: 320912,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "ขวาวใหญ่"
  },
  {
    code: 320913,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "นารุ่ง"
  },
  {
    code: 320914,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "ตรมไพร"
  },
  {
    code: 320915,
    province: "สุรินทร์",
    district: "อำเภอศีขรภูมิ",
    subDistrict: "ผักไหม"
  },
  {
    code: 321001,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "สังขะ"
  },
  {
    code: 321002,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "ขอนแตก"
  },
  {
    code: 321006,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "ดม"
  },
  {
    code: 321007,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "พระแก้ว"
  },
  {
    code: 321008,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "บ้านจารย์"
  },
  {
    code: 321009,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "กระเทียม"
  },
  {
    code: 321010,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "สะกาด"
  },
  {
    code: 321011,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "ตาตุม"
  },
  {
    code: 321012,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "ทับทัน"
  },
  {
    code: 321013,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "ตาคง"
  },
  {
    code: 321015,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "บ้านชบ"
  },
  {
    code: 321017,
    province: "สุรินทร์",
    district: "อำเภอสังขะ",
    subDistrict: "เทพรักษา"
  },
  {
    code: 321101,
    province: "สุรินทร์",
    district: "อำเภอลำดวน",
    subDistrict: "ลำดวน"
  },
  {
    code: 321102,
    province: "สุรินทร์",
    district: "อำเภอลำดวน",
    subDistrict: "โชคเหนือ"
  },
  {
    code: 321103,
    province: "สุรินทร์",
    district: "อำเภอลำดวน",
    subDistrict: "อู่โลก"
  },
  {
    code: 321104,
    province: "สุรินทร์",
    district: "อำเภอลำดวน",
    subDistrict: "ตรำดม"
  },
  {
    code: 321105,
    province: "สุรินทร์",
    district: "อำเภอลำดวน",
    subDistrict: "ตระเปียงเตีย"
  },
  {
    code: 321201,
    province: "สุรินทร์",
    district: "อำเภอสำโรงทาบ",
    subDistrict: "สำโรงทาบ"
  },
  {
    code: 321202,
    province: "สุรินทร์",
    district: "อำเภอสำโรงทาบ",
    subDistrict: "หนองไผ่ล้อม"
  },
  {
    code: 321203,
    province: "สุรินทร์",
    district: "อำเภอสำโรงทาบ",
    subDistrict: "กระออม"
  },
  {
    code: 321204,
    province: "สุรินทร์",
    district: "อำเภอสำโรงทาบ",
    subDistrict: "หนองฮะ"
  },
  {
    code: 321205,
    province: "สุรินทร์",
    district: "อำเภอสำโรงทาบ",
    subDistrict: "ศรีสุข"
  },
  {
    code: 321206,
    province: "สุรินทร์",
    district: "อำเภอสำโรงทาบ",
    subDistrict: "เกาะแก้ว"
  },
  {
    code: 321207,
    province: "สุรินทร์",
    district: "อำเภอสำโรงทาบ",
    subDistrict: "หมื่นศรี"
  },
  {
    code: 321208,
    province: "สุรินทร์",
    district: "อำเภอสำโรงทาบ",
    subDistrict: "เสม็จ"
  },
  {
    code: 321209,
    province: "สุรินทร์",
    district: "อำเภอสำโรงทาบ",
    subDistrict: "สะโน"
  },
  {
    code: 321210,
    province: "สุรินทร์",
    district: "อำเภอสำโรงทาบ",
    subDistrict: "ประดู่"
  },
  {
    code: 321301,
    province: "สุรินทร์",
    district: "อำเภอบัวเชด",
    subDistrict: "บัวเชด"
  },
  {
    code: 321302,
    province: "สุรินทร์",
    district: "อำเภอบัวเชด",
    subDistrict: "สะเดา"
  },
  {
    code: 321303,
    province: "สุรินทร์",
    district: "อำเภอบัวเชด",
    subDistrict: "จรัส"
  },
  {
    code: 321304,
    province: "สุรินทร์",
    district: "อำเภอบัวเชด",
    subDistrict: "ตาวัง"
  },
  {
    code: 321305,
    province: "สุรินทร์",
    district: "อำเภอบัวเชด",
    subDistrict: "อาโพน"
  },
  {
    code: 321306,
    province: "สุรินทร์",
    district: "อำเภอบัวเชด",
    subDistrict: "สำเภาลูน"
  },
  {
    code: 321401,
    province: "สุรินทร์",
    district: "อำเภอพนมดงรัก",
    subDistrict: "บักได"
  },
  {
    code: 321402,
    province: "สุรินทร์",
    district: "อำเภอพนมดงรัก",
    subDistrict: "โคกกลาง"
  },
  {
    code: 321403,
    province: "สุรินทร์",
    district: "อำเภอพนมดงรัก",
    subDistrict: "จีกแดก"
  },
  {
    code: 321404,
    province: "สุรินทร์",
    district: "อำเภอพนมดงรัก",
    subDistrict: "ตาเมียง"
  },
  {
    code: 321501,
    province: "สุรินทร์",
    district: "อำเภอศรีณรงค์",
    subDistrict: "ณรงค์"
  },
  {
    code: 321502,
    province: "สุรินทร์",
    district: "อำเภอศรีณรงค์",
    subDistrict: "แจนแวน"
  },
  {
    code: 321503,
    province: "สุรินทร์",
    district: "อำเภอศรีณรงค์",
    subDistrict: "ตรวจ"
  },
  {
    code: 321504,
    province: "สุรินทร์",
    district: "อำเภอศรีณรงค์",
    subDistrict: "หนองแวง"
  },
  {
    code: 321505,
    province: "สุรินทร์",
    district: "อำเภอศรีณรงค์",
    subDistrict: "ศรีสุข"
  },
  {
    code: 321601,
    province: "สุรินทร์",
    district: "อำเภอเขวาสินรินทร์",
    subDistrict: "เขวาสินรินทร์"
  },
  {
    code: 321602,
    province: "สุรินทร์",
    district: "อำเภอเขวาสินรินทร์",
    subDistrict: "บึง"
  },
  {
    code: 321603,
    province: "สุรินทร์",
    district: "อำเภอเขวาสินรินทร์",
    subDistrict: "ตากูก"
  },
  {
    code: 321604,
    province: "สุรินทร์",
    district: "อำเภอเขวาสินรินทร์",
    subDistrict: "ปราสาททอง"
  },
  {
    code: 321605,
    province: "สุรินทร์",
    district: "อำเภอเขวาสินรินทร์",
    subDistrict: "บ้านแร่"
  },
  {
    code: 321701,
    province: "สุรินทร์",
    district: "อำเภอโนนนารายณ์",
    subDistrict: "หนองหลวง"
  },
  {
    code: 321702,
    province: "สุรินทร์",
    district: "อำเภอโนนนารายณ์",
    subDistrict: "คำผง"
  },
  {
    code: 321703,
    province: "สุรินทร์",
    district: "อำเภอโนนนารายณ์",
    subDistrict: "โนน"
  },
  {
    code: 321704,
    province: "สุรินทร์",
    district: "อำเภอโนนนารายณ์",
    subDistrict: "ระเวียง"
  },
  {
    code: 321705,
    province: "สุรินทร์",
    district: "อำเภอโนนนารายณ์",
    subDistrict: "หนองเทพ"
  },
  {
    code: 330101,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "เมืองเหนือ"
  },
  {
    code: 330102,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "เมืองใต้"
  },
  {
    code: 330103,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "คูซอด"
  },
  {
    code: 330104,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "ซำ"
  },
  {
    code: 330105,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "จาน"
  },
  {
    code: 330106,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "ตะดอบ"
  },
  {
    code: 330107,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "หนองครก"
  },
  {
    code: 330111,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "โพนข่า"
  },
  {
    code: 330112,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "โพนค้อ"
  },
  {
    code: 330115,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "โพนเขวา"
  },
  {
    code: 330116,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "หญ้าปล้อง"
  },
  {
    code: 330118,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "ทุ่ม"
  },
  {
    code: 330119,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "หนองไฮ"
  },
  {
    code: 330121,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "หนองแก้ว"
  },
  {
    code: 330122,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "น้ำคำ"
  },
  {
    code: 330123,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "โพธิ์"
  },
  {
    code: 330124,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "หมากเขียบ"
  },
  {
    code: 330127,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองศรีสะเกษ",
    subDistrict: "หนองไผ่"
  },
  {
    code: 330201,
    province: "ศรีสะเกษ",
    district: "อำเภอยางชุมน้อย",
    subDistrict: "ยางชุมน้อย"
  },
  {
    code: 330202,
    province: "ศรีสะเกษ",
    district: "อำเภอยางชุมน้อย",
    subDistrict: "ลิ้นฟ้า"
  },
  {
    code: 330203,
    province: "ศรีสะเกษ",
    district: "อำเภอยางชุมน้อย",
    subDistrict: "คอนกาม"
  },
  {
    code: 330204,
    province: "ศรีสะเกษ",
    district: "อำเภอยางชุมน้อย",
    subDistrict: "โนนคูณ"
  },
  {
    code: 330205,
    province: "ศรีสะเกษ",
    district: "อำเภอยางชุมน้อย",
    subDistrict: "กุดเมืองฮาม"
  },
  {
    code: 330206,
    province: "ศรีสะเกษ",
    district: "อำเภอยางชุมน้อย",
    subDistrict: "บึงบอน"
  },
  {
    code: 330207,
    province: "ศรีสะเกษ",
    district: "อำเภอยางชุมน้อย",
    subDistrict: "ยางชุมใหญ่"
  },
  {
    code: 330301,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "ดูน"
  },
  {
    code: 330302,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "โนนสัง"
  },
  {
    code: 330303,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "หนองหัวช้าง"
  },
  {
    code: 330304,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "ยาง"
  },
  {
    code: 330305,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "หนองแวง"
  },
  {
    code: 330306,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "หนองแก้ว"
  },
  {
    code: 330307,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "ทาม"
  },
  {
    code: 330308,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "ละทาย"
  },
  {
    code: 330309,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "เมืองน้อย"
  },
  {
    code: 330310,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "อีปาด"
  },
  {
    code: 330311,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "บัวน้อย"
  },
  {
    code: 330312,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "หนองบัว"
  },
  {
    code: 330313,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "ดู่"
  },
  {
    code: 330314,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "ผักแพว"
  },
  {
    code: 330315,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "จาน"
  },
  {
    code: 330320,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรารมย์",
    subDistrict: "คำเนียม"
  },
  {
    code: 330401,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "บึงมะลู"
  },
  {
    code: 330402,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "กุดเสลา"
  },
  {
    code: 330403,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "เมือง"
  },
  {
    code: 330405,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "สังเม็ก"
  },
  {
    code: 330406,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "น้ำอ้อม"
  },
  {
    code: 330407,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "ละลาย"
  },
  {
    code: 330408,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "รุง"
  },
  {
    code: 330409,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "ตระกาจ"
  },
  {
    code: 330411,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "จานใหญ่"
  },
  {
    code: 330412,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "ภูเงิน"
  },
  {
    code: 330413,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "ชำ"
  },
  {
    code: 330414,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "กระแชง"
  },
  {
    code: 330415,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "โนนสำราญ"
  },
  {
    code: 330416,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "หนองหญ้าลาด"
  },
  {
    code: 330419,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "เสาธงชัย"
  },
  {
    code: 330420,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "ขนุน"
  },
  {
    code: 330421,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "สวนกล้วย"
  },
  {
    code: 330423,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "เวียงเหนือ"
  },
  {
    code: 330424,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "ทุ่งใหญ่"
  },
  {
    code: 330425,
    province: "ศรีสะเกษ",
    district: "อำเภอกันทรลักษ์",
    subDistrict: "ภูผาหมอก"
  },
  {
    code: 330501,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "กันทรารมย์"
  },
  {
    code: 330502,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "จะกง"
  },
  {
    code: 330503,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ใจดี"
  },
  {
    code: 330504,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ดองกำเม็ด"
  },
  {
    code: 330505,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "โสน"
  },
  {
    code: 330506,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ปรือใหญ่"
  },
  {
    code: 330507,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "สะเดาใหญ่"
  },
  {
    code: 330508,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ตาอุด"
  },
  {
    code: 330509,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ห้วยเหนือ"
  },
  {
    code: 330510,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ห้วยใต้"
  },
  {
    code: 330511,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "หัวเสือ"
  },
  {
    code: 330513,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ตะเคียน"
  },
  {
    code: 330515,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "นิคมพัฒนา"
  },
  {
    code: 330517,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "โคกเพชร"
  },
  {
    code: 330518,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ปราสาท"
  },
  {
    code: 330521,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "สำโรงตาเจ็น"
  },
  {
    code: 330522,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ห้วยสำราญ"
  },
  {
    code: 330524,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "กฤษณา"
  },
  {
    code: 330525,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ลมศักดิ์"
  },
  {
    code: 330526,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "หนองฉลอง"
  },
  {
    code: 330527,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ศรีตระกูล"
  },
  {
    code: 330528,
    province: "ศรีสะเกษ",
    district: "อำเภอขุขันธ์",
    subDistrict: "ศรีสะอาด"
  },
  {
    code: 330601,
    province: "ศรีสะเกษ",
    district: "อำเภอไพรบึง",
    subDistrict: "ไพรบึง"
  },
  {
    code: 330602,
    province: "ศรีสะเกษ",
    district: "อำเภอไพรบึง",
    subDistrict: "ดินแดง"
  },
  {
    code: 330603,
    province: "ศรีสะเกษ",
    district: "อำเภอไพรบึง",
    subDistrict: "ปราสาทเยอ"
  },
  {
    code: 330604,
    province: "ศรีสะเกษ",
    district: "อำเภอไพรบึง",
    subDistrict: "สำโรงพลัน"
  },
  {
    code: 330605,
    province: "ศรีสะเกษ",
    district: "อำเภอไพรบึง",
    subDistrict: "สุขสวัสดิ์"
  },
  {
    code: 330606,
    province: "ศรีสะเกษ",
    district: "อำเภอไพรบึง",
    subDistrict: "โนนปูน"
  },
  {
    code: 330701,
    province: "ศรีสะเกษ",
    district: "อำเภอปรางค์กู่",
    subDistrict: "พิมาย"
  },
  {
    code: 330702,
    province: "ศรีสะเกษ",
    district: "อำเภอปรางค์กู่",
    subDistrict: "กู่"
  },
  {
    code: 330703,
    province: "ศรีสะเกษ",
    district: "อำเภอปรางค์กู่",
    subDistrict: "หนองเชียงทูน"
  },
  {
    code: 330704,
    province: "ศรีสะเกษ",
    district: "อำเภอปรางค์กู่",
    subDistrict: "ตูม"
  },
  {
    code: 330705,
    province: "ศรีสะเกษ",
    district: "อำเภอปรางค์กู่",
    subDistrict: "สมอ"
  },
  {
    code: 330706,
    province: "ศรีสะเกษ",
    district: "อำเภอปรางค์กู่",
    subDistrict: "โพธิ์ศรี"
  },
  {
    code: 330707,
    province: "ศรีสะเกษ",
    district: "อำเภอปรางค์กู่",
    subDistrict: "สำโรงปราสาท"
  },
  {
    code: 330708,
    province: "ศรีสะเกษ",
    district: "อำเภอปรางค์กู่",
    subDistrict: "ดู่"
  },
  {
    code: 330709,
    province: "ศรีสะเกษ",
    district: "อำเภอปรางค์กู่",
    subDistrict: "สวาย"
  },
  {
    code: 330710,
    province: "ศรีสะเกษ",
    district: "อำเภอปรางค์กู่",
    subDistrict: "พิมายเหนือ"
  },
  {
    code: 330801,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "สิ"
  },
  {
    code: 330802,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "บักดอง"
  },
  {
    code: 330803,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "พราน"
  },
  {
    code: 330804,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "โพธิ์วงศ์"
  },
  {
    code: 330805,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "ไพร"
  },
  {
    code: 330806,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "กระหวัน"
  },
  {
    code: 330807,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "ขุนหาญ"
  },
  {
    code: 330808,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "โนนสูง"
  },
  {
    code: 330809,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "กันทรอม"
  },
  {
    code: 330810,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "ภูฝ้าย"
  },
  {
    code: 330811,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "โพธิ์กระสังข์"
  },
  {
    code: 330812,
    province: "ศรีสะเกษ",
    district: "อำเภอขุนหาญ",
    subDistrict: "ห้วยจันทร์"
  },
  {
    code: 330901,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "เมืองคง"
  },
  {
    code: 330902,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "เมืองแคน"
  },
  {
    code: 330903,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "หนองแค"
  },
  {
    code: 330906,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "จิกสังข์ทอง"
  },
  {
    code: 330907,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "ด่าน"
  },
  {
    code: 330908,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "ดู่"
  },
  {
    code: 330909,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "หนองอึ่ง"
  },
  {
    code: 330910,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "บัวหุ่ง"
  },
  {
    code: 330911,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "ไผ่"
  },
  {
    code: 330912,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "ส้มป่อย"
  },
  {
    code: 330913,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "หนองหมี"
  },
  {
    code: 330914,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "หว้านคำ"
  },
  {
    code: 330915,
    province: "ศรีสะเกษ",
    district: "อำเภอราษีไศล",
    subDistrict: "สร้างปี่"
  },
  {
    code: 331001,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "กำแพง"
  },
  {
    code: 331002,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "อี่หล่ำ"
  },
  {
    code: 331003,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "ก้านเหลือง"
  },
  {
    code: 331004,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "ทุ่งไชย"
  },
  {
    code: 331005,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "สำโรง"
  },
  {
    code: 331006,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "แขม"
  },
  {
    code: 331007,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "หนองไฮ"
  },
  {
    code: 331008,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "ขะยูง"
  },
  {
    code: 331010,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "ตาเกษ"
  },
  {
    code: 331011,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "หัวช้าง"
  },
  {
    code: 331012,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "รังแร้ง"
  },
  {
    code: 331014,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "แต้"
  },
  {
    code: 331015,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "แข้"
  },
  {
    code: 331016,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "โพธิ์ชัย"
  },
  {
    code: 331017,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "ปะอาว"
  },
  {
    code: 331018,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "หนองห้าง"
  },
  {
    code: 331022,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "สระกำแพงใหญ่"
  },
  {
    code: 331024,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "โคกหล่าม"
  },
  {
    code: 331025,
    province: "ศรีสะเกษ",
    district: "อำเภออุทุมพรพิสัย",
    subDistrict: "โคกจาน"
  },
  {
    code: 331101,
    province: "ศรีสะเกษ",
    district: "อำเภอบึงบูรพ์",
    subDistrict: "เป๊าะ"
  },
  {
    code: 331102,
    province: "ศรีสะเกษ",
    district: "อำเภอบึงบูรพ์",
    subDistrict: "บึงบูรพ์"
  },
  {
    code: 331201,
    province: "ศรีสะเกษ",
    district: "อำเภอห้วยทับทัน",
    subDistrict: "ห้วยทับทัน"
  },
  {
    code: 331202,
    province: "ศรีสะเกษ",
    district: "อำเภอห้วยทับทัน",
    subDistrict: "เมืองหลวง"
  },
  {
    code: 331203,
    province: "ศรีสะเกษ",
    district: "อำเภอห้วยทับทัน",
    subDistrict: "กล้วยกว้าง"
  },
  {
    code: 331204,
    province: "ศรีสะเกษ",
    district: "อำเภอห้วยทับทัน",
    subDistrict: "ผักไหม"
  },
  {
    code: 331205,
    province: "ศรีสะเกษ",
    district: "อำเภอห้วยทับทัน",
    subDistrict: "จานแสนไชย"
  },
  {
    code: 331206,
    province: "ศรีสะเกษ",
    district: "อำเภอห้วยทับทัน",
    subDistrict: "ปราสาท"
  },
  {
    code: 331301,
    province: "ศรีสะเกษ",
    district: "อำเภอโนนคูณ",
    subDistrict: "โนนค้อ"
  },
  {
    code: 331302,
    province: "ศรีสะเกษ",
    district: "อำเภอโนนคูณ",
    subDistrict: "บก"
  },
  {
    code: 331303,
    province: "ศรีสะเกษ",
    district: "อำเภอโนนคูณ",
    subDistrict: "โพธิ์"
  },
  {
    code: 331304,
    province: "ศรีสะเกษ",
    district: "อำเภอโนนคูณ",
    subDistrict: "หนองกุง"
  },
  {
    code: 331305,
    province: "ศรีสะเกษ",
    district: "อำเภอโนนคูณ",
    subDistrict: "เหล่ากวาง"
  },
  {
    code: 331401,
    province: "ศรีสะเกษ",
    district: "อำเภอศรีรัตนะ",
    subDistrict: "ศรีแก้ว"
  },
  {
    code: 331402,
    province: "ศรีสะเกษ",
    district: "อำเภอศรีรัตนะ",
    subDistrict: "พิงพวย"
  },
  {
    code: 331403,
    province: "ศรีสะเกษ",
    district: "อำเภอศรีรัตนะ",
    subDistrict: "สระเยาว์"
  },
  {
    code: 331404,
    province: "ศรีสะเกษ",
    district: "อำเภอศรีรัตนะ",
    subDistrict: "ตูม"
  },
  {
    code: 331405,
    province: "ศรีสะเกษ",
    district: "อำเภอศรีรัตนะ",
    subDistrict: "เสื่องข้าว"
  },
  {
    code: 331406,
    province: "ศรีสะเกษ",
    district: "อำเภอศรีรัตนะ",
    subDistrict: "ศรีโนนงาม"
  },
  {
    code: 331407,
    province: "ศรีสะเกษ",
    district: "อำเภอศรีรัตนะ",
    subDistrict: "สะพุง"
  },
  {
    code: 331501,
    province: "ศรีสะเกษ",
    district: "อำเภอน้ำเกลี้ยง",
    subDistrict: "น้ำเกลี้ยง"
  },
  {
    code: 331502,
    province: "ศรีสะเกษ",
    district: "อำเภอน้ำเกลี้ยง",
    subDistrict: "ละเอาะ"
  },
  {
    code: 331503,
    province: "ศรีสะเกษ",
    district: "อำเภอน้ำเกลี้ยง",
    subDistrict: "ตองปิด"
  },
  {
    code: 331504,
    province: "ศรีสะเกษ",
    district: "อำเภอน้ำเกลี้ยง",
    subDistrict: "เขิน"
  },
  {
    code: 331505,
    province: "ศรีสะเกษ",
    district: "อำเภอน้ำเกลี้ยง",
    subDistrict: "รุ่งระวี"
  },
  {
    code: 331506,
    province: "ศรีสะเกษ",
    district: "อำเภอน้ำเกลี้ยง",
    subDistrict: "คูบ"
  },
  {
    code: 331601,
    province: "ศรีสะเกษ",
    district: "อำเภอวังหิน",
    subDistrict: "บุสูง"
  },
  {
    code: 331602,
    province: "ศรีสะเกษ",
    district: "อำเภอวังหิน",
    subDistrict: "ธาตุ"
  },
  {
    code: 331603,
    province: "ศรีสะเกษ",
    district: "อำเภอวังหิน",
    subDistrict: "ดวนใหญ่"
  },
  {
    code: 331604,
    province: "ศรีสะเกษ",
    district: "อำเภอวังหิน",
    subDistrict: "บ่อแก้ว"
  },
  {
    code: 331605,
    province: "ศรีสะเกษ",
    district: "อำเภอวังหิน",
    subDistrict: "ศรีสำราญ"
  },
  {
    code: 331606,
    province: "ศรีสะเกษ",
    district: "อำเภอวังหิน",
    subDistrict: "ทุ่งสว่าง"
  },
  {
    code: 331607,
    province: "ศรีสะเกษ",
    district: "อำเภอวังหิน",
    subDistrict: "วังหิน"
  },
  {
    code: 331608,
    province: "ศรีสะเกษ",
    district: "อำเภอวังหิน",
    subDistrict: "โพนยาง"
  },
  {
    code: 331701,
    province: "ศรีสะเกษ",
    district: "อำเภอภูสิงห์",
    subDistrict: "โคกตาล"
  },
  {
    code: 331702,
    province: "ศรีสะเกษ",
    district: "อำเภอภูสิงห์",
    subDistrict: "ห้วยตามอญ"
  },
  {
    code: 331703,
    province: "ศรีสะเกษ",
    district: "อำเภอภูสิงห์",
    subDistrict: "ห้วยตึ๊กชู"
  },
  {
    code: 331704,
    province: "ศรีสะเกษ",
    district: "อำเภอภูสิงห์",
    subDistrict: "ละลม"
  },
  {
    code: 331705,
    province: "ศรีสะเกษ",
    district: "อำเภอภูสิงห์",
    subDistrict: "ตะเคียนราม"
  },
  {
    code: 331706,
    province: "ศรีสะเกษ",
    district: "อำเภอภูสิงห์",
    subDistrict: "ดงรัก"
  },
  {
    code: 331707,
    province: "ศรีสะเกษ",
    district: "อำเภอภูสิงห์",
    subDistrict: "ไพรพัฒนา"
  },
  {
    code: 331801,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองจันทร์",
    subDistrict: "เมืองจันทร์"
  },
  {
    code: 331802,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองจันทร์",
    subDistrict: "ตาโกน"
  },
  {
    code: 331803,
    province: "ศรีสะเกษ",
    district: "อำเภอเมืองจันทร์",
    subDistrict: "หนองใหญ่"
  },
  {
    code: 331901,
    province: "ศรีสะเกษ",
    district: "อำเภอเบญจลักษ์",
    subDistrict: "เสียว"
  },
  {
    code: 331902,
    province: "ศรีสะเกษ",
    district: "อำเภอเบญจลักษ์",
    subDistrict: "หนองหว้า"
  },
  {
    code: 331903,
    province: "ศรีสะเกษ",
    district: "อำเภอเบญจลักษ์",
    subDistrict: "หนองงูเหลือม"
  },
  {
    code: 331904,
    province: "ศรีสะเกษ",
    district: "อำเภอเบญจลักษ์",
    subDistrict: "หนองฮาง"
  },
  {
    code: 331905,
    province: "ศรีสะเกษ",
    district: "อำเภอเบญจลักษ์",
    subDistrict: "ท่าคล้อ"
  },
  {
    code: 332001,
    province: "ศรีสะเกษ",
    district: "อำเภอพยุห์",
    subDistrict: "พยุห์"
  },
  {
    code: 332002,
    province: "ศรีสะเกษ",
    district: "อำเภอพยุห์",
    subDistrict: "พรหมสวัสดิ์"
  },
  {
    code: 332003,
    province: "ศรีสะเกษ",
    district: "อำเภอพยุห์",
    subDistrict: "ตำแย"
  },
  {
    code: 332004,
    province: "ศรีสะเกษ",
    district: "อำเภอพยุห์",
    subDistrict: "โนนเพ็ก"
  },
  {
    code: 332005,
    province: "ศรีสะเกษ",
    district: "อำเภอพยุห์",
    subDistrict: "หนองค้า"
  },
  {
    code: 332101,
    province: "ศรีสะเกษ",
    district: "อำเภอโพธิ์ศรีสุวรรณ",
    subDistrict: "โดด"
  },
  {
    code: 332102,
    province: "ศรีสะเกษ",
    district: "อำเภอโพธิ์ศรีสุวรรณ",
    subDistrict: "เสียว"
  },
  {
    code: 332103,
    province: "ศรีสะเกษ",
    district: "อำเภอโพธิ์ศรีสุวรรณ",
    subDistrict: "หนองม้า"
  },
  {
    code: 332104,
    province: "ศรีสะเกษ",
    district: "อำเภอโพธิ์ศรีสุวรรณ",
    subDistrict: "ผือใหญ่"
  },
  {
    code: 332105,
    province: "ศรีสะเกษ",
    district: "อำเภอโพธิ์ศรีสุวรรณ",
    subDistrict: "อีเซ"
  },
  {
    code: 332201,
    province: "ศรีสะเกษ",
    district: "อำเภอศิลาลาด",
    subDistrict: "กุง"
  },
  {
    code: 332202,
    province: "ศรีสะเกษ",
    district: "อำเภอศิลาลาด",
    subDistrict: "คลีกลิ้ง"
  },
  {
    code: 332203,
    province: "ศรีสะเกษ",
    district: "อำเภอศิลาลาด",
    subDistrict: "หนองบัวดง"
  },
  {
    code: 332204,
    province: "ศรีสะเกษ",
    district: "อำเภอศิลาลาด",
    subDistrict: "โจดม่วง"
  },
  {
    code: 340101,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "ในเมือง"
  },
  {
    code: 340104,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "หัวเรือ"
  },
  {
    code: 340105,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "หนองขอน"
  },
  {
    code: 340107,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "ปทุม"
  },
  {
    code: 340108,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "ขามใหญ่"
  },
  {
    code: 340109,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "แจระแม"
  },
  {
    code: 340111,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "หนองบ่อ"
  },
  {
    code: 340112,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "ไร่น้อย"
  },
  {
    code: 340113,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "กระโสบ"
  },
  {
    code: 340116,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "กุดลาด"
  },
  {
    code: 340119,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "ขี้เหล็ก"
  },
  {
    code: 340120,
    province: "อุบลราชธานี",
    district: "อำเภอเมืองอุบลราชธานี",
    subDistrict: "ปะอาว"
  },
  {
    code: 340201,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "นาคำ"
  },
  {
    code: 340202,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "แก้งกอก"
  },
  {
    code: 340203,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "เอือดใหญ่"
  },
  {
    code: 340204,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "วาริน"
  },
  {
    code: 340205,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "ลาดควาย"
  },
  {
    code: 340206,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "สงยาง"
  },
  {
    code: 340207,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "ตะบ่าย"
  },
  {
    code: 340208,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "คำไหล"
  },
  {
    code: 340209,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "หนามแท่ง"
  },
  {
    code: 340210,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "นาเลิน"
  },
  {
    code: 340211,
    province: "อุบลราชธานี",
    district: "อำเภอศรีเมืองใหม่",
    subDistrict: "ดอนใหญ่"
  },
  {
    code: 340301,
    province: "อุบลราชธานี",
    district: "อำเภอโขงเจียม",
    subDistrict: "โขงเจียม"
  },
  {
    code: 340302,
    province: "อุบลราชธานี",
    district: "อำเภอโขงเจียม",
    subDistrict: "ห้วยยาง"
  },
  {
    code: 340303,
    province: "อุบลราชธานี",
    district: "อำเภอโขงเจียม",
    subDistrict: "นาโพธิ์กลาง"
  },
  {
    code: 340304,
    province: "อุบลราชธานี",
    district: "อำเภอโขงเจียม",
    subDistrict: "หนองแสงใหญ่"
  },
  {
    code: 340305,
    province: "อุบลราชธานี",
    district: "อำเภอโขงเจียม",
    subDistrict: "ห้วยไผ่"
  },
  {
    code: 340401,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "เขื่องใน"
  },
  {
    code: 340402,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "สร้างถ่อ"
  },
  {
    code: 340403,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "ค้อทอง"
  },
  {
    code: 340404,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "ก่อเอ้"
  },
  {
    code: 340405,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "หัวดอน"
  },
  {
    code: 340406,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "ชีทวน"
  },
  {
    code: 340407,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "ท่าไห"
  },
  {
    code: 340408,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "นาคำใหญ่"
  },
  {
    code: 340409,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "แดงหม้อ"
  },
  {
    code: 340410,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "ธาตุน้อย"
  },
  {
    code: 340411,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "บ้านไทย"
  },
  {
    code: 340412,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "บ้านกอก"
  },
  {
    code: 340413,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "กลางใหญ่"
  },
  {
    code: 340414,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "โนนรัง"
  },
  {
    code: 340415,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "ยางขี้นก"
  },
  {
    code: 340416,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "ศรีสุข"
  },
  {
    code: 340417,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "สหธาตุ"
  },
  {
    code: 340418,
    province: "อุบลราชธานี",
    district: "อำเภอเขื่องใน",
    subDistrict: "หนองเหล่า"
  },
  {
    code: 340501,
    province: "อุบลราชธานี",
    district: "อำเภอเขมราฐ",
    subDistrict: "เขมราฐ"
  },
  {
    code: 340503,
    province: "อุบลราชธานี",
    district: "อำเภอเขมราฐ",
    subDistrict: "ขามป้อม"
  },
  {
    code: 340504,
    province: "อุบลราชธานี",
    district: "อำเภอเขมราฐ",
    subDistrict: "เจียด"
  },
  {
    code: 340507,
    province: "อุบลราชธานี",
    district: "อำเภอเขมราฐ",
    subDistrict: "หนองผือ"
  },
  {
    code: 340508,
    province: "อุบลราชธานี",
    district: "อำเภอเขมราฐ",
    subDistrict: "นาแวง"
  },
  {
    code: 340510,
    province: "อุบลราชธานี",
    district: "อำเภอเขมราฐ",
    subDistrict: "แก้งเหนือ"
  },
  {
    code: 340511,
    province: "อุบลราชธานี",
    district: "อำเภอเขมราฐ",
    subDistrict: "หนองนกทา"
  },
  {
    code: 340512,
    province: "อุบลราชธานี",
    district: "อำเภอเขมราฐ",
    subDistrict: "หนองสิม"
  },
  {
    code: 340513,
    province: "อุบลราชธานี",
    district: "อำเภอเขมราฐ",
    subDistrict: "หัวนา"
  },
  {
    code: 340701,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "เมืองเดช"
  },
  {
    code: 340702,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "นาส่วง"
  },
  {
    code: 340704,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "นาเจริญ"
  },
  {
    code: 340706,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "ทุ่งเทิง"
  },
  {
    code: 340708,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "สมสะอาด"
  },
  {
    code: 340709,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "กุดประทาย"
  },
  {
    code: 340710,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "ตบหู"
  },
  {
    code: 340711,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "กลาง"
  },
  {
    code: 340712,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "แก้ง"
  },
  {
    code: 340713,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "ท่าโพธิ์ศรี"
  },
  {
    code: 340715,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "บัวงาม"
  },
  {
    code: 340716,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "คำครั่ง"
  },
  {
    code: 340717,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "นากระแซง"
  },
  {
    code: 340720,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "โพนงาม"
  },
  {
    code: 340721,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "ป่าโมง"
  },
  {
    code: 340723,
    province: "อุบลราชธานี",
    district: "อำเภอเดชอุดม",
    subDistrict: "โนนสมบูรณ์"
  },
  {
    code: 340801,
    province: "อุบลราชธานี",
    district: "อำเภอนาจะหลวย",
    subDistrict: "นาจะหลวย"
  },
  {
    code: 340802,
    province: "อุบลราชธานี",
    district: "อำเภอนาจะหลวย",
    subDistrict: "โนนสมบูรณ์"
  },
  {
    code: 340803,
    province: "อุบลราชธานี",
    district: "อำเภอนาจะหลวย",
    subDistrict: "พรสวรรค์"
  },
  {
    code: 340804,
    province: "อุบลราชธานี",
    district: "อำเภอนาจะหลวย",
    subDistrict: "บ้านตูม"
  },
  {
    code: 340805,
    province: "อุบลราชธานี",
    district: "อำเภอนาจะหลวย",
    subDistrict: "โสกแสง"
  },
  {
    code: 340806,
    province: "อุบลราชธานี",
    district: "อำเภอนาจะหลวย",
    subDistrict: "โนนสวรรค์"
  },
  {
    code: 340901,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำยืน",
    subDistrict: "โซง"
  },
  {
    code: 340903,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำยืน",
    subDistrict: "ยาง"
  },
  {
    code: 340904,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำยืน",
    subDistrict: "โดมประดิษฐ์"
  },
  {
    code: 340906,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำยืน",
    subDistrict: "บุเปือย"
  },
  {
    code: 340907,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำยืน",
    subDistrict: "สีวิเชียร"
  },
  {
    code: 340909,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำยืน",
    subDistrict: "ยางใหญ่"
  },
  {
    code: 340911,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำยืน",
    subDistrict: "เก่าขาม"
  },
  {
    code: 341001,
    province: "อุบลราชธานี",
    district: "อำเภอบุณฑริก",
    subDistrict: "โพนงาม"
  },
  {
    code: 341002,
    province: "อุบลราชธานี",
    district: "อำเภอบุณฑริก",
    subDistrict: "ห้วยข่า"
  },
  {
    code: 341003,
    province: "อุบลราชธานี",
    district: "อำเภอบุณฑริก",
    subDistrict: "คอแลน"
  },
  {
    code: 341004,
    province: "อุบลราชธานี",
    district: "อำเภอบุณฑริก",
    subDistrict: "นาโพธิ์"
  },
  {
    code: 341005,
    province: "อุบลราชธานี",
    district: "อำเภอบุณฑริก",
    subDistrict: "หนองสะโน"
  },
  {
    code: 341006,
    province: "อุบลราชธานี",
    district: "อำเภอบุณฑริก",
    subDistrict: "โนนค้อ"
  },
  {
    code: 341007,
    province: "อุบลราชธานี",
    district: "อำเภอบุณฑริก",
    subDistrict: "บัวงาม"
  },
  {
    code: 341008,
    province: "อุบลราชธานี",
    district: "อำเภอบุณฑริก",
    subDistrict: "บ้านแมด"
  },
  {
    code: 341101,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "ขุหลุ"
  },
  {
    code: 341102,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "กระเดียน"
  },
  {
    code: 341103,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "เกษม"
  },
  {
    code: 341104,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "กุศกร"
  },
  {
    code: 341105,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "ขามเปี้ย"
  },
  {
    code: 341106,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "คอนสาย"
  },
  {
    code: 341107,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "โคกจาน"
  },
  {
    code: 341108,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "นาพิน"
  },
  {
    code: 341109,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "นาสะไม"
  },
  {
    code: 341110,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "โนนกุง"
  },
  {
    code: 341111,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "ตระการ"
  },
  {
    code: 341112,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "ตากแดด"
  },
  {
    code: 341113,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "ไหล่ทุ่ง"
  },
  {
    code: 341114,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "เป้า"
  },
  {
    code: 341115,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "เซเป็ด"
  },
  {
    code: 341116,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "สะพือ"
  },
  {
    code: 341117,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "หนองเต่า"
  },
  {
    code: 341118,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "ถ้ำแข้"
  },
  {
    code: 341119,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "ท่าหลวง"
  },
  {
    code: 341120,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "ห้วยฝ้ายพัฒนา"
  },
  {
    code: 341121,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "กุดยาลวน"
  },
  {
    code: 341122,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "บ้านแดง"
  },
  {
    code: 341123,
    province: "อุบลราชธานี",
    district: "อำเภอตระการพืชผล",
    subDistrict: "คำเจริญ"
  },
  {
    code: 341201,
    province: "อุบลราชธานี",
    district: "อำเภอกุดข้าวปุ้น",
    subDistrict: "ข้าวปุ้น"
  },
  {
    code: 341202,
    province: "อุบลราชธานี",
    district: "อำเภอกุดข้าวปุ้น",
    subDistrict: "โนนสวาง"
  },
  {
    code: 341203,
    province: "อุบลราชธานี",
    district: "อำเภอกุดข้าวปุ้น",
    subDistrict: "แก่งเค็ง"
  },
  {
    code: 341204,
    province: "อุบลราชธานี",
    district: "อำเภอกุดข้าวปุ้น",
    subDistrict: "กาบิน"
  },
  {
    code: 341205,
    province: "อุบลราชธานี",
    district: "อำเภอกุดข้าวปุ้น",
    subDistrict: "หนองทันน้ำ"
  },
  {
    code: 341401,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "ม่วงสามสิบ"
  },
  {
    code: 341402,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "เหล่าบก"
  },
  {
    code: 341403,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "ดุมใหญ่"
  },
  {
    code: 341404,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "หนองช้างใหญ่"
  },
  {
    code: 341405,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "หนองเมือง"
  },
  {
    code: 341406,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "เตย"
  },
  {
    code: 341407,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "ยางสักกระโพหลุ่ม"
  },
  {
    code: 341408,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "หนองไข่นก"
  },
  {
    code: 341409,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "หนองเหล่า"
  },
  {
    code: 341410,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "หนองฮาง"
  },
  {
    code: 341411,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "ยางโยภาพ"
  },
  {
    code: 341412,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "ไผ่ใหญ่"
  },
  {
    code: 341413,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "นาเลิง"
  },
  {
    code: 341414,
    province: "อุบลราชธานี",
    district: "อำเภอม่วงสามสิบ",
    subDistrict: "โพนแพง"
  },
  {
    code: 341501,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "วารินชำราบ"
  },
  {
    code: 341502,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "ธาตุ"
  },
  {
    code: 341504,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "ท่าลาด"
  },
  {
    code: 341505,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "โนนโหนน"
  },
  {
    code: 341507,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "คูเมือง"
  },
  {
    code: 341508,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "สระสมิง"
  },
  {
    code: 341510,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "คำน้ำแซบ"
  },
  {
    code: 341511,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "บุ่งหวาย"
  },
  {
    code: 341515,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "คำขวาง"
  },
  {
    code: 341516,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "โพธิ์ใหญ่"
  },
  {
    code: 341518,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "แสนสุข"
  },
  {
    code: 341520,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "หนองกินเพล"
  },
  {
    code: 341521,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "โนนผึ้ง"
  },
  {
    code: 341522,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "เมืองศรีไค"
  },
  {
    code: 341524,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "ห้วยขะยูง"
  },
  {
    code: 341526,
    province: "อุบลราชธานี",
    district: "อำเภอวารินชำราบ",
    subDistrict: "บุ่งไหม"
  },
  {
    code: 341901,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "พิบูล"
  },
  {
    code: 341902,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "กุดชมภู"
  },
  {
    code: 341904,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "ดอนจิก"
  },
  {
    code: 341905,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "ทรายมูล"
  },
  {
    code: 341906,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "นาโพธิ์"
  },
  {
    code: 341907,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "โนนกลาง"
  },
  {
    code: 341909,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "โพธิ์ไทร"
  },
  {
    code: 341910,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "โพธิ์ศรี"
  },
  {
    code: 341911,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "ระเว"
  },
  {
    code: 341912,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "ไร่ใต้"
  },
  {
    code: 341913,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "หนองบัวฮี"
  },
  {
    code: 341914,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "อ่างศิลา"
  },
  {
    code: 341918,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "โนนกาหลง"
  },
  {
    code: 341919,
    province: "อุบลราชธานี",
    district: "อำเภอพิบูลมังสาหาร",
    subDistrict: "บ้านแขม"
  },
  {
    code: 342001,
    province: "อุบลราชธานี",
    district: "อำเภอตาลสุม",
    subDistrict: "ตาลสุม"
  },
  {
    code: 342002,
    province: "อุบลราชธานี",
    district: "อำเภอตาลสุม",
    subDistrict: "สำโรง"
  },
  {
    code: 342003,
    province: "อุบลราชธานี",
    district: "อำเภอตาลสุม",
    subDistrict: "จิกเทิง"
  },
  {
    code: 342004,
    province: "อุบลราชธานี",
    district: "อำเภอตาลสุม",
    subDistrict: "หนองกุง"
  },
  {
    code: 342005,
    province: "อุบลราชธานี",
    district: "อำเภอตาลสุม",
    subDistrict: "นาคาย"
  },
  {
    code: 342006,
    province: "อุบลราชธานี",
    district: "อำเภอตาลสุม",
    subDistrict: "คำหว้า"
  },
  {
    code: 342101,
    province: "อุบลราชธานี",
    district: "อำเภอโพธิ์ไทร",
    subDistrict: "โพธิ์ไทร"
  },
  {
    code: 342102,
    province: "อุบลราชธานี",
    district: "อำเภอโพธิ์ไทร",
    subDistrict: "ม่วงใหญ่"
  },
  {
    code: 342103,
    province: "อุบลราชธานี",
    district: "อำเภอโพธิ์ไทร",
    subDistrict: "สำโรง"
  },
  {
    code: 342104,
    province: "อุบลราชธานี",
    district: "อำเภอโพธิ์ไทร",
    subDistrict: "สองคอน"
  },
  {
    code: 342105,
    province: "อุบลราชธานี",
    district: "อำเภอโพธิ์ไทร",
    subDistrict: "สารภี"
  },
  {
    code: 342106,
    province: "อุบลราชธานี",
    district: "อำเภอโพธิ์ไทร",
    subDistrict: "เหล่างาม"
  },
  {
    code: 342201,
    province: "อุบลราชธานี",
    district: "อำเภอสำโรง",
    subDistrict: "สำโรง"
  },
  {
    code: 342202,
    province: "อุบลราชธานี",
    district: "อำเภอสำโรง",
    subDistrict: "โคกก่อง"
  },
  {
    code: 342203,
    province: "อุบลราชธานี",
    district: "อำเภอสำโรง",
    subDistrict: "หนองไฮ"
  },
  {
    code: 342204,
    province: "อุบลราชธานี",
    district: "อำเภอสำโรง",
    subDistrict: "ค้อน้อย"
  },
  {
    code: 342205,
    province: "อุบลราชธานี",
    district: "อำเภอสำโรง",
    subDistrict: "โนนกาเล็น"
  },
  {
    code: 342206,
    province: "อุบลราชธานี",
    district: "อำเภอสำโรง",
    subDistrict: "โคกสว่าง"
  },
  {
    code: 342207,
    province: "อุบลราชธานี",
    district: "อำเภอสำโรง",
    subDistrict: "โนนกลาง"
  },
  {
    code: 342208,
    province: "อุบลราชธานี",
    district: "อำเภอสำโรง",
    subDistrict: "บอน"
  },
  {
    code: 342209,
    province: "อุบลราชธานี",
    district: "อำเภอสำโรง",
    subDistrict: "ขามป้อม"
  },
  {
    code: 342401,
    province: "อุบลราชธานี",
    district: "อำเภอดอนมดแดง",
    subDistrict: "ดอนมดแดง"
  },
  {
    code: 342402,
    province: "อุบลราชธานี",
    district: "อำเภอดอนมดแดง",
    subDistrict: "เหล่าแดง"
  },
  {
    code: 342403,
    province: "อุบลราชธานี",
    district: "อำเภอดอนมดแดง",
    subDistrict: "ท่าเมือง"
  },
  {
    code: 342404,
    province: "อุบลราชธานี",
    district: "อำเภอดอนมดแดง",
    subDistrict: "คำไฮใหญ่"
  },
  {
    code: 342501,
    province: "อุบลราชธานี",
    district: "อำเภอสิรินธร",
    subDistrict: "คันไร่"
  },
  {
    code: 342502,
    province: "อุบลราชธานี",
    district: "อำเภอสิรินธร",
    subDistrict: "ช่องเม็ก"
  },
  {
    code: 342503,
    province: "อุบลราชธานี",
    district: "อำเภอสิรินธร",
    subDistrict: "โนนก่อ"
  },
  {
    code: 342504,
    province: "อุบลราชธานี",
    district: "อำเภอสิรินธร",
    subDistrict: "นิคมสร้างตนเองลำโดมน้อย"
  },
  {
    code: 342505,
    province: "อุบลราชธานี",
    district: "อำเภอสิรินธร",
    subDistrict: "ฝางคำ"
  },
  {
    code: 342506,
    province: "อุบลราชธานี",
    district: "อำเภอสิรินธร",
    subDistrict: "คำเขื่อนแก้ว"
  },
  {
    code: 342602,
    province: "อุบลราชธานี",
    district: "อำเภอทุ่งศรีอุดม",
    subDistrict: "หนองอ้ม"
  },
  {
    code: 342603,
    province: "อุบลราชธานี",
    district: "อำเภอทุ่งศรีอุดม",
    subDistrict: "นาเกษม"
  },
  {
    code: 342604,
    province: "อุบลราชธานี",
    district: "อำเภอทุ่งศรีอุดม",
    subDistrict: "กุดเรือ"
  },
  {
    code: 342605,
    province: "อุบลราชธานี",
    district: "อำเภอทุ่งศรีอุดม",
    subDistrict: "โคกชำแระ"
  },
  {
    code: 342606,
    province: "อุบลราชธานี",
    district: "อำเภอทุ่งศรีอุดม",
    subDistrict: "นาห่อม"
  },
  {
    code: 342901,
    province: "อุบลราชธานี",
    district: "อำเภอนาเยีย",
    subDistrict: "นาเยีย"
  },
  {
    code: 342902,
    province: "อุบลราชธานี",
    district: "อำเภอนาเยีย",
    subDistrict: "นาดี"
  },
  {
    code: 342903,
    province: "อุบลราชธานี",
    district: "อำเภอนาเยีย",
    subDistrict: "นาเรือง"
  },
  {
    code: 343001,
    province: "อุบลราชธานี",
    district: "อำเภอนาตาล",
    subDistrict: "นาตาล"
  },
  {
    code: 343002,
    province: "อุบลราชธานี",
    district: "อำเภอนาตาล",
    subDistrict: "พะลาน"
  },
  {
    code: 343003,
    province: "อุบลราชธานี",
    district: "อำเภอนาตาล",
    subDistrict: "กองโพน"
  },
  {
    code: 343004,
    province: "อุบลราชธานี",
    district: "อำเภอนาตาล",
    subDistrict: "พังเคน"
  },
  {
    code: 343101,
    province: "อุบลราชธานี",
    district: "อำเภอเหล่าเสือโก้ก",
    subDistrict: "เหล่าเสือโก้ก"
  },
  {
    code: 343102,
    province: "อุบลราชธานี",
    district: "อำเภอเหล่าเสือโก้ก",
    subDistrict: "โพนเมือง"
  },
  {
    code: 343103,
    province: "อุบลราชธานี",
    district: "อำเภอเหล่าเสือโก้ก",
    subDistrict: "แพงใหญ่"
  },
  {
    code: 343104,
    province: "อุบลราชธานี",
    district: "อำเภอเหล่าเสือโก้ก",
    subDistrict: "หนองบก"
  },
  {
    code: 343201,
    province: "อุบลราชธานี",
    district: "อำเภอสว่างวีระวงศ์",
    subDistrict: "แก่งโดม"
  },
  {
    code: 343202,
    province: "อุบลราชธานี",
    district: "อำเภอสว่างวีระวงศ์",
    subDistrict: "ท่าช้าง"
  },
  {
    code: 343203,
    province: "อุบลราชธานี",
    district: "อำเภอสว่างวีระวงศ์",
    subDistrict: "บุ่งมะแลง"
  },
  {
    code: 343204,
    province: "อุบลราชธานี",
    district: "อำเภอสว่างวีระวงศ์",
    subDistrict: "สว่าง"
  },
  {
    code: 343301,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำขุ่น",
    subDistrict: "ตาเกา"
  },
  {
    code: 343302,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำขุ่น",
    subDistrict: "ไพบูลย์"
  },
  {
    code: 343303,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำขุ่น",
    subDistrict: "ขี้เหล็ก"
  },
  {
    code: 343304,
    province: "อุบลราชธานี",
    district: "อำเภอน้ำขุ่น",
    subDistrict: "โคกสะอาด"
  },
  {
    code: 350101,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "ในเมือง"
  },
  {
    code: 350102,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "น้ำคำใหญ่"
  },
  {
    code: 350103,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "ตาดทอง"
  },
  {
    code: 350104,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "สำราญ"
  },
  {
    code: 350105,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "ค้อเหนือ"
  },
  {
    code: 350106,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "ดู่ทุ่ง"
  },
  {
    code: 350107,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "เดิด"
  },
  {
    code: 350108,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "ขั้นไดใหญ่"
  },
  {
    code: 350109,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "ทุ่งแต้"
  },
  {
    code: 350110,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "สิงห์"
  },
  {
    code: 350111,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "นาสะไมย์"
  },
  {
    code: 350112,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "เขื่องคำ"
  },
  {
    code: 350113,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "หนองหิน"
  },
  {
    code: 350114,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "หนองคู"
  },
  {
    code: 350115,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "ขุมเงิน"
  },
  {
    code: 350116,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "ทุ่งนางโอก"
  },
  {
    code: 350117,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "หนองเรือ"
  },
  {
    code: 350118,
    province: "ยโสธร",
    district: "อำเภอเมืองยโสธร",
    subDistrict: "หนองเป็ด"
  },
  {
    code: 350201,
    province: "ยโสธร",
    district: "อำเภอทรายมูล",
    subDistrict: "ทรายมูล"
  },
  {
    code: 350202,
    province: "ยโสธร",
    district: "อำเภอทรายมูล",
    subDistrict: "ดู่ลาด"
  },
  {
    code: 350203,
    province: "ยโสธร",
    district: "อำเภอทรายมูล",
    subDistrict: "ดงมะไฟ"
  },
  {
    code: 350204,
    province: "ยโสธร",
    district: "อำเภอทรายมูล",
    subDistrict: "นาเวียง"
  },
  {
    code: 350205,
    province: "ยโสธร",
    district: "อำเภอทรายมูล",
    subDistrict: "ไผ่"
  },
  {
    code: 350301,
    province: "ยโสธร",
    district: "อำเภอกุดชุม",
    subDistrict: "กุดชุม"
  },
  {
    code: 350302,
    province: "ยโสธร",
    district: "อำเภอกุดชุม",
    subDistrict: "โนนเปือย"
  },
  {
    code: 350303,
    province: "ยโสธร",
    district: "อำเภอกุดชุม",
    subDistrict: "กำแมด"
  },
  {
    code: 350304,
    province: "ยโสธร",
    district: "อำเภอกุดชุม",
    subDistrict: "นาโส่"
  },
  {
    code: 350305,
    province: "ยโสธร",
    district: "อำเภอกุดชุม",
    subDistrict: "ห้วยแก้ง"
  },
  {
    code: 350306,
    province: "ยโสธร",
    district: "อำเภอกุดชุม",
    subDistrict: "หนองหมี"
  },
  {
    code: 350307,
    province: "ยโสธร",
    district: "อำเภอกุดชุม",
    subDistrict: "โพนงาม"
  },
  {
    code: 350308,
    province: "ยโสธร",
    district: "อำเภอกุดชุม",
    subDistrict: "คำน้ำสร้าง"
  },
  {
    code: 350309,
    province: "ยโสธร",
    district: "อำเภอกุดชุม",
    subDistrict: "หนองแหน"
  },
  {
    code: 350401,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "ลุมพุก"
  },
  {
    code: 350402,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "ย่อ"
  },
  {
    code: 350403,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "สงเปือย"
  },
  {
    code: 350404,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "โพนทัน"
  },
  {
    code: 350405,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "ทุ่งมน"
  },
  {
    code: 350406,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "นาคำ"
  },
  {
    code: 350407,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "ดงแคนใหญ่"
  },
  {
    code: 350408,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "กู่จาน"
  },
  {
    code: 350409,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "นาแก"
  },
  {
    code: 350410,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "กุดกุง"
  },
  {
    code: 350411,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "เหล่าไฮ"
  },
  {
    code: 350412,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "แคนน้อย"
  },
  {
    code: 350413,
    province: "ยโสธร",
    district: "อำเภอคำเขื่อนแก้ว",
    subDistrict: "ดงเจริญ"
  },
  {
    code: 350501,
    province: "ยโสธร",
    district: "อำเภอป่าติ้ว",
    subDistrict: "โพธิ์ไทร"
  },
  {
    code: 350502,
    province: "ยโสธร",
    district: "อำเภอป่าติ้ว",
    subDistrict: "กระจาย"
  },
  {
    code: 350503,
    province: "ยโสธร",
    district: "อำเภอป่าติ้ว",
    subDistrict: "โคกนาโก"
  },
  {
    code: 350504,
    province: "ยโสธร",
    district: "อำเภอป่าติ้ว",
    subDistrict: "เชียงเพ็ง"
  },
  {
    code: 350505,
    province: "ยโสธร",
    district: "อำเภอป่าติ้ว",
    subDistrict: "ศรีฐาน"
  },
  {
    code: 350601,
    province: "ยโสธร",
    district: "อำเภอมหาชนะชัย",
    subDistrict: "ฟ้าหยาด"
  },
  {
    code: 350602,
    province: "ยโสธร",
    district: "อำเภอมหาชนะชัย",
    subDistrict: "หัวเมือง"
  },
  {
    code: 350603,
    province: "ยโสธร",
    district: "อำเภอมหาชนะชัย",
    subDistrict: "คูเมือง"
  },
  {
    code: 350604,
    province: "ยโสธร",
    district: "อำเภอมหาชนะชัย",
    subDistrict: "ผือฮี"
  },
  {
    code: 350605,
    province: "ยโสธร",
    district: "อำเภอมหาชนะชัย",
    subDistrict: "บากเรือ"
  },
  {
    code: 350606,
    province: "ยโสธร",
    district: "อำเภอมหาชนะชัย",
    subDistrict: "ม่วง"
  },
  {
    code: 350607,
    province: "ยโสธร",
    district: "อำเภอมหาชนะชัย",
    subDistrict: "โนนทราย"
  },
  {
    code: 350608,
    province: "ยโสธร",
    district: "อำเภอมหาชนะชัย",
    subDistrict: "บึงแก"
  },
  {
    code: 350609,
    province: "ยโสธร",
    district: "อำเภอมหาชนะชัย",
    subDistrict: "พระเสาร์"
  },
  {
    code: 350610,
    province: "ยโสธร",
    district: "อำเภอมหาชนะชัย",
    subDistrict: "สงยาง"
  },
  {
    code: 350701,
    province: "ยโสธร",
    district: "อำเภอค้อวัง",
    subDistrict: "ฟ้าห่วน"
  },
  {
    code: 350702,
    province: "ยโสธร",
    district: "อำเภอค้อวัง",
    subDistrict: "กุดน้ำใส"
  },
  {
    code: 350703,
    province: "ยโสธร",
    district: "อำเภอค้อวัง",
    subDistrict: "น้ำอ้อม"
  },
  {
    code: 350704,
    province: "ยโสธร",
    district: "อำเภอค้อวัง",
    subDistrict: "ค้อวัง"
  },
  {
    code: 350802,
    province: "ยโสธร",
    district: "อำเภอเลิงนกทา",
    subDistrict: "บุ่งค้า"
  },
  {
    code: 350803,
    province: "ยโสธร",
    district: "อำเภอเลิงนกทา",
    subDistrict: "สวาท"
  },
  {
    code: 350805,
    province: "ยโสธร",
    district: "อำเภอเลิงนกทา",
    subDistrict: "ห้องแซง"
  },
  {
    code: 350806,
    province: "ยโสธร",
    district: "อำเภอเลิงนกทา",
    subDistrict: "สามัคคี"
  },
  {
    code: 350807,
    province: "ยโสธร",
    district: "อำเภอเลิงนกทา",
    subDistrict: "กุดเชียงหมี"
  },
  {
    code: 350810,
    province: "ยโสธร",
    district: "อำเภอเลิงนกทา",
    subDistrict: "สามแยก"
  },
  {
    code: 350811,
    province: "ยโสธร",
    district: "อำเภอเลิงนกทา",
    subDistrict: "กุดแห่"
  },
  {
    code: 350812,
    province: "ยโสธร",
    district: "อำเภอเลิงนกทา",
    subDistrict: "โคกสำราญ"
  },
  {
    code: 350813,
    province: "ยโสธร",
    district: "อำเภอเลิงนกทา",
    subDistrict: "สร้างมิ่ง"
  },
  {
    code: 350814,
    province: "ยโสธร",
    district: "อำเภอเลิงนกทา",
    subDistrict: "ศรีแก้ว"
  },
  {
    code: 350901,
    province: "ยโสธร",
    district: "อำเภอไทยเจริญ",
    subDistrict: "ไทยเจริญ"
  },
  {
    code: 350902,
    province: "ยโสธร",
    district: "อำเภอไทยเจริญ",
    subDistrict: "น้ำคำ"
  },
  {
    code: 350903,
    province: "ยโสธร",
    district: "อำเภอไทยเจริญ",
    subDistrict: "ส้มผ่อ"
  },
  {
    code: 350904,
    province: "ยโสธร",
    district: "อำเภอไทยเจริญ",
    subDistrict: "คำเตย"
  },
  {
    code: 350905,
    province: "ยโสธร",
    district: "อำเภอไทยเจริญ",
    subDistrict: "คำไผ่"
  },
  {
    code: 360101,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "ในเมือง"
  },
  {
    code: 360102,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "รอบเมือง"
  },
  {
    code: 360103,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "โพนทอง"
  },
  {
    code: 360104,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "นาฝาย"
  },
  {
    code: 360105,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "บ้านค่าย"
  },
  {
    code: 360106,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "กุดตุ้ม"
  },
  {
    code: 360107,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "ชีลอง"
  },
  {
    code: 360108,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "บ้านเล่า"
  },
  {
    code: 360109,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "นาเสียว"
  },
  {
    code: 360110,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "หนองนาแซง"
  },
  {
    code: 360111,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "ลาดใหญ่"
  },
  {
    code: 360112,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "หนองไผ่"
  },
  {
    code: 360113,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "ท่าหินโงม"
  },
  {
    code: 360114,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "ห้วยต้อน"
  },
  {
    code: 360115,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "ห้วยบง"
  },
  {
    code: 360116,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "โนนสำราญ"
  },
  {
    code: 360117,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "โคกสูง"
  },
  {
    code: 360118,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "บุ่งคล้า"
  },
  {
    code: 360119,
    province: "ชัยภูมิ",
    district: "อำเภอเมืองชัยภูมิ",
    subDistrict: "ซับสีทอง"
  },
  {
    code: 360201,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านเขว้า",
    subDistrict: "บ้านเขว้า"
  },
  {
    code: 360202,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านเขว้า",
    subDistrict: "ตลาดแร้ง"
  },
  {
    code: 360203,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านเขว้า",
    subDistrict: "ลุ่มลำชี"
  },
  {
    code: 360204,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านเขว้า",
    subDistrict: "ชีบน"
  },
  {
    code: 360205,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านเขว้า",
    subDistrict: "ภูแลนคา"
  },
  {
    code: 360206,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านเขว้า",
    subDistrict: "โนนแดง"
  },
  {
    code: 360301,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสวรรค์",
    subDistrict: "คอนสวรรค์"
  },
  {
    code: 360302,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสวรรค์",
    subDistrict: "ยางหวาย"
  },
  {
    code: 360303,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสวรรค์",
    subDistrict: "ช่องสามหมอ"
  },
  {
    code: 360304,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสวรรค์",
    subDistrict: "โนนสะอาด"
  },
  {
    code: 360305,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสวรรค์",
    subDistrict: "ห้วยไร่"
  },
  {
    code: 360306,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสวรรค์",
    subDistrict: "บ้านโสก"
  },
  {
    code: 360307,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสวรรค์",
    subDistrict: "โคกมั่งงอย"
  },
  {
    code: 360308,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสวรรค์",
    subDistrict: "หนองขาม"
  },
  {
    code: 360309,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสวรรค์",
    subDistrict: "ศรีสำราญ"
  },
  {
    code: 360401,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "บ้านยาง"
  },
  {
    code: 360402,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "บ้านหัน"
  },
  {
    code: 360403,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "บ้านเดื่อ"
  },
  {
    code: 360404,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "บ้านเป้า"
  },
  {
    code: 360405,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "กุดเลาะ"
  },
  {
    code: 360406,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "โนนกอก"
  },
  {
    code: 360407,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "สระโพนทอง"
  },
  {
    code: 360408,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "หนองข่า"
  },
  {
    code: 360409,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "หนองโพนงาม"
  },
  {
    code: 360410,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "บ้านบัว"
  },
  {
    code: 360412,
    province: "ชัยภูมิ",
    district: "อำเภอเกษตรสมบูรณ์",
    subDistrict: "โนนทอง"
  },
  {
    code: 360501,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวแดง",
    subDistrict: "หนองบัวแดง"
  },
  {
    code: 360502,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวแดง",
    subDistrict: "กุดชุมแสง"
  },
  {
    code: 360503,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวแดง",
    subDistrict: "ถ้ำวัวแดง"
  },
  {
    code: 360504,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวแดง",
    subDistrict: "นางแดด"
  },
  {
    code: 360507,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวแดง",
    subDistrict: "หนองแวง"
  },
  {
    code: 360508,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวแดง",
    subDistrict: "คูเมือง"
  },
  {
    code: 360509,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวแดง",
    subDistrict: "ท่าใหญ่"
  },
  {
    code: 360511,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวแดง",
    subDistrict: "วังชมภู"
  },
  {
    code: 360601,
    province: "ชัยภูมิ",
    district: "อำเภอจัตุรัส",
    subDistrict: "บ้านกอก"
  },
  {
    code: 360602,
    province: "ชัยภูมิ",
    district: "อำเภอจัตุรัส",
    subDistrict: "หนองบัวบาน"
  },
  {
    code: 360603,
    province: "ชัยภูมิ",
    district: "อำเภอจัตุรัส",
    subDistrict: "บ้านขาม"
  },
  {
    code: 360605,
    province: "ชัยภูมิ",
    district: "อำเภอจัตุรัส",
    subDistrict: "กุดน้ำใส"
  },
  {
    code: 360606,
    province: "ชัยภูมิ",
    district: "อำเภอจัตุรัส",
    subDistrict: "หนองโดน"
  },
  {
    code: 360607,
    province: "ชัยภูมิ",
    district: "อำเภอจัตุรัส",
    subDistrict: "ละหาน"
  },
  {
    code: 360610,
    province: "ชัยภูมิ",
    district: "อำเภอจัตุรัส",
    subDistrict: "หนองบัวใหญ่"
  },
  {
    code: 360611,
    province: "ชัยภูมิ",
    district: "อำเภอจัตุรัส",
    subDistrict: "หนองบัวโคก"
  },
  {
    code: 360613,
    province: "ชัยภูมิ",
    district: "อำเภอจัตุรัส",
    subDistrict: "ส้มป่อย"
  },
  {
    code: 360701,
    province: "ชัยภูมิ",
    district: "อำเภอบำเหน็จณรงค์",
    subDistrict: "บ้านชวน"
  },
  {
    code: 360702,
    province: "ชัยภูมิ",
    district: "อำเภอบำเหน็จณรงค์",
    subDistrict: "บ้านเพชร"
  },
  {
    code: 360703,
    province: "ชัยภูมิ",
    district: "อำเภอบำเหน็จณรงค์",
    subDistrict: "บ้านตาล"
  },
  {
    code: 360704,
    province: "ชัยภูมิ",
    district: "อำเภอบำเหน็จณรงค์",
    subDistrict: "หัวทะเล"
  },
  {
    code: 360705,
    province: "ชัยภูมิ",
    district: "อำเภอบำเหน็จณรงค์",
    subDistrict: "โคกเริงรมย์"
  },
  {
    code: 360706,
    province: "ชัยภูมิ",
    district: "อำเภอบำเหน็จณรงค์",
    subDistrict: "เกาะมะนาว"
  },
  {
    code: 360707,
    province: "ชัยภูมิ",
    district: "อำเภอบำเหน็จณรงค์",
    subDistrict: "โคกเพชรพัฒนา"
  },
  {
    code: 360801,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวระเหว",
    subDistrict: "หนองบัวระเหว"
  },
  {
    code: 360802,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวระเหว",
    subDistrict: "วังตะเฆ่"
  },
  {
    code: 360803,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวระเหว",
    subDistrict: "ห้วยแย้"
  },
  {
    code: 360804,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวระเหว",
    subDistrict: "โคกสะอาด"
  },
  {
    code: 360805,
    province: "ชัยภูมิ",
    district: "อำเภอหนองบัวระเหว",
    subDistrict: "โสกปลาดุก"
  },
  {
    code: 360901,
    province: "ชัยภูมิ",
    district: "อำเภอเทพสถิต",
    subDistrict: "วะตะแบก"
  },
  {
    code: 360902,
    province: "ชัยภูมิ",
    district: "อำเภอเทพสถิต",
    subDistrict: "ห้วยยายจิ๋ว"
  },
  {
    code: 360903,
    province: "ชัยภูมิ",
    district: "อำเภอเทพสถิต",
    subDistrict: "นายางกลัก"
  },
  {
    code: 360904,
    province: "ชัยภูมิ",
    district: "อำเภอเทพสถิต",
    subDistrict: "บ้านไร่"
  },
  {
    code: 360905,
    province: "ชัยภูมิ",
    district: "อำเภอเทพสถิต",
    subDistrict: "โป่งนก"
  },
  {
    code: 361001,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "ผักปัง"
  },
  {
    code: 361002,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "กวางโจน"
  },
  {
    code: 361003,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "หนองคอนไทย"
  },
  {
    code: 361004,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "บ้านแก้ง"
  },
  {
    code: 361005,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "กุดยม"
  },
  {
    code: 361006,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "บ้านเพชร"
  },
  {
    code: 361007,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "โคกสะอาด"
  },
  {
    code: 361008,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "หนองตูม"
  },
  {
    code: 361009,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "โอโล"
  },
  {
    code: 361010,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "ธาตุทอง"
  },
  {
    code: 361011,
    province: "ชัยภูมิ",
    district: "อำเภอภูเขียว",
    subDistrict: "บ้านดอน"
  },
  {
    code: 361101,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านแท่น",
    subDistrict: "บ้านแท่น"
  },
  {
    code: 361102,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านแท่น",
    subDistrict: "สามสวน"
  },
  {
    code: 361103,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านแท่น",
    subDistrict: "สระพัง"
  },
  {
    code: 361104,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านแท่น",
    subDistrict: "บ้านเต่า"
  },
  {
    code: 361105,
    province: "ชัยภูมิ",
    district: "อำเภอบ้านแท่น",
    subDistrict: "หนองคู"
  },
  {
    code: 361201,
    province: "ชัยภูมิ",
    district: "อำเภอแก้งคร้อ",
    subDistrict: "ช่องสามหมอ"
  },
  {
    code: 361202,
    province: "ชัยภูมิ",
    district: "อำเภอแก้งคร้อ",
    subDistrict: "หนองขาม"
  },
  {
    code: 361203,
    province: "ชัยภูมิ",
    district: "อำเภอแก้งคร้อ",
    subDistrict: "นาหนองทุ่ม"
  },
  {
    code: 361204,
    province: "ชัยภูมิ",
    district: "อำเภอแก้งคร้อ",
    subDistrict: "บ้านแก้ง"
  },
  {
    code: 361205,
    province: "ชัยภูมิ",
    district: "อำเภอแก้งคร้อ",
    subDistrict: "หนองสังข์"
  },
  {
    code: 361206,
    province: "ชัยภูมิ",
    district: "อำเภอแก้งคร้อ",
    subDistrict: "หลุบคา"
  },
  {
    code: 361207,
    province: "ชัยภูมิ",
    district: "อำเภอแก้งคร้อ",
    subDistrict: "โคกกุง"
  },
  {
    code: 361208,
    province: "ชัยภูมิ",
    district: "อำเภอแก้งคร้อ",
    subDistrict: "เก่าย่าดี"
  },
  {
    code: 361209,
    province: "ชัยภูมิ",
    district: "อำเภอแก้งคร้อ",
    subDistrict: "ท่ามะไฟหวาน"
  },
  {
    code: 361210,
    province: "ชัยภูมิ",
    district: "อำเภอแก้งคร้อ",
    subDistrict: "หนองไผ่"
  },
  {
    code: 361301,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสาร",
    subDistrict: "คอนสาร"
  },
  {
    code: 361302,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสาร",
    subDistrict: "ทุ่งพระ"
  },
  {
    code: 361303,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสาร",
    subDistrict: "โนนคูณ"
  },
  {
    code: 361304,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสาร",
    subDistrict: "ห้วยยาง"
  },
  {
    code: 361305,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสาร",
    subDistrict: "ทุ่งลุยลาย"
  },
  {
    code: 361306,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสาร",
    subDistrict: "ดงบัง"
  },
  {
    code: 361307,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสาร",
    subDistrict: "ทุ่งนาเลา"
  },
  {
    code: 361308,
    province: "ชัยภูมิ",
    district: "อำเภอคอนสาร",
    subDistrict: "ดงกลาง"
  },
  {
    code: 361401,
    province: "ชัยภูมิ",
    district: "อำเภอภักดีชุมพล",
    subDistrict: "บ้านเจียง"
  },
  {
    code: 361402,
    province: "ชัยภูมิ",
    district: "อำเภอภักดีชุมพล",
    subDistrict: "เจาทอง"
  },
  {
    code: 361403,
    province: "ชัยภูมิ",
    district: "อำเภอภักดีชุมพล",
    subDistrict: "วังทอง"
  },
  {
    code: 361404,
    province: "ชัยภูมิ",
    district: "อำเภอภักดีชุมพล",
    subDistrict: "แหลมทอง"
  },
  {
    code: 361501,
    province: "ชัยภูมิ",
    district: "อำเภอเนินสง่า",
    subDistrict: "หนองฉิม"
  },
  {
    code: 361502,
    province: "ชัยภูมิ",
    district: "อำเภอเนินสง่า",
    subDistrict: "ตาเนิน"
  },
  {
    code: 361503,
    province: "ชัยภูมิ",
    district: "อำเภอเนินสง่า",
    subDistrict: "กะฮาด"
  },
  {
    code: 361504,
    province: "ชัยภูมิ",
    district: "อำเภอเนินสง่า",
    subDistrict: "รังงาม"
  },
  {
    code: 361601,
    province: "ชัยภูมิ",
    district: "อำเภอซับใหญ่",
    subDistrict: "ซับใหญ่"
  },
  {
    code: 361602,
    province: "ชัยภูมิ",
    district: "อำเภอซับใหญ่",
    subDistrict: "ท่ากูบ"
  },
  {
    code: 361603,
    province: "ชัยภูมิ",
    district: "อำเภอซับใหญ่",
    subDistrict: "ตะโกทอง"
  },
  {
    code: 370101,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "บุ่ง"
  },
  {
    code: 370102,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "ไก่คำ"
  },
  {
    code: 370103,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "นาจิก"
  },
  {
    code: 370104,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "ปลาค้าว"
  },
  {
    code: 370105,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "เหล่าพรวน"
  },
  {
    code: 370106,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "สร้างนกทา"
  },
  {
    code: 370107,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "คึมใหญ่"
  },
  {
    code: 370108,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "นาผือ"
  },
  {
    code: 370109,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "น้ำปลีก"
  },
  {
    code: 370110,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "นาวัง"
  },
  {
    code: 370111,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "นาหมอม้า"
  },
  {
    code: 370112,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "โนนโพธิ์"
  },
  {
    code: 370113,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "โนนหนามแท่ง"
  },
  {
    code: 370114,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "ห้วยไร่"
  },
  {
    code: 370115,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "หนองมะแซว"
  },
  {
    code: 370116,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "กุดปลาดุก"
  },
  {
    code: 370117,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "ดอนเมย"
  },
  {
    code: 370118,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "นายม"
  },
  {
    code: 370119,
    province: "อำนาจเจริญ",
    district: "อำเภอเมืองอำนาจเจริญ",
    subDistrict: "นาแต้"
  },
  {
    code: 370201,
    province: "อำนาจเจริญ",
    district: "อำเภอชานุมาน",
    subDistrict: "ชานุมาน"
  },
  {
    code: 370202,
    province: "อำนาจเจริญ",
    district: "อำเภอชานุมาน",
    subDistrict: "โคกสาร"
  },
  {
    code: 370203,
    province: "อำนาจเจริญ",
    district: "อำเภอชานุมาน",
    subDistrict: "คำเขื่อนแก้ว"
  },
  {
    code: 370204,
    province: "อำนาจเจริญ",
    district: "อำเภอชานุมาน",
    subDistrict: "โคกก่ง"
  },
  {
    code: 370205,
    province: "อำนาจเจริญ",
    district: "อำเภอชานุมาน",
    subDistrict: "ป่าก่อ"
  },
  {
    code: 370301,
    province: "อำนาจเจริญ",
    district: "อำเภอปทุมราชวงศา",
    subDistrict: "หนองข่า"
  },
  {
    code: 370302,
    province: "อำนาจเจริญ",
    district: "อำเภอปทุมราชวงศา",
    subDistrict: "คำโพน"
  },
  {
    code: 370303,
    province: "อำนาจเจริญ",
    district: "อำเภอปทุมราชวงศา",
    subDistrict: "นาหว้า"
  },
  {
    code: 370304,
    province: "อำนาจเจริญ",
    district: "อำเภอปทุมราชวงศา",
    subDistrict: "ลือ"
  },
  {
    code: 370305,
    province: "อำนาจเจริญ",
    district: "อำเภอปทุมราชวงศา",
    subDistrict: "ห้วย"
  },
  {
    code: 370306,
    province: "อำนาจเจริญ",
    district: "อำเภอปทุมราชวงศา",
    subDistrict: "โนนงาม"
  },
  {
    code: 370307,
    province: "อำนาจเจริญ",
    district: "อำเภอปทุมราชวงศา",
    subDistrict: "นาป่าแซง"
  },
  {
    code: 370401,
    province: "อำนาจเจริญ",
    district: "อำเภอพนา",
    subDistrict: "พนา"
  },
  {
    code: 370402,
    province: "อำนาจเจริญ",
    district: "อำเภอพนา",
    subDistrict: "จานลาน"
  },
  {
    code: 370403,
    province: "อำนาจเจริญ",
    district: "อำเภอพนา",
    subDistrict: "ไม้กลอน"
  },
  {
    code: 370404,
    province: "อำนาจเจริญ",
    district: "อำเภอพนา",
    subDistrict: "พระเหลา"
  },
  {
    code: 370501,
    province: "อำนาจเจริญ",
    district: "อำเภอเสนางคนิคม",
    subDistrict: "เสนางคนิคม"
  },
  {
    code: 370502,
    province: "อำนาจเจริญ",
    district: "อำเภอเสนางคนิคม",
    subDistrict: "โพนทอง"
  },
  {
    code: 370503,
    province: "อำนาจเจริญ",
    district: "อำเภอเสนางคนิคม",
    subDistrict: "ไร่สีสุก"
  },
  {
    code: 370504,
    province: "อำนาจเจริญ",
    district: "อำเภอเสนางคนิคม",
    subDistrict: "นาเวียง"
  },
  {
    code: 370505,
    province: "อำนาจเจริญ",
    district: "อำเภอเสนางคนิคม",
    subDistrict: "หนองไฮ"
  },
  {
    code: 370506,
    province: "อำนาจเจริญ",
    district: "อำเภอเสนางคนิคม",
    subDistrict: "หนองสามสี"
  },
  {
    code: 370601,
    province: "อำนาจเจริญ",
    district: "อำเภอหัวตะพาน",
    subDistrict: "หัวตะพาน"
  },
  {
    code: 370602,
    province: "อำนาจเจริญ",
    district: "อำเภอหัวตะพาน",
    subDistrict: "คำพระ"
  },
  {
    code: 370603,
    province: "อำนาจเจริญ",
    district: "อำเภอหัวตะพาน",
    subDistrict: "เค็งใหญ่"
  },
  {
    code: 370604,
    province: "อำนาจเจริญ",
    district: "อำเภอหัวตะพาน",
    subDistrict: "หนองแก้ว"
  },
  {
    code: 370605,
    province: "อำนาจเจริญ",
    district: "อำเภอหัวตะพาน",
    subDistrict: "โพนเมืองน้อย"
  },
  {
    code: 370606,
    province: "อำนาจเจริญ",
    district: "อำเภอหัวตะพาน",
    subDistrict: "สร้างถ่อน้อย"
  },
  {
    code: 370607,
    province: "อำนาจเจริญ",
    district: "อำเภอหัวตะพาน",
    subDistrict: "จิกดู่"
  },
  {
    code: 370608,
    province: "อำนาจเจริญ",
    district: "อำเภอหัวตะพาน",
    subDistrict: "รัตนวารี"
  },
  {
    code: 370701,
    province: "อำนาจเจริญ",
    district: "อำเภอลืออำนาจ",
    subDistrict: "อำนาจ"
  },
  {
    code: 370702,
    province: "อำนาจเจริญ",
    district: "อำเภอลืออำนาจ",
    subDistrict: "ดงมะยาง"
  },
  {
    code: 370703,
    province: "อำนาจเจริญ",
    district: "อำเภอลืออำนาจ",
    subDistrict: "เปือย"
  },
  {
    code: 370704,
    province: "อำนาจเจริญ",
    district: "อำเภอลืออำนาจ",
    subDistrict: "ดงบัง"
  },
  {
    code: 370705,
    province: "อำนาจเจริญ",
    district: "อำเภอลืออำนาจ",
    subDistrict: "ไร่ขี"
  },
  {
    code: 370706,
    province: "อำนาจเจริญ",
    district: "อำเภอลืออำนาจ",
    subDistrict: "แมด"
  },
  {
    code: 370707,
    province: "อำนาจเจริญ",
    district: "อำเภอลืออำนาจ",
    subDistrict: "โคกกลาง"
  },
  {
    code: 380101,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "บึงกาฬ"
  },
  {
    code: 380102,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "โนนสมบูรณ์"
  },
  {
    code: 380103,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "โนนสว่าง"
  },
  {
    code: 380104,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "หอคำ"
  },
  {
    code: 380105,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "หนองเลิง"
  },
  {
    code: 380106,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "โคกก่อง"
  },
  {
    code: 380107,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "นาสวรรค์"
  },
  {
    code: 380108,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "ไคสี"
  },
  {
    code: 380109,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "ชัยพร"
  },
  {
    code: 380110,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "วิศิษฐ์"
  },
  {
    code: 380111,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "คำนาดี"
  },
  {
    code: 380112,
    province: "บึงกาฬ",
    district: "อำเภอเมืองบึงกาฬ",
    subDistrict: "โป่งเปือย"
  },
  {
    code: 380201,
    province: "บึงกาฬ",
    district: "อำเภอพรเจริญ",
    subDistrict: "ศรีชมภู"
  },
  {
    code: 380202,
    province: "บึงกาฬ",
    district: "อำเภอพรเจริญ",
    subDistrict: "ดอนหญ้านาง"
  },
  {
    code: 380203,
    province: "บึงกาฬ",
    district: "อำเภอพรเจริญ",
    subDistrict: "พรเจริญ"
  },
  {
    code: 380204,
    province: "บึงกาฬ",
    district: "อำเภอพรเจริญ",
    subDistrict: "หนองหัวช้าง"
  },
  {
    code: 380205,
    province: "บึงกาฬ",
    district: "อำเภอพรเจริญ",
    subDistrict: "วังชมภู"
  },
  {
    code: 380206,
    province: "บึงกาฬ",
    district: "อำเภอพรเจริญ",
    subDistrict: "ป่าแฝก"
  },
  {
    code: 380207,
    province: "บึงกาฬ",
    district: "อำเภอพรเจริญ",
    subDistrict: "ศรีสำราญ"
  },
  {
    code: 380301,
    province: "บึงกาฬ",
    district: "อำเภอโซ่พิสัย",
    subDistrict: "โซ่"
  },
  {
    code: 380302,
    province: "บึงกาฬ",
    district: "อำเภอโซ่พิสัย",
    subDistrict: "หนองพันทา"
  },
  {
    code: 380303,
    province: "บึงกาฬ",
    district: "อำเภอโซ่พิสัย",
    subDistrict: "ศรีชมภู"
  },
  {
    code: 380304,
    province: "บึงกาฬ",
    district: "อำเภอโซ่พิสัย",
    subDistrict: "คำแก้ว"
  },
  {
    code: 380305,
    province: "บึงกาฬ",
    district: "อำเภอโซ่พิสัย",
    subDistrict: "บัวตูม"
  },
  {
    code: 380306,
    province: "บึงกาฬ",
    district: "อำเภอโซ่พิสัย",
    subDistrict: "ถ้ำเจริญ"
  },
  {
    code: 380307,
    province: "บึงกาฬ",
    district: "อำเภอโซ่พิสัย",
    subDistrict: "เหล่าทอง"
  },
  {
    code: 380401,
    province: "บึงกาฬ",
    district: "อำเภอเซกา",
    subDistrict: "เซกา"
  },
  {
    code: 380402,
    province: "บึงกาฬ",
    district: "อำเภอเซกา",
    subDistrict: "ซาง"
  },
  {
    code: 380403,
    province: "บึงกาฬ",
    district: "อำเภอเซกา",
    subDistrict: "ท่ากกแดง"
  },
  {
    code: 380404,
    province: "บึงกาฬ",
    district: "อำเภอเซกา",
    subDistrict: "บ้านต้อง"
  },
  {
    code: 380405,
    province: "บึงกาฬ",
    district: "อำเภอเซกา",
    subDistrict: "ป่งไฮ"
  },
  {
    code: 380406,
    province: "บึงกาฬ",
    district: "อำเภอเซกา",
    subDistrict: "น้ำจั้น"
  },
  {
    code: 380407,
    province: "บึงกาฬ",
    district: "อำเภอเซกา",
    subDistrict: "ท่าสะอาด"
  },
  {
    code: 380408,
    province: "บึงกาฬ",
    district: "อำเภอเซกา",
    subDistrict: "หนองทุ่ม"
  },
  {
    code: 380409,
    province: "บึงกาฬ",
    district: "อำเภอเซกา",
    subDistrict: "โสกก่าม"
  },
  {
    code: 380501,
    province: "บึงกาฬ",
    district: "อำเภอปากคาด",
    subDistrict: "ปากคาด"
  },
  {
    code: 380502,
    province: "บึงกาฬ",
    district: "อำเภอปากคาด",
    subDistrict: "หนองยอง"
  },
  {
    code: 380503,
    province: "บึงกาฬ",
    district: "อำเภอปากคาด",
    subDistrict: "นากั้ง"
  },
  {
    code: 380504,
    province: "บึงกาฬ",
    district: "อำเภอปากคาด",
    subDistrict: "โนนศิลา"
  },
  {
    code: 380505,
    province: "บึงกาฬ",
    district: "อำเภอปากคาด",
    subDistrict: "สมสนุก"
  },
  {
    code: 380506,
    province: "บึงกาฬ",
    district: "อำเภอปากคาด",
    subDistrict: "นาดง"
  },
  {
    code: 380601,
    province: "บึงกาฬ",
    district: "อำเภอบึงโขงหลง",
    subDistrict: "บึงโขงหลง"
  },
  {
    code: 380602,
    province: "บึงกาฬ",
    district: "อำเภอบึงโขงหลง",
    subDistrict: "โพธิ์หมากแข้ง"
  },
  {
    code: 380603,
    province: "บึงกาฬ",
    district: "อำเภอบึงโขงหลง",
    subDistrict: "ดงบัง"
  },
  {
    code: 380604,
    province: "บึงกาฬ",
    district: "อำเภอบึงโขงหลง",
    subDistrict: "ท่าดอกคำ"
  },
  {
    code: 380701,
    province: "บึงกาฬ",
    district: "อำเภอศรีวิไล",
    subDistrict: "ศรีวิไล"
  },
  {
    code: 380702,
    province: "บึงกาฬ",
    district: "อำเภอศรีวิไล",
    subDistrict: "ชุมภูพร"
  },
  {
    code: 380703,
    province: "บึงกาฬ",
    district: "อำเภอศรีวิไล",
    subDistrict: "นาแสง"
  },
  {
    code: 380704,
    province: "บึงกาฬ",
    district: "อำเภอศรีวิไล",
    subDistrict: "นาสะแบง"
  },
  {
    code: 380705,
    province: "บึงกาฬ",
    district: "อำเภอศรีวิไล",
    subDistrict: "นาสิงห์"
  },
  {
    code: 380801,
    province: "บึงกาฬ",
    district: "อำเภอบุ่งคล้า",
    subDistrict: "บุ่งคล้า"
  },
  {
    code: 380802,
    province: "บึงกาฬ",
    district: "อำเภอบุ่งคล้า",
    subDistrict: "หนองเดิ่น"
  },
  {
    code: 380803,
    province: "บึงกาฬ",
    district: "อำเภอบุ่งคล้า",
    subDistrict: "โคกกว้าง"
  },
  {
    code: 390101,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "หนองบัว"
  },
  {
    code: 390102,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "หนองภัยศูนย์"
  },
  {
    code: 390103,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "โพธิ์ชัย"
  },
  {
    code: 390104,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "หนองสวรรค์"
  },
  {
    code: 390105,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "หัวนา"
  },
  {
    code: 390106,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "บ้านขาม"
  },
  {
    code: 390107,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "นามะเฟือง"
  },
  {
    code: 390108,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "บ้านพร้าว"
  },
  {
    code: 390109,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "โนนขมิ้น"
  },
  {
    code: 390110,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "ลำภู"
  },
  {
    code: 390111,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "กุดจิก"
  },
  {
    code: 390112,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "โนนทัน"
  },
  {
    code: 390113,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "นาคำไฮ"
  },
  {
    code: 390114,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "ป่าไม้งาม"
  },
  {
    code: 390115,
    province: "หนองบัวลำภู",
    district: "อำเภอเมืองหนองบัวลำภู",
    subDistrict: "หนองหว้า"
  },
  {
    code: 390201,
    province: "หนองบัวลำภู",
    district: "อำเภอนากลาง",
    subDistrict: "นากลาง"
  },
  {
    code: 390202,
    province: "หนองบัวลำภู",
    district: "อำเภอนากลาง",
    subDistrict: "ด่านช้าง"
  },
  {
    code: 390205,
    province: "หนองบัวลำภู",
    district: "อำเภอนากลาง",
    subDistrict: "กุดดินจี่"
  },
  {
    code: 390206,
    province: "หนองบัวลำภู",
    district: "อำเภอนากลาง",
    subDistrict: "ฝั่งแดง"
  },
  {
    code: 390207,
    province: "หนองบัวลำภู",
    district: "อำเภอนากลาง",
    subDistrict: "เก่ากลอย"
  },
  {
    code: 390209,
    province: "หนองบัวลำภู",
    district: "อำเภอนากลาง",
    subDistrict: "โนนเมือง"
  },
  {
    code: 390210,
    province: "หนองบัวลำภู",
    district: "อำเภอนากลาง",
    subDistrict: "อุทัยสวรรค์"
  },
  {
    code: 390211,
    province: "หนองบัวลำภู",
    district: "อำเภอนากลาง",
    subDistrict: "ดงสวรรค์"
  },
  {
    code: 390213,
    province: "หนองบัวลำภู",
    district: "อำเภอนากลาง",
    subDistrict: "กุดแห่"
  },
  {
    code: 390301,
    province: "หนองบัวลำภู",
    district: "อำเภอโนนสัง",
    subDistrict: "โนนสัง"
  },
  {
    code: 390302,
    province: "หนองบัวลำภู",
    district: "อำเภอโนนสัง",
    subDistrict: "บ้านถิ่น"
  },
  {
    code: 390303,
    province: "หนองบัวลำภู",
    district: "อำเภอโนนสัง",
    subDistrict: "หนองเรือ"
  },
  {
    code: 390304,
    province: "หนองบัวลำภู",
    district: "อำเภอโนนสัง",
    subDistrict: "กุดดู่"
  },
  {
    code: 390305,
    province: "หนองบัวลำภู",
    district: "อำเภอโนนสัง",
    subDistrict: "บ้านค้อ"
  },
  {
    code: 390306,
    province: "หนองบัวลำภู",
    district: "อำเภอโนนสัง",
    subDistrict: "โนนเมือง"
  },
  {
    code: 390307,
    province: "หนองบัวลำภู",
    district: "อำเภอโนนสัง",
    subDistrict: "โคกใหญ่"
  },
  {
    code: 390308,
    province: "หนองบัวลำภู",
    district: "อำเภอโนนสัง",
    subDistrict: "โคกม่วง"
  },
  {
    code: 390309,
    province: "หนองบัวลำภู",
    district: "อำเภอโนนสัง",
    subDistrict: "นิคมพัฒนา"
  },
  {
    code: 390310,
    province: "หนองบัวลำภู",
    district: "อำเภอโนนสัง",
    subDistrict: "ปางกู่"
  },
  {
    code: 390401,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "เมืองใหม่"
  },
  {
    code: 390402,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "ศรีบุญเรือง"
  },
  {
    code: 390403,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "หนองบัวใต้"
  },
  {
    code: 390404,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "กุดสะเทียน"
  },
  {
    code: 390405,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "นากอก"
  },
  {
    code: 390406,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "โนนสะอาด"
  },
  {
    code: 390407,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "ยางหล่อ"
  },
  {
    code: 390408,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "โนนม่วง"
  },
  {
    code: 390409,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "หนองกุงแก้ว"
  },
  {
    code: 390410,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "หนองแก"
  },
  {
    code: 390411,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "ทรายทอง"
  },
  {
    code: 390412,
    province: "หนองบัวลำภู",
    district: "อำเภอศรีบุญเรือง",
    subDistrict: "หันนางาม"
  },
  {
    code: 390501,
    province: "หนองบัวลำภู",
    district: "อำเภอสุวรรณคูหา",
    subDistrict: "นาสี"
  },
  {
    code: 390502,
    province: "หนองบัวลำภู",
    district: "อำเภอสุวรรณคูหา",
    subDistrict: "บ้านโคก"
  },
  {
    code: 390503,
    province: "หนองบัวลำภู",
    district: "อำเภอสุวรรณคูหา",
    subDistrict: "นาดี"
  },
  {
    code: 390504,
    province: "หนองบัวลำภู",
    district: "อำเภอสุวรรณคูหา",
    subDistrict: "นาด่าน"
  },
  {
    code: 390505,
    province: "หนองบัวลำภู",
    district: "อำเภอสุวรรณคูหา",
    subDistrict: "ดงมะไฟ"
  },
  {
    code: 390506,
    province: "หนองบัวลำภู",
    district: "อำเภอสุวรรณคูหา",
    subDistrict: "สุวรรณคูหา"
  },
  {
    code: 390507,
    province: "หนองบัวลำภู",
    district: "อำเภอสุวรรณคูหา",
    subDistrict: "บุญทัน"
  },
  {
    code: 390508,
    province: "หนองบัวลำภู",
    district: "อำเภอสุวรรณคูหา",
    subDistrict: "กุดผึ้ง"
  },
  {
    code: 390601,
    province: "หนองบัวลำภู",
    district: "อำเภอนาวัง",
    subDistrict: "นาเหล่า"
  },
  {
    code: 390602,
    province: "หนองบัวลำภู",
    district: "อำเภอนาวัง",
    subDistrict: "นาแก"
  },
  {
    code: 390603,
    province: "หนองบัวลำภู",
    district: "อำเภอนาวัง",
    subDistrict: "วังทอง"
  },
  {
    code: 390604,
    province: "หนองบัวลำภู",
    district: "อำเภอนาวัง",
    subDistrict: "วังปลาป้อม"
  },
  {
    code: 390605,
    province: "หนองบัวลำภู",
    district: "อำเภอนาวัง",
    subDistrict: "เทพคีรี"
  },
  {
    code: 400101,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "ในเมือง"
  },
  {
    code: 400102,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "สำราญ"
  },
  {
    code: 400103,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "โคกสี"
  },
  {
    code: 400104,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "ท่าพระ"
  },
  {
    code: 400105,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "บ้านทุ่ม"
  },
  {
    code: 400106,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "เมืองเก่า"
  },
  {
    code: 400107,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "พระลับ"
  },
  {
    code: 400108,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "สาวะถี"
  },
  {
    code: 400109,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "บ้านหว้า"
  },
  {
    code: 400110,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "บ้านค้อ"
  },
  {
    code: 400111,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "แดงใหญ่"
  },
  {
    code: 400112,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "ดอนช้าง"
  },
  {
    code: 400113,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "ดอนหัน"
  },
  {
    code: 400114,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "ศิลา"
  },
  {
    code: 400115,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "บ้านเป็ด"
  },
  {
    code: 400116,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "หนองตูม"
  },
  {
    code: 400117,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "บึงเนียม"
  },
  {
    code: 400118,
    province: "ขอนแก่น",
    district: "อำเภอเมืองขอนแก่น",
    subDistrict: "โนนท่อน"
  },
  {
    code: 400201,
    province: "ขอนแก่น",
    district: "อำเภอบ้านฝาง",
    subDistrict: "หนองบัว"
  },
  {
    code: 400202,
    province: "ขอนแก่น",
    district: "อำเภอบ้านฝาง",
    subDistrict: "ป่าหวายนั่ง"
  },
  {
    code: 400203,
    province: "ขอนแก่น",
    district: "อำเภอบ้านฝาง",
    subDistrict: "โนนฆ้อง"
  },
  {
    code: 400204,
    province: "ขอนแก่น",
    district: "อำเภอบ้านฝาง",
    subDistrict: "บ้านเหล่า"
  },
  {
    code: 400205,
    province: "ขอนแก่น",
    district: "อำเภอบ้านฝาง",
    subDistrict: "ป่ามะนาว"
  },
  {
    code: 400206,
    province: "ขอนแก่น",
    district: "อำเภอบ้านฝาง",
    subDistrict: "บ้านฝาง"
  },
  {
    code: 400207,
    province: "ขอนแก่น",
    district: "อำเภอบ้านฝาง",
    subDistrict: "โคกงาม"
  },
  {
    code: 400301,
    province: "ขอนแก่น",
    district: "อำเภอพระยืน",
    subDistrict: "พระยืน"
  },
  {
    code: 400302,
    province: "ขอนแก่น",
    district: "อำเภอพระยืน",
    subDistrict: "พระบุ"
  },
  {
    code: 400303,
    province: "ขอนแก่น",
    district: "อำเภอพระยืน",
    subDistrict: "บ้านโต้น"
  },
  {
    code: 400304,
    province: "ขอนแก่น",
    district: "อำเภอพระยืน",
    subDistrict: "หนองแวง"
  },
  {
    code: 400305,
    province: "ขอนแก่น",
    district: "อำเภอพระยืน",
    subDistrict: "ขามป้อม"
  },
  {
    code: 400401,
    province: "ขอนแก่น",
    district: "อำเภอหนองเรือ",
    subDistrict: "หนองเรือ"
  },
  {
    code: 400402,
    province: "ขอนแก่น",
    district: "อำเภอหนองเรือ",
    subDistrict: "บ้านเม็ง"
  },
  {
    code: 400403,
    province: "ขอนแก่น",
    district: "อำเภอหนองเรือ",
    subDistrict: "บ้านกง"
  },
  {
    code: 400404,
    province: "ขอนแก่น",
    district: "อำเภอหนองเรือ",
    subDistrict: "ยางคำ"
  },
  {
    code: 400405,
    province: "ขอนแก่น",
    district: "อำเภอหนองเรือ",
    subDistrict: "จระเข้"
  },
  {
    code: 400406,
    province: "ขอนแก่น",
    district: "อำเภอหนองเรือ",
    subDistrict: "โนนทอง"
  },
  {
    code: 400407,
    province: "ขอนแก่น",
    district: "อำเภอหนองเรือ",
    subDistrict: "กุดกว้าง"
  },
  {
    code: 400408,
    province: "ขอนแก่น",
    district: "อำเภอหนองเรือ",
    subDistrict: "โนนทัน"
  },
  {
    code: 400409,
    province: "ขอนแก่น",
    district: "อำเภอหนองเรือ",
    subDistrict: "โนนสะอาด"
  },
  {
    code: 400410,
    province: "ขอนแก่น",
    district: "อำเภอหนองเรือ",
    subDistrict: "บ้านผือ"
  },
  {
    code: 400501,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "ชุมแพ"
  },
  {
    code: 400502,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "โนนหัน"
  },
  {
    code: 400503,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "นาหนองทุ่ม"
  },
  {
    code: 400504,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "โนนอุดม"
  },
  {
    code: 400505,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "ขัวเรียง"
  },
  {
    code: 400506,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "หนองไผ่"
  },
  {
    code: 400507,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "ไชยสอ"
  },
  {
    code: 400508,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "วังหินลาด"
  },
  {
    code: 400509,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "นาเพียง"
  },
  {
    code: 400510,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "หนองเขียด"
  },
  {
    code: 400511,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "หนองเสาเล้า"
  },
  {
    code: 400512,
    province: "ขอนแก่น",
    district: "อำเภอชุมแพ",
    subDistrict: "โนนสะอาด"
  },
  {
    code: 400601,
    province: "ขอนแก่น",
    district: "อำเภอสีชมพู",
    subDistrict: "สีชมพู"
  },
  {
    code: 400602,
    province: "ขอนแก่น",
    district: "อำเภอสีชมพู",
    subDistrict: "ศรีสุข"
  },
  {
    code: 400603,
    province: "ขอนแก่น",
    district: "อำเภอสีชมพู",
    subDistrict: "นาจาน"
  },
  {
    code: 400604,
    province: "ขอนแก่น",
    district: "อำเภอสีชมพู",
    subDistrict: "วังเพิ่ม"
  },
  {
    code: 400605,
    province: "ขอนแก่น",
    district: "อำเภอสีชมพู",
    subDistrict: "ซำยาง"
  },
  {
    code: 400606,
    province: "ขอนแก่น",
    district: "อำเภอสีชมพู",
    subDistrict: "หนองแดง"
  },
  {
    code: 400607,
    province: "ขอนแก่น",
    district: "อำเภอสีชมพู",
    subDistrict: "ดงลาน"
  },
  {
    code: 400608,
    province: "ขอนแก่น",
    district: "อำเภอสีชมพู",
    subDistrict: "บริบูรณ์"
  },
  {
    code: 400609,
    province: "ขอนแก่น",
    district: "อำเภอสีชมพู",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 400610,
    province: "ขอนแก่น",
    district: "อำเภอสีชมพู",
    subDistrict: "ภูห่าน"
  },
  {
    code: 400701,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "น้ำพอง"
  },
  {
    code: 400702,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "วังชัย"
  },
  {
    code: 400703,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "หนองกุง"
  },
  {
    code: 400704,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "บัวใหญ่"
  },
  {
    code: 400705,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "สะอาด"
  },
  {
    code: 400706,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "ม่วงหวาน"
  },
  {
    code: 400707,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "บ้านขาม"
  },
  {
    code: 400708,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "บัวเงิน"
  },
  {
    code: 400709,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "ทรายมูล"
  },
  {
    code: 400710,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "ท่ากระเสริม"
  },
  {
    code: 400711,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "พังทุย"
  },
  {
    code: 400712,
    province: "ขอนแก่น",
    district: "อำเภอน้ำพอง",
    subDistrict: "กุดน้ำใส"
  },
  {
    code: 400801,
    province: "ขอนแก่น",
    district: "อำเภออุบลรัตน์",
    subDistrict: "โคกสูง"
  },
  {
    code: 400802,
    province: "ขอนแก่น",
    district: "อำเภออุบลรัตน์",
    subDistrict: "บ้านดง"
  },
  {
    code: 400803,
    province: "ขอนแก่น",
    district: "อำเภออุบลรัตน์",
    subDistrict: "เขื่อนอุบลรัตน์"
  },
  {
    code: 400804,
    province: "ขอนแก่น",
    district: "อำเภออุบลรัตน์",
    subDistrict: "นาคำ"
  },
  {
    code: 400805,
    province: "ขอนแก่น",
    district: "อำเภออุบลรัตน์",
    subDistrict: "ศรีสุขสำราญ"
  },
  {
    code: 400806,
    province: "ขอนแก่น",
    district: "อำเภออุบลรัตน์",
    subDistrict: "ทุ่งโป่ง"
  },
  {
    code: 400901,
    province: "ขอนแก่น",
    district: "อำเภอกระนวน",
    subDistrict: "หนองโก"
  },
  {
    code: 400902,
    province: "ขอนแก่น",
    district: "อำเภอกระนวน",
    subDistrict: "หนองกุงใหญ่"
  },
  {
    code: 400905,
    province: "ขอนแก่น",
    district: "อำเภอกระนวน",
    subDistrict: "ห้วยโจด"
  },
  {
    code: 400906,
    province: "ขอนแก่น",
    district: "อำเภอกระนวน",
    subDistrict: "ห้วยยาง"
  },
  {
    code: 400907,
    province: "ขอนแก่น",
    district: "อำเภอกระนวน",
    subDistrict: "บ้านฝาง"
  },
  {
    code: 400909,
    province: "ขอนแก่น",
    district: "อำเภอกระนวน",
    subDistrict: "ดูนสาด"
  },
  {
    code: 400910,
    province: "ขอนแก่น",
    district: "อำเภอกระนวน",
    subDistrict: "หนองโน"
  },
  {
    code: 400911,
    province: "ขอนแก่น",
    district: "อำเภอกระนวน",
    subDistrict: "น้ำอ้อม"
  },
  {
    code: 400912,
    province: "ขอนแก่น",
    district: "อำเภอกระนวน",
    subDistrict: "หัวนาคำ"
  },
  {
    code: 401001,
    province: "ขอนแก่น",
    district: "อำเภอบ้านไผ่",
    subDistrict: "บ้านไผ่"
  },
  {
    code: 401002,
    province: "ขอนแก่น",
    district: "อำเภอบ้านไผ่",
    subDistrict: "ในเมือง"
  },
  {
    code: 401005,
    province: "ขอนแก่น",
    district: "อำเภอบ้านไผ่",
    subDistrict: "เมืองเพีย"
  },
  {
    code: 401009,
    province: "ขอนแก่น",
    district: "อำเภอบ้านไผ่",
    subDistrict: "บ้านลาน"
  },
  {
    code: 401010,
    province: "ขอนแก่น",
    district: "อำเภอบ้านไผ่",
    subDistrict: "แคนเหนือ"
  },
  {
    code: 401011,
    province: "ขอนแก่น",
    district: "อำเภอบ้านไผ่",
    subDistrict: "ภูเหล็ก"
  },
  {
    code: 401013,
    province: "ขอนแก่น",
    district: "อำเภอบ้านไผ่",
    subDistrict: "ป่าปอ"
  },
  {
    code: 401014,
    province: "ขอนแก่น",
    district: "อำเภอบ้านไผ่",
    subDistrict: "หินตั้ง"
  },
  {
    code: 401016,
    province: "ขอนแก่น",
    district: "อำเภอบ้านไผ่",
    subDistrict: "หนองน้ำใส"
  },
  {
    code: 401017,
    province: "ขอนแก่น",
    district: "อำเภอบ้านไผ่",
    subDistrict: "หัวหนอง"
  },
  {
    code: 401101,
    province: "ขอนแก่น",
    district: "อำเภอเปือยน้อย",
    subDistrict: "เปือยน้อย"
  },
  {
    code: 401102,
    province: "ขอนแก่น",
    district: "อำเภอเปือยน้อย",
    subDistrict: "วังม่วง"
  },
  {
    code: 401103,
    province: "ขอนแก่น",
    district: "อำเภอเปือยน้อย",
    subDistrict: "ขามป้อม"
  },
  {
    code: 401104,
    province: "ขอนแก่น",
    district: "อำเภอเปือยน้อย",
    subDistrict: "สระแก้ว"
  },
  {
    code: 401201,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "เมืองพล"
  },
  {
    code: 401203,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "โจดหนองแก"
  },
  {
    code: 401204,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "เก่างิ้ว"
  },
  {
    code: 401205,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "หนองมะเขือ"
  },
  {
    code: 401206,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "หนองแวงโสกพระ"
  },
  {
    code: 401207,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "เพ็กใหญ่"
  },
  {
    code: 401208,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "โคกสง่า"
  },
  {
    code: 401209,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "หนองแวงนางเบ้า"
  },
  {
    code: 401210,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "ลอมคอม"
  },
  {
    code: 401211,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "โนนข่า"
  },
  {
    code: 401212,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "โสกนกเต็น"
  },
  {
    code: 401213,
    province: "ขอนแก่น",
    district: "อำเภอพล",
    subDistrict: "หัวทุ่ง"
  },
  {
    code: 401301,
    province: "ขอนแก่น",
    district: "อำเภอแวงใหญ่",
    subDistrict: "คอนฉิม"
  },
  {
    code: 401302,
    province: "ขอนแก่น",
    district: "อำเภอแวงใหญ่",
    subDistrict: "ใหม่นาเพียง"
  },
  {
    code: 401303,
    province: "ขอนแก่น",
    district: "อำเภอแวงใหญ่",
    subDistrict: "โนนทอง"
  },
  {
    code: 401304,
    province: "ขอนแก่น",
    district: "อำเภอแวงใหญ่",
    subDistrict: "แวงใหญ่"
  },
  {
    code: 401305,
    province: "ขอนแก่น",
    district: "อำเภอแวงใหญ่",
    subDistrict: "โนนสะอาด"
  },
  {
    code: 401401,
    province: "ขอนแก่น",
    district: "อำเภอแวงน้อย",
    subDistrict: "แวงน้อย"
  },
  {
    code: 401402,
    province: "ขอนแก่น",
    district: "อำเภอแวงน้อย",
    subDistrict: "ก้านเหลือง"
  },
  {
    code: 401403,
    province: "ขอนแก่น",
    district: "อำเภอแวงน้อย",
    subDistrict: "ท่านางแนว"
  },
  {
    code: 401404,
    province: "ขอนแก่น",
    district: "อำเภอแวงน้อย",
    subDistrict: "ละหานนา"
  },
  {
    code: 401405,
    province: "ขอนแก่น",
    district: "อำเภอแวงน้อย",
    subDistrict: "ท่าวัด"
  },
  {
    code: 401406,
    province: "ขอนแก่น",
    district: "อำเภอแวงน้อย",
    subDistrict: "ทางขวาง"
  },
  {
    code: 401501,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "หนองสองห้อง"
  },
  {
    code: 401502,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "คึมชาด"
  },
  {
    code: 401503,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "โนนธาตุ"
  },
  {
    code: 401504,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "ตะกั่วป่า"
  },
  {
    code: 401505,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "สำโรง"
  },
  {
    code: 401506,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "หนองเม็ก"
  },
  {
    code: 401507,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "ดอนดู่"
  },
  {
    code: 401508,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "ดงเค็ง"
  },
  {
    code: 401509,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "หันโจด"
  },
  {
    code: 401510,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "ดอนดั่ง"
  },
  {
    code: 401511,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "วังหิน"
  },
  {
    code: 401512,
    province: "ขอนแก่น",
    district: "อำเภอหนองสองห้อง",
    subDistrict: "หนองไผ่ล้อม"
  },
  {
    code: 401601,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "บ้านเรือ"
  },
  {
    code: 401604,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "หว้าทอง"
  },
  {
    code: 401605,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "กุดขอนแก่น"
  },
  {
    code: 401606,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "นาชุมแสง"
  },
  {
    code: 401607,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "นาหว้า"
  },
  {
    code: 401610,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "หนองกุงธนสาร"
  },
  {
    code: 401612,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "หนองกุงเซิน"
  },
  {
    code: 401613,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "สงเปือย"
  },
  {
    code: 401614,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "ทุ่งชมพู"
  },
  {
    code: 401616,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "ดินดำ"
  },
  {
    code: 401617,
    province: "ขอนแก่น",
    district: "อำเภอภูเวียง",
    subDistrict: "ภูเวียง"
  },
  {
    code: 401701,
    province: "ขอนแก่น",
    district: "อำเภอมัญจาคีรี",
    subDistrict: "กุดเค้า"
  },
  {
    code: 401702,
    province: "ขอนแก่น",
    district: "อำเภอมัญจาคีรี",
    subDistrict: "สวนหม่อน"
  },
  {
    code: 401703,
    province: "ขอนแก่น",
    district: "อำเภอมัญจาคีรี",
    subDistrict: "หนองแปน"
  },
  {
    code: 401704,
    province: "ขอนแก่น",
    district: "อำเภอมัญจาคีรี",
    subDistrict: "โพนเพ็ก"
  },
  {
    code: 401705,
    province: "ขอนแก่น",
    district: "อำเภอมัญจาคีรี",
    subDistrict: "คำแคน"
  },
  {
    code: 401706,
    province: "ขอนแก่น",
    district: "อำเภอมัญจาคีรี",
    subDistrict: "นาข่า"
  },
  {
    code: 401707,
    province: "ขอนแก่น",
    district: "อำเภอมัญจาคีรี",
    subDistrict: "นางาม"
  },
  {
    code: 401710,
    province: "ขอนแก่น",
    district: "อำเภอมัญจาคีรี",
    subDistrict: "ท่าศาลา"
  },
  {
    code: 401801,
    province: "ขอนแก่น",
    district: "อำเภอชนบท",
    subDistrict: "ชนบท"
  },
  {
    code: 401802,
    province: "ขอนแก่น",
    district: "อำเภอชนบท",
    subDistrict: "กุดเพียขอม"
  },
  {
    code: 401803,
    province: "ขอนแก่น",
    district: "อำเภอชนบท",
    subDistrict: "วังแสง"
  },
  {
    code: 401804,
    province: "ขอนแก่น",
    district: "อำเภอชนบท",
    subDistrict: "ห้วยแก"
  },
  {
    code: 401805,
    province: "ขอนแก่น",
    district: "อำเภอชนบท",
    subDistrict: "บ้านแท่น"
  },
  {
    code: 401806,
    province: "ขอนแก่น",
    district: "อำเภอชนบท",
    subDistrict: "ศรีบุญเรือง"
  },
  {
    code: 401807,
    province: "ขอนแก่น",
    district: "อำเภอชนบท",
    subDistrict: "โนนพะยอม"
  },
  {
    code: 401808,
    province: "ขอนแก่น",
    district: "อำเภอชนบท",
    subDistrict: "ปอแดง"
  },
  {
    code: 401901,
    province: "ขอนแก่น",
    district: "อำเภอเขาสวนกวาง",
    subDistrict: "เขาสวนกวาง"
  },
  {
    code: 401902,
    province: "ขอนแก่น",
    district: "อำเภอเขาสวนกวาง",
    subDistrict: "ดงเมืองแอม"
  },
  {
    code: 401903,
    province: "ขอนแก่น",
    district: "อำเภอเขาสวนกวาง",
    subDistrict: "นางิ้ว"
  },
  {
    code: 401904,
    province: "ขอนแก่น",
    district: "อำเภอเขาสวนกวาง",
    subDistrict: "โนนสมบูรณ์"
  },
  {
    code: 401905,
    province: "ขอนแก่น",
    district: "อำเภอเขาสวนกวาง",
    subDistrict: "คำม่วง"
  },
  {
    code: 402001,
    province: "ขอนแก่น",
    district: "อำเภอภูผาม่าน",
    subDistrict: "โนนคอม"
  },
  {
    code: 402002,
    province: "ขอนแก่น",
    district: "อำเภอภูผาม่าน",
    subDistrict: "นาฝาย"
  },
  {
    code: 402003,
    province: "ขอนแก่น",
    district: "อำเภอภูผาม่าน",
    subDistrict: "ภูผาม่าน"
  },
  {
    code: 402004,
    province: "ขอนแก่น",
    district: "อำเภอภูผาม่าน",
    subDistrict: "วังสวาบ"
  },
  {
    code: 402005,
    province: "ขอนแก่น",
    district: "อำเภอภูผาม่าน",
    subDistrict: "ห้วยม่วง"
  },
  {
    code: 402101,
    province: "ขอนแก่น",
    district: "อำเภอซำสูง",
    subDistrict: "กระนวน"
  },
  {
    code: 402102,
    province: "ขอนแก่น",
    district: "อำเภอซำสูง",
    subDistrict: "คำแมด"
  },
  {
    code: 402103,
    province: "ขอนแก่น",
    district: "อำเภอซำสูง",
    subDistrict: "บ้านโนน"
  },
  {
    code: 402104,
    province: "ขอนแก่น",
    district: "อำเภอซำสูง",
    subDistrict: "คูคำ"
  },
  {
    code: 402105,
    province: "ขอนแก่น",
    district: "อำเภอซำสูง",
    subDistrict: "ห้วยเตย"
  },
  {
    code: 402201,
    province: "ขอนแก่น",
    district: "อำเภอโคกโพธิ์ไชย",
    subDistrict: "บ้านโคก"
  },
  {
    code: 402202,
    province: "ขอนแก่น",
    district: "อำเภอโคกโพธิ์ไชย",
    subDistrict: "โพธิ์ไชย"
  },
  {
    code: 402203,
    province: "ขอนแก่น",
    district: "อำเภอโคกโพธิ์ไชย",
    subDistrict: "ซับสมบูรณ์"
  },
  {
    code: 402204,
    province: "ขอนแก่น",
    district: "อำเภอโคกโพธิ์ไชย",
    subDistrict: "นาแพง"
  },
  {
    code: 402301,
    province: "ขอนแก่น",
    district: "อำเภอหนองนาคำ",
    subDistrict: "กุดธาตุ"
  },
  {
    code: 402302,
    province: "ขอนแก่น",
    district: "อำเภอหนองนาคำ",
    subDistrict: "บ้านโคก"
  },
  {
    code: 402303,
    province: "ขอนแก่น",
    district: "อำเภอหนองนาคำ",
    subDistrict: "ขนวน"
  },
  {
    code: 402401,
    province: "ขอนแก่น",
    district: "อำเภอบ้านแฮด",
    subDistrict: "บ้านแฮด"
  },
  {
    code: 402402,
    province: "ขอนแก่น",
    district: "อำเภอบ้านแฮด",
    subDistrict: "โคกสำราญ"
  },
  {
    code: 402403,
    province: "ขอนแก่น",
    district: "อำเภอบ้านแฮด",
    subDistrict: "โนนสมบูรณ์"
  },
  {
    code: 402404,
    province: "ขอนแก่น",
    district: "อำเภอบ้านแฮด",
    subDistrict: "หนองแซง"
  },
  {
    code: 402501,
    province: "ขอนแก่น",
    district: "อำเภอโนนศิลา",
    subDistrict: "โนนศิลา"
  },
  {
    code: 402502,
    province: "ขอนแก่น",
    district: "อำเภอโนนศิลา",
    subDistrict: "หนองปลาหมอ"
  },
  {
    code: 402503,
    province: "ขอนแก่น",
    district: "อำเภอโนนศิลา",
    subDistrict: "บ้านหัน"
  },
  {
    code: 402504,
    province: "ขอนแก่น",
    district: "อำเภอโนนศิลา",
    subDistrict: "เปือยใหญ่"
  },
  {
    code: 402505,
    province: "ขอนแก่น",
    district: "อำเภอโนนศิลา",
    subDistrict: "โนนแดง"
  },
  {
    code: 402901,
    province: "ขอนแก่น",
    district: "อำเภอเวียงเก่า",
    subDistrict: "ในเมือง"
  },
  {
    code: 402902,
    province: "ขอนแก่น",
    district: "อำเภอเวียงเก่า",
    subDistrict: "เมืองเก่าพัฒนา"
  },
  {
    code: 402903,
    province: "ขอนแก่น",
    district: "อำเภอเวียงเก่า",
    subDistrict: "เขาน้อย"
  },
  {
    code: 410101,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "หมากแข้ง"
  },
  {
    code: 410102,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "นิคมสงเคราะห์"
  },
  {
    code: 410103,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "บ้านขาว"
  },
  {
    code: 410104,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "หนองบัว"
  },
  {
    code: 410105,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "บ้านตาด"
  },
  {
    code: 410106,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "โนนสูง"
  },
  {
    code: 410107,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "หมูม่น"
  },
  {
    code: 410108,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "เชียงยืน"
  },
  {
    code: 410109,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "หนองนาคำ"
  },
  {
    code: 410110,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "กุดสระ"
  },
  {
    code: 410111,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "นาดี"
  },
  {
    code: 410112,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "บ้านเลื่อม"
  },
  {
    code: 410113,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "เชียงพิณ"
  },
  {
    code: 410114,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "สามพร้าว"
  },
  {
    code: 410115,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "หนองไฮ"
  },
  {
    code: 410116,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "นาข่า"
  },
  {
    code: 410117,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "บ้านจั่น"
  },
  {
    code: 410118,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "หนองขอนกว้าง"
  },
  {
    code: 410119,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "โคกสะอาด"
  },
  {
    code: 410120,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "นากว้าง"
  },
  {
    code: 410121,
    province: "อุดรธานี",
    district: "อำเภอเมืองอุดรธานี",
    subDistrict: "หนองไผ่"
  },
  {
    code: 410201,
    province: "อุดรธานี",
    district: "อำเภอกุดจับ",
    subDistrict: "กุดจับ"
  },
  {
    code: 410202,
    province: "อุดรธานี",
    district: "อำเภอกุดจับ",
    subDistrict: "ปะโค"
  },
  {
    code: 410203,
    province: "อุดรธานี",
    district: "อำเภอกุดจับ",
    subDistrict: "ขอนยูง"
  },
  {
    code: 410204,
    province: "อุดรธานี",
    district: "อำเภอกุดจับ",
    subDistrict: "เชียงเพ็ง"
  },
  {
    code: 410205,
    province: "อุดรธานี",
    district: "อำเภอกุดจับ",
    subDistrict: "สร้างก่อ"
  },
  {
    code: 410206,
    province: "อุดรธานี",
    district: "อำเภอกุดจับ",
    subDistrict: "เมืองเพีย"
  },
  {
    code: 410207,
    province: "อุดรธานี",
    district: "อำเภอกุดจับ",
    subDistrict: "ตาลเลียน"
  },
  {
    code: 410301,
    province: "อุดรธานี",
    district: "อำเภอหนองวัวซอ",
    subDistrict: "หมากหญ้า"
  },
  {
    code: 410302,
    province: "อุดรธานี",
    district: "อำเภอหนองวัวซอ",
    subDistrict: "หนองอ้อ"
  },
  {
    code: 410303,
    province: "อุดรธานี",
    district: "อำเภอหนองวัวซอ",
    subDistrict: "อูบมุง"
  },
  {
    code: 410304,
    province: "อุดรธานี",
    district: "อำเภอหนองวัวซอ",
    subDistrict: "กุดหมากไฟ"
  },
  {
    code: 410305,
    province: "อุดรธานี",
    district: "อำเภอหนองวัวซอ",
    subDistrict: "น้ำพ่น"
  },
  {
    code: 410306,
    province: "อุดรธานี",
    district: "อำเภอหนองวัวซอ",
    subDistrict: "หนองบัวบาน"
  },
  {
    code: 410307,
    province: "อุดรธานี",
    district: "อำเภอหนองวัวซอ",
    subDistrict: "โนนหวาย"
  },
  {
    code: 410308,
    province: "อุดรธานี",
    district: "อำเภอหนองวัวซอ",
    subDistrict: "หนองวัวซอ"
  },
  {
    code: 410401,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "ตูมใต้"
  },
  {
    code: 410402,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "พันดอน"
  },
  {
    code: 410403,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "เวียงคำ"
  },
  {
    code: 410404,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "แชแล"
  },
  {
    code: 410406,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "เชียงแหว"
  },
  {
    code: 410407,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "ห้วยเกิ้ง"
  },
  {
    code: 410409,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "เสอเพลอ"
  },
  {
    code: 410410,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "สีออ"
  },
  {
    code: 410411,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "ปะโค"
  },
  {
    code: 410413,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "ผาสุก"
  },
  {
    code: 410414,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "ท่าลี่"
  },
  {
    code: 410415,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "กุมภวาปี"
  },
  {
    code: 410416,
    province: "อุดรธานี",
    district: "อำเภอกุมภวาปี",
    subDistrict: "หนองหว้า"
  },
  {
    code: 410501,
    province: "อุดรธานี",
    district: "อำเภอโนนสะอาด",
    subDistrict: "โนนสะอาด"
  },
  {
    code: 410502,
    province: "อุดรธานี",
    district: "อำเภอโนนสะอาด",
    subDistrict: "บุ่งแก้ว"
  },
  {
    code: 410503,
    province: "อุดรธานี",
    district: "อำเภอโนนสะอาด",
    subDistrict: "โพธิ์ศรีสำราญ"
  },
  {
    code: 410504,
    province: "อุดรธานี",
    district: "อำเภอโนนสะอาด",
    subDistrict: "ทมนางาม"
  },
  {
    code: 410505,
    province: "อุดรธานี",
    district: "อำเภอโนนสะอาด",
    subDistrict: "หนองกุงศรี"
  },
  {
    code: 410506,
    province: "อุดรธานี",
    district: "อำเภอโนนสะอาด",
    subDistrict: "โคกกลาง"
  },
  {
    code: 410601,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "หนองหาน"
  },
  {
    code: 410602,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "หนองเม็ก"
  },
  {
    code: 410605,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "พังงู"
  },
  {
    code: 410606,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "สะแบง"
  },
  {
    code: 410607,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "สร้อยพร้าว"
  },
  {
    code: 410609,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "บ้านเชียง"
  },
  {
    code: 410610,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "บ้านยา"
  },
  {
    code: 410611,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "โพนงาม"
  },
  {
    code: 410612,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "ผักตบ"
  },
  {
    code: 410614,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "หนองไผ่"
  },
  {
    code: 410617,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "ดอนหายโศก"
  },
  {
    code: 410618,
    province: "อุดรธานี",
    district: "อำเภอหนองหาน",
    subDistrict: "หนองสระปลา"
  },
  {
    code: 410701,
    province: "อุดรธานี",
    district: "อำเภอทุ่งฝน",
    subDistrict: "ทุ่งฝน"
  },
  {
    code: 410702,
    province: "อุดรธานี",
    district: "อำเภอทุ่งฝน",
    subDistrict: "ทุ่งใหญ่"
  },
  {
    code: 410703,
    province: "อุดรธานี",
    district: "อำเภอทุ่งฝน",
    subDistrict: "นาชุมแสง"
  },
  {
    code: 410704,
    province: "อุดรธานี",
    district: "อำเภอทุ่งฝน",
    subDistrict: "นาทม"
  },
  {
    code: 410801,
    province: "อุดรธานี",
    district: "อำเภอไชยวาน",
    subDistrict: "ไชยวาน"
  },
  {
    code: 410802,
    province: "อุดรธานี",
    district: "อำเภอไชยวาน",
    subDistrict: "หนองหลัก"
  },
  {
    code: 410803,
    province: "อุดรธานี",
    district: "อำเภอไชยวาน",
    subDistrict: "คำเลาะ"
  },
  {
    code: 410804,
    province: "อุดรธานี",
    district: "อำเภอไชยวาน",
    subDistrict: "โพนสูง"
  },
  {
    code: 410901,
    province: "อุดรธานี",
    district: "อำเภอศรีธาตุ",
    subDistrict: "ศรีธาตุ"
  },
  {
    code: 410902,
    province: "อุดรธานี",
    district: "อำเภอศรีธาตุ",
    subDistrict: "จำปี"
  },
  {
    code: 410903,
    province: "อุดรธานี",
    district: "อำเภอศรีธาตุ",
    subDistrict: "บ้านโปร่ง"
  },
  {
    code: 410904,
    province: "อุดรธานี",
    district: "อำเภอศรีธาตุ",
    subDistrict: "หัวนาคำ"
  },
  {
    code: 410905,
    province: "อุดรธานี",
    district: "อำเภอศรีธาตุ",
    subDistrict: "หนองนกเขียน"
  },
  {
    code: 410906,
    province: "อุดรธานี",
    district: "อำเภอศรีธาตุ",
    subDistrict: "นายูง"
  },
  {
    code: 410907,
    province: "อุดรธานี",
    district: "อำเภอศรีธาตุ",
    subDistrict: "ตาดทอง"
  },
  {
    code: 411001,
    province: "อุดรธานี",
    district: "อำเภอวังสามหมอ",
    subDistrict: "หนองกุงทับม้า"
  },
  {
    code: 411002,
    province: "อุดรธานี",
    district: "อำเภอวังสามหมอ",
    subDistrict: "หนองหญ้าไซ"
  },
  {
    code: 411003,
    province: "อุดรธานี",
    district: "อำเภอวังสามหมอ",
    subDistrict: "บะยาว"
  },
  {
    code: 411004,
    province: "อุดรธานี",
    district: "อำเภอวังสามหมอ",
    subDistrict: "ผาสุก"
  },
  {
    code: 411005,
    province: "อุดรธานี",
    district: "อำเภอวังสามหมอ",
    subDistrict: "คำโคกสูง"
  },
  {
    code: 411006,
    province: "อุดรธานี",
    district: "อำเภอวังสามหมอ",
    subDistrict: "วังสามหมอ"
  },
  {
    code: 411101,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "ศรีสุทโธ"
  },
  {
    code: 411102,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "บ้านดุง"
  },
  {
    code: 411103,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "ดงเย็น"
  },
  {
    code: 411104,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "โพนสูง"
  },
  {
    code: 411105,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "อ้อมกอ"
  },
  {
    code: 411106,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "บ้านจันทน์"
  },
  {
    code: 411107,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "บ้านชัย"
  },
  {
    code: 411108,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "นาไหม"
  },
  {
    code: 411109,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "ถ่อนนาลับ"
  },
  {
    code: 411110,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "วังทอง"
  },
  {
    code: 411111,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "บ้านม่วง"
  },
  {
    code: 411112,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "บ้านตาด"
  },
  {
    code: 411113,
    province: "อุดรธานี",
    district: "อำเภอบ้านดุง",
    subDistrict: "นาคำ"
  },
  {
    code: 411701,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "บ้านผือ"
  },
  {
    code: 411702,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "หายโศก"
  },
  {
    code: 411703,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "เขือน้ำ"
  },
  {
    code: 411704,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "คำบง"
  },
  {
    code: 411705,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "โนนทอง"
  },
  {
    code: 411706,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "ข้าวสาร"
  },
  {
    code: 411707,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "จำปาโมง"
  },
  {
    code: 411708,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "กลางใหญ่"
  },
  {
    code: 411709,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "เมืองพาน"
  },
  {
    code: 411710,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "คำด้วง"
  },
  {
    code: 411711,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "หนองหัวคู"
  },
  {
    code: 411712,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "บ้านค้อ"
  },
  {
    code: 411713,
    province: "อุดรธานี",
    district: "อำเภอบ้านผือ",
    subDistrict: "หนองแวง"
  },
  {
    code: 411801,
    province: "อุดรธานี",
    district: "อำเภอน้ำโสม",
    subDistrict: "นางัว"
  },
  {
    code: 411802,
    province: "อุดรธานี",
    district: "อำเภอน้ำโสม",
    subDistrict: "น้ำโสม"
  },
  {
    code: 411805,
    province: "อุดรธานี",
    district: "อำเภอน้ำโสม",
    subDistrict: "หนองแวง"
  },
  {
    code: 411806,
    province: "อุดรธานี",
    district: "อำเภอน้ำโสม",
    subDistrict: "บ้านหยวก"
  },
  {
    code: 411807,
    province: "อุดรธานี",
    district: "อำเภอน้ำโสม",
    subDistrict: "โสมเยี่ยม"
  },
  {
    code: 411810,
    province: "อุดรธานี",
    district: "อำเภอน้ำโสม",
    subDistrict: "ศรีสำราญ"
  },
  {
    code: 411812,
    province: "อุดรธานี",
    district: "อำเภอน้ำโสม",
    subDistrict: "สามัคคี"
  },
  {
    code: 411901,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "เพ็ญ"
  },
  {
    code: 411902,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "บ้านธาตุ"
  },
  {
    code: 411903,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "นาพู่"
  },
  {
    code: 411904,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "เชียงหวาง"
  },
  {
    code: 411905,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "สุมเส้า"
  },
  {
    code: 411906,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "นาบัว"
  },
  {
    code: 411907,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "บ้านเหล่า"
  },
  {
    code: 411908,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "จอมศรี"
  },
  {
    code: 411909,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "เตาไห"
  },
  {
    code: 411910,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "โคกกลาง"
  },
  {
    code: 411911,
    province: "อุดรธานี",
    district: "อำเภอเพ็ญ",
    subDistrict: "สร้างแป้น"
  },
  {
    code: 412001,
    province: "อุดรธานี",
    district: "อำเภอสร้างคอม",
    subDistrict: "สร้างคอม"
  },
  {
    code: 412002,
    province: "อุดรธานี",
    district: "อำเภอสร้างคอม",
    subDistrict: "เชียงดา"
  },
  {
    code: 412003,
    province: "อุดรธานี",
    district: "อำเภอสร้างคอม",
    subDistrict: "บ้านยวด"
  },
  {
    code: 412004,
    province: "อุดรธานี",
    district: "อำเภอสร้างคอม",
    subDistrict: "บ้านโคก"
  },
  {
    code: 412005,
    province: "อุดรธานี",
    district: "อำเภอสร้างคอม",
    subDistrict: "นาสะอาด"
  },
  {
    code: 412006,
    province: "อุดรธานี",
    district: "อำเภอสร้างคอม",
    subDistrict: "บ้านหินโงม"
  },
  {
    code: 412101,
    province: "อุดรธานี",
    district: "อำเภอหนองแสง",
    subDistrict: "หนองแสง"
  },
  {
    code: 412102,
    province: "อุดรธานี",
    district: "อำเภอหนองแสง",
    subDistrict: "แสงสว่าง"
  },
  {
    code: 412103,
    province: "อุดรธานี",
    district: "อำเภอหนองแสง",
    subDistrict: "นาดี"
  },
  {
    code: 412104,
    province: "อุดรธานี",
    district: "อำเภอหนองแสง",
    subDistrict: "ทับกุง"
  },
  {
    code: 412201,
    province: "อุดรธานี",
    district: "อำเภอนายูง",
    subDistrict: "นายูง"
  },
  {
    code: 412202,
    province: "อุดรธานี",
    district: "อำเภอนายูง",
    subDistrict: "บ้านก้อง"
  },
  {
    code: 412203,
    province: "อุดรธานี",
    district: "อำเภอนายูง",
    subDistrict: "นาแค"
  },
  {
    code: 412204,
    province: "อุดรธานี",
    district: "อำเภอนายูง",
    subDistrict: "โนนทอง"
  },
  {
    code: 412301,
    province: "อุดรธานี",
    district: "อำเภอพิบูลย์รักษ์",
    subDistrict: "บ้านแดง"
  },
  {
    code: 412302,
    province: "อุดรธานี",
    district: "อำเภอพิบูลย์รักษ์",
    subDistrict: "นาทราย"
  },
  {
    code: 412303,
    province: "อุดรธานี",
    district: "อำเภอพิบูลย์รักษ์",
    subDistrict: "ดอนกลอย"
  },
  {
    code: 412401,
    province: "อุดรธานี",
    district: "อำเภอกู่แก้ว",
    subDistrict: "บ้านจีต"
  },
  {
    code: 412402,
    province: "อุดรธานี",
    district: "อำเภอกู่แก้ว",
    subDistrict: "โนนทองอินทร์"
  },
  {
    code: 412403,
    province: "อุดรธานี",
    district: "อำเภอกู่แก้ว",
    subDistrict: "ค้อใหญ่"
  },
  {
    code: 412404,
    province: "อุดรธานี",
    district: "อำเภอกู่แก้ว",
    subDistrict: "คอนสาย"
  },
  {
    code: 412501,
    province: "อุดรธานี",
    district: "อำเภอประจักษ์ศิลปาคม",
    subDistrict: "นาม่วง"
  },
  {
    code: 412502,
    province: "อุดรธานี",
    district: "อำเภอประจักษ์ศิลปาคม",
    subDistrict: "ห้วยสามพาด"
  },
  {
    code: 412503,
    province: "อุดรธานี",
    district: "อำเภอประจักษ์ศิลปาคม",
    subDistrict: "อุ่มจาน"
  },
  {
    code: 420101,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "กุดป่อง"
  },
  {
    code: 420102,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "เมือง"
  },
  {
    code: 420103,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "นาอ้อ"
  },
  {
    code: 420104,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "กกดู่"
  },
  {
    code: 420105,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "น้ำหมาน"
  },
  {
    code: 420106,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "เสี้ยว"
  },
  {
    code: 420107,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "นาอาน"
  },
  {
    code: 420108,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "นาโป่ง"
  },
  {
    code: 420109,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "นาดินดำ"
  },
  {
    code: 420110,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "น้ำสวย"
  },
  {
    code: 420111,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "ชัยพฤกษ์"
  },
  {
    code: 420112,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "นาแขม"
  },
  {
    code: 420113,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "ศรีสองรัก"
  },
  {
    code: 420114,
    province: "เลย",
    district: "อำเภอเมืองเลย",
    subDistrict: "กกทอง"
  },
  {
    code: 420201,
    province: "เลย",
    district: "อำเภอนาด้วง",
    subDistrict: "นาด้วง"
  },
  {
    code: 420202,
    province: "เลย",
    district: "อำเภอนาด้วง",
    subDistrict: "นาดอกคำ"
  },
  {
    code: 420203,
    province: "เลย",
    district: "อำเภอนาด้วง",
    subDistrict: "ท่าสะอาด"
  },
  {
    code: 420204,
    province: "เลย",
    district: "อำเภอนาด้วง",
    subDistrict: "ท่าสวรรค์"
  },
  {
    code: 420301,
    province: "เลย",
    district: "อำเภอเชียงคาน",
    subDistrict: "เชียงคาน"
  },
  {
    code: 420302,
    province: "เลย",
    district: "อำเภอเชียงคาน",
    subDistrict: "ธาตุ"
  },
  {
    code: 420303,
    province: "เลย",
    district: "อำเภอเชียงคาน",
    subDistrict: "นาซ่าว"
  },
  {
    code: 420304,
    province: "เลย",
    district: "อำเภอเชียงคาน",
    subDistrict: "เขาแก้ว"
  },
  {
    code: 420305,
    province: "เลย",
    district: "อำเภอเชียงคาน",
    subDistrict: "ปากตม"
  },
  {
    code: 420306,
    province: "เลย",
    district: "อำเภอเชียงคาน",
    subDistrict: "บุฮม"
  },
  {
    code: 420307,
    province: "เลย",
    district: "อำเภอเชียงคาน",
    subDistrict: "จอมศรี"
  },
  {
    code: 420308,
    province: "เลย",
    district: "อำเภอเชียงคาน",
    subDistrict: "หาดทรายขาว"
  },
  {
    code: 420401,
    province: "เลย",
    district: "อำเภอปากชม",
    subDistrict: "ปากชม"
  },
  {
    code: 420402,
    province: "เลย",
    district: "อำเภอปากชม",
    subDistrict: "เชียงกลม"
  },
  {
    code: 420403,
    province: "เลย",
    district: "อำเภอปากชม",
    subDistrict: "หาดคัมภีร์"
  },
  {
    code: 420404,
    province: "เลย",
    district: "อำเภอปากชม",
    subDistrict: "ห้วยบ่อซืน"
  },
  {
    code: 420405,
    province: "เลย",
    district: "อำเภอปากชม",
    subDistrict: "ห้วยพิชัย"
  },
  {
    code: 420406,
    province: "เลย",
    district: "อำเภอปากชม",
    subDistrict: "ชมเจริญ"
  },
  {
    code: 420501,
    province: "เลย",
    district: "อำเภอด่านซ้าย",
    subDistrict: "ด่านซ้าย"
  },
  {
    code: 420502,
    province: "เลย",
    district: "อำเภอด่านซ้าย",
    subDistrict: "ปากหมัน"
  },
  {
    code: 420503,
    province: "เลย",
    district: "อำเภอด่านซ้าย",
    subDistrict: "นาดี"
  },
  {
    code: 420504,
    province: "เลย",
    district: "อำเภอด่านซ้าย",
    subDistrict: "โคกงาม"
  },
  {
    code: 420505,
    province: "เลย",
    district: "อำเภอด่านซ้าย",
    subDistrict: "โพนสูง"
  },
  {
    code: 420506,
    province: "เลย",
    district: "อำเภอด่านซ้าย",
    subDistrict: "อิปุ่ม"
  },
  {
    code: 420507,
    province: "เลย",
    district: "อำเภอด่านซ้าย",
    subDistrict: "กกสะทอน"
  },
  {
    code: 420508,
    province: "เลย",
    district: "อำเภอด่านซ้าย",
    subDistrict: "โป่ง"
  },
  {
    code: 420509,
    province: "เลย",
    district: "อำเภอด่านซ้าย",
    subDistrict: "วังยาว"
  },
  {
    code: 420510,
    province: "เลย",
    district: "อำเภอด่านซ้าย",
    subDistrict: "นาหอ"
  },
  {
    code: 420601,
    province: "เลย",
    district: "อำเภอนาแห้ว",
    subDistrict: "นาแห้ว"
  },
  {
    code: 420602,
    province: "เลย",
    district: "อำเภอนาแห้ว",
    subDistrict: "แสงภา"
  },
  {
    code: 420603,
    province: "เลย",
    district: "อำเภอนาแห้ว",
    subDistrict: "นาพึง"
  },
  {
    code: 420604,
    province: "เลย",
    district: "อำเภอนาแห้ว",
    subDistrict: "นามาลา"
  },
  {
    code: 420605,
    province: "เลย",
    district: "อำเภอนาแห้ว",
    subDistrict: "เหล่ากอหก"
  },
  {
    code: 420701,
    province: "เลย",
    district: "อำเภอภูเรือ",
    subDistrict: "หนองบัว"
  },
  {
    code: 420702,
    province: "เลย",
    district: "อำเภอภูเรือ",
    subDistrict: "ท่าศาลา"
  },
  {
    code: 420703,
    province: "เลย",
    district: "อำเภอภูเรือ",
    subDistrict: "ร่องจิก"
  },
  {
    code: 420704,
    province: "เลย",
    district: "อำเภอภูเรือ",
    subDistrict: "ปลาบ่า"
  },
  {
    code: 420705,
    province: "เลย",
    district: "อำเภอภูเรือ",
    subDistrict: "ลาดค่าง"
  },
  {
    code: 420706,
    province: "เลย",
    district: "อำเภอภูเรือ",
    subDistrict: "สานตม"
  },
  {
    code: 420801,
    province: "เลย",
    district: "อำเภอท่าลี่",
    subDistrict: "ท่าลี่"
  },
  {
    code: 420802,
    province: "เลย",
    district: "อำเภอท่าลี่",
    subDistrict: "หนองผือ"
  },
  {
    code: 420803,
    province: "เลย",
    district: "อำเภอท่าลี่",
    subDistrict: "อาฮี"
  },
  {
    code: 420804,
    province: "เลย",
    district: "อำเภอท่าลี่",
    subDistrict: "น้ำแคม"
  },
  {
    code: 420805,
    province: "เลย",
    district: "อำเภอท่าลี่",
    subDistrict: "โคกใหญ่"
  },
  {
    code: 420806,
    province: "เลย",
    district: "อำเภอท่าลี่",
    subDistrict: "น้ำทูน"
  },
  {
    code: 420901,
    province: "เลย",
    district: "อำเภอวังสะพุง",
    subDistrict: "วังสะพุง"
  },
  {
    code: 420902,
    province: "เลย",
    district: "อำเภอวังสะพุง",
    subDistrict: "ทรายขาว"
  },
  {
    code: 420903,
    province: "เลย",
    district: "อำเภอวังสะพุง",
    subDistrict: "หนองหญ้าปล้อง"
  },
  {
    code: 420904,
    province: "เลย",
    district: "อำเภอวังสะพุง",
    subDistrict: "หนองงิ้ว"
  },
  {
    code: 420905,
    province: "เลย",
    district: "อำเภอวังสะพุง",
    subDistrict: "ปากปวน"
  },
  {
    code: 420906,
    province: "เลย",
    district: "อำเภอวังสะพุง",
    subDistrict: "ผาน้อย"
  },
  {
    code: 420910,
    province: "เลย",
    district: "อำเภอวังสะพุง",
    subDistrict: "ผาบิ้ง"
  },
  {
    code: 420911,
    province: "เลย",
    district: "อำเภอวังสะพุง",
    subDistrict: "เขาหลวง"
  },
  {
    code: 420912,
    province: "เลย",
    district: "อำเภอวังสะพุง",
    subDistrict: "โคกขมิ้น"
  },
  {
    code: 420913,
    province: "เลย",
    district: "อำเภอวังสะพุง",
    subDistrict: "ศรีสงคราม"
  },
  {
    code: 421001,
    province: "เลย",
    district: "อำเภอภูกระดึง",
    subDistrict: "ศรีฐาน"
  },
  {
    code: 421005,
    province: "เลย",
    district: "อำเภอภูกระดึง",
    subDistrict: "ผานกเค้า"
  },
  {
    code: 421007,
    province: "เลย",
    district: "อำเภอภูกระดึง",
    subDistrict: "ภูกระดึง"
  },
  {
    code: 421010,
    province: "เลย",
    district: "อำเภอภูกระดึง",
    subDistrict: "ห้วยส้ม"
  },
  {
    code: 421101,
    province: "เลย",
    district: "อำเภอภูหลวง",
    subDistrict: "ภูหอ"
  },
  {
    code: 421102,
    province: "เลย",
    district: "อำเภอภูหลวง",
    subDistrict: "หนองคัน"
  },
  {
    code: 421104,
    province: "เลย",
    district: "อำเภอภูหลวง",
    subDistrict: "ห้วยสีเสียด"
  },
  {
    code: 421105,
    province: "เลย",
    district: "อำเภอภูหลวง",
    subDistrict: "เลยวังไสย์"
  },
  {
    code: 421106,
    province: "เลย",
    district: "อำเภอภูหลวง",
    subDistrict: "แก่งศรีภูมิ"
  },
  {
    code: 421201,
    province: "เลย",
    district: "อำเภอผาขาว",
    subDistrict: "ผาขาว"
  },
  {
    code: 421202,
    province: "เลย",
    district: "อำเภอผาขาว",
    subDistrict: "ท่าช้างคล้อง"
  },
  {
    code: 421203,
    province: "เลย",
    district: "อำเภอผาขาว",
    subDistrict: "โนนปอแดง"
  },
  {
    code: 421204,
    province: "เลย",
    district: "อำเภอผาขาว",
    subDistrict: "โนนป่าซาง"
  },
  {
    code: 421205,
    province: "เลย",
    district: "อำเภอผาขาว",
    subDistrict: "บ้านเพิ่ม"
  },
  {
    code: 421301,
    province: "เลย",
    district: "อำเภอเอราวัณ",
    subDistrict: "เอราวัณ"
  },
  {
    code: 421302,
    province: "เลย",
    district: "อำเภอเอราวัณ",
    subDistrict: "ผาอินทร์แปลง"
  },
  {
    code: 421303,
    province: "เลย",
    district: "อำเภอเอราวัณ",
    subDistrict: "ผาสามยอด"
  },
  {
    code: 421304,
    province: "เลย",
    district: "อำเภอเอราวัณ",
    subDistrict: "ทรัพย์ไพวัลย์"
  },
  {
    code: 421401,
    province: "เลย",
    district: "อำเภอหนองหิน",
    subDistrict: "หนองหิน"
  },
  {
    code: 421402,
    province: "เลย",
    district: "อำเภอหนองหิน",
    subDistrict: "ตาดข่า"
  },
  {
    code: 421403,
    province: "เลย",
    district: "อำเภอหนองหิน",
    subDistrict: "ปวนพุ"
  },
  {
    code: 430101,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "ในเมือง"
  },
  {
    code: 430102,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "มีชัย"
  },
  {
    code: 430103,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "โพธิ์ชัย"
  },
  {
    code: 430104,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "กวนวัน"
  },
  {
    code: 430105,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "เวียงคุก"
  },
  {
    code: 430106,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "วัดธาตุ"
  },
  {
    code: 430107,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "หาดคำ"
  },
  {
    code: 430108,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "หินโงม"
  },
  {
    code: 430109,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "บ้านเดื่อ"
  },
  {
    code: 430110,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "ค่ายบกหวาน"
  },
  {
    code: 430111,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "โพนสว่าง"
  },
  {
    code: 430113,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "พระธาตุบังพวน"
  },
  {
    code: 430116,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "หนองกอมเกาะ"
  },
  {
    code: 430117,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "ปะโค"
  },
  {
    code: 430118,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "เมืองหมี"
  },
  {
    code: 430119,
    province: "หนองคาย",
    district: "อำเภอเมืองหนองคาย",
    subDistrict: "สีกาย"
  },
  {
    code: 430201,
    province: "หนองคาย",
    district: "อำเภอท่าบ่อ",
    subDistrict: "ท่าบ่อ"
  },
  {
    code: 430202,
    province: "หนองคาย",
    district: "อำเภอท่าบ่อ",
    subDistrict: "น้ำโมง"
  },
  {
    code: 430203,
    province: "หนองคาย",
    district: "อำเภอท่าบ่อ",
    subDistrict: "กองนาง"
  },
  {
    code: 430204,
    province: "หนองคาย",
    district: "อำเภอท่าบ่อ",
    subDistrict: "โคกคอน"
  },
  {
    code: 430205,
    province: "หนองคาย",
    district: "อำเภอท่าบ่อ",
    subDistrict: "บ้านเดื่อ"
  },
  {
    code: 430206,
    province: "หนองคาย",
    district: "อำเภอท่าบ่อ",
    subDistrict: "บ้านถ่อน"
  },
  {
    code: 430207,
    province: "หนองคาย",
    district: "อำเภอท่าบ่อ",
    subDistrict: "บ้านว่าน"
  },
  {
    code: 430208,
    province: "หนองคาย",
    district: "อำเภอท่าบ่อ",
    subDistrict: "นาข่า"
  },
  {
    code: 430209,
    province: "หนองคาย",
    district: "อำเภอท่าบ่อ",
    subDistrict: "โพนสา"
  },
  {
    code: 430210,
    province: "หนองคาย",
    district: "อำเภอท่าบ่อ",
    subDistrict: "หนองนาง"
  },
  {
    code: 430501,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "จุมพล"
  },
  {
    code: 430502,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "วัดหลวง"
  },
  {
    code: 430503,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "กุดบง"
  },
  {
    code: 430504,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "ชุมช้าง"
  },
  {
    code: 430506,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "ทุ่งหลวง"
  },
  {
    code: 430507,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "เหล่าต่างคำ"
  },
  {
    code: 430508,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "นาหนัง"
  },
  {
    code: 430509,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "เซิม"
  },
  {
    code: 430513,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "บ้านโพธิ์"
  },
  {
    code: 430521,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "บ้านผือ"
  },
  {
    code: 430522,
    province: "หนองคาย",
    district: "อำเภอโพนพิสัย",
    subDistrict: "สร้างนางขาว"
  },
  {
    code: 430701,
    province: "หนองคาย",
    district: "อำเภอศรีเชียงใหม่",
    subDistrict: "พานพร้าว"
  },
  {
    code: 430703,
    province: "หนองคาย",
    district: "อำเภอศรีเชียงใหม่",
    subDistrict: "บ้านหม้อ"
  },
  {
    code: 430704,
    province: "หนองคาย",
    district: "อำเภอศรีเชียงใหม่",
    subDistrict: "พระพุทธบาท"
  },
  {
    code: 430705,
    province: "หนองคาย",
    district: "อำเภอศรีเชียงใหม่",
    subDistrict: "หนองปลาปาก"
  },
  {
    code: 430801,
    province: "หนองคาย",
    district: "อำเภอสังคม",
    subDistrict: "แก้งไก่"
  },
  {
    code: 430802,
    province: "หนองคาย",
    district: "อำเภอสังคม",
    subDistrict: "ผาตั้ง"
  },
  {
    code: 430803,
    province: "หนองคาย",
    district: "อำเภอสังคม",
    subDistrict: "บ้านม่วง"
  },
  {
    code: 430804,
    province: "หนองคาย",
    district: "อำเภอสังคม",
    subDistrict: "นางิ้ว"
  },
  {
    code: 430805,
    province: "หนองคาย",
    district: "อำเภอสังคม",
    subDistrict: "สังคม"
  },
  {
    code: 431401,
    province: "หนองคาย",
    district: "อำเภอสระใคร",
    subDistrict: "สระใคร"
  },
  {
    code: 431402,
    province: "หนองคาย",
    district: "อำเภอสระใคร",
    subDistrict: "คอกช้าง"
  },
  {
    code: 431403,
    province: "หนองคาย",
    district: "อำเภอสระใคร",
    subDistrict: "บ้านฝาง"
  },
  {
    code: 431501,
    province: "หนองคาย",
    district: "อำเภอเฝ้าไร่",
    subDistrict: "เฝ้าไร่"
  },
  {
    code: 431502,
    province: "หนองคาย",
    district: "อำเภอเฝ้าไร่",
    subDistrict: "นาดี"
  },
  {
    code: 431503,
    province: "หนองคาย",
    district: "อำเภอเฝ้าไร่",
    subDistrict: "หนองหลวง"
  },
  {
    code: 431504,
    province: "หนองคาย",
    district: "อำเภอเฝ้าไร่",
    subDistrict: "วังหลวง"
  },
  {
    code: 431505,
    province: "หนองคาย",
    district: "อำเภอเฝ้าไร่",
    subDistrict: "อุดมพร"
  },
  {
    code: 431601,
    province: "หนองคาย",
    district: "อำเภอรัตนวาปี",
    subDistrict: "รัตนวาปี"
  },
  {
    code: 431602,
    province: "หนองคาย",
    district: "อำเภอรัตนวาปี",
    subDistrict: "นาทับไฮ"
  },
  {
    code: 431603,
    province: "หนองคาย",
    district: "อำเภอรัตนวาปี",
    subDistrict: "บ้านต้อน"
  },
  {
    code: 431604,
    province: "หนองคาย",
    district: "อำเภอรัตนวาปี",
    subDistrict: "พระบาทนาสิงห์"
  },
  {
    code: 431605,
    province: "หนองคาย",
    district: "อำเภอรัตนวาปี",
    subDistrict: "โพนแพง"
  },
  {
    code: 431701,
    province: "หนองคาย",
    district: "อำเภอโพธิ์ตาก",
    subDistrict: "โพธิ์ตาก"
  },
  {
    code: 431702,
    province: "หนองคาย",
    district: "อำเภอโพธิ์ตาก",
    subDistrict: "โพนทอง"
  },
  {
    code: 431703,
    province: "หนองคาย",
    district: "อำเภอโพธิ์ตาก",
    subDistrict: "ด่านศรีสุข"
  },
  {
    code: 440101,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "ตลาด"
  },
  {
    code: 440102,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "เขวา"
  },
  {
    code: 440103,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "ท่าตูม"
  },
  {
    code: 440104,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "แวงน่าง"
  },
  {
    code: 440105,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "โคกก่อ"
  },
  {
    code: 440106,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "ดอนหว่าน"
  },
  {
    code: 440107,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "เกิ้ง"
  },
  {
    code: 440108,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "แก่งเลิงจาน"
  },
  {
    code: 440109,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "ท่าสองคอน"
  },
  {
    code: 440110,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "ลาดพัฒนา"
  },
  {
    code: 440111,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "หนองปลิง"
  },
  {
    code: 440112,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "ห้วยแอ่ง"
  },
  {
    code: 440113,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "หนองโน"
  },
  {
    code: 440114,
    province: "มหาสารคาม",
    district: "อำเภอเมืองมหาสารคาม",
    subDistrict: "บัวค้อ"
  },
  {
    code: 440201,
    province: "มหาสารคาม",
    district: "อำเภอแกดำ",
    subDistrict: "แกดำ"
  },
  {
    code: 440202,
    province: "มหาสารคาม",
    district: "อำเภอแกดำ",
    subDistrict: "วังแสง"
  },
  {
    code: 440203,
    province: "มหาสารคาม",
    district: "อำเภอแกดำ",
    subDistrict: "มิตรภาพ"
  },
  {
    code: 440204,
    province: "มหาสารคาม",
    district: "อำเภอแกดำ",
    subDistrict: "หนองกุง"
  },
  {
    code: 440205,
    province: "มหาสารคาม",
    district: "อำเภอแกดำ",
    subDistrict: "โนนภิบาล"
  },
  {
    code: 440301,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "หัวขวาง"
  },
  {
    code: 440302,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "ยางน้อย"
  },
  {
    code: 440303,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "วังยาว"
  },
  {
    code: 440304,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "เขวาไร่"
  },
  {
    code: 440305,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "แพง"
  },
  {
    code: 440306,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "แก้งแก"
  },
  {
    code: 440307,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "หนองเหล็ก"
  },
  {
    code: 440308,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "หนองบัว"
  },
  {
    code: 440309,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "เหล่า"
  },
  {
    code: 440310,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "เขื่อน"
  },
  {
    code: 440311,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "หนองบอน"
  },
  {
    code: 440312,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "โพนงาม"
  },
  {
    code: 440313,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "ยางท่าแจ้ง"
  },
  {
    code: 440314,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "แห่ใต้"
  },
  {
    code: 440315,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "หนองกุงสวรรค์"
  },
  {
    code: 440316,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "เลิงใต้"
  },
  {
    code: 440317,
    province: "มหาสารคาม",
    district: "อำเภอโกสุมพิสัย",
    subDistrict: "ดอนกลาง"
  },
  {
    code: 440401,
    province: "มหาสารคาม",
    district: "อำเภอกันทรวิชัย",
    subDistrict: "โคกพระ"
  },
  {
    code: 440402,
    province: "มหาสารคาม",
    district: "อำเภอกันทรวิชัย",
    subDistrict: "คันธารราษฎร์"
  },
  {
    code: 440403,
    province: "มหาสารคาม",
    district: "อำเภอกันทรวิชัย",
    subDistrict: "มะค่า"
  },
  {
    code: 440404,
    province: "มหาสารคาม",
    district: "อำเภอกันทรวิชัย",
    subDistrict: "ท่าขอนยาง"
  },
  {
    code: 440405,
    province: "มหาสารคาม",
    district: "อำเภอกันทรวิชัย",
    subDistrict: "นาสีนวน"
  },
  {
    code: 440406,
    province: "มหาสารคาม",
    district: "อำเภอกันทรวิชัย",
    subDistrict: "ขามเรียง"
  },
  {
    code: 440407,
    province: "มหาสารคาม",
    district: "อำเภอกันทรวิชัย",
    subDistrict: "เขวาใหญ่"
  },
  {
    code: 440408,
    province: "มหาสารคาม",
    district: "อำเภอกันทรวิชัย",
    subDistrict: "ศรีสุข"
  },
  {
    code: 440409,
    province: "มหาสารคาม",
    district: "อำเภอกันทรวิชัย",
    subDistrict: "กุดใส้จ่อ"
  },
  {
    code: 440410,
    province: "มหาสารคาม",
    district: "อำเภอกันทรวิชัย",
    subDistrict: "ขามเฒ่าพัฒนา"
  },
  {
    code: 440501,
    province: "มหาสารคาม",
    district: "อำเภอเชียงยืน",
    subDistrict: "เชียงยืน"
  },
  {
    code: 440503,
    province: "มหาสารคาม",
    district: "อำเภอเชียงยืน",
    subDistrict: "หนองซอน"
  },
  {
    code: 440505,
    province: "มหาสารคาม",
    district: "อำเภอเชียงยืน",
    subDistrict: "ดอนเงิน"
  },
  {
    code: 440506,
    province: "มหาสารคาม",
    district: "อำเภอเชียงยืน",
    subDistrict: "กู่ทอง"
  },
  {
    code: 440507,
    province: "มหาสารคาม",
    district: "อำเภอเชียงยืน",
    subDistrict: "นาทอง"
  },
  {
    code: 440508,
    province: "มหาสารคาม",
    district: "อำเภอเชียงยืน",
    subDistrict: "เสือเฒ่า"
  },
  {
    code: 440511,
    province: "มหาสารคาม",
    district: "อำเภอเชียงยืน",
    subDistrict: "โพนทอง"
  },
  {
    code: 440512,
    province: "มหาสารคาม",
    district: "อำเภอเชียงยืน",
    subDistrict: "เหล่าบัวบาน"
  },
  {
    code: 440601,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "บรบือ"
  },
  {
    code: 440602,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "บ่อใหญ่"
  },
  {
    code: 440604,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "วังไชย"
  },
  {
    code: 440605,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "หนองม่วง"
  },
  {
    code: 440606,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "กำพี้"
  },
  {
    code: 440607,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "โนนราษี"
  },
  {
    code: 440608,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "โนนแดง"
  },
  {
    code: 440610,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "หนองจิก"
  },
  {
    code: 440611,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "บัวมาศ"
  },
  {
    code: 440613,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "หนองคูขาด"
  },
  {
    code: 440615,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "วังใหม่"
  },
  {
    code: 440616,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "ยาง"
  },
  {
    code: 440618,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "หนองสิม"
  },
  {
    code: 440619,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "หนองโก"
  },
  {
    code: 440620,
    province: "มหาสารคาม",
    district: "อำเภอบรบือ",
    subDistrict: "ดอนงัว"
  },
  {
    code: 440701,
    province: "มหาสารคาม",
    district: "อำเภอนาเชือก",
    subDistrict: "นาเชือก"
  },
  {
    code: 440702,
    province: "มหาสารคาม",
    district: "อำเภอนาเชือก",
    subDistrict: "สำโรง"
  },
  {
    code: 440703,
    province: "มหาสารคาม",
    district: "อำเภอนาเชือก",
    subDistrict: "หนองแดง"
  },
  {
    code: 440704,
    province: "มหาสารคาม",
    district: "อำเภอนาเชือก",
    subDistrict: "เขวาไร่"
  },
  {
    code: 440705,
    province: "มหาสารคาม",
    district: "อำเภอนาเชือก",
    subDistrict: "หนองโพธิ์"
  },
  {
    code: 440706,
    province: "มหาสารคาม",
    district: "อำเภอนาเชือก",
    subDistrict: "ปอพาน"
  },
  {
    code: 440707,
    province: "มหาสารคาม",
    district: "อำเภอนาเชือก",
    subDistrict: "หนองเม็ก"
  },
  {
    code: 440708,
    province: "มหาสารคาม",
    district: "อำเภอนาเชือก",
    subDistrict: "หนองเรือ"
  },
  {
    code: 440709,
    province: "มหาสารคาม",
    district: "อำเภอนาเชือก",
    subDistrict: "หนองกุง"
  },
  {
    code: 440710,
    province: "มหาสารคาม",
    district: "อำเภอนาเชือก",
    subDistrict: "สันป่าตอง"
  },
  {
    code: 440801,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "ปะหลาน"
  },
  {
    code: 440802,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "ก้ามปู"
  },
  {
    code: 440803,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "เวียงสะอาด"
  },
  {
    code: 440804,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "เม็กดำ"
  },
  {
    code: 440805,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "นาสีนวล"
  },
  {
    code: 440809,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "ราษฎร์เจริญ"
  },
  {
    code: 440810,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "หนองบัวแก้ว"
  },
  {
    code: 440812,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "เมืองเตา"
  },
  {
    code: 440815,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "ลานสะแก"
  },
  {
    code: 440816,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "เวียงชัย"
  },
  {
    code: 440817,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "หนองบัว"
  },
  {
    code: 440818,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "ราษฎร์พัฒนา"
  },
  {
    code: 440819,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "เมืองเสือ"
  },
  {
    code: 440820,
    province: "มหาสารคาม",
    district: "อำเภอพยัคฆภูมิพิสัย",
    subDistrict: "ภารแอ่น"
  },
  {
    code: 440901,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "หนองแสง"
  },
  {
    code: 440902,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "ขามป้อม"
  },
  {
    code: 440903,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "เสือโก้ก"
  },
  {
    code: 440904,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "ดงใหญ่"
  },
  {
    code: 440905,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "โพธิ์ชัย"
  },
  {
    code: 440906,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "หัวเรือ"
  },
  {
    code: 440907,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "แคน"
  },
  {
    code: 440908,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "งัวบา"
  },
  {
    code: 440909,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "นาข่า"
  },
  {
    code: 440910,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "บ้านหวาย"
  },
  {
    code: 440911,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "หนองไฮ"
  },
  {
    code: 440912,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "ประชาพัฒนา"
  },
  {
    code: 440913,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "หนองทุ่ม"
  },
  {
    code: 440914,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "หนองแสน"
  },
  {
    code: 440915,
    province: "มหาสารคาม",
    district: "อำเภอวาปีปทุม",
    subDistrict: "โคกสีทองหลาง"
  },
  {
    code: 441001,
    province: "มหาสารคาม",
    district: "อำเภอนาดูน",
    subDistrict: "นาดูน"
  },
  {
    code: 441002,
    province: "มหาสารคาม",
    district: "อำเภอนาดูน",
    subDistrict: "หนองไผ่"
  },
  {
    code: 441003,
    province: "มหาสารคาม",
    district: "อำเภอนาดูน",
    subDistrict: "หนองคู"
  },
  {
    code: 441004,
    province: "มหาสารคาม",
    district: "อำเภอนาดูน",
    subDistrict: "ดงบัง"
  },
  {
    code: 441005,
    province: "มหาสารคาม",
    district: "อำเภอนาดูน",
    subDistrict: "ดงดวน"
  },
  {
    code: 441006,
    province: "มหาสารคาม",
    district: "อำเภอนาดูน",
    subDistrict: "หัวดง"
  },
  {
    code: 441007,
    province: "มหาสารคาม",
    district: "อำเภอนาดูน",
    subDistrict: "ดงยาง"
  },
  {
    code: 441008,
    province: "มหาสารคาม",
    district: "อำเภอนาดูน",
    subDistrict: "กู่สันตรัตน์"
  },
  {
    code: 441009,
    province: "มหาสารคาม",
    district: "อำเภอนาดูน",
    subDistrict: "พระธาตุ"
  },
  {
    code: 441101,
    province: "มหาสารคาม",
    district: "อำเภอยางสีสุราช",
    subDistrict: "ยางสีสุราช"
  },
  {
    code: 441102,
    province: "มหาสารคาม",
    district: "อำเภอยางสีสุราช",
    subDistrict: "นาภู"
  },
  {
    code: 441103,
    province: "มหาสารคาม",
    district: "อำเภอยางสีสุราช",
    subDistrict: "แวงดง"
  },
  {
    code: 441104,
    province: "มหาสารคาม",
    district: "อำเภอยางสีสุราช",
    subDistrict: "บ้านกู่"
  },
  {
    code: 441105,
    province: "มหาสารคาม",
    district: "อำเภอยางสีสุราช",
    subDistrict: "ดงเมือง"
  },
  {
    code: 441106,
    province: "มหาสารคาม",
    district: "อำเภอยางสีสุราช",
    subDistrict: "สร้างแซ่ง"
  },
  {
    code: 441107,
    province: "มหาสารคาม",
    district: "อำเภอยางสีสุราช",
    subDistrict: "หนองบัวสันตุ"
  },
  {
    code: 441201,
    province: "มหาสารคาม",
    district: "อำเภอกุดรัง",
    subDistrict: "กุดรัง"
  },
  {
    code: 441202,
    province: "มหาสารคาม",
    district: "อำเภอกุดรัง",
    subDistrict: "นาโพธิ์"
  },
  {
    code: 441203,
    province: "มหาสารคาม",
    district: "อำเภอกุดรัง",
    subDistrict: "เลิงแฝก"
  },
  {
    code: 441204,
    province: "มหาสารคาม",
    district: "อำเภอกุดรัง",
    subDistrict: "หนองแวง"
  },
  {
    code: 441205,
    province: "มหาสารคาม",
    district: "อำเภอกุดรัง",
    subDistrict: "ห้วยเตย"
  },
  {
    code: 441301,
    province: "มหาสารคาม",
    district: "อำเภอชื่นชม",
    subDistrict: "ชื่นชม"
  },
  {
    code: 441302,
    province: "มหาสารคาม",
    district: "อำเภอชื่นชม",
    subDistrict: "กุดปลาดุก"
  },
  {
    code: 441303,
    province: "มหาสารคาม",
    district: "อำเภอชื่นชม",
    subDistrict: "เหล่าดอกไม้"
  },
  {
    code: 441304,
    province: "มหาสารคาม",
    district: "อำเภอชื่นชม",
    subDistrict: "หนองกุง"
  },
  {
    code: 450101,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "ในเมือง"
  },
  {
    code: 450102,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "รอบเมือง"
  },
  {
    code: 450103,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "เหนือเมือง"
  },
  {
    code: 450104,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "ขอนแก่น"
  },
  {
    code: 450105,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "นาโพธิ์"
  },
  {
    code: 450106,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "สะอาดสมบูรณ์"
  },
  {
    code: 450108,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "สีแก้ว"
  },
  {
    code: 450109,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "ปอภาร  (ปอพาน)"
  },
  {
    code: 450110,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "โนนรัง"
  },
  {
    code: 450117,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "หนองแก้ว"
  },
  {
    code: 450118,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "หนองแวง"
  },
  {
    code: 450120,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "ดงลาน"
  },
  {
    code: 450123,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "แคนใหญ่"
  },
  {
    code: 450124,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "โนนตาล"
  },
  {
    code: 450125,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองร้อยเอ็ด",
    subDistrict: "เมืองทอง"
  },
  {
    code: 450201,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "เกษตรวิสัย"
  },
  {
    code: 450202,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "เมืองบัว"
  },
  {
    code: 450203,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "เหล่าหลวง"
  },
  {
    code: 450204,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "สิงห์โคก"
  },
  {
    code: 450205,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "ดงครั่งใหญ่"
  },
  {
    code: 450206,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "บ้านฝาง"
  },
  {
    code: 450207,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "หนองแวง"
  },
  {
    code: 450208,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "กำแพง"
  },
  {
    code: 450209,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "กู่กาสิงห์"
  },
  {
    code: 450210,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "น้ำอ้อม"
  },
  {
    code: 450211,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "โนนสว่าง"
  },
  {
    code: 450212,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "ทุ่งทอง"
  },
  {
    code: 450213,
    province: "ร้อยเอ็ด",
    district: "อำเภอเกษตรวิสัย",
    subDistrict: "ดงครั่งน้อย"
  },
  {
    code: 450301,
    province: "ร้อยเอ็ด",
    district: "อำเภอปทุมรัตต์",
    subDistrict: "บัวแดง"
  },
  {
    code: 450302,
    province: "ร้อยเอ็ด",
    district: "อำเภอปทุมรัตต์",
    subDistrict: "ดอกล้ำ"
  },
  {
    code: 450303,
    province: "ร้อยเอ็ด",
    district: "อำเภอปทุมรัตต์",
    subDistrict: "หนองแคน"
  },
  {
    code: 450304,
    province: "ร้อยเอ็ด",
    district: "อำเภอปทุมรัตต์",
    subDistrict: "โพนสูง"
  },
  {
    code: 450305,
    province: "ร้อยเอ็ด",
    district: "อำเภอปทุมรัตต์",
    subDistrict: "โนนสวรรค์"
  },
  {
    code: 450306,
    province: "ร้อยเอ็ด",
    district: "อำเภอปทุมรัตต์",
    subDistrict: "สระบัว"
  },
  {
    code: 450307,
    province: "ร้อยเอ็ด",
    district: "อำเภอปทุมรัตต์",
    subDistrict: "โนนสง่า"
  },
  {
    code: 450308,
    province: "ร้อยเอ็ด",
    district: "อำเภอปทุมรัตต์",
    subDistrict: "ขี้เหล็ก"
  },
  {
    code: 450401,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "หัวช้าง"
  },
  {
    code: 450402,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "หนองผือ"
  },
  {
    code: 450403,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "เมืองหงส์"
  },
  {
    code: 450404,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "โคกล่าม"
  },
  {
    code: 450405,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "น้ำใส"
  },
  {
    code: 450406,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "ดงแดง"
  },
  {
    code: 450407,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "ดงกลาง"
  },
  {
    code: 450408,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "ป่าสังข์"
  },
  {
    code: 450409,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "อีง่อง"
  },
  {
    code: 450410,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "ลิ้นฟ้า"
  },
  {
    code: 450411,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "ดู่น้อย"
  },
  {
    code: 450412,
    province: "ร้อยเอ็ด",
    district: "อำเภอจตุรพักตรพิมาน",
    subDistrict: "ศรีโคตร"
  },
  {
    code: 450501,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "นิเวศน์"
  },
  {
    code: 450502,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "ธงธานี"
  },
  {
    code: 450503,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "หนองไผ่"
  },
  {
    code: 450504,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "ธวัชบุรี"
  },
  {
    code: 450506,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "อุ่มเม้า"
  },
  {
    code: 450507,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "มะอึ"
  },
  {
    code: 450510,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "เขวาทุ่ง"
  },
  {
    code: 450515,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "ไพศาล"
  },
  {
    code: 450517,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "เมืองน้อย"
  },
  {
    code: 450520,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "บึงนคร"
  },
  {
    code: 450522,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "ราชธานี"
  },
  {
    code: 450524,
    province: "ร้อยเอ็ด",
    district: "อำเภอธวัชบุรี",
    subDistrict: "หนองพอก"
  },
  {
    code: 450601,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "พนมไพร"
  },
  {
    code: 450602,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "แสนสุข"
  },
  {
    code: 450603,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "กุดน้ำใส"
  },
  {
    code: 450604,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "หนองทัพไทย"
  },
  {
    code: 450605,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "โพธิ์ใหญ่"
  },
  {
    code: 450606,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "วารีสวัสดิ์"
  },
  {
    code: 450607,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "โคกสว่าง"
  },
  {
    code: 450611,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "โพธิ์ชัย"
  },
  {
    code: 450612,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "นานวล"
  },
  {
    code: 450613,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "คำไฮ"
  },
  {
    code: 450614,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "สระแก้ว"
  },
  {
    code: 450615,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "ค้อใหญ่"
  },
  {
    code: 450617,
    province: "ร้อยเอ็ด",
    district: "อำเภอพนมไพร",
    subDistrict: "ชานุวรรณ"
  },
  {
    code: 450701,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "แวง"
  },
  {
    code: 450702,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "โคกกกม่วง"
  },
  {
    code: 450703,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "นาอุดม"
  },
  {
    code: 450704,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "สว่าง"
  },
  {
    code: 450705,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "หนองใหญ่"
  },
  {
    code: 450706,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "โพธิ์ทอง"
  },
  {
    code: 450707,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "โนนชัยศรี"
  },
  {
    code: 450708,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "โพธิ์ศรีสว่าง"
  },
  {
    code: 450709,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "อุ่มเม่า"
  },
  {
    code: 450710,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "คำนาดี"
  },
  {
    code: 450711,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "พรมสวรรค์"
  },
  {
    code: 450712,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "สระนกแก้ว"
  },
  {
    code: 450713,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "วังสามัคคี"
  },
  {
    code: 450714,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทอง",
    subDistrict: "โคกสูง"
  },
  {
    code: 450801,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพธิ์ชัย",
    subDistrict: "ขามเปี้ย"
  },
  {
    code: 450802,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพธิ์ชัย",
    subDistrict: "เชียงใหม่"
  },
  {
    code: 450803,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพธิ์ชัย",
    subDistrict: "บัวคำ"
  },
  {
    code: 450804,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพธิ์ชัย",
    subDistrict: "อัคคะคำ"
  },
  {
    code: 450805,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพธิ์ชัย",
    subDistrict: "สะอาด"
  },
  {
    code: 450806,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพธิ์ชัย",
    subDistrict: "คำพอุง"
  },
  {
    code: 450807,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพธิ์ชัย",
    subDistrict: "หนองตาไก้"
  },
  {
    code: 450808,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพธิ์ชัย",
    subDistrict: "ดอนโอง"
  },
  {
    code: 450809,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพธิ์ชัย",
    subDistrict: "โพธิ์ศรี"
  },
  {
    code: 450901,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองพอก",
    subDistrict: "หนองพอก"
  },
  {
    code: 450902,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองพอก",
    subDistrict: "บึงงาม"
  },
  {
    code: 450903,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองพอก",
    subDistrict: "ภูเขาทอง"
  },
  {
    code: 450904,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองพอก",
    subDistrict: "กกโพธิ์"
  },
  {
    code: 450905,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองพอก",
    subDistrict: "โคกสว่าง"
  },
  {
    code: 450906,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองพอก",
    subDistrict: "หนองขุ่นใหญ่"
  },
  {
    code: 450907,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองพอก",
    subDistrict: "รอบเมือง"
  },
  {
    code: 450908,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองพอก",
    subDistrict: "ผาน้ำย้อย"
  },
  {
    code: 450909,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองพอก",
    subDistrict: "ท่าสีดา"
  },
  {
    code: 451001,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "กลาง"
  },
  {
    code: 451002,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "นางาม"
  },
  {
    code: 451003,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "เมืองไพร"
  },
  {
    code: 451004,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "นาแซง"
  },
  {
    code: 451005,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "นาเมือง"
  },
  {
    code: 451006,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "วังหลวง"
  },
  {
    code: 451007,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "ท่าม่วง"
  },
  {
    code: 451008,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "ขวาว"
  },
  {
    code: 451009,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "โพธิ์ทอง"
  },
  {
    code: 451010,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "ภูเงิน"
  },
  {
    code: 451011,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "เกาะแก้ว"
  },
  {
    code: 451012,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "นาเลิง"
  },
  {
    code: 451013,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "เหล่าน้อย"
  },
  {
    code: 451014,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "ศรีวิลัย"
  },
  {
    code: 451015,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "หนองหลวง"
  },
  {
    code: 451016,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "พรสวรรค์"
  },
  {
    code: 451017,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "ขวัญเมือง"
  },
  {
    code: 451018,
    province: "ร้อยเอ็ด",
    district: "อำเภอเสลภูมิ",
    subDistrict: "บึงเกลือ"
  },
  {
    code: 451101,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "สระคู"
  },
  {
    code: 451102,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "ดอกไม้"
  },
  {
    code: 451103,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "นาใหญ่"
  },
  {
    code: 451104,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "หินกอง"
  },
  {
    code: 451105,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "เมืองทุ่ง"
  },
  {
    code: 451106,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "หัวโทน"
  },
  {
    code: 451107,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "บ่อพันขัน"
  },
  {
    code: 451108,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "ทุ่งหลวง"
  },
  {
    code: 451109,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "หัวช้าง"
  },
  {
    code: 451110,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "น้ำคำ"
  },
  {
    code: 451111,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "ห้วยหินลาด"
  },
  {
    code: 451112,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "ช้างเผือก"
  },
  {
    code: 451113,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "ทุ่งกุลา"
  },
  {
    code: 451114,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "ทุ่งศรีเมือง"
  },
  {
    code: 451115,
    province: "ร้อยเอ็ด",
    district: "อำเภอสุวรรณภูมิ",
    subDistrict: "จำปาขัน"
  },
  {
    code: 451201,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองสรวง",
    subDistrict: "หนองผือ"
  },
  {
    code: 451202,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองสรวง",
    subDistrict: "หนองหิน"
  },
  {
    code: 451203,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองสรวง",
    subDistrict: "คูเมือง"
  },
  {
    code: 451204,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองสรวง",
    subDistrict: "กกกุง"
  },
  {
    code: 451205,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมืองสรวง",
    subDistrict: "เมืองสรวง"
  },
  {
    code: 451301,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทราย",
    subDistrict: "โพนทราย"
  },
  {
    code: 451302,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทราย",
    subDistrict: "สามขา"
  },
  {
    code: 451303,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทราย",
    subDistrict: "ศรีสว่าง"
  },
  {
    code: 451304,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทราย",
    subDistrict: "ยางคำ"
  },
  {
    code: 451305,
    province: "ร้อยเอ็ด",
    district: "อำเภอโพนทราย",
    subDistrict: "ท่าหาดยาว"
  },
  {
    code: 451401,
    province: "ร้อยเอ็ด",
    district: "อำเภออาจสามารถ",
    subDistrict: "อาจสามารถ"
  },
  {
    code: 451402,
    province: "ร้อยเอ็ด",
    district: "อำเภออาจสามารถ",
    subDistrict: "โพนเมือง"
  },
  {
    code: 451403,
    province: "ร้อยเอ็ด",
    district: "อำเภออาจสามารถ",
    subDistrict: "บ้านแจ้ง"
  },
  {
    code: 451404,
    province: "ร้อยเอ็ด",
    district: "อำเภออาจสามารถ",
    subDistrict: "หน่อม"
  },
  {
    code: 451405,
    province: "ร้อยเอ็ด",
    district: "อำเภออาจสามารถ",
    subDistrict: "หนองหมื่นถ่าน"
  },
  {
    code: 451406,
    province: "ร้อยเอ็ด",
    district: "อำเภออาจสามารถ",
    subDistrict: "หนองขาม"
  },
  {
    code: 451407,
    province: "ร้อยเอ็ด",
    district: "อำเภออาจสามารถ",
    subDistrict: "โหรา"
  },
  {
    code: 451408,
    province: "ร้อยเอ็ด",
    district: "อำเภออาจสามารถ",
    subDistrict: "หนองบัว"
  },
  {
    code: 451409,
    province: "ร้อยเอ็ด",
    district: "อำเภออาจสามารถ",
    subDistrict: "ขี้เหล็ก"
  },
  {
    code: 451410,
    province: "ร้อยเอ็ด",
    district: "อำเภออาจสามารถ",
    subDistrict: "บ้านดู่"
  },
  {
    code: 451501,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมยวดี",
    subDistrict: "เมยวดี"
  },
  {
    code: 451502,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมยวดี",
    subDistrict: "ชุมพร"
  },
  {
    code: 451503,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมยวดี",
    subDistrict: "บุ่งเลิศ"
  },
  {
    code: 451504,
    province: "ร้อยเอ็ด",
    district: "อำเภอเมยวดี",
    subDistrict: "ชมสะอาด"
  },
  {
    code: 451601,
    province: "ร้อยเอ็ด",
    district: "อำเภอศรีสมเด็จ",
    subDistrict: "โพธิ์ทอง"
  },
  {
    code: 451602,
    province: "ร้อยเอ็ด",
    district: "อำเภอศรีสมเด็จ",
    subDistrict: "ศรีสมเด็จ"
  },
  {
    code: 451603,
    province: "ร้อยเอ็ด",
    district: "อำเภอศรีสมเด็จ",
    subDistrict: "เมืองเปลือย"
  },
  {
    code: 451604,
    province: "ร้อยเอ็ด",
    district: "อำเภอศรีสมเด็จ",
    subDistrict: "หนองใหญ่"
  },
  {
    code: 451605,
    province: "ร้อยเอ็ด",
    district: "อำเภอศรีสมเด็จ",
    subDistrict: "สวนจิก"
  },
  {
    code: 451606,
    province: "ร้อยเอ็ด",
    district: "อำเภอศรีสมเด็จ",
    subDistrict: "โพธิ์สัย"
  },
  {
    code: 451607,
    province: "ร้อยเอ็ด",
    district: "อำเภอศรีสมเด็จ",
    subDistrict: "หนองแวงควง"
  },
  {
    code: 451608,
    province: "ร้อยเอ็ด",
    district: "อำเภอศรีสมเด็จ",
    subDistrict: "บ้านบาก"
  },
  {
    code: 451701,
    province: "ร้อยเอ็ด",
    district: "อำเภอจังหาร",
    subDistrict: "ดินดำ"
  },
  {
    code: 451702,
    province: "ร้อยเอ็ด",
    district: "อำเภอจังหาร",
    subDistrict: "ปาฝา"
  },
  {
    code: 451703,
    province: "ร้อยเอ็ด",
    district: "อำเภอจังหาร",
    subDistrict: "ม่วงลาด"
  },
  {
    code: 451704,
    province: "ร้อยเอ็ด",
    district: "อำเภอจังหาร",
    subDistrict: "จังหาร"
  },
  {
    code: 451705,
    province: "ร้อยเอ็ด",
    district: "อำเภอจังหาร",
    subDistrict: "ดงสิงห์"
  },
  {
    code: 451706,
    province: "ร้อยเอ็ด",
    district: "อำเภอจังหาร",
    subDistrict: "ยางใหญ่"
  },
  {
    code: 451707,
    province: "ร้อยเอ็ด",
    district: "อำเภอจังหาร",
    subDistrict: "ผักแว่น"
  },
  {
    code: 451708,
    province: "ร้อยเอ็ด",
    district: "อำเภอจังหาร",
    subDistrict: "แสนชาติ"
  },
  {
    code: 451801,
    province: "ร้อยเอ็ด",
    district: "อำเภอเชียงขวัญ",
    subDistrict: "เชียงขวัญ"
  },
  {
    code: 451802,
    province: "ร้อยเอ็ด",
    district: "อำเภอเชียงขวัญ",
    subDistrict: "พลับพลา"
  },
  {
    code: 451803,
    province: "ร้อยเอ็ด",
    district: "อำเภอเชียงขวัญ",
    subDistrict: "พระธาตุ"
  },
  {
    code: 451804,
    province: "ร้อยเอ็ด",
    district: "อำเภอเชียงขวัญ",
    subDistrict: "พระเจ้า"
  },
  {
    code: 451805,
    province: "ร้อยเอ็ด",
    district: "อำเภอเชียงขวัญ",
    subDistrict: "หมูม้น"
  },
  {
    code: 451806,
    province: "ร้อยเอ็ด",
    district: "อำเภอเชียงขวัญ",
    subDistrict: "บ้านเขือง"
  },
  {
    code: 451901,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองฮี",
    subDistrict: "หนองฮี"
  },
  {
    code: 451902,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองฮี",
    subDistrict: "สาวแห"
  },
  {
    code: 451903,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองฮี",
    subDistrict: "ดูกอึ่ง"
  },
  {
    code: 451904,
    province: "ร้อยเอ็ด",
    district: "อำเภอหนองฮี",
    subDistrict: "เด่นราษฎร์"
  },
  {
    code: 452001,
    province: "ร้อยเอ็ด",
    district: "อำเภอทุ่งเขาหลวง",
    subDistrict: "ทุ่งเขาหลวง"
  },
  {
    code: 452002,
    province: "ร้อยเอ็ด",
    district: "อำเภอทุ่งเขาหลวง",
    subDistrict: "เทอดไทย"
  },
  {
    code: 452003,
    province: "ร้อยเอ็ด",
    district: "อำเภอทุ่งเขาหลวง",
    subDistrict: "บึงงาม"
  },
  {
    code: 452004,
    province: "ร้อยเอ็ด",
    district: "อำเภอทุ่งเขาหลวง",
    subDistrict: "มะบ้า"
  },
  {
    code: 452005,
    province: "ร้อยเอ็ด",
    district: "อำเภอทุ่งเขาหลวง",
    subDistrict: "เหล่า"
  },
  {
    code: 460101,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "กาฬสินธุ์"
  },
  {
    code: 460102,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "เหนือ"
  },
  {
    code: 460103,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "หลุบ"
  },
  {
    code: 460104,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "ไผ่"
  },
  {
    code: 460105,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "ลำปาว"
  },
  {
    code: 460106,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "ลำพาน"
  },
  {
    code: 460107,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "เชียงเครือ"
  },
  {
    code: 460108,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "บึงวิชัย"
  },
  {
    code: 460109,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "ห้วยโพธิ์"
  },
  {
    code: 460111,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "ภูปอ"
  },
  {
    code: 460113,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "ภูดิน"
  },
  {
    code: 460115,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "หนองกุง"
  },
  {
    code: 460116,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "กลางหมื่น"
  },
  {
    code: 460117,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "ขมิ้น"
  },
  {
    code: 460119,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "โพนทอง"
  },
  {
    code: 460120,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "นาจารย์"
  },
  {
    code: 460121,
    province: "กาฬสินธุ์",
    district: "อำเภอเมืองกาฬสินธุ์",
    subDistrict: "ลำคลอง"
  },
  {
    code: 460201,
    province: "กาฬสินธุ์",
    district: "อำเภอนามน",
    subDistrict: "นามน"
  },
  {
    code: 460202,
    province: "กาฬสินธุ์",
    district: "อำเภอนามน",
    subDistrict: "ยอดแกง"
  },
  {
    code: 460203,
    province: "กาฬสินธุ์",
    district: "อำเภอนามน",
    subDistrict: "สงเปลือย"
  },
  {
    code: 460204,
    province: "กาฬสินธุ์",
    district: "อำเภอนามน",
    subDistrict: "หลักเหลี่ยม"
  },
  {
    code: 460205,
    province: "กาฬสินธุ์",
    district: "อำเภอนามน",
    subDistrict: "หนองบัว"
  },
  {
    code: 460301,
    province: "กาฬสินธุ์",
    district: "อำเภอกมลาไสย",
    subDistrict: "กมลาไสย"
  },
  {
    code: 460302,
    province: "กาฬสินธุ์",
    district: "อำเภอกมลาไสย",
    subDistrict: "หลักเมือง"
  },
  {
    code: 460303,
    province: "กาฬสินธุ์",
    district: "อำเภอกมลาไสย",
    subDistrict: "โพนงาม"
  },
  {
    code: 460304,
    province: "กาฬสินธุ์",
    district: "อำเภอกมลาไสย",
    subDistrict: "ดงลิง"
  },
  {
    code: 460305,
    province: "กาฬสินธุ์",
    district: "อำเภอกมลาไสย",
    subDistrict: "ธัญญา"
  },
  {
    code: 460308,
    province: "กาฬสินธุ์",
    district: "อำเภอกมลาไสย",
    subDistrict: "หนองแปน"
  },
  {
    code: 460310,
    province: "กาฬสินธุ์",
    district: "อำเภอกมลาไสย",
    subDistrict: "เจ้าท่า"
  },
  {
    code: 460311,
    province: "กาฬสินธุ์",
    district: "อำเภอกมลาไสย",
    subDistrict: "โคกสมบูรณ์"
  },
  {
    code: 460401,
    province: "กาฬสินธุ์",
    district: "อำเภอร่องคำ",
    subDistrict: "ร่องคำ"
  },
  {
    code: 460402,
    province: "กาฬสินธุ์",
    district: "อำเภอร่องคำ",
    subDistrict: "สามัคคี"
  },
  {
    code: 460403,
    province: "กาฬสินธุ์",
    district: "อำเภอร่องคำ",
    subDistrict: "เหล่าอ้อย"
  },
  {
    code: 460501,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "บัวขาว"
  },
  {
    code: 460502,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "แจนแลน"
  },
  {
    code: 460503,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "เหล่าใหญ่"
  },
  {
    code: 460504,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "จุมจัง"
  },
  {
    code: 460505,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "เหล่าไฮงาม"
  },
  {
    code: 460506,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "กุดหว้า"
  },
  {
    code: 460507,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "สามขา"
  },
  {
    code: 460508,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "นาขาม"
  },
  {
    code: 460509,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "หนองห้าง"
  },
  {
    code: 460510,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "นาโก"
  },
  {
    code: 460511,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "สมสะอาด"
  },
  {
    code: 460512,
    province: "กาฬสินธุ์",
    district: "อำเภอกุฉินารายณ์",
    subDistrict: "กุดค้าว"
  },
  {
    code: 460601,
    province: "กาฬสินธุ์",
    district: "อำเภอเขาวง",
    subDistrict: "คุ้มเก่า"
  },
  {
    code: 460602,
    province: "กาฬสินธุ์",
    district: "อำเภอเขาวง",
    subDistrict: "สงเปลือย"
  },
  {
    code: 460603,
    province: "กาฬสินธุ์",
    district: "อำเภอเขาวง",
    subDistrict: "หนองผือ"
  },
  {
    code: 460606,
    province: "กาฬสินธุ์",
    district: "อำเภอเขาวง",
    subDistrict: "กุดสิมคุ้มใหม่"
  },
  {
    code: 460608,
    province: "กาฬสินธุ์",
    district: "อำเภอเขาวง",
    subDistrict: "สระพังทอง"
  },
  {
    code: 460611,
    province: "กาฬสินธุ์",
    district: "อำเภอเขาวง",
    subDistrict: "กุดปลาค้าว"
  },
  {
    code: 460701,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "ยางตลาด"
  },
  {
    code: 460702,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "หัวงัว"
  },
  {
    code: 460703,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "อุ่มเม่า"
  },
  {
    code: 460704,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "บัวบาน"
  },
  {
    code: 460705,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "เว่อ"
  },
  {
    code: 460706,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "อิตื้อ"
  },
  {
    code: 460707,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "หัวนาคำ"
  },
  {
    code: 460708,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "หนองอิเฒ่า"
  },
  {
    code: 460709,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "ดอนสมบูรณ์"
  },
  {
    code: 460710,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "นาเชือก"
  },
  {
    code: 460711,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "คลองขาม"
  },
  {
    code: 460712,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "เขาพระนอน"
  },
  {
    code: 460713,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "นาดี"
  },
  {
    code: 460714,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "โนนสูง"
  },
  {
    code: 460715,
    province: "กาฬสินธุ์",
    district: "อำเภอยางตลาด",
    subDistrict: "หนองตอกแป้น"
  },
  {
    code: 460801,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยเม็ก",
    subDistrict: "ห้วยเม็ก"
  },
  {
    code: 460802,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยเม็ก",
    subDistrict: "คำใหญ่"
  },
  {
    code: 460803,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยเม็ก",
    subDistrict: "กุดโดน"
  },
  {
    code: 460804,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยเม็ก",
    subDistrict: "บึงนาเรียง"
  },
  {
    code: 460805,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยเม็ก",
    subDistrict: "หัวหิน"
  },
  {
    code: 460806,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยเม็ก",
    subDistrict: "พิมูล"
  },
  {
    code: 460807,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยเม็ก",
    subDistrict: "คำเหมือดแก้ว"
  },
  {
    code: 460808,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยเม็ก",
    subDistrict: "โนนสะอาด"
  },
  {
    code: 460809,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยเม็ก",
    subDistrict: "ทรายทอง"
  },
  {
    code: 460901,
    province: "กาฬสินธุ์",
    district: "อำเภอสหัสขันธ์",
    subDistrict: "ภูสิงห์"
  },
  {
    code: 460902,
    province: "กาฬสินธุ์",
    district: "อำเภอสหัสขันธ์",
    subDistrict: "สหัสขันธ์"
  },
  {
    code: 460903,
    province: "กาฬสินธุ์",
    district: "อำเภอสหัสขันธ์",
    subDistrict: "นามะเขือ"
  },
  {
    code: 460904,
    province: "กาฬสินธุ์",
    district: "อำเภอสหัสขันธ์",
    subDistrict: "โนนศิลา"
  },
  {
    code: 460905,
    province: "กาฬสินธุ์",
    district: "อำเภอสหัสขันธ์",
    subDistrict: "นิคม"
  },
  {
    code: 460906,
    province: "กาฬสินธุ์",
    district: "อำเภอสหัสขันธ์",
    subDistrict: "โนนแหลมทอง"
  },
  {
    code: 460907,
    province: "กาฬสินธุ์",
    district: "อำเภอสหัสขันธ์",
    subDistrict: "โนนบุรี"
  },
  {
    code: 460908,
    province: "กาฬสินธุ์",
    district: "อำเภอสหัสขันธ์",
    subDistrict: "โนนน้ำเกลี้ยง"
  },
  {
    code: 461001,
    province: "กาฬสินธุ์",
    district: "อำเภอคำม่วง",
    subDistrict: "ทุ่งคลอง"
  },
  {
    code: 461002,
    province: "กาฬสินธุ์",
    district: "อำเภอคำม่วง",
    subDistrict: "โพน"
  },
  {
    code: 461005,
    province: "กาฬสินธุ์",
    district: "อำเภอคำม่วง",
    subDistrict: "ดินจี่"
  },
  {
    code: 461006,
    province: "กาฬสินธุ์",
    district: "อำเภอคำม่วง",
    subDistrict: "นาบอน"
  },
  {
    code: 461007,
    province: "กาฬสินธุ์",
    district: "อำเภอคำม่วง",
    subDistrict: "นาทัน"
  },
  {
    code: 461009,
    province: "กาฬสินธุ์",
    district: "อำเภอคำม่วง",
    subDistrict: "เนินยาง"
  },
  {
    code: 461101,
    province: "กาฬสินธุ์",
    district: "อำเภอท่าคันโท",
    subDistrict: "ท่าคันโท"
  },
  {
    code: 461102,
    province: "กาฬสินธุ์",
    district: "อำเภอท่าคันโท",
    subDistrict: "กุงเก่า"
  },
  {
    code: 461103,
    province: "กาฬสินธุ์",
    district: "อำเภอท่าคันโท",
    subDistrict: "ยางอู้ม"
  },
  {
    code: 461104,
    province: "กาฬสินธุ์",
    district: "อำเภอท่าคันโท",
    subDistrict: "กุดจิก"
  },
  {
    code: 461105,
    province: "กาฬสินธุ์",
    district: "อำเภอท่าคันโท",
    subDistrict: "นาตาล"
  },
  {
    code: 461106,
    province: "กาฬสินธุ์",
    district: "อำเภอท่าคันโท",
    subDistrict: "ดงสมบูรณ์"
  },
  {
    code: 461201,
    province: "กาฬสินธุ์",
    district: "อำเภอหนองกุงศรี",
    subDistrict: "หนองกุงศรี"
  },
  {
    code: 461202,
    province: "กาฬสินธุ์",
    district: "อำเภอหนองกุงศรี",
    subDistrict: "หนองบัว"
  },
  {
    code: 461203,
    province: "กาฬสินธุ์",
    district: "อำเภอหนองกุงศรี",
    subDistrict: "โคกเครือ"
  },
  {
    code: 461204,
    province: "กาฬสินธุ์",
    district: "อำเภอหนองกุงศรี",
    subDistrict: "หนองสรวง"
  },
  {
    code: 461205,
    province: "กาฬสินธุ์",
    district: "อำเภอหนองกุงศรี",
    subDistrict: "เสาเล้า"
  },
  {
    code: 461206,
    province: "กาฬสินธุ์",
    district: "อำเภอหนองกุงศรี",
    subDistrict: "หนองใหญ่"
  },
  {
    code: 461207,
    province: "กาฬสินธุ์",
    district: "อำเภอหนองกุงศรี",
    subDistrict: "ดงมูล"
  },
  {
    code: 461208,
    province: "กาฬสินธุ์",
    district: "อำเภอหนองกุงศรี",
    subDistrict: "ลำหนองแสน"
  },
  {
    code: 461209,
    province: "กาฬสินธุ์",
    district: "อำเภอหนองกุงศรี",
    subDistrict: "หนองหิน"
  },
  {
    code: 461301,
    province: "กาฬสินธุ์",
    district: "อำเภอสมเด็จ",
    subDistrict: "สมเด็จ"
  },
  {
    code: 461302,
    province: "กาฬสินธุ์",
    district: "อำเภอสมเด็จ",
    subDistrict: "หนองแวง"
  },
  {
    code: 461303,
    province: "กาฬสินธุ์",
    district: "อำเภอสมเด็จ",
    subDistrict: "แซงบาดาล"
  },
  {
    code: 461304,
    province: "กาฬสินธุ์",
    district: "อำเภอสมเด็จ",
    subDistrict: "มหาไชย"
  },
  {
    code: 461305,
    province: "กาฬสินธุ์",
    district: "อำเภอสมเด็จ",
    subDistrict: "หมูม่น"
  },
  {
    code: 461306,
    province: "กาฬสินธุ์",
    district: "อำเภอสมเด็จ",
    subDistrict: "ผาเสวย"
  },
  {
    code: 461307,
    province: "กาฬสินธุ์",
    district: "อำเภอสมเด็จ",
    subDistrict: "ศรีสมเด็จ"
  },
  {
    code: 461308,
    province: "กาฬสินธุ์",
    district: "อำเภอสมเด็จ",
    subDistrict: "ลำห้วยหลัว"
  },
  {
    code: 461401,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยผึ้ง",
    subDistrict: "คำบง"
  },
  {
    code: 461402,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยผึ้ง",
    subDistrict: "ไค้นุ่น"
  },
  {
    code: 461403,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยผึ้ง",
    subDistrict: "นิคมห้วยผึ้ง"
  },
  {
    code: 461404,
    province: "กาฬสินธุ์",
    district: "อำเภอห้วยผึ้ง",
    subDistrict: "หนองอีบุตร"
  },
  {
    code: 461501,
    province: "กาฬสินธุ์",
    district: "อำเภอสามชัย",
    subDistrict: "สำราญ"
  },
  {
    code: 461502,
    province: "กาฬสินธุ์",
    district: "อำเภอสามชัย",
    subDistrict: "สำราญใต้"
  },
  {
    code: 461503,
    province: "กาฬสินธุ์",
    district: "อำเภอสามชัย",
    subDistrict: "คำสร้างเที่ยง"
  },
  {
    code: 461504,
    province: "กาฬสินธุ์",
    district: "อำเภอสามชัย",
    subDistrict: "หนองช้าง"
  },
  {
    code: 461601,
    province: "กาฬสินธุ์",
    district: "อำเภอนาคู",
    subDistrict: "นาคู"
  },
  {
    code: 461602,
    province: "กาฬสินธุ์",
    district: "อำเภอนาคู",
    subDistrict: "สายนาวัง"
  },
  {
    code: 461603,
    province: "กาฬสินธุ์",
    district: "อำเภอนาคู",
    subDistrict: "โนนนาจาน"
  },
  {
    code: 461604,
    province: "กาฬสินธุ์",
    district: "อำเภอนาคู",
    subDistrict: "บ่อแก้ว"
  },
  {
    code: 461605,
    province: "กาฬสินธุ์",
    district: "อำเภอนาคู",
    subDistrict: "ภูแล่นช้าง"
  },
  {
    code: 461701,
    province: "กาฬสินธุ์",
    district: "อำเภอดอนจาน",
    subDistrict: "ดอนจาน"
  },
  {
    code: 461702,
    province: "กาฬสินธุ์",
    district: "อำเภอดอนจาน",
    subDistrict: "สะอาดไชยศรี"
  },
  {
    code: 461703,
    province: "กาฬสินธุ์",
    district: "อำเภอดอนจาน",
    subDistrict: "ดงพยุง"
  },
  {
    code: 461704,
    province: "กาฬสินธุ์",
    district: "อำเภอดอนจาน",
    subDistrict: "ม่วงนา"
  },
  {
    code: 461705,
    province: "กาฬสินธุ์",
    district: "อำเภอดอนจาน",
    subDistrict: "นาจำปา"
  },
  {
    code: 461801,
    province: "กาฬสินธุ์",
    district: "อำเภอฆ้องชัย",
    subDistrict: "ฆ้องชัยพัฒนา"
  },
  {
    code: 461802,
    province: "กาฬสินธุ์",
    district: "อำเภอฆ้องชัย",
    subDistrict: "เหล่ากลาง"
  },
  {
    code: 461803,
    province: "กาฬสินธุ์",
    district: "อำเภอฆ้องชัย",
    subDistrict: "โคกสะอาด"
  },
  {
    code: 461804,
    province: "กาฬสินธุ์",
    district: "อำเภอฆ้องชัย",
    subDistrict: "โนนศิลาเลิง"
  },
  {
    code: 461805,
    province: "กาฬสินธุ์",
    district: "อำเภอฆ้องชัย",
    subDistrict: "ลำชี"
  },
  {
    code: 470101,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "ธาตุเชิงชุม"
  },
  {
    code: 470102,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "ขมิ้น"
  },
  {
    code: 470103,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "งิ้วด่อน"
  },
  {
    code: 470104,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "โนนหอม"
  },
  {
    code: 470106,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "เชียงเครือ"
  },
  {
    code: 470107,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "ท่าแร่"
  },
  {
    code: 470109,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "ม่วงลาย"
  },
  {
    code: 470111,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "ดงชน"
  },
  {
    code: 470112,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "ห้วยยาง"
  },
  {
    code: 470113,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "พังขว้าง"
  },
  {
    code: 470115,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "ดงมะไฟ"
  },
  {
    code: 470116,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "ธาตุนาเวง"
  },
  {
    code: 470117,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "เหล่าปอแดง"
  },
  {
    code: 470118,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "หนองลาด"
  },
  {
    code: 470120,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "ฮางโฮง"
  },
  {
    code: 470121,
    province: "สกลนคร",
    district: "อำเภอเมืองสกลนคร",
    subDistrict: "โคกก่อง"
  },
  {
    code: 470201,
    province: "สกลนคร",
    district: "อำเภอกุสุมาลย์",
    subDistrict: "กุสุมาลย์"
  },
  {
    code: 470202,
    province: "สกลนคร",
    district: "อำเภอกุสุมาลย์",
    subDistrict: "นาโพธิ์"
  },
  {
    code: 470203,
    province: "สกลนคร",
    district: "อำเภอกุสุมาลย์",
    subDistrict: "นาเพียง"
  },
  {
    code: 470204,
    province: "สกลนคร",
    district: "อำเภอกุสุมาลย์",
    subDistrict: "โพธิไพศาล"
  },
  {
    code: 470205,
    province: "สกลนคร",
    district: "อำเภอกุสุมาลย์",
    subDistrict: "อุ่มจาน"
  },
  {
    code: 470301,
    province: "สกลนคร",
    district: "อำเภอกุดบาก",
    subDistrict: "กุดบาก"
  },
  {
    code: 470303,
    province: "สกลนคร",
    district: "อำเภอกุดบาก",
    subDistrict: "นาม่อง"
  },
  {
    code: 470305,
    province: "สกลนคร",
    district: "อำเภอกุดบาก",
    subDistrict: "กุดไห"
  },
  {
    code: 470401,
    province: "สกลนคร",
    district: "อำเภอพรรณานิคม",
    subDistrict: "พรรณา"
  },
  {
    code: 470402,
    province: "สกลนคร",
    district: "อำเภอพรรณานิคม",
    subDistrict: "วังยาง"
  },
  {
    code: 470403,
    province: "สกลนคร",
    district: "อำเภอพรรณานิคม",
    subDistrict: "พอกน้อย"
  },
  {
    code: 470404,
    province: "สกลนคร",
    district: "อำเภอพรรณานิคม",
    subDistrict: "นาหัวบ่อ"
  },
  {
    code: 470405,
    province: "สกลนคร",
    district: "อำเภอพรรณานิคม",
    subDistrict: "ไร่"
  },
  {
    code: 470406,
    province: "สกลนคร",
    district: "อำเภอพรรณานิคม",
    subDistrict: "ช้างมิ่ง"
  },
  {
    code: 470407,
    province: "สกลนคร",
    district: "อำเภอพรรณานิคม",
    subDistrict: "นาใน"
  },
  {
    code: 470408,
    province: "สกลนคร",
    district: "อำเภอพรรณานิคม",
    subDistrict: "สว่าง"
  },
  {
    code: 470409,
    province: "สกลนคร",
    district: "อำเภอพรรณานิคม",
    subDistrict: "บะฮี"
  },
  {
    code: 470410,
    province: "สกลนคร",
    district: "อำเภอพรรณานิคม",
    subDistrict: "เชิงชุม"
  },
  {
    code: 470501,
    province: "สกลนคร",
    district: "อำเภอพังโคน",
    subDistrict: "พังโคน"
  },
  {
    code: 470502,
    province: "สกลนคร",
    district: "อำเภอพังโคน",
    subDistrict: "ม่วงไข่"
  },
  {
    code: 470503,
    province: "สกลนคร",
    district: "อำเภอพังโคน",
    subDistrict: "แร่"
  },
  {
    code: 470504,
    province: "สกลนคร",
    district: "อำเภอพังโคน",
    subDistrict: "ไฮหย่อง"
  },
  {
    code: 470505,
    province: "สกลนคร",
    district: "อำเภอพังโคน",
    subDistrict: "ต้นผึ้ง"
  },
  {
    code: 470601,
    province: "สกลนคร",
    district: "อำเภอวาริชภูมิ",
    subDistrict: "วาริชภูมิ"
  },
  {
    code: 470602,
    province: "สกลนคร",
    district: "อำเภอวาริชภูมิ",
    subDistrict: "ปลาโหล"
  },
  {
    code: 470603,
    province: "สกลนคร",
    district: "อำเภอวาริชภูมิ",
    subDistrict: "หนองลาด"
  },
  {
    code: 470604,
    province: "สกลนคร",
    district: "อำเภอวาริชภูมิ",
    subDistrict: "คำบ่อ"
  },
  {
    code: 470605,
    province: "สกลนคร",
    district: "อำเภอวาริชภูมิ",
    subDistrict: "ค้อเขียว"
  },
  {
    code: 470701,
    province: "สกลนคร",
    district: "อำเภอนิคมน้ำอูน",
    subDistrict: "นิคมน้ำอูน"
  },
  {
    code: 470702,
    province: "สกลนคร",
    district: "อำเภอนิคมน้ำอูน",
    subDistrict: "หนองปลิง"
  },
  {
    code: 470703,
    province: "สกลนคร",
    district: "อำเภอนิคมน้ำอูน",
    subDistrict: "หนองบัว"
  },
  {
    code: 470704,
    province: "สกลนคร",
    district: "อำเภอนิคมน้ำอูน",
    subDistrict: "สุวรรณคาม"
  },
  {
    code: 470801,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "วานรนิวาส"
  },
  {
    code: 470802,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "เดื่อศรีคันไชย"
  },
  {
    code: 470803,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "ขัวก่าย"
  },
  {
    code: 470804,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "หนองสนม"
  },
  {
    code: 470805,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "คูสะคาม"
  },
  {
    code: 470806,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "ธาตุ"
  },
  {
    code: 470807,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "หนองแวง"
  },
  {
    code: 470808,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "ศรีวิชัย"
  },
  {
    code: 470809,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "นาซอ"
  },
  {
    code: 470810,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "อินทร์แปลง"
  },
  {
    code: 470811,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "นาคำ"
  },
  {
    code: 470812,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "คอนสวรรค์"
  },
  {
    code: 470813,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "กุดเรือคำ"
  },
  {
    code: 470814,
    province: "สกลนคร",
    district: "อำเภอวานรนิวาส",
    subDistrict: "หนองแวงใต้"
  },
  {
    code: 470901,
    province: "สกลนคร",
    district: "อำเภอคำตากล้า",
    subDistrict: "คำตากล้า"
  },
  {
    code: 470902,
    province: "สกลนคร",
    district: "อำเภอคำตากล้า",
    subDistrict: "หนองบัวสิม"
  },
  {
    code: 470903,
    province: "สกลนคร",
    district: "อำเภอคำตากล้า",
    subDistrict: "นาแต้"
  },
  {
    code: 470904,
    province: "สกลนคร",
    district: "อำเภอคำตากล้า",
    subDistrict: "แพด"
  },
  {
    code: 471001,
    province: "สกลนคร",
    district: "อำเภอบ้านม่วง",
    subDistrict: "ม่วง"
  },
  {
    code: 471002,
    province: "สกลนคร",
    district: "อำเภอบ้านม่วง",
    subDistrict: "มาย"
  },
  {
    code: 471003,
    province: "สกลนคร",
    district: "อำเภอบ้านม่วง",
    subDistrict: "ดงหม้อทอง"
  },
  {
    code: 471004,
    province: "สกลนคร",
    district: "อำเภอบ้านม่วง",
    subDistrict: "ดงเหนือ"
  },
  {
    code: 471005,
    province: "สกลนคร",
    district: "อำเภอบ้านม่วง",
    subDistrict: "ดงหม้อทองใต้"
  },
  {
    code: 471006,
    province: "สกลนคร",
    district: "อำเภอบ้านม่วง",
    subDistrict: "ห้วยหลัว"
  },
  {
    code: 471007,
    province: "สกลนคร",
    district: "อำเภอบ้านม่วง",
    subDistrict: "โนนสะอาด"
  },
  {
    code: 471008,
    province: "สกลนคร",
    district: "อำเภอบ้านม่วง",
    subDistrict: "หนองกวั่ง"
  },
  {
    code: 471009,
    province: "สกลนคร",
    district: "อำเภอบ้านม่วง",
    subDistrict: "บ่อแก้ว"
  },
  {
    code: 471101,
    province: "สกลนคร",
    district: "อำเภออากาศอำนวย",
    subDistrict: "อากาศ"
  },
  {
    code: 471102,
    province: "สกลนคร",
    district: "อำเภออากาศอำนวย",
    subDistrict: "โพนแพง"
  },
  {
    code: 471103,
    province: "สกลนคร",
    district: "อำเภออากาศอำนวย",
    subDistrict: "วาใหญ่"
  },
  {
    code: 471104,
    province: "สกลนคร",
    district: "อำเภออากาศอำนวย",
    subDistrict: "โพนงาม"
  },
  {
    code: 471105,
    province: "สกลนคร",
    district: "อำเภออากาศอำนวย",
    subDistrict: "ท่าก้อน"
  },
  {
    code: 471106,
    province: "สกลนคร",
    district: "อำเภออากาศอำนวย",
    subDistrict: "นาฮี"
  },
  {
    code: 471107,
    province: "สกลนคร",
    district: "อำเภออากาศอำนวย",
    subDistrict: "บะหว้า"
  },
  {
    code: 471108,
    province: "สกลนคร",
    district: "อำเภออากาศอำนวย",
    subDistrict: "สามัคคีพัฒนา"
  },
  {
    code: 471201,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "สว่างแดนดิน"
  },
  {
    code: 471203,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "คำสะอาด"
  },
  {
    code: 471204,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "บ้านต้าย"
  },
  {
    code: 471206,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "บงเหนือ"
  },
  {
    code: 471207,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "โพนสูง"
  },
  {
    code: 471208,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "โคกสี"
  },
  {
    code: 471210,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "หนองหลวง"
  },
  {
    code: 471211,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "บงใต้"
  },
  {
    code: 471212,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "ค้อใต้"
  },
  {
    code: 471213,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "พันนา"
  },
  {
    code: 471214,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "แวง"
  },
  {
    code: 471215,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "ทรายมูล"
  },
  {
    code: 471216,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "ตาลโกน"
  },
  {
    code: 471217,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "ตาลเนิ้ง"
  },
  {
    code: 471220,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "ธาตุทอง"
  },
  {
    code: 471221,
    province: "สกลนคร",
    district: "อำเภอสว่างแดนดิน",
    subDistrict: "บ้านถ่อน"
  },
  {
    code: 471301,
    province: "สกลนคร",
    district: "อำเภอส่องดาว",
    subDistrict: "ส่องดาว"
  },
  {
    code: 471302,
    province: "สกลนคร",
    district: "อำเภอส่องดาว",
    subDistrict: "ท่าศิลา"
  },
  {
    code: 471303,
    province: "สกลนคร",
    district: "อำเภอส่องดาว",
    subDistrict: "วัฒนา"
  },
  {
    code: 471304,
    province: "สกลนคร",
    district: "อำเภอส่องดาว",
    subDistrict: "ปทุมวาปี"
  },
  {
    code: 471401,
    province: "สกลนคร",
    district: "อำเภอเต่างอย",
    subDistrict: "เต่างอย"
  },
  {
    code: 471402,
    province: "สกลนคร",
    district: "อำเภอเต่างอย",
    subDistrict: "บึงทวาย"
  },
  {
    code: 471403,
    province: "สกลนคร",
    district: "อำเภอเต่างอย",
    subDistrict: "นาตาล"
  },
  {
    code: 471404,
    province: "สกลนคร",
    district: "อำเภอเต่างอย",
    subDistrict: "จันทร์เพ็ญ"
  },
  {
    code: 471501,
    province: "สกลนคร",
    district: "อำเภอโคกศรีสุพรรณ",
    subDistrict: "ตองโขบ"
  },
  {
    code: 471502,
    province: "สกลนคร",
    district: "อำเภอโคกศรีสุพรรณ",
    subDistrict: "เหล่าโพนค้อ"
  },
  {
    code: 471503,
    province: "สกลนคร",
    district: "อำเภอโคกศรีสุพรรณ",
    subDistrict: "ด่านม่วงคำ"
  },
  {
    code: 471504,
    province: "สกลนคร",
    district: "อำเภอโคกศรีสุพรรณ",
    subDistrict: "แมดนาท่ม"
  },
  {
    code: 471601,
    province: "สกลนคร",
    district: "อำเภอเจริญศิลป์",
    subDistrict: "บ้านเหล่า"
  },
  {
    code: 471602,
    province: "สกลนคร",
    district: "อำเภอเจริญศิลป์",
    subDistrict: "เจริญศิลป์"
  },
  {
    code: 471603,
    province: "สกลนคร",
    district: "อำเภอเจริญศิลป์",
    subDistrict: "ทุ่งแก"
  },
  {
    code: 471604,
    province: "สกลนคร",
    district: "อำเภอเจริญศิลป์",
    subDistrict: "โคกศิลา"
  },
  {
    code: 471605,
    province: "สกลนคร",
    district: "อำเภอเจริญศิลป์",
    subDistrict: "หนองแปน"
  },
  {
    code: 471701,
    province: "สกลนคร",
    district: "อำเภอโพนนาแก้ว",
    subDistrict: "บ้านโพน"
  },
  {
    code: 471702,
    province: "สกลนคร",
    district: "อำเภอโพนนาแก้ว",
    subDistrict: "นาแก้ว"
  },
  {
    code: 471703,
    province: "สกลนคร",
    district: "อำเภอโพนนาแก้ว",
    subDistrict: "นาตงวัฒนา"
  },
  {
    code: 471704,
    province: "สกลนคร",
    district: "อำเภอโพนนาแก้ว",
    subDistrict: "บ้านแป้น"
  },
  {
    code: 471705,
    province: "สกลนคร",
    district: "อำเภอโพนนาแก้ว",
    subDistrict: "เชียงสือ"
  },
  {
    code: 471801,
    province: "สกลนคร",
    district: "อำเภอภูพาน",
    subDistrict: "สร้างค้อ"
  },
  {
    code: 471802,
    province: "สกลนคร",
    district: "อำเภอภูพาน",
    subDistrict: "หลุบเลา"
  },
  {
    code: 471803,
    province: "สกลนคร",
    district: "อำเภอภูพาน",
    subDistrict: "โคกภู"
  },
  {
    code: 471804,
    province: "สกลนคร",
    district: "อำเภอภูพาน",
    subDistrict: "กกปลาซิว"
  },
  {
    code: 480101,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "ในเมือง"
  },
  {
    code: 480102,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "หนองแสง"
  },
  {
    code: 480103,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "นาทราย"
  },
  {
    code: 480104,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "นาราชควาย"
  },
  {
    code: 480105,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "กุรุคุ"
  },
  {
    code: 480106,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "บ้านผึ้ง"
  },
  {
    code: 480107,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "อาจสามารถ"
  },
  {
    code: 480108,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "ขามเฒ่า"
  },
  {
    code: 480109,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "บ้านกลาง"
  },
  {
    code: 480110,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "ท่าค้อ"
  },
  {
    code: 480111,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "คำเตย"
  },
  {
    code: 480112,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "หนองญาติ"
  },
  {
    code: 480113,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "ดงขวาง"
  },
  {
    code: 480114,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "วังตามัว"
  },
  {
    code: 480115,
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    subDistrict: "โพธิ์ตาก"
  },
  {
    code: 480201,
    province: "นครพนม",
    district: "อำเภอปลาปาก",
    subDistrict: "ปลาปาก"
  },
  {
    code: 480202,
    province: "นครพนม",
    district: "อำเภอปลาปาก",
    subDistrict: "หนองฮี"
  },
  {
    code: 480203,
    province: "นครพนม",
    district: "อำเภอปลาปาก",
    subDistrict: "กุตาไก้"
  },
  {
    code: 480204,
    province: "นครพนม",
    district: "อำเภอปลาปาก",
    subDistrict: "โคกสว่าง"
  },
  {
    code: 480205,
    province: "นครพนม",
    district: "อำเภอปลาปาก",
    subDistrict: "โคกสูง"
  },
  {
    code: 480206,
    province: "นครพนม",
    district: "อำเภอปลาปาก",
    subDistrict: "มหาชัย"
  },
  {
    code: 480207,
    province: "นครพนม",
    district: "อำเภอปลาปาก",
    subDistrict: "นามะเขือ"
  },
  {
    code: 480208,
    province: "นครพนม",
    district: "อำเภอปลาปาก",
    subDistrict: "หนองเทาใหญ่"
  },
  {
    code: 480301,
    province: "นครพนม",
    district: "อำเภอท่าอุเทน",
    subDistrict: "ท่าอุเทน"
  },
  {
    code: 480302,
    province: "นครพนม",
    district: "อำเภอท่าอุเทน",
    subDistrict: "โนนตาล"
  },
  {
    code: 480303,
    province: "นครพนม",
    district: "อำเภอท่าอุเทน",
    subDistrict: "ท่าจำปา"
  },
  {
    code: 480304,
    province: "นครพนม",
    district: "อำเภอท่าอุเทน",
    subDistrict: "ไชยบุรี"
  },
  {
    code: 480305,
    province: "นครพนม",
    district: "อำเภอท่าอุเทน",
    subDistrict: "พนอม"
  },
  {
    code: 480306,
    province: "นครพนม",
    district: "อำเภอท่าอุเทน",
    subDistrict: "พะทาย"
  },
  {
    code: 480311,
    province: "นครพนม",
    district: "อำเภอท่าอุเทน",
    subDistrict: "เวินพระบาท"
  },
  {
    code: 480312,
    province: "นครพนม",
    district: "อำเภอท่าอุเทน",
    subDistrict: "รามราช"
  },
  {
    code: 480314,
    province: "นครพนม",
    district: "อำเภอท่าอุเทน",
    subDistrict: "หนองเทา"
  },
  {
    code: 480401,
    province: "นครพนม",
    district: "อำเภอบ้านแพง",
    subDistrict: "บ้านแพง"
  },
  {
    code: 480402,
    province: "นครพนม",
    district: "อำเภอบ้านแพง",
    subDistrict: "ไผ่ล้อม"
  },
  {
    code: 480403,
    province: "นครพนม",
    district: "อำเภอบ้านแพง",
    subDistrict: "โพนทอง"
  },
  {
    code: 480404,
    province: "นครพนม",
    district: "อำเภอบ้านแพง",
    subDistrict: "หนองแวง"
  },
  {
    code: 480408,
    province: "นครพนม",
    district: "อำเภอบ้านแพง",
    subDistrict: "นางัว"
  },
  {
    code: 480409,
    province: "นครพนม",
    district: "อำเภอบ้านแพง",
    subDistrict: "นาเข"
  },
  {
    code: 480501,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "ธาตุพนม"
  },
  {
    code: 480502,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "ฝั่งแดง"
  },
  {
    code: 480503,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "โพนแพง"
  },
  {
    code: 480504,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "พระกลางทุ่ง"
  },
  {
    code: 480505,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "นาถ่อน"
  },
  {
    code: 480506,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "แสนพัน"
  },
  {
    code: 480507,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "ดอนนางหงส์"
  },
  {
    code: 480508,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "น้ำก่ำ"
  },
  {
    code: 480509,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "อุ่มเหม้า"
  },
  {
    code: 480510,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "นาหนาด"
  },
  {
    code: 480511,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "กุดฉิม"
  },
  {
    code: 480512,
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    subDistrict: "ธาตุพนมเหนือ"
  },
  {
    code: 480601,
    province: "นครพนม",
    district: "อำเภอเรณูนคร",
    subDistrict: "เรณู"
  },
  {
    code: 480602,
    province: "นครพนม",
    district: "อำเภอเรณูนคร",
    subDistrict: "โพนทอง"
  },
  {
    code: 480603,
    province: "นครพนม",
    district: "อำเภอเรณูนคร",
    subDistrict: "ท่าลาด"
  },
  {
    code: 480604,
    province: "นครพนม",
    district: "อำเภอเรณูนคร",
    subDistrict: "นางาม"
  },
  {
    code: 480605,
    province: "นครพนม",
    district: "อำเภอเรณูนคร",
    subDistrict: "โคกหินแฮ่"
  },
  {
    code: 480607,
    province: "นครพนม",
    district: "อำเภอเรณูนคร",
    subDistrict: "หนองย่างชิ้น"
  },
  {
    code: 480608,
    province: "นครพนม",
    district: "อำเภอเรณูนคร",
    subDistrict: "เรณูใต้"
  },
  {
    code: 480609,
    province: "นครพนม",
    district: "อำเภอเรณูนคร",
    subDistrict: "นาขาม"
  },
  {
    code: 480701,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "นาแก"
  },
  {
    code: 480702,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "พระซอง"
  },
  {
    code: 480703,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "หนองสังข์"
  },
  {
    code: 480704,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "นาคู่"
  },
  {
    code: 480705,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "พิมาน"
  },
  {
    code: 480706,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "พุ่มแก"
  },
  {
    code: 480707,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "ก้านเหลือง"
  },
  {
    code: 480708,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "หนองบ่อ"
  },
  {
    code: 480709,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "นาเลียง"
  },
  {
    code: 480712,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "บ้านแก้ง"
  },
  {
    code: 480713,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "คำพี้"
  },
  {
    code: 480715,
    province: "นครพนม",
    district: "อำเภอนาแก",
    subDistrict: "สีชมพู"
  },
  {
    code: 480801,
    province: "นครพนม",
    district: "อำเภอศรีสงคราม",
    subDistrict: "ศรีสงคราม"
  },
  {
    code: 480802,
    province: "นครพนม",
    district: "อำเภอศรีสงคราม",
    subDistrict: "นาเดื่อ"
  },
  {
    code: 480803,
    province: "นครพนม",
    district: "อำเภอศรีสงคราม",
    subDistrict: "บ้านเอื้อง"
  },
  {
    code: 480804,
    province: "นครพนม",
    district: "อำเภอศรีสงคราม",
    subDistrict: "สามผง"
  },
  {
    code: 480805,
    province: "นครพนม",
    district: "อำเภอศรีสงคราม",
    subDistrict: "ท่าบ่อสงคราม"
  },
  {
    code: 480806,
    province: "นครพนม",
    district: "อำเภอศรีสงคราม",
    subDistrict: "บ้านข่า"
  },
  {
    code: 480807,
    province: "นครพนม",
    district: "อำเภอศรีสงคราม",
    subDistrict: "นาคำ"
  },
  {
    code: 480808,
    province: "นครพนม",
    district: "อำเภอศรีสงคราม",
    subDistrict: "โพนสว่าง"
  },
  {
    code: 480809,
    province: "นครพนม",
    district: "อำเภอศรีสงคราม",
    subDistrict: "หาดแพง"
  },
  {
    code: 480901,
    province: "นครพนม",
    district: "อำเภอนาหว้า",
    subDistrict: "นาหว้า"
  },
  {
    code: 480902,
    province: "นครพนม",
    district: "อำเภอนาหว้า",
    subDistrict: "นางัว"
  },
  {
    code: 480903,
    province: "นครพนม",
    district: "อำเภอนาหว้า",
    subDistrict: "บ้านเสียว"
  },
  {
    code: 480904,
    province: "นครพนม",
    district: "อำเภอนาหว้า",
    subDistrict: "นาคูณใหญ่"
  },
  {
    code: 480905,
    province: "นครพนม",
    district: "อำเภอนาหว้า",
    subDistrict: "เหล่าพัฒนา"
  },
  {
    code: 480906,
    province: "นครพนม",
    district: "อำเภอนาหว้า",
    subDistrict: "ท่าเรือ"
  },
  {
    code: 481001,
    province: "นครพนม",
    district: "อำเภอโพนสวรรค์",
    subDistrict: "โพนสวรรค์"
  },
  {
    code: 481002,
    province: "นครพนม",
    district: "อำเภอโพนสวรรค์",
    subDistrict: "นาหัวบ่อ"
  },
  {
    code: 481003,
    province: "นครพนม",
    district: "อำเภอโพนสวรรค์",
    subDistrict: "นาขมิ้น"
  },
  {
    code: 481004,
    province: "นครพนม",
    district: "อำเภอโพนสวรรค์",
    subDistrict: "โพนบก"
  },
  {
    code: 481005,
    province: "นครพนม",
    district: "อำเภอโพนสวรรค์",
    subDistrict: "บ้านค้อ"
  },
  {
    code: 481006,
    province: "นครพนม",
    district: "อำเภอโพนสวรรค์",
    subDistrict: "โพนจาน"
  },
  {
    code: 481007,
    province: "นครพนม",
    district: "อำเภอโพนสวรรค์",
    subDistrict: "นาใน"
  },
  {
    code: 481101,
    province: "นครพนม",
    district: "อำเภอนาทม",
    subDistrict: "นาทม"
  },
  {
    code: 481102,
    province: "นครพนม",
    district: "อำเภอนาทม",
    subDistrict: "หนองซน"
  },
  {
    code: 481103,
    province: "นครพนม",
    district: "อำเภอนาทม",
    subDistrict: "ดอนเตย"
  },
  {
    code: 481201,
    province: "นครพนม",
    district: "อำเภอวังยาง",
    subDistrict: "วังยาง"
  },
  {
    code: 481202,
    province: "นครพนม",
    district: "อำเภอวังยาง",
    subDistrict: "โคกสี"
  },
  {
    code: 481203,
    province: "นครพนม",
    district: "อำเภอวังยาง",
    subDistrict: "ยอดชาด"
  },
  {
    code: 481204,
    province: "นครพนม",
    district: "อำเภอวังยาง",
    subDistrict: "หนองโพธิ์"
  },
  {
    code: 490101,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "มุกดาหาร"
  },
  {
    code: 490102,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "ศรีบุญเรือง"
  },
  {
    code: 490103,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "บ้านโคก"
  },
  {
    code: 490104,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "บางทรายใหญ่"
  },
  {
    code: 490105,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "โพนทราย"
  },
  {
    code: 490106,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "ผึ่งแดด"
  },
  {
    code: 490107,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "นาโสก"
  },
  {
    code: 490108,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "นาสีนวน"
  },
  {
    code: 490109,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "คำป่าหลาย"
  },
  {
    code: 490110,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "คำอาฮวน"
  },
  {
    code: 490111,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "ดงเย็น"
  },
  {
    code: 490112,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "ดงมอน"
  },
  {
    code: 490113,
    province: "มุกดาหาร",
    district: "อำเภอเมืองมุกดาหาร",
    subDistrict: "กุดแข้"
  },
  {
    code: 490201,
    province: "มุกดาหาร",
    district: "อำเภอนิคมคำสร้อย",
    subDistrict: "นิคมคำสร้อย"
  },
  {
    code: 490202,
    province: "มุกดาหาร",
    district: "อำเภอนิคมคำสร้อย",
    subDistrict: "นากอก"
  },
  {
    code: 490203,
    province: "มุกดาหาร",
    district: "อำเภอนิคมคำสร้อย",
    subDistrict: "หนองแวง"
  },
  {
    code: 490204,
    province: "มุกดาหาร",
    district: "อำเภอนิคมคำสร้อย",
    subDistrict: "กกแดง"
  },
  {
    code: 490205,
    province: "มุกดาหาร",
    district: "อำเภอนิคมคำสร้อย",
    subDistrict: "นาอุดม"
  },
  {
    code: 490206,
    province: "มุกดาหาร",
    district: "อำเภอนิคมคำสร้อย",
    subDistrict: "โชคชัย"
  },
  {
    code: 490207,
    province: "มุกดาหาร",
    district: "อำเภอนิคมคำสร้อย",
    subDistrict: "ร่มเกล้า"
  },
  {
    code: 490301,
    province: "มุกดาหาร",
    district: "อำเภอดอนตาล",
    subDistrict: "ดอนตาล"
  },
  {
    code: 490302,
    province: "มุกดาหาร",
    district: "อำเภอดอนตาล",
    subDistrict: "โพธิ์ไทร"
  },
  {
    code: 490303,
    province: "มุกดาหาร",
    district: "อำเภอดอนตาล",
    subDistrict: "ป่าไร่"
  },
  {
    code: 490304,
    province: "มุกดาหาร",
    district: "อำเภอดอนตาล",
    subDistrict: "เหล่าหมี"
  },
  {
    code: 490305,
    province: "มุกดาหาร",
    district: "อำเภอดอนตาล",
    subDistrict: "บ้านบาก"
  },
  {
    code: 490306,
    province: "มุกดาหาร",
    district: "อำเภอดอนตาล",
    subDistrict: "นาสะเม็ง"
  },
  {
    code: 490307,
    province: "มุกดาหาร",
    district: "อำเภอดอนตาล",
    subDistrict: "บ้านแก้ง"
  },
  {
    code: 490401,
    province: "มุกดาหาร",
    district: "อำเภอดงหลวง",
    subDistrict: "ดงหลวง"
  },
  {
    code: 490402,
    province: "มุกดาหาร",
    district: "อำเภอดงหลวง",
    subDistrict: "หนองบัว"
  },
  {
    code: 490403,
    province: "มุกดาหาร",
    district: "อำเภอดงหลวง",
    subDistrict: "กกตูม"
  },
  {
    code: 490404,
    province: "มุกดาหาร",
    district: "อำเภอดงหลวง",
    subDistrict: "หนองแคน"
  },
  {
    code: 490405,
    province: "มุกดาหาร",
    district: "อำเภอดงหลวง",
    subDistrict: "ชะโนดน้อย"
  },
  {
    code: 490406,
    province: "มุกดาหาร",
    district: "อำเภอดงหลวง",
    subDistrict: "พังแดง"
  },
  {
    code: 490503,
    province: "มุกดาหาร",
    district: "อำเภอคำชะอี",
    subDistrict: "บ้านซ่ง"
  },
  {
    code: 490504,
    province: "มุกดาหาร",
    district: "อำเภอคำชะอี",
    subDistrict: "คำชะอี"
  },
  {
    code: 490505,
    province: "มุกดาหาร",
    district: "อำเภอคำชะอี",
    subDistrict: "หนองเอี่ยน"
  },
  {
    code: 490506,
    province: "มุกดาหาร",
    district: "อำเภอคำชะอี",
    subDistrict: "บ้านค้อ"
  },
  {
    code: 490507,
    province: "มุกดาหาร",
    district: "อำเภอคำชะอี",
    subDistrict: "บ้านเหล่า"
  },
  {
    code: 490508,
    province: "มุกดาหาร",
    district: "อำเภอคำชะอี",
    subDistrict: "โพนงาม"
  },
  {
    code: 490511,
    province: "มุกดาหาร",
    district: "อำเภอคำชะอี",
    subDistrict: "เหล่าสร้างถ่อ"
  },
  {
    code: 490512,
    province: "มุกดาหาร",
    district: "อำเภอคำชะอี",
    subDistrict: "คำบก"
  },
  {
    code: 490514,
    province: "มุกดาหาร",
    district: "อำเภอคำชะอี",
    subDistrict: "น้ำเที่ยง"
  },
  {
    code: 490601,
    province: "มุกดาหาร",
    district: "อำเภอหว้านใหญ่",
    subDistrict: "หว้านใหญ่"
  },
  {
    code: 490602,
    province: "มุกดาหาร",
    district: "อำเภอหว้านใหญ่",
    subDistrict: "ป่งขาม"
  },
  {
    code: 490603,
    province: "มุกดาหาร",
    district: "อำเภอหว้านใหญ่",
    subDistrict: "บางทรายน้อย"
  },
  {
    code: 490604,
    province: "มุกดาหาร",
    district: "อำเภอหว้านใหญ่",
    subDistrict: "ชะโนด"
  },
  {
    code: 490605,
    province: "มุกดาหาร",
    district: "อำเภอหว้านใหญ่",
    subDistrict: "ดงหมู"
  },
  {
    code: 490701,
    province: "มุกดาหาร",
    district: "อำเภอหนองสูง",
    subDistrict: "หนองสูง"
  },
  {
    code: 490702,
    province: "มุกดาหาร",
    district: "อำเภอหนองสูง",
    subDistrict: "โนนยาง"
  },
  {
    code: 490703,
    province: "มุกดาหาร",
    district: "อำเภอหนองสูง",
    subDistrict: "ภูวง"
  },
  {
    code: 490704,
    province: "มุกดาหาร",
    district: "อำเภอหนองสูง",
    subDistrict: "บ้านเป้า"
  },
  {
    code: 490705,
    province: "มุกดาหาร",
    district: "อำเภอหนองสูง",
    subDistrict: "หนองสูงใต้"
  },
  {
    code: 490706,
    province: "มุกดาหาร",
    district: "อำเภอหนองสูง",
    subDistrict: "หนองสูงเหนือ"
  },
  {
    code: 500101,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "ศรีภูมิ"
  },
  {
    code: 500102,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "พระสิงห์"
  },
  {
    code: 500103,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "หายยา"
  },
  {
    code: 500104,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "ช้างม่อย"
  },
  {
    code: 500105,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "ช้างคลาน"
  },
  {
    code: 500106,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "วัดเกต"
  },
  {
    code: 500107,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "ช้างเผือก"
  },
  {
    code: 500108,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "สุเทพ"
  },
  {
    code: 500109,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "แม่เหียะ"
  },
  {
    code: 500110,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "ป่าแดด"
  },
  {
    code: 500111,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "หนองหอย"
  },
  {
    code: 500112,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "ท่าศาลา"
  },
  {
    code: 500113,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "หนองป่าครั่ง"
  },
  {
    code: 500114,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "ฟ้าฮ่าม"
  },
  {
    code: 500115,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "ป่าตัน"
  },
  {
    code: 500116,
    province: "เชียงใหม่",
    district: "อำเภอเมืองเชียงใหม่",
    subDistrict: "สันผีเสื้อ"
  },
  {
    code: 500203,
    province: "เชียงใหม่",
    district: "อำเภอจอมทอง",
    subDistrict: "บ้านหลวง"
  },
  {
    code: 500204,
    province: "เชียงใหม่",
    district: "อำเภอจอมทอง",
    subDistrict: "ข่วงเปา"
  },
  {
    code: 500205,
    province: "เชียงใหม่",
    district: "อำเภอจอมทอง",
    subDistrict: "สบเตี๊ยะ"
  },
  {
    code: 500206,
    province: "เชียงใหม่",
    district: "อำเภอจอมทอง",
    subDistrict: "บ้านแปะ"
  },
  {
    code: 500207,
    province: "เชียงใหม่",
    district: "อำเภอจอมทอง",
    subDistrict: "ดอยแก้ว"
  },
  {
    code: 500209,
    province: "เชียงใหม่",
    district: "อำเภอจอมทอง",
    subDistrict: "แม่สอย"
  },
  {
    code: 500301,
    province: "เชียงใหม่",
    district: "อำเภอแม่แจ่ม",
    subDistrict: "ช่างเคิ่ง"
  },
  {
    code: 500302,
    province: "เชียงใหม่",
    district: "อำเภอแม่แจ่ม",
    subDistrict: "ท่าผา"
  },
  {
    code: 500303,
    province: "เชียงใหม่",
    district: "อำเภอแม่แจ่ม",
    subDistrict: "บ้านทับ"
  },
  {
    code: 500304,
    province: "เชียงใหม่",
    district: "อำเภอแม่แจ่ม",
    subDistrict: "แม่ศึก"
  },
  {
    code: 500305,
    province: "เชียงใหม่",
    district: "อำเภอแม่แจ่ม",
    subDistrict: "แม่นาจร"
  },
  {
    code: 500307,
    province: "เชียงใหม่",
    district: "อำเภอแม่แจ่ม",
    subDistrict: "ปางหินฝน"
  },
  {
    code: 500308,
    province: "เชียงใหม่",
    district: "อำเภอแม่แจ่ม",
    subDistrict: "กองแขก"
  },
  {
    code: 500401,
    province: "เชียงใหม่",
    district: "อำเภอเชียงดาว",
    subDistrict: "เชียงดาว"
  },
  {
    code: 500402,
    province: "เชียงใหม่",
    district: "อำเภอเชียงดาว",
    subDistrict: "เมืองนะ"
  },
  {
    code: 500403,
    province: "เชียงใหม่",
    district: "อำเภอเชียงดาว",
    subDistrict: "เมืองงาย"
  },
  {
    code: 500404,
    province: "เชียงใหม่",
    district: "อำเภอเชียงดาว",
    subDistrict: "แม่นะ"
  },
  {
    code: 500405,
    province: "เชียงใหม่",
    district: "อำเภอเชียงดาว",
    subDistrict: "เมืองคอง"
  },
  {
    code: 500406,
    province: "เชียงใหม่",
    district: "อำเภอเชียงดาว",
    subDistrict: "ปิงโค้ง"
  },
  {
    code: 500407,
    province: "เชียงใหม่",
    district: "อำเภอเชียงดาว",
    subDistrict: "ทุ่งข้าวพวง"
  },
  {
    code: 500501,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "เชิงดอย"
  },
  {
    code: 500502,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "สันปูเลย"
  },
  {
    code: 500503,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "ลวงเหนือ"
  },
  {
    code: 500504,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "ป่าป้อง"
  },
  {
    code: 500505,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "สง่าบ้าน"
  },
  {
    code: 500506,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "ป่าลาน"
  },
  {
    code: 500507,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "ตลาดขวัญ"
  },
  {
    code: 500508,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "สำราญราษฎร์"
  },
  {
    code: 500509,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "แม่คือ"
  },
  {
    code: 500510,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "ตลาดใหญ่"
  },
  {
    code: 500511,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "แม่ฮ้อยเงิน"
  },
  {
    code: 500512,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "แม่โป่ง"
  },
  {
    code: 500513,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "ป่าเมี่ยง"
  },
  {
    code: 500514,
    province: "เชียงใหม่",
    district: "อำเภอดอยสะเก็ด",
    subDistrict: "เทพเสด็จ"
  },
  {
    code: 500601,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "สันมหาพน"
  },
  {
    code: 500602,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "แม่แตง"
  },
  {
    code: 500603,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "ขี้เหล็ก"
  },
  {
    code: 500604,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "ช่อแล"
  },
  {
    code: 500605,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "แม่หอพระ"
  },
  {
    code: 500606,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "สบเปิง"
  },
  {
    code: 500607,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "บ้านเป้า"
  },
  {
    code: 500608,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "สันป่ายาง"
  },
  {
    code: 500609,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "ป่าแป๋"
  },
  {
    code: 500610,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "เมืองก๋าย"
  },
  {
    code: 500611,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "บ้านช้าง"
  },
  {
    code: 500612,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "กื้ดช้าง"
  },
  {
    code: 500613,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "อินทขิล"
  },
  {
    code: 500614,
    province: "เชียงใหม่",
    district: "อำเภอแม่แตง",
    subDistrict: "สมก๋าย"
  },
  {
    code: 500701,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "ริมใต้"
  },
  {
    code: 500702,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "ริมเหนือ"
  },
  {
    code: 500703,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "สันโป่ง"
  },
  {
    code: 500704,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "ขี้เหล็ก"
  },
  {
    code: 500705,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "สะลวง"
  },
  {
    code: 500706,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "ห้วยทราย"
  },
  {
    code: 500707,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "แม่แรม"
  },
  {
    code: 500708,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "โป่งแยง"
  },
  {
    code: 500709,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "แม่สา"
  },
  {
    code: 500710,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "ดอนแก้ว"
  },
  {
    code: 500711,
    province: "เชียงใหม่",
    district: "อำเภอแม่ริม",
    subDistrict: "เหมืองแก้ว"
  },
  {
    code: 500801,
    province: "เชียงใหม่",
    district: "อำเภอสะเมิง",
    subDistrict: "สะเมิงใต้"
  },
  {
    code: 500802,
    province: "เชียงใหม่",
    district: "อำเภอสะเมิง",
    subDistrict: "สะเมิงเหนือ"
  },
  {
    code: 500803,
    province: "เชียงใหม่",
    district: "อำเภอสะเมิง",
    subDistrict: "แม่สาบ"
  },
  {
    code: 500804,
    province: "เชียงใหม่",
    district: "อำเภอสะเมิง",
    subDistrict: "บ่อแก้ว"
  },
  {
    code: 500805,
    province: "เชียงใหม่",
    district: "อำเภอสะเมิง",
    subDistrict: "ยั้งเมิน"
  },
  {
    code: 500901,
    province: "เชียงใหม่",
    district: "อำเภอฝาง",
    subDistrict: "เวียง"
  },
  {
    code: 500903,
    province: "เชียงใหม่",
    district: "อำเภอฝาง",
    subDistrict: "ม่อนปิ่น"
  },
  {
    code: 500904,
    province: "เชียงใหม่",
    district: "อำเภอฝาง",
    subDistrict: "แม่งอน"
  },
  {
    code: 500905,
    province: "เชียงใหม่",
    district: "อำเภอฝาง",
    subDistrict: "แม่สูน"
  },
  {
    code: 500906,
    province: "เชียงใหม่",
    district: "อำเภอฝาง",
    subDistrict: "สันทราย"
  },
  {
    code: 500910,
    province: "เชียงใหม่",
    district: "อำเภอฝาง",
    subDistrict: "แม่คะ"
  },
  {
    code: 500911,
    province: "เชียงใหม่",
    district: "อำเภอฝาง",
    subDistrict: "แม่ข่า"
  },
  {
    code: 500912,
    province: "เชียงใหม่",
    district: "อำเภอฝาง",
    subDistrict: "โป่งน้ำร้อน"
  },
  {
    code: 501001,
    province: "เชียงใหม่",
    district: "อำเภอแม่อาย",
    subDistrict: "แม่อาย"
  },
  {
    code: 501002,
    province: "เชียงใหม่",
    district: "อำเภอแม่อาย",
    subDistrict: "แม่สาว"
  },
  {
    code: 501003,
    province: "เชียงใหม่",
    district: "อำเภอแม่อาย",
    subDistrict: "สันต้นหมื้อ"
  },
  {
    code: 501004,
    province: "เชียงใหม่",
    district: "อำเภอแม่อาย",
    subDistrict: "แม่นาวาง"
  },
  {
    code: 501005,
    province: "เชียงใหม่",
    district: "อำเภอแม่อาย",
    subDistrict: "ท่าตอน"
  },
  {
    code: 501006,
    province: "เชียงใหม่",
    district: "อำเภอแม่อาย",
    subDistrict: "บ้านหลวง"
  },
  {
    code: 501007,
    province: "เชียงใหม่",
    district: "อำเภอแม่อาย",
    subDistrict: "มะลิกา"
  },
  {
    code: 501101,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "เวียง"
  },
  {
    code: 501102,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "ทุ่งหลวง"
  },
  {
    code: 501103,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "ป่าตุ้ม"
  },
  {
    code: 501104,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "ป่าไหน่"
  },
  {
    code: 501105,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "สันทราย"
  },
  {
    code: 501106,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "บ้านโป่ง"
  },
  {
    code: 501107,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "น้ำแพร่"
  },
  {
    code: 501108,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "เขื่อนผาก"
  },
  {
    code: 501109,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "แม่แวน"
  },
  {
    code: 501110,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "แม่ปั๋ง"
  },
  {
    code: 501111,
    province: "เชียงใหม่",
    district: "อำเภอพร้าว",
    subDistrict: "โหล่งขอด"
  },
  {
    code: 501201,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "ยุหว่า"
  },
  {
    code: 501202,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "สันกลาง"
  },
  {
    code: 501203,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "ท่าวังพร้าว"
  },
  {
    code: 501204,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "มะขามหลวง"
  },
  {
    code: 501205,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "แม่ก๊า"
  },
  {
    code: 501206,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "บ้านแม"
  },
  {
    code: 501207,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "บ้านกลาง"
  },
  {
    code: 501208,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "ทุ่งสะโตก"
  },
  {
    code: 501210,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "ทุ่งต้อม"
  },
  {
    code: 501214,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "น้ำบ่อหลวง"
  },
  {
    code: 501215,
    province: "เชียงใหม่",
    district: "อำเภอสันป่าตอง",
    subDistrict: "มะขุนหวาน"
  },
  {
    code: 501301,
    province: "เชียงใหม่",
    district: "อำเภอสันกำแพง",
    subDistrict: "สันกำแพง"
  },
  {
    code: 501302,
    province: "เชียงใหม่",
    district: "อำเภอสันกำแพง",
    subDistrict: "ทรายมูล"
  },
  {
    code: 501303,
    province: "เชียงใหม่",
    district: "อำเภอสันกำแพง",
    subDistrict: "ร้องวัวแดง"
  },
  {
    code: 501304,
    province: "เชียงใหม่",
    district: "อำเภอสันกำแพง",
    subDistrict: "บวกค้าง"
  },
  {
    code: 501305,
    province: "เชียงใหม่",
    district: "อำเภอสันกำแพง",
    subDistrict: "แช่ช้าง"
  },
  {
    code: 501306,
    province: "เชียงใหม่",
    district: "อำเภอสันกำแพง",
    subDistrict: "ออนใต้"
  },
  {
    code: 501310,
    province: "เชียงใหม่",
    district: "อำเภอสันกำแพง",
    subDistrict: "แม่ปูคา"
  },
  {
    code: 501311,
    province: "เชียงใหม่",
    district: "อำเภอสันกำแพง",
    subDistrict: "ห้วยทราย"
  },
  {
    code: 501312,
    province: "เชียงใหม่",
    district: "อำเภอสันกำแพง",
    subDistrict: "ต้นเปา"
  },
  {
    code: 501313,
    province: "เชียงใหม่",
    district: "อำเภอสันกำแพง",
    subDistrict: "สันกลาง"
  },
  {
    code: 501401,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "สันทรายหลวง"
  },
  {
    code: 501402,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "สันทรายน้อย"
  },
  {
    code: 501403,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "สันพระเนตร"
  },
  {
    code: 501404,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "สันนาเม็ง"
  },
  {
    code: 501405,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "สันป่าเปา"
  },
  {
    code: 501406,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "หนองแหย่ง"
  },
  {
    code: 501407,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "หนองจ๊อม"
  },
  {
    code: 501408,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "หนองหาร"
  },
  {
    code: 501409,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "แม่แฝก"
  },
  {
    code: 501410,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "แม่แฝกใหม่"
  },
  {
    code: 501411,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "เมืองเล็น"
  },
  {
    code: 501412,
    province: "เชียงใหม่",
    district: "อำเภอสันทราย",
    subDistrict: "ป่าไผ่"
  },
  {
    code: 501501,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "หางดง"
  },
  {
    code: 501502,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "หนองแก๋ว"
  },
  {
    code: 501503,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "หารแก้ว"
  },
  {
    code: 501504,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "หนองตอง"
  },
  {
    code: 501505,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "ขุนคง"
  },
  {
    code: 501506,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "สบแม่ข่า"
  },
  {
    code: 501507,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "บ้านแหวน"
  },
  {
    code: 501508,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "สันผักหวาน"
  },
  {
    code: 501509,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "หนองควาย"
  },
  {
    code: 501510,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "บ้านปง"
  },
  {
    code: 501511,
    province: "เชียงใหม่",
    district: "อำเภอหางดง",
    subDistrict: "น้ำแพร่"
  },
  {
    code: 501601,
    province: "เชียงใหม่",
    district: "อำเภอฮอด",
    subDistrict: "หางดง"
  },
  {
    code: 501602,
    province: "เชียงใหม่",
    district: "อำเภอฮอด",
    subDistrict: "ฮอด"
  },
  {
    code: 501603,
    province: "เชียงใหม่",
    district: "อำเภอฮอด",
    subDistrict: "บ้านตาล"
  },
  {
    code: 501604,
    province: "เชียงใหม่",
    district: "อำเภอฮอด",
    subDistrict: "บ่อหลวง"
  },
  {
    code: 501605,
    province: "เชียงใหม่",
    district: "อำเภอฮอด",
    subDistrict: "บ่อสลี"
  },
  {
    code: 501606,
    province: "เชียงใหม่",
    district: "อำเภอฮอด",
    subDistrict: "นาคอเรือ"
  },
  {
    code: 501701,
    province: "เชียงใหม่",
    district: "อำเภอดอยเต่า",
    subDistrict: "ดอยเต่า"
  },
  {
    code: 501702,
    province: "เชียงใหม่",
    district: "อำเภอดอยเต่า",
    subDistrict: "ท่าเดื่อ"
  },
  {
    code: 501703,
    province: "เชียงใหม่",
    district: "อำเภอดอยเต่า",
    subDistrict: "มืดกา"
  },
  {
    code: 501704,
    province: "เชียงใหม่",
    district: "อำเภอดอยเต่า",
    subDistrict: "บ้านแอ่น"
  },
  {
    code: 501705,
    province: "เชียงใหม่",
    district: "อำเภอดอยเต่า",
    subDistrict: "บงตัน"
  },
  {
    code: 501706,
    province: "เชียงใหม่",
    district: "อำเภอดอยเต่า",
    subDistrict: "โปงทุ่ง"
  },
  {
    code: 501801,
    province: "เชียงใหม่",
    district: "อำเภออมก๋อย",
    subDistrict: "อมก๋อย"
  },
  {
    code: 501802,
    province: "เชียงใหม่",
    district: "อำเภออมก๋อย",
    subDistrict: "ยางเปียง"
  },
  {
    code: 501803,
    province: "เชียงใหม่",
    district: "อำเภออมก๋อย",
    subDistrict: "แม่ตื่น"
  },
  {
    code: 501804,
    province: "เชียงใหม่",
    district: "อำเภออมก๋อย",
    subDistrict: "ม่อนจอง"
  },
  {
    code: 501805,
    province: "เชียงใหม่",
    district: "อำเภออมก๋อย",
    subDistrict: "สบโขง"
  },
  {
    code: 501806,
    province: "เชียงใหม่",
    district: "อำเภออมก๋อย",
    subDistrict: "นาเกียน"
  },
  {
    code: 501901,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "ยางเนิ้ง"
  },
  {
    code: 501902,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "สารภี"
  },
  {
    code: 501903,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "ชมภู"
  },
  {
    code: 501904,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "ไชยสถาน"
  },
  {
    code: 501905,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "ขัวมุง"
  },
  {
    code: 501906,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "หนองแฝก"
  },
  {
    code: 501907,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "หนองผึ้ง"
  },
  {
    code: 501908,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "ท่ากว้าง"
  },
  {
    code: 501909,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "ดอนแก้ว"
  },
  {
    code: 501910,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "ท่าวังตาล"
  },
  {
    code: 501911,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "สันทราย"
  },
  {
    code: 501912,
    province: "เชียงใหม่",
    district: "อำเภอสารภี",
    subDistrict: "ป่าบง"
  },
  {
    code: 502001,
    province: "เชียงใหม่",
    district: "อำเภอเวียงแหง",
    subDistrict: "เมืองแหง"
  },
  {
    code: 502002,
    province: "เชียงใหม่",
    district: "อำเภอเวียงแหง",
    subDistrict: "เปียงหลวง"
  },
  {
    code: 502003,
    province: "เชียงใหม่",
    district: "อำเภอเวียงแหง",
    subDistrict: "แสนไห"
  },
  {
    code: 502101,
    province: "เชียงใหม่",
    district: "อำเภอไชยปราการ",
    subDistrict: "ปงตำ"
  },
  {
    code: 502102,
    province: "เชียงใหม่",
    district: "อำเภอไชยปราการ",
    subDistrict: "ศรีดงเย็น"
  },
  {
    code: 502103,
    province: "เชียงใหม่",
    district: "อำเภอไชยปราการ",
    subDistrict: "แม่ทะลบ"
  },
  {
    code: 502104,
    province: "เชียงใหม่",
    district: "อำเภอไชยปราการ",
    subDistrict: "หนองบัว"
  },
  {
    code: 502201,
    province: "เชียงใหม่",
    district: "อำเภอแม่วาง",
    subDistrict: "บ้านกาด"
  },
  {
    code: 502202,
    province: "เชียงใหม่",
    district: "อำเภอแม่วาง",
    subDistrict: "ทุ่งปี๊"
  },
  {
    code: 502203,
    province: "เชียงใหม่",
    district: "อำเภอแม่วาง",
    subDistrict: "ทุ่งรวงทอง"
  },
  {
    code: 502204,
    province: "เชียงใหม่",
    district: "อำเภอแม่วาง",
    subDistrict: "แม่วิน"
  },
  {
    code: 502205,
    province: "เชียงใหม่",
    district: "อำเภอแม่วาง",
    subDistrict: "ดอนเปา"
  },
  {
    code: 502301,
    province: "เชียงใหม่",
    district: "อำเภอแม่ออน",
    subDistrict: "ออนเหนือ"
  },
  {
    code: 502302,
    province: "เชียงใหม่",
    district: "อำเภอแม่ออน",
    subDistrict: "ออนกลาง"
  },
  {
    code: 502303,
    province: "เชียงใหม่",
    district: "อำเภอแม่ออน",
    subDistrict: "บ้านสหกรณ์"
  },
  {
    code: 502304,
    province: "เชียงใหม่",
    district: "อำเภอแม่ออน",
    subDistrict: "ห้วยแก้ว"
  },
  {
    code: 502305,
    province: "เชียงใหม่",
    district: "อำเภอแม่ออน",
    subDistrict: "แม่ทา"
  },
  {
    code: 502306,
    province: "เชียงใหม่",
    district: "อำเภอแม่ออน",
    subDistrict: "ทาเหนือ"
  },
  {
    code: 502401,
    province: "เชียงใหม่",
    district: "อำเภอดอยหล่อ",
    subDistrict: "ดอยหล่อ"
  },
  {
    code: 502402,
    province: "เชียงใหม่",
    district: "อำเภอดอยหล่อ",
    subDistrict: "สองแคว"
  },
  {
    code: 502403,
    province: "เชียงใหม่",
    district: "อำเภอดอยหล่อ",
    subDistrict: "ยางคราม"
  },
  {
    code: 502404,
    province: "เชียงใหม่",
    district: "อำเภอดอยหล่อ",
    subDistrict: "สันติสุข"
  },
  {
    code: 502501,
    province: "เชียงใหม่",
    district: "อำเภอกัลยาณิวัฒนา",
    subDistrict: "บ้านจันทร์"
  },
  {
    code: 502502,
    province: "เชียงใหม่",
    district: "อำเภอกัลยาณิวัฒนา",
    subDistrict: "แม่แดด"
  },
  {
    code: 502503,
    province: "เชียงใหม่",
    district: "อำเภอกัลยาณิวัฒนา",
    subDistrict: "แจ่มหลวง"
  },
  {
    code: 510101,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "ในเมือง"
  },
  {
    code: 510102,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "เหมืองง่า"
  },
  {
    code: 510103,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "อุโมงค์"
  },
  {
    code: 510104,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "หนองช้างคืน"
  },
  {
    code: 510105,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "ประตูป่า"
  },
  {
    code: 510106,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "ริมปิง"
  },
  {
    code: 510107,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "ต้นธง"
  },
  {
    code: 510108,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "บ้านแป้น"
  },
  {
    code: 510109,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "เหมืองจี้"
  },
  {
    code: 510110,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "ป่าสัก"
  },
  {
    code: 510111,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "เวียงยอง"
  },
  {
    code: 510112,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "บ้านกลาง"
  },
  {
    code: 510113,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "มะเขือแจ้"
  },
  {
    code: 510116,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "ศรีบัวบาน"
  },
  {
    code: 510117,
    province: "ลำพูน",
    district: "อำเภอเมืองลำพูน",
    subDistrict: "หนองหนาม"
  },
  {
    code: 510201,
    province: "ลำพูน",
    district: "อำเภอแม่ทา",
    subDistrict: "ทาปลาดุก"
  },
  {
    code: 510202,
    province: "ลำพูน",
    district: "อำเภอแม่ทา",
    subDistrict: "ทาสบเส้า"
  },
  {
    code: 510203,
    province: "ลำพูน",
    district: "อำเภอแม่ทา",
    subDistrict: "ทากาศ"
  },
  {
    code: 510204,
    province: "ลำพูน",
    district: "อำเภอแม่ทา",
    subDistrict: "ทาขุมเงิน"
  },
  {
    code: 510205,
    province: "ลำพูน",
    district: "อำเภอแม่ทา",
    subDistrict: "ทาทุ่งหลวง"
  },
  {
    code: 510206,
    province: "ลำพูน",
    district: "อำเภอแม่ทา",
    subDistrict: "ทาแม่ลอบ"
  },
  {
    code: 510301,
    province: "ลำพูน",
    district: "อำเภอบ้านโฮ่ง",
    subDistrict: "บ้านโฮ่ง"
  },
  {
    code: 510302,
    province: "ลำพูน",
    district: "อำเภอบ้านโฮ่ง",
    subDistrict: "ป่าพลู"
  },
  {
    code: 510303,
    province: "ลำพูน",
    district: "อำเภอบ้านโฮ่ง",
    subDistrict: "เหล่ายาว"
  },
  {
    code: 510304,
    province: "ลำพูน",
    district: "อำเภอบ้านโฮ่ง",
    subDistrict: "ศรีเตี้ย"
  },
  {
    code: 510305,
    province: "ลำพูน",
    district: "อำเภอบ้านโฮ่ง",
    subDistrict: "หนองปลาสะวาย"
  },
  {
    code: 510401,
    province: "ลำพูน",
    district: "อำเภอลี้",
    subDistrict: "ลี้"
  },
  {
    code: 510402,
    province: "ลำพูน",
    district: "อำเภอลี้",
    subDistrict: "แม่ตืน"
  },
  {
    code: 510403,
    province: "ลำพูน",
    district: "อำเภอลี้",
    subDistrict: "นาทราย"
  },
  {
    code: 510404,
    province: "ลำพูน",
    district: "อำเภอลี้",
    subDistrict: "ดงดำ"
  },
  {
    code: 510405,
    province: "ลำพูน",
    district: "อำเภอลี้",
    subDistrict: "ก้อ"
  },
  {
    code: 510406,
    province: "ลำพูน",
    district: "อำเภอลี้",
    subDistrict: "แม่ลาน"
  },
  {
    code: 510408,
    province: "ลำพูน",
    district: "อำเภอลี้",
    subDistrict: "ป่าไผ่"
  },
  {
    code: 510409,
    province: "ลำพูน",
    district: "อำเภอลี้",
    subDistrict: "ศรีวิชัย"
  },
  {
    code: 510501,
    province: "ลำพูน",
    district: "อำเภอทุ่งหัวช้าง",
    subDistrict: "ทุ่งหัวช้าง"
  },
  {
    code: 510502,
    province: "ลำพูน",
    district: "อำเภอทุ่งหัวช้าง",
    subDistrict: "บ้านปวง"
  },
  {
    code: 510503,
    province: "ลำพูน",
    district: "อำเภอทุ่งหัวช้าง",
    subDistrict: "ตะเคียนปม"
  },
  {
    code: 510601,
    province: "ลำพูน",
    district: "อำเภอป่าซาง",
    subDistrict: "ปากบ่อง"
  },
  {
    code: 510602,
    province: "ลำพูน",
    district: "อำเภอป่าซาง",
    subDistrict: "ป่าซาง"
  },
  {
    code: 510603,
    province: "ลำพูน",
    district: "อำเภอป่าซาง",
    subDistrict: "แม่แรง"
  },
  {
    code: 510604,
    province: "ลำพูน",
    district: "อำเภอป่าซาง",
    subDistrict: "ม่วงน้อย"
  },
  {
    code: 510605,
    province: "ลำพูน",
    district: "อำเภอป่าซาง",
    subDistrict: "บ้านเรือน"
  },
  {
    code: 510606,
    province: "ลำพูน",
    district: "อำเภอป่าซาง",
    subDistrict: "มะกอก"
  },
  {
    code: 510607,
    province: "ลำพูน",
    district: "อำเภอป่าซาง",
    subDistrict: "ท่าตุ้ม"
  },
  {
    code: 510608,
    province: "ลำพูน",
    district: "อำเภอป่าซาง",
    subDistrict: "น้ำดิบ"
  },
  {
    code: 510611,
    province: "ลำพูน",
    district: "อำเภอป่าซาง",
    subDistrict: "นครเจดีย์"
  },
  {
    code: 510701,
    province: "ลำพูน",
    district: "อำเภอบ้านธิ",
    subDistrict: "บ้านธิ"
  },
  {
    code: 510702,
    province: "ลำพูน",
    district: "อำเภอบ้านธิ",
    subDistrict: "ห้วยยาบ"
  },
  {
    code: 510801,
    province: "ลำพูน",
    district: "อำเภอเวียงหนองล่อง",
    subDistrict: "หนองล่อง"
  },
  {
    code: 510802,
    province: "ลำพูน",
    district: "อำเภอเวียงหนองล่อง",
    subDistrict: "หนองยวง"
  },
  {
    code: 510803,
    province: "ลำพูน",
    district: "อำเภอเวียงหนองล่อง",
    subDistrict: "วังผาง"
  },
  {
    code: 520101,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "เวียงเหนือ"
  },
  {
    code: 520102,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "หัวเวียง"
  },
  {
    code: 520103,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "สวนดอก"
  },
  {
    code: 520104,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "สบตุ๋ย"
  },
  {
    code: 520105,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "พระบาท"
  },
  {
    code: 520106,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "ชมพู"
  },
  {
    code: 520107,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "กล้วยแพะ"
  },
  {
    code: 520108,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "ปงแสนทอง"
  },
  {
    code: 520109,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "บ้านแลง"
  },
  {
    code: 520110,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "บ้านเสด็จ"
  },
  {
    code: 520111,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "พิชัย"
  },
  {
    code: 520112,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "ทุ่งฝาย"
  },
  {
    code: 520113,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "บ้านเอื้อม"
  },
  {
    code: 520114,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "บ้านเป้า"
  },
  {
    code: 520115,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "บ้านค่า"
  },
  {
    code: 520116,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "บ่อแฮ้ว"
  },
  {
    code: 520117,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "ต้นธงชัย"
  },
  {
    code: 520118,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "นิคมพัฒนา"
  },
  {
    code: 520119,
    province: "ลำปาง",
    district: "อำเภอเมืองลำปาง",
    subDistrict: "บุญนาคพัฒนา"
  },
  {
    code: 520201,
    province: "ลำปาง",
    district: "อำเภอแม่เมาะ",
    subDistrict: "บ้านดง"
  },
  {
    code: 520202,
    province: "ลำปาง",
    district: "อำเภอแม่เมาะ",
    subDistrict: "นาสัก"
  },
  {
    code: 520203,
    province: "ลำปาง",
    district: "อำเภอแม่เมาะ",
    subDistrict: "จางเหนือ"
  },
  {
    code: 520204,
    province: "ลำปาง",
    district: "อำเภอแม่เมาะ",
    subDistrict: "แม่เมาะ"
  },
  {
    code: 520205,
    province: "ลำปาง",
    district: "อำเภอแม่เมาะ",
    subDistrict: "สบป้าด"
  },
  {
    code: 520301,
    province: "ลำปาง",
    district: "อำเภอเกาะคา",
    subDistrict: "ลำปางหลวง"
  },
  {
    code: 520302,
    province: "ลำปาง",
    district: "อำเภอเกาะคา",
    subDistrict: "นาแก้ว"
  },
  {
    code: 520303,
    province: "ลำปาง",
    district: "อำเภอเกาะคา",
    subDistrict: "ไหล่หิน"
  },
  {
    code: 520304,
    province: "ลำปาง",
    district: "อำเภอเกาะคา",
    subDistrict: "วังพร้าว"
  },
  {
    code: 520305,
    province: "ลำปาง",
    district: "อำเภอเกาะคา",
    subDistrict: "ศาลา"
  },
  {
    code: 520306,
    province: "ลำปาง",
    district: "อำเภอเกาะคา",
    subDistrict: "เกาะคา"
  },
  {
    code: 520307,
    province: "ลำปาง",
    district: "อำเภอเกาะคา",
    subDistrict: "นาแส่ง"
  },
  {
    code: 520308,
    province: "ลำปาง",
    district: "อำเภอเกาะคา",
    subDistrict: "ท่าผา"
  },
  {
    code: 520309,
    province: "ลำปาง",
    district: "อำเภอเกาะคา",
    subDistrict: "ใหม่พัฒนา"
  },
  {
    code: 520401,
    province: "ลำปาง",
    district: "อำเภอเสริมงาม",
    subDistrict: "ทุ่งงาม"
  },
  {
    code: 520402,
    province: "ลำปาง",
    district: "อำเภอเสริมงาม",
    subDistrict: "เสริมขวา"
  },
  {
    code: 520403,
    province: "ลำปาง",
    district: "อำเภอเสริมงาม",
    subDistrict: "เสริมซ้าย"
  },
  {
    code: 520404,
    province: "ลำปาง",
    district: "อำเภอเสริมงาม",
    subDistrict: "เสริมกลาง"
  },
  {
    code: 520501,
    province: "ลำปาง",
    district: "อำเภองาว",
    subDistrict: "หลวงเหนือ"
  },
  {
    code: 520502,
    province: "ลำปาง",
    district: "อำเภองาว",
    subDistrict: "หลวงใต้"
  },
  {
    code: 520503,
    province: "ลำปาง",
    district: "อำเภองาว",
    subDistrict: "บ้านโป่ง"
  },
  {
    code: 520504,
    province: "ลำปาง",
    district: "อำเภองาว",
    subDistrict: "บ้านร้อง"
  },
  {
    code: 520505,
    province: "ลำปาง",
    district: "อำเภองาว",
    subDistrict: "ปงเตา"
  },
  {
    code: 520506,
    province: "ลำปาง",
    district: "อำเภองาว",
    subDistrict: "นาแก"
  },
  {
    code: 520507,
    province: "ลำปาง",
    district: "อำเภองาว",
    subDistrict: "บ้านอ้อน"
  },
  {
    code: 520508,
    province: "ลำปาง",
    district: "อำเภองาว",
    subDistrict: "บ้านแหง"
  },
  {
    code: 520509,
    province: "ลำปาง",
    district: "อำเภองาว",
    subDistrict: "บ้านหวด"
  },
  {
    code: 520510,
    province: "ลำปาง",
    district: "อำเภองาว",
    subDistrict: "แม่ตีบ"
  },
  {
    code: 520601,
    province: "ลำปาง",
    district: "อำเภอแจ้ห่ม",
    subDistrict: "แจ้ห่ม"
  },
  {
    code: 520602,
    province: "ลำปาง",
    district: "อำเภอแจ้ห่ม",
    subDistrict: "บ้านสา"
  },
  {
    code: 520603,
    province: "ลำปาง",
    district: "อำเภอแจ้ห่ม",
    subDistrict: "ปงดอน"
  },
  {
    code: 520604,
    province: "ลำปาง",
    district: "อำเภอแจ้ห่ม",
    subDistrict: "แม่สุก"
  },
  {
    code: 520605,
    province: "ลำปาง",
    district: "อำเภอแจ้ห่ม",
    subDistrict: "เมืองมาย"
  },
  {
    code: 520606,
    province: "ลำปาง",
    district: "อำเภอแจ้ห่ม",
    subDistrict: "ทุ่งผึ้ง"
  },
  {
    code: 520607,
    province: "ลำปาง",
    district: "อำเภอแจ้ห่ม",
    subDistrict: "วิเชตนคร"
  },
  {
    code: 520701,
    province: "ลำปาง",
    district: "อำเภอวังเหนือ",
    subDistrict: "ทุ่งฮั้ว"
  },
  {
    code: 520702,
    province: "ลำปาง",
    district: "อำเภอวังเหนือ",
    subDistrict: "วังเหนือ"
  },
  {
    code: 520703,
    province: "ลำปาง",
    district: "อำเภอวังเหนือ",
    subDistrict: "วังใต้"
  },
  {
    code: 520704,
    province: "ลำปาง",
    district: "อำเภอวังเหนือ",
    subDistrict: "ร่องเคาะ"
  },
  {
    code: 520705,
    province: "ลำปาง",
    district: "อำเภอวังเหนือ",
    subDistrict: "วังทอง"
  },
  {
    code: 520706,
    province: "ลำปาง",
    district: "อำเภอวังเหนือ",
    subDistrict: "วังซ้าย"
  },
  {
    code: 520707,
    province: "ลำปาง",
    district: "อำเภอวังเหนือ",
    subDistrict: "วังแก้ว"
  },
  {
    code: 520708,
    province: "ลำปาง",
    district: "อำเภอวังเหนือ",
    subDistrict: "วังทรายคำ"
  },
  {
    code: 520801,
    province: "ลำปาง",
    district: "อำเภอเถิน",
    subDistrict: "ล้อมแรด"
  },
  {
    code: 520802,
    province: "ลำปาง",
    district: "อำเภอเถิน",
    subDistrict: "แม่วะ"
  },
  {
    code: 520803,
    province: "ลำปาง",
    district: "อำเภอเถิน",
    subDistrict: "แม่ปะ"
  },
  {
    code: 520804,
    province: "ลำปาง",
    district: "อำเภอเถิน",
    subDistrict: "แม่มอก"
  },
  {
    code: 520805,
    province: "ลำปาง",
    district: "อำเภอเถิน",
    subDistrict: "เวียงมอก"
  },
  {
    code: 520806,
    province: "ลำปาง",
    district: "อำเภอเถิน",
    subDistrict: "นาโป่ง"
  },
  {
    code: 520807,
    province: "ลำปาง",
    district: "อำเภอเถิน",
    subDistrict: "แม่ถอด"
  },
  {
    code: 520808,
    province: "ลำปาง",
    district: "อำเภอเถิน",
    subDistrict: "เถินบุรี"
  },
  {
    code: 520901,
    province: "ลำปาง",
    district: "อำเภอแม่พริก",
    subDistrict: "แม่พริก"
  },
  {
    code: 520902,
    province: "ลำปาง",
    district: "อำเภอแม่พริก",
    subDistrict: "ผาปัง"
  },
  {
    code: 520903,
    province: "ลำปาง",
    district: "อำเภอแม่พริก",
    subDistrict: "แม่ปุ"
  },
  {
    code: 520904,
    province: "ลำปาง",
    district: "อำเภอแม่พริก",
    subDistrict: "พระบาทวังตวง"
  },
  {
    code: 521001,
    province: "ลำปาง",
    district: "อำเภอแม่ทะ",
    subDistrict: "แม่ทะ"
  },
  {
    code: 521002,
    province: "ลำปาง",
    district: "อำเภอแม่ทะ",
    subDistrict: "นาครัว"
  },
  {
    code: 521003,
    province: "ลำปาง",
    district: "อำเภอแม่ทะ",
    subDistrict: "ป่าตัน"
  },
  {
    code: 521004,
    province: "ลำปาง",
    district: "อำเภอแม่ทะ",
    subDistrict: "บ้านกิ่ว"
  },
  {
    code: 521005,
    province: "ลำปาง",
    district: "อำเภอแม่ทะ",
    subDistrict: "บ้านบอม"
  },
  {
    code: 521006,
    province: "ลำปาง",
    district: "อำเภอแม่ทะ",
    subDistrict: "น้ำโจ้"
  },
  {
    code: 521007,
    province: "ลำปาง",
    district: "อำเภอแม่ทะ",
    subDistrict: "ดอนไฟ"
  },
  {
    code: 521008,
    province: "ลำปาง",
    district: "อำเภอแม่ทะ",
    subDistrict: "หัวเสือ"
  },
  {
    code: 521010,
    province: "ลำปาง",
    district: "อำเภอแม่ทะ",
    subDistrict: "วังเงิน"
  },
  {
    code: 521011,
    province: "ลำปาง",
    district: "อำเภอแม่ทะ",
    subDistrict: "สันดอนแก้ว"
  },
  {
    code: 521101,
    province: "ลำปาง",
    district: "อำเภอสบปราบ",
    subDistrict: "สบปราบ"
  },
  {
    code: 521102,
    province: "ลำปาง",
    district: "อำเภอสบปราบ",
    subDistrict: "สมัย"
  },
  {
    code: 521103,
    province: "ลำปาง",
    district: "อำเภอสบปราบ",
    subDistrict: "แม่กัวะ"
  },
  {
    code: 521104,
    province: "ลำปาง",
    district: "อำเภอสบปราบ",
    subDistrict: "นายาง"
  },
  {
    code: 521201,
    province: "ลำปาง",
    district: "อำเภอห้างฉัตร",
    subDistrict: "ห้างฉัตร"
  },
  {
    code: 521202,
    province: "ลำปาง",
    district: "อำเภอห้างฉัตร",
    subDistrict: "หนองหล่ม"
  },
  {
    code: 521203,
    province: "ลำปาง",
    district: "อำเภอห้างฉัตร",
    subDistrict: "เมืองยาว"
  },
  {
    code: 521204,
    province: "ลำปาง",
    district: "อำเภอห้างฉัตร",
    subDistrict: "ปงยางคก"
  },
  {
    code: 521205,
    province: "ลำปาง",
    district: "อำเภอห้างฉัตร",
    subDistrict: "เวียงตาล"
  },
  {
    code: 521206,
    province: "ลำปาง",
    district: "อำเภอห้างฉัตร",
    subDistrict: "แม่สัน"
  },
  {
    code: 521207,
    province: "ลำปาง",
    district: "อำเภอห้างฉัตร",
    subDistrict: "วอแก้ว"
  },
  {
    code: 521301,
    province: "ลำปาง",
    district: "อำเภอเมืองปาน",
    subDistrict: "เมืองปาน"
  },
  {
    code: 521302,
    province: "ลำปาง",
    district: "อำเภอเมืองปาน",
    subDistrict: "บ้านขอ"
  },
  {
    code: 521303,
    province: "ลำปาง",
    district: "อำเภอเมืองปาน",
    subDistrict: "ทุ่งกว๋าว"
  },
  {
    code: 521304,
    province: "ลำปาง",
    district: "อำเภอเมืองปาน",
    subDistrict: "แจ้ซ้อน"
  },
  {
    code: 521305,
    province: "ลำปาง",
    district: "อำเภอเมืองปาน",
    subDistrict: "หัวเมือง"
  },
  {
    code: 530101,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "ท่าอิฐ"
  },
  {
    code: 530102,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "ท่าเสา"
  },
  {
    code: 530103,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "บ้านเกาะ"
  },
  {
    code: 530104,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "ป่าเซ่า"
  },
  {
    code: 530105,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "คุ้งตะเภา"
  },
  {
    code: 530106,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "วังกะพี้"
  },
  {
    code: 530107,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "หาดกรวด"
  },
  {
    code: 530108,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "น้ำริด"
  },
  {
    code: 530109,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "งิ้วงาม"
  },
  {
    code: 530110,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "บ้านด่านนาขาม"
  },
  {
    code: 530111,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "บ้านด่าน"
  },
  {
    code: 530112,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "ผาจุก"
  },
  {
    code: 530113,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "วังดิน"
  },
  {
    code: 530114,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "แสนตอ"
  },
  {
    code: 530115,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "หาดงิ้ว"
  },
  {
    code: 530116,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "ขุนฝาง"
  },
  {
    code: 530117,
    province: "อุตรดิตถ์",
    district: "อำเภอเมืองอุตรดิตถ์",
    subDistrict: "ถ้ำฉลอง"
  },
  {
    code: 530201,
    province: "อุตรดิตถ์",
    district: "อำเภอตรอน",
    subDistrict: "วังแดง"
  },
  {
    code: 530202,
    province: "อุตรดิตถ์",
    district: "อำเภอตรอน",
    subDistrict: "บ้านแก่ง"
  },
  {
    code: 530203,
    province: "อุตรดิตถ์",
    district: "อำเภอตรอน",
    subDistrict: "หาดสองแคว"
  },
  {
    code: 530204,
    province: "อุตรดิตถ์",
    district: "อำเภอตรอน",
    subDistrict: "น้ำอ่าง"
  },
  {
    code: 530205,
    province: "อุตรดิตถ์",
    district: "อำเภอตรอน",
    subDistrict: "ข่อยสูง"
  },
  {
    code: 530301,
    province: "อุตรดิตถ์",
    district: "อำเภอท่าปลา",
    subDistrict: "ท่าปลา"
  },
  {
    code: 530302,
    province: "อุตรดิตถ์",
    district: "อำเภอท่าปลา",
    subDistrict: "หาดล้า"
  },
  {
    code: 530303,
    province: "อุตรดิตถ์",
    district: "อำเภอท่าปลา",
    subDistrict: "ผาเลือด"
  },
  {
    code: 530304,
    province: "อุตรดิตถ์",
    district: "อำเภอท่าปลา",
    subDistrict: "จริม"
  },
  {
    code: 530305,
    province: "อุตรดิตถ์",
    district: "อำเภอท่าปลา",
    subDistrict: "น้ำหมัน"
  },
  {
    code: 530306,
    province: "อุตรดิตถ์",
    district: "อำเภอท่าปลา",
    subDistrict: "ท่าแฝก"
  },
  {
    code: 530307,
    province: "อุตรดิตถ์",
    district: "อำเภอท่าปลา",
    subDistrict: "นางพญา"
  },
  {
    code: 530308,
    province: "อุตรดิตถ์",
    district: "อำเภอท่าปลา",
    subDistrict: "ร่วมจิต"
  },
  {
    code: 530401,
    province: "อุตรดิตถ์",
    district: "อำเภอน้ำปาด",
    subDistrict: "แสนตอ"
  },
  {
    code: 530402,
    province: "อุตรดิตถ์",
    district: "อำเภอน้ำปาด",
    subDistrict: "บ้านฝาย"
  },
  {
    code: 530403,
    province: "อุตรดิตถ์",
    district: "อำเภอน้ำปาด",
    subDistrict: "เด่นเหล็ก"
  },
  {
    code: 530404,
    province: "อุตรดิตถ์",
    district: "อำเภอน้ำปาด",
    subDistrict: "น้ำไคร้"
  },
  {
    code: 530405,
    province: "อุตรดิตถ์",
    district: "อำเภอน้ำปาด",
    subDistrict: "น้ำไผ่"
  },
  {
    code: 530406,
    province: "อุตรดิตถ์",
    district: "อำเภอน้ำปาด",
    subDistrict: "ห้วยมุ่น"
  },
  {
    code: 530501,
    province: "อุตรดิตถ์",
    district: "อำเภอฟากท่า",
    subDistrict: "ฟากท่า"
  },
  {
    code: 530502,
    province: "อุตรดิตถ์",
    district: "อำเภอฟากท่า",
    subDistrict: "สองคอน"
  },
  {
    code: 530503,
    province: "อุตรดิตถ์",
    district: "อำเภอฟากท่า",
    subDistrict: "บ้านเสี้ยว"
  },
  {
    code: 530504,
    province: "อุตรดิตถ์",
    district: "อำเภอฟากท่า",
    subDistrict: "สองห้อง"
  },
  {
    code: 530601,
    province: "อุตรดิตถ์",
    district: "อำเภอบ้านโคก",
    subDistrict: "ม่วงเจ็ดต้น"
  },
  {
    code: 530602,
    province: "อุตรดิตถ์",
    district: "อำเภอบ้านโคก",
    subDistrict: "บ้านโคก"
  },
  {
    code: 530603,
    province: "อุตรดิตถ์",
    district: "อำเภอบ้านโคก",
    subDistrict: "นาขุม"
  },
  {
    code: 530604,
    province: "อุตรดิตถ์",
    district: "อำเภอบ้านโคก",
    subDistrict: "บ่อเบี้ย"
  },
  {
    code: 530701,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "ในเมือง"
  },
  {
    code: 530702,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "บ้านดารา"
  },
  {
    code: 530703,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "ไร่อ้อย"
  },
  {
    code: 530704,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "ท่าสัก"
  },
  {
    code: 530705,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "คอรุม"
  },
  {
    code: 530706,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "บ้านหม้อ"
  },
  {
    code: 530707,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "ท่ามะเฟือง"
  },
  {
    code: 530708,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "บ้านโคน"
  },
  {
    code: 530709,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "พญาแมน"
  },
  {
    code: 530710,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "นาอิน"
  },
  {
    code: 530711,
    province: "อุตรดิตถ์",
    district: "อำเภอพิชัย",
    subDistrict: "นายาง"
  },
  {
    code: 530801,
    province: "อุตรดิตถ์",
    district: "อำเภอลับแล",
    subDistrict: "ศรีพนมมาศ"
  },
  {
    code: 530802,
    province: "อุตรดิตถ์",
    district: "อำเภอลับแล",
    subDistrict: "แม่พูล"
  },
  {
    code: 530803,
    province: "อุตรดิตถ์",
    district: "อำเภอลับแล",
    subDistrict: "นานกกก"
  },
  {
    code: 530804,
    province: "อุตรดิตถ์",
    district: "อำเภอลับแล",
    subDistrict: "ฝายหลวง"
  },
  {
    code: 530805,
    province: "อุตรดิตถ์",
    district: "อำเภอลับแล",
    subDistrict: "ชัยจุมพล"
  },
  {
    code: 530806,
    province: "อุตรดิตถ์",
    district: "อำเภอลับแล",
    subDistrict: "ไผ่ล้อม"
  },
  {
    code: 530807,
    province: "อุตรดิตถ์",
    district: "อำเภอลับแล",
    subDistrict: "ทุ่งยั้ง"
  },
  {
    code: 530808,
    province: "อุตรดิตถ์",
    district: "อำเภอลับแล",
    subDistrict: "ด่านแม่คำมัน"
  },
  {
    code: 530901,
    province: "อุตรดิตถ์",
    district: "อำเภอทองแสนขัน",
    subDistrict: "ผักขวง"
  },
  {
    code: 530902,
    province: "อุตรดิตถ์",
    district: "อำเภอทองแสนขัน",
    subDistrict: "บ่อทอง"
  },
  {
    code: 530903,
    province: "อุตรดิตถ์",
    district: "อำเภอทองแสนขัน",
    subDistrict: "ป่าคาย"
  },
  {
    code: 530904,
    province: "อุตรดิตถ์",
    district: "อำเภอทองแสนขัน",
    subDistrict: "น้ำพี้"
  },
  {
    code: 540101,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "ในเวียง"
  },
  {
    code: 540102,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "นาจักร"
  },
  {
    code: 540103,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "น้ำชำ"
  },
  {
    code: 540104,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "ป่าแดง"
  },
  {
    code: 540105,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "ทุ่งโฮ้ง"
  },
  {
    code: 540106,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "เหมืองหม้อ"
  },
  {
    code: 540107,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "วังธง"
  },
  {
    code: 540108,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "แม่หล่าย"
  },
  {
    code: 540109,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "ห้วยม้า"
  },
  {
    code: 540110,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "ป่าแมต"
  },
  {
    code: 540111,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "บ้านถิ่น"
  },
  {
    code: 540112,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "สวนเขื่อน"
  },
  {
    code: 540113,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "วังหงส์"
  },
  {
    code: 540114,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "แม่คำมี"
  },
  {
    code: 540115,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "ทุ่งกวาว"
  },
  {
    code: 540116,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 540117,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "แม่ยม"
  },
  {
    code: 540118,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "ช่อแฮ"
  },
  {
    code: 540119,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "ร่องฟอง"
  },
  {
    code: 540120,
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    subDistrict: "กาญจนา"
  },
  {
    code: 540201,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "ร้องกวาง"
  },
  {
    code: 540204,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "ร้องเข็ม"
  },
  {
    code: 540205,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "น้ำเลา"
  },
  {
    code: 540206,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "บ้านเวียง"
  },
  {
    code: 540207,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "ทุ่งศรี"
  },
  {
    code: 540208,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "แม่ยางตาล"
  },
  {
    code: 540209,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "แม่ยางฮ่อ"
  },
  {
    code: 540210,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "ไผ่โทน"
  },
  {
    code: 540213,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "ห้วยโรง"
  },
  {
    code: 540214,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "แม่ทราย"
  },
  {
    code: 540215,
    province: "แพร่",
    district: "อำเภอร้องกวาง",
    subDistrict: "แม่ยางร้อง"
  },
  {
    code: 540301,
    province: "แพร่",
    district: "อำเภอลอง",
    subDistrict: "ห้วยอ้อ"
  },
  {
    code: 540302,
    province: "แพร่",
    district: "อำเภอลอง",
    subDistrict: "บ้านปิน"
  },
  {
    code: 540303,
    province: "แพร่",
    district: "อำเภอลอง",
    subDistrict: "ต้าผามอก"
  },
  {
    code: 540304,
    province: "แพร่",
    district: "อำเภอลอง",
    subDistrict: "เวียงต้า"
  },
  {
    code: 540305,
    province: "แพร่",
    district: "อำเภอลอง",
    subDistrict: "ปากกาง"
  },
  {
    code: 540306,
    province: "แพร่",
    district: "อำเภอลอง",
    subDistrict: "หัวทุ่ง"
  },
  {
    code: 540307,
    province: "แพร่",
    district: "อำเภอลอง",
    subDistrict: "ทุ่งแล้ง"
  },
  {
    code: 540308,
    province: "แพร่",
    district: "อำเภอลอง",
    subDistrict: "บ่อเหล็กลอง"
  },
  {
    code: 540309,
    province: "แพร่",
    district: "อำเภอลอง",
    subDistrict: "แม่ปาน"
  },
  {
    code: 540401,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "สูงเม่น"
  },
  {
    code: 540402,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "น้ำชำ"
  },
  {
    code: 540403,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "หัวฝาย"
  },
  {
    code: 540404,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "ดอนมูล"
  },
  {
    code: 540405,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "บ้านเหล่า"
  },
  {
    code: 540406,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "บ้านกวาง"
  },
  {
    code: 540407,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "บ้านปง"
  },
  {
    code: 540408,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "บ้านกาศ"
  },
  {
    code: 540409,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "ร่องกาศ"
  },
  {
    code: 540410,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "สบสาย"
  },
  {
    code: 540411,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "เวียงทอง"
  },
  {
    code: 540412,
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    subDistrict: "พระหลวง"
  },
  {
    code: 540501,
    province: "แพร่",
    district: "อำเภอเด่นชัย",
    subDistrict: "เด่นชัย"
  },
  {
    code: 540502,
    province: "แพร่",
    district: "อำเภอเด่นชัย",
    subDistrict: "แม่จั๊วะ"
  },
  {
    code: 540503,
    province: "แพร่",
    district: "อำเภอเด่นชัย",
    subDistrict: "ไทรย้อย"
  },
  {
    code: 540504,
    province: "แพร่",
    district: "อำเภอเด่นชัย",
    subDistrict: "ห้วยไร่"
  },
  {
    code: 540505,
    province: "แพร่",
    district: "อำเภอเด่นชัย",
    subDistrict: "ปงป่าหวาย"
  },
  {
    code: 540601,
    province: "แพร่",
    district: "อำเภอสอง",
    subDistrict: "บ้านหนุน"
  },
  {
    code: 540602,
    province: "แพร่",
    district: "อำเภอสอง",
    subDistrict: "บ้านกลาง"
  },
  {
    code: 540603,
    province: "แพร่",
    district: "อำเภอสอง",
    subDistrict: "ห้วยหม้าย"
  },
  {
    code: 540604,
    province: "แพร่",
    district: "อำเภอสอง",
    subDistrict: "เตาปูน"
  },
  {
    code: 540605,
    province: "แพร่",
    district: "อำเภอสอง",
    subDistrict: "หัวเมือง"
  },
  {
    code: 540606,
    province: "แพร่",
    district: "อำเภอสอง",
    subDistrict: "สะเอียบ"
  },
  {
    code: 540607,
    province: "แพร่",
    district: "อำเภอสอง",
    subDistrict: "แดนชุมพล"
  },
  {
    code: 540608,
    province: "แพร่",
    district: "อำเภอสอง",
    subDistrict: "ทุ่งน้าว"
  },
  {
    code: 540701,
    province: "แพร่",
    district: "อำเภอวังชิ้น",
    subDistrict: "วังชิ้น"
  },
  {
    code: 540702,
    province: "แพร่",
    district: "อำเภอวังชิ้น",
    subDistrict: "สรอย"
  },
  {
    code: 540703,
    province: "แพร่",
    district: "อำเภอวังชิ้น",
    subDistrict: "แม่ป้าก"
  },
  {
    code: 540704,
    province: "แพร่",
    district: "อำเภอวังชิ้น",
    subDistrict: "นาพูน"
  },
  {
    code: 540705,
    province: "แพร่",
    district: "อำเภอวังชิ้น",
    subDistrict: "แม่พุง"
  },
  {
    code: 540706,
    province: "แพร่",
    district: "อำเภอวังชิ้น",
    subDistrict: "ป่าสัก"
  },
  {
    code: 540707,
    province: "แพร่",
    district: "อำเภอวังชิ้น",
    subDistrict: "แม่เกิ๋ง"
  },
  {
    code: 540801,
    province: "แพร่",
    district: "อำเภอหนองม่วงไข่",
    subDistrict: "แม่คำมี"
  },
  {
    code: 540802,
    province: "แพร่",
    district: "อำเภอหนองม่วงไข่",
    subDistrict: "หนองม่วงไข่"
  },
  {
    code: 540803,
    province: "แพร่",
    district: "อำเภอหนองม่วงไข่",
    subDistrict: "น้ำรัด"
  },
  {
    code: 540804,
    province: "แพร่",
    district: "อำเภอหนองม่วงไข่",
    subDistrict: "วังหลวง"
  },
  {
    code: 540805,
    province: "แพร่",
    district: "อำเภอหนองม่วงไข่",
    subDistrict: "ตำหนักธรรม"
  },
  {
    code: 540806,
    province: "แพร่",
    district: "อำเภอหนองม่วงไข่",
    subDistrict: "ทุ่งแค้ว"
  },
  {
    code: 550101,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "ในเวียง"
  },
  {
    code: 550102,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "บ่อ"
  },
  {
    code: 550103,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "ผาสิงห์"
  },
  {
    code: 550104,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "ไชยสถาน"
  },
  {
    code: 550105,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "ถืมตอง"
  },
  {
    code: 550106,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "เรือง"
  },
  {
    code: 550107,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "นาซาว"
  },
  {
    code: 550108,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "ดู่ใต้"
  },
  {
    code: 550109,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "กองควาย"
  },
  {
    code: 550116,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "บ่อสวก"
  },
  {
    code: 550117,
    province: "น่าน",
    district: "อำเภอเมืองน่าน",
    subDistrict: "สะเนียน"
  },
  {
    code: 550202,
    province: "น่าน",
    district: "อำเภอแม่จริม",
    subDistrict: "หนองแดง"
  },
  {
    code: 550203,
    province: "น่าน",
    district: "อำเภอแม่จริม",
    subDistrict: "หมอเมือง"
  },
  {
    code: 550204,
    province: "น่าน",
    district: "อำเภอแม่จริม",
    subDistrict: "น้ำพาง"
  },
  {
    code: 550205,
    province: "น่าน",
    district: "อำเภอแม่จริม",
    subDistrict: "น้ำปาย"
  },
  {
    code: 550206,
    province: "น่าน",
    district: "อำเภอแม่จริม",
    subDistrict: "แม่จริม"
  },
  {
    code: 550301,
    province: "น่าน",
    district: "อำเภอบ้านหลวง",
    subDistrict: "บ้านฟ้า"
  },
  {
    code: 550302,
    province: "น่าน",
    district: "อำเภอบ้านหลวง",
    subDistrict: "ป่าคาหลวง"
  },
  {
    code: 550303,
    province: "น่าน",
    district: "อำเภอบ้านหลวง",
    subDistrict: "สวด"
  },
  {
    code: 550304,
    province: "น่าน",
    district: "อำเภอบ้านหลวง",
    subDistrict: "บ้านพี้"
  },
  {
    code: 550401,
    province: "น่าน",
    district: "อำเภอนาน้อย",
    subDistrict: "นาน้อย"
  },
  {
    code: 550402,
    province: "น่าน",
    district: "อำเภอนาน้อย",
    subDistrict: "เชียงของ"
  },
  {
    code: 550403,
    province: "น่าน",
    district: "อำเภอนาน้อย",
    subDistrict: "ศรีษะเกษ"
  },
  {
    code: 550404,
    province: "น่าน",
    district: "อำเภอนาน้อย",
    subDistrict: "สถาน"
  },
  {
    code: 550405,
    province: "น่าน",
    district: "อำเภอนาน้อย",
    subDistrict: "สันทะ"
  },
  {
    code: 550406,
    province: "น่าน",
    district: "อำเภอนาน้อย",
    subDistrict: "บัวใหญ่"
  },
  {
    code: 550407,
    province: "น่าน",
    district: "อำเภอนาน้อย",
    subDistrict: "น้ำตก"
  },
  {
    code: 550501,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "ปัว"
  },
  {
    code: 550502,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "แงง"
  },
  {
    code: 550503,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "สถาน"
  },
  {
    code: 550504,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "ศิลาแลง"
  },
  {
    code: 550505,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "ศิลาเพชร"
  },
  {
    code: 550506,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "อวน"
  },
  {
    code: 550509,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "ไชยวัฒนา"
  },
  {
    code: 550510,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "เจดีย์ชัย"
  },
  {
    code: 550511,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "ภูคา"
  },
  {
    code: 550512,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "สกาด"
  },
  {
    code: 550513,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "ป่ากลาง"
  },
  {
    code: 550514,
    province: "น่าน",
    district: "อำเภอปัว",
    subDistrict: "วรนคร"
  },
  {
    code: 550601,
    province: "น่าน",
    district: "อำเภอท่าวังผา",
    subDistrict: "ริม"
  },
  {
    code: 550602,
    province: "น่าน",
    district: "อำเภอท่าวังผา",
    subDistrict: "ป่าคา"
  },
  {
    code: 550603,
    province: "น่าน",
    district: "อำเภอท่าวังผา",
    subDistrict: "ผาตอ"
  },
  {
    code: 550604,
    province: "น่าน",
    district: "อำเภอท่าวังผา",
    subDistrict: "ยม"
  },
  {
    code: 550605,
    province: "น่าน",
    district: "อำเภอท่าวังผา",
    subDistrict: "ตาลชุม"
  },
  {
    code: 550606,
    province: "น่าน",
    district: "อำเภอท่าวังผา",
    subDistrict: "ศรีภูมิ"
  },
  {
    code: 550607,
    province: "น่าน",
    district: "อำเภอท่าวังผา",
    subDistrict: "จอมพระ"
  },
  {
    code: 550608,
    province: "น่าน",
    district: "อำเภอท่าวังผา",
    subDistrict: "แสนทอง"
  },
  {
    code: 550609,
    province: "น่าน",
    district: "อำเภอท่าวังผา",
    subDistrict: "ท่าวังผา"
  },
  {
    code: 550610,
    province: "น่าน",
    district: "อำเภอท่าวังผา",
    subDistrict: "ผาทอง"
  },
  {
    code: 550701,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "กลางเวียง"
  },
  {
    code: 550702,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "ขึ่ง"
  },
  {
    code: 550703,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "ไหล่น่าน"
  },
  {
    code: 550704,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "ตาลชุม"
  },
  {
    code: 550705,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "นาเหลือง"
  },
  {
    code: 550706,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "ส้าน"
  },
  {
    code: 550707,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "น้ำมวบ"
  },
  {
    code: 550708,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "น้ำปั้ว"
  },
  {
    code: 550709,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "ยาบหัวนา"
  },
  {
    code: 550710,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "ปงสนุก"
  },
  {
    code: 550711,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "อ่ายนาไลย"
  },
  {
    code: 550712,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "ส้านนาหนองใหม่"
  },
  {
    code: 550713,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "แม่ขะนิง"
  },
  {
    code: 550714,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "แม่สาคร"
  },
  {
    code: 550715,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "จอมจันทร์"
  },
  {
    code: 550716,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "แม่สา"
  },
  {
    code: 550717,
    province: "น่าน",
    district: "อำเภอเวียงสา",
    subDistrict: "ทุ่งศรีทอง"
  },
  {
    code: 550801,
    province: "น่าน",
    district: "อำเภอทุ่งช้าง",
    subDistrict: "ปอน"
  },
  {
    code: 550802,
    province: "น่าน",
    district: "อำเภอทุ่งช้าง",
    subDistrict: "งอบ"
  },
  {
    code: 550803,
    province: "น่าน",
    district: "อำเภอทุ่งช้าง",
    subDistrict: "และ"
  },
  {
    code: 550804,
    province: "น่าน",
    district: "อำเภอทุ่งช้าง",
    subDistrict: "ทุ่งช้าง"
  },
  {
    code: 550901,
    province: "น่าน",
    district: "อำเภอเชียงกลาง",
    subDistrict: "เชียงกลาง"
  },
  {
    code: 550902,
    province: "น่าน",
    district: "อำเภอเชียงกลาง",
    subDistrict: "เปือ"
  },
  {
    code: 550903,
    province: "น่าน",
    district: "อำเภอเชียงกลาง",
    subDistrict: "เชียงคาน"
  },
  {
    code: 550904,
    province: "น่าน",
    district: "อำเภอเชียงกลาง",
    subDistrict: "พระธาตุ"
  },
  {
    code: 550908,
    province: "น่าน",
    district: "อำเภอเชียงกลาง",
    subDistrict: "พญาแก้ว"
  },
  {
    code: 550909,
    province: "น่าน",
    district: "อำเภอเชียงกลาง",
    subDistrict: "พระพุทธบาท"
  },
  {
    code: 551001,
    province: "น่าน",
    district: "อำเภอนาหมื่น",
    subDistrict: "นาทะนุง"
  },
  {
    code: 551002,
    province: "น่าน",
    district: "อำเภอนาหมื่น",
    subDistrict: "บ่อแก้ว"
  },
  {
    code: 551003,
    province: "น่าน",
    district: "อำเภอนาหมื่น",
    subDistrict: "เมืองลี"
  },
  {
    code: 551004,
    province: "น่าน",
    district: "อำเภอนาหมื่น",
    subDistrict: "ปิงหลวง"
  },
  {
    code: 551101,
    province: "น่าน",
    district: "อำเภอสันติสุข",
    subDistrict: "ดู่พงษ์"
  },
  {
    code: 551102,
    province: "น่าน",
    district: "อำเภอสันติสุข",
    subDistrict: "ป่าแลวหลวง"
  },
  {
    code: 551103,
    province: "น่าน",
    district: "อำเภอสันติสุข",
    subDistrict: "พงษ์"
  },
  {
    code: 551201,
    province: "น่าน",
    district: "อำเภอบ่อเกลือ",
    subDistrict: "บ่อเกลือเหนือ"
  },
  {
    code: 551202,
    province: "น่าน",
    district: "อำเภอบ่อเกลือ",
    subDistrict: "บ่อเกลือใต้"
  },
  {
    code: 551204,
    province: "น่าน",
    district: "อำเภอบ่อเกลือ",
    subDistrict: "ภูฟ้า"
  },
  {
    code: 551205,
    province: "น่าน",
    district: "อำเภอบ่อเกลือ",
    subDistrict: "ดงพญา"
  },
  {
    code: 551301,
    province: "น่าน",
    district: "อำเภอสองแคว",
    subDistrict: "นาไร่หลวง"
  },
  {
    code: 551302,
    province: "น่าน",
    district: "อำเภอสองแคว",
    subDistrict: "ชนแดน"
  },
  {
    code: 551303,
    province: "น่าน",
    district: "อำเภอสองแคว",
    subDistrict: "ยอด"
  },
  {
    code: 551401,
    province: "น่าน",
    district: "อำเภอภูเพียง",
    subDistrict: "ม่วงตึ๊ด"
  },
  {
    code: 551402,
    province: "น่าน",
    district: "อำเภอภูเพียง",
    subDistrict: "นาปัง"
  },
  {
    code: 551403,
    province: "น่าน",
    district: "อำเภอภูเพียง",
    subDistrict: "น้ำแก่น"
  },
  {
    code: 551404,
    province: "น่าน",
    district: "อำเภอภูเพียง",
    subDistrict: "น้ำเกี๋ยน"
  },
  {
    code: 551405,
    province: "น่าน",
    district: "อำเภอภูเพียง",
    subDistrict: "เมืองจัง"
  },
  {
    code: 551406,
    province: "น่าน",
    district: "อำเภอภูเพียง",
    subDistrict: "ท่าน้าว"
  },
  {
    code: 551407,
    province: "น่าน",
    district: "อำเภอภูเพียง",
    subDistrict: "ฝายแก้ว"
  },
  {
    code: 551501,
    province: "น่าน",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ห้วยโก๋น"
  },
  {
    code: 551502,
    province: "น่าน",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ขุนน่าน"
  },
  {
    code: 560101,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "เวียง"
  },
  {
    code: 560102,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "แม่ต๋ำ"
  },
  {
    code: 560104,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "แม่นาเรือ"
  },
  {
    code: 560105,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "บ้านตุ่น"
  },
  {
    code: 560106,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "บ้านต๊ำ"
  },
  {
    code: 560107,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "บ้านต๋อม"
  },
  {
    code: 560108,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "แม่ปืม"
  },
  {
    code: 560110,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "แม่กา"
  },
  {
    code: 560111,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 560112,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "จำป่าหวาย"
  },
  {
    code: 560113,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "ท่าวังทอง"
  },
  {
    code: 560114,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "แม่ใส"
  },
  {
    code: 560115,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "บ้านสาง"
  },
  {
    code: 560116,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "ท่าจำปี"
  },
  {
    code: 560118,
    province: "พะเยา",
    district: "อำเภอเมืองพะเยา",
    subDistrict: "สันป่าม่วง"
  },
  {
    code: 560201,
    province: "พะเยา",
    district: "อำเภอจุน",
    subDistrict: "ห้วยข้าวก่ำ"
  },
  {
    code: 560202,
    province: "พะเยา",
    district: "อำเภอจุน",
    subDistrict: "จุน"
  },
  {
    code: 560203,
    province: "พะเยา",
    district: "อำเภอจุน",
    subDistrict: "ลอ"
  },
  {
    code: 560204,
    province: "พะเยา",
    district: "อำเภอจุน",
    subDistrict: "หงส์หิน"
  },
  {
    code: 560205,
    province: "พะเยา",
    district: "อำเภอจุน",
    subDistrict: "ทุ่งรวงทอง"
  },
  {
    code: 560206,
    province: "พะเยา",
    district: "อำเภอจุน",
    subDistrict: "ห้วยยางขาม"
  },
  {
    code: 560207,
    province: "พะเยา",
    district: "อำเภอจุน",
    subDistrict: "พระธาตุขิงแกง"
  },
  {
    code: 560301,
    province: "พะเยา",
    district: "อำเภอเชียงคำ",
    subDistrict: "หย่วน"
  },
  {
    code: 560306,
    province: "พะเยา",
    district: "อำเภอเชียงคำ",
    subDistrict: "น้ำแวน"
  },
  {
    code: 560307,
    province: "พะเยา",
    district: "อำเภอเชียงคำ",
    subDistrict: "เวียง"
  },
  {
    code: 560308,
    province: "พะเยา",
    district: "อำเภอเชียงคำ",
    subDistrict: "ฝายกวาง"
  },
  {
    code: 560309,
    province: "พะเยา",
    district: "อำเภอเชียงคำ",
    subDistrict: "เจดีย์คำ"
  },
  {
    code: 560310,
    province: "พะเยา",
    district: "อำเภอเชียงคำ",
    subDistrict: "ร่มเย็น"
  },
  {
    code: 560311,
    province: "พะเยา",
    district: "อำเภอเชียงคำ",
    subDistrict: "เชียงบาน"
  },
  {
    code: 560312,
    province: "พะเยา",
    district: "อำเภอเชียงคำ",
    subDistrict: "แม่ลาว"
  },
  {
    code: 560313,
    province: "พะเยา",
    district: "อำเภอเชียงคำ",
    subDistrict: "อ่างทอง"
  },
  {
    code: 560314,
    province: "พะเยา",
    district: "อำเภอเชียงคำ",
    subDistrict: "ทุ่งผาสุข"
  },
  {
    code: 560401,
    province: "พะเยา",
    district: "อำเภอเชียงม่วน",
    subDistrict: "เชียงม่วน"
  },
  {
    code: 560402,
    province: "พะเยา",
    district: "อำเภอเชียงม่วน",
    subDistrict: "บ้านมาง"
  },
  {
    code: 560403,
    province: "พะเยา",
    district: "อำเภอเชียงม่วน",
    subDistrict: "สระ"
  },
  {
    code: 560501,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "ดอกคำใต้"
  },
  {
    code: 560502,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "ดอนศรีชุม"
  },
  {
    code: 560503,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "บ้านถ้ำ"
  },
  {
    code: 560504,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "บ้านปิน"
  },
  {
    code: 560505,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "ห้วยลาน"
  },
  {
    code: 560506,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "สันโค้ง"
  },
  {
    code: 560507,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "ป่าซาง"
  },
  {
    code: 560508,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "หนองหล่ม"
  },
  {
    code: 560509,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "ดงสุวรรณ"
  },
  {
    code: 560510,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "บุญเกิด"
  },
  {
    code: 560511,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "สว่างอารมณ์"
  },
  {
    code: 560512,
    province: "พะเยา",
    district: "อำเภอดอกคำใต้",
    subDistrict: "คือเวียง"
  },
  {
    code: 560601,
    province: "พะเยา",
    district: "อำเภอปง",
    subDistrict: "ปง"
  },
  {
    code: 560602,
    province: "พะเยา",
    district: "อำเภอปง",
    subDistrict: "ควร"
  },
  {
    code: 560603,
    province: "พะเยา",
    district: "อำเภอปง",
    subDistrict: "ออย"
  },
  {
    code: 560604,
    province: "พะเยา",
    district: "อำเภอปง",
    subDistrict: "งิม"
  },
  {
    code: 560605,
    province: "พะเยา",
    district: "อำเภอปง",
    subDistrict: "ผาช้างน้อย"
  },
  {
    code: 560606,
    province: "พะเยา",
    district: "อำเภอปง",
    subDistrict: "นาปรัง"
  },
  {
    code: 560607,
    province: "พะเยา",
    district: "อำเภอปง",
    subDistrict: "ขุนควร"
  },
  {
    code: 560701,
    province: "พะเยา",
    district: "อำเภอแม่ใจ",
    subDistrict: "แม่ใจ"
  },
  {
    code: 560702,
    province: "พะเยา",
    district: "อำเภอแม่ใจ",
    subDistrict: "ศรีถ้อย"
  },
  {
    code: 560703,
    province: "พะเยา",
    district: "อำเภอแม่ใจ",
    subDistrict: "แม่สุก"
  },
  {
    code: 560704,
    province: "พะเยา",
    district: "อำเภอแม่ใจ",
    subDistrict: "ป่าแฝก"
  },
  {
    code: 560705,
    province: "พะเยา",
    district: "อำเภอแม่ใจ",
    subDistrict: "บ้านเหล่า"
  },
  {
    code: 560706,
    province: "พะเยา",
    district: "อำเภอแม่ใจ",
    subDistrict: "เจริญราษฎร์"
  },
  {
    code: 560801,
    province: "พะเยา",
    district: "อำเภอภูซาง",
    subDistrict: "ภูซาง"
  },
  {
    code: 560802,
    province: "พะเยา",
    district: "อำเภอภูซาง",
    subDistrict: "ป่าสัก"
  },
  {
    code: 560803,
    province: "พะเยา",
    district: "อำเภอภูซาง",
    subDistrict: "ทุ่งกล้วย"
  },
  {
    code: 560804,
    province: "พะเยา",
    district: "อำเภอภูซาง",
    subDistrict: "เชียงแรง"
  },
  {
    code: 560805,
    province: "พะเยา",
    district: "อำเภอภูซาง",
    subDistrict: "สบบง"
  },
  {
    code: 560901,
    province: "พะเยา",
    district: "อำเภอภูกามยาว",
    subDistrict: "ห้วยแก้ว"
  },
  {
    code: 560902,
    province: "พะเยา",
    district: "อำเภอภูกามยาว",
    subDistrict: "ดงเจน"
  },
  {
    code: 560903,
    province: "พะเยา",
    district: "อำเภอภูกามยาว",
    subDistrict: "แม่อิง"
  },
  {
    code: 570101,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "เวียง"
  },
  {
    code: 570102,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "รอบเวียง"
  },
  {
    code: 570103,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "บ้านดู่"
  },
  {
    code: 570104,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "นางแล"
  },
  {
    code: 570105,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "แม่ข้าวต้ม"
  },
  {
    code: 570106,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "แม่ยาว"
  },
  {
    code: 570107,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "สันทราย"
  },
  {
    code: 570111,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "แม่กรณ์"
  },
  {
    code: 570112,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "ห้วยชมภู"
  },
  {
    code: 570113,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "ห้วยสัก"
  },
  {
    code: 570114,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "ริมกก"
  },
  {
    code: 570115,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "ดอยลาน"
  },
  {
    code: 570116,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "ป่าอ้อดอนชัย"
  },
  {
    code: 570118,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "ท่าสาย"
  },
  {
    code: 570120,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "ดอยฮาง"
  },
  {
    code: 570121,
    province: "เชียงราย",
    district: "อำเภอเมืองเชียงราย",
    subDistrict: "ท่าสุด"
  },
  {
    code: 570202,
    province: "เชียงราย",
    district: "อำเภอเวียงชัย",
    subDistrict: "เวียงชัย"
  },
  {
    code: 570203,
    province: "เชียงราย",
    district: "อำเภอเวียงชัย",
    subDistrict: "ผางาม"
  },
  {
    code: 570204,
    province: "เชียงราย",
    district: "อำเภอเวียงชัย",
    subDistrict: "เวียงเหนือ"
  },
  {
    code: 570206,
    province: "เชียงราย",
    district: "อำเภอเวียงชัย",
    subDistrict: "ดอนศิลา"
  },
  {
    code: 570208,
    province: "เชียงราย",
    district: "อำเภอเวียงชัย",
    subDistrict: "เมืองชุม"
  },
  {
    code: 570301,
    province: "เชียงราย",
    district: "อำเภอเชียงของ",
    subDistrict: "เวียง"
  },
  {
    code: 570302,
    province: "เชียงราย",
    district: "อำเภอเชียงของ",
    subDistrict: "สถาน"
  },
  {
    code: 570303,
    province: "เชียงราย",
    district: "อำเภอเชียงของ",
    subDistrict: "ครึ่ง"
  },
  {
    code: 570304,
    province: "เชียงราย",
    district: "อำเภอเชียงของ",
    subDistrict: "บุญเรือง"
  },
  {
    code: 570305,
    province: "เชียงราย",
    district: "อำเภอเชียงของ",
    subDistrict: "ห้วยซ้อ"
  },
  {
    code: 570308,
    province: "เชียงราย",
    district: "อำเภอเชียงของ",
    subDistrict: "ศรีดอนชัย"
  },
  {
    code: 570310,
    province: "เชียงราย",
    district: "อำเภอเชียงของ",
    subDistrict: "ริมโขง"
  },
  {
    code: 570401,
    province: "เชียงราย",
    district: "อำเภอเทิง",
    subDistrict: "เวียง"
  },
  {
    code: 570402,
    province: "เชียงราย",
    district: "อำเภอเทิง",
    subDistrict: "งิ้ว"
  },
  {
    code: 570403,
    province: "เชียงราย",
    district: "อำเภอเทิง",
    subDistrict: "ปล้อง"
  },
  {
    code: 570404,
    province: "เชียงราย",
    district: "อำเภอเทิง",
    subDistrict: "แม่ลอย"
  },
  {
    code: 570405,
    province: "เชียงราย",
    district: "อำเภอเทิง",
    subDistrict: "เชียงเคี่ยน"
  },
  {
    code: 570409,
    province: "เชียงราย",
    district: "อำเภอเทิง",
    subDistrict: "ตับเต่า"
  },
  {
    code: 570410,
    province: "เชียงราย",
    district: "อำเภอเทิง",
    subDistrict: "หงาว"
  },
  {
    code: 570411,
    province: "เชียงราย",
    district: "อำเภอเทิง",
    subDistrict: "สันทรายงาม"
  },
  {
    code: 570412,
    province: "เชียงราย",
    district: "อำเภอเทิง",
    subDistrict: "ศรีดอนไชย"
  },
  {
    code: 570413,
    province: "เชียงราย",
    district: "อำเภอเทิง",
    subDistrict: "หนองแรด"
  },
  {
    code: 570501,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "สันมะเค็ด"
  },
  {
    code: 570502,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "แม่อ้อ"
  },
  {
    code: 570503,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "ธารทอง"
  },
  {
    code: 570504,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "สันติสุข"
  },
  {
    code: 570505,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "ดอยงาม"
  },
  {
    code: 570506,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "หัวง้ม"
  },
  {
    code: 570507,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "เจริญเมือง"
  },
  {
    code: 570508,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "ป่าหุ่ง"
  },
  {
    code: 570509,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "ม่วงคำ"
  },
  {
    code: 570510,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "ทรายขาว"
  },
  {
    code: 570511,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "สันกลาง"
  },
  {
    code: 570512,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "แม่เย็น"
  },
  {
    code: 570513,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "เมืองพาน"
  },
  {
    code: 570514,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "ทานตะวัน"
  },
  {
    code: 570515,
    province: "เชียงราย",
    district: "อำเภอพาน",
    subDistrict: "เวียงห้าว"
  },
  {
    code: 570601,
    province: "เชียงราย",
    district: "อำเภอป่าแดด",
    subDistrict: "ป่าแดด"
  },
  {
    code: 570602,
    province: "เชียงราย",
    district: "อำเภอป่าแดด",
    subDistrict: "ป่าแงะ"
  },
  {
    code: 570603,
    province: "เชียงราย",
    district: "อำเภอป่าแดด",
    subDistrict: "สันมะค่า"
  },
  {
    code: 570605,
    province: "เชียงราย",
    district: "อำเภอป่าแดด",
    subDistrict: "โรงช้าง"
  },
  {
    code: 570606,
    province: "เชียงราย",
    district: "อำเภอป่าแดด",
    subDistrict: "ศรีโพธิ์เงิน"
  },
  {
    code: 570701,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "แม่จัน"
  },
  {
    code: 570702,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "จันจว้า"
  },
  {
    code: 570703,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "แม่คำ"
  },
  {
    code: 570704,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "ป่าซาง"
  },
  {
    code: 570705,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "สันทราย"
  },
  {
    code: 570706,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "ท่าข้าวเปลือก"
  },
  {
    code: 570708,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "ป่าตึง"
  },
  {
    code: 570710,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "แม่ไร่"
  },
  {
    code: 570711,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "ศรีค้ำ"
  },
  {
    code: 570712,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "จันจว้าใต้"
  },
  {
    code: 570713,
    province: "เชียงราย",
    district: "อำเภอแม่จัน",
    subDistrict: "จอมสวรรค์"
  },
  {
    code: 570801,
    province: "เชียงราย",
    district: "อำเภอเชียงแสน",
    subDistrict: "เวียง"
  },
  {
    code: 570802,
    province: "เชียงราย",
    district: "อำเภอเชียงแสน",
    subDistrict: "ป่าสัก"
  },
  {
    code: 570803,
    province: "เชียงราย",
    district: "อำเภอเชียงแสน",
    subDistrict: "บ้านแซว"
  },
  {
    code: 570804,
    province: "เชียงราย",
    district: "อำเภอเชียงแสน",
    subDistrict: "ศรีดอนมูล"
  },
  {
    code: 570805,
    province: "เชียงราย",
    district: "อำเภอเชียงแสน",
    subDistrict: "แม่เงิน"
  },
  {
    code: 570806,
    province: "เชียงราย",
    district: "อำเภอเชียงแสน",
    subDistrict: "โยนก"
  },
  {
    code: 570901,
    province: "เชียงราย",
    district: "อำเภอแม่สาย",
    subDistrict: "แม่สาย"
  },
  {
    code: 570902,
    province: "เชียงราย",
    district: "อำเภอแม่สาย",
    subDistrict: "ห้วยไคร้"
  },
  {
    code: 570903,
    province: "เชียงราย",
    district: "อำเภอแม่สาย",
    subDistrict: "เกาะช้าง"
  },
  {
    code: 570904,
    province: "เชียงราย",
    district: "อำเภอแม่สาย",
    subDistrict: "โป่งผา"
  },
  {
    code: 570905,
    province: "เชียงราย",
    district: "อำเภอแม่สาย",
    subDistrict: "ศรีเมืองชุม"
  },
  {
    code: 570906,
    province: "เชียงราย",
    district: "อำเภอแม่สาย",
    subDistrict: "เวียงพางคำ"
  },
  {
    code: 570908,
    province: "เชียงราย",
    district: "อำเภอแม่สาย",
    subDistrict: "บ้านด้าย"
  },
  {
    code: 570909,
    province: "เชียงราย",
    district: "อำเภอแม่สาย",
    subDistrict: "โป่งงาม"
  },
  {
    code: 571001,
    province: "เชียงราย",
    district: "อำเภอแม่สรวย",
    subDistrict: "แม่สรวย"
  },
  {
    code: 571002,
    province: "เชียงราย",
    district: "อำเภอแม่สรวย",
    subDistrict: "ป่าแดด"
  },
  {
    code: 571003,
    province: "เชียงราย",
    district: "อำเภอแม่สรวย",
    subDistrict: "แม่พริก"
  },
  {
    code: 571004,
    province: "เชียงราย",
    district: "อำเภอแม่สรวย",
    subDistrict: "ศรีถ้อย"
  },
  {
    code: 571005,
    province: "เชียงราย",
    district: "อำเภอแม่สรวย",
    subDistrict: "ท่าก๊อ"
  },
  {
    code: 571006,
    province: "เชียงราย",
    district: "อำเภอแม่สรวย",
    subDistrict: "วาวี"
  },
  {
    code: 571007,
    province: "เชียงราย",
    district: "อำเภอแม่สรวย",
    subDistrict: "เจดีย์หลวง"
  },
  {
    code: 571101,
    province: "เชียงราย",
    district: "อำเภอเวียงป่าเป้า",
    subDistrict: "สันสลี"
  },
  {
    code: 571102,
    province: "เชียงราย",
    district: "อำเภอเวียงป่าเป้า",
    subDistrict: "เวียง"
  },
  {
    code: 571103,
    province: "เชียงราย",
    district: "อำเภอเวียงป่าเป้า",
    subDistrict: "บ้านโป่ง"
  },
  {
    code: 571104,
    province: "เชียงราย",
    district: "อำเภอเวียงป่าเป้า",
    subDistrict: "ป่างิ้ว"
  },
  {
    code: 571105,
    province: "เชียงราย",
    district: "อำเภอเวียงป่าเป้า",
    subDistrict: "เวียงกาหลง"
  },
  {
    code: 571106,
    province: "เชียงราย",
    district: "อำเภอเวียงป่าเป้า",
    subDistrict: "แม่เจดีย์"
  },
  {
    code: 571107,
    province: "เชียงราย",
    district: "อำเภอเวียงป่าเป้า",
    subDistrict: "แม่เจดีย์ใหม่"
  },
  {
    code: 571201,
    province: "เชียงราย",
    district: "อำเภอพญาเม็งราย",
    subDistrict: "แม่เปา"
  },
  {
    code: 571202,
    province: "เชียงราย",
    district: "อำเภอพญาเม็งราย",
    subDistrict: "แม่ต๋ำ"
  },
  {
    code: 571203,
    province: "เชียงราย",
    district: "อำเภอพญาเม็งราย",
    subDistrict: "ไม้ยา"
  },
  {
    code: 571204,
    province: "เชียงราย",
    district: "อำเภอพญาเม็งราย",
    subDistrict: "เม็งราย"
  },
  {
    code: 571205,
    province: "เชียงราย",
    district: "อำเภอพญาเม็งราย",
    subDistrict: "ตาดควัน"
  },
  {
    code: 571301,
    province: "เชียงราย",
    district: "อำเภอเวียงแก่น",
    subDistrict: "ม่วงยาย"
  },
  {
    code: 571302,
    province: "เชียงราย",
    district: "อำเภอเวียงแก่น",
    subDistrict: "ปอ"
  },
  {
    code: 571303,
    province: "เชียงราย",
    district: "อำเภอเวียงแก่น",
    subDistrict: "หล่ายงาว"
  },
  {
    code: 571304,
    province: "เชียงราย",
    district: "อำเภอเวียงแก่น",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 571401,
    province: "เชียงราย",
    district: "อำเภอขุนตาล",
    subDistrict: "ต้า"
  },
  {
    code: 571402,
    province: "เชียงราย",
    district: "อำเภอขุนตาล",
    subDistrict: "ป่าตาล"
  },
  {
    code: 571403,
    province: "เชียงราย",
    district: "อำเภอขุนตาล",
    subDistrict: "ยางฮอม"
  },
  {
    code: 571501,
    province: "เชียงราย",
    district: "อำเภอแม่ฟ้าหลวง",
    subDistrict: "เทอดไทย"
  },
  {
    code: 571502,
    province: "เชียงราย",
    district: "อำเภอแม่ฟ้าหลวง",
    subDistrict: "แม่สลองใน"
  },
  {
    code: 571503,
    province: "เชียงราย",
    district: "อำเภอแม่ฟ้าหลวง",
    subDistrict: "แม่สลองนอก"
  },
  {
    code: 571504,
    province: "เชียงราย",
    district: "อำเภอแม่ฟ้าหลวง",
    subDistrict: "แม่ฟ้าหลวง"
  },
  {
    code: 571601,
    province: "เชียงราย",
    district: "อำเภอแม่ลาว",
    subDistrict: "ดงมะดะ"
  },
  {
    code: 571602,
    province: "เชียงราย",
    district: "อำเภอแม่ลาว",
    subDistrict: "จอมหมอกแก้ว"
  },
  {
    code: 571603,
    province: "เชียงราย",
    district: "อำเภอแม่ลาว",
    subDistrict: "บัวสลี"
  },
  {
    code: 571604,
    province: "เชียงราย",
    district: "อำเภอแม่ลาว",
    subDistrict: "ป่าก่อดำ"
  },
  {
    code: 571605,
    province: "เชียงราย",
    district: "อำเภอแม่ลาว",
    subDistrict: "โป่งแพร่"
  },
  {
    code: 571701,
    province: "เชียงราย",
    district: "อำเภอเวียงเชียงรุ้ง",
    subDistrict: "ทุ่งก่อ"
  },
  {
    code: 571702,
    province: "เชียงราย",
    district: "อำเภอเวียงเชียงรุ้ง",
    subDistrict: "ดงมหาวัน"
  },
  {
    code: 571703,
    province: "เชียงราย",
    district: "อำเภอเวียงเชียงรุ้ง",
    subDistrict: "ป่าซาง"
  },
  {
    code: 571801,
    province: "เชียงราย",
    district: "อำเภอดอยหลวง",
    subDistrict: "ปงน้อย"
  },
  {
    code: 571802,
    province: "เชียงราย",
    district: "อำเภอดอยหลวง",
    subDistrict: "โชคชัย"
  },
  {
    code: 571803,
    province: "เชียงราย",
    district: "อำเภอดอยหลวง",
    subDistrict: "หนองป่าก่อ"
  },
  {
    code: 580101,
    province: "แม่ฮ่องสอน",
    district: "อำเภอเมืองแม่ฮ่องสอน",
    subDistrict: "จองคำ"
  },
  {
    code: 580102,
    province: "แม่ฮ่องสอน",
    district: "อำเภอเมืองแม่ฮ่องสอน",
    subDistrict: "ห้วยโป่ง"
  },
  {
    code: 580103,
    province: "แม่ฮ่องสอน",
    district: "อำเภอเมืองแม่ฮ่องสอน",
    subDistrict: "ผาบ่อง"
  },
  {
    code: 580104,
    province: "แม่ฮ่องสอน",
    district: "อำเภอเมืองแม่ฮ่องสอน",
    subDistrict: "ปางหมู"
  },
  {
    code: 580105,
    province: "แม่ฮ่องสอน",
    district: "อำเภอเมืองแม่ฮ่องสอน",
    subDistrict: "หมอกจำแป่"
  },
  {
    code: 580106,
    province: "แม่ฮ่องสอน",
    district: "อำเภอเมืองแม่ฮ่องสอน",
    subDistrict: "ห้วยผา"
  },
  {
    code: 580109,
    province: "แม่ฮ่องสอน",
    district: "อำเภอเมืองแม่ฮ่องสอน",
    subDistrict: "ห้วยปูลิง"
  },
  {
    code: 580201,
    province: "แม่ฮ่องสอน",
    district: "อำเภอขุนยวม",
    subDistrict: "ขุนยวม"
  },
  {
    code: 580202,
    province: "แม่ฮ่องสอน",
    district: "อำเภอขุนยวม",
    subDistrict: "แม่เงา"
  },
  {
    code: 580203,
    province: "แม่ฮ่องสอน",
    district: "อำเภอขุนยวม",
    subDistrict: "เมืองปอน"
  },
  {
    code: 580204,
    province: "แม่ฮ่องสอน",
    district: "อำเภอขุนยวม",
    subDistrict: "แม่ยวมน้อย"
  },
  {
    code: 580205,
    province: "แม่ฮ่องสอน",
    district: "อำเภอขุนยวม",
    subDistrict: "แม่กิ๊"
  },
  {
    code: 580206,
    province: "แม่ฮ่องสอน",
    district: "อำเภอขุนยวม",
    subDistrict: "แม่อูคอ"
  },
  {
    code: 580301,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปาย",
    subDistrict: "เวียงใต้"
  },
  {
    code: 580302,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปาย",
    subDistrict: "เวียงเหนือ"
  },
  {
    code: 580303,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปาย",
    subDistrict: "แม่นาเติง"
  },
  {
    code: 580304,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปาย",
    subDistrict: "แม่ฮี้"
  },
  {
    code: 580305,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปาย",
    subDistrict: "ทุ่งยาว"
  },
  {
    code: 580306,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปาย",
    subDistrict: "เมืองแปง"
  },
  {
    code: 580307,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปาย",
    subDistrict: "โป่งสา"
  },
  {
    code: 580401,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่สะเรียง",
    subDistrict: "บ้านกาศ"
  },
  {
    code: 580402,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่สะเรียง",
    subDistrict: "แม่สะเรียง"
  },
  {
    code: 580403,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่สะเรียง",
    subDistrict: "แม่คง"
  },
  {
    code: 580404,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่สะเรียง",
    subDistrict: "แม่เหาะ"
  },
  {
    code: 580405,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่สะเรียง",
    subDistrict: "แม่ยวม"
  },
  {
    code: 580406,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่สะเรียง",
    subDistrict: "เสาหิน"
  },
  {
    code: 580408,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่สะเรียง",
    subDistrict: "ป่าแป๋"
  },
  {
    code: 580501,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่ลาน้อย",
    subDistrict: "แม่ลาน้อย"
  },
  {
    code: 580502,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่ลาน้อย",
    subDistrict: "แม่ลาหลวง"
  },
  {
    code: 580503,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่ลาน้อย",
    subDistrict: "ท่าผาปุ้ม"
  },
  {
    code: 580504,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่ลาน้อย",
    subDistrict: "แม่โถ"
  },
  {
    code: 580505,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่ลาน้อย",
    subDistrict: "ห้วยห้อม"
  },
  {
    code: 580506,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่ลาน้อย",
    subDistrict: "แม่นาจาง"
  },
  {
    code: 580507,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่ลาน้อย",
    subDistrict: "สันติคีรี"
  },
  {
    code: 580508,
    province: "แม่ฮ่องสอน",
    district: "อำเภอแม่ลาน้อย",
    subDistrict: "ขุนแม่ลาน้อย"
  },
  {
    code: 580601,
    province: "แม่ฮ่องสอน",
    district: "อำเภอสบเมย",
    subDistrict: "สบเมย"
  },
  {
    code: 580602,
    province: "แม่ฮ่องสอน",
    district: "อำเภอสบเมย",
    subDistrict: "แม่คะตวน"
  },
  {
    code: 580603,
    province: "แม่ฮ่องสอน",
    district: "อำเภอสบเมย",
    subDistrict: "กองก๋อย"
  },
  {
    code: 580604,
    province: "แม่ฮ่องสอน",
    district: "อำเภอสบเมย",
    subDistrict: "แม่สวด"
  },
  {
    code: 580605,
    province: "แม่ฮ่องสอน",
    district: "อำเภอสบเมย",
    subDistrict: "ป่าโปง"
  },
  {
    code: 580606,
    province: "แม่ฮ่องสอน",
    district: "อำเภอสบเมย",
    subDistrict: "แม่สามแลบ"
  },
  {
    code: 580701,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปางมะผ้า",
    subDistrict: "สบป่อง"
  },
  {
    code: 580702,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปางมะผ้า",
    subDistrict: "ปางมะผ้า"
  },
  {
    code: 580703,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปางมะผ้า",
    subDistrict: "ถ้ำลอด"
  },
  {
    code: 580704,
    province: "แม่ฮ่องสอน",
    district: "อำเภอปางมะผ้า",
    subDistrict: "นาปู่ป้อม"
  },
  {
    code: 600101,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "ปากน้ำโพ"
  },
  {
    code: 600102,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "กลางแดด"
  },
  {
    code: 600103,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "เกรียงไกร"
  },
  {
    code: 600104,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "แควใหญ่"
  },
  {
    code: 600105,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "ตะเคียนเลื่อน"
  },
  {
    code: 600106,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "นครสวรรค์ตก"
  },
  {
    code: 600107,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "นครสวรรค์ออก"
  },
  {
    code: 600108,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "บางพระหลวง"
  },
  {
    code: 600109,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "บางม่วง"
  },
  {
    code: 600110,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "บ้านมะเกลือ"
  },
  {
    code: 600111,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "บ้านแก่ง"
  },
  {
    code: 600112,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "พระนอน"
  },
  {
    code: 600113,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "วัดไทร"
  },
  {
    code: 600114,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "หนองกรด"
  },
  {
    code: 600115,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "หนองกระโดน"
  },
  {
    code: 600116,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "หนองปลิง"
  },
  {
    code: 600117,
    province: "นครสวรรค์",
    district: "อำเภอเมืองนครสวรรค์",
    subDistrict: "บึงเสนาท"
  },
  {
    code: 600201,
    province: "นครสวรรค์",
    district: "อำเภอโกรกพระ",
    subDistrict: "โกรกพระ"
  },
  {
    code: 600202,
    province: "นครสวรรค์",
    district: "อำเภอโกรกพระ",
    subDistrict: "ยางตาล"
  },
  {
    code: 600203,
    province: "นครสวรรค์",
    district: "อำเภอโกรกพระ",
    subDistrict: "บางมะฝ่อ"
  },
  {
    code: 600204,
    province: "นครสวรรค์",
    district: "อำเภอโกรกพระ",
    subDistrict: "บางประมุง"
  },
  {
    code: 600205,
    province: "นครสวรรค์",
    district: "อำเภอโกรกพระ",
    subDistrict: "นากลาง"
  },
  {
    code: 600206,
    province: "นครสวรรค์",
    district: "อำเภอโกรกพระ",
    subDistrict: "ศาลาแดง"
  },
  {
    code: 600207,
    province: "นครสวรรค์",
    district: "อำเภอโกรกพระ",
    subDistrict: "เนินกว้าว"
  },
  {
    code: 600208,
    province: "นครสวรรค์",
    district: "อำเภอโกรกพระ",
    subDistrict: "เนินศาลา"
  },
  {
    code: 600209,
    province: "นครสวรรค์",
    district: "อำเภอโกรกพระ",
    subDistrict: "หาดสูง"
  },
  {
    code: 600301,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "ชุมแสง"
  },
  {
    code: 600302,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "ทับกฤช"
  },
  {
    code: 600303,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "พิกุล"
  },
  {
    code: 600304,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "เกยไชย"
  },
  {
    code: 600305,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "ท่าไม้"
  },
  {
    code: 600306,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "บางเคียน"
  },
  {
    code: 600307,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "หนองกระเจา"
  },
  {
    code: 600308,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "พันลาน"
  },
  {
    code: 600309,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "โคกหม้อ"
  },
  {
    code: 600310,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "ไผ่สิงห์"
  },
  {
    code: 600311,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "ฆะมัง"
  },
  {
    code: 600312,
    province: "นครสวรรค์",
    district: "อำเภอชุมแสง",
    subDistrict: "ทับกฤชใต้"
  },
  {
    code: 600401,
    province: "นครสวรรค์",
    district: "อำเภอหนองบัว",
    subDistrict: "หนองบัว"
  },
  {
    code: 600402,
    province: "นครสวรรค์",
    district: "อำเภอหนองบัว",
    subDistrict: "หนองกลับ"
  },
  {
    code: 600403,
    province: "นครสวรรค์",
    district: "อำเภอหนองบัว",
    subDistrict: "ธารทหาร"
  },
  {
    code: 600404,
    province: "นครสวรรค์",
    district: "อำเภอหนองบัว",
    subDistrict: "ห้วยร่วม"
  },
  {
    code: 600405,
    province: "นครสวรรค์",
    district: "อำเภอหนองบัว",
    subDistrict: "ห้วยถั่วใต้"
  },
  {
    code: 600406,
    province: "นครสวรรค์",
    district: "อำเภอหนองบัว",
    subDistrict: "ห้วยถั่วเหนือ"
  },
  {
    code: 600407,
    province: "นครสวรรค์",
    district: "อำเภอหนองบัว",
    subDistrict: "ห้วยใหญ่"
  },
  {
    code: 600408,
    province: "นครสวรรค์",
    district: "อำเภอหนองบัว",
    subDistrict: "ทุ่งทอง"
  },
  {
    code: 600409,
    province: "นครสวรรค์",
    district: "อำเภอหนองบัว",
    subDistrict: "วังบ่อ"
  },
  {
    code: 600501,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "ท่างิ้ว"
  },
  {
    code: 600502,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "บางตาหงาย"
  },
  {
    code: 600503,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "หูกวาง"
  },
  {
    code: 600504,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "อ่างทอง"
  },
  {
    code: 600505,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "บ้านแดน"
  },
  {
    code: 600506,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "บางแก้ว"
  },
  {
    code: 600507,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "ตาขีด"
  },
  {
    code: 600508,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "ตาสัง"
  },
  {
    code: 600509,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "ด่านช้าง"
  },
  {
    code: 600510,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "หนองกรด"
  },
  {
    code: 600511,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "หนองตางู"
  },
  {
    code: 600512,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "บึงปลาทู"
  },
  {
    code: 600513,
    province: "นครสวรรค์",
    district: "อำเภอบรรพตพิสัย",
    subDistrict: "เจริญผล"
  },
  {
    code: 600601,
    province: "นครสวรรค์",
    district: "อำเภอเก้าเลี้ยว",
    subDistrict: "มหาโพธิ"
  },
  {
    code: 600602,
    province: "นครสวรรค์",
    district: "อำเภอเก้าเลี้ยว",
    subDistrict: "เก้าเลี้ยว"
  },
  {
    code: 600603,
    province: "นครสวรรค์",
    district: "อำเภอเก้าเลี้ยว",
    subDistrict: "หนองเต่า"
  },
  {
    code: 600604,
    province: "นครสวรรค์",
    district: "อำเภอเก้าเลี้ยว",
    subDistrict: "เขาดิน"
  },
  {
    code: 600605,
    province: "นครสวรรค์",
    district: "อำเภอเก้าเลี้ยว",
    subDistrict: "หัวดง"
  },
  {
    code: 600701,
    province: "นครสวรรค์",
    district: "อำเภอตาคลี",
    subDistrict: "ตาคลี"
  },
  {
    code: 600702,
    province: "นครสวรรค์",
    district: "อำเภอตาคลี",
    subDistrict: "ช่องแค"
  },
  {
    code: 600703,
    province: "นครสวรรค์",
    district: "อำเภอตาคลี",
    subDistrict: "จันเสน"
  },
  {
    code: 600704,
    province: "นครสวรรค์",
    district: "อำเภอตาคลี",
    subDistrict: "ห้วยหอม"
  },
  {
    code: 600705,
    province: "นครสวรรค์",
    district: "อำเภอตาคลี",
    subDistrict: "หัวหวาย"
  },
  {
    code: 600706,
    province: "นครสวรรค์",
    district: "อำเภอตาคลี",
    subDistrict: "หนองโพ"
  },
  {
    code: 600707,
    province: "นครสวรรค์",
    district: "อำเภอตาคลี",
    subDistrict: "หนองหม้อ"
  },
  {
    code: 600708,
    province: "นครสวรรค์",
    district: "อำเภอตาคลี",
    subDistrict: "สร้อยทอง"
  },
  {
    code: 600709,
    province: "นครสวรรค์",
    district: "อำเภอตาคลี",
    subDistrict: "ลาดทิพรส"
  },
  {
    code: 600710,
    province: "นครสวรรค์",
    district: "อำเภอตาคลี",
    subDistrict: "พรหมนิมิต"
  },
  {
    code: 600801,
    province: "นครสวรรค์",
    district: "อำเภอท่าตะโก",
    subDistrict: "ท่าตะโก"
  },
  {
    code: 600802,
    province: "นครสวรรค์",
    district: "อำเภอท่าตะโก",
    subDistrict: "พนมรอก"
  },
  {
    code: 600803,
    province: "นครสวรรค์",
    district: "อำเภอท่าตะโก",
    subDistrict: "หัวถนน"
  },
  {
    code: 600804,
    province: "นครสวรรค์",
    district: "อำเภอท่าตะโก",
    subDistrict: "สายลำโพง"
  },
  {
    code: 600805,
    province: "นครสวรรค์",
    district: "อำเภอท่าตะโก",
    subDistrict: "วังมหากร"
  },
  {
    code: 600806,
    province: "นครสวรรค์",
    district: "อำเภอท่าตะโก",
    subDistrict: "ดอนคา"
  },
  {
    code: 600807,
    province: "นครสวรรค์",
    district: "อำเภอท่าตะโก",
    subDistrict: "ทำนบ"
  },
  {
    code: 600808,
    province: "นครสวรรค์",
    district: "อำเภอท่าตะโก",
    subDistrict: "วังใหญ่"
  },
  {
    code: 600809,
    province: "นครสวรรค์",
    district: "อำเภอท่าตะโก",
    subDistrict: "พนมเศษ"
  },
  {
    code: 600810,
    province: "นครสวรรค์",
    district: "อำเภอท่าตะโก",
    subDistrict: "หนองหลวง"
  },
  {
    code: 600901,
    province: "นครสวรรค์",
    district: "อำเภอไพศาลี",
    subDistrict: "โคกเดื่อ"
  },
  {
    code: 600902,
    province: "นครสวรรค์",
    district: "อำเภอไพศาลี",
    subDistrict: "สำโรงชัย"
  },
  {
    code: 600903,
    province: "นครสวรรค์",
    district: "อำเภอไพศาลี",
    subDistrict: "วังน้ำลัด"
  },
  {
    code: 600904,
    province: "นครสวรรค์",
    district: "อำเภอไพศาลี",
    subDistrict: "ตะคร้อ"
  },
  {
    code: 600905,
    province: "นครสวรรค์",
    district: "อำเภอไพศาลี",
    subDistrict: "โพธิ์ประสาท"
  },
  {
    code: 600906,
    province: "นครสวรรค์",
    district: "อำเภอไพศาลี",
    subDistrict: "วังข่อย"
  },
  {
    code: 600907,
    province: "นครสวรรค์",
    district: "อำเภอไพศาลี",
    subDistrict: "นาขอม"
  },
  {
    code: 600908,
    province: "นครสวรรค์",
    district: "อำเภอไพศาลี",
    subDistrict: "ไพศาลี"
  },
  {
    code: 601001,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "พยุหะ"
  },
  {
    code: 601002,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "เนินมะกอก"
  },
  {
    code: 601003,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "นิคมเขาบ่อแก้ว"
  },
  {
    code: 601004,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "ม่วงหัก"
  },
  {
    code: 601005,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "ยางขาว"
  },
  {
    code: 601006,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "ย่านมัทรี"
  },
  {
    code: 601007,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "เขาทอง"
  },
  {
    code: 601008,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "ท่าน้ำอ้อย"
  },
  {
    code: 601009,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "น้ำทรง"
  },
  {
    code: 601010,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "เขากะลา"
  },
  {
    code: 601011,
    province: "นครสวรรค์",
    district: "อำเภอพยุหะคีรี",
    subDistrict: "สระทะเล"
  },
  {
    code: 601101,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "ลาดยาว"
  },
  {
    code: 601102,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "ห้วยน้ำหอม"
  },
  {
    code: 601103,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "วังม้า"
  },
  {
    code: 601104,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "วังเมือง"
  },
  {
    code: 601105,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "สร้อยละคร"
  },
  {
    code: 601106,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "มาบแก"
  },
  {
    code: 601107,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "หนองยาว"
  },
  {
    code: 601108,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "หนองนมวัว"
  },
  {
    code: 601109,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "บ้านไร่"
  },
  {
    code: 601110,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "เนินขี้เหล็ก"
  },
  {
    code: 601116,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "ศาลเจ้าไก่ต่อ"
  },
  {
    code: 601117,
    province: "นครสวรรค์",
    district: "อำเภอลาดยาว",
    subDistrict: "สระแก้ว"
  },
  {
    code: 601201,
    province: "นครสวรรค์",
    district: "อำเภอตากฟ้า",
    subDistrict: "ตากฟ้า"
  },
  {
    code: 601202,
    province: "นครสวรรค์",
    district: "อำเภอตากฟ้า",
    subDistrict: "ลำพยนต์"
  },
  {
    code: 601203,
    province: "นครสวรรค์",
    district: "อำเภอตากฟ้า",
    subDistrict: "สุขสำราญ"
  },
  {
    code: 601204,
    province: "นครสวรรค์",
    district: "อำเภอตากฟ้า",
    subDistrict: "หนองพิกุล"
  },
  {
    code: 601205,
    province: "นครสวรรค์",
    district: "อำเภอตากฟ้า",
    subDistrict: "พุนกยูง"
  },
  {
    code: 601206,
    province: "นครสวรรค์",
    district: "อำเภอตากฟ้า",
    subDistrict: "อุดมธัญญา"
  },
  {
    code: 601207,
    province: "นครสวรรค์",
    district: "อำเภอตากฟ้า",
    subDistrict: "เขาชายธง"
  },
  {
    code: 601301,
    province: "นครสวรรค์",
    district: "อำเภอแม่วงก์",
    subDistrict: "แม่วงก์"
  },
  {
    code: 601303,
    province: "นครสวรรค์",
    district: "อำเภอแม่วงก์",
    subDistrict: "แม่เล่ย์"
  },
  {
    code: 601304,
    province: "นครสวรรค์",
    district: "อำเภอแม่วงก์",
    subDistrict: "วังซ่าน"
  },
  {
    code: 601305,
    province: "นครสวรรค์",
    district: "อำเภอแม่วงก์",
    subDistrict: "เขาชนกัน"
  },
  {
    code: 601401,
    province: "นครสวรรค์",
    district: "อำเภอแม่เปิน",
    subDistrict: "แม่เปิน"
  },
  {
    code: 601501,
    province: "นครสวรรค์",
    district: "อำเภอชุมตาบง",
    subDistrict: "ชุมตาบง"
  },
  {
    code: 601502,
    province: "นครสวรรค์",
    district: "อำเภอชุมตาบง",
    subDistrict: "ปางสวรรค์"
  },
  {
    code: 610101,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "อุทัยใหม่"
  },
  {
    code: 610102,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "น้ำซึม"
  },
  {
    code: 610103,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "สะแกกรัง"
  },
  {
    code: 610104,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "ดอนขวาง"
  },
  {
    code: 610105,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "หาดทนง"
  },
  {
    code: 610106,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "เกาะเทโพ"
  },
  {
    code: 610107,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "ท่าซุง"
  },
  {
    code: 610108,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "หนองแก"
  },
  {
    code: 610109,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "โนนเหล็ก"
  },
  {
    code: 610110,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "หนองเต่า"
  },
  {
    code: 610111,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "หนองไผ่แบน"
  },
  {
    code: 610112,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "หนองพังค่า"
  },
  {
    code: 610113,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "ทุ่งใหญ่"
  },
  {
    code: 610114,
    province: "อุทัยธานี",
    district: "อำเภอเมืองอุทัยธานี",
    subDistrict: "เนินแจง"
  },
  {
    code: 610201,
    province: "อุทัยธานี",
    district: "อำเภอทัพทัน",
    subDistrict: "ทัพทัน"
  },
  {
    code: 610202,
    province: "อุทัยธานี",
    district: "อำเภอทัพทัน",
    subDistrict: "ทุ่งนาไทย"
  },
  {
    code: 610203,
    province: "อุทัยธานี",
    district: "อำเภอทัพทัน",
    subDistrict: "เขาขี้ฝอย"
  },
  {
    code: 610204,
    province: "อุทัยธานี",
    district: "อำเภอทัพทัน",
    subDistrict: "หนองหญ้าปล้อง"
  },
  {
    code: 610205,
    province: "อุทัยธานี",
    district: "อำเภอทัพทัน",
    subDistrict: "โคกหม้อ"
  },
  {
    code: 610206,
    province: "อุทัยธานี",
    district: "อำเภอทัพทัน",
    subDistrict: "หนองยายดา"
  },
  {
    code: 610207,
    province: "อุทัยธานี",
    district: "อำเภอทัพทัน",
    subDistrict: "หนองกลางดง"
  },
  {
    code: 610208,
    province: "อุทัยธานี",
    district: "อำเภอทัพทัน",
    subDistrict: "หนองกระทุ่ม"
  },
  {
    code: 610209,
    province: "อุทัยธานี",
    district: "อำเภอทัพทัน",
    subDistrict: "หนองสระ"
  },
  {
    code: 610210,
    province: "อุทัยธานี",
    district: "อำเภอทัพทัน",
    subDistrict: "ตลุกดู่"
  },
  {
    code: 610301,
    province: "อุทัยธานี",
    district: "อำเภอสว่างอารมณ์",
    subDistrict: "สว่างอารมณ์"
  },
  {
    code: 610302,
    province: "อุทัยธานี",
    district: "อำเภอสว่างอารมณ์",
    subDistrict: "หนองหลวง"
  },
  {
    code: 610303,
    province: "อุทัยธานี",
    district: "อำเภอสว่างอารมณ์",
    subDistrict: "พลวงสองนาง"
  },
  {
    code: 610304,
    province: "อุทัยธานี",
    district: "อำเภอสว่างอารมณ์",
    subDistrict: "ไผ่เขียว"
  },
  {
    code: 610305,
    province: "อุทัยธานี",
    district: "อำเภอสว่างอารมณ์",
    subDistrict: "บ่อยาง"
  },
  {
    code: 610401,
    province: "อุทัยธานี",
    district: "อำเภอหนองฉาง",
    subDistrict: "หนองฉาง"
  },
  {
    code: 610402,
    province: "อุทัยธานี",
    district: "อำเภอหนองฉาง",
    subDistrict: "หนองยาง"
  },
  {
    code: 610403,
    province: "อุทัยธานี",
    district: "อำเภอหนองฉาง",
    subDistrict: "หนองนางนวล"
  },
  {
    code: 610404,
    province: "อุทัยธานี",
    district: "อำเภอหนองฉาง",
    subDistrict: "หนองสรวง"
  },
  {
    code: 610405,
    province: "อุทัยธานี",
    district: "อำเภอหนองฉาง",
    subDistrict: "บ้านเก่า"
  },
  {
    code: 610406,
    province: "อุทัยธานี",
    district: "อำเภอหนองฉาง",
    subDistrict: "อุทัยเก่า"
  },
  {
    code: 610407,
    province: "อุทัยธานี",
    district: "อำเภอหนองฉาง",
    subDistrict: "ทุ่งโพ"
  },
  {
    code: 610408,
    province: "อุทัยธานี",
    district: "อำเภอหนองฉาง",
    subDistrict: "ทุ่งพง"
  },
  {
    code: 610409,
    province: "อุทัยธานี",
    district: "อำเภอหนองฉาง",
    subDistrict: "เขาบางแกรก"
  },
  {
    code: 610410,
    province: "อุทัยธานี",
    district: "อำเภอหนองฉาง",
    subDistrict: "เขากวางทอง"
  },
  {
    code: 610501,
    province: "อุทัยธานี",
    district: "อำเภอหนองขาหย่าง",
    subDistrict: "หนองขาหย่าง"
  },
  {
    code: 610502,
    province: "อุทัยธานี",
    district: "อำเภอหนองขาหย่าง",
    subDistrict: "หนองไผ่"
  },
  {
    code: 610503,
    province: "อุทัยธานี",
    district: "อำเภอหนองขาหย่าง",
    subDistrict: "ดอนกลอย"
  },
  {
    code: 610504,
    province: "อุทัยธานี",
    district: "อำเภอหนองขาหย่าง",
    subDistrict: "ห้วยรอบ"
  },
  {
    code: 610505,
    province: "อุทัยธานี",
    district: "อำเภอหนองขาหย่าง",
    subDistrict: "ทุ่งพึ่ง"
  },
  {
    code: 610506,
    province: "อุทัยธานี",
    district: "อำเภอหนองขาหย่าง",
    subDistrict: "ท่าโพ"
  },
  {
    code: 610507,
    province: "อุทัยธานี",
    district: "อำเภอหนองขาหย่าง",
    subDistrict: "หมกแถว"
  },
  {
    code: 610508,
    province: "อุทัยธานี",
    district: "อำเภอหนองขาหย่าง",
    subDistrict: "หลุมเข้า"
  },
  {
    code: 610509,
    province: "อุทัยธานี",
    district: "อำเภอหนองขาหย่าง",
    subDistrict: "ดงขวาง"
  },
  {
    code: 610601,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "บ้านไร่"
  },
  {
    code: 610602,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "ทัพหลวง"
  },
  {
    code: 610603,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "ห้วยแห้ง"
  },
  {
    code: 610604,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "คอกควาย"
  },
  {
    code: 610605,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "วังหิน"
  },
  {
    code: 610606,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "เมืองการุ้ง"
  },
  {
    code: 610607,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "แก่นมะกรูด"
  },
  {
    code: 610609,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "หนองจอก"
  },
  {
    code: 610610,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "หูช้าง"
  },
  {
    code: 610611,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "บ้านบึง"
  },
  {
    code: 610612,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "บ้านใหม่คลองเคียน"
  },
  {
    code: 610613,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "หนองบ่มกล้วย"
  },
  {
    code: 610614,
    province: "อุทัยธานี",
    district: "อำเภอบ้านไร่",
    subDistrict: "เจ้าวัด"
  },
  {
    code: 610701,
    province: "อุทัยธานี",
    district: "อำเภอลานสัก",
    subDistrict: "ลานสัก"
  },
  {
    code: 610702,
    province: "อุทัยธานี",
    district: "อำเภอลานสัก",
    subDistrict: "ประดู่ยืน"
  },
  {
    code: 610703,
    province: "อุทัยธานี",
    district: "อำเภอลานสัก",
    subDistrict: "ป่าอ้อ"
  },
  {
    code: 610704,
    province: "อุทัยธานี",
    district: "อำเภอลานสัก",
    subDistrict: "ระบำ"
  },
  {
    code: 610705,
    province: "อุทัยธานี",
    district: "อำเภอลานสัก",
    subDistrict: "น้ำรอบ"
  },
  {
    code: 610706,
    province: "อุทัยธานี",
    district: "อำเภอลานสัก",
    subDistrict: "ทุ่งนางาม"
  },
  {
    code: 610801,
    province: "อุทัยธานี",
    district: "อำเภอห้วยคต",
    subDistrict: "สุขฤทัย"
  },
  {
    code: 610802,
    province: "อุทัยธานี",
    district: "อำเภอห้วยคต",
    subDistrict: "ทองหลาง"
  },
  {
    code: 610803,
    province: "อุทัยธานี",
    district: "อำเภอห้วยคต",
    subDistrict: "ห้วยคต"
  },
  {
    code: 620101,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "ในเมือง"
  },
  {
    code: 620102,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "ไตรตรึงษ์"
  },
  {
    code: 620103,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "อ่างทอง"
  },
  {
    code: 620104,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "นาบ่อคำ"
  },
  {
    code: 620105,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "นครชุม"
  },
  {
    code: 620106,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "ทรงธรรม"
  },
  {
    code: 620107,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "ลานดอกไม้"
  },
  {
    code: 620110,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "หนองปลิง"
  },
  {
    code: 620111,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "คณฑี"
  },
  {
    code: 620112,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "นิคมทุ่งโพธิ์ทะเล"
  },
  {
    code: 620113,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "เทพนคร"
  },
  {
    code: 620114,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "วังทอง"
  },
  {
    code: 620115,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "ท่าขุนราม"
  },
  {
    code: 620117,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "คลองแม่ลาย"
  },
  {
    code: 620118,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "ธำมรงค์"
  },
  {
    code: 620119,
    province: "กำแพงเพชร",
    district: "อำเภอเมืองกำแพงเพชร",
    subDistrict: "สระแก้ว"
  },
  {
    code: 620201,
    province: "กำแพงเพชร",
    district: "อำเภอไทรงาม",
    subDistrict: "ไทรงาม"
  },
  {
    code: 620202,
    province: "กำแพงเพชร",
    district: "อำเภอไทรงาม",
    subDistrict: "หนองคล้า"
  },
  {
    code: 620203,
    province: "กำแพงเพชร",
    district: "อำเภอไทรงาม",
    subDistrict: "หนองทอง"
  },
  {
    code: 620204,
    province: "กำแพงเพชร",
    district: "อำเภอไทรงาม",
    subDistrict: "หนองไม้กอง"
  },
  {
    code: 620205,
    province: "กำแพงเพชร",
    district: "อำเภอไทรงาม",
    subDistrict: "มหาชัย"
  },
  {
    code: 620206,
    province: "กำแพงเพชร",
    district: "อำเภอไทรงาม",
    subDistrict: "พานทอง"
  },
  {
    code: 620207,
    province: "กำแพงเพชร",
    district: "อำเภอไทรงาม",
    subDistrict: "หนองแม่แตง"
  },
  {
    code: 620301,
    province: "กำแพงเพชร",
    district: "อำเภอคลองลาน",
    subDistrict: "คลองน้ำไหล"
  },
  {
    code: 620302,
    province: "กำแพงเพชร",
    district: "อำเภอคลองลาน",
    subDistrict: "โป่งน้ำร้อน"
  },
  {
    code: 620303,
    province: "กำแพงเพชร",
    district: "อำเภอคลองลาน",
    subDistrict: "คลองลานพัฒนา"
  },
  {
    code: 620304,
    province: "กำแพงเพชร",
    district: "อำเภอคลองลาน",
    subDistrict: "สักงาม"
  },
  {
    code: 620403,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "ยางสูง"
  },
  {
    code: 620404,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "ป่าพุทรา"
  },
  {
    code: 620405,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "แสนตอ"
  },
  {
    code: 620406,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "สลกบาตร"
  },
  {
    code: 620407,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "บ่อถ้ำ"
  },
  {
    code: 620408,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "ดอนแตง"
  },
  {
    code: 620409,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "วังชะพลู"
  },
  {
    code: 620410,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "โค้งไผ่"
  },
  {
    code: 620411,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "ปางมะค่า"
  },
  {
    code: 620412,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "วังหามแห"
  },
  {
    code: 620413,
    province: "กำแพงเพชร",
    district: "อำเภอขาณุวรลักษบุรี",
    subDistrict: "เกาะตาล"
  },
  {
    code: 620501,
    province: "กำแพงเพชร",
    district: "อำเภอคลองขลุง",
    subDistrict: "คลองขลุง"
  },
  {
    code: 620502,
    province: "กำแพงเพชร",
    district: "อำเภอคลองขลุง",
    subDistrict: "ท่ามะเขือ"
  },
  {
    code: 620504,
    province: "กำแพงเพชร",
    district: "อำเภอคลองขลุง",
    subDistrict: "ท่าพุทรา"
  },
  {
    code: 620505,
    province: "กำแพงเพชร",
    district: "อำเภอคลองขลุง",
    subDistrict: "แม่ลาด"
  },
  {
    code: 620506,
    province: "กำแพงเพชร",
    district: "อำเภอคลองขลุง",
    subDistrict: "วังยาง"
  },
  {
    code: 620507,
    province: "กำแพงเพชร",
    district: "อำเภอคลองขลุง",
    subDistrict: "วังแขม"
  },
  {
    code: 620508,
    province: "กำแพงเพชร",
    district: "อำเภอคลองขลุง",
    subDistrict: "หัวถนน"
  },
  {
    code: 620509,
    province: "กำแพงเพชร",
    district: "อำเภอคลองขลุง",
    subDistrict: "วังไทร"
  },
  {
    code: 620513,
    province: "กำแพงเพชร",
    district: "อำเภอคลองขลุง",
    subDistrict: "วังบัว"
  },
  {
    code: 620516,
    province: "กำแพงเพชร",
    district: "อำเภอคลองขลุง",
    subDistrict: "คลองสมบูรณ์"
  },
  {
    code: 620601,
    province: "กำแพงเพชร",
    district: "อำเภอพรานกระต่าย",
    subDistrict: "พรานกระต่าย"
  },
  {
    code: 620602,
    province: "กำแพงเพชร",
    district: "อำเภอพรานกระต่าย",
    subDistrict: "หนองหัววัว"
  },
  {
    code: 620603,
    province: "กำแพงเพชร",
    district: "อำเภอพรานกระต่าย",
    subDistrict: "ท่าไม้"
  },
  {
    code: 620604,
    province: "กำแพงเพชร",
    district: "อำเภอพรานกระต่าย",
    subDistrict: "วังควง"
  },
  {
    code: 620605,
    province: "กำแพงเพชร",
    district: "อำเภอพรานกระต่าย",
    subDistrict: "วังตะแบก"
  },
  {
    code: 620606,
    province: "กำแพงเพชร",
    district: "อำเภอพรานกระต่าย",
    subDistrict: "เขาคีริส"
  },
  {
    code: 620607,
    province: "กำแพงเพชร",
    district: "อำเภอพรานกระต่าย",
    subDistrict: "คุยบ้านโอง"
  },
  {
    code: 620608,
    province: "กำแพงเพชร",
    district: "อำเภอพรานกระต่าย",
    subDistrict: "คลองพิไกร"
  },
  {
    code: 620609,
    province: "กำแพงเพชร",
    district: "อำเภอพรานกระต่าย",
    subDistrict: "ถ้ำกระต่ายทอง"
  },
  {
    code: 620610,
    province: "กำแพงเพชร",
    district: "อำเภอพรานกระต่าย",
    subDistrict: "ห้วยยั้ง"
  },
  {
    code: 620701,
    province: "กำแพงเพชร",
    district: "อำเภอลานกระบือ",
    subDistrict: "ลานกระบือ"
  },
  {
    code: 620702,
    province: "กำแพงเพชร",
    district: "อำเภอลานกระบือ",
    subDistrict: "ช่องลม"
  },
  {
    code: 620703,
    province: "กำแพงเพชร",
    district: "อำเภอลานกระบือ",
    subDistrict: "หนองหลวง"
  },
  {
    code: 620704,
    province: "กำแพงเพชร",
    district: "อำเภอลานกระบือ",
    subDistrict: "โนนพลวง"
  },
  {
    code: 620705,
    province: "กำแพงเพชร",
    district: "อำเภอลานกระบือ",
    subDistrict: "ประชาสุขสันต์"
  },
  {
    code: 620706,
    province: "กำแพงเพชร",
    district: "อำเภอลานกระบือ",
    subDistrict: "บึงทับแรต"
  },
  {
    code: 620707,
    province: "กำแพงเพชร",
    district: "อำเภอลานกระบือ",
    subDistrict: "จันทิมา"
  },
  {
    code: 620801,
    province: "กำแพงเพชร",
    district: "อำเภอทรายทองวัฒนา",
    subDistrict: "ทุ่งทราย"
  },
  {
    code: 620802,
    province: "กำแพงเพชร",
    district: "อำเภอทรายทองวัฒนา",
    subDistrict: "ทุ่งทอง"
  },
  {
    code: 620803,
    province: "กำแพงเพชร",
    district: "อำเภอทรายทองวัฒนา",
    subDistrict: "ถาวรวัฒนา"
  },
  {
    code: 620901,
    province: "กำแพงเพชร",
    district: "อำเภอปางศิลาทอง",
    subDistrict: "โพธิ์ทอง"
  },
  {
    code: 620902,
    province: "กำแพงเพชร",
    district: "อำเภอปางศิลาทอง",
    subDistrict: "หินดาต"
  },
  {
    code: 620903,
    province: "กำแพงเพชร",
    district: "อำเภอปางศิลาทอง",
    subDistrict: "ปางตาไว"
  },
  {
    code: 621001,
    province: "กำแพงเพชร",
    district: "อำเภอบึงสามัคคี",
    subDistrict: "บึงสามัคคี"
  },
  {
    code: 621002,
    province: "กำแพงเพชร",
    district: "อำเภอบึงสามัคคี",
    subDistrict: "วังชะโอน"
  },
  {
    code: 621003,
    province: "กำแพงเพชร",
    district: "อำเภอบึงสามัคคี",
    subDistrict: "ระหาน"
  },
  {
    code: 621004,
    province: "กำแพงเพชร",
    district: "อำเภอบึงสามัคคี",
    subDistrict: "เทพนิมิต"
  },
  {
    code: 621101,
    province: "กำแพงเพชร",
    district: "อำเภอโกสัมพีนคร",
    subDistrict: "โกสัมพี"
  },
  {
    code: 621102,
    province: "กำแพงเพชร",
    district: "อำเภอโกสัมพีนคร",
    subDistrict: "เพชรชมภู"
  },
  {
    code: 621103,
    province: "กำแพงเพชร",
    district: "อำเภอโกสัมพีนคร",
    subDistrict: "ลานดอกไม้ตก"
  },
  {
    code: 630101,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "ระแหง"
  },
  {
    code: 630102,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "หนองหลวง"
  },
  {
    code: 630103,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "เชียงเงิน"
  },
  {
    code: 630104,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "หัวเดียด"
  },
  {
    code: 630105,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "หนองบัวเหนือ"
  },
  {
    code: 630106,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "ไม้งาม"
  },
  {
    code: 630107,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "โป่งแดง"
  },
  {
    code: 630108,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "น้ำรึม"
  },
  {
    code: 630109,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "วังหิน"
  },
  {
    code: 630111,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "แม่ท้อ"
  },
  {
    code: 630112,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "ป่ามะม่วง"
  },
  {
    code: 630113,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "หนองบัวใต้"
  },
  {
    code: 630114,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "วังประจบ"
  },
  {
    code: 630115,
    province: "ตาก",
    district: "อำเภอเมืองตาก",
    subDistrict: "ตลุกกลางทุ่ง"
  },
  {
    code: 630201,
    province: "ตาก",
    district: "อำเภอบ้านตาก",
    subDistrict: "ตากออก"
  },
  {
    code: 630202,
    province: "ตาก",
    district: "อำเภอบ้านตาก",
    subDistrict: "สมอโคน"
  },
  {
    code: 630203,
    province: "ตาก",
    district: "อำเภอบ้านตาก",
    subDistrict: "แม่สลิด"
  },
  {
    code: 630204,
    province: "ตาก",
    district: "อำเภอบ้านตาก",
    subDistrict: "ตากตก"
  },
  {
    code: 630205,
    province: "ตาก",
    district: "อำเภอบ้านตาก",
    subDistrict: "เกาะตะเภา"
  },
  {
    code: 630206,
    province: "ตาก",
    district: "อำเภอบ้านตาก",
    subDistrict: "ทุ่งกระเชาะ"
  },
  {
    code: 630207,
    province: "ตาก",
    district: "อำเภอบ้านตาก",
    subDistrict: "ท้องฟ้า"
  },
  {
    code: 630301,
    province: "ตาก",
    district: "อำเภอสามเงา",
    subDistrict: "สามเงา"
  },
  {
    code: 630302,
    province: "ตาก",
    district: "อำเภอสามเงา",
    subDistrict: "วังหมัน"
  },
  {
    code: 630303,
    province: "ตาก",
    district: "อำเภอสามเงา",
    subDistrict: "ยกกระบัตร"
  },
  {
    code: 630304,
    province: "ตาก",
    district: "อำเภอสามเงา",
    subDistrict: "ย่านรี"
  },
  {
    code: 630305,
    province: "ตาก",
    district: "อำเภอสามเงา",
    subDistrict: "บ้านนา"
  },
  {
    code: 630306,
    province: "ตาก",
    district: "อำเภอสามเงา",
    subDistrict: "วังจันทร์"
  },
  {
    code: 630401,
    province: "ตาก",
    district: "อำเภอแม่ระมาด",
    subDistrict: "แม่ระมาด"
  },
  {
    code: 630402,
    province: "ตาก",
    district: "อำเภอแม่ระมาด",
    subDistrict: "แม่จะเรา"
  },
  {
    code: 630403,
    province: "ตาก",
    district: "อำเภอแม่ระมาด",
    subDistrict: "ขะเนจื้อ"
  },
  {
    code: 630404,
    province: "ตาก",
    district: "อำเภอแม่ระมาด",
    subDistrict: "แม่ตื่น"
  },
  {
    code: 630405,
    province: "ตาก",
    district: "อำเภอแม่ระมาด",
    subDistrict: "สามหมื่น"
  },
  {
    code: 630406,
    province: "ตาก",
    district: "อำเภอแม่ระมาด",
    subDistrict: "พระธาตุ"
  },
  {
    code: 630501,
    province: "ตาก",
    district: "อำเภอท่าสองยาง",
    subDistrict: "ท่าสองยาง"
  },
  {
    code: 630502,
    province: "ตาก",
    district: "อำเภอท่าสองยาง",
    subDistrict: "แม่ต้าน"
  },
  {
    code: 630503,
    province: "ตาก",
    district: "อำเภอท่าสองยาง",
    subDistrict: "แม่สอง"
  },
  {
    code: 630504,
    province: "ตาก",
    district: "อำเภอท่าสองยาง",
    subDistrict: "แม่หละ"
  },
  {
    code: 630505,
    province: "ตาก",
    district: "อำเภอท่าสองยาง",
    subDistrict: "แม่วะหลวง"
  },
  {
    code: 630506,
    province: "ตาก",
    district: "อำเภอท่าสองยาง",
    subDistrict: "แม่อุสุ"
  },
  {
    code: 630601,
    province: "ตาก",
    district: "อำเภอแม่สอด",
    subDistrict: "แม่สอด"
  },
  {
    code: 630602,
    province: "ตาก",
    district: "อำเภอแม่สอด",
    subDistrict: "แม่กุ"
  },
  {
    code: 630603,
    province: "ตาก",
    district: "อำเภอแม่สอด",
    subDistrict: "พะวอ"
  },
  {
    code: 630604,
    province: "ตาก",
    district: "อำเภอแม่สอด",
    subDistrict: "แม่ตาว"
  },
  {
    code: 630605,
    province: "ตาก",
    district: "อำเภอแม่สอด",
    subDistrict: "แม่กาษา"
  },
  {
    code: 630606,
    province: "ตาก",
    district: "อำเภอแม่สอด",
    subDistrict: "ท่าสายลวด"
  },
  {
    code: 630607,
    province: "ตาก",
    district: "อำเภอแม่สอด",
    subDistrict: "แม่ปะ"
  },
  {
    code: 630608,
    province: "ตาก",
    district: "อำเภอแม่สอด",
    subDistrict: "มหาวัน"
  },
  {
    code: 630609,
    province: "ตาก",
    district: "อำเภอแม่สอด",
    subDistrict: "ด่านแม่ละเมา"
  },
  {
    code: 630610,
    province: "ตาก",
    district: "อำเภอแม่สอด",
    subDistrict: "พระธาตุผาแดง"
  },
  {
    code: 630701,
    province: "ตาก",
    district: "อำเภอพบพระ",
    subDistrict: "พบพระ"
  },
  {
    code: 630702,
    province: "ตาก",
    district: "อำเภอพบพระ",
    subDistrict: "ช่องแคบ"
  },
  {
    code: 630703,
    province: "ตาก",
    district: "อำเภอพบพระ",
    subDistrict: "คีรีราษฎร์"
  },
  {
    code: 630704,
    province: "ตาก",
    district: "อำเภอพบพระ",
    subDistrict: "วาเล่ย์"
  },
  {
    code: 630705,
    province: "ตาก",
    district: "อำเภอพบพระ",
    subDistrict: "รวมไทยพัฒนา"
  },
  {
    code: 630801,
    province: "ตาก",
    district: "อำเภออุ้มผาง",
    subDistrict: "อุ้มผาง"
  },
  {
    code: 630802,
    province: "ตาก",
    district: "อำเภออุ้มผาง",
    subDistrict: "หนองหลวง"
  },
  {
    code: 630803,
    province: "ตาก",
    district: "อำเภออุ้มผาง",
    subDistrict: "โมโกร"
  },
  {
    code: 630804,
    province: "ตาก",
    district: "อำเภออุ้มผาง",
    subDistrict: "แม่จัน"
  },
  {
    code: 630805,
    province: "ตาก",
    district: "อำเภออุ้มผาง",
    subDistrict: "แม่ละมุ้ง"
  },
  {
    code: 630806,
    province: "ตาก",
    district: "อำเภออุ้มผาง",
    subDistrict: "แม่กลอง"
  },
  {
    code: 630901,
    province: "ตาก",
    district: "อำเภอวังเจ้า",
    subDistrict: "เชียงทอง"
  },
  {
    code: 630902,
    province: "ตาก",
    district: "อำเภอวังเจ้า",
    subDistrict: "นาโบสถ์"
  },
  {
    code: 630903,
    province: "ตาก",
    district: "อำเภอวังเจ้า",
    subDistrict: "ประดาง"
  },
  {
    code: 640101,
    province: "สุโขทัย",
    district: "อำเภอเมืองสุโขทัย",
    subDistrict: "ธานี"
  },
  {
    code: 640102,
    province: "สุโขทัย",
    district: "อำเภอเมืองสุโขทัย",
    subDistrict: "บ้านสวน"
  },
  {
    code: 640103,
    province: "สุโขทัย",
    district: "อำเภอเมืองสุโขทัย",
    subDistrict: "เมืองเก่า"
  },
  {
    code: 640104,
    province: "สุโขทัย",
    district: "อำเภอเมืองสุโขทัย",
    subDistrict: "ปากแคว"
  },
  {
    code: 640105,
    province: "สุโขทัย",
    district: "อำเภอเมืองสุโขทัย",
    subDistrict: "ยางซ้าย"
  },
  {
    code: 640106,
    province: "สุโขทัย",
    district: "อำเภอเมืองสุโขทัย",
    subDistrict: "บ้านกล้วย"
  },
  {
    code: 640107,
    province: "สุโขทัย",
    district: "อำเภอเมืองสุโขทัย",
    subDistrict: "บ้านหลุม"
  },
  {
    code: 640108,
    province: "สุโขทัย",
    district: "อำเภอเมืองสุโขทัย",
    subDistrict: "ตาลเตี้ย"
  },
  {
    code: 640109,
    province: "สุโขทัย",
    district: "อำเภอเมืองสุโขทัย",
    subDistrict: "ปากพระ"
  },
  {
    code: 640110,
    province: "สุโขทัย",
    district: "อำเภอเมืองสุโขทัย",
    subDistrict: "วังทองแดง"
  },
  {
    code: 640201,
    province: "สุโขทัย",
    district: "อำเภอบ้านด่านลานหอย",
    subDistrict: "ลานหอย"
  },
  {
    code: 640202,
    province: "สุโขทัย",
    district: "อำเภอบ้านด่านลานหอย",
    subDistrict: "บ้านด่าน"
  },
  {
    code: 640203,
    province: "สุโขทัย",
    district: "อำเภอบ้านด่านลานหอย",
    subDistrict: "วังตะคร้อ"
  },
  {
    code: 640204,
    province: "สุโขทัย",
    district: "อำเภอบ้านด่านลานหอย",
    subDistrict: "วังน้ำขาว"
  },
  {
    code: 640205,
    province: "สุโขทัย",
    district: "อำเภอบ้านด่านลานหอย",
    subDistrict: "ตลิ่งชัน"
  },
  {
    code: 640206,
    province: "สุโขทัย",
    district: "อำเภอบ้านด่านลานหอย",
    subDistrict: "หนองหญ้าปล้อง"
  },
  {
    code: 640207,
    province: "สุโขทัย",
    district: "อำเภอบ้านด่านลานหอย",
    subDistrict: "วังลึก"
  },
  {
    code: 640301,
    province: "สุโขทัย",
    district: "อำเภอคีรีมาศ",
    subDistrict: "โตนด"
  },
  {
    code: 640302,
    province: "สุโขทัย",
    district: "อำเภอคีรีมาศ",
    subDistrict: "ทุ่งหลวง"
  },
  {
    code: 640303,
    province: "สุโขทัย",
    district: "อำเภอคีรีมาศ",
    subDistrict: "บ้านป้อม"
  },
  {
    code: 640304,
    province: "สุโขทัย",
    district: "อำเภอคีรีมาศ",
    subDistrict: "สามพวง"
  },
  {
    code: 640305,
    province: "สุโขทัย",
    district: "อำเภอคีรีมาศ",
    subDistrict: "ศรีคีรีมาศ"
  },
  {
    code: 640306,
    province: "สุโขทัย",
    district: "อำเภอคีรีมาศ",
    subDistrict: "หนองจิก"
  },
  {
    code: 640307,
    province: "สุโขทัย",
    district: "อำเภอคีรีมาศ",
    subDistrict: "นาเชิงคีรี"
  },
  {
    code: 640308,
    province: "สุโขทัย",
    district: "อำเภอคีรีมาศ",
    subDistrict: "หนองกระดิ่ง"
  },
  {
    code: 640309,
    province: "สุโขทัย",
    district: "อำเภอคีรีมาศ",
    subDistrict: "บ้านน้ำพุ"
  },
  {
    code: 640310,
    province: "สุโขทัย",
    district: "อำเภอคีรีมาศ",
    subDistrict: "ทุ่งยางเมือง"
  },
  {
    code: 640401,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "กง"
  },
  {
    code: 640402,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "บ้านกร่าง"
  },
  {
    code: 640403,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "ไกรนอก"
  },
  {
    code: 640404,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "ไกรกลาง"
  },
  {
    code: 640405,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "ไกรใน"
  },
  {
    code: 640406,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "ดงเดือย"
  },
  {
    code: 640407,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "ป่าแฝก"
  },
  {
    code: 640408,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "กกแรต"
  },
  {
    code: 640409,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "ท่าฉนวน"
  },
  {
    code: 640410,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "หนองตูม"
  },
  {
    code: 640411,
    province: "สุโขทัย",
    district: "อำเภอกงไกรลาศ",
    subDistrict: "บ้านใหม่สุขเกษม"
  },
  {
    code: 640501,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "หาดเสี้ยว"
  },
  {
    code: 640502,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "ป่างิ้ว"
  },
  {
    code: 640503,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "แม่สำ"
  },
  {
    code: 640504,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "แม่สิน"
  },
  {
    code: 640505,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "บ้านตึก"
  },
  {
    code: 640506,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "หนองอ้อ"
  },
  {
    code: 640507,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "ท่าชัย"
  },
  {
    code: 640508,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "ศรีสัชนาลัย"
  },
  {
    code: 640509,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "ดงคู่"
  },
  {
    code: 640510,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "บ้านแก่ง"
  },
  {
    code: 640511,
    province: "สุโขทัย",
    district: "อำเภอศรีสัชนาลัย",
    subDistrict: "สารจิตร"
  },
  {
    code: 640601,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "คลองตาล"
  },
  {
    code: 640602,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "วังลึก"
  },
  {
    code: 640603,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "สามเรือน"
  },
  {
    code: 640604,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "บ้านนา"
  },
  {
    code: 640605,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "วังทอง"
  },
  {
    code: 640606,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "นาขุนไกร"
  },
  {
    code: 640607,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "เกาะตาเลี้ยง"
  },
  {
    code: 640608,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "วัดเกาะ"
  },
  {
    code: 640609,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "บ้านไร่"
  },
  {
    code: 640610,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "ทับผึ้ง"
  },
  {
    code: 640611,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "บ้านซ่าน"
  },
  {
    code: 640612,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "วังใหญ่"
  },
  {
    code: 640613,
    province: "สุโขทัย",
    district: "อำเภอศรีสำโรง",
    subDistrict: "ราวต้นจันทร์"
  },
  {
    code: 640701,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "เมืองสวรรคโลก"
  },
  {
    code: 640702,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "ในเมือง"
  },
  {
    code: 640703,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "คลองกระจง"
  },
  {
    code: 640704,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "วังพิณพาทย์"
  },
  {
    code: 640705,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "วังไม้ขอน"
  },
  {
    code: 640706,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "ย่านยาว"
  },
  {
    code: 640707,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "นาทุ่ง"
  },
  {
    code: 640708,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "คลองยาง"
  },
  {
    code: 640709,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "เมืองบางยม"
  },
  {
    code: 640710,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "ท่าทอง"
  },
  {
    code: 640711,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "ปากน้ำ"
  },
  {
    code: 640712,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "ป่ากุมเกาะ"
  },
  {
    code: 640713,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "เมืองบางขลัง"
  },
  {
    code: 640714,
    province: "สุโขทัย",
    district: "อำเภอสวรรคโลก",
    subDistrict: "หนองกลับ"
  },
  {
    code: 640801,
    province: "สุโขทัย",
    district: "อำเภอศรีนคร",
    subDistrict: "ศรีนคร"
  },
  {
    code: 640802,
    province: "สุโขทัย",
    district: "อำเภอศรีนคร",
    subDistrict: "นครเดิฐ"
  },
  {
    code: 640803,
    province: "สุโขทัย",
    district: "อำเภอศรีนคร",
    subDistrict: "น้ำขุม"
  },
  {
    code: 640804,
    province: "สุโขทัย",
    district: "อำเภอศรีนคร",
    subDistrict: "คลองมะพลับ"
  },
  {
    code: 640805,
    province: "สุโขทัย",
    district: "อำเภอศรีนคร",
    subDistrict: "หนองบัว"
  },
  {
    code: 640901,
    province: "สุโขทัย",
    district: "อำเภอทุ่งเสลี่ยม",
    subDistrict: "บ้านใหม่ไชยมงคล"
  },
  {
    code: 640902,
    province: "สุโขทัย",
    district: "อำเภอทุ่งเสลี่ยม",
    subDistrict: "ไทยชนะศึก"
  },
  {
    code: 640903,
    province: "สุโขทัย",
    district: "อำเภอทุ่งเสลี่ยม",
    subDistrict: "ทุ่งเสลี่ยม"
  },
  {
    code: 640904,
    province: "สุโขทัย",
    district: "อำเภอทุ่งเสลี่ยม",
    subDistrict: "กลางดง"
  },
  {
    code: 640905,
    province: "สุโขทัย",
    district: "อำเภอทุ่งเสลี่ยม",
    subDistrict: "เขาแก้วศรีสมบูรณ์"
  },
  {
    code: 650101,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "ในเมือง"
  },
  {
    code: 650102,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "วังน้ำคู้"
  },
  {
    code: 650103,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "วัดจันทร์"
  },
  {
    code: 650104,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "วัดพริก"
  },
  {
    code: 650105,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "ท่าทอง"
  },
  {
    code: 650106,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "ท่าโพธิ์"
  },
  {
    code: 650107,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "สมอแข"
  },
  {
    code: 650108,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "ดอนทอง"
  },
  {
    code: 650109,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "บ้านป่า"
  },
  {
    code: 650110,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "ปากโทก"
  },
  {
    code: 650111,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "หัวรอ"
  },
  {
    code: 650112,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "จอมทอง"
  },
  {
    code: 650113,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "บ้านกร่าง"
  },
  {
    code: 650114,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "บ้านคลอง"
  },
  {
    code: 650115,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "พลายชุมพล"
  },
  {
    code: 650116,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "มะขามสูง"
  },
  {
    code: 650117,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "อรัญญิก"
  },
  {
    code: 650118,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "บึงพระ"
  },
  {
    code: 650119,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "ไผ่ขอดอน"
  },
  {
    code: 650120,
    province: "พิษณุโลก",
    district: "อำเภอเมืองพิษณุโลก",
    subDistrict: "งิ้วงาม"
  },
  {
    code: 650201,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "นครไทย"
  },
  {
    code: 650202,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "หนองกะท้าว"
  },
  {
    code: 650203,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "บ้านแยง"
  },
  {
    code: 650204,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "เนินเพิ่ม"
  },
  {
    code: 650205,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "นาบัว"
  },
  {
    code: 650206,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "นครชุม"
  },
  {
    code: 650207,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "น้ำกุ่ม"
  },
  {
    code: 650208,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "ยางโกลน"
  },
  {
    code: 650209,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "บ่อโพธิ์"
  },
  {
    code: 650210,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "บ้านพร้าว"
  },
  {
    code: 650211,
    province: "พิษณุโลก",
    district: "อำเภอนครไทย",
    subDistrict: "ห้วยเฮี้ย"
  },
  {
    code: 650301,
    province: "พิษณุโลก",
    district: "อำเภอชาติตระการ",
    subDistrict: "ป่าแดง"
  },
  {
    code: 650302,
    province: "พิษณุโลก",
    district: "อำเภอชาติตระการ",
    subDistrict: "ชาติตระการ"
  },
  {
    code: 650303,
    province: "พิษณุโลก",
    district: "อำเภอชาติตระการ",
    subDistrict: "สวนเมี่ยง"
  },
  {
    code: 650304,
    province: "พิษณุโลก",
    district: "อำเภอชาติตระการ",
    subDistrict: "บ้านดง"
  },
  {
    code: 650305,
    province: "พิษณุโลก",
    district: "อำเภอชาติตระการ",
    subDistrict: "บ่อภาค"
  },
  {
    code: 650306,
    province: "พิษณุโลก",
    district: "อำเภอชาติตระการ",
    subDistrict: "ท่าสะแก"
  },
  {
    code: 650401,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "บางระกำ"
  },
  {
    code: 650402,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "ปลักแรด"
  },
  {
    code: 650403,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "พันเสา"
  },
  {
    code: 650404,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "วังอิทก"
  },
  {
    code: 650405,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "บึงกอก"
  },
  {
    code: 650406,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "หนองกุลา"
  },
  {
    code: 650407,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "ชุมแสงสงคราม"
  },
  {
    code: 650408,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "นิคมพัฒนา"
  },
  {
    code: 650409,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "บ่อทอง"
  },
  {
    code: 650410,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "ท่านางงาม"
  },
  {
    code: 650411,
    province: "พิษณุโลก",
    district: "อำเภอบางระกำ",
    subDistrict: "คุยม่วง"
  },
  {
    code: 650501,
    province: "พิษณุโลก",
    district: "อำเภอบางกระทุ่ม",
    subDistrict: "บางกระทุ่ม"
  },
  {
    code: 650502,
    province: "พิษณุโลก",
    district: "อำเภอบางกระทุ่ม",
    subDistrict: "บ้านไร่"
  },
  {
    code: 650503,
    province: "พิษณุโลก",
    district: "อำเภอบางกระทุ่ม",
    subDistrict: "โคกสลุด"
  },
  {
    code: 650504,
    province: "พิษณุโลก",
    district: "อำเภอบางกระทุ่ม",
    subDistrict: "สนามคลี"
  },
  {
    code: 650505,
    province: "พิษณุโลก",
    district: "อำเภอบางกระทุ่ม",
    subDistrict: "ท่าตาล"
  },
  {
    code: 650506,
    province: "พิษณุโลก",
    district: "อำเภอบางกระทุ่ม",
    subDistrict: "ไผ่ล้อม"
  },
  {
    code: 650507,
    province: "พิษณุโลก",
    district: "อำเภอบางกระทุ่ม",
    subDistrict: "นครป่าหมาก"
  },
  {
    code: 650508,
    province: "พิษณุโลก",
    district: "อำเภอบางกระทุ่ม",
    subDistrict: "เนินกุ่ม"
  },
  {
    code: 650509,
    province: "พิษณุโลก",
    district: "อำเภอบางกระทุ่ม",
    subDistrict: "วัดตายม"
  },
  {
    code: 650601,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "พรหมพิราม"
  },
  {
    code: 650602,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "ท่าช้าง"
  },
  {
    code: 650603,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "วงฆ้อง"
  },
  {
    code: 650604,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "มะตูม"
  },
  {
    code: 650605,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "หอกลอง"
  },
  {
    code: 650606,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "ศรีภิรมย์"
  },
  {
    code: 650607,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "ตลุกเทียม"
  },
  {
    code: 650608,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "วังวน"
  },
  {
    code: 650609,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "หนองแขม"
  },
  {
    code: 650610,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "มะต้อง"
  },
  {
    code: 650611,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "ทับยายเชียง"
  },
  {
    code: 650612,
    province: "พิษณุโลก",
    district: "อำเภอพรหมพิราม",
    subDistrict: "ดงประคำ"
  },
  {
    code: 650701,
    province: "พิษณุโลก",
    district: "อำเภอวัดโบสถ์",
    subDistrict: "วัดโบสถ์"
  },
  {
    code: 650702,
    province: "พิษณุโลก",
    district: "อำเภอวัดโบสถ์",
    subDistrict: "ท่างาม"
  },
  {
    code: 650703,
    province: "พิษณุโลก",
    district: "อำเภอวัดโบสถ์",
    subDistrict: "ท้อแท้"
  },
  {
    code: 650704,
    province: "พิษณุโลก",
    district: "อำเภอวัดโบสถ์",
    subDistrict: "บ้านยาง"
  },
  {
    code: 650705,
    province: "พิษณุโลก",
    district: "อำเภอวัดโบสถ์",
    subDistrict: "หินลาด"
  },
  {
    code: 650706,
    province: "พิษณุโลก",
    district: "อำเภอวัดโบสถ์",
    subDistrict: "คันโช้ง"
  },
  {
    code: 650801,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "วังทอง"
  },
  {
    code: 650802,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "พันชาลี"
  },
  {
    code: 650803,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "แม่ระกา"
  },
  {
    code: 650804,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "บ้านกลาง"
  },
  {
    code: 650805,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "วังพิกุล"
  },
  {
    code: 650806,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "แก่งโสภา"
  },
  {
    code: 650807,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "ท่าหมื่นราม"
  },
  {
    code: 650808,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "วังนกแอ่น"
  },
  {
    code: 650809,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "หนองพระ"
  },
  {
    code: 650810,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "ชัยนาม"
  },
  {
    code: 650811,
    province: "พิษณุโลก",
    district: "อำเภอวังทอง",
    subDistrict: "ดินทอง"
  },
  {
    code: 650901,
    province: "พิษณุโลก",
    district: "อำเภอเนินมะปราง",
    subDistrict: "ชมพู"
  },
  {
    code: 650902,
    province: "พิษณุโลก",
    district: "อำเภอเนินมะปราง",
    subDistrict: "บ้านมุง"
  },
  {
    code: 650903,
    province: "พิษณุโลก",
    district: "อำเภอเนินมะปราง",
    subDistrict: "ไทรย้อย"
  },
  {
    code: 650904,
    province: "พิษณุโลก",
    district: "อำเภอเนินมะปราง",
    subDistrict: "วังโพรง"
  },
  {
    code: 650905,
    province: "พิษณุโลก",
    district: "อำเภอเนินมะปราง",
    subDistrict: "บ้านน้อยซุ้มขี้เหล็ก"
  },
  {
    code: 650906,
    province: "พิษณุโลก",
    district: "อำเภอเนินมะปราง",
    subDistrict: "เนินมะปราง"
  },
  {
    code: 650907,
    province: "พิษณุโลก",
    district: "อำเภอเนินมะปราง",
    subDistrict: "วังยาง"
  },
  {
    code: 660101,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "ในเมือง"
  },
  {
    code: 660102,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "ไผ่ขวาง"
  },
  {
    code: 660103,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "ย่านยาว"
  },
  {
    code: 660104,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "ท่าฬ่อ"
  },
  {
    code: 660105,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "ปากทาง"
  },
  {
    code: 660106,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "คลองคะเชนทร์"
  },
  {
    code: 660107,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "โรงช้าง"
  },
  {
    code: 660108,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "เมืองเก่า"
  },
  {
    code: 660109,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "ท่าหลวง"
  },
  {
    code: 660110,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "บ้านบุ่ง"
  },
  {
    code: 660111,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "ฆะมัง"
  },
  {
    code: 660112,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "ดงป่าคำ"
  },
  {
    code: 660113,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "หัวดง"
  },
  {
    code: 660115,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "ป่ามะคาบ"
  },
  {
    code: 660119,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "สายคำโห้"
  },
  {
    code: 660120,
    province: "พิจิตร",
    district: "อำเภอเมืองพิจิตร",
    subDistrict: "ดงกลาง"
  },
  {
    code: 660201,
    province: "พิจิตร",
    district: "อำเภอวังทรายพูน",
    subDistrict: "วังทรายพูน"
  },
  {
    code: 660202,
    province: "พิจิตร",
    district: "อำเภอวังทรายพูน",
    subDistrict: "หนองปลาไหล"
  },
  {
    code: 660203,
    province: "พิจิตร",
    district: "อำเภอวังทรายพูน",
    subDistrict: "หนองพระ"
  },
  {
    code: 660204,
    province: "พิจิตร",
    district: "อำเภอวังทรายพูน",
    subDistrict: "หนองปล้อง"
  },
  {
    code: 660301,
    province: "พิจิตร",
    district: "อำเภอโพธิ์ประทับช้าง",
    subDistrict: "โพธิ์ประทับช้าง"
  },
  {
    code: 660302,
    province: "พิจิตร",
    district: "อำเภอโพธิ์ประทับช้าง",
    subDistrict: "ไผ่ท่าโพ"
  },
  {
    code: 660303,
    province: "พิจิตร",
    district: "อำเภอโพธิ์ประทับช้าง",
    subDistrict: "วังจิก"
  },
  {
    code: 660304,
    province: "พิจิตร",
    district: "อำเภอโพธิ์ประทับช้าง",
    subDistrict: "ไผ่รอบ"
  },
  {
    code: 660305,
    province: "พิจิตร",
    district: "อำเภอโพธิ์ประทับช้าง",
    subDistrict: "ดงเสือเหลือง"
  },
  {
    code: 660306,
    province: "พิจิตร",
    district: "อำเภอโพธิ์ประทับช้าง",
    subDistrict: "เนินสว่าง"
  },
  {
    code: 660307,
    province: "พิจิตร",
    district: "อำเภอโพธิ์ประทับช้าง",
    subDistrict: "ทุ่งใหญ่"
  },
  {
    code: 660401,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "ตะพานหิน"
  },
  {
    code: 660402,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "งิ้วราย"
  },
  {
    code: 660403,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "ห้วยเกตุ"
  },
  {
    code: 660404,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "ไทรโรงโขน"
  },
  {
    code: 660405,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "หนองพยอม"
  },
  {
    code: 660406,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "ทุ่งโพธิ์"
  },
  {
    code: 660407,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "ดงตะขบ"
  },
  {
    code: 660408,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "คลองคูณ"
  },
  {
    code: 660409,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "วังสำโรง"
  },
  {
    code: 660410,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "วังหว้า"
  },
  {
    code: 660411,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "วังหลุม"
  },
  {
    code: 660412,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "ทับหมัน"
  },
  {
    code: 660413,
    province: "พิจิตร",
    district: "อำเภอตะพานหิน",
    subDistrict: "ไผ่หลวง"
  },
  {
    code: 660501,
    province: "พิจิตร",
    district: "อำเภอบางมูลนาก",
    subDistrict: "บางมูลนาก"
  },
  {
    code: 660502,
    province: "พิจิตร",
    district: "อำเภอบางมูลนาก",
    subDistrict: "บางไผ่"
  },
  {
    code: 660503,
    province: "พิจิตร",
    district: "อำเภอบางมูลนาก",
    subDistrict: "หอไกร"
  },
  {
    code: 660504,
    province: "พิจิตร",
    district: "อำเภอบางมูลนาก",
    subDistrict: "เนินมะกอก"
  },
  {
    code: 660505,
    province: "พิจิตร",
    district: "อำเภอบางมูลนาก",
    subDistrict: "วังสำโรง"
  },
  {
    code: 660506,
    province: "พิจิตร",
    district: "อำเภอบางมูลนาก",
    subDistrict: "ภูมิ"
  },
  {
    code: 660507,
    province: "พิจิตร",
    district: "อำเภอบางมูลนาก",
    subDistrict: "วังกรด"
  },
  {
    code: 660508,
    province: "พิจิตร",
    district: "อำเภอบางมูลนาก",
    subDistrict: "ห้วยเขน"
  },
  {
    code: 660509,
    province: "พิจิตร",
    district: "อำเภอบางมูลนาก",
    subDistrict: "วังตะกู"
  },
  {
    code: 660514,
    province: "พิจิตร",
    district: "อำเภอบางมูลนาก",
    subDistrict: "ลำประดา"
  },
  {
    code: 660601,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "โพทะเล"
  },
  {
    code: 660602,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "ท้ายน้ำ"
  },
  {
    code: 660603,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "ทะนง"
  },
  {
    code: 660604,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "ท่าบัว"
  },
  {
    code: 660605,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "ทุ่งน้อย"
  },
  {
    code: 660606,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "ท่าขมิ้น"
  },
  {
    code: 660607,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "ท่าเสา"
  },
  {
    code: 660608,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "บางคลาน"
  },
  {
    code: 660611,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "ท่านั่ง"
  },
  {
    code: 660612,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "บ้านน้อย"
  },
  {
    code: 660613,
    province: "พิจิตร",
    district: "อำเภอโพทะเล",
    subDistrict: "วัดขวาง"
  },
  {
    code: 660701,
    province: "พิจิตร",
    district: "อำเภอสามง่าม",
    subDistrict: "สามง่าม"
  },
  {
    code: 660702,
    province: "พิจิตร",
    district: "อำเภอสามง่าม",
    subDistrict: "กำแพงดิน"
  },
  {
    code: 660703,
    province: "พิจิตร",
    district: "อำเภอสามง่าม",
    subDistrict: "รังนก"
  },
  {
    code: 660706,
    province: "พิจิตร",
    district: "อำเภอสามง่าม",
    subDistrict: "เนินปอ"
  },
  {
    code: 660707,
    province: "พิจิตร",
    district: "อำเภอสามง่าม",
    subDistrict: "หนองโสน"
  },
  {
    code: 660801,
    province: "พิจิตร",
    district: "อำเภอทับคล้อ",
    subDistrict: "ทับคล้อ"
  },
  {
    code: 660802,
    province: "พิจิตร",
    district: "อำเภอทับคล้อ",
    subDistrict: "เขาทราย"
  },
  {
    code: 660803,
    province: "พิจิตร",
    district: "อำเภอทับคล้อ",
    subDistrict: "เขาเจ็ดลูก"
  },
  {
    code: 660804,
    province: "พิจิตร",
    district: "อำเภอทับคล้อ",
    subDistrict: "ท้ายทุ่ง"
  },
  {
    code: 660901,
    province: "พิจิตร",
    district: "อำเภอสากเหล็ก",
    subDistrict: "สากเหล็ก"
  },
  {
    code: 660902,
    province: "พิจิตร",
    district: "อำเภอสากเหล็ก",
    subDistrict: "ท่าเยี่ยม"
  },
  {
    code: 660903,
    province: "พิจิตร",
    district: "อำเภอสากเหล็ก",
    subDistrict: "คลองทราย"
  },
  {
    code: 660904,
    province: "พิจิตร",
    district: "อำเภอสากเหล็ก",
    subDistrict: "หนองหญ้าไทร"
  },
  {
    code: 660905,
    province: "พิจิตร",
    district: "อำเภอสากเหล็ก",
    subDistrict: "วังทับไทร"
  },
  {
    code: 661001,
    province: "พิจิตร",
    district: "อำเภอบึงนาราง",
    subDistrict: "ห้วยแก้ว"
  },
  {
    code: 661002,
    province: "พิจิตร",
    district: "อำเภอบึงนาราง",
    subDistrict: "โพธิ์ไทรงาม"
  },
  {
    code: 661003,
    province: "พิจิตร",
    district: "อำเภอบึงนาราง",
    subDistrict: "แหลมรัง"
  },
  {
    code: 661004,
    province: "พิจิตร",
    district: "อำเภอบึงนาราง",
    subDistrict: "บางลาย"
  },
  {
    code: 661005,
    province: "พิจิตร",
    district: "อำเภอบึงนาราง",
    subDistrict: "บึงนาราง"
  },
  {
    code: 661101,
    province: "พิจิตร",
    district: "อำเภอดงเจริญ",
    subDistrict: "วังงิ้วใต้"
  },
  {
    code: 661102,
    province: "พิจิตร",
    district: "อำเภอดงเจริญ",
    subDistrict: "วังงิ้ว"
  },
  {
    code: 661103,
    province: "พิจิตร",
    district: "อำเภอดงเจริญ",
    subDistrict: "ห้วยร่วม"
  },
  {
    code: 661104,
    province: "พิจิตร",
    district: "อำเภอดงเจริญ",
    subDistrict: "ห้วยพุก"
  },
  {
    code: 661105,
    province: "พิจิตร",
    district: "อำเภอดงเจริญ",
    subDistrict: "สำนักขุนเณร"
  },
  {
    code: 661201,
    province: "พิจิตร",
    district: "อำเภอวชิรบารมี",
    subDistrict: "บ้านนา"
  },
  {
    code: 661202,
    province: "พิจิตร",
    district: "อำเภอวชิรบารมี",
    subDistrict: "บึงบัว"
  },
  {
    code: 661203,
    province: "พิจิตร",
    district: "อำเภอวชิรบารมี",
    subDistrict: "วังโมกข์"
  },
  {
    code: 661204,
    province: "พิจิตร",
    district: "อำเภอวชิรบารมี",
    subDistrict: "หนองหลุม"
  },
  {
    code: 670101,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "ในเมือง"
  },
  {
    code: 670102,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "ตะเบาะ"
  },
  {
    code: 670103,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "บ้านโตก"
  },
  {
    code: 670104,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "สะเดียง"
  },
  {
    code: 670105,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "ป่าเลา"
  },
  {
    code: 670106,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "นางั่ว"
  },
  {
    code: 670107,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "ท่าพล"
  },
  {
    code: 670108,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "ดงมูลเหล็ก"
  },
  {
    code: 670109,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "บ้านโคก"
  },
  {
    code: 670110,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "ชอนไพร"
  },
  {
    code: 670111,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "นาป่า"
  },
  {
    code: 670112,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "นายม"
  },
  {
    code: 670113,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "วังชมภู"
  },
  {
    code: 670114,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "น้ำร้อน"
  },
  {
    code: 670115,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "ห้วยสะแก"
  },
  {
    code: 670116,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "ห้วยใหญ่"
  },
  {
    code: 670117,
    province: "เพชรบูรณ์",
    district: "อำเภอเมืองเพชรบูรณ์",
    subDistrict: "ระวิง"
  },
  {
    code: 670201,
    province: "เพชรบูรณ์",
    district: "อำเภอชนแดน",
    subDistrict: "ชนแดน"
  },
  {
    code: 670202,
    province: "เพชรบูรณ์",
    district: "อำเภอชนแดน",
    subDistrict: "ดงขุย"
  },
  {
    code: 670203,
    province: "เพชรบูรณ์",
    district: "อำเภอชนแดน",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 670204,
    province: "เพชรบูรณ์",
    district: "อำเภอชนแดน",
    subDistrict: "พุทธบาท"
  },
  {
    code: 670205,
    province: "เพชรบูรณ์",
    district: "อำเภอชนแดน",
    subDistrict: "ลาดแค"
  },
  {
    code: 670206,
    province: "เพชรบูรณ์",
    district: "อำเภอชนแดน",
    subDistrict: "บ้านกล้วย"
  },
  {
    code: 670208,
    province: "เพชรบูรณ์",
    district: "อำเภอชนแดน",
    subDistrict: "ซับพุทรา"
  },
  {
    code: 670209,
    province: "เพชรบูรณ์",
    district: "อำเภอชนแดน",
    subDistrict: "ตะกุดไร"
  },
  {
    code: 670210,
    province: "เพชรบูรณ์",
    district: "อำเภอชนแดน",
    subDistrict: "ศาลาลาย"
  },
  {
    code: 670301,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "หล่มสัก"
  },
  {
    code: 670302,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "วัดป่า"
  },
  {
    code: 670303,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "ตาลเดี่ยว"
  },
  {
    code: 670304,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "ฝายนาแซง"
  },
  {
    code: 670305,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "หนองสว่าง"
  },
  {
    code: 670306,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "น้ำเฮี้ย"
  },
  {
    code: 670307,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "สักหลง"
  },
  {
    code: 670308,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "ท่าอิบุญ"
  },
  {
    code: 670309,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "บ้านโสก"
  },
  {
    code: 670310,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "บ้านติ้ว"
  },
  {
    code: 670311,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "ห้วยไร่"
  },
  {
    code: 670312,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "น้ำก้อ"
  },
  {
    code: 670313,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "ปากช่อง"
  },
  {
    code: 670314,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "น้ำชุน"
  },
  {
    code: 670315,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "หนองไขว่"
  },
  {
    code: 670316,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "ลานบ่า"
  },
  {
    code: 670317,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "บุ่งคล้า"
  },
  {
    code: 670318,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "บุ่งน้ำเต้า"
  },
  {
    code: 670319,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "บ้านกลาง"
  },
  {
    code: 670320,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "ช้างตะลูด"
  },
  {
    code: 670321,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "บ้านไร่"
  },
  {
    code: 670322,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "ปากดุก"
  },
  {
    code: 670323,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มสัก",
    subDistrict: "บ้านหวาย"
  },
  {
    code: 670401,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มเก่า",
    subDistrict: "หล่มเก่า"
  },
  {
    code: 670402,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มเก่า",
    subDistrict: "นาซำ"
  },
  {
    code: 670403,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มเก่า",
    subDistrict: "หินฮาว"
  },
  {
    code: 670404,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มเก่า",
    subDistrict: "บ้านเนิน"
  },
  {
    code: 670405,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มเก่า",
    subDistrict: "ศิลา"
  },
  {
    code: 670406,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มเก่า",
    subDistrict: "นาแซง"
  },
  {
    code: 670407,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มเก่า",
    subDistrict: "วังบาล"
  },
  {
    code: 670408,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มเก่า",
    subDistrict: "นาเกาะ"
  },
  {
    code: 670409,
    province: "เพชรบูรณ์",
    district: "อำเภอหล่มเก่า",
    subDistrict: "ตาดกลอย"
  },
  {
    code: 670501,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "ท่าโรง"
  },
  {
    code: 670502,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "สระประดู่"
  },
  {
    code: 670503,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "สามแยก"
  },
  {
    code: 670504,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "โคกปรง"
  },
  {
    code: 670505,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "น้ำร้อน"
  },
  {
    code: 670506,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "บ่อรัง"
  },
  {
    code: 670507,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "พุเตย"
  },
  {
    code: 670508,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "พุขาม"
  },
  {
    code: 670509,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "ภูน้ำหยด"
  },
  {
    code: 670510,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "ซับสมบูรณ์"
  },
  {
    code: 670511,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "บึงกระจับ"
  },
  {
    code: 670512,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "วังใหญ่"
  },
  {
    code: 670513,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "ยางสาว"
  },
  {
    code: 670514,
    province: "เพชรบูรณ์",
    district: "อำเภอวิเชียรบุรี",
    subDistrict: "ซับน้อย"
  },
  {
    code: 670601,
    province: "เพชรบูรณ์",
    district: "อำเภอศรีเทพ",
    subDistrict: "ศรีเทพ"
  },
  {
    code: 670602,
    province: "เพชรบูรณ์",
    district: "อำเภอศรีเทพ",
    subDistrict: "สระกรวด"
  },
  {
    code: 670603,
    province: "เพชรบูรณ์",
    district: "อำเภอศรีเทพ",
    subDistrict: "คลองกระจัง"
  },
  {
    code: 670604,
    province: "เพชรบูรณ์",
    district: "อำเภอศรีเทพ",
    subDistrict: "นาสนุ่น"
  },
  {
    code: 670605,
    province: "เพชรบูรณ์",
    district: "อำเภอศรีเทพ",
    subDistrict: "โคกสะอาด"
  },
  {
    code: 670606,
    province: "เพชรบูรณ์",
    district: "อำเภอศรีเทพ",
    subDistrict: "หนองย่างทอย"
  },
  {
    code: 670607,
    province: "เพชรบูรณ์",
    district: "อำเภอศรีเทพ",
    subDistrict: "ประดู่งาม"
  },
  {
    code: 670701,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "กองทูล"
  },
  {
    code: 670702,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "นาเฉลียง"
  },
  {
    code: 670703,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "บ้านโภชน์"
  },
  {
    code: 670704,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "ท่าแดง"
  },
  {
    code: 670705,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "เพชรละคร"
  },
  {
    code: 670706,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "บ่อไทย"
  },
  {
    code: 670707,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "ห้วยโป่ง"
  },
  {
    code: 670708,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "วังท่าดี"
  },
  {
    code: 670709,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "บัววัฒนา"
  },
  {
    code: 670710,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "หนองไผ่"
  },
  {
    code: 670711,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "วังโบสถ์"
  },
  {
    code: 670712,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "ยางงาม"
  },
  {
    code: 670713,
    province: "เพชรบูรณ์",
    district: "อำเภอหนองไผ่",
    subDistrict: "ท่าด้วง"
  },
  {
    code: 670801,
    province: "เพชรบูรณ์",
    district: "อำเภอบึงสามพัน",
    subDistrict: "ซับสมอทอด"
  },
  {
    code: 670802,
    province: "เพชรบูรณ์",
    district: "อำเภอบึงสามพัน",
    subDistrict: "ซับไม้แดง"
  },
  {
    code: 670803,
    province: "เพชรบูรณ์",
    district: "อำเภอบึงสามพัน",
    subDistrict: "หนองแจง"
  },
  {
    code: 670804,
    province: "เพชรบูรณ์",
    district: "อำเภอบึงสามพัน",
    subDistrict: "กันจุ"
  },
  {
    code: 670805,
    province: "เพชรบูรณ์",
    district: "อำเภอบึงสามพัน",
    subDistrict: "วังพิกุล"
  },
  {
    code: 670806,
    province: "เพชรบูรณ์",
    district: "อำเภอบึงสามพัน",
    subDistrict: "พญาวัง"
  },
  {
    code: 670807,
    province: "เพชรบูรณ์",
    district: "อำเภอบึงสามพัน",
    subDistrict: "ศรีมงคล"
  },
  {
    code: 670808,
    province: "เพชรบูรณ์",
    district: "อำเภอบึงสามพัน",
    subDistrict: "สระแก้ว"
  },
  {
    code: 670809,
    province: "เพชรบูรณ์",
    district: "อำเภอบึงสามพัน",
    subDistrict: "บึงสามพัน"
  },
  {
    code: 670901,
    province: "เพชรบูรณ์",
    district: "อำเภอน้ำหนาว",
    subDistrict: "น้ำหนาว"
  },
  {
    code: 670902,
    province: "เพชรบูรณ์",
    district: "อำเภอน้ำหนาว",
    subDistrict: "หลักด่าน"
  },
  {
    code: 670903,
    province: "เพชรบูรณ์",
    district: "อำเภอน้ำหนาว",
    subDistrict: "วังกวาง"
  },
  {
    code: 670904,
    province: "เพชรบูรณ์",
    district: "อำเภอน้ำหนาว",
    subDistrict: "โคกมน"
  },
  {
    code: 671001,
    province: "เพชรบูรณ์",
    district: "อำเภอวังโป่ง",
    subDistrict: "วังโป่ง"
  },
  {
    code: 671002,
    province: "เพชรบูรณ์",
    district: "อำเภอวังโป่ง",
    subDistrict: "ท้ายดง"
  },
  {
    code: 671003,
    province: "เพชรบูรณ์",
    district: "อำเภอวังโป่ง",
    subDistrict: "ซับเปิบ"
  },
  {
    code: 671004,
    province: "เพชรบูรณ์",
    district: "อำเภอวังโป่ง",
    subDistrict: "วังหิน"
  },
  {
    code: 671005,
    province: "เพชรบูรณ์",
    district: "อำเภอวังโป่ง",
    subDistrict: "วังศาล"
  },
  {
    code: 671101,
    province: "เพชรบูรณ์",
    district: "อำเภอเขาค้อ",
    subDistrict: "ทุ่งสมอ"
  },
  {
    code: 671102,
    province: "เพชรบูรณ์",
    district: "อำเภอเขาค้อ",
    subDistrict: "แคมป์สน"
  },
  {
    code: 671103,
    province: "เพชรบูรณ์",
    district: "อำเภอเขาค้อ",
    subDistrict: "เขาค้อ"
  },
  {
    code: 671104,
    province: "เพชรบูรณ์",
    district: "อำเภอเขาค้อ",
    subDistrict: "ริมสีม่วง"
  },
  {
    code: 671105,
    province: "เพชรบูรณ์",
    district: "อำเภอเขาค้อ",
    subDistrict: "สะเดาะพง"
  },
  {
    code: 671106,
    province: "เพชรบูรณ์",
    district: "อำเภอเขาค้อ",
    subDistrict: "หนองแม่นา"
  },
  {
    code: 671107,
    province: "เพชรบูรณ์",
    district: "อำเภอเขาค้อ",
    subDistrict: "เข็กน้อย"
  },
  {
    code: 700101,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "หน้าเมือง"
  },
  {
    code: 700102,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "เจดีย์หัก"
  },
  {
    code: 700103,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "ดอนตะโก"
  },
  {
    code: 700104,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "หนองกลางนา"
  },
  {
    code: 700105,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "ห้วยไผ่"
  },
  {
    code: 700106,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "คุ้งน้ำวน"
  },
  {
    code: 700107,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "คุ้งกระถิน"
  },
  {
    code: 700108,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "อ่างทอง"
  },
  {
    code: 700109,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "โคกหม้อ"
  },
  {
    code: 700110,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "สามเรือน"
  },
  {
    code: 700111,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "พิกุลทอง"
  },
  {
    code: 700112,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "น้ำพุ"
  },
  {
    code: 700113,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "ดอนแร่"
  },
  {
    code: 700114,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "หินกอง"
  },
  {
    code: 700115,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "เขาแร้ง"
  },
  {
    code: 700116,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "เกาะพลับพลา"
  },
  {
    code: 700117,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "หลุมดิน"
  },
  {
    code: 700118,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "บางป่า"
  },
  {
    code: 700119,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "พงสวาย"
  },
  {
    code: 700120,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "คูบัว"
  },
  {
    code: 700121,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "ท่าราบ"
  },
  {
    code: 700122,
    province: "ราชบุรี",
    district: "อำเภอเมืองราชบุรี",
    subDistrict: "บ้านไร่"
  },
  {
    code: 700201,
    province: "ราชบุรี",
    district: "อำเภอจอมบึง",
    subDistrict: "จอมบึง"
  },
  {
    code: 700202,
    province: "ราชบุรี",
    district: "อำเภอจอมบึง",
    subDistrict: "ปากช่อง"
  },
  {
    code: 700203,
    province: "ราชบุรี",
    district: "อำเภอจอมบึง",
    subDistrict: "เบิกไพร"
  },
  {
    code: 700204,
    province: "ราชบุรี",
    district: "อำเภอจอมบึง",
    subDistrict: "ด่านทับตะโก"
  },
  {
    code: 700205,
    province: "ราชบุรี",
    district: "อำเภอจอมบึง",
    subDistrict: "แก้มอ้น"
  },
  {
    code: 700206,
    province: "ราชบุรี",
    district: "อำเภอจอมบึง",
    subDistrict: "รางบัว"
  },
  {
    code: 700301,
    province: "ราชบุรี",
    district: "อำเภอสวนผึ้ง",
    subDistrict: "สวนผึ้ง"
  },
  {
    code: 700302,
    province: "ราชบุรี",
    district: "อำเภอสวนผึ้ง",
    subDistrict: "ป่าหวาย"
  },
  {
    code: 700304,
    province: "ราชบุรี",
    district: "อำเภอสวนผึ้ง",
    subDistrict: "ท่าเคย"
  },
  {
    code: 700307,
    province: "ราชบุรี",
    district: "อำเภอสวนผึ้ง",
    subDistrict: "ตะนาวศรี"
  },
  {
    code: 700401,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "ดำเนินสะดวก"
  },
  {
    code: 700402,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "ประสาทสิทธิ์"
  },
  {
    code: 700403,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "ศรีสุราษฎร์"
  },
  {
    code: 700404,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "ตาหลวง"
  },
  {
    code: 700405,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "ดอนกรวย"
  },
  {
    code: 700406,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "ดอนคลัง"
  },
  {
    code: 700407,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "บัวงาม"
  },
  {
    code: 700408,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "บ้านไร่"
  },
  {
    code: 700409,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "แพงพวย"
  },
  {
    code: 700410,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "สี่หมื่น"
  },
  {
    code: 700411,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "ท่านัด"
  },
  {
    code: 700412,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "ขุนพิทักษ์"
  },
  {
    code: 700413,
    province: "ราชบุรี",
    district: "อำเภอดำเนินสะดวก",
    subDistrict: "ดอนไผ่"
  },
  {
    code: 700501,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "บ้านโป่ง"
  },
  {
    code: 700502,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "ท่าผา"
  },
  {
    code: 700503,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "กรับใหญ่"
  },
  {
    code: 700504,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "ปากแรต"
  },
  {
    code: 700505,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "หนองกบ"
  },
  {
    code: 700506,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "หนองอ้อ"
  },
  {
    code: 700507,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "ดอนกระเบื้อง"
  },
  {
    code: 700508,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "สวนกล้วย"
  },
  {
    code: 700509,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "นครชุมน์"
  },
  {
    code: 700510,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "บ้านม่วง"
  },
  {
    code: 700511,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "คุ้งพยอม"
  },
  {
    code: 700512,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "หนองปลาหมอ"
  },
  {
    code: 700513,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "เขาขลุง"
  },
  {
    code: 700514,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "เบิกไพร"
  },
  {
    code: 700515,
    province: "ราชบุรี",
    district: "อำเภอบ้านโป่ง",
    subDistrict: "ลาดบัวขาว"
  },
  {
    code: 700601,
    province: "ราชบุรี",
    district: "อำเภอบางแพ",
    subDistrict: "บางแพ"
  },
  {
    code: 700602,
    province: "ราชบุรี",
    district: "อำเภอบางแพ",
    subDistrict: "วังเย็น"
  },
  {
    code: 700603,
    province: "ราชบุรี",
    district: "อำเภอบางแพ",
    subDistrict: "หัวโพ"
  },
  {
    code: 700604,
    province: "ราชบุรี",
    district: "อำเภอบางแพ",
    subDistrict: "วัดแก้ว"
  },
  {
    code: 700605,
    province: "ราชบุรี",
    district: "อำเภอบางแพ",
    subDistrict: "ดอนใหญ่"
  },
  {
    code: 700606,
    province: "ราชบุรี",
    district: "อำเภอบางแพ",
    subDistrict: "ดอนคา"
  },
  {
    code: 700607,
    province: "ราชบุรี",
    district: "อำเภอบางแพ",
    subDistrict: "โพหัก"
  },
  {
    code: 700701,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "โพธาราม"
  },
  {
    code: 700702,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "ดอนกระเบื้อง"
  },
  {
    code: 700703,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "หนองโพ"
  },
  {
    code: 700704,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "บ้านเลือก"
  },
  {
    code: 700705,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "คลองตาคต"
  },
  {
    code: 700706,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "บ้านฆ้อง"
  },
  {
    code: 700707,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "บ้านสิงห์"
  },
  {
    code: 700708,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "ดอนทราย"
  },
  {
    code: 700709,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "เจ็ดเสมียน"
  },
  {
    code: 700710,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "คลองข่อย"
  },
  {
    code: 700711,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "ชำแระ"
  },
  {
    code: 700712,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "สร้อยฟ้า"
  },
  {
    code: 700713,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "ท่าชุมพล"
  },
  {
    code: 700714,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "บางโตนด"
  },
  {
    code: 700715,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "เตาปูน"
  },
  {
    code: 700716,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "นางแก้ว"
  },
  {
    code: 700717,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "ธรรมเสน"
  },
  {
    code: 700718,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "เขาชะงุ้ม"
  },
  {
    code: 700719,
    province: "ราชบุรี",
    district: "อำเภอโพธาราม",
    subDistrict: "หนองกวาง"
  },
  {
    code: 700801,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "ทุ่งหลวง"
  },
  {
    code: 700802,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "วังมะนาว"
  },
  {
    code: 700803,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "ดอนทราย"
  },
  {
    code: 700804,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "หนองกระทุ่ม"
  },
  {
    code: 700805,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "ปากท่อ"
  },
  {
    code: 700806,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "ป่าไก่"
  },
  {
    code: 700807,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "วัดยางงาม"
  },
  {
    code: 700808,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "อ่างหิน"
  },
  {
    code: 700809,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "บ่อกระดาน"
  },
  {
    code: 700810,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "ยางหัก"
  },
  {
    code: 700811,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "วันดาว"
  },
  {
    code: 700812,
    province: "ราชบุรี",
    district: "อำเภอปากท่อ",
    subDistrict: "ห้วยยางโทน"
  },
  {
    code: 700901,
    province: "ราชบุรี",
    district: "อำเภอวัดเพลง",
    subDistrict: "เกาะศาลพระ"
  },
  {
    code: 700902,
    province: "ราชบุรี",
    district: "อำเภอวัดเพลง",
    subDistrict: "จอมประทัด"
  },
  {
    code: 700903,
    province: "ราชบุรี",
    district: "อำเภอวัดเพลง",
    subDistrict: "วัดเพลง"
  },
  {
    code: 701001,
    province: "ราชบุรี",
    district: "อำเภอบ้านคา",
    subDistrict: "บ้านคา"
  },
  {
    code: 701002,
    province: "ราชบุรี",
    district: "อำเภอบ้านคา",
    subDistrict: "บ้านบึง"
  },
  {
    code: 701003,
    province: "ราชบุรี",
    district: "อำเภอบ้านคา",
    subDistrict: "หนองพันจันทร์"
  },
  {
    code: 710101,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "บ้านเหนือ"
  },
  {
    code: 710102,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "บ้านใต้"
  },
  {
    code: 710103,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "ปากแพรก"
  },
  {
    code: 710104,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "ท่ามะขาม"
  },
  {
    code: 710105,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "แก่งเสี้ยน"
  },
  {
    code: 710106,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "หนองบัว"
  },
  {
    code: 710107,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "ลาดหญ้า"
  },
  {
    code: 710108,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "วังด้ง"
  },
  {
    code: 710109,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "ช่องสะเดา"
  },
  {
    code: 710110,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "หนองหญ้า"
  },
  {
    code: 710111,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "เกาะสำโรง"
  },
  {
    code: 710113,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "บ้านเก่า"
  },
  {
    code: 710116,
    province: "กาญจนบุรี",
    district: "อำเภอเมืองกาญจนบุรี",
    subDistrict: "วังเย็น"
  },
  {
    code: 710201,
    province: "กาญจนบุรี",
    district: "อำเภอไทรโยค",
    subDistrict: "ลุ่มสุ่ม"
  },
  {
    code: 710202,
    province: "กาญจนบุรี",
    district: "อำเภอไทรโยค",
    subDistrict: "ท่าเสา"
  },
  {
    code: 710203,
    province: "กาญจนบุรี",
    district: "อำเภอไทรโยค",
    subDistrict: "สิงห์"
  },
  {
    code: 710204,
    province: "กาญจนบุรี",
    district: "อำเภอไทรโยค",
    subDistrict: "ไทรโยค"
  },
  {
    code: 710205,
    province: "กาญจนบุรี",
    district: "อำเภอไทรโยค",
    subDistrict: "วังกระแจะ"
  },
  {
    code: 710206,
    province: "กาญจนบุรี",
    district: "อำเภอไทรโยค",
    subDistrict: "ศรีมงคล"
  },
  {
    code: 710207,
    province: "กาญจนบุรี",
    district: "อำเภอไทรโยค",
    subDistrict: "บ้องตี้"
  },
  {
    code: 710301,
    province: "กาญจนบุรี",
    district: "อำเภอบ่อพลอย",
    subDistrict: "บ่อพลอย"
  },
  {
    code: 710302,
    province: "กาญจนบุรี",
    district: "อำเภอบ่อพลอย",
    subDistrict: "หนองกุ่ม"
  },
  {
    code: 710303,
    province: "กาญจนบุรี",
    district: "อำเภอบ่อพลอย",
    subDistrict: "หนองรี"
  },
  {
    code: 710305,
    province: "กาญจนบุรี",
    district: "อำเภอบ่อพลอย",
    subDistrict: "หลุมรัง"
  },
  {
    code: 710308,
    province: "กาญจนบุรี",
    district: "อำเภอบ่อพลอย",
    subDistrict: "ช่องด่าน"
  },
  {
    code: 710309,
    province: "กาญจนบุรี",
    district: "อำเภอบ่อพลอย",
    subDistrict: "หนองกร่าง"
  },
  {
    code: 710401,
    province: "กาญจนบุรี",
    district: "อำเภอศรีสวัสดิ์",
    subDistrict: "นาสวน"
  },
  {
    code: 710402,
    province: "กาญจนบุรี",
    district: "อำเภอศรีสวัสดิ์",
    subDistrict: "ด่านแม่แฉลบ"
  },
  {
    code: 710403,
    province: "กาญจนบุรี",
    district: "อำเภอศรีสวัสดิ์",
    subDistrict: "หนองเป็ด"
  },
  {
    code: 710404,
    province: "กาญจนบุรี",
    district: "อำเภอศรีสวัสดิ์",
    subDistrict: "ท่ากระดาน"
  },
  {
    code: 710405,
    province: "กาญจนบุรี",
    district: "อำเภอศรีสวัสดิ์",
    subDistrict: "เขาโจด"
  },
  {
    code: 710406,
    province: "กาญจนบุรี",
    district: "อำเภอศรีสวัสดิ์",
    subDistrict: "แม่กระบุง"
  },
  {
    code: 710501,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "พงตึก"
  },
  {
    code: 710502,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "ยางม่วง"
  },
  {
    code: 710503,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "ดอนชะเอม"
  },
  {
    code: 710504,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "ท่าไม้"
  },
  {
    code: 710505,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "ตะคร้ำเอน"
  },
  {
    code: 710506,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "ท่ามะกา"
  },
  {
    code: 710507,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "ท่าเรือ"
  },
  {
    code: 710508,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "โคกตะบอง"
  },
  {
    code: 710509,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "ดอนขมิ้น"
  },
  {
    code: 710510,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "อุโลกสี่หมื่น"
  },
  {
    code: 710511,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "เขาสามสิบหาบ"
  },
  {
    code: 710512,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "พระแท่น"
  },
  {
    code: 710513,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "หวายเหนียว"
  },
  {
    code: 710514,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "แสนตอ"
  },
  {
    code: 710515,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "สนามแย้"
  },
  {
    code: 710516,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "ท่าเสา"
  },
  {
    code: 710517,
    province: "กาญจนบุรี",
    district: "อำเภอท่ามะกา",
    subDistrict: "หนองลาน"
  },
  {
    code: 710601,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "ท่าม่วง"
  },
  {
    code: 710602,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "วังขนาย"
  },
  {
    code: 710603,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "วังศาลา"
  },
  {
    code: 710604,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "ท่าล้อ"
  },
  {
    code: 710605,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "หนองขาว"
  },
  {
    code: 710606,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "ทุ่งทอง"
  },
  {
    code: 710607,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "เขาน้อย"
  },
  {
    code: 710608,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "ม่วงชุม"
  },
  {
    code: 710609,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 710610,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "พังตรุ"
  },
  {
    code: 710611,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "ท่าตะคร้อ"
  },
  {
    code: 710612,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "รางสาลี่"
  },
  {
    code: 710613,
    province: "กาญจนบุรี",
    district: "อำเภอท่าม่วง",
    subDistrict: "หนองตากยา"
  },
  {
    code: 710701,
    province: "กาญจนบุรี",
    district: "อำเภอทองผาภูมิ",
    subDistrict: "ท่าขนุน"
  },
  {
    code: 710702,
    province: "กาญจนบุรี",
    district: "อำเภอทองผาภูมิ",
    subDistrict: "ปิล๊อก"
  },
  {
    code: 710703,
    province: "กาญจนบุรี",
    district: "อำเภอทองผาภูมิ",
    subDistrict: "หินดาด"
  },
  {
    code: 710704,
    province: "กาญจนบุรี",
    district: "อำเภอทองผาภูมิ",
    subDistrict: "ลิ่นถิ่น"
  },
  {
    code: 710705,
    province: "กาญจนบุรี",
    district: "อำเภอทองผาภูมิ",
    subDistrict: "ชะแล"
  },
  {
    code: 710706,
    province: "กาญจนบุรี",
    district: "อำเภอทองผาภูมิ",
    subDistrict: "ห้วยเขย่ง"
  },
  {
    code: 710707,
    province: "กาญจนบุรี",
    district: "อำเภอทองผาภูมิ",
    subDistrict: "สหกรณ์นิคม"
  },
  {
    code: 710801,
    province: "กาญจนบุรี",
    district: "อำเภอสังขละบุรี",
    subDistrict: "หนองลู"
  },
  {
    code: 710802,
    province: "กาญจนบุรี",
    district: "อำเภอสังขละบุรี",
    subDistrict: "ปรังเผล"
  },
  {
    code: 710803,
    province: "กาญจนบุรี",
    district: "อำเภอสังขละบุรี",
    subDistrict: "ไล่โว่"
  },
  {
    code: 710901,
    province: "กาญจนบุรี",
    district: "อำเภอพนมทวน",
    subDistrict: "พนมทวน"
  },
  {
    code: 710902,
    province: "กาญจนบุรี",
    district: "อำเภอพนมทวน",
    subDistrict: "หนองโรง"
  },
  {
    code: 710903,
    province: "กาญจนบุรี",
    district: "อำเภอพนมทวน",
    subDistrict: "ทุ่งสมอ"
  },
  {
    code: 710904,
    province: "กาญจนบุรี",
    district: "อำเภอพนมทวน",
    subDistrict: "ดอนเจดีย์"
  },
  {
    code: 710905,
    province: "กาญจนบุรี",
    district: "อำเภอพนมทวน",
    subDistrict: "พังตรุ"
  },
  {
    code: 710906,
    province: "กาญจนบุรี",
    district: "อำเภอพนมทวน",
    subDistrict: "รางหวาย"
  },
  {
    code: 710911,
    province: "กาญจนบุรี",
    district: "อำเภอพนมทวน",
    subDistrict: "หนองสาหร่าย"
  },
  {
    code: 710912,
    province: "กาญจนบุรี",
    district: "อำเภอพนมทวน",
    subDistrict: "ดอนตาเพชร"
  },
  {
    code: 711001,
    province: "กาญจนบุรี",
    district: "อำเภอเลาขวัญ",
    subDistrict: "เลาขวัญ"
  },
  {
    code: 711002,
    province: "กาญจนบุรี",
    district: "อำเภอเลาขวัญ",
    subDistrict: "หนองโสน"
  },
  {
    code: 711003,
    province: "กาญจนบุรี",
    district: "อำเภอเลาขวัญ",
    subDistrict: "หนองประดู่"
  },
  {
    code: 711004,
    province: "กาญจนบุรี",
    district: "อำเภอเลาขวัญ",
    subDistrict: "หนองปลิง"
  },
  {
    code: 711005,
    province: "กาญจนบุรี",
    district: "อำเภอเลาขวัญ",
    subDistrict: "หนองนกแก้ว"
  },
  {
    code: 711006,
    province: "กาญจนบุรี",
    district: "อำเภอเลาขวัญ",
    subDistrict: "ทุ่งกระบ่ำ"
  },
  {
    code: 711007,
    province: "กาญจนบุรี",
    district: "อำเภอเลาขวัญ",
    subDistrict: "หนองฝ้าย"
  },
  {
    code: 711101,
    province: "กาญจนบุรี",
    district: "อำเภอด่านมะขามเตี้ย",
    subDistrict: "ด่านมะขามเตี้ย"
  },
  {
    code: 711102,
    province: "กาญจนบุรี",
    district: "อำเภอด่านมะขามเตี้ย",
    subDistrict: "กลอนโด"
  },
  {
    code: 711103,
    province: "กาญจนบุรี",
    district: "อำเภอด่านมะขามเตี้ย",
    subDistrict: "จรเข้เผือก"
  },
  {
    code: 711104,
    province: "กาญจนบุรี",
    district: "อำเภอด่านมะขามเตี้ย",
    subDistrict: "หนองไผ่"
  },
  {
    code: 711201,
    province: "กาญจนบุรี",
    district: "อำเภอหนองปรือ",
    subDistrict: "หนองปรือ"
  },
  {
    code: 711202,
    province: "กาญจนบุรี",
    district: "อำเภอหนองปรือ",
    subDistrict: "หนองปลาไหล"
  },
  {
    code: 711203,
    province: "กาญจนบุรี",
    district: "อำเภอหนองปรือ",
    subDistrict: "สมเด็จเจริญ"
  },
  {
    code: 711301,
    province: "กาญจนบุรี",
    district: "อำเภอห้วยกระเจา",
    subDistrict: "ห้วยกระเจา"
  },
  {
    code: 711302,
    province: "กาญจนบุรี",
    district: "อำเภอห้วยกระเจา",
    subDistrict: "วังไผ่"
  },
  {
    code: 711303,
    province: "กาญจนบุรี",
    district: "อำเภอห้วยกระเจา",
    subDistrict: "ดอนแสลบ"
  },
  {
    code: 711304,
    province: "กาญจนบุรี",
    district: "อำเภอห้วยกระเจา",
    subDistrict: "สระลงเรือ"
  },
  {
    code: 720101,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "ท่าพี่เลี้ยง"
  },
  {
    code: 720102,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "รั้วใหญ่"
  },
  {
    code: 720103,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "ทับตีเหล็ก"
  },
  {
    code: 720104,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "ท่าระหัด"
  },
  {
    code: 720105,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "ไผ่ขวาง"
  },
  {
    code: 720106,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "โคกโคเฒ่า"
  },
  {
    code: 720107,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "ดอนตาล"
  },
  {
    code: 720108,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "ดอนมะสังข์"
  },
  {
    code: 720109,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "พิหารแดง"
  },
  {
    code: 720110,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "ดอนกำยาน"
  },
  {
    code: 720111,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "ดอนโพธิ์ทอง"
  },
  {
    code: 720112,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "บ้านโพธิ์"
  },
  {
    code: 720113,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "สระแก้ว"
  },
  {
    code: 720114,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "ตลิ่งชัน"
  },
  {
    code: 720115,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "บางกุ้ง"
  },
  {
    code: 720116,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "ศาลาขาว"
  },
  {
    code: 720117,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "สวนแตง"
  },
  {
    code: 720118,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "สนามชัย"
  },
  {
    code: 720119,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "โพธิ์พระยา"
  },
  {
    code: 720120,
    province: "สุพรรณบุรี",
    district: "อำเภอเมืองสุพรรณบุรี",
    subDistrict: "สนามคลี"
  },
  {
    code: 720201,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "เขาพระ"
  },
  {
    code: 720202,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "เดิมบาง"
  },
  {
    code: 720203,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "นางบวช"
  },
  {
    code: 720204,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "เขาดิน"
  },
  {
    code: 720205,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "ปากน้ำ"
  },
  {
    code: 720206,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "ทุ่งคลี"
  },
  {
    code: 720207,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "โคกช้าง"
  },
  {
    code: 720208,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "หัวเขา"
  },
  {
    code: 720209,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "หัวนา"
  },
  {
    code: 720210,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "บ่อกรุ"
  },
  {
    code: 720211,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "วังศรีราช"
  },
  {
    code: 720212,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "ป่าสะแก"
  },
  {
    code: 720213,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "ยางนอน"
  },
  {
    code: 720214,
    province: "สุพรรณบุรี",
    district: "อำเภอเดิมบางนางบวช",
    subDistrict: "หนองกระทุ่ม"
  },
  {
    code: 720301,
    province: "สุพรรณบุรี",
    district: "อำเภอด่านช้าง",
    subDistrict: "หนองมะค่าโมง"
  },
  {
    code: 720302,
    province: "สุพรรณบุรี",
    district: "อำเภอด่านช้าง",
    subDistrict: "ด่านช้าง"
  },
  {
    code: 720303,
    province: "สุพรรณบุรี",
    district: "อำเภอด่านช้าง",
    subDistrict: "ห้วยขมิ้น"
  },
  {
    code: 720304,
    province: "สุพรรณบุรี",
    district: "อำเภอด่านช้าง",
    subDistrict: "องค์พระ"
  },
  {
    code: 720305,
    province: "สุพรรณบุรี",
    district: "อำเภอด่านช้าง",
    subDistrict: "วังคัน"
  },
  {
    code: 720306,
    province: "สุพรรณบุรี",
    district: "อำเภอด่านช้าง",
    subDistrict: "นิคมกระเสียว"
  },
  {
    code: 720307,
    province: "สุพรรณบุรี",
    district: "อำเภอด่านช้าง",
    subDistrict: "วังยาว"
  },
  {
    code: 720401,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "โคกคราม"
  },
  {
    code: 720402,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "บางปลาม้า"
  },
  {
    code: 720403,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "ตะค่า"
  },
  {
    code: 720404,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "บางใหญ่"
  },
  {
    code: 720405,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "กฤษณา"
  },
  {
    code: 720406,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "สาลี"
  },
  {
    code: 720407,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "ไผ่กองดิน"
  },
  {
    code: 720408,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "องครักษ์"
  },
  {
    code: 720409,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "จรเข้ใหญ่"
  },
  {
    code: 720410,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "บ้านแหลม"
  },
  {
    code: 720411,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "มะขามล้ม"
  },
  {
    code: 720412,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "วังน้ำเย็น"
  },
  {
    code: 720413,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "วัดโบสถ์"
  },
  {
    code: 720414,
    province: "สุพรรณบุรี",
    district: "อำเภอบางปลาม้า",
    subDistrict: "วัดดาว"
  },
  {
    code: 720501,
    province: "สุพรรณบุรี",
    district: "อำเภอศรีประจันต์",
    subDistrict: "ศรีประจันต์"
  },
  {
    code: 720502,
    province: "สุพรรณบุรี",
    district: "อำเภอศรีประจันต์",
    subDistrict: "บ้านกร่าง"
  },
  {
    code: 720503,
    province: "สุพรรณบุรี",
    district: "อำเภอศรีประจันต์",
    subDistrict: "มดแดง"
  },
  {
    code: 720504,
    province: "สุพรรณบุรี",
    district: "อำเภอศรีประจันต์",
    subDistrict: "บางงาม"
  },
  {
    code: 720505,
    province: "สุพรรณบุรี",
    district: "อำเภอศรีประจันต์",
    subDistrict: "ดอนปรู"
  },
  {
    code: 720506,
    province: "สุพรรณบุรี",
    district: "อำเภอศรีประจันต์",
    subDistrict: "ปลายนา"
  },
  {
    code: 720507,
    province: "สุพรรณบุรี",
    district: "อำเภอศรีประจันต์",
    subDistrict: "วังหว้า"
  },
  {
    code: 720508,
    province: "สุพรรณบุรี",
    district: "อำเภอศรีประจันต์",
    subDistrict: "วังน้ำซับ"
  },
  {
    code: 720509,
    province: "สุพรรณบุรี",
    district: "อำเภอศรีประจันต์",
    subDistrict: "วังยาง"
  },
  {
    code: 720601,
    province: "สุพรรณบุรี",
    district: "อำเภอดอนเจดีย์",
    subDistrict: "ดอนเจดีย์"
  },
  {
    code: 720602,
    province: "สุพรรณบุรี",
    district: "อำเภอดอนเจดีย์",
    subDistrict: "หนองสาหร่าย"
  },
  {
    code: 720603,
    province: "สุพรรณบุรี",
    district: "อำเภอดอนเจดีย์",
    subDistrict: "ไร่รถ"
  },
  {
    code: 720604,
    province: "สุพรรณบุรี",
    district: "อำเภอดอนเจดีย์",
    subDistrict: "สระกระโจม"
  },
  {
    code: 720605,
    province: "สุพรรณบุรี",
    district: "อำเภอดอนเจดีย์",
    subDistrict: "ทะเลบก"
  },
  {
    code: 720701,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "สองพี่น้อง"
  },
  {
    code: 720702,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "บางเลน"
  },
  {
    code: 720703,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "บางตาเถร"
  },
  {
    code: 720704,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "บางตะเคียน"
  },
  {
    code: 720705,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "บ้านกุ่ม"
  },
  {
    code: 720706,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "หัวโพธิ์"
  },
  {
    code: 720707,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "บางพลับ"
  },
  {
    code: 720708,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "เนินพระปรางค์"
  },
  {
    code: 720709,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "บ้านช้าง"
  },
  {
    code: 720710,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "ต้นตาล"
  },
  {
    code: 720711,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "ศรีสำราญ"
  },
  {
    code: 720712,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "ทุ่งคอก"
  },
  {
    code: 720713,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "หนองบ่อ"
  },
  {
    code: 720714,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "บ่อสุพรรณ"
  },
  {
    code: 720715,
    province: "สุพรรณบุรี",
    district: "อำเภอสองพี่น้อง",
    subDistrict: "ดอนมะนาว"
  },
  {
    code: 720801,
    province: "สุพรรณบุรี",
    district: "อำเภอสามชุก",
    subDistrict: "ย่านยาว"
  },
  {
    code: 720802,
    province: "สุพรรณบุรี",
    district: "อำเภอสามชุก",
    subDistrict: "วังลึก"
  },
  {
    code: 720803,
    province: "สุพรรณบุรี",
    district: "อำเภอสามชุก",
    subDistrict: "สามชุก"
  },
  {
    code: 720804,
    province: "สุพรรณบุรี",
    district: "อำเภอสามชุก",
    subDistrict: "หนองผักนาก"
  },
  {
    code: 720805,
    province: "สุพรรณบุรี",
    district: "อำเภอสามชุก",
    subDistrict: "บ้านสระ"
  },
  {
    code: 720806,
    province: "สุพรรณบุรี",
    district: "อำเภอสามชุก",
    subDistrict: "หนองสะเดา"
  },
  {
    code: 720807,
    province: "สุพรรณบุรี",
    district: "อำเภอสามชุก",
    subDistrict: "กระเสียว"
  },
  {
    code: 720901,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "อู่ทอง"
  },
  {
    code: 720902,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "สระยายโสม"
  },
  {
    code: 720903,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "จรเข้สามพัน"
  },
  {
    code: 720904,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "บ้านดอน"
  },
  {
    code: 720905,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "ยุ้งทะลาย"
  },
  {
    code: 720906,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "ดอนมะเกลือ"
  },
  {
    code: 720907,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "หนองโอ่ง"
  },
  {
    code: 720908,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "ดอนคา"
  },
  {
    code: 720909,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "พลับพลาไชย"
  },
  {
    code: 720910,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "บ้านโข้ง"
  },
  {
    code: 720911,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "เจดีย์"
  },
  {
    code: 720912,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "สระพังลาน"
  },
  {
    code: 720913,
    province: "สุพรรณบุรี",
    district: "อำเภออู่ทอง",
    subDistrict: "กระจัน"
  },
  {
    code: 721001,
    province: "สุพรรณบุรี",
    district: "อำเภอหนองหญ้าไซ",
    subDistrict: "หนองหญ้าไซ"
  },
  {
    code: 721002,
    province: "สุพรรณบุรี",
    district: "อำเภอหนองหญ้าไซ",
    subDistrict: "หนองราชวัตร"
  },
  {
    code: 721003,
    province: "สุพรรณบุรี",
    district: "อำเภอหนองหญ้าไซ",
    subDistrict: "หนองโพธิ์"
  },
  {
    code: 721004,
    province: "สุพรรณบุรี",
    district: "อำเภอหนองหญ้าไซ",
    subDistrict: "แจงงาม"
  },
  {
    code: 721005,
    province: "สุพรรณบุรี",
    district: "อำเภอหนองหญ้าไซ",
    subDistrict: "หนองขาม"
  },
  {
    code: 721006,
    province: "สุพรรณบุรี",
    district: "อำเภอหนองหญ้าไซ",
    subDistrict: "ทัพหลวง"
  },
  {
    code: 730101,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "พระปฐมเจดีย์"
  },
  {
    code: 730102,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "บางแขม"
  },
  {
    code: 730103,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "พระประโทน"
  },
  {
    code: 730104,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "ธรรมศาลา"
  },
  {
    code: 730105,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "ตาก้อง"
  },
  {
    code: 730106,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "มาบแค"
  },
  {
    code: 730107,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "สนามจันทร์"
  },
  {
    code: 730108,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "ดอนยายหอม"
  },
  {
    code: 730109,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "ถนนขาด"
  },
  {
    code: 730110,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "บ่อพลับ"
  },
  {
    code: 730111,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "นครปฐม"
  },
  {
    code: 730112,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "วังตะกู"
  },
  {
    code: 730113,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "หนองปากโลง"
  },
  {
    code: 730114,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "สามควายเผือก"
  },
  {
    code: 730115,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "ทุ่งน้อย"
  },
  {
    code: 730116,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "หนองดินแดง"
  },
  {
    code: 730117,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "วังเย็น"
  },
  {
    code: 730118,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "โพรงมะเดื่อ"
  },
  {
    code: 730119,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "ลำพยา"
  },
  {
    code: 730120,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "สระกะเทียม"
  },
  {
    code: 730121,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "สวนป่าน"
  },
  {
    code: 730122,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "ห้วยจรเข้"
  },
  {
    code: 730123,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "ทัพหลวง"
  },
  {
    code: 730124,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "หนองงูเหลือม"
  },
  {
    code: 730125,
    province: "นครปฐม",
    district: "อำเภอเมืองนครปฐม",
    subDistrict: "บ้านยาง"
  },
  {
    code: 730201,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "ทุ่งกระพังโหม"
  },
  {
    code: 730202,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "กระตีบ"
  },
  {
    code: 730203,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "ทุ่งลูกนก"
  },
  {
    code: 730204,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "ห้วยขวาง"
  },
  {
    code: 730205,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "ทุ่งขวาง"
  },
  {
    code: 730206,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "สระสี่มุม"
  },
  {
    code: 730207,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "ทุ่งบัว"
  },
  {
    code: 730208,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "ดอนข่อย"
  },
  {
    code: 730209,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "สระพัฒนา"
  },
  {
    code: 730210,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "ห้วยหมอนทอง"
  },
  {
    code: 730211,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "ห้วยม่วง"
  },
  {
    code: 730212,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "กำแพงแสน"
  },
  {
    code: 730213,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "รางพิกุล"
  },
  {
    code: 730214,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "หนองกระทุ่ม"
  },
  {
    code: 730215,
    province: "นครปฐม",
    district: "อำเภอกำแพงแสน",
    subDistrict: "วังน้ำเขียว"
  },
  {
    code: 730301,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "นครชัยศรี"
  },
  {
    code: 730302,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "บางกระเบา"
  },
  {
    code: 730303,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "วัดแค"
  },
  {
    code: 730304,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "ท่าตำหนัก"
  },
  {
    code: 730305,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "บางแก้ว"
  },
  {
    code: 730306,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "ท่ากระชับ"
  },
  {
    code: 730307,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "ขุนแก้ว"
  },
  {
    code: 730308,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "ท่าพระยา"
  },
  {
    code: 730309,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "พะเนียด"
  },
  {
    code: 730310,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "บางระกำ"
  },
  {
    code: 730311,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "โคกพระเจดีย์"
  },
  {
    code: 730312,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "ศรีษะทอง"
  },
  {
    code: 730313,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "แหลมบัว"
  },
  {
    code: 730314,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "ศรีมหาโพธิ์"
  },
  {
    code: 730315,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "สัมปทวน"
  },
  {
    code: 730316,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "วัดสำโรง"
  },
  {
    code: 730317,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "ดอนแฝก"
  },
  {
    code: 730318,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "ห้วยพลู"
  },
  {
    code: 730319,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "วัดละมุด"
  },
  {
    code: 730320,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "บางพระ"
  },
  {
    code: 730321,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "บางแก้วฟ้า"
  },
  {
    code: 730322,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "ลานตากฟ้า"
  },
  {
    code: 730323,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "งิ้วราย"
  },
  {
    code: 730324,
    province: "นครปฐม",
    district: "อำเภอนครชัยศรี",
    subDistrict: "ไทยาวาส"
  },
  {
    code: 730401,
    province: "นครปฐม",
    district: "อำเภอดอนตูม",
    subDistrict: "สามง่าม"
  },
  {
    code: 730402,
    province: "นครปฐม",
    district: "อำเภอดอนตูม",
    subDistrict: "ห้วยพระ"
  },
  {
    code: 730403,
    province: "นครปฐม",
    district: "อำเภอดอนตูม",
    subDistrict: "ลำเหย"
  },
  {
    code: 730404,
    province: "นครปฐม",
    district: "อำเภอดอนตูม",
    subDistrict: "ดอนพุทรา"
  },
  {
    code: 730405,
    province: "นครปฐม",
    district: "อำเภอดอนตูม",
    subDistrict: "บ้านหลวง"
  },
  {
    code: 730406,
    province: "นครปฐม",
    district: "อำเภอดอนตูม",
    subDistrict: "ดอนรวก"
  },
  {
    code: 730407,
    province: "นครปฐม",
    district: "อำเภอดอนตูม",
    subDistrict: "ห้วยด้วน"
  },
  {
    code: 730408,
    province: "นครปฐม",
    district: "อำเภอดอนตูม",
    subDistrict: "ลำลูกบัว"
  },
  {
    code: 730501,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "บางเลน"
  },
  {
    code: 730502,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "บางปลา"
  },
  {
    code: 730503,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "บางหลวง"
  },
  {
    code: 730504,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "บางภาษี"
  },
  {
    code: 730505,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "บางระกำ"
  },
  {
    code: 730506,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "บางไทรป่า"
  },
  {
    code: 730507,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "หินมูล"
  },
  {
    code: 730508,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "ไทรงาม"
  },
  {
    code: 730509,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "ดอนตูม"
  },
  {
    code: 730510,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "นิลเพชร"
  },
  {
    code: 730511,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "บัวปากท่า"
  },
  {
    code: 730512,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "คลองนกกระทุง"
  },
  {
    code: 730513,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "นราภิรมย์"
  },
  {
    code: 730514,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "ลำพญา"
  },
  {
    code: 730515,
    province: "นครปฐม",
    district: "อำเภอบางเลน",
    subDistrict: "ไผ่หูช้าง"
  },
  {
    code: 730601,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 730602,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "ทรงคนอง"
  },
  {
    code: 730603,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "หอมเกร็ด"
  },
  {
    code: 730604,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "บางกระทึก"
  },
  {
    code: 730605,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "บางเตย"
  },
  {
    code: 730606,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "สามพราน"
  },
  {
    code: 730607,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "บางช้าง"
  },
  {
    code: 730608,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "ไร่ขิง"
  },
  {
    code: 730609,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "ท่าตลาด"
  },
  {
    code: 730610,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "กระทุ่มล้ม"
  },
  {
    code: 730611,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "คลองใหม่"
  },
  {
    code: 730612,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "ตลาดจินดา"
  },
  {
    code: 730613,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "คลองจินดา"
  },
  {
    code: 730614,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "ยายชา"
  },
  {
    code: 730615,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 730616,
    province: "นครปฐม",
    district: "อำเภอสามพราน",
    subDistrict: "อ้อมใหญ่"
  },
  {
    code: 730701,
    province: "นครปฐม",
    district: "อำเภอพุทธมณฑล",
    subDistrict: "ศาลายา"
  },
  {
    code: 730702,
    province: "นครปฐม",
    district: "อำเภอพุทธมณฑล",
    subDistrict: "คลองโยง"
  },
  {
    code: 730703,
    province: "นครปฐม",
    district: "อำเภอพุทธมณฑล",
    subDistrict: "มหาสวัสดิ์"
  },
  {
    code: 740101,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "มหาชัย"
  },
  {
    code: 740102,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "ท่าฉลอม"
  },
  {
    code: 740103,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "โกรกกราก"
  },
  {
    code: 740104,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "บ้านบ่อ"
  },
  {
    code: 740105,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "บางโทรัด"
  },
  {
    code: 740106,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "กาหลง"
  },
  {
    code: 740107,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "นาโคก"
  },
  {
    code: 740108,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "ท่าจีน"
  },
  {
    code: 740109,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "นาดี"
  },
  {
    code: 740110,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "ท่าทราย"
  },
  {
    code: 740111,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "คอกกระบือ"
  },
  {
    code: 740112,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "บางน้ำจืด"
  },
  {
    code: 740113,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "พันท้ายนรสิงห์"
  },
  {
    code: 740114,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "โคกขาม"
  },
  {
    code: 740115,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "บ้านเกาะ"
  },
  {
    code: 740116,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "บางกระเจ้า"
  },
  {
    code: 740117,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "บางหญ้าแพรก"
  },
  {
    code: 740118,
    province: "สมุทรสาคร",
    district: "อำเภอเมืองสมุทรสาคร",
    subDistrict: "ชัยมงคล"
  },
  {
    code: 740201,
    province: "สมุทรสาคร",
    district: "อำเภอกระทุ่มแบน",
    subDistrict: "ตลาดกระทุ่มแบน"
  },
  {
    code: 740202,
    province: "สมุทรสาคร",
    district: "อำเภอกระทุ่มแบน",
    subDistrict: "อ้อมน้อย"
  },
  {
    code: 740203,
    province: "สมุทรสาคร",
    district: "อำเภอกระทุ่มแบน",
    subDistrict: "ท่าไม้"
  },
  {
    code: 740204,
    province: "สมุทรสาคร",
    district: "อำเภอกระทุ่มแบน",
    subDistrict: "สวนหลวง"
  },
  {
    code: 740205,
    province: "สมุทรสาคร",
    district: "อำเภอกระทุ่มแบน",
    subDistrict: "บางยาง"
  },
  {
    code: 740206,
    province: "สมุทรสาคร",
    district: "อำเภอกระทุ่มแบน",
    subDistrict: "คลองมะเดื่อ"
  },
  {
    code: 740207,
    province: "สมุทรสาคร",
    district: "อำเภอกระทุ่มแบน",
    subDistrict: "หนองนกไข่"
  },
  {
    code: 740208,
    province: "สมุทรสาคร",
    district: "อำเภอกระทุ่มแบน",
    subDistrict: "ดอนไก่ดี"
  },
  {
    code: 740209,
    province: "สมุทรสาคร",
    district: "อำเภอกระทุ่มแบน",
    subDistrict: "แคราย"
  },
  {
    code: 740210,
    province: "สมุทรสาคร",
    district: "อำเภอกระทุ่มแบน",
    subDistrict: "ท่าเสา"
  },
  {
    code: 740301,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "บ้านแพ้ว"
  },
  {
    code: 740302,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "หลักสาม"
  },
  {
    code: 740303,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "ยกกระบัตร"
  },
  {
    code: 740304,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "โรงเข้"
  },
  {
    code: 740305,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "หนองสองห้อง"
  },
  {
    code: 740306,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "หนองบัว"
  },
  {
    code: 740307,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "หลักสอง"
  },
  {
    code: 740308,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "เจ็ดริ้ว"
  },
  {
    code: 740309,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "คลองตัน"
  },
  {
    code: 740310,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "อำแพง"
  },
  {
    code: 740311,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "สวนส้ม"
  },
  {
    code: 740312,
    province: "สมุทรสาคร",
    district: "อำเภอบ้านแพ้ว",
    subDistrict: "เกษตรพัฒนา"
  },
  {
    code: 750101,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "แม่กลอง"
  },
  {
    code: 750102,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "บางขันแตก"
  },
  {
    code: 750103,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "ลาดใหญ่"
  },
  {
    code: 750104,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "บ้านปรก"
  },
  {
    code: 750105,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "บางแก้ว"
  },
  {
    code: 750106,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "ท้ายหาด"
  },
  {
    code: 750107,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "แหลมใหญ่"
  },
  {
    code: 750108,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "คลองเขิน"
  },
  {
    code: 750109,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "คลองโคน"
  },
  {
    code: 750110,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "นางตะเคียน"
  },
  {
    code: 750111,
    province: "สมุทรสงคราม",
    district: "อำเภอเมืองสมุทรสงคราม",
    subDistrict: "บางจะเกร็ง"
  },
  {
    code: 750201,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "กระดังงา"
  },
  {
    code: 750202,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "บางสะแก"
  },
  {
    code: 750203,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "บางยี่รงค์"
  },
  {
    code: 750204,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "โรงหีบ"
  },
  {
    code: 750205,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "บางคนที"
  },
  {
    code: 750206,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "ดอนมะโนรา"
  },
  {
    code: 750207,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "บางพรม"
  },
  {
    code: 750208,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "บางกุ้ง"
  },
  {
    code: 750209,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "จอมปลวก"
  },
  {
    code: 750210,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "บางนกแขวก"
  },
  {
    code: 750211,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "ยายแพง"
  },
  {
    code: 750212,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "บางกระบือ"
  },
  {
    code: 750213,
    province: "สมุทรสงคราม",
    district: "อำเภอบางคนที",
    subDistrict: "บ้านปราโมทย์"
  },
  {
    code: 750301,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "อัมพวา"
  },
  {
    code: 750302,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "สวนหลวง"
  },
  {
    code: 750303,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "ท่าคา"
  },
  {
    code: 750304,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "วัดประดู่"
  },
  {
    code: 750305,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "เหมืองใหม่"
  },
  {
    code: 750306,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "บางช้าง"
  },
  {
    code: 750307,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "แควอ้อม"
  },
  {
    code: 750308,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "ปลายโพงพาง"
  },
  {
    code: 750309,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "บางแค"
  },
  {
    code: 750310,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "แพรกหนามแดง"
  },
  {
    code: 750311,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "ยี่สาร"
  },
  {
    code: 750312,
    province: "สมุทรสงคราม",
    district: "อำเภออัมพวา",
    subDistrict: "บางนางลี่"
  },
  {
    code: 760101,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "ท่าราบ"
  },
  {
    code: 760102,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "คลองกระแชง"
  },
  {
    code: 760103,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "บางจาน"
  },
  {
    code: 760104,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "นาพันสาม"
  },
  {
    code: 760105,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "ธงชัย"
  },
  {
    code: 760106,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "บ้านกุ่ม"
  },
  {
    code: 760107,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "หนองโสน"
  },
  {
    code: 760108,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "ไร่ส้ม"
  },
  {
    code: 760109,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "เวียงคอย"
  },
  {
    code: 760110,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "บางจาก"
  },
  {
    code: 760111,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "บ้านหม้อ"
  },
  {
    code: 760112,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "ต้นมะม่วง"
  },
  {
    code: 760113,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "ช่องสะแก"
  },
  {
    code: 760114,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "นาวุ้ง"
  },
  {
    code: 760115,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "สำมะโรง"
  },
  {
    code: 760116,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "โพพระ"
  },
  {
    code: 760117,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "หาดเจ้าสำราญ"
  },
  {
    code: 760118,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "หัวสะพาน"
  },
  {
    code: 760119,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "ต้นมะพร้าว"
  },
  {
    code: 760120,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "วังตะโก"
  },
  {
    code: 760121,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "โพไร่หวาน"
  },
  {
    code: 760122,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "ดอนยาง"
  },
  {
    code: 760123,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "หนองขนาน"
  },
  {
    code: 760124,
    province: "เพชรบุรี",
    district: "อำเภอเมืองเพชรบุรี",
    subDistrict: "หนองพลับ"
  },
  {
    code: 760201,
    province: "เพชรบุรี",
    district: "อำเภอเขาย้อย",
    subDistrict: "เขาย้อย"
  },
  {
    code: 760202,
    province: "เพชรบุรี",
    district: "อำเภอเขาย้อย",
    subDistrict: "สระพัง"
  },
  {
    code: 760203,
    province: "เพชรบุรี",
    district: "อำเภอเขาย้อย",
    subDistrict: "บางเค็ม"
  },
  {
    code: 760204,
    province: "เพชรบุรี",
    district: "อำเภอเขาย้อย",
    subDistrict: "ทับคาง"
  },
  {
    code: 760205,
    province: "เพชรบุรี",
    district: "อำเภอเขาย้อย",
    subDistrict: "หนองปลาไหล"
  },
  {
    code: 760206,
    province: "เพชรบุรี",
    district: "อำเภอเขาย้อย",
    subDistrict: "หนองปรง"
  },
  {
    code: 760207,
    province: "เพชรบุรี",
    district: "อำเภอเขาย้อย",
    subDistrict: "หนองชุมพล"
  },
  {
    code: 760208,
    province: "เพชรบุรี",
    district: "อำเภอเขาย้อย",
    subDistrict: "ห้วยโรง"
  },
  {
    code: 760209,
    province: "เพชรบุรี",
    district: "อำเภอเขาย้อย",
    subDistrict: "ห้วยท่าช้าง"
  },
  {
    code: 760210,
    province: "เพชรบุรี",
    district: "อำเภอเขาย้อย",
    subDistrict: "หนองชุมพลเหนือ"
  },
  {
    code: 760301,
    province: "เพชรบุรี",
    district: "อำเภอหนองหญ้าปล้อง",
    subDistrict: "หนองหญ้าปล้อง"
  },
  {
    code: 760302,
    province: "เพชรบุรี",
    district: "อำเภอหนองหญ้าปล้อง",
    subDistrict: "ยางน้ำกลัดเหนือ"
  },
  {
    code: 760303,
    province: "เพชรบุรี",
    district: "อำเภอหนองหญ้าปล้อง",
    subDistrict: "ยางน้ำกลัดใต้"
  },
  {
    code: 760304,
    province: "เพชรบุรี",
    district: "อำเภอหนองหญ้าปล้อง",
    subDistrict: "ท่าตะคร้อ"
  },
  {
    code: 760401,
    province: "เพชรบุรี",
    district: "อำเภอชะอำ",
    subDistrict: "ชะอำ"
  },
  {
    code: 760402,
    province: "เพชรบุรี",
    district: "อำเภอชะอำ",
    subDistrict: "บางเก่า"
  },
  {
    code: 760403,
    province: "เพชรบุรี",
    district: "อำเภอชะอำ",
    subDistrict: "นายาง"
  },
  {
    code: 760404,
    province: "เพชรบุรี",
    district: "อำเภอชะอำ",
    subDistrict: "เขาใหญ่"
  },
  {
    code: 760405,
    province: "เพชรบุรี",
    district: "อำเภอชะอำ",
    subDistrict: "หนองศาลา"
  },
  {
    code: 760406,
    province: "เพชรบุรี",
    district: "อำเภอชะอำ",
    subDistrict: "ห้วยทรายเหนือ"
  },
  {
    code: 760407,
    province: "เพชรบุรี",
    district: "อำเภอชะอำ",
    subDistrict: "ไร่ใหม่พัฒนา"
  },
  {
    code: 760408,
    province: "เพชรบุรี",
    district: "อำเภอชะอำ",
    subDistrict: "สามพระยา"
  },
  {
    code: 760409,
    province: "เพชรบุรี",
    district: "อำเภอชะอำ",
    subDistrict: "ดอนขุนห้วย"
  },
  {
    code: 760501,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "ท่ายาง"
  },
  {
    code: 760502,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "ท่าคอย"
  },
  {
    code: 760503,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "ยางหย่อง"
  },
  {
    code: 760504,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "หนองจอก"
  },
  {
    code: 760505,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "มาบปลาเค้า"
  },
  {
    code: 760506,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "ท่าไม้รวก"
  },
  {
    code: 760507,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "วังไคร้"
  },
  {
    code: 760511,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "กลัดหลวง"
  },
  {
    code: 760512,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "ปึกเตียน"
  },
  {
    code: 760513,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "เขากระปุก"
  },
  {
    code: 760514,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "ท่าแลง"
  },
  {
    code: 760515,
    province: "เพชรบุรี",
    district: "อำเภอท่ายาง",
    subDistrict: "บ้านในดง"
  },
  {
    code: 760601,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "บ้านลาด"
  },
  {
    code: 760602,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "บ้านหาด"
  },
  {
    code: 760603,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "บ้านทาน"
  },
  {
    code: 760604,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "ตำหรุ"
  },
  {
    code: 760605,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "สมอพลือ"
  },
  {
    code: 760606,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "ไร่มะขาม"
  },
  {
    code: 760607,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "ท่าเสน"
  },
  {
    code: 760608,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "หนองกระเจ็ด"
  },
  {
    code: 760609,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "หนองกะปุ"
  },
  {
    code: 760610,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "ลาดโพธิ์"
  },
  {
    code: 760611,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "สะพานไกร"
  },
  {
    code: 760612,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "ไร่โคก"
  },
  {
    code: 760613,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "โรงเข้"
  },
  {
    code: 760614,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "ไร่สะท้อน"
  },
  {
    code: 760615,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "ห้วยข้อง"
  },
  {
    code: 760616,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "ท่าช้าง"
  },
  {
    code: 760617,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "ถ้ำรงค์"
  },
  {
    code: 760618,
    province: "เพชรบุรี",
    district: "อำเภอบ้านลาด",
    subDistrict: "ห้วยลึก"
  },
  {
    code: 760701,
    province: "เพชรบุรี",
    district: "อำเภอบ้านแหลม",
    subDistrict: "บ้านแหลม"
  },
  {
    code: 760702,
    province: "เพชรบุรี",
    district: "อำเภอบ้านแหลม",
    subDistrict: "บางขุนไทร"
  },
  {
    code: 760703,
    province: "เพชรบุรี",
    district: "อำเภอบ้านแหลม",
    subDistrict: "ปากทะเล"
  },
  {
    code: 760704,
    province: "เพชรบุรี",
    district: "อำเภอบ้านแหลม",
    subDistrict: "บางแก้ว"
  },
  {
    code: 760705,
    province: "เพชรบุรี",
    district: "อำเภอบ้านแหลม",
    subDistrict: "แหลมผักเบี้ย"
  },
  {
    code: 760706,
    province: "เพชรบุรี",
    district: "อำเภอบ้านแหลม",
    subDistrict: "บางตะบูน"
  },
  {
    code: 760707,
    province: "เพชรบุรี",
    district: "อำเภอบ้านแหลม",
    subDistrict: "บางตะบูนออก"
  },
  {
    code: 760708,
    province: "เพชรบุรี",
    district: "อำเภอบ้านแหลม",
    subDistrict: "บางครก"
  },
  {
    code: 760709,
    province: "เพชรบุรี",
    district: "อำเภอบ้านแหลม",
    subDistrict: "ท่าแร้ง"
  },
  {
    code: 760710,
    province: "เพชรบุรี",
    district: "อำเภอบ้านแหลม",
    subDistrict: "ท่าแร้งออก"
  },
  {
    code: 760801,
    province: "เพชรบุรี",
    district: "อำเภอแก่งกระจาน",
    subDistrict: "แก่งกระจาน"
  },
  {
    code: 760802,
    province: "เพชรบุรี",
    district: "อำเภอแก่งกระจาน",
    subDistrict: "สองพี่น้อง"
  },
  {
    code: 760803,
    province: "เพชรบุรี",
    district: "อำเภอแก่งกระจาน",
    subDistrict: "วังจันทร์"
  },
  {
    code: 760804,
    province: "เพชรบุรี",
    district: "อำเภอแก่งกระจาน",
    subDistrict: "ป่าเด็ง"
  },
  {
    code: 760805,
    province: "เพชรบุรี",
    district: "อำเภอแก่งกระจาน",
    subDistrict: "พุสวรรค์"
  },
  {
    code: 760806,
    province: "เพชรบุรี",
    district: "อำเภอแก่งกระจาน",
    subDistrict: "ห้วยแม่เพรียง"
  },
  {
    code: 770101,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอเมืองประจวบคีรีขันธ์",
    subDistrict: "ประจวบคีรีขันธ์"
  },
  {
    code: 770102,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอเมืองประจวบคีรีขันธ์",
    subDistrict: "เกาะหลัก"
  },
  {
    code: 770103,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอเมืองประจวบคีรีขันธ์",
    subDistrict: "คลองวาฬ"
  },
  {
    code: 770104,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอเมืองประจวบคีรีขันธ์",
    subDistrict: "ห้วยทราย"
  },
  {
    code: 770105,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอเมืองประจวบคีรีขันธ์",
    subDistrict: "อ่าวน้อย"
  },
  {
    code: 770106,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอเมืองประจวบคีรีขันธ์",
    subDistrict: "บ่อนอก"
  },
  {
    code: 770201,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอกุยบุรี",
    subDistrict: "กุยบุรี"
  },
  {
    code: 770202,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอกุยบุรี",
    subDistrict: "กุยเหนือ"
  },
  {
    code: 770203,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอกุยบุรี",
    subDistrict: "เขาแดง"
  },
  {
    code: 770204,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอกุยบุรี",
    subDistrict: "ดอนยายหนู"
  },
  {
    code: 770206,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอกุยบุรี",
    subDistrict: "สามกระทาย"
  },
  {
    code: 770207,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอกุยบุรี",
    subDistrict: "หาดขาม"
  },
  {
    code: 770301,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอทับสะแก",
    subDistrict: "ทับสะแก"
  },
  {
    code: 770302,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอทับสะแก",
    subDistrict: "อ่างทอง"
  },
  {
    code: 770303,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอทับสะแก",
    subDistrict: "นาหูกวาง"
  },
  {
    code: 770304,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอทับสะแก",
    subDistrict: "เขาล้าน"
  },
  {
    code: 770305,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอทับสะแก",
    subDistrict: "ห้วยยาง"
  },
  {
    code: 770306,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอทับสะแก",
    subDistrict: "แสงอรุณ"
  },
  {
    code: 770401,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพาน",
    subDistrict: "กำเนิดนพคุณ"
  },
  {
    code: 770402,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพาน",
    subDistrict: "พงศ์ประศาสน์"
  },
  {
    code: 770403,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพาน",
    subDistrict: "ร่อนทอง"
  },
  {
    code: 770404,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพาน",
    subDistrict: "ธงชัย"
  },
  {
    code: 770405,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพาน",
    subDistrict: "ชัยเกษม"
  },
  {
    code: 770406,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพาน",
    subDistrict: "ทองมงคล"
  },
  {
    code: 770407,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพาน",
    subDistrict: "แม่รำพึง"
  },
  {
    code: 770501,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพานน้อย",
    subDistrict: "ปากแพรก"
  },
  {
    code: 770502,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพานน้อย",
    subDistrict: "บางสะพาน"
  },
  {
    code: 770503,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพานน้อย",
    subDistrict: "ทรายทอง"
  },
  {
    code: 770504,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพานน้อย",
    subDistrict: "ช้างแรก"
  },
  {
    code: 770505,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอบางสะพานน้อย",
    subDistrict: "ไชยราช"
  },
  {
    code: 770601,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอปราณบุรี",
    subDistrict: "ปราณบุรี"
  },
  {
    code: 770602,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอปราณบุรี",
    subDistrict: "เขาน้อย"
  },
  {
    code: 770604,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอปราณบุรี",
    subDistrict: "ปากน้ำปราณ"
  },
  {
    code: 770607,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอปราณบุรี",
    subDistrict: "หนองตาแต้ม"
  },
  {
    code: 770608,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอปราณบุรี",
    subDistrict: "วังก์พง"
  },
  {
    code: 770609,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอปราณบุรี",
    subDistrict: "เขาจ้าว"
  },
  {
    code: 770701,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอหัวหิน",
    subDistrict: "หัวหิน"
  },
  {
    code: 770702,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอหัวหิน",
    subDistrict: "หนองแก"
  },
  {
    code: 770703,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอหัวหิน",
    subDistrict: "หินเหล็กไฟ"
  },
  {
    code: 770704,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอหัวหิน",
    subDistrict: "หนองพลับ"
  },
  {
    code: 770705,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอหัวหิน",
    subDistrict: "ทับใต้"
  },
  {
    code: 770706,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอหัวหิน",
    subDistrict: "ห้วยสัตว์ใหญ่"
  },
  {
    code: 770707,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอหัวหิน",
    subDistrict: "บึงนคร"
  },
  {
    code: 770801,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอสามร้อยยอด",
    subDistrict: "สามร้อยยอด"
  },
  {
    code: 770802,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอสามร้อยยอด",
    subDistrict: "ศิลาลอย"
  },
  {
    code: 770803,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอสามร้อยยอด",
    subDistrict: "ไร่เก่า"
  },
  {
    code: 770804,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอสามร้อยยอด",
    subDistrict: "ศาลาลัย"
  },
  {
    code: 770805,
    province: "ประจวบคีรีขันธ์",
    district: "อำเภอสามร้อยยอด",
    subDistrict: "ไร่ใหม่"
  },
  {
    code: 800101,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "ในเมือง"
  },
  {
    code: 800102,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "ท่าวัง"
  },
  {
    code: 800103,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "คลัง"
  },
  {
    code: 800106,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "ท่าไร่"
  },
  {
    code: 800107,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "ปากนคร"
  },
  {
    code: 800108,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "นาทราย"
  },
  {
    code: 800112,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "กำแพงเซา"
  },
  {
    code: 800113,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "ไชยมนตรี"
  },
  {
    code: 800114,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "มะม่วงสองต้น"
  },
  {
    code: 800115,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "นาเคียน"
  },
  {
    code: 800116,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "ท่างิ้ว"
  },
  {
    code: 800118,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "โพธิ์เสด็จ"
  },
  {
    code: 800119,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "บางจาก"
  },
  {
    code: 800120,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "ปากพูน"
  },
  {
    code: 800121,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "ท่าซัก"
  },
  {
    code: 800122,
    province: "นครศรีธรรมราช",
    district: "อำเภอเมืองนครศรีธรรมราช",
    subDistrict: "ท่าเรือ"
  },
  {
    code: 800201,
    province: "นครศรีธรรมราช",
    district: "อำเภอพรหมคีรี",
    subDistrict: "พรหมโลก"
  },
  {
    code: 800202,
    province: "นครศรีธรรมราช",
    district: "อำเภอพรหมคีรี",
    subDistrict: "บ้านเกาะ"
  },
  {
    code: 800203,
    province: "นครศรีธรรมราช",
    district: "อำเภอพรหมคีรี",
    subDistrict: "อินคีรี"
  },
  {
    code: 800204,
    province: "นครศรีธรรมราช",
    district: "อำเภอพรหมคีรี",
    subDistrict: "ทอนหงส์"
  },
  {
    code: 800205,
    province: "นครศรีธรรมราช",
    district: "อำเภอพรหมคีรี",
    subDistrict: "นาเรียง"
  },
  {
    code: 800301,
    province: "นครศรีธรรมราช",
    district: "อำเภอลานสกา",
    subDistrict: "เขาแก้ว"
  },
  {
    code: 800302,
    province: "นครศรีธรรมราช",
    district: "อำเภอลานสกา",
    subDistrict: "ลานสกา"
  },
  {
    code: 800303,
    province: "นครศรีธรรมราช",
    district: "อำเภอลานสกา",
    subDistrict: "ท่าดี"
  },
  {
    code: 800304,
    province: "นครศรีธรรมราช",
    district: "อำเภอลานสกา",
    subDistrict: "กำโลน"
  },
  {
    code: 800305,
    province: "นครศรีธรรมราช",
    district: "อำเภอลานสกา",
    subDistrict: "ขุนทะเล"
  },
  {
    code: 800401,
    province: "นครศรีธรรมราช",
    district: "อำเภอฉวาง",
    subDistrict: "ฉวาง"
  },
  {
    code: 800403,
    province: "นครศรีธรรมราช",
    district: "อำเภอฉวาง",
    subDistrict: "ละอาย"
  },
  {
    code: 800404,
    province: "นครศรีธรรมราช",
    district: "อำเภอฉวาง",
    subDistrict: "นาแว"
  },
  {
    code: 800405,
    province: "นครศรีธรรมราช",
    district: "อำเภอฉวาง",
    subDistrict: "ไม้เรียง"
  },
  {
    code: 800406,
    province: "นครศรีธรรมราช",
    district: "อำเภอฉวาง",
    subDistrict: "กะเปียด"
  },
  {
    code: 800407,
    province: "นครศรีธรรมราช",
    district: "อำเภอฉวาง",
    subDistrict: "นากะชะ"
  },
  {
    code: 800409,
    province: "นครศรีธรรมราช",
    district: "อำเภอฉวาง",
    subDistrict: "ห้วยปริก"
  },
  {
    code: 800410,
    province: "นครศรีธรรมราช",
    district: "อำเภอฉวาง",
    subDistrict: "ไสหร้า"
  },
  {
    code: 800415,
    province: "นครศรีธรรมราช",
    district: "อำเภอฉวาง",
    subDistrict: "นาเขลียง"
  },
  {
    code: 800416,
    province: "นครศรีธรรมราช",
    district: "อำเภอฉวาง",
    subDistrict: "จันดี"
  },
  {
    code: 800501,
    province: "นครศรีธรรมราช",
    district: "อำเภอพิปูน",
    subDistrict: "พิปูน"
  },
  {
    code: 800502,
    province: "นครศรีธรรมราช",
    district: "อำเภอพิปูน",
    subDistrict: "กะทูน"
  },
  {
    code: 800503,
    province: "นครศรีธรรมราช",
    district: "อำเภอพิปูน",
    subDistrict: "เขาพระ"
  },
  {
    code: 800504,
    province: "นครศรีธรรมราช",
    district: "อำเภอพิปูน",
    subDistrict: "ยางค้อม"
  },
  {
    code: 800505,
    province: "นครศรีธรรมราช",
    district: "อำเภอพิปูน",
    subDistrict: "ควนกลาง"
  },
  {
    code: 800601,
    province: "นครศรีธรรมราช",
    district: "อำเภอเชียรใหญ่",
    subDistrict: "เชียรใหญ่"
  },
  {
    code: 800603,
    province: "นครศรีธรรมราช",
    district: "อำเภอเชียรใหญ่",
    subDistrict: "ท่าขนาน"
  },
  {
    code: 800604,
    province: "นครศรีธรรมราช",
    district: "อำเภอเชียรใหญ่",
    subDistrict: "บ้านกลาง"
  },
  {
    code: 800605,
    province: "นครศรีธรรมราช",
    district: "อำเภอเชียรใหญ่",
    subDistrict: "บ้านเนิน"
  },
  {
    code: 800606,
    province: "นครศรีธรรมราช",
    district: "อำเภอเชียรใหญ่",
    subDistrict: "ไสหมาก"
  },
  {
    code: 800607,
    province: "นครศรีธรรมราช",
    district: "อำเภอเชียรใหญ่",
    subDistrict: "ท้องลำเจียก"
  },
  {
    code: 800610,
    province: "นครศรีธรรมราช",
    district: "อำเภอเชียรใหญ่",
    subDistrict: "เสือหึง"
  },
  {
    code: 800611,
    province: "นครศรีธรรมราช",
    district: "อำเภอเชียรใหญ่",
    subDistrict: "การะเกด"
  },
  {
    code: 800612,
    province: "นครศรีธรรมราช",
    district: "อำเภอเชียรใหญ่",
    subDistrict: "เขาพระบาท"
  },
  {
    code: 800613,
    province: "นครศรีธรรมราช",
    district: "อำเภอเชียรใหญ่",
    subDistrict: "แม่เจ้าอยู่หัว"
  },
  {
    code: 800701,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "ชะอวด"
  },
  {
    code: 800702,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "ท่าเสม็ด"
  },
  {
    code: 800703,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "ท่าประจะ"
  },
  {
    code: 800704,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "เคร็ง"
  },
  {
    code: 800705,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "วังอ่าง"
  },
  {
    code: 800706,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "บ้านตูล"
  },
  {
    code: 800707,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "ขอนหาด"
  },
  {
    code: 800708,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "เกาะขันธ์"
  },
  {
    code: 800709,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "ควนหนองหงษ์"
  },
  {
    code: 800710,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "เขาพระทอง"
  },
  {
    code: 800711,
    province: "นครศรีธรรมราช",
    district: "อำเภอชะอวด",
    subDistrict: "นางหลง"
  },
  {
    code: 800801,
    province: "นครศรีธรรมราช",
    district: "อำเภอท่าศาลา",
    subDistrict: "ท่าศาลา"
  },
  {
    code: 800802,
    province: "นครศรีธรรมราช",
    district: "อำเภอท่าศาลา",
    subDistrict: "กลาย"
  },
  {
    code: 800803,
    province: "นครศรีธรรมราช",
    district: "อำเภอท่าศาลา",
    subDistrict: "ท่าขึ้น"
  },
  {
    code: 800804,
    province: "นครศรีธรรมราช",
    district: "อำเภอท่าศาลา",
    subDistrict: "หัวตะพาน"
  },
  {
    code: 800806,
    province: "นครศรีธรรมราช",
    district: "อำเภอท่าศาลา",
    subDistrict: "สระแก้ว"
  },
  {
    code: 800807,
    province: "นครศรีธรรมราช",
    district: "อำเภอท่าศาลา",
    subDistrict: "โมคลาน"
  },
  {
    code: 800809,
    province: "นครศรีธรรมราช",
    district: "อำเภอท่าศาลา",
    subDistrict: "ไทยบุรี"
  },
  {
    code: 800810,
    province: "นครศรีธรรมราช",
    district: "อำเภอท่าศาลา",
    subDistrict: "ดอนตะโก"
  },
  {
    code: 800811,
    province: "นครศรีธรรมราช",
    district: "อำเภอท่าศาลา",
    subDistrict: "ตลิ่งชัน"
  },
  {
    code: 800813,
    province: "นครศรีธรรมราช",
    district: "อำเภอท่าศาลา",
    subDistrict: "โพธิ์ทอง"
  },
  {
    code: 800901,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "ปากแพรก"
  },
  {
    code: 800902,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "ชะมาย"
  },
  {
    code: 800903,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "หนองหงส์"
  },
  {
    code: 800904,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "ควนกรด"
  },
  {
    code: 800905,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "นาไม้ไผ่"
  },
  {
    code: 800906,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "นาหลวงเสน"
  },
  {
    code: 800907,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "เขาโร"
  },
  {
    code: 800908,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "กะปาง"
  },
  {
    code: 800909,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "ที่วัง"
  },
  {
    code: 800910,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "น้ำตก"
  },
  {
    code: 800911,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "ถ้ำใหญ่"
  },
  {
    code: 800912,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "นาโพธิ์"
  },
  {
    code: 800913,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งสง",
    subDistrict: "เขาขาว"
  },
  {
    code: 801001,
    province: "นครศรีธรรมราช",
    district: "อำเภอนาบอน",
    subDistrict: "นาบอน"
  },
  {
    code: 801002,
    province: "นครศรีธรรมราช",
    district: "อำเภอนาบอน",
    subDistrict: "ทุ่งสง"
  },
  {
    code: 801003,
    province: "นครศรีธรรมราช",
    district: "อำเภอนาบอน",
    subDistrict: "แก้วแสน"
  },
  {
    code: 801101,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งใหญ่",
    subDistrict: "ท่ายาง"
  },
  {
    code: 801102,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งใหญ่",
    subDistrict: "ทุ่งสัง"
  },
  {
    code: 801103,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งใหญ่",
    subDistrict: "ทุ่งใหญ่"
  },
  {
    code: 801104,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งใหญ่",
    subDistrict: "กุแหระ"
  },
  {
    code: 801105,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งใหญ่",
    subDistrict: "ปริก"
  },
  {
    code: 801106,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งใหญ่",
    subDistrict: "บางรูป"
  },
  {
    code: 801107,
    province: "นครศรีธรรมราช",
    district: "อำเภอทุ่งใหญ่",
    subDistrict: "กรุงหยัน"
  },
  {
    code: 801201,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "ปากพนัง"
  },
  {
    code: 801202,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "คลองน้อย"
  },
  {
    code: 801203,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "ป่าระกำ"
  },
  {
    code: 801204,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "ชะเมา"
  },
  {
    code: 801205,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "คลองกระบือ"
  },
  {
    code: 801206,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "เกาะทวด"
  },
  {
    code: 801207,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 801208,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "หูล่อง"
  },
  {
    code: 801209,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "แหลมตะลุมพุก"
  },
  {
    code: 801210,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "ปากพนังฝั่งตะวันตก"
  },
  {
    code: 801211,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "บางศาลา"
  },
  {
    code: 801212,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "บางพระ"
  },
  {
    code: 801213,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "บางตะพง"
  },
  {
    code: 801214,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "ปากพนังฝั่งตะวันออก"
  },
  {
    code: 801215,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "บ้านเพิง"
  },
  {
    code: 801216,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "ท่าพยา"
  },
  {
    code: 801217,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "ปากแพรก"
  },
  {
    code: 801218,
    province: "นครศรีธรรมราช",
    district: "อำเภอปากพนัง",
    subDistrict: "ขนาบนาก"
  },
  {
    code: 801301,
    province: "นครศรีธรรมราช",
    district: "อำเภอร่อนพิบูลย์",
    subDistrict: "ร่อนพิบูลย์"
  },
  {
    code: 801302,
    province: "นครศรีธรรมราช",
    district: "อำเภอร่อนพิบูลย์",
    subDistrict: "หินตก"
  },
  {
    code: 801303,
    province: "นครศรีธรรมราช",
    district: "อำเภอร่อนพิบูลย์",
    subDistrict: "เสาธง"
  },
  {
    code: 801304,
    province: "นครศรีธรรมราช",
    district: "อำเภอร่อนพิบูลย์",
    subDistrict: "ควนเกย"
  },
  {
    code: 801305,
    province: "นครศรีธรรมราช",
    district: "อำเภอร่อนพิบูลย์",
    subDistrict: "ควนพัง"
  },
  {
    code: 801306,
    province: "นครศรีธรรมราช",
    district: "อำเภอร่อนพิบูลย์",
    subDistrict: "ควนชุม"
  },
  {
    code: 801401,
    province: "นครศรีธรรมราช",
    district: "อำเภอสิชล",
    subDistrict: "สิชล"
  },
  {
    code: 801402,
    province: "นครศรีธรรมราช",
    district: "อำเภอสิชล",
    subDistrict: "ทุ่งปรัง"
  },
  {
    code: 801403,
    province: "นครศรีธรรมราช",
    district: "อำเภอสิชล",
    subDistrict: "ฉลอง"
  },
  {
    code: 801404,
    province: "นครศรีธรรมราช",
    district: "อำเภอสิชล",
    subDistrict: "เสาเภา"
  },
  {
    code: 801405,
    province: "นครศรีธรรมราช",
    district: "อำเภอสิชล",
    subDistrict: "เปลี่ยน"
  },
  {
    code: 801406,
    province: "นครศรีธรรมราช",
    district: "อำเภอสิชล",
    subDistrict: "สี่ขีด"
  },
  {
    code: 801407,
    province: "นครศรีธรรมราช",
    district: "อำเภอสิชล",
    subDistrict: "เทพราช"
  },
  {
    code: 801408,
    province: "นครศรีธรรมราช",
    district: "อำเภอสิชล",
    subDistrict: "เขาน้อย"
  },
  {
    code: 801409,
    province: "นครศรีธรรมราช",
    district: "อำเภอสิชล",
    subDistrict: "ทุ่งใส"
  },
  {
    code: 801501,
    province: "นครศรีธรรมราช",
    district: "อำเภอขนอม",
    subDistrict: "ขนอม"
  },
  {
    code: 801502,
    province: "นครศรีธรรมราช",
    district: "อำเภอขนอม",
    subDistrict: "ควนทอง"
  },
  {
    code: 801503,
    province: "นครศรีธรรมราช",
    district: "อำเภอขนอม",
    subDistrict: "ท้องเนียน"
  },
  {
    code: 801601,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "หัวไทร"
  },
  {
    code: 801602,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "หน้าสตน"
  },
  {
    code: 801603,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "ทรายขาว"
  },
  {
    code: 801604,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "แหลม"
  },
  {
    code: 801605,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "เขาพังไกร"
  },
  {
    code: 801606,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "บ้านราม"
  },
  {
    code: 801607,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "บางนบ"
  },
  {
    code: 801608,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "ท่าซอม"
  },
  {
    code: 801609,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "ควนชะลิก"
  },
  {
    code: 801610,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "รามแก้ว"
  },
  {
    code: 801611,
    province: "นครศรีธรรมราช",
    district: "อำเภอหัวไทร",
    subDistrict: "เกาะเพชร"
  },
  {
    code: 801701,
    province: "นครศรีธรรมราช",
    district: "อำเภอบางขัน",
    subDistrict: "บางขัน"
  },
  {
    code: 801702,
    province: "นครศรีธรรมราช",
    district: "อำเภอบางขัน",
    subDistrict: "บ้านลำนาว"
  },
  {
    code: 801703,
    province: "นครศรีธรรมราช",
    district: "อำเภอบางขัน",
    subDistrict: "วังหิน"
  },
  {
    code: 801704,
    province: "นครศรีธรรมราช",
    district: "อำเภอบางขัน",
    subDistrict: "บ้านนิคม"
  },
  {
    code: 801801,
    province: "นครศรีธรรมราช",
    district: "อำเภอถ้ำพรรณรา",
    subDistrict: "ถ้ำพรรณรา"
  },
  {
    code: 801802,
    province: "นครศรีธรรมราช",
    district: "อำเภอถ้ำพรรณรา",
    subDistrict: "คลองเส"
  },
  {
    code: 801803,
    province: "นครศรีธรรมราช",
    district: "อำเภอถ้ำพรรณรา",
    subDistrict: "ดุสิต"
  },
  {
    code: 801901,
    province: "นครศรีธรรมราช",
    district: "อำเภอจุฬาภรณ์",
    subDistrict: "บ้านควนมุด"
  },
  {
    code: 801902,
    province: "นครศรีธรรมราช",
    district: "อำเภอจุฬาภรณ์",
    subDistrict: "บ้านชะอวด"
  },
  {
    code: 801903,
    province: "นครศรีธรรมราช",
    district: "อำเภอจุฬาภรณ์",
    subDistrict: "ควนหนองคว้า"
  },
  {
    code: 801904,
    province: "นครศรีธรรมราช",
    district: "อำเภอจุฬาภรณ์",
    subDistrict: "ทุ่งโพธิ์"
  },
  {
    code: 801905,
    province: "นครศรีธรรมราช",
    district: "อำเภอจุฬาภรณ์",
    subDistrict: "นาหมอบุญ"
  },
  {
    code: 801906,
    province: "นครศรีธรรมราช",
    district: "อำเภอจุฬาภรณ์",
    subDistrict: "สามตำบล"
  },
  {
    code: 802001,
    province: "นครศรีธรรมราช",
    district: "อำเภอพระพรหม",
    subDistrict: "นาพรุ"
  },
  {
    code: 802002,
    province: "นครศรีธรรมราช",
    district: "อำเภอพระพรหม",
    subDistrict: "นาสาร"
  },
  {
    code: 802003,
    province: "นครศรีธรรมราช",
    district: "อำเภอพระพรหม",
    subDistrict: "ท้ายสำเภา"
  },
  {
    code: 802004,
    province: "นครศรีธรรมราช",
    district: "อำเภอพระพรหม",
    subDistrict: "ช้างซ้าย"
  },
  {
    code: 802101,
    province: "นครศรีธรรมราช",
    district: "อำเภอนบพิตำ",
    subDistrict: "นบพิตำ"
  },
  {
    code: 802102,
    province: "นครศรีธรรมราช",
    district: "อำเภอนบพิตำ",
    subDistrict: "กรุงชิง"
  },
  {
    code: 802103,
    province: "นครศรีธรรมราช",
    district: "อำเภอนบพิตำ",
    subDistrict: "กะหรอ"
  },
  {
    code: 802104,
    province: "นครศรีธรรมราช",
    district: "อำเภอนบพิตำ",
    subDistrict: "นาเหรง"
  },
  {
    code: 802201,
    province: "นครศรีธรรมราช",
    district: "อำเภอช้างกลาง",
    subDistrict: "ช้างกลาง"
  },
  {
    code: 802202,
    province: "นครศรีธรรมราช",
    district: "อำเภอช้างกลาง",
    subDistrict: "หลักช้าง"
  },
  {
    code: 802203,
    province: "นครศรีธรรมราช",
    district: "อำเภอช้างกลาง",
    subDistrict: "สวนขัน"
  },
  {
    code: 802301,
    province: "นครศรีธรรมราช",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "เชียรเขา"
  },
  {
    code: 802302,
    province: "นครศรีธรรมราช",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ดอนตรอ"
  },
  {
    code: 802303,
    province: "นครศรีธรรมราช",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "สวนหลวง"
  },
  {
    code: 802304,
    province: "นครศรีธรรมราช",
    district: "อำเภอเฉลิมพระเกียรติ",
    subDistrict: "ทางพูน"
  },
  {
    code: 810101,
    province: "กระบี่",
    district: "อำเภอเมืองกระบี่",
    subDistrict: "ปากน้ำ"
  },
  {
    code: 810102,
    province: "กระบี่",
    district: "อำเภอเมืองกระบี่",
    subDistrict: "กระบี่ใหญ่"
  },
  {
    code: 810103,
    province: "กระบี่",
    district: "อำเภอเมืองกระบี่",
    subDistrict: "กระบี่น้อย"
  },
  {
    code: 810105,
    province: "กระบี่",
    district: "อำเภอเมืองกระบี่",
    subDistrict: "เขาคราม"
  },
  {
    code: 810106,
    province: "กระบี่",
    district: "อำเภอเมืองกระบี่",
    subDistrict: "เขาทอง"
  },
  {
    code: 810111,
    province: "กระบี่",
    district: "อำเภอเมืองกระบี่",
    subDistrict: "ทับปริก"
  },
  {
    code: 810115,
    province: "กระบี่",
    district: "อำเภอเมืองกระบี่",
    subDistrict: "ไสไทย"
  },
  {
    code: 810116,
    province: "กระบี่",
    district: "อำเภอเมืองกระบี่",
    subDistrict: "อ่าวนาง"
  },
  {
    code: 810117,
    province: "กระบี่",
    district: "อำเภอเมืองกระบี่",
    subDistrict: "หนองทะเล"
  },
  {
    code: 810118,
    province: "กระบี่",
    district: "อำเภอเมืองกระบี่",
    subDistrict: "คลองประสงค์"
  },
  {
    code: 810201,
    province: "กระบี่",
    district: "อำเภอเขาพนม",
    subDistrict: "เขาพนม"
  },
  {
    code: 810202,
    province: "กระบี่",
    district: "อำเภอเขาพนม",
    subDistrict: "เขาดิน"
  },
  {
    code: 810203,
    province: "กระบี่",
    district: "อำเภอเขาพนม",
    subDistrict: "สินปุน"
  },
  {
    code: 810204,
    province: "กระบี่",
    district: "อำเภอเขาพนม",
    subDistrict: "พรุเตียว"
  },
  {
    code: 810205,
    province: "กระบี่",
    district: "อำเภอเขาพนม",
    subDistrict: "หน้าเขา"
  },
  {
    code: 810206,
    province: "กระบี่",
    district: "อำเภอเขาพนม",
    subDistrict: "โคกหาร"
  },
  {
    code: 810301,
    province: "กระบี่",
    district: "อำเภอเกาะลันตา",
    subDistrict: "เกาะลันตาใหญ่"
  },
  {
    code: 810302,
    province: "กระบี่",
    district: "อำเภอเกาะลันตา",
    subDistrict: "เกาะลันตาน้อย"
  },
  {
    code: 810303,
    province: "กระบี่",
    district: "อำเภอเกาะลันตา",
    subDistrict: "เกาะกลาง"
  },
  {
    code: 810304,
    province: "กระบี่",
    district: "อำเภอเกาะลันตา",
    subDistrict: "คลองยาง"
  },
  {
    code: 810305,
    province: "กระบี่",
    district: "อำเภอเกาะลันตา",
    subDistrict: "ศาลาด่าน"
  },
  {
    code: 810401,
    province: "กระบี่",
    district: "อำเภอคลองท่อม",
    subDistrict: "คลองท่อมใต้"
  },
  {
    code: 810402,
    province: "กระบี่",
    district: "อำเภอคลองท่อม",
    subDistrict: "คลองท่อมเหนือ"
  },
  {
    code: 810403,
    province: "กระบี่",
    district: "อำเภอคลองท่อม",
    subDistrict: "คลองพน"
  },
  {
    code: 810404,
    province: "กระบี่",
    district: "อำเภอคลองท่อม",
    subDistrict: "ทรายขาว"
  },
  {
    code: 810405,
    province: "กระบี่",
    district: "อำเภอคลองท่อม",
    subDistrict: "ห้วยน้ำขาว"
  },
  {
    code: 810406,
    province: "กระบี่",
    district: "อำเภอคลองท่อม",
    subDistrict: "พรุดินนา"
  },
  {
    code: 810407,
    province: "กระบี่",
    district: "อำเภอคลองท่อม",
    subDistrict: "เพหลา"
  },
  {
    code: 810501,
    province: "กระบี่",
    district: "อำเภออ่าวลึก",
    subDistrict: "อ่าวลึกใต้"
  },
  {
    code: 810502,
    province: "กระบี่",
    district: "อำเภออ่าวลึก",
    subDistrict: "แหลมสัก"
  },
  {
    code: 810503,
    province: "กระบี่",
    district: "อำเภออ่าวลึก",
    subDistrict: "นาเหนือ"
  },
  {
    code: 810504,
    province: "กระบี่",
    district: "อำเภออ่าวลึก",
    subDistrict: "คลองหิน"
  },
  {
    code: 810505,
    province: "กระบี่",
    district: "อำเภออ่าวลึก",
    subDistrict: "อ่าวลึกน้อย"
  },
  {
    code: 810506,
    province: "กระบี่",
    district: "อำเภออ่าวลึก",
    subDistrict: "อ่าวลึกเหนือ"
  },
  {
    code: 810507,
    province: "กระบี่",
    district: "อำเภออ่าวลึก",
    subDistrict: "เขาใหญ่"
  },
  {
    code: 810508,
    province: "กระบี่",
    district: "อำเภออ่าวลึก",
    subDistrict: "คลองยา"
  },
  {
    code: 810509,
    province: "กระบี่",
    district: "อำเภออ่าวลึก",
    subDistrict: "บ้านกลาง"
  },
  {
    code: 810601,
    province: "กระบี่",
    district: "อำเภอปลายพระยา",
    subDistrict: "ปลายพระยา"
  },
  {
    code: 810602,
    province: "กระบี่",
    district: "อำเภอปลายพระยา",
    subDistrict: "เขาเขน"
  },
  {
    code: 810603,
    province: "กระบี่",
    district: "อำเภอปลายพระยา",
    subDistrict: "เขาต่อ"
  },
  {
    code: 810604,
    province: "กระบี่",
    district: "อำเภอปลายพระยา",
    subDistrict: "คีรีวง"
  },
  {
    code: 810701,
    province: "กระบี่",
    district: "อำเภอลำทับ",
    subDistrict: "ลำทับ"
  },
  {
    code: 810702,
    province: "กระบี่",
    district: "อำเภอลำทับ",
    subDistrict: "ดินอุดม"
  },
  {
    code: 810703,
    province: "กระบี่",
    district: "อำเภอลำทับ",
    subDistrict: "ทุ่งไทรทอง"
  },
  {
    code: 810704,
    province: "กระบี่",
    district: "อำเภอลำทับ",
    subDistrict: "ดินแดง"
  },
  {
    code: 810801,
    province: "กระบี่",
    district: "อำเภอเหนือคลอง",
    subDistrict: "เหนือคลอง"
  },
  {
    code: 810802,
    province: "กระบี่",
    district: "อำเภอเหนือคลอง",
    subDistrict: "เกาะศรีบอยา"
  },
  {
    code: 810803,
    province: "กระบี่",
    district: "อำเภอเหนือคลอง",
    subDistrict: "คลองขนาน"
  },
  {
    code: 810804,
    province: "กระบี่",
    district: "อำเภอเหนือคลอง",
    subDistrict: "คลองเขม้า"
  },
  {
    code: 810805,
    province: "กระบี่",
    district: "อำเภอเหนือคลอง",
    subDistrict: "โคกยาง"
  },
  {
    code: 810806,
    province: "กระบี่",
    district: "อำเภอเหนือคลอง",
    subDistrict: "ตลิ่งชัน"
  },
  {
    code: 810807,
    province: "กระบี่",
    district: "อำเภอเหนือคลอง",
    subDistrict: "ปกาสัย"
  },
  {
    code: 810808,
    province: "กระบี่",
    district: "อำเภอเหนือคลอง",
    subDistrict: "ห้วยยูง"
  },
  {
    code: 820101,
    province: "พังงา",
    district: "อำเภอเมืองพังงา",
    subDistrict: "ท้ายช้าง"
  },
  {
    code: 820102,
    province: "พังงา",
    district: "อำเภอเมืองพังงา",
    subDistrict: "นบปริง"
  },
  {
    code: 820103,
    province: "พังงา",
    district: "อำเภอเมืองพังงา",
    subDistrict: "ถ้ำน้ำผุด"
  },
  {
    code: 820104,
    province: "พังงา",
    district: "อำเภอเมืองพังงา",
    subDistrict: "บางเตย"
  },
  {
    code: 820105,
    province: "พังงา",
    district: "อำเภอเมืองพังงา",
    subDistrict: "ตากแดด"
  },
  {
    code: 820106,
    province: "พังงา",
    district: "อำเภอเมืองพังงา",
    subDistrict: "สองแพรก"
  },
  {
    code: 820107,
    province: "พังงา",
    district: "อำเภอเมืองพังงา",
    subDistrict: "ทุ่งคาโงก"
  },
  {
    code: 820108,
    province: "พังงา",
    district: "อำเภอเมืองพังงา",
    subDistrict: "เกาะปันหยี"
  },
  {
    code: 820109,
    province: "พังงา",
    district: "อำเภอเมืองพังงา",
    subDistrict: "ป่ากอ"
  },
  {
    code: 820201,
    province: "พังงา",
    district: "อำเภอเกาะยาว",
    subDistrict: "เกาะยาวน้อย"
  },
  {
    code: 820202,
    province: "พังงา",
    district: "อำเภอเกาะยาว",
    subDistrict: "เกาะยาวใหญ่"
  },
  {
    code: 820203,
    province: "พังงา",
    district: "อำเภอเกาะยาว",
    subDistrict: "พรุใน"
  },
  {
    code: 820301,
    province: "พังงา",
    district: "อำเภอกะปง",
    subDistrict: "กะปง"
  },
  {
    code: 820302,
    province: "พังงา",
    district: "อำเภอกะปง",
    subDistrict: "ท่านา"
  },
  {
    code: 820303,
    province: "พังงา",
    district: "อำเภอกะปง",
    subDistrict: "เหมาะ"
  },
  {
    code: 820304,
    province: "พังงา",
    district: "อำเภอกะปง",
    subDistrict: "เหล"
  },
  {
    code: 820305,
    province: "พังงา",
    district: "อำเภอกะปง",
    subDistrict: "รมณีย์"
  },
  {
    code: 820401,
    province: "พังงา",
    district: "อำเภอตะกั่วทุ่ง",
    subDistrict: "ถ้ำ"
  },
  {
    code: 820402,
    province: "พังงา",
    district: "อำเภอตะกั่วทุ่ง",
    subDistrict: "กระโสม"
  },
  {
    code: 820403,
    province: "พังงา",
    district: "อำเภอตะกั่วทุ่ง",
    subDistrict: "กะไหล"
  },
  {
    code: 820404,
    province: "พังงา",
    district: "อำเภอตะกั่วทุ่ง",
    subDistrict: "ท่าอยู่"
  },
  {
    code: 820405,
    province: "พังงา",
    district: "อำเภอตะกั่วทุ่ง",
    subDistrict: "หล่อยูง"
  },
  {
    code: 820406,
    province: "พังงา",
    district: "อำเภอตะกั่วทุ่ง",
    subDistrict: "โคกกลอย"
  },
  {
    code: 820407,
    province: "พังงา",
    district: "อำเภอตะกั่วทุ่ง",
    subDistrict: "คลองเคียน"
  },
  {
    code: 820501,
    province: "พังงา",
    district: "อำเภอตะกั่วป่า",
    subDistrict: "ตะกั่วป่า"
  },
  {
    code: 820502,
    province: "พังงา",
    district: "อำเภอตะกั่วป่า",
    subDistrict: "บางนายสี"
  },
  {
    code: 820503,
    province: "พังงา",
    district: "อำเภอตะกั่วป่า",
    subDistrict: "บางไทร"
  },
  {
    code: 820504,
    province: "พังงา",
    district: "อำเภอตะกั่วป่า",
    subDistrict: "บางม่วง"
  },
  {
    code: 820505,
    province: "พังงา",
    district: "อำเภอตะกั่วป่า",
    subDistrict: "ตำตัว"
  },
  {
    code: 820506,
    province: "พังงา",
    district: "อำเภอตะกั่วป่า",
    subDistrict: "โคกเคียน"
  },
  {
    code: 820507,
    province: "พังงา",
    district: "อำเภอตะกั่วป่า",
    subDistrict: "คึกคัก"
  },
  {
    code: 820508,
    province: "พังงา",
    district: "อำเภอตะกั่วป่า",
    subDistrict: "เกาะคอเขา"
  },
  {
    code: 820601,
    province: "พังงา",
    district: "อำเภอคุระบุรี",
    subDistrict: "คุระ"
  },
  {
    code: 820602,
    province: "พังงา",
    district: "อำเภอคุระบุรี",
    subDistrict: "บางวัน"
  },
  {
    code: 820603,
    province: "พังงา",
    district: "อำเภอคุระบุรี",
    subDistrict: "เกาะพระทอง"
  },
  {
    code: 820605,
    province: "พังงา",
    district: "อำเภอคุระบุรี",
    subDistrict: "แม่นางขาว"
  },
  {
    code: 820701,
    province: "พังงา",
    district: "อำเภอทับปุด",
    subDistrict: "ทับปุด"
  },
  {
    code: 820702,
    province: "พังงา",
    district: "อำเภอทับปุด",
    subDistrict: "มะรุ่ย"
  },
  {
    code: 820703,
    province: "พังงา",
    district: "อำเภอทับปุด",
    subDistrict: "บ่อแสน"
  },
  {
    code: 820704,
    province: "พังงา",
    district: "อำเภอทับปุด",
    subDistrict: "ถ้ำทองหลาง"
  },
  {
    code: 820705,
    province: "พังงา",
    district: "อำเภอทับปุด",
    subDistrict: "โคกเจริญ"
  },
  {
    code: 820706,
    province: "พังงา",
    district: "อำเภอทับปุด",
    subDistrict: "บางเหรียง"
  },
  {
    code: 820801,
    province: "พังงา",
    district: "อำเภอท้ายเหมือง",
    subDistrict: "ท้ายเหมือง"
  },
  {
    code: 820802,
    province: "พังงา",
    district: "อำเภอท้ายเหมือง",
    subDistrict: "นาเตย"
  },
  {
    code: 820803,
    province: "พังงา",
    district: "อำเภอท้ายเหมือง",
    subDistrict: "บางทอง"
  },
  {
    code: 820804,
    province: "พังงา",
    district: "อำเภอท้ายเหมือง",
    subDistrict: "ทุ่งมะพร้าว"
  },
  {
    code: 820805,
    province: "พังงา",
    district: "อำเภอท้ายเหมือง",
    subDistrict: "ลำภี"
  },
  {
    code: 820806,
    province: "พังงา",
    district: "อำเภอท้ายเหมือง",
    subDistrict: "ลำแก่น"
  },
  {
    code: 830101,
    province: "ภูเก็ต",
    district: "อำเภอเมืองภูเก็ต",
    subDistrict: "ตลาดใหญ่"
  },
  {
    code: 830102,
    province: "ภูเก็ต",
    district: "อำเภอเมืองภูเก็ต",
    subDistrict: "ตลาดเหนือ"
  },
  {
    code: 830103,
    province: "ภูเก็ต",
    district: "อำเภอเมืองภูเก็ต",
    subDistrict: "เกาะแก้ว"
  },
  {
    code: 830104,
    province: "ภูเก็ต",
    district: "อำเภอเมืองภูเก็ต",
    subDistrict: "รัษฎา"
  },
  {
    code: 830105,
    province: "ภูเก็ต",
    district: "อำเภอเมืองภูเก็ต",
    subDistrict: "วิชิต"
  },
  {
    code: 830106,
    province: "ภูเก็ต",
    district: "อำเภอเมืองภูเก็ต",
    subDistrict: "ฉลอง"
  },
  {
    code: 830107,
    province: "ภูเก็ต",
    district: "อำเภอเมืองภูเก็ต",
    subDistrict: "ราไวย์"
  },
  {
    code: 830108,
    province: "ภูเก็ต",
    district: "อำเภอเมืองภูเก็ต",
    subDistrict: "กะรน"
  },
  {
    code: 830201,
    province: "ภูเก็ต",
    district: "อำเภอกะทู้",
    subDistrict: "กะทู้"
  },
  {
    code: 830202,
    province: "ภูเก็ต",
    district: "อำเภอกะทู้",
    subDistrict: "ป่าตอง"
  },
  {
    code: 830203,
    province: "ภูเก็ต",
    district: "อำเภอกะทู้",
    subDistrict: "กมลา"
  },
  {
    code: 830301,
    province: "ภูเก็ต",
    district: "อำเภอถลาง",
    subDistrict: "เทพกระษัตรี"
  },
  {
    code: 830302,
    province: "ภูเก็ต",
    district: "อำเภอถลาง",
    subDistrict: "ศรีสุนทร"
  },
  {
    code: 830303,
    province: "ภูเก็ต",
    district: "อำเภอถลาง",
    subDistrict: "เชิงทะเล"
  },
  {
    code: 830304,
    province: "ภูเก็ต",
    district: "อำเภอถลาง",
    subDistrict: "ป่าคลอก"
  },
  {
    code: 830305,
    province: "ภูเก็ต",
    district: "อำเภอถลาง",
    subDistrict: "ไม้ขาว"
  },
  {
    code: 830306,
    province: "ภูเก็ต",
    district: "อำเภอถลาง",
    subDistrict: "สาคู"
  },
  {
    code: 840101,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "ตลาด"
  },
  {
    code: 840102,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "มะขามเตี้ย"
  },
  {
    code: 840103,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "วัดประดู่"
  },
  {
    code: 840104,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "ขุนทะเล"
  },
  {
    code: 840105,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "บางใบไม้"
  },
  {
    code: 840106,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "บางชนะ"
  },
  {
    code: 840107,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "คลองน้อย"
  },
  {
    code: 840108,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "บางไทร"
  },
  {
    code: 840109,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "บางโพธิ์"
  },
  {
    code: 840110,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "บางกุ้ง"
  },
  {
    code: 840111,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเมืองสุราษฎร์ธานี",
    subDistrict: "คลองฉนาก"
  },
  {
    code: 840201,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "ท่าทองใหม่"
  },
  {
    code: 840202,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "ท่าทอง"
  },
  {
    code: 840203,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "กะแดะ"
  },
  {
    code: 840204,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "ทุ่งกง"
  },
  {
    code: 840205,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "กรูด"
  },
  {
    code: 840206,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "ช้างซ้าย"
  },
  {
    code: 840207,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "พลายวาส"
  },
  {
    code: 840208,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "ป่าร่อน"
  },
  {
    code: 840209,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "ตะเคียนทอง"
  },
  {
    code: 840210,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "ช้างขวา"
  },
  {
    code: 840211,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "ท่าอุแท"
  },
  {
    code: 840212,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "ทุ่งรัง"
  },
  {
    code: 840213,
    province: "สุราษฎร์ธานี",
    district: "อำเภอกาญจนดิษฐ์",
    subDistrict: "คลองสระ"
  },
  {
    code: 840301,
    province: "สุราษฎร์ธานี",
    district: "อำเภอดอนสัก",
    subDistrict: "ดอนสัก"
  },
  {
    code: 840302,
    province: "สุราษฎร์ธานี",
    district: "อำเภอดอนสัก",
    subDistrict: "ชลคราม"
  },
  {
    code: 840303,
    province: "สุราษฎร์ธานี",
    district: "อำเภอดอนสัก",
    subDistrict: "ไชยคราม"
  },
  {
    code: 840304,
    province: "สุราษฎร์ธานี",
    district: "อำเภอดอนสัก",
    subDistrict: "ปากแพรก"
  },
  {
    code: 840401,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเกาะสมุย",
    subDistrict: "อ่างทอง"
  },
  {
    code: 840402,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเกาะสมุย",
    subDistrict: "ลิปะน้อย"
  },
  {
    code: 840403,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเกาะสมุย",
    subDistrict: "ตลิ่งงาม"
  },
  {
    code: 840404,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเกาะสมุย",
    subDistrict: "หน้าเมือง"
  },
  {
    code: 840405,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเกาะสมุย",
    subDistrict: "มะเร็ต"
  },
  {
    code: 840406,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเกาะสมุย",
    subDistrict: "บ่อผุด"
  },
  {
    code: 840407,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเกาะสมุย",
    subDistrict: "แม่น้ำ"
  },
  {
    code: 840501,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเกาะพะงัน",
    subDistrict: "เกาะพะงัน"
  },
  {
    code: 840502,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเกาะพะงัน",
    subDistrict: "บ้านใต้"
  },
  {
    code: 840503,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเกาะพะงัน",
    subDistrict: "เกาะเต่า"
  },
  {
    code: 840601,
    province: "สุราษฎร์ธานี",
    district: "อำเภอไชยา",
    subDistrict: "ตลาดไชยา"
  },
  {
    code: 840602,
    province: "สุราษฎร์ธานี",
    district: "อำเภอไชยา",
    subDistrict: "พุมเรียง"
  },
  {
    code: 840603,
    province: "สุราษฎร์ธานี",
    district: "อำเภอไชยา",
    subDistrict: "เลม็ด"
  },
  {
    code: 840604,
    province: "สุราษฎร์ธานี",
    district: "อำเภอไชยา",
    subDistrict: "เวียง"
  },
  {
    code: 840605,
    province: "สุราษฎร์ธานี",
    district: "อำเภอไชยา",
    subDistrict: "ทุ่ง"
  },
  {
    code: 840606,
    province: "สุราษฎร์ธานี",
    district: "อำเภอไชยา",
    subDistrict: "ป่าเว"
  },
  {
    code: 840607,
    province: "สุราษฎร์ธานี",
    district: "อำเภอไชยา",
    subDistrict: "ตะกรบ"
  },
  {
    code: 840608,
    province: "สุราษฎร์ธานี",
    district: "อำเภอไชยา",
    subDistrict: "โมถ่าย"
  },
  {
    code: 840609,
    province: "สุราษฎร์ธานี",
    district: "อำเภอไชยา",
    subDistrict: "ปากหมาก"
  },
  {
    code: 840701,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าชนะ",
    subDistrict: "ท่าชนะ"
  },
  {
    code: 840702,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าชนะ",
    subDistrict: "สมอทอง"
  },
  {
    code: 840703,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าชนะ",
    subDistrict: "ประสงค์"
  },
  {
    code: 840704,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าชนะ",
    subDistrict: "คันธุลี"
  },
  {
    code: 840705,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าชนะ",
    subDistrict: "วัง"
  },
  {
    code: 840706,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าชนะ",
    subDistrict: "คลองพา"
  },
  {
    code: 840801,
    province: "สุราษฎร์ธานี",
    district: "อำเภอคีรีรัฐนิคม",
    subDistrict: "ท่าขนอน"
  },
  {
    code: 840802,
    province: "สุราษฎร์ธานี",
    district: "อำเภอคีรีรัฐนิคม",
    subDistrict: "บ้านยาง"
  },
  {
    code: 840803,
    province: "สุราษฎร์ธานี",
    district: "อำเภอคีรีรัฐนิคม",
    subDistrict: "น้ำหัก"
  },
  {
    code: 840806,
    province: "สุราษฎร์ธานี",
    district: "อำเภอคีรีรัฐนิคม",
    subDistrict: "กะเปา"
  },
  {
    code: 840807,
    province: "สุราษฎร์ธานี",
    district: "อำเภอคีรีรัฐนิคม",
    subDistrict: "ท่ากระดาน"
  },
  {
    code: 840808,
    province: "สุราษฎร์ธานี",
    district: "อำเภอคีรีรัฐนิคม",
    subDistrict: "ย่านยาว"
  },
  {
    code: 840809,
    province: "สุราษฎร์ธานี",
    district: "อำเภอคีรีรัฐนิคม",
    subDistrict: "ถ้ำสิงขร"
  },
  {
    code: 840810,
    province: "สุราษฎร์ธานี",
    district: "อำเภอคีรีรัฐนิคม",
    subDistrict: "บ้านทำเนียบ"
  },
  {
    code: 840901,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านตาขุน",
    subDistrict: "เขาวง"
  },
  {
    code: 840902,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านตาขุน",
    subDistrict: "พะแสง"
  },
  {
    code: 840903,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านตาขุน",
    subDistrict: "พรุไทย"
  },
  {
    code: 840904,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านตาขุน",
    subDistrict: "เขาพัง"
  },
  {
    code: 841001,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพนม",
    subDistrict: "พนม"
  },
  {
    code: 841002,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพนม",
    subDistrict: "ต้นยวน"
  },
  {
    code: 841003,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพนม",
    subDistrict: "คลองศก"
  },
  {
    code: 841004,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพนม",
    subDistrict: "พลูเถื่อน"
  },
  {
    code: 841005,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพนม",
    subDistrict: "พังกาญจน์"
  },
  {
    code: 841006,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพนม",
    subDistrict: "คลองชะอุ่น"
  },
  {
    code: 841101,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าฉาง",
    subDistrict: "ท่าฉาง"
  },
  {
    code: 841102,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าฉาง",
    subDistrict: "ท่าเคย"
  },
  {
    code: 841103,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าฉาง",
    subDistrict: "คลองไทร"
  },
  {
    code: 841104,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าฉาง",
    subDistrict: "เขาถ่าน"
  },
  {
    code: 841105,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าฉาง",
    subDistrict: "เสวียด"
  },
  {
    code: 841106,
    province: "สุราษฎร์ธานี",
    district: "อำเภอท่าฉาง",
    subDistrict: "ปากฉลุย"
  },
  {
    code: 841201,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "นาสาร"
  },
  {
    code: 841202,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "พรุพี"
  },
  {
    code: 841203,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "ทุ่งเตา"
  },
  {
    code: 841204,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "ลำพูน"
  },
  {
    code: 841205,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "ท่าชี"
  },
  {
    code: 841206,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "ควนศรี"
  },
  {
    code: 841207,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "ควนสุบรรณ"
  },
  {
    code: 841208,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "คลองปราบ"
  },
  {
    code: 841209,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "น้ำพุ"
  },
  {
    code: 841210,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "ทุ่งเตาใหม่"
  },
  {
    code: 841211,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาสาร",
    subDistrict: "เพิ่มพูนทรัพย์"
  },
  {
    code: 841301,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาเดิม",
    subDistrict: "บ้านนา"
  },
  {
    code: 841302,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาเดิม",
    subDistrict: "ท่าเรือ"
  },
  {
    code: 841303,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาเดิม",
    subDistrict: "ทรัพย์ทวี"
  },
  {
    code: 841304,
    province: "สุราษฎร์ธานี",
    district: "อำเภอบ้านนาเดิม",
    subDistrict: "นาใต้"
  },
  {
    code: 841401,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเคียนซา",
    subDistrict: "เคียนซา"
  },
  {
    code: 841402,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเคียนซา",
    subDistrict: "พ่วงพรมคร"
  },
  {
    code: 841403,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเคียนซา",
    subDistrict: "เขาตอก"
  },
  {
    code: 841404,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเคียนซา",
    subDistrict: "อรัญคามวารี"
  },
  {
    code: 841405,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเคียนซา",
    subDistrict: "บ้านเสด็จ"
  },
  {
    code: 841501,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเวียงสระ",
    subDistrict: "เวียงสระ"
  },
  {
    code: 841502,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเวียงสระ",
    subDistrict: "บ้านส้อง"
  },
  {
    code: 841503,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเวียงสระ",
    subDistrict: "คลองฉนวน"
  },
  {
    code: 841504,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเวียงสระ",
    subDistrict: "ทุ่งหลวง"
  },
  {
    code: 841505,
    province: "สุราษฎร์ธานี",
    district: "อำเภอเวียงสระ",
    subDistrict: "เขานิพันธ์"
  },
  {
    code: 841601,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพระแสง",
    subDistrict: "อิปัน"
  },
  {
    code: 841602,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพระแสง",
    subDistrict: "สินปุน"
  },
  {
    code: 841603,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพระแสง",
    subDistrict: "บางสวรรค์"
  },
  {
    code: 841604,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพระแสง",
    subDistrict: "ไทรขึง"
  },
  {
    code: 841605,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพระแสง",
    subDistrict: "สินเจริญ"
  },
  {
    code: 841606,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพระแสง",
    subDistrict: "ไทรโสภา"
  },
  {
    code: 841607,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพระแสง",
    subDistrict: "สาคู"
  },
  {
    code: 841701,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 841702,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "ท่าสะท้อน"
  },
  {
    code: 841703,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "ลีเล็ด"
  },
  {
    code: 841704,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "บางมะเดื่อ"
  },
  {
    code: 841705,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "บางเดือน"
  },
  {
    code: 841706,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "ท่าโรงช้าง"
  },
  {
    code: 841707,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "กรูด"
  },
  {
    code: 841708,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "พุนพิน"
  },
  {
    code: 841709,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "บางงอน"
  },
  {
    code: 841710,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "ศรีวิชัย"
  },
  {
    code: 841711,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "น้ำรอบ"
  },
  {
    code: 841712,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "มะลวน"
  },
  {
    code: 841713,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "หัวเตย"
  },
  {
    code: 841714,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "หนองไทร"
  },
  {
    code: 841715,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "เขาหัวควาย"
  },
  {
    code: 841716,
    province: "สุราษฎร์ธานี",
    district: "อำเภอพุนพิน",
    subDistrict: "ตะปาน"
  },
  {
    code: 841801,
    province: "สุราษฎร์ธานี",
    district: "อำเภอชัยบุรี",
    subDistrict: "สองแพรก"
  },
  {
    code: 841802,
    province: "สุราษฎร์ธานี",
    district: "อำเภอชัยบุรี",
    subDistrict: "ชัยบุรี"
  },
  {
    code: 841803,
    province: "สุราษฎร์ธานี",
    district: "อำเภอชัยบุรี",
    subDistrict: "คลองน้อย"
  },
  {
    code: 841804,
    province: "สุราษฎร์ธานี",
    district: "อำเภอชัยบุรี",
    subDistrict: "ไทรทอง"
  },
  {
    code: 841901,
    province: "สุราษฎร์ธานี",
    district: "อำเภอวิภาวดี",
    subDistrict: "ตะกุกใต้"
  },
  {
    code: 841902,
    province: "สุราษฎร์ธานี",
    district: "อำเภอวิภาวดี",
    subDistrict: "ตะกุกเหนือ"
  },
  {
    code: 850101,
    province: "ระนอง",
    district: "อำเภอเมืองระนอง",
    subDistrict: "เขานิเวศน์"
  },
  {
    code: 850102,
    province: "ระนอง",
    district: "อำเภอเมืองระนอง",
    subDistrict: "ราชกรูด"
  },
  {
    code: 850103,
    province: "ระนอง",
    district: "อำเภอเมืองระนอง",
    subDistrict: "หงาว"
  },
  {
    code: 850104,
    province: "ระนอง",
    district: "อำเภอเมืองระนอง",
    subDistrict: "บางริ้น"
  },
  {
    code: 850105,
    province: "ระนอง",
    district: "อำเภอเมืองระนอง",
    subDistrict: "ปากน้ำ"
  },
  {
    code: 850106,
    province: "ระนอง",
    district: "อำเภอเมืองระนอง",
    subDistrict: "บางนอน"
  },
  {
    code: 850107,
    province: "ระนอง",
    district: "อำเภอเมืองระนอง",
    subDistrict: "หาดส้มแป้น"
  },
  {
    code: 850108,
    province: "ระนอง",
    district: "อำเภอเมืองระนอง",
    subDistrict: "ทรายแดง"
  },
  {
    code: 850109,
    province: "ระนอง",
    district: "อำเภอเมืองระนอง",
    subDistrict: "เกาะพยาม"
  },
  {
    code: 850201,
    province: "ระนอง",
    district: "อำเภอละอุ่น",
    subDistrict: "ละอุ่นใต้"
  },
  {
    code: 850202,
    province: "ระนอง",
    district: "อำเภอละอุ่น",
    subDistrict: "ละอุ่นเหนือ"
  },
  {
    code: 850203,
    province: "ระนอง",
    district: "อำเภอละอุ่น",
    subDistrict: "บางพระใต้"
  },
  {
    code: 850204,
    province: "ระนอง",
    district: "อำเภอละอุ่น",
    subDistrict: "บางพระเหนือ"
  },
  {
    code: 850205,
    province: "ระนอง",
    district: "อำเภอละอุ่น",
    subDistrict: "บางแก้ว"
  },
  {
    code: 850206,
    province: "ระนอง",
    district: "อำเภอละอุ่น",
    subDistrict: "ในวงเหนือ"
  },
  {
    code: 850207,
    province: "ระนอง",
    district: "อำเภอละอุ่น",
    subDistrict: "ในวงใต้"
  },
  {
    code: 850301,
    province: "ระนอง",
    district: "อำเภอกะเปอร์",
    subDistrict: "ม่วงกลวง"
  },
  {
    code: 850302,
    province: "ระนอง",
    district: "อำเภอกะเปอร์",
    subDistrict: "กะเปอร์"
  },
  {
    code: 850303,
    province: "ระนอง",
    district: "อำเภอกะเปอร์",
    subDistrict: "เชี่ยวเหลียง"
  },
  {
    code: 850304,
    province: "ระนอง",
    district: "อำเภอกะเปอร์",
    subDistrict: "บ้านนา"
  },
  {
    code: 850305,
    province: "ระนอง",
    district: "อำเภอกะเปอร์",
    subDistrict: "บางหิน"
  },
  {
    code: 850401,
    province: "ระนอง",
    district: "อำเภอกระบุรี",
    subDistrict: "น้ำจืด"
  },
  {
    code: 850402,
    province: "ระนอง",
    district: "อำเภอกระบุรี",
    subDistrict: "น้ำจืดน้อย"
  },
  {
    code: 850403,
    province: "ระนอง",
    district: "อำเภอกระบุรี",
    subDistrict: "มะมุ"
  },
  {
    code: 850404,
    province: "ระนอง",
    district: "อำเภอกระบุรี",
    subDistrict: "ปากจั่น"
  },
  {
    code: 850405,
    province: "ระนอง",
    district: "อำเภอกระบุรี",
    subDistrict: "ลำเลียง"
  },
  {
    code: 850406,
    province: "ระนอง",
    district: "อำเภอกระบุรี",
    subDistrict: "จ.ป.ร."
  },
  {
    code: 850407,
    province: "ระนอง",
    district: "อำเภอกระบุรี",
    subDistrict: "บางใหญ่"
  },
  {
    code: 850501,
    province: "ระนอง",
    district: "อำเภอสุขสำราญ",
    subDistrict: "นาคา"
  },
  {
    code: 850502,
    province: "ระนอง",
    district: "อำเภอสุขสำราญ",
    subDistrict: "กำพวน"
  },
  {
    code: 860101,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "ท่าตะเภา"
  },
  {
    code: 860102,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "ปากน้ำ"
  },
  {
    code: 860103,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "ท่ายาง"
  },
  {
    code: 860104,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "บางหมาก"
  },
  {
    code: 860105,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "นาทุ่ง"
  },
  {
    code: 860106,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "นาชะอัง"
  },
  {
    code: 860107,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "ตากแดด"
  },
  {
    code: 860108,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "บางลึก"
  },
  {
    code: 860109,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "หาดพันไกร"
  },
  {
    code: 860110,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "วังไผ่"
  },
  {
    code: 860111,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "วังใหม่"
  },
  {
    code: 860112,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "บ้านนา"
  },
  {
    code: 860113,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "ขุนกระทิง"
  },
  {
    code: 860114,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "ทุ่งคา"
  },
  {
    code: 860115,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "วิสัยเหนือ"
  },
  {
    code: 860116,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "หาดทรายรี"
  },
  {
    code: 860117,
    province: "ชุมพร",
    district: "อำเภอเมืองชุมพร",
    subDistrict: "ถ้ำสิงห์"
  },
  {
    code: 860201,
    province: "ชุมพร",
    district: "อำเภอท่าแซะ",
    subDistrict: "ท่าแซะ"
  },
  {
    code: 860202,
    province: "ชุมพร",
    district: "อำเภอท่าแซะ",
    subDistrict: "คุริง"
  },
  {
    code: 860203,
    province: "ชุมพร",
    district: "อำเภอท่าแซะ",
    subDistrict: "สลุย"
  },
  {
    code: 860204,
    province: "ชุมพร",
    district: "อำเภอท่าแซะ",
    subDistrict: "นากระตาม"
  },
  {
    code: 860205,
    province: "ชุมพร",
    district: "อำเภอท่าแซะ",
    subDistrict: "รับร่อ"
  },
  {
    code: 860206,
    province: "ชุมพร",
    district: "อำเภอท่าแซะ",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 860207,
    province: "ชุมพร",
    district: "อำเภอท่าแซะ",
    subDistrict: "หงษ์เจริญ"
  },
  {
    code: 860208,
    province: "ชุมพร",
    district: "อำเภอท่าแซะ",
    subDistrict: "หินแก้ว"
  },
  {
    code: 860209,
    province: "ชุมพร",
    district: "อำเภอท่าแซะ",
    subDistrict: "ทรัพย์อนันต์"
  },
  {
    code: 860210,
    province: "ชุมพร",
    district: "อำเภอท่าแซะ",
    subDistrict: "สองพี่น้อง"
  },
  {
    code: 860301,
    province: "ชุมพร",
    district: "อำเภอปะทิว",
    subDistrict: "บางสน"
  },
  {
    code: 860302,
    province: "ชุมพร",
    district: "อำเภอปะทิว",
    subDistrict: "ทะเลทรัพย์"
  },
  {
    code: 860303,
    province: "ชุมพร",
    district: "อำเภอปะทิว",
    subDistrict: "สะพลี"
  },
  {
    code: 860304,
    province: "ชุมพร",
    district: "อำเภอปะทิว",
    subDistrict: "ชุมโค"
  },
  {
    code: 860305,
    province: "ชุมพร",
    district: "อำเภอปะทิว",
    subDistrict: "ดอนยาง"
  },
  {
    code: 860306,
    province: "ชุมพร",
    district: "อำเภอปะทิว",
    subDistrict: "ปากคลอง"
  },
  {
    code: 860307,
    province: "ชุมพร",
    district: "อำเภอปะทิว",
    subDistrict: "เขาไชยราช"
  },
  {
    code: 860401,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "หลังสวน"
  },
  {
    code: 860402,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "ขันเงิน"
  },
  {
    code: 860403,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "ท่ามะพลา"
  },
  {
    code: 860404,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "นาขา"
  },
  {
    code: 860405,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "นาพญา"
  },
  {
    code: 860406,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "บ้านควน"
  },
  {
    code: 860407,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "บางมะพร้าว"
  },
  {
    code: 860408,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "บางน้ำจืด"
  },
  {
    code: 860409,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "ปากน้ำ"
  },
  {
    code: 860410,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "พ้อแดง"
  },
  {
    code: 860411,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "แหลมทราย"
  },
  {
    code: 860412,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "วังตะกอ"
  },
  {
    code: 860413,
    province: "ชุมพร",
    district: "อำเภอหลังสวน",
    subDistrict: "หาดยาย"
  },
  {
    code: 860501,
    province: "ชุมพร",
    district: "อำเภอละแม",
    subDistrict: "ละแม"
  },
  {
    code: 860502,
    province: "ชุมพร",
    district: "อำเภอละแม",
    subDistrict: "ทุ่งหลวง"
  },
  {
    code: 860503,
    province: "ชุมพร",
    district: "อำเภอละแม",
    subDistrict: "สวนแตง"
  },
  {
    code: 860504,
    province: "ชุมพร",
    district: "อำเภอละแม",
    subDistrict: "ทุ่งคาวัด"
  },
  {
    code: 860601,
    province: "ชุมพร",
    district: "อำเภอพะโต๊ะ",
    subDistrict: "พะโต๊ะ"
  },
  {
    code: 860602,
    province: "ชุมพร",
    district: "อำเภอพะโต๊ะ",
    subDistrict: "ปากทรง"
  },
  {
    code: 860603,
    province: "ชุมพร",
    district: "อำเภอพะโต๊ะ",
    subDistrict: "ปังหวาน"
  },
  {
    code: 860604,
    province: "ชุมพร",
    district: "อำเภอพะโต๊ะ",
    subDistrict: "พระรักษ์"
  },
  {
    code: 860701,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "นาโพธิ์"
  },
  {
    code: 860702,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "สวี"
  },
  {
    code: 860703,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "ทุ่งระยะ"
  },
  {
    code: 860704,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "ท่าหิน"
  },
  {
    code: 860705,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "ปากแพรก"
  },
  {
    code: 860706,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "ด่านสวี"
  },
  {
    code: 860707,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "ครน"
  },
  {
    code: 860708,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "วิสัยใต้"
  },
  {
    code: 860709,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "นาสัก"
  },
  {
    code: 860710,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "เขาทะลุ"
  },
  {
    code: 860711,
    province: "ชุมพร",
    district: "อำเภอสวี",
    subDistrict: "เขาค่าย"
  },
  {
    code: 860801,
    province: "ชุมพร",
    district: "อำเภอทุ่งตะโก",
    subDistrict: "ปากตะโก"
  },
  {
    code: 860802,
    province: "ชุมพร",
    district: "อำเภอทุ่งตะโก",
    subDistrict: "ทุ่งตะไคร"
  },
  {
    code: 860803,
    province: "ชุมพร",
    district: "อำเภอทุ่งตะโก",
    subDistrict: "ตะโก"
  },
  {
    code: 860804,
    province: "ชุมพร",
    district: "อำเภอทุ่งตะโก",
    subDistrict: "ช่องไม้แก้ว"
  },
  {
    code: 900101,
    province: "สงขลา",
    district: "อำเภอเมืองสงขลา",
    subDistrict: "บ่อยาง"
  },
  {
    code: 900102,
    province: "สงขลา",
    district: "อำเภอเมืองสงขลา",
    subDistrict: "เขารูปช้าง"
  },
  {
    code: 900103,
    province: "สงขลา",
    district: "อำเภอเมืองสงขลา",
    subDistrict: "เกาะแต้ว"
  },
  {
    code: 900104,
    province: "สงขลา",
    district: "อำเภอเมืองสงขลา",
    subDistrict: "พะวง"
  },
  {
    code: 900105,
    province: "สงขลา",
    district: "อำเภอเมืองสงขลา",
    subDistrict: "ทุ่งหวัง"
  },
  {
    code: 900106,
    province: "สงขลา",
    district: "อำเภอเมืองสงขลา",
    subDistrict: "เกาะยอ"
  },
  {
    code: 900201,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "จะทิ้งพระ"
  },
  {
    code: 900202,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "กระดังงา"
  },
  {
    code: 900203,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "สนามชัย"
  },
  {
    code: 900204,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "ดีหลวง"
  },
  {
    code: 900205,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "ชุมพล"
  },
  {
    code: 900206,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "คลองรี"
  },
  {
    code: 900207,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "คูขุด"
  },
  {
    code: 900208,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "ท่าหิน"
  },
  {
    code: 900209,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "วัดจันทร์"
  },
  {
    code: 900210,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "บ่อแดง"
  },
  {
    code: 900211,
    province: "สงขลา",
    district: "อำเภอสทิงพระ",
    subDistrict: "บ่อดาน"
  },
  {
    code: 900301,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "บ้านนา"
  },
  {
    code: 900302,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "ป่าชิง"
  },
  {
    code: 900303,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "สะพานไม้แก่น"
  },
  {
    code: 900304,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "สะกอม"
  },
  {
    code: 900305,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "นาหว้า"
  },
  {
    code: 900306,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "นาทับ"
  },
  {
    code: 900307,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "น้ำขาว"
  },
  {
    code: 900308,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "ขุนตัดหวาย"
  },
  {
    code: 900309,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "ท่าหมอไทร"
  },
  {
    code: 900310,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "จะโหนง"
  },
  {
    code: 900311,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "คู"
  },
  {
    code: 900312,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "แค"
  },
  {
    code: 900313,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "คลองเปียะ"
  },
  {
    code: 900314,
    province: "สงขลา",
    district: "อำเภอจะนะ",
    subDistrict: "ตลิ่งชัน"
  },
  {
    code: 900401,
    province: "สงขลา",
    district: "อำเภอนาทวี",
    subDistrict: "นาทวี"
  },
  {
    code: 900402,
    province: "สงขลา",
    district: "อำเภอนาทวี",
    subDistrict: "ฉาง"
  },
  {
    code: 900403,
    province: "สงขลา",
    district: "อำเภอนาทวี",
    subDistrict: "นาหมอศรี"
  },
  {
    code: 900404,
    province: "สงขลา",
    district: "อำเภอนาทวี",
    subDistrict: "คลองทราย"
  },
  {
    code: 900405,
    province: "สงขลา",
    district: "อำเภอนาทวี",
    subDistrict: "ปลักหนู"
  },
  {
    code: 900406,
    province: "สงขลา",
    district: "อำเภอนาทวี",
    subDistrict: "ท่าประดู่"
  },
  {
    code: 900407,
    province: "สงขลา",
    district: "อำเภอนาทวี",
    subDistrict: "สะท้อน"
  },
  {
    code: 900408,
    province: "สงขลา",
    district: "อำเภอนาทวี",
    subDistrict: "ทับช้าง"
  },
  {
    code: 900409,
    province: "สงขลา",
    district: "อำเภอนาทวี",
    subDistrict: "ประกอบ"
  },
  {
    code: 900410,
    province: "สงขลา",
    district: "อำเภอนาทวี",
    subDistrict: "คลองกวาง"
  },
  {
    code: 900501,
    province: "สงขลา",
    district: "อำเภอเทพา",
    subDistrict: "เทพา"
  },
  {
    code: 900502,
    province: "สงขลา",
    district: "อำเภอเทพา",
    subDistrict: "ปากบาง"
  },
  {
    code: 900503,
    province: "สงขลา",
    district: "อำเภอเทพา",
    subDistrict: "เกาะสะบ้า"
  },
  {
    code: 900504,
    province: "สงขลา",
    district: "อำเภอเทพา",
    subDistrict: "ลำไพล"
  },
  {
    code: 900505,
    province: "สงขลา",
    district: "อำเภอเทพา",
    subDistrict: "ท่าม่วง"
  },
  {
    code: 900506,
    province: "สงขลา",
    district: "อำเภอเทพา",
    subDistrict: "วังใหญ่"
  },
  {
    code: 900507,
    province: "สงขลา",
    district: "อำเภอเทพา",
    subDistrict: "สะกอม"
  },
  {
    code: 900601,
    province: "สงขลา",
    district: "อำเภอสะบ้าย้อย",
    subDistrict: "สะบ้าย้อย"
  },
  {
    code: 900602,
    province: "สงขลา",
    district: "อำเภอสะบ้าย้อย",
    subDistrict: "ทุ่งพอ"
  },
  {
    code: 900603,
    province: "สงขลา",
    district: "อำเภอสะบ้าย้อย",
    subDistrict: "เปียน"
  },
  {
    code: 900604,
    province: "สงขลา",
    district: "อำเภอสะบ้าย้อย",
    subDistrict: "บ้านโหนด"
  },
  {
    code: 900605,
    province: "สงขลา",
    district: "อำเภอสะบ้าย้อย",
    subDistrict: "จะแหน"
  },
  {
    code: 900606,
    province: "สงขลา",
    district: "อำเภอสะบ้าย้อย",
    subDistrict: "คูหา"
  },
  {
    code: 900607,
    province: "สงขลา",
    district: "อำเภอสะบ้าย้อย",
    subDistrict: "เขาแดง"
  },
  {
    code: 900608,
    province: "สงขลา",
    district: "อำเภอสะบ้าย้อย",
    subDistrict: "บาโหย"
  },
  {
    code: 900609,
    province: "สงขลา",
    district: "อำเภอสะบ้าย้อย",
    subDistrict: "ธารคีรี"
  },
  {
    code: 900701,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "ระโนด"
  },
  {
    code: 900702,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "คลองแดน"
  },
  {
    code: 900703,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "ตะเครียะ"
  },
  {
    code: 900704,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "ท่าบอน"
  },
  {
    code: 900705,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "บ้านใหม่"
  },
  {
    code: 900706,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "บ่อตรุ"
  },
  {
    code: 900707,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "ปากแตระ"
  },
  {
    code: 900708,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "พังยาง"
  },
  {
    code: 900709,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "ระวะ"
  },
  {
    code: 900710,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "วัดสน"
  },
  {
    code: 900711,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "บ้านขาว"
  },
  {
    code: 900712,
    province: "สงขลา",
    district: "อำเภอระโนด",
    subDistrict: "แดนสงวน"
  },
  {
    code: 900801,
    province: "สงขลา",
    district: "อำเภอกระแสสินธุ์",
    subDistrict: "เกาะใหญ่"
  },
  {
    code: 900802,
    province: "สงขลา",
    district: "อำเภอกระแสสินธุ์",
    subDistrict: "โรง"
  },
  {
    code: 900803,
    province: "สงขลา",
    district: "อำเภอกระแสสินธุ์",
    subDistrict: "เชิงแส"
  },
  {
    code: 900804,
    province: "สงขลา",
    district: "อำเภอกระแสสินธุ์",
    subDistrict: "กระแสสินธุ์"
  },
  {
    code: 900901,
    province: "สงขลา",
    district: "อำเภอรัตภูมิ",
    subDistrict: "กำแพงเพชร"
  },
  {
    code: 900902,
    province: "สงขลา",
    district: "อำเภอรัตภูมิ",
    subDistrict: "ท่าชะมวง"
  },
  {
    code: 900903,
    province: "สงขลา",
    district: "อำเภอรัตภูมิ",
    subDistrict: "คูหาใต้"
  },
  {
    code: 900904,
    province: "สงขลา",
    district: "อำเภอรัตภูมิ",
    subDistrict: "ควนรู"
  },
  {
    code: 900909,
    province: "สงขลา",
    district: "อำเภอรัตภูมิ",
    subDistrict: "เขาพระ"
  },
  {
    code: 901001,
    province: "สงขลา",
    district: "อำเภอสะเดา",
    subDistrict: "สะเดา"
  },
  {
    code: 901002,
    province: "สงขลา",
    district: "อำเภอสะเดา",
    subDistrict: "ปริก"
  },
  {
    code: 901003,
    province: "สงขลา",
    district: "อำเภอสะเดา",
    subDistrict: "พังลา"
  },
  {
    code: 901004,
    province: "สงขลา",
    district: "อำเภอสะเดา",
    subDistrict: "สำนักแต้ว"
  },
  {
    code: 901005,
    province: "สงขลา",
    district: "อำเภอสะเดา",
    subDistrict: "ทุ่งหมอ"
  },
  {
    code: 901006,
    province: "สงขลา",
    district: "อำเภอสะเดา",
    subDistrict: "ท่าโพธิ์"
  },
  {
    code: 901007,
    province: "สงขลา",
    district: "อำเภอสะเดา",
    subDistrict: "ปาดังเบซาร์"
  },
  {
    code: 901008,
    province: "สงขลา",
    district: "อำเภอสะเดา",
    subDistrict: "สำนักขาม"
  },
  {
    code: 901009,
    province: "สงขลา",
    district: "อำเภอสะเดา",
    subDistrict: "เขามีเกียรติ"
  },
  {
    code: 901101,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "หาดใหญ่"
  },
  {
    code: 901102,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "ควนลัง"
  },
  {
    code: 901103,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "คูเต่า"
  },
  {
    code: 901104,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "คอหงส์"
  },
  {
    code: 901105,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "คลองแห"
  },
  {
    code: 901107,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "คลองอู่ตะเภา"
  },
  {
    code: 901108,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "ฉลุง"
  },
  {
    code: 901111,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "ทุ่งใหญ่"
  },
  {
    code: 901112,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "ทุ่งตำเสา"
  },
  {
    code: 901113,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 901114,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "น้ำน้อย"
  },
  {
    code: 901116,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "บ้านพรุ"
  },
  {
    code: 901118,
    province: "สงขลา",
    district: "อำเภอหาดใหญ่",
    subDistrict: "พะตง"
  },
  {
    code: 901201,
    province: "สงขลา",
    district: "อำเภอนาหม่อม",
    subDistrict: "นาหม่อม"
  },
  {
    code: 901202,
    province: "สงขลา",
    district: "อำเภอนาหม่อม",
    subDistrict: "พิจิตร"
  },
  {
    code: 901203,
    province: "สงขลา",
    district: "อำเภอนาหม่อม",
    subDistrict: "ทุ่งขมิ้น"
  },
  {
    code: 901204,
    province: "สงขลา",
    district: "อำเภอนาหม่อม",
    subDistrict: "คลองหรัง"
  },
  {
    code: 901301,
    province: "สงขลา",
    district: "อำเภอควนเนียง",
    subDistrict: "รัตภูมิ"
  },
  {
    code: 901302,
    province: "สงขลา",
    district: "อำเภอควนเนียง",
    subDistrict: "ควนโส"
  },
  {
    code: 901303,
    province: "สงขลา",
    district: "อำเภอควนเนียง",
    subDistrict: "ห้วยลึก"
  },
  {
    code: 901304,
    province: "สงขลา",
    district: "อำเภอควนเนียง",
    subDistrict: "บางเหรียง"
  },
  {
    code: 901401,
    province: "สงขลา",
    district: "อำเภอบางกล่ำ",
    subDistrict: "บางกล่ำ"
  },
  {
    code: 901402,
    province: "สงขลา",
    district: "อำเภอบางกล่ำ",
    subDistrict: "ท่าช้าง"
  },
  {
    code: 901403,
    province: "สงขลา",
    district: "อำเภอบางกล่ำ",
    subDistrict: "แม่ทอม"
  },
  {
    code: 901404,
    province: "สงขลา",
    district: "อำเภอบางกล่ำ",
    subDistrict: "บ้านหาร"
  },
  {
    code: 901501,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "ชิงโค"
  },
  {
    code: 901502,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "สทิงหม้อ"
  },
  {
    code: 901503,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "ทำนบ"
  },
  {
    code: 901504,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "รำแดง"
  },
  {
    code: 901505,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "วัดขนุน"
  },
  {
    code: 901506,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "ชะแล้"
  },
  {
    code: 901507,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "ปากรอ"
  },
  {
    code: 901508,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "ป่าขาด"
  },
  {
    code: 901509,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "หัวเขา"
  },
  {
    code: 901510,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "บางเขียด"
  },
  {
    code: 901511,
    province: "สงขลา",
    district: "อำเภอสิงหนคร",
    subDistrict: "ม่วงงาม"
  },
  {
    code: 901601,
    province: "สงขลา",
    district: "อำเภอคลองหอยโข่ง",
    subDistrict: "คลองหอยโข่ง"
  },
  {
    code: 901602,
    province: "สงขลา",
    district: "อำเภอคลองหอยโข่ง",
    subDistrict: "ทุ่งลาน"
  },
  {
    code: 901603,
    province: "สงขลา",
    district: "อำเภอคลองหอยโข่ง",
    subDistrict: "โคกม่วง"
  },
  {
    code: 901604,
    province: "สงขลา",
    district: "อำเภอคลองหอยโข่ง",
    subDistrict: "คลองหลา"
  },
  {
    code: 910101,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "พิมาน"
  },
  {
    code: 910102,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "คลองขุด"
  },
  {
    code: 910103,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "ควนขัน"
  },
  {
    code: 910104,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "บ้านควน"
  },
  {
    code: 910105,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "ฉลุง"
  },
  {
    code: 910106,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "เกาะสาหร่าย"
  },
  {
    code: 910107,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "ตันหยงโป"
  },
  {
    code: 910108,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "เจ๊ะบิลัง"
  },
  {
    code: 910109,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "ตำมะลัง"
  },
  {
    code: 910110,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "ปูยู"
  },
  {
    code: 910111,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "ควนโพธิ์"
  },
  {
    code: 910112,
    province: "สตูล",
    district: "อำเภอเมืองสตูล",
    subDistrict: "เกตรี"
  },
  {
    code: 910201,
    province: "สตูล",
    district: "อำเภอควนโดน",
    subDistrict: "ควนโดน"
  },
  {
    code: 910202,
    province: "สตูล",
    district: "อำเภอควนโดน",
    subDistrict: "ควนสตอ"
  },
  {
    code: 910203,
    province: "สตูล",
    district: "อำเภอควนโดน",
    subDistrict: "ย่านซื่อ"
  },
  {
    code: 910204,
    province: "สตูล",
    district: "อำเภอควนโดน",
    subDistrict: "วังประจัน"
  },
  {
    code: 910301,
    province: "สตูล",
    district: "อำเภอควนกาหลง",
    subDistrict: "ทุ่งนุ้ย"
  },
  {
    code: 910302,
    province: "สตูล",
    district: "อำเภอควนกาหลง",
    subDistrict: "ควนกาหลง"
  },
  {
    code: 910303,
    province: "สตูล",
    district: "อำเภอควนกาหลง",
    subDistrict: "อุใดเจริญ"
  },
  {
    code: 910401,
    province: "สตูล",
    district: "อำเภอท่าแพ",
    subDistrict: "ท่าแพ"
  },
  {
    code: 910402,
    province: "สตูล",
    district: "อำเภอท่าแพ",
    subDistrict: "แป-ระ"
  },
  {
    code: 910403,
    province: "สตูล",
    district: "อำเภอท่าแพ",
    subDistrict: "สาคร"
  },
  {
    code: 910404,
    province: "สตูล",
    district: "อำเภอท่าแพ",
    subDistrict: "ท่าเรือ"
  },
  {
    code: 910501,
    province: "สตูล",
    district: "อำเภอละงู",
    subDistrict: "กำแพง"
  },
  {
    code: 910502,
    province: "สตูล",
    district: "อำเภอละงู",
    subDistrict: "ละงู"
  },
  {
    code: 910503,
    province: "สตูล",
    district: "อำเภอละงู",
    subDistrict: "เขาขาว"
  },
  {
    code: 910504,
    province: "สตูล",
    district: "อำเภอละงู",
    subDistrict: "ปากน้ำ"
  },
  {
    code: 910505,
    province: "สตูล",
    district: "อำเภอละงู",
    subDistrict: "น้ำผุด"
  },
  {
    code: 910506,
    province: "สตูล",
    district: "อำเภอละงู",
    subDistrict: "แหลมสน"
  },
  {
    code: 910601,
    province: "สตูล",
    district: "อำเภอทุ่งหว้า",
    subDistrict: "ทุ่งหว้า"
  },
  {
    code: 910602,
    province: "สตูล",
    district: "อำเภอทุ่งหว้า",
    subDistrict: "นาทอน"
  },
  {
    code: 910603,
    province: "สตูล",
    district: "อำเภอทุ่งหว้า",
    subDistrict: "ขอนคลาน"
  },
  {
    code: 910604,
    province: "สตูล",
    district: "อำเภอทุ่งหว้า",
    subDistrict: "ทุ่งบุหลัง"
  },
  {
    code: 910605,
    province: "สตูล",
    district: "อำเภอทุ่งหว้า",
    subDistrict: "ป่าแก่บ่อหิน"
  },
  {
    code: 910701,
    province: "สตูล",
    district: "อำเภอมะนัง",
    subDistrict: "ปาล์มพัฒนา"
  },
  {
    code: 910702,
    province: "สตูล",
    district: "อำเภอมะนัง",
    subDistrict: "นิคมพัฒนา"
  },
  {
    code: 920101,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "ทับเที่ยง"
  },
  {
    code: 920104,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "นาพละ"
  },
  {
    code: 920105,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "บ้านควน"
  },
  {
    code: 920106,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "นาบินหลา"
  },
  {
    code: 920107,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "ควนปริง"
  },
  {
    code: 920108,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "นาโยงใต้"
  },
  {
    code: 920109,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "บางรัก"
  },
  {
    code: 920110,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "โคกหล่อ"
  },
  {
    code: 920113,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "นาโต๊ะหมิง"
  },
  {
    code: 920114,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "หนองตรุด"
  },
  {
    code: 920115,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "น้ำผุด"
  },
  {
    code: 920117,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "นาตาล่วง"
  },
  {
    code: 920118,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "บ้านโพธิ์"
  },
  {
    code: 920119,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "นาท่ามเหนือ"
  },
  {
    code: 920120,
    province: "ตรัง",
    district: "อำเภอเมืองตรัง",
    subDistrict: "นาท่ามใต้"
  },
  {
    code: 920201,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "กันตัง"
  },
  {
    code: 920202,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "ควนธานี"
  },
  {
    code: 920203,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "บางหมาก"
  },
  {
    code: 920204,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "บางเป้า"
  },
  {
    code: 920205,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "วังวน"
  },
  {
    code: 920206,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "กันตังใต้"
  },
  {
    code: 920207,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "โคกยาง"
  },
  {
    code: 920208,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "คลองลุ"
  },
  {
    code: 920209,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "ย่านซื่อ"
  },
  {
    code: 920210,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "บ่อน้ำร้อน"
  },
  {
    code: 920211,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "บางสัก"
  },
  {
    code: 920212,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "นาเกลือ"
  },
  {
    code: 920213,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "เกาะลิบง"
  },
  {
    code: 920214,
    province: "ตรัง",
    district: "อำเภอกันตัง",
    subDistrict: "คลองชีล้อม"
  },
  {
    code: 920301,
    province: "ตรัง",
    district: "อำเภอย่านตาขาว",
    subDistrict: "ย่านตาขาว"
  },
  {
    code: 920302,
    province: "ตรัง",
    district: "อำเภอย่านตาขาว",
    subDistrict: "หนองบ่อ"
  },
  {
    code: 920303,
    province: "ตรัง",
    district: "อำเภอย่านตาขาว",
    subDistrict: "นาชุมเห็ด"
  },
  {
    code: 920304,
    province: "ตรัง",
    district: "อำเภอย่านตาขาว",
    subDistrict: "ในควน"
  },
  {
    code: 920305,
    province: "ตรัง",
    district: "อำเภอย่านตาขาว",
    subDistrict: "โพรงจระเข้"
  },
  {
    code: 920306,
    province: "ตรัง",
    district: "อำเภอย่านตาขาว",
    subDistrict: "ทุ่งกระบือ"
  },
  {
    code: 920307,
    province: "ตรัง",
    district: "อำเภอย่านตาขาว",
    subDistrict: "ทุ่งค่าย"
  },
  {
    code: 920308,
    province: "ตรัง",
    district: "อำเภอย่านตาขาว",
    subDistrict: "เกาะเปียะ"
  },
  {
    code: 920401,
    province: "ตรัง",
    district: "อำเภอปะเหลียน",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 920402,
    province: "ตรัง",
    district: "อำเภอปะเหลียน",
    subDistrict: "ทุ่งยาว"
  },
  {
    code: 920403,
    province: "ตรัง",
    district: "อำเภอปะเหลียน",
    subDistrict: "ปะเหลียน"
  },
  {
    code: 920404,
    province: "ตรัง",
    district: "อำเภอปะเหลียน",
    subDistrict: "บางด้วน"
  },
  {
    code: 920407,
    province: "ตรัง",
    district: "อำเภอปะเหลียน",
    subDistrict: "บ้านนา"
  },
  {
    code: 920409,
    province: "ตรัง",
    district: "อำเภอปะเหลียน",
    subDistrict: "สุโสะ"
  },
  {
    code: 920410,
    province: "ตรัง",
    district: "อำเภอปะเหลียน",
    subDistrict: "ลิพัง"
  },
  {
    code: 920411,
    province: "ตรัง",
    district: "อำเภอปะเหลียน",
    subDistrict: "เกาะสุกร"
  },
  {
    code: 920412,
    province: "ตรัง",
    district: "อำเภอปะเหลียน",
    subDistrict: "ท่าพญา"
  },
  {
    code: 920413,
    province: "ตรัง",
    district: "อำเภอปะเหลียน",
    subDistrict: "แหลมสอม"
  },
  {
    code: 920501,
    province: "ตรัง",
    district: "อำเภอสิเกา",
    subDistrict: "บ่อหิน"
  },
  {
    code: 920502,
    province: "ตรัง",
    district: "อำเภอสิเกา",
    subDistrict: "เขาไม้แก้ว"
  },
  {
    code: 920503,
    province: "ตรัง",
    district: "อำเภอสิเกา",
    subDistrict: "กะลาเส"
  },
  {
    code: 920504,
    province: "ตรัง",
    district: "อำเภอสิเกา",
    subDistrict: "ไม้ฝาด"
  },
  {
    code: 920505,
    province: "ตรัง",
    district: "อำเภอสิเกา",
    subDistrict: "นาเมืองเพชร"
  },
  {
    code: 920601,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "ห้วยยอด"
  },
  {
    code: 920602,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "หนองช้างแล่น"
  },
  {
    code: 920605,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "บางดี"
  },
  {
    code: 920606,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "บางกุ้ง"
  },
  {
    code: 920607,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "เขากอบ"
  },
  {
    code: 920608,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "เขาขาว"
  },
  {
    code: 920609,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "เขาปูน"
  },
  {
    code: 920610,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "ปากแจ่ม"
  },
  {
    code: 920611,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "ปากคม"
  },
  {
    code: 920614,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "ท่างิ้ว"
  },
  {
    code: 920615,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "ลำภูรา"
  },
  {
    code: 920616,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "นาวง"
  },
  {
    code: 920617,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "ห้วยนาง"
  },
  {
    code: 920619,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "ในเตา"
  },
  {
    code: 920620,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "ทุ่งต่อ"
  },
  {
    code: 920621,
    province: "ตรัง",
    district: "อำเภอห้วยยอด",
    subDistrict: "วังคีรี"
  },
  {
    code: 920701,
    province: "ตรัง",
    district: "อำเภอวังวิเศษ",
    subDistrict: "เขาวิเศษ"
  },
  {
    code: 920702,
    province: "ตรัง",
    district: "อำเภอวังวิเศษ",
    subDistrict: "วังมะปราง"
  },
  {
    code: 920703,
    province: "ตรัง",
    district: "อำเภอวังวิเศษ",
    subDistrict: "อ่าวตง"
  },
  {
    code: 920704,
    province: "ตรัง",
    district: "อำเภอวังวิเศษ",
    subDistrict: "ท่าสะบ้า"
  },
  {
    code: 920705,
    province: "ตรัง",
    district: "อำเภอวังวิเศษ",
    subDistrict: "วังมะปรางเหนือ"
  },
  {
    code: 920801,
    province: "ตรัง",
    district: "อำเภอนาโยง",
    subDistrict: "นาโยงเหนือ"
  },
  {
    code: 920802,
    province: "ตรัง",
    district: "อำเภอนาโยง",
    subDistrict: "ช่อง"
  },
  {
    code: 920803,
    province: "ตรัง",
    district: "อำเภอนาโยง",
    subDistrict: "ละมอ"
  },
  {
    code: 920804,
    province: "ตรัง",
    district: "อำเภอนาโยง",
    subDistrict: "โคกสะบ้า"
  },
  {
    code: 920805,
    province: "ตรัง",
    district: "อำเภอนาโยง",
    subDistrict: "นาหมื่นศรี"
  },
  {
    code: 920806,
    province: "ตรัง",
    district: "อำเภอนาโยง",
    subDistrict: "นาข้าวเสีย"
  },
  {
    code: 920901,
    province: "ตรัง",
    district: "อำเภอรัษฎา",
    subDistrict: "ควนเมา"
  },
  {
    code: 920902,
    province: "ตรัง",
    district: "อำเภอรัษฎา",
    subDistrict: "คลองปาง"
  },
  {
    code: 920903,
    province: "ตรัง",
    district: "อำเภอรัษฎา",
    subDistrict: "หนองบัว"
  },
  {
    code: 920904,
    province: "ตรัง",
    district: "อำเภอรัษฎา",
    subDistrict: "หนองปรือ"
  },
  {
    code: 920905,
    province: "ตรัง",
    district: "อำเภอรัษฎา",
    subDistrict: "เขาไพร"
  },
  {
    code: 921001,
    province: "ตรัง",
    district: "อำเภอหาดสำราญ",
    subDistrict: "หาดสำราญ"
  },
  {
    code: 921002,
    province: "ตรัง",
    district: "อำเภอหาดสำราญ",
    subDistrict: "บ้าหวี"
  },
  {
    code: 921003,
    province: "ตรัง",
    district: "อำเภอหาดสำราญ",
    subDistrict: "ตะเสะ"
  },
  {
    code: 930101,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "คูหาสวรรค์"
  },
  {
    code: 930103,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "เขาเจียก"
  },
  {
    code: 930104,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "ท่ามิหรำ"
  },
  {
    code: 930105,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "โคกชะงาย"
  },
  {
    code: 930106,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "นาท่อม"
  },
  {
    code: 930107,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "ปรางหมู่"
  },
  {
    code: 930108,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "ท่าแค"
  },
  {
    code: 930109,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "ลำปำ"
  },
  {
    code: 930110,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "ตำนาน"
  },
  {
    code: 930111,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "ควนมะพร้าว"
  },
  {
    code: 930112,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "ร่มเมือง"
  },
  {
    code: 930113,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "ชัยบุรี"
  },
  {
    code: 930114,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "นาโหนด"
  },
  {
    code: 930115,
    province: "พัทลุง",
    district: "อำเภอเมืองพัทลุง",
    subDistrict: "พญาขัน"
  },
  {
    code: 930201,
    province: "พัทลุง",
    district: "อำเภอกงหรา",
    subDistrict: "กงหรา"
  },
  {
    code: 930202,
    province: "พัทลุง",
    district: "อำเภอกงหรา",
    subDistrict: "ชะรัด"
  },
  {
    code: 930203,
    province: "พัทลุง",
    district: "อำเภอกงหรา",
    subDistrict: "คลองเฉลิม"
  },
  {
    code: 930204,
    province: "พัทลุง",
    district: "อำเภอกงหรา",
    subDistrict: "คลองทรายขาว"
  },
  {
    code: 930205,
    province: "พัทลุง",
    district: "อำเภอกงหรา",
    subDistrict: "สมหวัง"
  },
  {
    code: 930301,
    province: "พัทลุง",
    district: "อำเภอเขาชัยสน",
    subDistrict: "เขาชัยสน"
  },
  {
    code: 930302,
    province: "พัทลุง",
    district: "อำเภอเขาชัยสน",
    subDistrict: "ควนขนุน"
  },
  {
    code: 930305,
    province: "พัทลุง",
    district: "อำเภอเขาชัยสน",
    subDistrict: "จองถนน"
  },
  {
    code: 930306,
    province: "พัทลุง",
    district: "อำเภอเขาชัยสน",
    subDistrict: "หานโพธิ์"
  },
  {
    code: 930307,
    province: "พัทลุง",
    district: "อำเภอเขาชัยสน",
    subDistrict: "โคกม่วง"
  },
  {
    code: 930401,
    province: "พัทลุง",
    district: "อำเภอตะโหมด",
    subDistrict: "แม่ขรี"
  },
  {
    code: 930402,
    province: "พัทลุง",
    district: "อำเภอตะโหมด",
    subDistrict: "ตะโหมด"
  },
  {
    code: 930403,
    province: "พัทลุง",
    district: "อำเภอตะโหมด",
    subDistrict: "คลองใหญ่"
  },
  {
    code: 930501,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "ควนขนุน"
  },
  {
    code: 930502,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "ทะเลน้อย"
  },
  {
    code: 930504,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "นาขยาด"
  },
  {
    code: 930505,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "พนมวังก์"
  },
  {
    code: 930506,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "แหลมโตนด"
  },
  {
    code: 930508,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "ปันแต"
  },
  {
    code: 930509,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "โตนดด้วน"
  },
  {
    code: 930510,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "ดอนทราย"
  },
  {
    code: 930511,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "มะกอกเหนือ"
  },
  {
    code: 930512,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "พนางตุง"
  },
  {
    code: 930513,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "ชะมวง"
  },
  {
    code: 930516,
    province: "พัทลุง",
    district: "อำเภอควนขนุน",
    subDistrict: "แพรกหา"
  },
  {
    code: 930601,
    province: "พัทลุง",
    district: "อำเภอปากพะยูน",
    subDistrict: "ปากพะยูน"
  },
  {
    code: 930602,
    province: "พัทลุง",
    district: "อำเภอปากพะยูน",
    subDistrict: "ดอนประดู่"
  },
  {
    code: 930603,
    province: "พัทลุง",
    district: "อำเภอปากพะยูน",
    subDistrict: "เกาะนางคำ"
  },
  {
    code: 930604,
    province: "พัทลุง",
    district: "อำเภอปากพะยูน",
    subDistrict: "เกาะหมาก"
  },
  {
    code: 930605,
    province: "พัทลุง",
    district: "อำเภอปากพะยูน",
    subDistrict: "ฝาละมี"
  },
  {
    code: 930606,
    province: "พัทลุง",
    district: "อำเภอปากพะยูน",
    subDistrict: "หารเทา"
  },
  {
    code: 930607,
    province: "พัทลุง",
    district: "อำเภอปากพะยูน",
    subDistrict: "ดอนทราย"
  },
  {
    code: 930701,
    province: "พัทลุง",
    district: "อำเภอศรีบรรพต",
    subDistrict: "เขาย่า"
  },
  {
    code: 930702,
    province: "พัทลุง",
    district: "อำเภอศรีบรรพต",
    subDistrict: "เขาปู่"
  },
  {
    code: 930703,
    province: "พัทลุง",
    district: "อำเภอศรีบรรพต",
    subDistrict: "ตะแพน"
  },
  {
    code: 930801,
    province: "พัทลุง",
    district: "อำเภอป่าบอน",
    subDistrict: "ป่าบอน"
  },
  {
    code: 930802,
    province: "พัทลุง",
    district: "อำเภอป่าบอน",
    subDistrict: "โคกทราย"
  },
  {
    code: 930803,
    province: "พัทลุง",
    district: "อำเภอป่าบอน",
    subDistrict: "หนองธง"
  },
  {
    code: 930804,
    province: "พัทลุง",
    district: "อำเภอป่าบอน",
    subDistrict: "ทุ่งนารี"
  },
  {
    code: 930806,
    province: "พัทลุง",
    district: "อำเภอป่าบอน",
    subDistrict: "วังใหม่"
  },
  {
    code: 930901,
    province: "พัทลุง",
    district: "อำเภอบางแก้ว",
    subDistrict: "ท่ามะเดื่อ"
  },
  {
    code: 930902,
    province: "พัทลุง",
    district: "อำเภอบางแก้ว",
    subDistrict: "นาปะขอ"
  },
  {
    code: 930903,
    province: "พัทลุง",
    district: "อำเภอบางแก้ว",
    subDistrict: "โคกสัก"
  },
  {
    code: 931001,
    province: "พัทลุง",
    district: "อำเภอป่าพะยอม",
    subDistrict: "ป่าพะยอม"
  },
  {
    code: 931002,
    province: "พัทลุง",
    district: "อำเภอป่าพะยอม",
    subDistrict: "ลานข่อย"
  },
  {
    code: 931003,
    province: "พัทลุง",
    district: "อำเภอป่าพะยอม",
    subDistrict: "เกาะเต่า"
  },
  {
    code: 931004,
    province: "พัทลุง",
    district: "อำเภอป่าพะยอม",
    subDistrict: "บ้านพร้าว"
  },
  {
    code: 931101,
    province: "พัทลุง",
    district: "อำเภอศรีนครินทร์",
    subDistrict: "ชุมพล"
  },
  {
    code: 931102,
    province: "พัทลุง",
    district: "อำเภอศรีนครินทร์",
    subDistrict: "บ้านนา"
  },
  {
    code: 931103,
    province: "พัทลุง",
    district: "อำเภอศรีนครินทร์",
    subDistrict: "อ่างทอง"
  },
  {
    code: 931104,
    province: "พัทลุง",
    district: "อำเภอศรีนครินทร์",
    subDistrict: "ลำสินธุ์"
  },
  {
    code: 940101,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "สะบารัง"
  },
  {
    code: 940102,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "อาเนาะรู"
  },
  {
    code: 940103,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "จะบังติกอ"
  },
  {
    code: 940104,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "บานา"
  },
  {
    code: 940105,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "ตันหยงลุโละ"
  },
  {
    code: 940106,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "คลองมานิง"
  },
  {
    code: 940107,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "กะมิยอ"
  },
  {
    code: 940108,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "บาราโหม"
  },
  {
    code: 940109,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "ปะกาฮะรัง"
  },
  {
    code: 940110,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "รูสะมิแล"
  },
  {
    code: 940111,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "ตะลุโบะ"
  },
  {
    code: 940112,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "บาราเฮาะ"
  },
  {
    code: 940113,
    province: "ปัตตานี",
    district: "อำเภอเมืองปัตตานี",
    subDistrict: "ปุยุด"
  },
  {
    code: 940201,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "โคกโพธิ์"
  },
  {
    code: 940202,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "มะกรูด"
  },
  {
    code: 940203,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "บางโกระ"
  },
  {
    code: 940204,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "ป่าบอน"
  },
  {
    code: 940205,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "ทรายขาว"
  },
  {
    code: 940206,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "นาประดู่"
  },
  {
    code: 940207,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "ปากล่อ"
  },
  {
    code: 940208,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "ทุ่งพลา"
  },
  {
    code: 940211,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "ท่าเรือ"
  },
  {
    code: 940213,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "นาเกตุ"
  },
  {
    code: 940214,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "ควนโนรี"
  },
  {
    code: 940215,
    province: "ปัตตานี",
    district: "อำเภอโคกโพธิ์",
    subDistrict: "ช้างให้ตก"
  },
  {
    code: 940301,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "เกาะเปาะ"
  },
  {
    code: 940302,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "คอลอตันหยง"
  },
  {
    code: 940303,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "ดอนรัก"
  },
  {
    code: 940304,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "ดาโต๊ะ"
  },
  {
    code: 940305,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "ตุยง"
  },
  {
    code: 940306,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "ท่ากำชำ"
  },
  {
    code: 940307,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "บ่อทอง"
  },
  {
    code: 940308,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "บางเขา"
  },
  {
    code: 940309,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "บางตาวา"
  },
  {
    code: 940310,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "ปุโละปุโย"
  },
  {
    code: 940311,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "ยาบี"
  },
  {
    code: 940312,
    province: "ปัตตานี",
    district: "อำเภอหนองจิก",
    subDistrict: "ลิปะสะโง"
  },
  {
    code: 940401,
    province: "ปัตตานี",
    district: "อำเภอปะนาเระ",
    subDistrict: "ปะนาเระ"
  },
  {
    code: 940402,
    province: "ปัตตานี",
    district: "อำเภอปะนาเระ",
    subDistrict: "ท่าข้าม"
  },
  {
    code: 940403,
    province: "ปัตตานี",
    district: "อำเภอปะนาเระ",
    subDistrict: "บ้านนอก"
  },
  {
    code: 940404,
    province: "ปัตตานี",
    district: "อำเภอปะนาเระ",
    subDistrict: "ดอน"
  },
  {
    code: 940405,
    province: "ปัตตานี",
    district: "อำเภอปะนาเระ",
    subDistrict: "ควน"
  },
  {
    code: 940406,
    province: "ปัตตานี",
    district: "อำเภอปะนาเระ",
    subDistrict: "ท่าน้ำ"
  },
  {
    code: 940407,
    province: "ปัตตานี",
    district: "อำเภอปะนาเระ",
    subDistrict: "คอกกระบือ"
  },
  {
    code: 940408,
    province: "ปัตตานี",
    district: "อำเภอปะนาเระ",
    subDistrict: "พ่อมิ่ง"
  },
  {
    code: 940409,
    province: "ปัตตานี",
    district: "อำเภอปะนาเระ",
    subDistrict: "บ้านกลาง"
  },
  {
    code: 940410,
    province: "ปัตตานี",
    district: "อำเภอปะนาเระ",
    subDistrict: "บ้านน้ำบ่อ"
  },
  {
    code: 940501,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "มายอ"
  },
  {
    code: 940502,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "ถนน"
  },
  {
    code: 940503,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "ตรัง"
  },
  {
    code: 940504,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "กระหวะ"
  },
  {
    code: 940505,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "ลุโบะยิไร"
  },
  {
    code: 940506,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "ลางา"
  },
  {
    code: 940507,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "กระเสาะ"
  },
  {
    code: 940508,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "เกาะจัน"
  },
  {
    code: 940509,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "ปะโด"
  },
  {
    code: 940510,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "สาคอบน"
  },
  {
    code: 940511,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "สาคอใต้"
  },
  {
    code: 940512,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "สะกำ"
  },
  {
    code: 940513,
    province: "ปัตตานี",
    district: "อำเภอมายอ",
    subDistrict: "ปานัน"
  },
  {
    code: 940601,
    province: "ปัตตานี",
    district: "อำเภอทุ่งยางแดง",
    subDistrict: "ตะโละแมะนา"
  },
  {
    code: 940602,
    province: "ปัตตานี",
    district: "อำเภอทุ่งยางแดง",
    subDistrict: "พิเทน"
  },
  {
    code: 940603,
    province: "ปัตตานี",
    district: "อำเภอทุ่งยางแดง",
    subDistrict: "น้ำดำ"
  },
  {
    code: 940604,
    province: "ปัตตานี",
    district: "อำเภอทุ่งยางแดง",
    subDistrict: "ปากู"
  },
  {
    code: 940701,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "ตะลุบัน"
  },
  {
    code: 940702,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "ตะบิ้ง"
  },
  {
    code: 940703,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "ปะเสยะวอ"
  },
  {
    code: 940704,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "บางเก่า"
  },
  {
    code: 940705,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "บือเระ"
  },
  {
    code: 940706,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "เตราะบอน"
  },
  {
    code: 940707,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "กะดุนง"
  },
  {
    code: 940708,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "ละหาร"
  },
  {
    code: 940709,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "มะนังดาลำ"
  },
  {
    code: 940710,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "แป้น"
  },
  {
    code: 940711,
    province: "ปัตตานี",
    district: "อำเภอสายบุรี",
    subDistrict: "ทุ่งคล้า"
  },
  {
    code: 940801,
    province: "ปัตตานี",
    district: "อำเภอไม้แก่น",
    subDistrict: "ไทรทอง"
  },
  {
    code: 940802,
    province: "ปัตตานี",
    district: "อำเภอไม้แก่น",
    subDistrict: "ไม้แก่น"
  },
  {
    code: 940803,
    province: "ปัตตานี",
    district: "อำเภอไม้แก่น",
    subDistrict: "ตะโละไกรทอง"
  },
  {
    code: 940804,
    province: "ปัตตานี",
    district: "อำเภอไม้แก่น",
    subDistrict: "ดอนทราย"
  },
  {
    code: 940901,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ตะโละ"
  },
  {
    code: 940902,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ตะโละกาโปร์"
  },
  {
    code: 940903,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ตันหยงดาลอ"
  },
  {
    code: 940904,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ตันหยงจึงงา"
  },
  {
    code: 940905,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ตอหลัง"
  },
  {
    code: 940906,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ตาแกะ"
  },
  {
    code: 940907,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ตาลีอายร์"
  },
  {
    code: 940908,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ยามู"
  },
  {
    code: 940909,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "บางปู"
  },
  {
    code: 940910,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "หนองแรต"
  },
  {
    code: 940911,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ปิยามุมัง"
  },
  {
    code: 940912,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ปุลากง"
  },
  {
    code: 940913,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "บาโลย"
  },
  {
    code: 940914,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "สาบัน"
  },
  {
    code: 940915,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "มะนังยง"
  },
  {
    code: 940916,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "ราตาปันยัง"
  },
  {
    code: 940917,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "จะรัง"
  },
  {
    code: 940918,
    province: "ปัตตานี",
    district: "อำเภอยะหริ่ง",
    subDistrict: "แหลมโพธิ์"
  },
  {
    code: 941001,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "ยะรัง"
  },
  {
    code: 941002,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "สะดาวา"
  },
  {
    code: 941003,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "ประจัน"
  },
  {
    code: 941004,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "สะนอ"
  },
  {
    code: 941005,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "ระแว้ง"
  },
  {
    code: 941006,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "ปิตูมุดี"
  },
  {
    code: 941007,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "วัด"
  },
  {
    code: 941008,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "กระโด"
  },
  {
    code: 941009,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "คลองใหม่"
  },
  {
    code: 941010,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "เมาะมาวี"
  },
  {
    code: 941011,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "กอลำ"
  },
  {
    code: 941012,
    province: "ปัตตานี",
    district: "อำเภอยะรัง",
    subDistrict: "เขาตูม"
  },
  {
    code: 941101,
    province: "ปัตตานี",
    district: "อำเภอกะพ้อ",
    subDistrict: "กะรุบี"
  },
  {
    code: 941102,
    province: "ปัตตานี",
    district: "อำเภอกะพ้อ",
    subDistrict: "ตะโละดือรามัน"
  },
  {
    code: 941103,
    province: "ปัตตานี",
    district: "อำเภอกะพ้อ",
    subDistrict: "ปล่องหอย"
  },
  {
    code: 941201,
    province: "ปัตตานี",
    district: "อำเภอแม่ลาน",
    subDistrict: "แม่ลาน"
  },
  {
    code: 941202,
    province: "ปัตตานี",
    district: "อำเภอแม่ลาน",
    subDistrict: "ม่วงเตี้ย"
  },
  {
    code: 941203,
    province: "ปัตตานี",
    district: "อำเภอแม่ลาน",
    subDistrict: "ป่าไร่"
  },
  {
    code: 950101,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "สะเตง"
  },
  {
    code: 950102,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "บุดี"
  },
  {
    code: 950103,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "ยุโป"
  },
  {
    code: 950104,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "ลิดล"
  },
  {
    code: 950106,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "ยะลา"
  },
  {
    code: 950108,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "ท่าสาป"
  },
  {
    code: 950109,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "ลำใหม่"
  },
  {
    code: 950110,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "หน้าถ้ำ"
  },
  {
    code: 950111,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "ลำพะยา"
  },
  {
    code: 950112,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "เปาะเส้ง"
  },
  {
    code: 950114,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "พร่อน"
  },
  {
    code: 950115,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "บันนังสาเรง"
  },
  {
    code: 950116,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "สะเตงนอก"
  },
  {
    code: 950118,
    province: "ยะลา",
    district: "อำเภอเมืองยะลา",
    subDistrict: "ตาเซะ"
  },
  {
    code: 950201,
    province: "ยะลา",
    district: "อำเภอเบตง",
    subDistrict: "เบตง"
  },
  {
    code: 950202,
    province: "ยะลา",
    district: "อำเภอเบตง",
    subDistrict: "ยะรม"
  },
  {
    code: 950203,
    province: "ยะลา",
    district: "อำเภอเบตง",
    subDistrict: "ตาเนาะแมเราะ"
  },
  {
    code: 950204,
    province: "ยะลา",
    district: "อำเภอเบตง",
    subDistrict: "อัยเยอร์เวง"
  },
  {
    code: 950205,
    province: "ยะลา",
    district: "อำเภอเบตง",
    subDistrict: "ธารน้ำทิพย์"
  },
  {
    code: 950301,
    province: "ยะลา",
    district: "อำเภอบันนังสตา",
    subDistrict: "บันนังสตา"
  },
  {
    code: 950302,
    province: "ยะลา",
    district: "อำเภอบันนังสตา",
    subDistrict: "บาเจาะ"
  },
  {
    code: 950303,
    province: "ยะลา",
    district: "อำเภอบันนังสตา",
    subDistrict: "ตาเนาะปูเต๊ะ"
  },
  {
    code: 950304,
    province: "ยะลา",
    district: "อำเภอบันนังสตา",
    subDistrict: "ถ้ำทะลุ"
  },
  {
    code: 950305,
    province: "ยะลา",
    district: "อำเภอบันนังสตา",
    subDistrict: "ตลิ่งชัน"
  },
  {
    code: 950306,
    province: "ยะลา",
    district: "อำเภอบันนังสตา",
    subDistrict: "เขื่อนบางลาง"
  },
  {
    code: 950401,
    province: "ยะลา",
    district: "อำเภอธารโต",
    subDistrict: "ธารโต"
  },
  {
    code: 950402,
    province: "ยะลา",
    district: "อำเภอธารโต",
    subDistrict: "บ้านแหร"
  },
  {
    code: 950403,
    province: "ยะลา",
    district: "อำเภอธารโต",
    subDistrict: "แม่หวาด"
  },
  {
    code: 950404,
    province: "ยะลา",
    district: "อำเภอธารโต",
    subDistrict: "คีรีเขต"
  },
  {
    code: 950501,
    province: "ยะลา",
    district: "อำเภอยะหา",
    subDistrict: "ยะหา"
  },
  {
    code: 950502,
    province: "ยะลา",
    district: "อำเภอยะหา",
    subDistrict: "ละแอ"
  },
  {
    code: 950503,
    province: "ยะลา",
    district: "อำเภอยะหา",
    subDistrict: "ปะแต"
  },
  {
    code: 950504,
    province: "ยะลา",
    district: "อำเภอยะหา",
    subDistrict: "บาโร๊ะ"
  },
  {
    code: 950506,
    province: "ยะลา",
    district: "อำเภอยะหา",
    subDistrict: "ตาชี"
  },
  {
    code: 950507,
    province: "ยะลา",
    district: "อำเภอยะหา",
    subDistrict: "บาโงยซิแน"
  },
  {
    code: 950508,
    province: "ยะลา",
    district: "อำเภอยะหา",
    subDistrict: "กาตอง"
  },
  {
    code: 950601,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "กายูบอเกาะ"
  },
  {
    code: 950602,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "กาลูปัง"
  },
  {
    code: 950603,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "กาลอ"
  },
  {
    code: 950604,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "กอตอตือร๊ะ"
  },
  {
    code: 950605,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "โกตาบารู"
  },
  {
    code: 950606,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "เกะรอ"
  },
  {
    code: 950607,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "จะกว๊ะ"
  },
  {
    code: 950608,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "ท่าธง"
  },
  {
    code: 950609,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "เนินงาม"
  },
  {
    code: 950610,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "บาลอ"
  },
  {
    code: 950611,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "บาโงย"
  },
  {
    code: 950612,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "บือมัง"
  },
  {
    code: 950613,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "ยะต๊ะ"
  },
  {
    code: 950614,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "วังพญา"
  },
  {
    code: 950615,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "อาซ่อง"
  },
  {
    code: 950616,
    province: "ยะลา",
    district: "อำเภอรามัน",
    subDistrict: "ตะโล๊ะหะลอ"
  },
  {
    code: 950701,
    province: "ยะลา",
    district: "อำเภอกาบัง",
    subDistrict: "กาบัง"
  },
  {
    code: 950702,
    province: "ยะลา",
    district: "อำเภอกาบัง",
    subDistrict: "บาละ"
  },
  {
    code: 950801,
    province: "ยะลา",
    district: "อำเภอกรงปินัง",
    subDistrict: "กรงปินัง"
  },
  {
    code: 950802,
    province: "ยะลา",
    district: "อำเภอกรงปินัง",
    subDistrict: "สะเอะ"
  },
  {
    code: 950803,
    province: "ยะลา",
    district: "อำเภอกรงปินัง",
    subDistrict: "ห้วยกระทิง"
  },
  {
    code: 950804,
    province: "ยะลา",
    district: "อำเภอกรงปินัง",
    subDistrict: "ปุโรง"
  },
  {
    code: 960101,
    province: "นราธิวาส",
    district: "อำเภอเมืองนราธิวาส",
    subDistrict: "บางนาค"
  },
  {
    code: 960102,
    province: "นราธิวาส",
    district: "อำเภอเมืองนราธิวาส",
    subDistrict: "ลำภู"
  },
  {
    code: 960103,
    province: "นราธิวาส",
    district: "อำเภอเมืองนราธิวาส",
    subDistrict: "มะนังตายอ"
  },
  {
    code: 960104,
    province: "นราธิวาส",
    district: "อำเภอเมืองนราธิวาส",
    subDistrict: "บางปอ"
  },
  {
    code: 960105,
    province: "นราธิวาส",
    district: "อำเภอเมืองนราธิวาส",
    subDistrict: "กะลุวอ"
  },
  {
    code: 960106,
    province: "นราธิวาส",
    district: "อำเภอเมืองนราธิวาส",
    subDistrict: "กะลุวอเหนือ"
  },
  {
    code: 960107,
    province: "นราธิวาส",
    district: "อำเภอเมืองนราธิวาส",
    subDistrict: "โคกเคียน"
  },
  {
    code: 960201,
    province: "นราธิวาส",
    district: "อำเภอตากใบ",
    subDistrict: "เจ๊ะเห"
  },
  {
    code: 960202,
    province: "นราธิวาส",
    district: "อำเภอตากใบ",
    subDistrict: "ไพรวัน"
  },
  {
    code: 960203,
    province: "นราธิวาส",
    district: "อำเภอตากใบ",
    subDistrict: "พร่อน"
  },
  {
    code: 960204,
    province: "นราธิวาส",
    district: "อำเภอตากใบ",
    subDistrict: "ศาลาใหม่"
  },
  {
    code: 960205,
    province: "นราธิวาส",
    district: "อำเภอตากใบ",
    subDistrict: "บางขุนทอง"
  },
  {
    code: 960206,
    province: "นราธิวาส",
    district: "อำเภอตากใบ",
    subDistrict: "เกาะสะท้อน"
  },
  {
    code: 960207,
    province: "นราธิวาส",
    district: "อำเภอตากใบ",
    subDistrict: "นานาค"
  },
  {
    code: 960208,
    province: "นราธิวาส",
    district: "อำเภอตากใบ",
    subDistrict: "โฆษิต"
  },
  {
    code: 960301,
    province: "นราธิวาส",
    district: "อำเภอบาเจาะ",
    subDistrict: "บาเจาะ"
  },
  {
    code: 960302,
    province: "นราธิวาส",
    district: "อำเภอบาเจาะ",
    subDistrict: "ลุโบะสาวอ"
  },
  {
    code: 960303,
    province: "นราธิวาส",
    district: "อำเภอบาเจาะ",
    subDistrict: "กาเยาะมาตี"
  },
  {
    code: 960304,
    province: "นราธิวาส",
    district: "อำเภอบาเจาะ",
    subDistrict: "ปะลุกาสาเมาะ"
  },
  {
    code: 960305,
    province: "นราธิวาส",
    district: "อำเภอบาเจาะ",
    subDistrict: "บาเระเหนือ"
  },
  {
    code: 960306,
    province: "นราธิวาส",
    district: "อำเภอบาเจาะ",
    subDistrict: "บาเระใต้"
  },
  {
    code: 960401,
    province: "นราธิวาส",
    district: "อำเภอยี่งอ",
    subDistrict: "ยี่งอ"
  },
  {
    code: 960402,
    province: "นราธิวาส",
    district: "อำเภอยี่งอ",
    subDistrict: "ละหาร"
  },
  {
    code: 960403,
    province: "นราธิวาส",
    district: "อำเภอยี่งอ",
    subDistrict: "จอเบาะ"
  },
  {
    code: 960404,
    province: "นราธิวาส",
    district: "อำเภอยี่งอ",
    subDistrict: "ลุโบะบายะ"
  },
  {
    code: 960405,
    province: "นราธิวาส",
    district: "อำเภอยี่งอ",
    subDistrict: "ลุโบะบือซา"
  },
  {
    code: 960406,
    province: "นราธิวาส",
    district: "อำเภอยี่งอ",
    subDistrict: "ตะปอเยาะ"
  },
  {
    code: 960501,
    province: "นราธิวาส",
    district: "อำเภอระแงะ",
    subDistrict: "ตันหยงมัส"
  },
  {
    code: 960502,
    province: "นราธิวาส",
    district: "อำเภอระแงะ",
    subDistrict: "ตันหยงลิมอ"
  },
  {
    code: 960506,
    province: "นราธิวาส",
    district: "อำเภอระแงะ",
    subDistrict: "บองอ"
  },
  {
    code: 960507,
    province: "นราธิวาส",
    district: "อำเภอระแงะ",
    subDistrict: "กาลิซา"
  },
  {
    code: 960508,
    province: "นราธิวาส",
    district: "อำเภอระแงะ",
    subDistrict: "บาโงสะโต"
  },
  {
    code: 960509,
    province: "นราธิวาส",
    district: "อำเภอระแงะ",
    subDistrict: "เฉลิม"
  },
  {
    code: 960510,
    province: "นราธิวาส",
    district: "อำเภอระแงะ",
    subDistrict: "มะรือโบตก"
  },
  {
    code: 960601,
    province: "นราธิวาส",
    district: "อำเภอรือเสาะ",
    subDistrict: "รือเสาะ"
  },
  {
    code: 960602,
    province: "นราธิวาส",
    district: "อำเภอรือเสาะ",
    subDistrict: "สาวอ"
  },
  {
    code: 960603,
    province: "นราธิวาส",
    district: "อำเภอรือเสาะ",
    subDistrict: "เรียง"
  },
  {
    code: 960604,
    province: "นราธิวาส",
    district: "อำเภอรือเสาะ",
    subDistrict: "สามัคคี"
  },
  {
    code: 960605,
    province: "นราธิวาส",
    district: "อำเภอรือเสาะ",
    subDistrict: "บาตง"
  },
  {
    code: 960606,
    province: "นราธิวาส",
    district: "อำเภอรือเสาะ",
    subDistrict: "ลาโละ"
  },
  {
    code: 960607,
    province: "นราธิวาส",
    district: "อำเภอรือเสาะ",
    subDistrict: "รือเสาะออก"
  },
  {
    code: 960608,
    province: "นราธิวาส",
    district: "อำเภอรือเสาะ",
    subDistrict: "โคกสะตอ"
  },
  {
    code: 960609,
    province: "นราธิวาส",
    district: "อำเภอรือเสาะ",
    subDistrict: "สุวารี"
  },
  {
    code: 960701,
    province: "นราธิวาส",
    district: "อำเภอศรีสาคร",
    subDistrict: "ซากอ"
  },
  {
    code: 960702,
    province: "นราธิวาส",
    district: "อำเภอศรีสาคร",
    subDistrict: "ตะมะยูง"
  },
  {
    code: 960703,
    province: "นราธิวาส",
    district: "อำเภอศรีสาคร",
    subDistrict: "ศรีสาคร"
  },
  {
    code: 960704,
    province: "นราธิวาส",
    district: "อำเภอศรีสาคร",
    subDistrict: "เชิงคีรี"
  },
  {
    code: 960705,
    province: "นราธิวาส",
    district: "อำเภอศรีสาคร",
    subDistrict: "กาหลง"
  },
  {
    code: 960706,
    province: "นราธิวาส",
    district: "อำเภอศรีสาคร",
    subDistrict: "ศรีบรรพต"
  },
  {
    code: 960801,
    province: "นราธิวาส",
    district: "อำเภอแว้ง",
    subDistrict: "แว้ง"
  },
  {
    code: 960802,
    province: "นราธิวาส",
    district: "อำเภอแว้ง",
    subDistrict: "กายูคละ"
  },
  {
    code: 960803,
    province: "นราธิวาส",
    district: "อำเภอแว้ง",
    subDistrict: "ฆอเลาะ"
  },
  {
    code: 960804,
    province: "นราธิวาส",
    district: "อำเภอแว้ง",
    subDistrict: "โละจูด"
  },
  {
    code: 960805,
    province: "นราธิวาส",
    district: "อำเภอแว้ง",
    subDistrict: "แม่ดง"
  },
  {
    code: 960806,
    province: "นราธิวาส",
    district: "อำเภอแว้ง",
    subDistrict: "เอราวัณ"
  },
  {
    code: 960901,
    province: "นราธิวาส",
    district: "อำเภอสุคิริน",
    subDistrict: "มาโมง"
  },
  {
    code: 960902,
    province: "นราธิวาส",
    district: "อำเภอสุคิริน",
    subDistrict: "สุคิริน"
  },
  {
    code: 960903,
    province: "นราธิวาส",
    district: "อำเภอสุคิริน",
    subDistrict: "เกียร์"
  },
  {
    code: 960904,
    province: "นราธิวาส",
    district: "อำเภอสุคิริน",
    subDistrict: "ภูเขาทอง"
  },
  {
    code: 960905,
    province: "นราธิวาส",
    district: "อำเภอสุคิริน",
    subDistrict: "ร่มไทร"
  },
  {
    code: 961001,
    province: "นราธิวาส",
    district: "อำเภอสุไหงโกลก",
    subDistrict: "สุไหงโก-ลก"
  },
  {
    code: 961002,
    province: "นราธิวาส",
    district: "อำเภอสุไหงโกลก",
    subDistrict: "ปาเสมัส"
  },
  {
    code: 961003,
    province: "นราธิวาส",
    district: "อำเภอสุไหงโกลก",
    subDistrict: "มูโนะ"
  },
  {
    code: 961004,
    province: "นราธิวาส",
    district: "อำเภอสุไหงโกลก",
    subDistrict: "ปูโยะ"
  },
  {
    code: 961101,
    province: "นราธิวาส",
    district: "อำเภอสุไหงปาดี",
    subDistrict: "ปะลุรู"
  },
  {
    code: 961102,
    province: "นราธิวาส",
    district: "อำเภอสุไหงปาดี",
    subDistrict: "สุไหงปาดี"
  },
  {
    code: 961103,
    province: "นราธิวาส",
    district: "อำเภอสุไหงปาดี",
    subDistrict: "โต๊ะเด็ง"
  },
  {
    code: 961104,
    province: "นราธิวาส",
    district: "อำเภอสุไหงปาดี",
    subDistrict: "สากอ"
  },
  {
    code: 961105,
    province: "นราธิวาส",
    district: "อำเภอสุไหงปาดี",
    subDistrict: "ริโก๋"
  },
  {
    code: 961106,
    province: "นราธิวาส",
    district: "อำเภอสุไหงปาดี",
    subDistrict: "กาวะ"
  },
  {
    code: 961201,
    province: "นราธิวาส",
    district: "อำเภอจะแนะ",
    subDistrict: "จะแนะ"
  },
  {
    code: 961202,
    province: "นราธิวาส",
    district: "อำเภอจะแนะ",
    subDistrict: "ดุซงญอ"
  },
  {
    code: 961203,
    province: "นราธิวาส",
    district: "อำเภอจะแนะ",
    subDistrict: "ผดุงมาตร"
  },
  {
    code: 961204,
    province: "นราธิวาส",
    district: "อำเภอจะแนะ",
    subDistrict: "ช้างเผือก"
  },
  {
    code: 961301,
    province: "นราธิวาส",
    district: "อำเภอเจาะไอร้อง",
    subDistrict: "จวบ"
  },
  {
    code: 961302,
    province: "นราธิวาส",
    district: "อำเภอเจาะไอร้อง",
    subDistrict: "บูกิต"
  },
  {
    code: 961303,
    province: "นราธิวาส",
    district: "อำเภอเจาะไอร้อง",
    subDistrict: "มะรือโบออก"
  }
]