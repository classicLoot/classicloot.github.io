import fs from 'fs';
import fetch from 'node-fetch';
import { writeFile } from 'node:fs/promises';
import path from 'path';
import { wowItem } from '../app/shared/interfaces/item';
import { delay } from './scraper';

function checkFSIcon(icon: string, size: string) {
    const itemPath = path.join(__dirname, '../assets/icons/', size, icon + '.jpg');
    const bExist = fs.existsSync(itemPath);
    return bExist;
}

// function writeFSIcon(icon: string, size: string) {
//     const itemPath = path.join(__dirname, '../assets/icons/', size, icon + '.jpg');
//     fs.writeFileSync(itemPath, JSON.stringify(icon));
// }

async function getIconNamesFromFiles() {
    const itemsPath = path.join(__dirname, '../assets/items/');
    const files = fs.readdirSync(itemsPath);

    const items: wowItem[] = [];

    for (const file of files) {
        const itemPath = path.join(__dirname, '../assets/items/', file);


        const itemRaw = fs.readFileSync(itemPath).toString();
        const itemJson: wowItem = JSON.parse(itemRaw);
        //console.log(itemJson);
        items.push(itemJson);
    }

    console.log(items.length)

    return items.map(item => item.icon);
}

async function fetchIcons(icons: string[], size: string) {
    for (const icon of icons) {

        if (checkFSIcon(icon, size)) {
            console.log(icon, 'exists');
            continue;
        }

        try {
            const response = await fetch(`https://wotlkdb.com/static/images/wow/icons/${size}/${icon}.jpg`);
            const buffer = await response.buffer();

            const itemPath = path.join(__dirname, '../assets/icons/', size, icon + '.jpg');
            await writeFile(itemPath, buffer);
        } catch (error) {
            console.log('error:', icon)
        }

        await new Promise(f => setTimeout(f, delay));

    }
}

fetchIcons(['spell_holy_summonchampion'], 'large')

const iconNames = await getIconNamesFromFiles();

//fetchIcons(iconNames.slice(0, 50), 'large');
fetchIcons(iconNames, 'large');
