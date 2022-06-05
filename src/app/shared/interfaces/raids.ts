export interface raid {
    name: string,
    url: string,
    descr: string,
    size: 10 | 25 | 40,
    type: 'A' | 'B' | 'C',
    bosses: raidBoss[]
}

export interface raidBoss {
    name: string,
    descr?: string,
    loot: number[],
    lootHeroic: number[],
}

