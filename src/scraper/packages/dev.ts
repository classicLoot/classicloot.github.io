import fetch from 'node-fetch';
import xml from 'xml-js';
import { wowItem } from '../../app/shared/interfaces/item';
import { XML_CONFIG } from './../scraper';


const testArray = [43345];

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

