import fs from 'fs';
import path from 'path';
import { wowCollection } from '../../app/shared/interfaces/collection';
import { wowInstance } from "../../app/shared/interfaces/instance";
import { readFromDirAs, sanitizeName } from "../helper";

migrateDungeons()
migrateCrafting()

function migrateDungeons() {
    const dPath = '../assets/data/manual/dungeons/wotlk'
    const dungeons = readFromDirAs<wowInstance>(dPath);
    console.log('dungeons:', dungeons.length)

    const newPath = '../../wowdata/input/dungeons'

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
            name: sanitizeName(d.name),
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
        const writePath = path.join(__dirname, newPath, newD.name + '.json');
        fs.writeFileSync(writePath, JSON.stringify(newD));
        // console.log(newD)
    })
}

function migrateCrafting() {
    const dPath = '../assets/data/manual/crafting/wotlk'
    const crafting = readFromDirAs<wowCollection>(dPath);
    console.log('crafting:', crafting.length)

    const newPath = '../../wowdata/input/crafting'

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
            name: sanitizeName(c.name),
            subCollections: newSubColl
        }
        const writePath = path.join(__dirname, newPath, newC.name + '.json');
        fs.writeFileSync(writePath, JSON.stringify(newC));
        // console.log(newD)
    })
}