import fetch from 'node-fetch';
import xml from 'xml-js';
import { wowItem, wowReagent } from '../../app/shared/interfaces/item';
import { readFilesFromDirAs } from '../helper';
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
            //console.log(itemJS)

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


            //console.log(createdBy)

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
            console.log(item)

            //console.log(item.id, item.name, item.icon);
        } catch (error) {
            console.log('ERROR: ' + id)
        }
    }


}
await testFetchFunction([44330, 39619]);


const testArray = [43345, 40453];
const items = readFilesFromDirAs<wowItem>('../assets/items/', testArray.map(id => String(id)), '.json');
//console.log(items);

//console.log(readIDsAsItems(testArray));
/* 


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

function copyOverRaids() {
    const raids: wowRaid[] = readFromDirAs<wowRaid>('../assets/data/raids/wotlk');

    raids.forEach(r => {
        let newR: any = {
            ...r,
            link: r.url,
            phase: 1
        }
        delete newR['url'];

        const newI: wowInstance = { ...newR };

        const itemPath = path.join(__dirname, '../../assets/data/manual/raids/wotlk/', String(newI.link) + '.json');
        fs.writeFileSync(itemPath, JSON.stringify(newI));
    })
}
//copyOverRaids();
 */
