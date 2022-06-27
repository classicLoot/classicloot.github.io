import { wowBossType } from "./instance";
import { wowItem } from "./item";
// e.g. Emblems
export interface wowCollection {
    name: string,
    link?: string,
    descr?: string,
    type?: wowBossType,
    subCollections?: wowSubCollection[],
    subLinks?: wowCollectionSubLink[]
}
// e.g. Emblem of Heroism
export interface wowSubCollection {
    name: string,
    descr?: string,
    ids?: number[],
    itemData?: wowItem[],
    groups?: wowSubCollectionGroup[],
    left?: wowSubCollectionGroup[],
    mid?: wowSubCollectionGroup[],
    right?: wowSubCollectionGroup[],
    groupBy?: string
}

export interface wowSubCollectionGroup {
    name?: string,
    descr?: string,
    ids?: number[],
    itemData?: wowItem[],
    sortBy?: string,
    pos?: 'left' | 'mid' | 'right',
    filter?: string
}

export interface wowCollectionSubLink {
    name: string,
    link: string
}

export type wowCollectionType = 'collections' | 'reputation' | 'crafting';