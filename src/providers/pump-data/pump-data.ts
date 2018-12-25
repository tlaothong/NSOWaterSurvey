import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PumpDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PumpDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PumpDataProvider Provider');
  }
}

export interface PumpData {
  no: number;
  energySource: string;
  pumpType: string;
  horsePower: string;
  suctionPipeSize: string;
  pipelineSize: string;
}

export const Pumps: PumpData[] = [
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "200-500 / 0.2 - 0.7",
    suctionPipeSize: "-",
    pipelineSize: "1/2-1"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "200-500 / 0.2 - 0.7",
    suctionPipeSize: "-",
    pipelineSize: "1 (1/2)"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "200-500 / 0.2 - 0.7",
    suctionPipeSize: "-",
    pipelineSize: "1 (1/2)-2"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "501-1000 / 0.7 - 1.5",
    suctionPipeSize: "-",
    pipelineSize: "1/2-1 (1/2)"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "501-1000 / 0.7 - 1.5",
    suctionPipeSize: "-",
    pipelineSize: "1 (1/2)-2"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "1001-1400 / 1.5 - 2",
    suctionPipeSize: "-",
    pipelineSize: "1/2-1 (1/2)"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "1001-1400 / 1.5 - 2",
    suctionPipeSize: "-",
    pipelineSize: "1 (1/2)-2"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "1401-2000 / 2 - 2.5",
    suctionPipeSize: "-",
    pipelineSize: "1/2- 1 (1/2)"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "1401-2000 / 2 - 2.5",
    suctionPipeSize: "-",
    pipelineSize: "1 (1/2)-3"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "2001-3000 / 2.5 - 4",
    suctionPipeSize: "-",
    pipelineSize: "1-3"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "3001-5000 / 4- 7",
    suctionPipeSize: "-",
    pipelineSize: "1-3"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "5001-7000 / 7 - 9",
    suctionPipeSize: "-",
    pipelineSize: "1-4"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "7001-10000 / 9 - 15",
    suctionPipeSize: "-",
    pipelineSize: "1-4"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "10001-14000 / 15 - 20",
    suctionPipeSize: "-",
    pipelineSize: "1-4"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "15001-20000 / 20 - 25",
    suctionPipeSize: "-",
    pipelineSize: "1-4"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: "50000-100000 / 65 - 135",
    suctionPipeSize: "-",
    pipelineSize: "1-5"
  },
  {
    no: 1,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม",
    horsePower: ">100,000 / >135",
    suctionPipeSize: "-",
    pipelineSize: "1-5"
  },
  {
    no: 2,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มเจ็ท/ ปั๊มน้ำอัตโนมัติสำหรับดูดน้ำลึก",
    horsePower: "200-300 / 0.2 - 0.4",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 2,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มเจ็ท/ ปั๊มน้ำอัตโนมัติสำหรับดูดน้ำลึก",
    horsePower: "301-500 / 0.4 - 0.7",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 2,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มเจ็ท/ ปั๊มน้ำอัตโนมัติสำหรับดูดน้ำลึก",
    horsePower: "501-1000 / 0.7 - 1.5",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 2,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มเจ็ท/ ปั๊มน้ำอัตโนมัติสำหรับดูดน้ำลึก",
    horsePower: "1100 / 1.5",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 2,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มเจ็ท/ ปั๊มน้ำอัตโนมัติสำหรับดูดน้ำลึก",
    horsePower: "1500 / 2",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "200-500 / 0.2 - 0.7",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "501-1000 / 0.7 - 1.5",
    suctionPipeSize: "1/2-1",
    pipelineSize: "1/2-1"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "501-1000 / 0.7 - 1.5",
    suctionPipeSize: "1(1/4)-2",
    pipelineSize: "1(1/2)-2"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "1001-1400 / 1.5 - 2",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "1401-2000 / 2 - 2.5",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "2001-2500 / 2.5 - 3.5",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "2501-3500 / 3.5 - 4.5",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "3501-4500 / 4.5 - 6",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "4501-5500 / 6 - 7.5",
    suctionPipeSize: "1/2-3",
    pipelineSize: "1/2-3"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "5501-7500 / 7.5 - 10",
    suctionPipeSize: "1/2-3",
    pipelineSize: "1/2-3"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "7501-10000 / 10 - 15",
    suctionPipeSize: "2-3",
    pipelineSize: "2-3"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "10001-15000 / 15 - 20",
    suctionPipeSize: "2-4",
    pipelineSize: "2-4"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "15001-20000 / 20 - 25",
    suctionPipeSize: "2-3",
    pipelineSize: "2-3"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "15001-20000 / 20 - 25",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "20001-25000 / 25 - 35",
    suctionPipeSize: "2-4",
    pipelineSize: "2-4"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "25001-30000 / 35 - 40",
    suctionPipeSize: "2-4",
    pipelineSize: "2-4"
  },
  {
    no: 3,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "30001-40000 / 40 - 55",
    suctionPipeSize: "2-4",
    pipelineSize: "2-4"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "100-200 / 0.1 - 0.2",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "200-300 / 0.2 - 0.4",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "301-400 / 0.4 - 0.5",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "401-500 / 0.5 - 0.7",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "501-700 / 0.7 - 1",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "701-1000 / 1 - 1.5",
    suctionPipeSize: "1/2-3",
    pipelineSize: "1/2-3"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "1001-1400 / 1.5 - 2",
    suctionPipeSize: "1/2-3",
    pipelineSize: "1/2-3"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "1401-2000 / 2 - 2.5",
    suctionPipeSize: "1/2-3",
    pipelineSize: "1/2-3"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "2001-2500 / 2.5 - 3",
    suctionPipeSize: "1/2-4",
    pipelineSize: "1/2-4"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "2501-3500 / 3 - 4.5",
    suctionPipeSize: "1/2-4",
    pipelineSize: "1/2-4"
  },
  {
    no: 4,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มชัก",
    horsePower: "3501-4500 / 4.5 - 6",
    suctionPipeSize: "1/2-4",
    pipelineSize: "1/2-4"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "2000-4000 / 2 - 5",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "4001-5000 / 5 - 7",
    suctionPipeSize: "1/2-3",
    pipelineSize: "1/2-3"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "5001-6000 / 7 - 8",
    suctionPipeSize: "1/2-3",
    pipelineSize: "1/2-3"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6001-7000 / 8 - 9",
    suctionPipeSize: "1/2-4",
    pipelineSize: "1/2-4"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "7001-8000 / 9 - 11",
    suctionPipeSize: "1/2-3",
    pipelineSize: "1/2-3"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8001-9000 / 11 - 12",
    suctionPipeSize: "1/2-3",
    pipelineSize: "1/2-3"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8001-9000 / 11 - 12",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8001-9000 / 11 - 12",
    suctionPipeSize: "5",
    pipelineSize: "5"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8001-9000 / 11 - 12",
    suctionPipeSize: "6",
    pipelineSize: "6"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "9001-11000 / 12 - 15",
    suctionPipeSize: "4-8",
    pipelineSize: "4-8"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "11001-13500 / 15 - 18",
    suctionPipeSize: "4-8",
    pipelineSize: "4-8"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "14000-18000 / 19 - 24",
    suctionPipeSize: "4-8",
    pipelineSize: "4-8"
  },
  {
    no: 5,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: ">18000 / >24",
    suctionPipeSize: "4-8",
    pipelineSize: "4-8"
  },
  {
    no: 6,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "1000-2500 / 1 - 3",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 6,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "2501-3500 / 3 - 5",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 6,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "3501-4000 / 5 - 5.5",
    suctionPipeSize: "1/2-3",
    pipelineSize: "1/2-3"
  },
  {
    no: 6,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "4001-4500 / 5.5 - 6",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 6,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "4001-4500 / 5.5 - 6",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 6,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "4501-5000 / 6 - 7",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 6,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "4501-5000 / 6 - 7",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 6,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "5001-6000 / 7 - 8",
    suctionPipeSize: "1/2-4",
    pipelineSize: "1/2-4"
  },
  {
    no: 6,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6001-7000 / 8 - 9",
    suctionPipeSize: "1/2-4",
    pipelineSize: "1/2-4"
  },
  {
    no: 6,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: ">7000 / >9",
    suctionPipeSize: "1/2-4",
    pipelineSize: "1/2-4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "<5500 / <7",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "<5500 / <7",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "<5500 / <7",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "5500-6000 / 7 - 8",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "5500-6000 / 7 - 8",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "5500-6000 / 7 - 8",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6001-6500 / 8 - 9",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6001-6500 / 8 - 9",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6001-6500 / 8 - 9",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6501-7000 / 9 - 9.5",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6501-7000 / 9 - 9.5",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6501-7000 / 9 - 9.5",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "7001-7500 / 9.5 - 10",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "7001-7500 / 9.5 - 10",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "7001-7500 / 9.5 - 10",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "7501-8000 / 10 - 10.5",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "7501-8000 / 10 - 10.5",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "7501-8000 / 10 - 10.5",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8001-8500 / 10.5 - 11",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8001-8500 / 10.5 - 11",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8001-8500 / 10.5 - 11",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8501-9000 / 11 - 12",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8501-9000 / 11 - 12",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8501-9000 / 11 - 12",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8501-9000 / 11 - 12",
    suctionPipeSize: "6",
    pipelineSize: "6"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "6",
    pipelineSize: "6"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "9501-10500 / 13 - 14",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "9501-10500 / 13 - 14",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "9501-10500 / 13 - 14",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "9501-10500 / 13 - 14",
    suctionPipeSize: "6",
    pipelineSize: "6"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "10501-11500 / 14 - 15",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "10501-11500 / 14 - 15",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "10501-11500 / 14 - 15",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "10501-11500 / 14 - 15",
    suctionPipeSize: "6",
    pipelineSize: "6"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: ">11500 / >15",
    suctionPipeSize: "1/2-2",
    pipelineSize: "1/2-2"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: ">11500 / >15",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: ">11500 / >15",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 7,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: ">11500 / >15",
    suctionPipeSize: "6",
    pipelineSize: "6"
  },
  {
    no: 8,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มเจ็ท",
    horsePower: "5000-12000 / 6.5 - 16",
    suctionPipeSize: "1",
    pipelineSize: "1"
  },
  {
    no: 9,
    energySource: "รถไถเดินตาม",
    pumpType: "เทอร์ไบร์",
    horsePower: "<4000 / <5",
    suctionPipeSize: "-",
    pipelineSize: "1/2-4"
  },
  {
    no: 9,
    energySource: "รถไถเดินตาม",
    pumpType: "เทอร์ไบร์",
    horsePower: "4001-5000 / 5 - 7",
    suctionPipeSize: "-",
    pipelineSize: "1/2-4"
  },
  {
    no: 9,
    energySource: "รถไถเดินตาม",
    pumpType: "เทอร์ไบร์",
    horsePower: "5001-6000 / 7 - 8",
    suctionPipeSize: "-",
    pipelineSize: "1/2-4"
  },
  {
    no: 9,
    energySource: "รถไถเดินตาม",
    pumpType: "เทอร์ไบร์",
    horsePower: "6001-7500 / 8 - 10",
    suctionPipeSize: "-",
    pipelineSize: "1/2-4"
  },
  {
    no: 9,
    energySource: "รถไถเดินตาม",
    pumpType: "เทอร์ไบร์",
    horsePower: ">7500 / >10",
    suctionPipeSize: "-",
    pipelineSize: "1/2-4"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "50-100 / 0.05 - 0.1",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-1"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "101-200 / 0.1 - 0.2",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-1"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "201-300 / 0.2 - 0.4",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-1"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "201-300 / 0.2 - 0.4",
    suctionPipeSize: "-",
    pipelineSize: "1 (1/2)-2"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "301-400 / 0.4 - 0.6",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-1"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "301-400 / 0.4 - 0.6",
    suctionPipeSize: "-",
    pipelineSize: "1 (1/2)-2"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "401-500 / 0.6 - 0.7",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "501-700 / 0.7 - 1",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "701-1000 / 1 - 1.5",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "701-1000 / 1 - 1.5",
    suctionPipeSize: "-",
    pipelineSize: "3"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "1001-1200 / 1.5 - 1.7",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "1001-1200 / 1.5 - 1.7",
    suctionPipeSize: "-",
    pipelineSize: "3"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "1201-1400 / 1.7 - 2",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "1401-2000 / 2 - 2.5",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "2001-3000 / 2.5 - 4",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "3001-5000 / 4 -7",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "3001-5000 / 4 -7",
    suctionPipeSize: "-",
    pipelineSize: "4"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "5001-7000 / 7 - 9.5",
    suctionPipeSize: "-",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: "5001-7000 / 7 - 9.5",
    suctionPipeSize: "-",
    pipelineSize: "4"
  },
  {
    no: 10,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่",
    horsePower: ">7000 / >9.5",
    suctionPipeSize: "-",
    pipelineSize: "2-6"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "50-100 / 0.05 - 0.1",
    suctionPipeSize: "(1/2)-1",
    pipelineSize: "(1/2)-1"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "101-200 / 0.1 - 0.3",
    suctionPipeSize: "(1/2)-1",
    pipelineSize: "(1/2)-1"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "101-200 / 0.1 - 0.3",
    suctionPipeSize: "1(1/2)-2",
    pipelineSize: "1(1/2)-2"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "201-300 / 0.3 - 0.4",
    suctionPipeSize: "(1/2)-1",
    pipelineSize: "(1/2)-1"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "201-300 / 0.3 - 0.4",
    suctionPipeSize: "1(1/2)-2",
    pipelineSize: "1(1/2)-2"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "301-400 / 0.4 - 0.5",
    suctionPipeSize: "(1/2)-1",
    pipelineSize: "(1/2)-1"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "301-400 / 0.4 - 0.5",
    suctionPipeSize: "1(1/2)-2",
    pipelineSize: "1(1/2)-2"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "401-500 / 0.5 - 0.7",
    suctionPipeSize: "(1/2)-1",
    pipelineSize: "(1/2)-1"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "401-500 / 0.5 - 0.7",
    suctionPipeSize: "1(1/2)-2",
    pipelineSize: "1(1/2)-2"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "501-700 / 0.7 - 0.9",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: "701-800 / 0.9 - 1",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 11,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม",
    horsePower: ">800 / >1",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "200-400 / 0.2 - 0.5",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "401-600 / 0.5 - 1",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "601-1000 / 1 - 1.5",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "1001-1400 / 1.5 - 2",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "1401-2000 / 2 - 3",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "2001-2500 / 3 - 3.5",
    suctionPipeSize: "(1/2)-1 (1/2)",
    pipelineSize: "(1/2)-1 (1/2)"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "2001-2500 / 3 - 3.5",
    suctionPipeSize: "2",
    pipelineSize: "2"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "2001-2500 / 3 - 3.5",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "2501-3500 / 3.5 - 5",
    suctionPipeSize: "(1/2)-1 (1/2)",
    pipelineSize: "(1/2)-1 (1/2)"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "2501-3500 / 3.5 - 5",
    suctionPipeSize: "2",
    pipelineSize: "2"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "2501-3500 / 3.5 - 5",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "3501-4500 / 5 - 6",
    suctionPipeSize: "(1/2)-1 (1/2)",
    pipelineSize: "(1/2)-1 (1/2)"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "3501-4500 / 5 - 6",
    suctionPipeSize: "2",
    pipelineSize: "2"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "3501-4500 / 5 - 6",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "4501-6000 / 6 - 8",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "4501-6000 / 6 - 8",
    suctionPipeSize: "3",
    pipelineSize: "2 (1/2)"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6001-8000 / 8 - 11",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6001-8000 / 8 - 11",
    suctionPipeSize: "3",
    pipelineSize: "3 (1/2)"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "6001-8000 / 8 - 11",
    suctionPipeSize: "4",
    pipelineSize: "3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "8001-10000 / 11 - 15",
    suctionPipeSize: "(1/2)-3",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "10001-14000 / 15 - 20",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "10001-14000 / 15 - 20",
    suctionPipeSize: "4",
    pipelineSize: "4 (1/2)"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "10001-14000 / 15 - 20",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "14001-17000 / 20 - 23",
    suctionPipeSize: "(1/2)-3",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "14001-17000 / 20 - 23",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "14001-17000 / 20 - 23",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "17001-20000 / 23 - 25",
    suctionPipeSize: "(1/2)-3",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "17001-20000 / 23 - 25",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "17001-20000 / 23 - 25",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "20001-25000 / 25 - 35",
    suctionPipeSize: "(1/2)-3",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "20001-25000 / 25 - 35",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "20001-25000 / 25 - 35",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "30001-35000 / 40 - 47",
    suctionPipeSize: "(1/2)-3",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "30001-35000 / 40 - 47",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "30001-35000 / 40 - 47",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "35001-40000 / 47 - 55",
    suctionPipeSize: "(1/2)-3",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "35001-40000 / 47 - 55",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: "35001-40000 / 47 - 55",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: ">40000 / >55",
    suctionPipeSize: "(1/2)-6",
    pipelineSize: "(1/2)-6"
  },
  {
    no: 12,
    energySource: "ไฟฟ้า",
    pumpType: "ปั๊มหอยโข่ง",
    horsePower: ">40000 / >55",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "1000-4000 / 1 - 5",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "1000-4000 / 1 - 5",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "1000-4000 / 1 - 5",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "1000-4000 / 1 - 5",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4001-5000 / 5 - 7",
    suctionPipeSize: "(1/2)-3",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4001-5000 / 5 - 7",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4001-5000 / 5 - 7",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4001-5000 / 5 - 7",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5001-6000 / 7 - 8",
    suctionPipeSize: "(1/2)-3",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5001-6000 / 7 - 8",
    suctionPipeSize: "4-6",
    pipelineSize: "4-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5001-6000 / 7 - 8",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-7000 / 8 - 9.5",
    suctionPipeSize: "(1/2)-3",
    pipelineSize: "(1/2)-3"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-7000 / 8 - 9.5",
    suctionPipeSize: "4-6",
    pipelineSize: "4-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-7000 / 8 - 9.5",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 8 - 9.5",
    suctionPipeSize: "(1/2)-4",
    pipelineSize: "(1/2)-4"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 11",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 11",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-9000 / 11 - 12",
    suctionPipeSize: "(1/2)-4",
    pipelineSize: "(1/2)-4"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-9000 / 11 - 12",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-9000 / 11 - 12",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-9000 / 11 - 12",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-10000 / 12 - 14",
    suctionPipeSize: "(1/2)-4",
    pipelineSize: "(1/2)-4"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-10000 / 12 - 14",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-10000 / 12 - 14",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-10000 / 12 - 14",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "10001-12000 / 14 - 16",
    suctionPipeSize: "(1/2)-6",
    pipelineSize: "(1/2)-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "10001-12000 / 14 - 16",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "10001-12000 / 14 - 16",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "12001-15000 / 16-20",
    suctionPipeSize: "(1/2)-6",
    pipelineSize: "(1/2)-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "12001-15000 / 16 - 20",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "12001-15000 / 16 - 20",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "15001-20000 / 20 - 25",
    suctionPipeSize: "(1/2)-6",
    pipelineSize: "(1/2)-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "15001-20000 / 20 - 25",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "15001-20000 / 20 - 25",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "20001-30000 / 25 - 40",
    suctionPipeSize: "(1/2)-6",
    pipelineSize: "(1/2)-6"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "30001-40000 / 40 - 55",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "30001-40000 / 40 - 55",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "30001-40000 / 40 - 55",
    suctionPipeSize: "11-12",
    pipelineSize: "11-12"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "40001-50000 / 55 - 70",
    suctionPipeSize: "(1/2)-8",
    pipelineSize: "(1/2)-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "40001-50000 / 55 - 70",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "40001-50000 / 55 - 70",
    suctionPipeSize: "11-12",
    pipelineSize: "11-12"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "50001-60000 / 70 - 80",
    suctionPipeSize: "(1/2)-10",
    pipelineSize: "(1/2)-8"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "60001-80000 / 80 - 105",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "80001-110000 / 105 -150",
    suctionPipeSize: "11-12",
    pipelineSize: "11-12"
  },
  {
    no: 13,
    energySource: "น้ำมันดีเซล",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">110000  / >150",
    suctionPipeSize: "6-12",
    pipelineSize: "6-12"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "2000-4000 / 2.5 - 5.5",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4001-4500 / 5.5 - 6",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4001-4500 / 5.5 - 6",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4001-4500 / 5.5 - 6",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4001-4500 / 5.5 - 6",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4501-5000 / 6 - 6.5",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4501-5000 / 6 - 6.5",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4501-5000 / 6 - 6.5",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "4501-5000 / 6 - 6.5",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5001-6000 / 6.5 - 8",
    suctionPipeSize: "(1/2)-4",
    pipelineSize: "(1/2)-4"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5001-6000 / 6.5 - 8",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5001-6000 / 6.5 - 8",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-7000 / 8 - 9.5",
    suctionPipeSize: "(1/2)-4",
    pipelineSize: "(1/2)-4"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-7000 / 8 - 9.5",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-7000 / 8 - 9.5",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 10.5",
    suctionPipeSize: "(1/2)-4",
    pipelineSize: "(1/2)-4"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 10.5",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 10.5",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-10000 / 10.5 - 13",
    suctionPipeSize: "(1/2)-4",
    pipelineSize: "(1/2)-4"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-10000 / 10.5 - 13",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-10000 / 10.5 - 13",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-10000 / 10.5 - 13",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">10000 / >13",
    suctionPipeSize: "(1/2)-6",
    pipelineSize: "(1/2)-6"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">10000 / >13",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">10000 / >13",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 14,
    energySource: "น้ำมันเบนซิน",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">10000 / >13",
    suctionPipeSize: "11-12",
    pipelineSize: "11-12"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "<5500 / <7",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "<5500 / <7",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "<5500 / <7",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "<5500 / <7",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "<5500 / <7",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "<5500 / <7",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5500-6000 / 7 - 8",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5500-6000 / 7 - 8",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5500-6000 / 7 - 8",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5500-6000 / 7 - 8",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5500-6000 / 7 - 8",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "5500-6000 / 7 - 8",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-6500 / 8 - 9",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-6500 / 8 - 9",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-6500 / 8 - 9",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-6500 / 8 - 9",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-6500 / 8 - 9",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6001-6500 / 8 - 9",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6501-7000 /  9 - 9.5",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6501-7000 /  9 - 9.5",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6501-7000 /  9 - 9.5",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6501-7000 /  9 - 9.5",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6501-7000 /  9 - 9.5",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "6501-7000 /  9 - 9.5",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 11",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 11",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 11",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 11",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 11",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "7001-8000 / 9.5 - 11",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-8500 / 11 - 11.5",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-8500 / 11 - 11.5",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-8500 / 11 - 11.5",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-8500 / 11 - 11.5",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-8500 / 11 - 11.5",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8001-8500 / 11 - 11.5",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8501-9000 / 11.5 - 12",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8501-9000 / 11.5 - 12",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8501-9000 / 11.5 - 12",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8501-9000 / 11.5 - 12",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8501-9000 / 11.5 - 12",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8501-9000 / 11.5 - 12",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "8501-9000 / 11.5 - 12",
    suctionPipeSize: "11-12",
    pipelineSize: "11-12"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9001-9500 / 12 - 13",
    suctionPipeSize: "11-12",
    pipelineSize: "11-12"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9501-11000 / 13 - 15",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9501-11000 / 13 - 15",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9501-11000 / 13 - 15",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9501-11000 / 13 - 15",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9501-11000 / 13 - 15",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9501-11000 / 13 - 15",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "9501-11000 / 13 - 15",
    suctionPipeSize: "11-12",
    pipelineSize: "11-12"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "11001-12000 / 15 - 16",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "11001-12000 / 15 - 16",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "11001-12000 / 15 - 16",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "11001-12000 / 15 - 16",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "11001-12000 / 15 - 16",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "11001-12000 / 15 - 16",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: "11001-12000 / 15 - 16",
    suctionPipeSize: "11-12",
    pipelineSize: "11-12"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">12000 / >16",
    suctionPipeSize: "(1/2)-2",
    pipelineSize: "(1/2)-2"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">12000 / >16",
    suctionPipeSize: "3",
    pipelineSize: "3"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">12000 / >16",
    suctionPipeSize: "4",
    pipelineSize: "4"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">12000 / >16",
    suctionPipeSize: "5-6",
    pipelineSize: "5-6"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">12000 / >16",
    suctionPipeSize: "7-8",
    pipelineSize: "7-8"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">12000 / >16",
    suctionPipeSize: "9-10",
    pipelineSize: "9-10"
  },
  {
    no: 15,
    energySource: "รถไถเดินตาม",
    pumpType: "ปั๊มหอยโข่ง/ปั๊มพญานาค",
    horsePower: ">12000 / >16",
    suctionPipeSize: "11-12",
    pipelineSize: "11-12"
  }
]
