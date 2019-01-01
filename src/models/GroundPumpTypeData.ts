export interface GroundWaterPumpType {
    codePowerSource: string;
    codePumpType: string;
    name: string;
}

export const groundWaterPumpTypeData: GroundWaterPumpType[] = [
    { codePowerSource: 'N1', codePumpType: 'N1P1', name: 'ปั๊มซับเมิร์ส/ปั๊มแบบจุ่ม' },
    { codePowerSource: 'N1', codePumpType: 'N1P2', name: 'ปั๊มเจ็ท/ ปั๊มน้ำอัตโนมัติสำหรับดูดน้ำลึก' },
    { codePowerSource: 'N1', codePumpType: 'N1P3', name: 'ปั๊มหอยโข่ง' },
    { codePowerSource: 'N1', codePumpType: 'N1P4', name: 'ปั๊มชัก' },
    { codePowerSource: 'N2', codePumpType: 'N2P1', name: 'ปั๊มหอยโข่ง' },
    { codePowerSource: 'N3', codePumpType: 'N3P1', name: 'ปั๊มหอยโข่ง' },
    { codePowerSource: 'N4', codePumpType: 'N4P1', name: 'ปั๊มหอยโข่ง' },
    { codePowerSource: 'N4', codePumpType: 'N4P2', name: 'ปั๊มเจ็ท' },
    { codePowerSource: 'N4', codePumpType: 'N4P3', name: 'เทอร์ไบร์' },
]