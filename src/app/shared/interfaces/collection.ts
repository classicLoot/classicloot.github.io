import { wowItem } from "./item";

export interface wowCollection {
    name: string,
    link?: string,
    descr?: string,
    subCollections?: wowSubCollection[],
    subLinks?: wowCollectionSubLink[]
}

export interface wowSubCollection {
    name: string,
    descr?: string,
    prefixes?: string[],
    ids?: number[],
    itemData?: wowItem[]
}

export interface wowCollectionSubLink {
    name: string,
    link: string
}

export type wowCollectionType = 'collections';