console.log('SCRAPERS')

import fetch from 'node-fetch';
import xml from 'xml-js';

import { wowItem } from '../app/shared/interfaces/item';

import { dungeon } from '../app/shared/interfaces/dungeons'
import { wotlkDungeons } from '../app/features/dungeons/data/wotlk';

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
const delay = 1000 / perSecond;

const XML_CONFIG = { compact: true };
// --------------

const IDArray = Array.from(IDSet.values());

console.log('to scrape: ' + IDArray.length);
for (const id of IDArray) {

}

async function fetchIDS(ids: number[]) {
    for (const id of ids) {
        const response = await fetch(`https://wotlkdb.com/?item=${id}&xml`);
        // https://db.rising-gods.de/
        //const response = await fetch(`https://db.rising-gods.de/?item=${id}&xml`);

        const body = await response.text();


        try {
            const jsonStr = xml.xml2json(body, XML_CONFIG);
            const itemJS = JSON.parse(jsonStr)["aowow"]["item"];

            const item: wowItem = {
                id: itemJS["_attributes"]["id"],
                name: itemJS["name"]["_cdata"],
                quality: itemJS["quality"]["_attributes"]["id"],
                icon: itemJS["icon"]["_text"],
                htmlTooltip: itemJS["htmlTooltip"]["_cdata"],
                link: itemJS["link"]["_text"]
            }
            console.log(item.id, item.name, item.icon);
        } catch (error) {
            console.log('ERROR: ' + id)
        }


        await new Promise(f => setTimeout(f, delay));
    }
}

fetchIDS(IDArray.slice(0, 25))