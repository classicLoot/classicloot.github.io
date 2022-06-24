import { wowInstance, wowInstanceBoss, wowInstanceBossLink, wowInstanceLootSorted, wowInstanceLootSortedItems } from "../../app/shared/interfaces/instance";
import { readFilesFromDirAs, readFromDirAs, readIDsAsItems, sanitizeName, sortBossLoot, writeToFileAs, writeToFileAsAndCreateDir } from "../helper";
import fs from 'fs';
import path from 'path';
import { wowItem } from "../../app/shared/interfaces/item";
import { fetchIDS } from "../items";
import { fetchIcons } from "../icons";



await processInstances('dungeons', 'wotlk');
await processInstances('raids', 'wotlk');


function writeMeta(instances: wowInstance[], type: 'dungeons' | 'raids', addon: 'wotlk') {
    const removeUseless: wowInstance[] = instances.map(i => {
        let newInstance: wowInstance = { ...i, descr: '', bosses: [] };

        return newInstance;
    })

    const filePath = `../assets/data/gen/${addon}/${type}/meta.json`;
    writeToFileAs<wowInstance[]>(removeUseless, filePath);

    const filePathTS = `../../assets/data/gen/${addon}/${type}/meta.ts`;
    const fileTS = `
    import { wowInstance } from "../../../../../app/shared/interfaces/instance";

    export const ${addon}${type}Meta: wowInstance[] = JSON.parse(\`${JSON.stringify(removeUseless)}\`);
    `
    const writePath = path.join(__dirname, filePathTS);
    fs.writeFileSync(writePath, fileTS);

    console.log('..wrote meta.json @ ' + filePath);
}

async function processInstances(type: 'dungeons' | 'raids', addon: 'wotlk') {
    const filePath = `../assets/data/manual/${type}/${addon}/`;
    const instances: wowInstance[] = readFromDirAs<wowInstance>(filePath);
    console.log(`Process ${type} from ${addon} @ ${filePath}`);
    console.log('Instances: ', instances.length);

    writeMeta(instances, type, addon);
    writeMetaIndividual(instances, type, addon);
    await fetchItems(instances);
    await fetchIconsFrom(instances);
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
                type: i.type,
                bossLinks: bossLinks
            }

            const filePath = `../assets/data/gen/${addon}/${type}/${i.link}.json`;
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
            const newBoss = sortBoss(boss, type);
            const filePath = `../assets/data/gen/${addon}/${type}/${i.link}/`;
            writeToFileAsAndCreateDir<wowInstanceBoss>(newBoss, filePath, `${sanitizeName(boss.name)}.json`);
        })
    }
}

function sortBoss(boss: wowInstanceBoss, type: 'dungeons' | 'raids'): wowInstanceBoss {
    // Ally
    const lootNormal = readIDsAsItems(boss.loot ? boss.loot : []);
    const sortedNormal = sortBossLoot(lootNormal);

    const lootHeroic = readIDsAsItems(boss.lootHeroic ? boss.lootHeroic : []);
    const sortedHeroic = sortBossLoot(lootHeroic);

    // Horde
    const lootNormalHorde = readIDsAsItems(boss.lootHorde ? boss.lootHorde : []);
    const sortedNormalHorde = sortBossLoot(lootNormalHorde);

    const lootHeroicHorde = readIDsAsItems(boss.lootHeroicHorde ? boss.lootHeroicHorde : []);
    const sortedHeroicHorde = sortBossLoot(lootHeroicHorde);

    const newBoss: wowInstanceBoss = {
        ...boss,
        sortedLoot: sortSortedLootIntoArray(sortedNormal),
        sortedLootItems: sortedNormal,
        sortedLootHeroic: sortSortedLootIntoArray(sortedHeroic),
        sortedLootHeroicItems: sortedHeroic,

        sortedLootHorde: sortSortedLootIntoArray(sortedNormalHorde),
        sortedLootItemsHorde: sortedNormalHorde,
        sortedLootHeroicHorde: sortSortedLootIntoArray(sortedHeroicHorde),
        sortedLootHeroicItemsHorde: sortedHeroicHorde
    }

    if (lootNormalHorde.length === 0 && lootHeroicHorde.length === 0) {
        delete newBoss.sortedLootHorde;
        delete newBoss.sortedLootItemsHorde;
        delete newBoss.sortedLootHeroicHorde;
        delete newBoss.sortedLootHeroicItemsHorde;
    }

    return newBoss;
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

async function fetchItems(instances: wowInstance[]) {
    let toFetch = new Set<number>();

    instances.forEach(i => {
        i.bosses?.forEach(boss => {
            boss.loot?.forEach(loot => {
                toFetch.add(loot);
            })
            boss.lootHeroic?.forEach(loot => {
                toFetch.add(loot)
            })

            boss.lootHorde?.forEach(loot => {
                toFetch.add(loot);
            })
            boss.lootHeroicHorde?.forEach(loot => {
                toFetch.add(loot)
            })
        })
    })

    const ItemIDArray: number[] = Array.from(toFetch.values());
    await fetchIDS(ItemIDArray);
}

async function fetchIconsFrom(instances: wowInstance[]) {
    let toFetch = new Set<string>();

    instances.forEach(i => {
        i.bosses?.forEach(boss => {
            boss.loot?.forEach(loot => {
                toFetch.add(loot.toString());
            })
            boss.lootHeroic?.forEach(loot => {
                toFetch.add(loot.toString());
            })

            boss.lootHorde?.forEach(loot => {
                toFetch.add(loot.toString());
            })
            boss.lootHeroicHorde?.forEach(loot => {
                toFetch.add(loot.toString());
            })
        })
    })
    const fetchArray = Array.from(toFetch.values());
    const items = readFilesFromDirAs<wowItem>(`../assets/items/`, fetchArray, '.json');

    await fetchIcons(items.map(i => i.icon), 'large');
}
