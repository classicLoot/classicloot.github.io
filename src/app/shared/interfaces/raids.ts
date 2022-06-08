import { wowItem } from "./item"

export interface wowRaid {
    name: string,
    url: string,
    descr: string,
    size: 10 | 25 | 40,
    type: 'A' | 'B' | 'C',
    bosses: wowRaidBoss[]
}

export interface wowRaidBoss {
    name: string,
    descr?: string,
    loot: number[],
    lootHeroic: number[],
    sortedLoot?: wowRaidLootSorted,
    sortedLootHeroic?: wowRaidLootSorted
}

export interface wowRaidLootSorted {
    armor: number[],
    jewelry: number[],
    weapons: number[],
    misc: number[],
    tokens: number[]
}

export interface wowRaidLootSortedItems {
    armor: wowItem[],
    jewelry: wowItem[],
    weapons: wowItem[],
    misc: wowItem[],
    tokens: wowItem[]
}

export interface wowRaidBossLazy {
    name: string,
    descr?: string,
    sortedLoot?: wowRaidLootSortedItems,
    sortedLootHeroic?: wowRaidLootSortedItems
}

export interface wowRaidLazy {
    name: string,
    url: string,
    descr: string,
    size: 10 | 25 | 40,
    type: 'A' | 'B' | 'C',
    bosses: string[]
}