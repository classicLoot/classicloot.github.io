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
//await fetchIDS([-59504], true)


function combineArrays(ids: string, names: string) {
    const idArray = ids.split(',');
    const nameArray = names.split(',');

    for (let i = 0; i < idArray.length; i++) {
        console.log(`{"id": ${idArray[i]},"name":"${nameArray[i]}"}`);
    }
}
/*combineArrays(`4580, 4620, 4583, 4601, 4621, 4534, 4610, 4538, 4614, 4577, 4615, 4535, 4611, 4628, 4632, 4630, 4634, 4631, 4635, 4629, 4633, 4536, 4612, 4537, 4613, 4578, 4616, 4581, 4622, 4618, 4579, 4619, 4576, 4531, 4604, 4529, 4606, 4527, 4607, 4530, 4597, 4584, 4582, 4617, 4528, 4605
`, `All You Can Eat (10 player), All You Can Eat (25 player), Bane of the Fallen King, Been Waiting a Long Time for This (10 player), Been Waiting a Long Time for This (25 player), Boned (10 player), Boned (25 player), Dances with Oozes (10 player), Dances with Oozes (25 player), Flu Shot Shortage (10 player), Flu Shot Shortage (25 player), Full House (10 player), Full House (25 player), Heroic: Storming the Citadel (10 player), Heroic: Storming the Citadel (25 player), Heroic: The Crimson Hall (10 player), Heroic: The Crimson Hall (25 player), Heroic: The Frostwing Halls (10 player), Heroic: The Frostwing Halls (25 player), Heroic: The Plagueworks (10 player), Heroic: The Plagueworks (25 player), I'm on a Boat (10 player), I'm on a Boat (25 player), I've Gone and Made a Mess (10 player), I've Gone and Made a Mess (25 player), "Nausea, Heartburn, Indigestion... (10 player)", "Nausea, Heartburn, Indigestion... (25 player)", Neck-Deep in Vile (10 player), Neck-Deep in Vile (25 player), "Once Bitten, Twice Shy (25 player)", Portal Jockey (10 player), Portal Jockey (25 player), Realm First! Fall of the Lich King, Storming the Citadel (10 player), Storming the Citadel (25 player), The Crimson Hall (10 player), The Crimson Hall (25 player), The Frostwing Halls (10 player), The Frostwing Halls (25 player), The Frozen Throne (10 player), The Frozen Throne (25 player), The Light of Dawn, The Orb Whisperer (10 player), The Orb Whisperer (25 player), The Plagueworks (10 player), The Plagueworks (25 player)`)
*/

combineArrays(`1860, 1864, 497, 489, 1296, 2036, 2154, 2040, 2044, 2152, 4526, 4297, 3804, 2157, 2041, 491, 500, 4521, 2038, 2155, 2151, 4524, 493, 4519, 494, 2058, 4522, 3803, 2043, 2153, 2046, 2039, 2037, 1816, 490, 4298, 499, 1872, 3802, 1871, 1866, 1297, 492, 1834, 1865, 1868, 2150, 1817, 4523, 2056, 4525, 2045, 4520, 1873, 2156, 2057, 1919, 2042, 1867, 1862, 496, 498, 495`, `Gotta Go!, What the Eck?, Heroic: Halls of Lightning, Heroic: Utgarde Keep, Watch Him Die, Intense Cold, Brann Spankin' New, Less-rabi, Ruby Void, Share The Love, We're Not Retreating; We're Advancing in a Different Direction., Heroic: Trial of the Champion, I've Had Worse, King's Bane, Dehydration, Heroic: Azjol-Nerub, Heroic: The Culling of Stratholme, Heroic: The Halls of Reflection, Respect Your Elders, Abuse the Ooze, Consumption Junction, Doesn't Go to Eleven, Heroic: Drak'Tharon Keep, Heroic: The Forge of Souls, Heroic: The Violet Hold, Snakes. Why'd It Have To Be Snakes?, Soul Power, The Faceroller, The Incredible Hulk, A Void Dance, Amber Void, Better Off Dred, Chaos Theory, Defenseless, Heroic: The Nexus, Heroic: Trial of the Champion, Heroic: Utgarde Pinnacle, Zombiefest!, Argent Confessor, Experienced Drake Rider, Good Grief, Hadronox Denied, Heroic: Ahn'kahet: The Old Kingdom, Lightning Struck, Lockdown!, Make It Count, Split Personality, The Culling of Time, Three Faced, Volunteer Work, Don't Look Up, Emerald Void, Heroic: The Pit of Saron, Lodi Dodi We Loves the Skadi, My Girl Loves to Skadi All the Time, Oh Novos!, On The Rocks, Shatter Resistant, Timely Death, Volazj's Quick Demise, Heroic: Halls of Stone, Heroic: The Oculus, Heroic: Gundrak`)