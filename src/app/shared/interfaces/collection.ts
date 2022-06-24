import { wowItem } from "./item";
// e.g. Emblems
export interface wowCollection {
    name: string,
    link?: string,
    descr?: string,
    subCollections?: wowSubCollection[],
    subLinks?: wowCollectionSubLink[]
}
// e.g. Emblem of Heroism
export interface wowSubCollection {
    name: string,
    descr?: string,
    prefixes?: string[],
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
}

export interface wowCollectionSubLink {
    name: string,
    link: string
}

export type wowCollectionType = 'collections';