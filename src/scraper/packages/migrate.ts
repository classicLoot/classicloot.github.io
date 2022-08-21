import fs from 'fs';
import path from 'path';
import { wowInstance } from "../../app/shared/interfaces/instance";
import { readFromDirAs, sanitizeName } from "../helper";

migrateDungeons()

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