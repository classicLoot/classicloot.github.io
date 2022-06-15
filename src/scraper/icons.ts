import progress from 'cli-progress';
import fs from 'fs';
import fetch from 'node-fetch';
import { writeFile } from 'node:fs/promises';
import path from 'path';
import { delay } from './scraper';

function checkFSIcon(icon: string, size: string) {
    const itemPath = path.join(__dirname, '../assets/icons/', size, icon + '.jpg');
    const bExist = fs.existsSync(itemPath);
    return bExist;
}

export async function fetchIcons(icons: string[], size: string) {
    console.log(`**FETCH Icons: ${icons.length}**`);

    const existsArr: string[] = [];
    const errorArr: string[] = [];
    const updatedArr: string[] = [];

    const iconsToUpdate: string[] = [];

    for (const icon of icons) {
        if (checkFSIcon(icon, size)) {
            existsArr.push(icon);
        }
        else {
            iconsToUpdate.push(icon);
        }
    }

    // PROGRESS
    const bar1 = new progress.SingleBar({}, progress.Presets.shades_classic);
    bar1.start(icons.length, iconsToUpdate.length);
    //

    for (const icon of iconsToUpdate) {
        try {
            const response = await fetch(`https://wotlkdb.com/static/images/wow/icons/${size}/${icon}.jpg`);
            const buffer = await response.buffer();

            const itemPath = path.join(__dirname, '../assets/icons/', size, icon + '.jpg');
            await writeFile(itemPath, buffer);

            updatedArr.push(icon);
            bar1.increment();
        } catch (error) {
            console.log('error:', icon)

            errorArr.push(icon);
            bar1.increment();
        }

        await new Promise(f => setTimeout(f, delay));
    }

    bar1.stop();

    console.log('**FINISHED**');
    console.log('Total ', icons.length);
    console.log('updated ', updatedArr.length);
    console.log('exists ', existsArr.length);
    console.log('error ', errorArr.length);
}
