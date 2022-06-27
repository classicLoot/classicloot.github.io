export interface wowItem {
    id: number,
    name: string,
    quality: number,
    icon: string,
    htmlTooltip: string,
    link: string,
    ilvl: number,
    wowClass: number,
    wowSubClass: number,
    slot: number,
    createdBy?: wowReagent[]
}

export interface wowReagent {
    id: number,
    name: string,
    quality?: number,
    icon: string,
    count?: number,
    minCount?: number,
    maxCount?: number
}