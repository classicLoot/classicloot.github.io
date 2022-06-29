import fs from 'fs';
import path from 'path';
import { wowInstanceLootSortedItems } from '../app/shared/interfaces/instance';
import { wowItem } from '../app/shared/interfaces/item';

export function readFromDirAs<T>(pathStr: string): T[] {
    // e.g. '../assets/items/'
    const typePath = path.join(__dirname, pathStr);
    const files = fs.readdirSync(typePath);

    const array: T[] = [];

    for (const file of files) {
        const filePath = path.join(__dirname, pathStr, file);

        const fileRaw = fs.readFileSync(filePath).toString();
        const fileJson: T = JSON.parse(fileRaw);

        array.push(fileJson);
    }

    return array;
}

export function readFromDirAsSingle<T>(pathStr: string): T {
    const filePath = path.join(__dirname, pathStr);
    const fileRaw = fs.readFileSync(filePath).toString();
    const fileJson: T = JSON.parse(fileRaw);

    return fileJson;
}

export function readFilesFromDirAs<T>(pathStr: string, files: string[], ending: string): T[] {

    const typePath = path.join(__dirname, pathStr);

    const array: T[] = [];

    for (const file of files) {
        const filePath = path.join(__dirname, pathStr, `${file}${ending}`);

        const fileRaw = fs.readFileSync(filePath).toString();
        const fileJson: T = JSON.parse(fileRaw);

        array.push(fileJson);
    }


    return array;
}

export function readIDsAsItems(ids: number[]): wowItem[] {
    let arr: wowItem[] = [];
    ids.forEach(id => {
        if (id >= 0) {
            const file = readFromDirAsSingle<wowItem>(`../assets/items/${id}.json`);
            arr.push(file);
        }
        else {
            const file = readFromDirAsSingle<wowItem>(`../assets/spells/${-1 * id}.json`);
            arr.push(file);
        }
    })
    return arr;
}

export function writeToFileAs<T>(file: T, filepath: string) {
    const writePath = path.join(__dirname, filepath);
    fs.writeFileSync(writePath, JSON.stringify(file));
}

export function writeToFileAsAndCreateDir<T>(file: T, dir: string, filename: string) {
    const writePath = path.join(__dirname, dir);
    if (!fs.existsSync(writePath)) {
        fs.mkdirSync(writePath);
    }
    const writePathFile = path.join(__dirname, dir, filename);
    fs.writeFileSync(writePathFile, JSON.stringify(file));
}

export function sanitizeName(str: string) {
    let newStr = str.replaceAll(" ", "").replaceAll("'", "").replaceAll("-", "").replaceAll("/", "").replaceAll("<", "sub").replaceAll(">", "over");
    return newStr;
}

export function checkFSExists(filepath: string, filenName: string) {
    const itemPath = path.join(__dirname, filepath, filenName);
    const bExist = fs.existsSync(itemPath);
    return bExist;
}

export function sortBossLoot(items: wowItem[]): wowInstanceLootSortedItems {

    let armor: wowItem[] = [];
    let jewelry: wowItem[] = [];
    let weapons: wowItem[] = [];
    let tokens: wowItem[] = [];
    let misc: wowItem[] = [];

    items.forEach(item => {
        // Weapon
        if (+item.wowClass === 2) {
            weapons.push(item);
        }
        // Armor
        else if (+item.wowClass === 4) {
            // Shield, Libram, Totem, Off-Hand => Weapon
            if ([6, 7, 8, 9, 10, -5].includes(+item.wowSubClass)) {
                weapons.push(item);
            }
            // Ring, Neck or Trinket => Jewelry
            else if ([-2, -3, -4].includes(+item.wowSubClass)) {
                jewelry.push(item);
            }
            else {

                armor.push(item);
            }
        }
        // Misc
        else {
            // Tier Token
            if (+item.wowSubClass === -2) {
                tokens.push(item);

            }
            else {
                misc.push(item);
            }
        }
    })

    armor.sort((a, b) => +a.wowSubClass - +b.wowSubClass);
    jewelry.sort((a, b) => a.wowSubClass - +b.wowSubClass);
    weapons.sort((a, b) => +a.wowSubClass - +b.wowSubClass);
    tokens.sort((a, b) => +a.id - +b.id);

    armor.sort((a, b) => +a.ilvl - +b.ilvl);
    jewelry.sort((a, b) => +a.ilvl - +b.ilvl);
    weapons.sort((a, b) => +a.ilvl - +b.ilvl);
    tokens.sort((a, b) => +a.ilvl - +b.ilvl);

    const sorted: wowInstanceLootSortedItems = {
        armor: armor,
        jewelry: jewelry,
        weapons: weapons,
        tokens: tokens,
        misc: misc
    }

    return sorted;
}
