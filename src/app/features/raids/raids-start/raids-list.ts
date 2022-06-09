export interface wowRaidListItem {
    name: string,
    link: string,
    size: 10 | 25 | 40,
    phase: number,
    ilvlMin: number,
    ilvlMax: number,
    tier: string
}

const emptyItem: wowRaidListItem = {
    name: 'Naxx10',
    link: 'Naxx10',
    size: 10,
    phase: 1,
    ilvlMin: 200,
    ilvlMax: 226,
    tier: 'Tier 7'
}

export const wotlkRaids: wowRaidListItem[] = [
    {
        name: 'Naxxramas',
        link: 'Naxx10',
        size: 10,
        phase: 1,
        ilvlMin: 200,
        ilvlMax: 213,
        tier: 'Tier 7'
    },
    {
        name: 'Naxxramas',
        link: 'Naxx25',
        size: 25,
        phase: 1,
        ilvlMin: 213,
        ilvlMax: 226,
        tier: 'Tier 7'
    },
    {
        name: 'The Eye of Eternity',
        link: 'TheEyeOfEternity10',
        size: 10,
        phase: 1,
        ilvlMin: 213,
        ilvlMax: 213,
        tier: 'Tier 7'
    },
    {
        name: 'The Eye of Eternity',
        link: 'TheEyeOfEternity25',
        size: 25,
        phase: 1,
        ilvlMin: 226,
        ilvlMax: 226,
        tier: 'Tier 7'
    }
    ,
    {
        name: 'Obsidian Sanctum',
        link: 'ObsidianSanctum10',
        size: 10,
        phase: 1,
        ilvlMin: 200,
        ilvlMax: 213,
        tier: 'Tier 7'
    },
    {
        name: 'Obsidian Sanctum',
        link: 'ObsidianSanctum25',
        size: 25,
        phase: 1,
        ilvlMin: 213,
        ilvlMax: 226,
        tier: 'Tier 7'
    },
    {
        name: 'Ulduar',
        link: 'Ulduar10',
        size: 10,
        phase: 2,
        ilvlMin: 219,
        ilvlMax: 232,
        tier: 'Tier 8'
    },
    {
        name: 'Ulduar',
        link: 'Ulduar25',
        size: 25,
        phase: 2,
        ilvlMin: 226,
        ilvlMax: 239,
        tier: 'Tier 8'
    }
];