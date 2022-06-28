import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import xml from 'xml-js';
import { wowCraftingSpell, wowItem, wowReagent } from '../app/shared/interfaces/item';
import { delay, XML_CONFIG } from './scraper';
import progress from 'cli-progress';

function checkFSItem(id: number): boolean {
    if (id >= 0) {
        const itemPath = path.join(__dirname, '../assets/items/', String(id) + '.json');
        const bExist = fs.existsSync(itemPath);
        return bExist;
    }
    else {
        const itemPath = path.join(__dirname, '../assets/spells/', String(-1 * id) + '.json');
        const bExist = fs.existsSync(itemPath);
        return bExist;
    }
}

function writeFSItem(item: wowItem) {
    if (item.id >= 0) {
        const itemPath = path.join(__dirname, '../assets/items/', String(item.id) + '.json');
        fs.writeFileSync(itemPath, JSON.stringify(item));
    }
    else {
        const itemPath = path.join(__dirname, '../assets/spells/', String(-1 * item.id) + '.json');
        fs.writeFileSync(itemPath, JSON.stringify(item));
    }
}

export async function fetchIDS(ids: number[], forceDL: boolean = false) {
    console.log(`**FETCH IDS: ${ids.length}**`);

    const existsArr: number[] = [];
    const errorArr: number[] = [];
    const updatedArr: number[] = [];

    const idsToUpdate: number[] = [];


    for (const id of ids) {
        if (checkFSItem(id)) {
            existsArr.push(id);
            if (forceDL) {
                idsToUpdate.push(id)
            }
        }
        else {
            idsToUpdate.push(id)
        }
    }

    // PROGRESS
    const bar1 = new progress.SingleBar({}, progress.Presets.shades_classic);
    bar1.start(ids.length, forceDL ? 0 : existsArr.length);
    //

    for (const id of idsToUpdate) {

        // => Item
        if (id >= 0) {
            try {
                const response = await fetch(`https://wotlkdb.com/?item=${id}&xml`);
                const body = await response.text();

                const jsonStr = xml.xml2json(body, XML_CONFIG);
                const itemJS = JSON.parse(jsonStr)["aowow"]["item"];

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

                writeFSItem(item);

                updatedArr.push(id);
                bar1.increment();
                //console.log(item.id, item.name, item.icon);
            } catch (error) {
                console.log('ERROR: ' + id)
                errorArr.push(id);
                bar1.increment();

            }
        }
        // => Spell
        else {
            {
                try {
                    const realdID = -1 * id;

                    const response = await fetch(`https://wotlkdb.com/?spell=${realdID}&power`);
                    const body = await response.text();

                    const first = body.indexOf('{');
                    const last = body.lastIndexOf('}');
                    const str = body.slice(first, last);

                    const name = matchAttr(str, 'name_enus').replaceAll('\\', '');
                    const icon = matchAttr(str, 'icon');
                    const tooltip = matchAttr(str, 'tooltip_enus');
                    const fixedTooltip = fixTooltip(tooltip, name);

                    const link = `https://wotlkdb.com/?spell=${realdID}`;

                    const craftingSpell = handleSpell(tooltip);

                    const item: wowItem = {
                        id: id,
                        name: name,
                        icon: icon,
                        htmlTooltip: fixedTooltip,
                        quality: 1,
                        link: link,

                        ilvl: 0,
                        wowClass: 0,
                        wowSubClass: 0,
                        slot: 0,

                        createdBy: [craftingSpell]
                    }

                    //console.log(item)
                    writeFSItem(item);

                    updatedArr.push(id);
                    bar1.increment();
                    //console.log(item.id, item.name, item.icon);
                } catch (error) {
                    console.log('ERROR: ' + id)
                    errorArr.push(id);
                    bar1.increment();

                }
            }
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

function handleSpell(tooltip: string): wowCraftingSpell {
    const nameMatcher = '<td><b>(.*)<\/b><br \/>';
    const spellName = matchSingle(tooltip, nameMatcher)
    //console.log('\n', spellName);

    const reagents = matchAllReagents(tooltip);
    //console.log(reagents)

    const craftingSpell: wowCraftingSpell = {
        id: 0,
        name: spellName,
        icon: '',
        reagents: reagents
    }

    return craftingSpell;
}

function fixTooltip(tooltip: string, name: string): string {
    const firstPart: string = `<table><tr><td><b>${name}</b></td></tr></table>`

    const spanMatcher = /<span class=\\{1,2}"q\\{1,2}">.*<\/span>/g
    const match = tooltip.match(spanMatcher);
    const span = match![0].replaceAll("\\", "");

    const secondPart: string = `<table><tr><td>${span}</td></tr></table>`

    return firstPart + secondPart;
}

function matchSingle(str: string, matcher: string): string {
    const match = str.match(matcher);
    return match![1]
}

function matchAllReagents(str: string): wowReagent[] {
    const reagentMatcher = /<a href=\\{1,2}"\?item=(\d*)\\{1,2}">([a-zA-Z0-9_ ]*)<\/a>( \((\d*)\)){0,1}/g;
    const spanIndexFirst = str.indexOf('<span class')
    const substring = str.slice(0, spanIndexFirst);
    //console.log(substring)   

    let reagents: wowReagent[] = [];

    const matches = [...substring.matchAll(reagentMatcher)]
    matches.forEach(match => {

        const reagent: wowReagent = {
            id: Number(match[1]),
            name: match[2],
            icon: '',
            count: Number(match[4]) | 1
        }
        reagents.push(reagent);
        //console.log(reagent)
    })

    return reagents;
}

function matchAttr(str: string, attrName: string): string {
    const regexStr = `${attrName}: '(.*)',`;
    const match = str.match(regexStr);
    return match![1];
}
