import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import xml from 'xml-js';
import { wotlkDungeons } from '../../app/features/dungeons/data/wotlk';
import { wowInstance } from '../../app/shared/interfaces/instance';
import { wowItem } from '../../app/shared/interfaces/item';
import { readFilesFromDirAs, readIDsAsItems } from '../helper';
import { XML_CONFIG } from './../scraper';


async function testFetchFunction(testArray: number[]) {
    for (const id of testArray) {
        const response = await fetch(`https://wotlkdb.com/?item=${id}&xml`);
        /* https://db.rising-gods.de/
            const response = await fetch(`https://db.rising-gods.de/?item=${id}&xml`);
        */
        const body = await response.text();

        try {
            const jsonStr = xml.xml2json(body, XML_CONFIG);
            const itemJS = JSON.parse(jsonStr)["aowow"]["item"];
            console.log(itemJS)
            const item: wowItem = {
                id: itemJS["_attributes"]["id"],
                name: itemJS["name"]["_cdata"],
                quality: itemJS["quality"]["_attributes"]["id"],
                icon: itemJS["icon"]["_text"],
                htmlTooltip: itemJS["htmlTooltip"]["_cdata"],
                link: itemJS["link"]["_text"],

                ilvl: itemJS["level"]["_text"],
                wowClass: itemJS["class"]["_attributes"]["id"],
                wowSubClass: itemJS["subclass"]["_attributes"]["id"],
                slot: itemJS["inventorySlot"]["_attributes"]["id"],
            }


            //console.log(item.id, item.name, item.icon);
        } catch (error) {
            console.log('ERROR: ' + id)
        }
    }


}
//await testFetchFunction([43345]);


const testArray = [43345, 40453];
const items = readFilesFromDirAs<wowItem>('../assets/items/', testArray.map(id => String(id)), '.json');
//console.log(items);

//console.log(readIDsAsItems(testArray));



function copyOverDungeons() {
    const dung = wotlkDungeons;

    dung.forEach(d => {
        let newD: wowInstance = {
            ...d,
            size: 5
        }

        const itemPath = path.join(__dirname, '../../assets/data/manual/dungeons/wotlk/', String(newD.link) + '.json');
        fs.writeFileSync(itemPath, JSON.stringify(newD));
    })
}

//copyOverDungeons();

