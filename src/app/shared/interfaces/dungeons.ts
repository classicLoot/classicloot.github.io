export interface dungeon {
    name: string,
    link: string,
    descr: string,
    levelMin: number,
    levelMax: number,
    levelEnter: number,
    ilvlMin: number,
    ilvlMax: number,
    phase: number,
    bosses: dungeonBoss[]
}

export interface dungeonBoss {
    name: string,
    descr?: string,
    loot: number[],
    lootHeroic: number[]
}