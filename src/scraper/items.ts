import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import xml from 'xml-js';
import { wowItem } from '../app/shared/interfaces/item';
import { delay, XML_CONFIG, ItemIDArray } from './scraper';


function checkFSItem(id: number) {
    const itemPath = path.join(__dirname, '../assets/items/', String(id) + '.json');
    const bExist = fs.existsSync(itemPath);
    return bExist;
}

function writeFSItem(item: wowItem) {
    const itemPath = path.join(__dirname, '../assets/items/', String(item.id) + '.json');
    fs.writeFileSync(itemPath, JSON.stringify(item));
}

async function fetchIDS(ids: number[]) {
    for (const id of ids) {

        if (checkFSItem(id)) {
            console.log(id, 'exists')
            continue;
        }

        const response = await fetch(`https://wotlkdb.com/?item=${id}&xml`);
        /* https://db.rising-gods.de/
            const response = await fetch(`https://db.rising-gods.de/?item=${id}&xml`);
        */
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
            writeFSItem(item);
            //console.log(item.id, item.name, item.icon);
        } catch (error) {
            console.log('ERROR: ' + id)
        }


        await new Promise(f => setTimeout(f, delay));
    }
}

fetchIDS(ItemIDArray);