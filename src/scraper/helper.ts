import fs from 'fs';
import path from 'path';

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