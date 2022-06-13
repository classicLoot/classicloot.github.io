export interface wowAchievement {
    id: number,
    instanceID: number,
    faction: number,
    supercedes: number,
    name: string,
    descr: string,
    category: number,
    points: number,
    iconID: number,
    reward: string,

    iconName?: string,
    tooltip?: string
}

export interface wowAchievementPower {
    name_enus: string,
    icon: string,
    tooltip_enus: string
}