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
    weapons: number[],
    misc: number[],
}