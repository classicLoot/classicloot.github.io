import { dungeon } from "src/app/shared/interfaces/dungeons";

const defaultDungeon: dungeon = {
    name: 'name',
    url: 'name',
    descr: 'descr',
    levelMin: 69,
    levelMax: 72,
    bosses: []
}

export const wotlkDungeons: dungeon[] = [
    {
        name: 'Utgarde Keep',
        url: 'UtgardeKeep',
        descr: '',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            {
                name: 'Keleseth',
                loot: [35572, 35571, 35570, 47241, 37180, 37178, 37179, 37177]
            },
            {
                name: 'Skarvald',
                loot: [35575, 35574, 35573, 47241, 37183, 37184, 37182, 37181]
            },
            {
                name: 'Ingvar',
                loot: [35577, 35578, 35576, 33330, 47241, 37194, 37193, 37192, 37191, 37189, 37188, 37186, 37190, 41793, 43102]
            },
            {
                name: 'Trash',
                loot: [35580, 35579, 37197, 37196]
            },
        ]
    },
    {
        name: 'The Nexus',
        url: 'TheNexus',
        descr: '',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            {
                name: 'Ormorok',
                loot: [35602, 35603, 35601, 47241, 37153, 37155, 37152, 37151]
            },
            {
                name: 'Anomalus',
                loot: [35599, 35600, 35598, 47241, 37149, 37144, 37150, 37141]
            },
            {
                name: 'Telestra',
                loot: [35605, 35604, 35617, 21524, 47241, 37139, 37138, 37135, 37134, 21524]
            },
            {
                name: 'KolurgStoutbeardHEROIC',
                loot: [47241, 37728, 37731, 37730, 37729]
            },
            {
                name: 'Keristrasza',
                loot: [35596, 35595, 35597, 47241, 37172, 37170, 37171, 37169, 37165, 37167, 37166, 37162, 41794, 43102]
            },
        ]
    },
]