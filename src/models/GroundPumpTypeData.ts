export interface GroundWaterPumpType {
    codePowerSource: string;
    codePumpType: string;
    name: string;
}

export const groundWaterPumpTypeData: GroundWaterPumpType[] = [
    { codePowerSource: '1', codePumpType: 'N1P1', name: 'ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม' },
    { codePowerSource: '1', codePumpType: 'N1P2', name: 'ปั๊มเจ็ท/ ปั๊มน้ำอัตโนมัติสำหรับดูดน้ำลึก' },
    { codePowerSource: '1', codePumpType: 'N1P3', name: 'ปั๊มหอยโข่ง' },
    { codePowerSource: '1', codePumpType: 'N1P4', name: 'ปั๊มชัก' },
    { codePowerSource: '2', codePumpType: 'N2P1', name: 'ปั๊มหอยโข่ง' },
    { codePowerSource: '3', codePumpType: 'N3P1', name: 'ปั๊มหอยโข่ง' },
    { codePowerSource: '4', codePumpType: 'N4P1', name: 'ปั๊มหอยโข่ง' },
    { codePowerSource: '4', codePumpType: 'N4P2', name: 'ปั๊มเจ็ท' },
    { codePowerSource: '4', codePumpType: 'N4P3', name: 'เทอร์ไบร์' },
]