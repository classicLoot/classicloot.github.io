import { wotlkDungeons } from '../app/features/dungeons/data/wotlk';
import { dungeon } from '../app/shared/interfaces/dungeons';

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
export const ItemIDArray: number[] = Array.from(IDSet.values());