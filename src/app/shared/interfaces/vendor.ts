export interface wowVendorInfo {
    name?: string,
    id: number,
    dataArray: wowVendorInfoData[]
}

export interface wowVendorInfoData {
    count: number,
    ids: number[]
}