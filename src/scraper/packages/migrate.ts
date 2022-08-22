import fs from 'fs';
import path from 'path';
import { wowCollection } from '../../app/shared/interfaces/collection';
import { wowInstance } from "../../app/shared/interfaces/instance";
import { readFromDirAs, sanitizeName } from "../helper";

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

        if (r.size === 10) {
            let newSubColl: any[] = [];
            r.bosses?.forEach(b => {
                const newB = {
                    name: b.name,
                    groups: [
                        {
                            name: 'Heroic',
                            ids: b.lootHeroic,
                            groupBy: 'Raidboss',
                            filter: '10-heroic'
                        },
                        {
                            name: 'Normal',
                            ids: b.loot,
                            groupBy: 'Raidboss',
                            filter: '10-normal'
                        }
                    ],
                    hardmode: b.hardmode?.map(h => {
                        return { id: h.id, filter: '10' }
                    })
                }
                newSubColl.push(newB)
            })
            const newR = {
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
                },
                subCollections: newSubColl

            }
            const writePath = path.join(__dirname, newPath, newR.link + '.json');
            fs.writeFileSync(writePath, JSON.stringify(newR));
            // console.log(newD)
        }
        else {

        }
    })

}