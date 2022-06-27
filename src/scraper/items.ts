import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import xml from 'xml-js';
import { wowItem, wowReagent } from '../app/shared/interfaces/item';
import { delay, XML_CONFIG } from './scraper';
import progress from 'cli-progress';

function checkFSItem(id: number) {
    const itemPath = path.join(__dirname, '../assets/items/', String(id) + '.json');
    const bExist = fs.existsSync(itemPath);
    return bExist;
}

function writeFSItem(item: wowItem) {
    const itemPath = path.join(__dirname, '../assets/items/', String(item.id) + '.json');
    fs.writeFileSync(itemPath, JSON.stringify(item));
}

export async function fetchIDS(ids: number[]) {
    console.log(`**FETCH IDS: ${ids.length}**`);

    const existsArr: number[] = [];
    const errorArr: number[] = [];
    const updatedArr: number[] = [];

    const idsToUpdate: number[] = [];


    for (const id of ids) {
        if (checkFSItem(id)) {
            existsArr.push(id);
        }
        else {
            idsToUpdate.push(id)
        }
    }

    // PROGRESS
    const bar1 = new progress.SingleBar({}, progress.Presets.shades_classic);
    bar1.start(ids.length, existsArr.length);
    //

    for (const id of idsToUpdate) {
        const response = await fetch(`https://wotlkdb.com/?item=${id}&xml`);
        /* https://db.rising-gods.de/
            const response = await fetch(`https://db.rising-gods.de/?item=${id}&xml`);
        */
        const body = await response.text();

        try {
            const jsonStr = xml.xml2json(body, XML_CONFIG);
            const itemJS = JSON.parse(jsonStr)["aowow"]["item"];

            let createdBy: wowReagent[] = [];
            if (itemJS["createdBy"]) {
                let spell: wowReagent = itemJS["createdBy"]["spell"]["_attributes"]
                spell = {
                    ...spell,
                    id: Number(spell.id),
                    minCount: Number(spell.minCount),
                    maxCount: Number(spell.maxCount),
                };
                const reagents: wowReagent[] = itemJS["createdBy"]["spell"]["reagent"].map((raw: { [x: string]: any; }) => {
                    const inner = raw["_attributes"];
                    return {
                        id: Number(inner["id"]),
                        name: inner["name"],
                        icon: inner["icon"],
                        quality: Number(inner["quality"]),
                        count: Number(inner["count"]),
                    } as wowReagent
                });

                createdBy = [spell, ...reagents];
            }

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


                createdBy: createdBy
            }

            if (createdBy.length < 1) {
                delete item.createdBy;
            }

            writeFSItem(item);

            updatedArr.push(id);
            bar1.increment();
            //console.log(item.id, item.name, item.icon);
        } catch (error) {
            console.log('ERROR: ' + id)
            errorArr.push(id);
            bar1.increment();

        }


        await new Promise(f => setTimeout(f, delay));
    }
    bar1.stop();

    console.log('**FINISHED**');
    console.log('Total ', ids.length);
    console.log('updated ', updatedArr.length);
    console.log('exists ', existsArr.length);
    console.log('error ', errorArr.length);
}