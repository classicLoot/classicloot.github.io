import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import { wotlkDungeons } from '../app/features/dungeons/data/wotlk';
import { dungeon } from '../app/shared/interfaces/dungeons';


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

// --------------
const perSecond = 1;
export const delay = 1000 / perSecond;

export const XML_CONFIG = { compact: true };
// --------------

const IDArray = Array.from(IDSet.values());

export const ItemIDArray: number[] = IDArray;

console.log('to scrape: ' + IDArray.length);

// -------------


function checkFSIcon(icon: string) {
    const itemPath = path.join(__dirname, '../assets/icons/', icon + '.gif');
    const bExist = fs.existsSync(itemPath);
    return bExist;
}

function writeFSIcon(icon: string) {
    const itemPath = path.join(__dirname, '../assets/icons/', icon + '.gif');
    fs.writeFileSync(itemPath, JSON.stringify(icon));
}




async function fetchIcons(icons: string[], size: string) {
    for (const icon of icons) {
        const response = await fetch(`https://wotlkdb.com/static/images/wow/icons/${size}/${icon}.jpg`);

    }
}

fetchIcons(['spell_holy_summonchampion'], 'large')