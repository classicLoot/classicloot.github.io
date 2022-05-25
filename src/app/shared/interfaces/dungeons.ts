export interface dungeon {
    name: string,
    url: string,
    descr: string,
    levelMin: number,
    levelMax: number,
    bosses: dungeonBoss[]
}

export interface dungeonBoss {
    name: string,
    descr?: string,
    loot: number[]
}