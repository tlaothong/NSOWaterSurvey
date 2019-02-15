export interface GroundWaterPowerSource {
    codePowerSource: string;
    name: string;
}

export const groundWaterPowerSourceData: GroundWaterPowerSource[] = [
    { codePowerSource: '1', name: 'ไฟฟ้า' },
    { codePowerSource: '2', name: 'น้ำมันดีเซล' },
    { codePowerSource: '3', name: 'น้ำมันเบนซิน' },
    { codePowerSource: '4', name: 'รถไถเดินตาม' },
]