import fs from 'fs';
import path from 'path';
import * as csv from 'fast-csv';
import { wowAchievement } from "../../app/shared/interfaces/achievement";
import { writeToFileAs, writeToFileAsAndCreateDir } from '../helper';

await processAchievements();

interface rawRow {
    [key: string]: string | number
}

function readAchievements(filePath: string, options: csv.ParserOptionsArgs): Promise<wowAchievement[]> {
    return new Promise((resolve, reject) => {
        const avArray: wowAchievement[] = [];
        const avPath = path.join(__dirname, filePath);

        fs.createReadStream(avPath).pipe(csv.parse<rawRow, wowAchievement>(options))
            .transform(
                (data: rawRow): wowAchievement => ({

                    id: Number(data['ID']),
                    instanceID: Number(data['Instance_ID']),
                    faction: Number(data['Faction']),
                    supercedes: Number(data['Supercedes']),
                    name: String(data['Title_lang[0]']),
                    descr: String(data['Description_lang[0]']),
                    category: Number(data['Category']),
                    points: Number(data['Points']),
                    iconID: Number(data['IconID']),
                    reward: String(data['Reward_lang[0]']),

                })
            )
            .on('error', error => console.log(error))
            .on('data', row => {
                //console.log(row)
                avArray.push(row)
            })
            .on('end', (rowCount: number) => {
                console.log(`Parsed ${rowCount} rows`);
                resolve(avArray);
            });
    })
}

function writeAchievements(avs: wowAchievement[]) {
    avs.forEach(av => {
        const filePath = `../assets/achievements/${av.id}.json`;
        writeToFileAs<wowAchievement>(av, filePath);
    })
}

async function processAchievements() {
    const avs = await readAchievements('../../assets/_external/achievement.csv', { headers: true });
    writeAchievements(avs);
    //console.log(avs)
}