import { wowBossType } from "./instance";
import { wowItem } from "./item";
// e.g. Emblems
export interface wowCollection {
    name: string,
    link?: string,
    meta?: wowCollectionMeta,
    subCollections?: wowSubCollection[],

    descr?: string,
    type?: wowBossType,
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
// e.g. Emblem of Heroism
export interface wowSubCollection {
    name: string,
    groups?: wowSubCollectionGroup[],
    hardmode?: { id: number, filter: string }[],
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