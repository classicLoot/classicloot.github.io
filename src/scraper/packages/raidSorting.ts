import fs from 'fs';
import path from 'path';
import { wowItem } from '../../app/shared/interfaces/item';
import { wowRaid, wowRaidBoss, wowRaidBossLazy, wowRaidLazy, wowRaidLootSorted } from "../../app/shared/interfaces/raids";
import { readFromDirAs, readIDsAsItems } from "../helper";

const raids: wowRaid[] = readFromDirAs<wowRaid>('../assets/data/raids/wotlk');

function writeRaid(raid: wowRaid) {
    const itemPath = path.join(__dirname, '../../assets/data/raidsSORTED/wotlk/', String(raid.url) + '.json');
    fs.writeFileSync(itemPath, JSON.stringify(raid));
}

function writeLazyRaid(raid: wowRaidLazy) {
    const itemPath = path.join(__dirname, '../../assets/data/raidsLAZY/wotlk/', String(raid.url) + '.json');
    fs.writeFileSync(itemPath, JSON.stringify(raid));
}

function writeLazyRaidboss(boss: wowRaidBossLazy, raidUrl: string) {
    const raidPath = path.join(__dirname, '../../assets/data/raidsLAZY/wotlk/', raidUrl)

    if (!fs.existsSync(raidPath)) {
        fs.mkdirSync(raidPath);
    }
    const itemPath = path.join(__dirname, '../../assets/data/raidsLAZY/wotlk/', raidUrl, sanitizeName(boss.name) + '.json');
    fs.writeFileSync(itemPath, JSON.stringify(boss));
}

function sanitizeName(str: string) {
    let newStr = str.replaceAll(" ", "").replaceAll("'", "").replaceAll("-", "");
    return newStr;
}

raids.forEach(raid => {
    switch (raid.type) {
        case 'A':
            {
                let newRaid: wowRaid = { ...raid, bosses: [] };
                raid.bosses.forEach(boss => {

                    // normal
                    const loot = readIDsAsItems(boss.loot);

                    let armor: wowItem[] = [];
                    let jewelry: wowItem[] = [];
                    let weapons: wowItem[] = [];
                    let tokens: wowItem[] = [];
                    let misc: wowItem[] = [];

                    loot.forEach(item => {
                        // Weapon
                        if (+item.wowClass === 2) {
                            //newBoss.sortedLoot?.weapons.push(item.id);
                            weapons.push(item);
                        }
                        // Armor
                        else if (+item.wowClass === 4) {
                            // Shield, Libram, Totem, Off-Hand => Weapon
                            if ([6, 7, 8, 9, -5].includes(+item.wowSubClass)) {
                                //newBoss.sortedLoot?.weapons.push(item.id); 
                                weapons.push(item);
                            }
                            // Ring, Neck or Trinket => Jewelry
                            else if ([-2, -3, -4].includes(+item.wowSubClass)) {
                                //newBoss.sortedLoot?.jewelry.push(item.id);
                                jewelry.push(item);
                            }
                            else {
                                //newBoss.sortedLoot?.armor.push(item.id);
                                armor.push(item);
                            }
                        }
                        // Misc
                        else {
                            // Tier Token
                            if (+item.wowSubClass === -2) {
                                //newBoss.sortedLoot?.tokens.push(item.id);
                                tokens.push(item);

                            }
                            else {
                                //newBoss.sortedLoot?.misc.push(item.id);
                                misc.push(item);
                            }
                        }
                    })

                    armor.sort((a, b) => +a.wowSubClass - +b.wowSubClass);
                    jewelry.sort((a, b) => a.wowSubClass - +b.wowSubClass);
                    weapons.sort((a, b) => +a.wowSubClass - +b.wowSubClass);
                    tokens.sort((a, b) => +a.id - +b.id);



                    // heroic
                    // @TODO

                    let newBoss: wowRaidBoss = {
                        ...boss, loot: [],
                        sortedLoot: {
                            armor: armor.map(a => +a.id),
                            weapons: weapons.map(a => +a.id),
                            misc: misc.map(a => +a.id),
                            jewelry: jewelry.map(a => +a.id),
                            tokens: tokens.map(a => +a.id)
                        },
                        sortedLootHeroic: {
                            armor: [],
                            weapons: [],
                            misc: [],
                            jewelry: [],
                            tokens: []
                        }
                    };

                    let newBossLazy: wowRaidBossLazy = {
                        name: boss.name,
                        descr: boss.descr,
                        sortedLoot: {
                            armor: armor,
                            weapons: weapons,
                            misc: misc,
                            jewelry: jewelry,
                            tokens: tokens
                        },
                        sortedLootHeroic: {
                            armor: [],
                            weapons: [],
                            misc: [],
                            jewelry: [],
                            tokens: []
                        }
                    }
                    writeLazyRaidboss(newBossLazy, raid.url);


                    //console.log(newBoss);
                    newRaid.bosses.push(newBoss);

                    //console.log(boss.name, raid.size);
                })

                //console.log(newRaid);
                writeRaid(newRaid);

                const newRaidLazy: wowRaidLazy = {
                    name: newRaid.name,
                    descr: newRaid.descr,
                    url: newRaid.url,
                    size: newRaid.size,
                    type: newRaid.type,
                    bosses: newRaid.bosses.map(boss => {
                        return {
                            name: boss.name,
                            url: sanitizeName(boss.name)
                        }
                    })
                }
                writeLazyRaid(newRaidLazy);
                break;
            }

        default:
            console.log(`Type ${raid.type} NYI!`);
            break;
    }
})