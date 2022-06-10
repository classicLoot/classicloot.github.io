import { wowInstance } from "../../app/shared/interfaces/instance";
import { readFromDirAs, writeToFileAs } from "../helper";




function writeMeta(instances: wowInstance[], type: 'dungeons' | 'raids', addon: 'wotlk') {
    console.log('Instances: ', instances.length);

    const removeUseless: wowInstance[] = instances.map(i => {
        let newInstance: wowInstance = { ...i, descr: '', bosses: [] };

        return newInstance;
    })

    const filePath = `../assets/data/gen/${type}/${addon}/meta.json`;
    writeToFileAs<wowInstance[]>(removeUseless, filePath);

    console.log('..wrote meta.json @ ' + filePath);
}

function processInstances(type: 'dungeons' | 'raids', addon: 'wotlk') {
    const filePath = `../assets/data/manual/${type}/${addon}/`;
    const instances: wowInstance[] = readFromDirAs<wowInstance>(filePath);
    console.log(`Process ${type} from ${addon} @ ${filePath}`);

    writeMeta(instances, type, addon);
}

processInstances('dungeons', 'wotlk');