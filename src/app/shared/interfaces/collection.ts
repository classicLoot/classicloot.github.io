import { wowAchievement } from "./achievement";
import { wowItem } from "./item";

export interface wowHardmode {
    id: number, filter: string, data?: wowAchievement
}
// e.g. Emblems
export interface wowCollection {
    name: string,
    link?: string,
    meta?: wowCollectionMeta,
    subCollections?: wowSubCollection[],
    quests?: wowQuest[],

    descr?: string,
    type?: string,
    subLinks?: wowCollectionSubLink[]
}

export interface wowCollectionMeta {
    descr?: string,
    levelMin?: number,
    levelMax?: number,
    levelEnter?: number,
    ilvlMin?: number,
    ilvlMax?: number,
    tier?: string,
    phase?: number
}

// Quests
export interface wowQuest {
    id: number,
    faction?: 'Alliance' | 'Horde' | 'Both',
    preQuests?: number[],
    rewards?: number[],

    link?: string,
    name?: string,
    tooltip?: string,
    sharable?: boolean,
    rewardData?: wowItem[],
    preQuestData?: wowQuest[]
}

// e.g. Emblem of Heroism
export interface wowSubCollection {
    name: string,
    groups?: wowSubCollectionGroup[],
    hardmode?: wowHardmode[],
    hardmodeLoot?: number[],

    descr?: string,
    ids?: number[],
    itemData?: wowItem[],
    left?: wowSubCollectionGroup[],
    mid?: wowSubCollectionGroup[],
    right?: wowSubCollectionGroup[],
    groupBy?: string
}

export interface wowSubCollectionGroup {
    name?: string,
    ids?: number[],
    sortBy?: string,
    pos?: 'left' | 'mid' | 'right',
    groupBy?: string,
    filter?: string
    itemData?: wowItem[],

    descr?: string,
}

export interface wowCollectionSubLink {
    name: string,
    link: string
}

export type wowCollectionType = 'collections' | 'reputation' | 'crafting';