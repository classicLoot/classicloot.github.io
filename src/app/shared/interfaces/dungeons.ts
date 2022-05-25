export interface dungeon {
    name: string,
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