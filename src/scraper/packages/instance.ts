import { wowInstance } from "../../app/shared/interfaces/instance";
import { readFromDirAs, writeToFileAs } from "../helper";
import fs from 'fs';
import path from 'path';

function writeMeta(instances: wowInstance[], type: 'dungeons' | 'raids', addon: 'wotlk') {
    console.log('Instances: ', instances.length);

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

    writeMeta(instances, type, addon);
}

processInstances('dungeons', 'wotlk');
processInstances('raids', 'wotlk');
