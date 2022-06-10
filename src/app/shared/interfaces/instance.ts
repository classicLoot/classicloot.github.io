import { wowItem } from "./item"

export interface wowInstance {
    name: string,
    link: string,
    descr?: string,
    levelMin?: number,
    levelMax?: number,
    levelEnter?: number,
    ilvlMin?: number,
    ilvlMax?: number,
    tier?: string,
    phase: number,
    size: 5 | 10 | 25 | 40,
    type?: 'A' | 'B' | 'C',
    bosses?: wowInstanceBoss[]
}

export interface wowInstanceBoss {
    name: string,
    descr?: string,
    loot?: number[],
    lootHeroic?: number[],
    sortedLoot?: wowInstanceLootSorted,
    sortedLootHeroic?: wowInstanceLootSorted,
    sortedLootItems?: wowInstanceLootSortedItems,
    sortedLootHeroicItems?: wowInstanceLootSortedItems
}

export interface wowInstanceLootSorted {
    armor: number[],
    jewelry: number[],
    weapons: number[],
    misc: number[],
    tokens: number[]
}

export interface wowInstanceLootSortedItems {
    armor: wowItem[],
    jewelry: wowItem[],
    weapons: wowItem[],
    misc: wowItem[],
    tokens: wowItem[]
}