import { wotlkDungeons } from '../app/features/dungeons/data/wotlk';
import { dungeon } from '../app/shared/interfaces/dungeons';
import { wowRaid } from '../app/shared/interfaces/raids';
import { readFromDirAs } from './helper';


// --------------
const perSecond = 1;
export const delay = 1000 / perSecond;

export const XML_CONFIG = { compact: true };
// --------------


// get IDs
const IDSet = new Set<number>();

const dungeons: dungeon[] = wotlkDungeons;

dungeons.forEach(dng => {
    dng.bosses.forEach(boss => {
        boss.loot.forEach(loot => {
            IDSet.add(loot);
        })
    })
})

const raids: wowRaid[] = readFromDirAs<wowRaid>('../assets/data/raids/wotlk');

raids.forEach(raid => {
    raid.bosses.forEach(boss => {
        boss.loot.forEach(loot => {
            IDSet.add(loot);
        })
        boss.lootHeroic.forEach(loot => {
            IDSet.add(loot);
        })
    })
})

export const ItemIDArray: number[] = Array.from(IDSet.values());