import { wowInstance, wowInstanceBossLink } from "../../app/shared/interfaces/instance";
import { readFromDirAs, sanitizeName, writeToFileAs } from "../helper";
import fs from 'fs';
import path from 'path';


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
