export interface surfacePumpType {
    codePowerSource: string;
    codePumpType: string;
    name: string;
}

export const surfacePumpTypeData: surfacePumpType[] = [
    { codePowerSource: 'N1', codePumpType: 'N1P1', name: 'ปั๊มไดโว่/ปั๊มจุ่ม/ปั๊มแช่' },
    { codePowerSource: 'N1', codePumpType: 'N1P2', name: 'ปั๊มน้ำอัตโนมัติ ถังกลม/ ถังเหลี่ยม' },
    { codePowerSource: 'N1', codePumpType: 'N1P3', name: 'ปั๊มหอยโข่ง' },
    { codePowerSource: 'N2', codePumpType: 'N2P1', name: 'ปั๊มหอยโข่ง/ปั๊มพญานาค' },
    { codePowerSource: 'N3', codePumpType: 'N3P1', name: 'ปั๊มหอยโข่ง/ปั๊มพญานาค' },
    { codePowerSource: 'N4', codePumpType: 'N4P1', name: 'ปั๊มหอยโข่ง/ปั๊มพญานาค' },
]