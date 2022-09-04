// Meta
export interface wowMetaData {
    links: wowMetaDataCat[]
}

export interface wowMetaDataCat {
    name: string,
    links: wowMetaDataLink[]
}

export interface wowMetaDataLink {
    name: string,
    link: string,
    meta?: wowCollectionMeta
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