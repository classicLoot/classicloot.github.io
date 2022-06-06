import fs from 'fs';
import path from 'path';
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

export function readIDsAsItems(ids: number[]) {
    return readFilesFromDirAs<wowItem>('../assets/items/', ids.map(id => String(id)), '.json');
}