import { wowInstance, wowInstanceBoss, wowInstanceBossLink, wowInstanceLootSorted, wowInstanceLootSortedItems } from "../../app/shared/interfaces/instance";
import { readFromDirAs, readIDsAsItems, sanitizeName, writeToFileAs, writeToFileAsAndCreateDir } from "../helper";
import fs from 'fs';
import path from 'path';
import { wowItem } from "../../app/shared/interfaces/item";


processInstances('dungeons', 'wotlk');
processInstances('raids', 'wotlk');


function writeMeta(instances: wowInstance[], type: 'dungeons' | 'raids', addon: 'wotlk') {
    const removeUseless: wowInstance[] = instances.map(i => {
        let newInstance: wowInstance = { ...i, descr: '', bosses: [] };

        return newInstance;
    })

    const filePath = `../assets/data/gen/${type}/${addon}/meta.json`;
    writeToFileAs<wowInstance[]>(removeUseless, filePath);

    const filePathTS = `../../assets/data/gen/${type}/${addon}/meta.ts`;
    const fileTS = `
    import { wowInstance } from "../../../../../app/shared/interfaces/instance";

    export const ${addon}${type}Meta: wowInstance[] = JSON.parse(\`${JSON.stringify(removeUseless)}\`);
    `
    const writePath = path.join(__dirname, filePathTS);
    fs.writeFileSync(writePath, fileTS);

    console.log('..wrote meta.json @ ' + filePath);
}

function processInstances(type: 'dungeons' | 'raids', addon: 'wotlk') {
    const filePath = `../assets/data/manual/${type}/${addon}/`;
    const instances: wowInstance[] = readFromDirAs<wowInstance>(filePath);
    console.log(`Process ${type} from ${addon} @ ${filePath}`);
    console.log('Instances: ', instances.length);

    writeMeta(instances, type, addon);
    writeMetaIndividual(instances, type, addon);
    // TODO GET ITEMS
    sortAndWriteInstance(instances, type, addon);
}

function writeMetaIndividual(instances: wowInstance[], type: 'dungeons' | 'raids', addon: 'wotlk') {
    instances.forEach(i => {
        if (i.bosses) {
            const bossLinks: wowInstanceBossLink[] = i.bosses!.map(b => {
                return {
                    name: b.name,
                    link: sanitizeName(b.name)
                } as wowInstanceBossLink
            })

            const meta: wowInstance = {
                name: i.name,
                link: i.link,
                descr: i.descr,
                phase: i.phase,
                size: i.size,
                bossLinks: bossLinks
            }

            const filePath = `../assets/data/gen/${type}/${addon}/${i.link}.json`;
            writeToFileAs<wowInstance>(meta, filePath);
        }
    })
}

function sortAndWriteInstance(instances: wowInstance[], type: 'dungeons' | 'raids', addon: 'wotlk') {
    for (const i of instances) {
        if (!i.bosses) {
            continue;
        }

        i.bosses.forEach(boss => {
            const newBoss = sortBoss(boss);
            const filePath = `../assets/data/gen/${type}/${addon}/${i.link}/`;
            writeToFileAsAndCreateDir<wowInstanceBoss>(newBoss, filePath, `${sanitizeName(boss.name)}.json`);
        })
    }
}

function sortBoss(boss: wowInstanceBoss): wowInstanceBoss {
    const lootNormal = readIDsAsItems(boss.loot ? boss.loot : []);
    const sortedNormal = sortBossLoot(lootNormal);

    const lootHeroic = readIDsAsItems(boss.lootHeroic ? boss.lootHeroic : []);
    const sortedHeroic = sortBossLoot(lootHeroic);

    const newBoss: wowInstanceBoss = {
        ...boss,
        sortedLoot: sortSortedLootIntoArray(sortedNormal),
        sortedLootItems: sortedNormal,
        sortedLootHeroic: sortSortedLootIntoArray(sortedHeroic),
        sortedLootHeroicItems: sortedHeroic
    }

    return newBoss;
}

function sortBossLoot(items: wowItem[]): wowInstanceLootSortedItems {

    let armor: wowItem[] = [];
    let jewelry: wowItem[] = [];
    let weapons: wowItem[] = [];
    let tokens: wowItem[] = [];
    let misc: wowItem[] = [];

    items.forEach(item => {
        // Weapon
        if (+item.wowClass === 2) {
            weapons.push(item);
        }
        // Armor
        else if (+item.wowClass === 4) {
            // Shield, Libram, Totem, Off-Hand => Weapon
            if ([6, 7, 8, 9, -5].includes(+item.wowSubClass)) {
                weapons.push(item);
            }
            // Ring, Neck or Trinket => Jewelry
            else if ([-2, -3, -4].includes(+item.wowSubClass)) {
                jewelry.push(item);
            }
            else {

                armor.push(item);
            }
        }
        // Misc
        else {
            // Tier Token
            if (+item.wowSubClass === -2) {
                tokens.push(item);

            }
            else {
                misc.push(item);
            }
        }
    })

    armor.sort((a, b) => +a.wowSubClass - +b.wowSubClass);
    jewelry.sort((a, b) => a.wowSubClass - +b.wowSubClass);
    weapons.sort((a, b) => +a.wowSubClass - +b.wowSubClass);
    tokens.sort((a, b) => +a.id - +b.id);

    const sorted: wowInstanceLootSortedItems = {
        armor: armor,
        jewelry: jewelry,
        weapons: weapons,
        tokens: tokens,
        misc: misc
    }

    return sorted;
}

function sortSortedLootIntoArray(sorted: wowInstanceLootSortedItems): wowInstanceLootSorted {
    const misc = sorted.misc.map(i => i.id);
    const armor = sorted.armor.map(i => i.id);
    const tokens = sorted.tokens.map(i => i.id);
    const jewelry = sorted.jewelry.map(i => i.id);
    const weapons = sorted.weapons.map(i => i.id);

    return {
        armor: armor,
        jewelry: jewelry,
        weapons: weapons,
        misc: misc,
        tokens: tokens
    };
}
