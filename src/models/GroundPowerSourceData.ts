export interface GroundWaterPowerSource {
    codePowerSource: string;
    name: string;
}

export const groundWaterPowerSourceData: GroundWaterPowerSource[] = [
    { codePowerSource: 'N1', name: 'ไฟฟ้า' },
    { codePowerSource: 'N2', name: 'น้ำมันดีเซล' },
    { codePowerSource: 'N3', name: 'น้ำมันเบนซิน' },
    { codePowerSource: 'N4', name: 'รถไถเดินตาม' },
]