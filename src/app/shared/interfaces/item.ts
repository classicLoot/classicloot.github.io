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
    createdBy?: wowCraftingSpell[]
}

export interface wowReagent {
    id: number,
    name: string,
    quality?: number,
    icon: string,
    count?: number,
}

export interface wowCraftingSpell {
    id: number,
    name: string,
    icon: string,
    minCount?: number,
    maxCount?: number,
    reagents?: wowReagent[],
    tools?: wowReagent[]
}