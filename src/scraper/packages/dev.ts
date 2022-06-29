import fetch from 'node-fetch';
import xml from 'xml-js';
import { wowCraftingSpell, wowItem, wowReagent } from '../../app/shared/interfaces/item';
import { readFilesFromDirAs } from '../helper';
import { fetchIDS } from '../items';
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


            let spellArr: wowCraftingSpell[] = [];

            if (itemJS["createdBy"]) {

                //console.log(itemJS["createdBy"]);

                let spellRaw: any = itemJS["createdBy"]["spell"];
                if (Array.isArray(spellRaw)) {
                    spellArr = spellRaw.map(handleCraftingSpell);
                }
                else {
                    spellArr = [handleCraftingSpell(spellRaw)];
                }
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

                createdBy: spellArr
            }

            if (spellArr.length < 1) {
                delete item.createdBy;
            }
            console.log(item)

            //console.log(item.id, item.name, item.icon);
        } catch (error) {
            console.log('ERROR: ' + id)
            console.log(error);
        }
    }


}
//await testFetchFunction([44330, 40070, 6371, 22574, 40195]); 37704
//await testFetchFunction([37704, 22575]); 35624
//await testFetchFunction([35624, 44330]);

function handleCraftingSpell(raw: any): wowCraftingSpell {
    const spellAttr = raw["_attributes"];

    let spell: wowCraftingSpell = {
        name: spellAttr.name,
        icon: spellAttr.icon,
        id: Number(spellAttr.id),
        minCount: Number(spellAttr.minCount),
        maxCount: Number(spellAttr.maxCount),
    }

    let tmpArray: any[] = [];

    // e.g. 37704
    if (!raw["reagent"]) {
        tmpArray = [];
    }
    else if (Array.isArray(raw["reagent"])) {
        tmpArray = raw["reagent"];
    }
    else {
        tmpArray = [raw["reagent"]];
    }

    let reagents: wowReagent[] = [];
    reagents = tmpArray.map((raw: { [x: string]: any; }) => {
        const inner = raw["_attributes"];
        return {
            id: Number(inner["id"]),
            name: inner["name"],
            icon: inner["icon"],
            quality: Number(inner["quality"]),
            count: Number(inner["count"]),
        } as wowReagent
    });

    spell = {
        ...spell,
        reagents: reagents
    }

    return spell;
}

const testArray = [43345, 40453];
const items = readFilesFromDirAs<wowItem>('../assets/items/', testArray.map(id => String(id)), '.json');
//console.log(items);

//await fetchIDS([-55628, -13240, -60691, -55016], true)60691
await fetchIDS([-59504], true)
