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
    type?: wowBossType,
    bosses?: wowInstanceBoss[],
    bossLinks?: wowInstanceBossLink[]
}

export type wowBossType = 'A' | 'B' | 'C' | 'D' | 'DD';

export interface wowInstanceBoss {
    name: string,
    descr?: string,

    loot?: number[],
    lootHeroic?: number[],
    sortedLoot?: wowInstanceLootSorted,
    sortedLootHeroic?: wowInstanceLootSorted,
    sortedLootItems?: wowInstanceLootSortedItems,
    sortedLootHeroicItems?: wowInstanceLootSortedItems

    lootHorde?: number[],
    lootHeroicHorde?: number[],
    sortedLootHorde?: wowInstanceLootSorted,
    sortedLootHeroicHorde?: wowInstanceLootSorted,
    sortedLootItemsHorde?: wowInstanceLootSortedItems,
    sortedLootHeroicItemsHorde?: wowInstanceLootSortedItems

    hardmode?: wowInstanceHardmode[],
    hardmodeLoot?: number[]
}

export interface wowInstanceBossLink {
    name: string,
    link: string
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

export interface wowInstanceHardmode {
    name: string,
    descr?: string,
    icon?: string,
    id?: number
}