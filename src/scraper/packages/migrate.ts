import fs from 'fs';
import path from 'path';
import { wowCollection, wowSubCollection, wowSubCollectionGroup } from '../../app/shared/interfaces/collection';
import { wowInstance } from "../../app/shared/interfaces/instance";
import { readFromDirAs, readFromDirAsSingle, sanitizeName } from "../helper";

//migrateDungeons()
//migrateCrafting()
migrateRaids()

function migrateDungeons() {
    const dPath = '../assets/data/manual/dungeons/wotlk'
    const dungeons = readFromDirAs<wowInstance>(dPath);
    console.log('dungeons:', dungeons.length)

    const newPath = '../../wowdata/input/Dungeons'

    dungeons.forEach(d => {
        let newSubColl: any[] = [];

        d.bosses?.forEach(b => {
            const newB = {
                name: b.name,
                groups: [
                    {
                        name: 'Heroic',
                        ids: b.lootHeroic,
                        pos: 'left'
                    },
                    {
                        name: 'Normal',
                        ids: b.loot,
                        pos: 'right'
                    }
                ],
                hardmode: b.hardmode?.map(h => h.id)
            }
            newSubColl.push(newB)
        })

        const newD = {
            name: d.name,
            link: sanitizeName(d.name),
            meta: {
                descr: d.descr,
                levelMin: d.levelMin,
                levelMax: d.levelMax,
                levelEnter: d.levelEnter,
                ilvlMin: d.ilvlMin,
                ilvlMax: d.ilvlMax,
                phase: d.phase,
            },
            subCollections: newSubColl

        }
        const writePath = path.join(__dirname, newPath, newD.link + '.json');
        fs.writeFileSync(writePath, JSON.stringify(newD));
        // console.log(newD)
    })
}

function migrateCrafting() {
    const dPath = '../assets/data/manual/crafting/wotlk'
    const crafting = readFromDirAs<wowCollection>(dPath);
    console.log('crafting:', crafting.length)

    const newPath = '../../wowdata/input/Crafting'

    crafting.forEach(c => {
        let newSubColl: any[] = [];

        c.subCollections?.forEach(sub => {
            // "normal"
            if (sub.ids) {
                const newSub = {
                    name: sub.name,
                    groups: [
                        {
                            ids: sub.ids,
                            pos: 'mid',
                            groupBy: sub.groupBy ? sub.groupBy : 'defaultCrafting'
                        }
                    ]
                }
                newSubColl.push(newSub)
            }
            // groups
            else {
                const newSub = {
                    name: sub.name,
                    groups: sub.groups
                }
                newSubColl.push(newSub)
            }
        })

        const newC = {
            name: c.name,
            link: sanitizeName(c.name),
            subCollections: newSubColl
        }
        const writePath = path.join(__dirname, newPath, newC.name + '.json');
        fs.writeFileSync(writePath, JSON.stringify(newC));
        // console.log(newD)
    })
}

function migrateRaids() {
    const dPath = '../assets/data/manual/raids/wotlk'
    const raids = readFromDirAs<wowInstance>(dPath);
    console.log('raids:', raids.length)

    const newPath = '../../wowdata/input/Raids'

    raids.forEach(r => {
        let newSubColl: any[] = [];
        const smallRaid = r.size === 10;
        r.bosses?.forEach(b => {
            let newB: wowSubCollection = {
                name: b.name,
                groups: [
                    {
                        name: 'Heroic',
                        ids: b.lootHeroic,
                        groupBy: 'Raidboss',
                        filter: smallRaid ? '10-Heroic' : '25-Heroic'
                    },
                    {
                        name: 'Normal',
                        ids: b.loot,
                        groupBy: 'Raidboss',
                        filter: smallRaid ? '10-Normal' : '25-Normal'
                    }
                ],
                hardmode: b.hardmode?.map(h => {
                    return { id: h.id!, filter: '10' }
                })
            }

            if (newB.groups![0]!.ids!.length < 1) {
                newB.groups = newB.groups?.slice(1);
            }

            if (b.lootHeroicHorde) {
                newB.groups!.push({
                    name: 'Heroic',
                    ids: b.lootHeroicHorde,
                    groupBy: 'Raidboss',
                    filter: smallRaid ? '10-Heroic-Horde' : '25-Heroic-Horde'
                })
            }
            if (b.lootHorde) {
                newB.groups!.push({
                    name: 'Normal',
                    ids: b.lootHorde,
                    groupBy: 'Raidboss',
                    filter: smallRaid ? '10-Normal-Horde' : '25-Normal-Horde'
                })
            }

            const horde = newB.groups?.find(x => x.filter?.includes('Horde'))
            if (horde) {
                newB.groups = newB.groups?.map(g => {
                    if (g.filter?.includes('Horde')) {
                        return g;
                    }
                    else {
                        return {
                            name: g.name,
                            ids: g.ids,
                            groupBy: g.groupBy,
                            filter: g.filter + '-Alliance'
                        }
                    }
                })
            }

            newSubColl.push(newB)
        })
        const newR: wowCollection = {
            name: r.name,
            link: sanitizeName(r.name),
            meta: {
                descr: r.descr,
                levelMin: r.levelMin,
                levelMax: r.levelMax,
                levelEnter: r.levelEnter,
                ilvlMin: r.ilvlMin,
                ilvlMax: r.ilvlMax,
                phase: r.phase,
                tier: r.tier
            },
            subCollections: newSubColl

        }
        if (smallRaid) {
            const writePath = path.join(__dirname, newPath, newR.link + '.json');
            fs.writeFileSync(writePath, JSON.stringify(newR));
            // console.log(newD)
        }
        else {
            const writePath = path.join(__dirname, newPath, newR.link + '.json');

            const fileRaw = fs.readFileSync(writePath).toString();
            let r10: wowCollection = JSON.parse(fileRaw);
            console.log(r10.name, r10.subCollections?.length)

            for (let i = 0; i < newR.subCollections!.length; i++) {
                let boss25 = newR.subCollections![i];
                const boss10 = r10.subCollections![i];
                //console.log('boss ', boss25.name, boss10.name)

                boss25.groups = [...boss25.groups!, ...boss10.groups!]

                r10.subCollections![i] = boss25;
            }

            fs.writeFileSync(writePath, JSON.stringify(r10));
        }
    })

}