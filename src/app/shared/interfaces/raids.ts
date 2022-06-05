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
}

