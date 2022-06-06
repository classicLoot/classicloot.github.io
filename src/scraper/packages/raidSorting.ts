import fs from 'fs';
import path from 'path';
import { wowRaid, wowRaidBoss, wowRaidLootSorted } from "../../app/shared/interfaces/raids";
import { readFromDirAs, readIDsAsItems } from "../helper";

const raids: wowRaid[] = readFromDirAs<wowRaid>('../assets/data/raids/wotlk');

function writeRaid(raid: wowRaid) {
    const itemPath = path.join(__dirname, '../../assets/data/raidsSORTED/wotlk/', String(raid.url) + '.json');
    fs.writeFileSync(itemPath, JSON.stringify(raid));
}

raids.forEach(raid => {
    switch (raid.type) {
        case 'A':
            {
                let newRaid: wowRaid = { ...raid, bosses: [] };
                raid.bosses.forEach(boss => {
                    let newBoss: wowRaidBoss = { ...boss, loot: [], sortedLoot: [], sortedLootHeroic: [] };

                    // normal
                    const loot = readIDsAsItems(boss.loot);

                    let weapons: wowRaidLootSorted = { title: 'Weapons', ids: [] };
                    let armor: wowRaidLootSorted = { title: 'Armor', ids: [] };
                    let misc: wowRaidLootSorted = { title: 'Misc', ids: [] };

                    loot.forEach(item => {
                        // Weapon
                        if (+item.wowClass === 2) {
                            weapons.ids.push(item.id);
                        }
                        // Armor
                        else if (+item.wowClass === 4) {
                            armor.ids.push(item.id);
                        }
                        // Misc
                        else {
                            misc.ids.push(item.id);
                        }
                    })
                    newBoss.sortedLoot?.push(weapons, armor, misc);

                    // heroic
                    // @TODO

                    //console.log(newBoss);
                    newRaid.bosses.push(newBoss);

                    //console.log(boss.name, raid.size);
                })

                //console.log(newRaid);
                writeRaid(newRaid);
                break;
            }

        default:
            console.log(`Type ${raid.type} NYI!`);
            break;
    }
})