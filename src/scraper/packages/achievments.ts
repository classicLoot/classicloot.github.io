import * as csv from 'fast-csv';
import fs from 'fs';
import path from 'path';
import { wowAchievement, wowAchievementPower } from "../../app/shared/interfaces/achievement";
import { checkFSExists, writeToFileAs } from '../helper';
import progress from 'cli-progress';
import fetch from 'node-fetch';
import { delay } from '../scraper';


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

                    iconName: ''
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
        const filePath = `../assets/achievements/raw/${av.id}.json`;
        writeToFileAs<wowAchievement>(av, filePath);
    })
}

async function processAchievements() {
    const avs = await readAchievements('../../assets/_external/achievement.csv', { headers: true });
    writeAchievements(avs);

    const usedAVs = getUsedAchievements();
    fetchAchievementsPower(usedAVs);
    //console.log(avs)
}

function getUsedAchievements(): number[] {
    return [2051];
}

async function fetchAchievementsPower(avs: number[]) {
    console.log(`**FETCH AV Power: ${avs.length}**`);

    const existsArr: number[] = [];
    const errorArr: number[] = [];
    const updatedArr: number[] = [];

    // PROGRESS
    const bar1 = new progress.SingleBar({}, progress.Presets.shades_classic);
    bar1.start(avs.length, 0);
    //

    for (const av of avs) {

        if (checkFSExists('../../assets/achievements/power', `${av}.json`)) {
            existsArr.push(av);
            bar1.increment();
            continue;
        }

        try {
            const response = await fetch(`https://wotlkdb.com/?achievement=${av}&domain=www&power`);
            const body = await response.text();

            const iconMatch: string = body.match(/icon: '(.*)',/) ? body.match(/icon: '(.*)',/)![1] : '';
            const nameMatch: string = body.match(/name_enus: '(.*)',/) ? body.match(/name_enus: '(.*)',/)![1] : '';
            const tooltipMatch: string = body.match(/tooltip_enus: '(.*)'/) ? body.match(/tooltip_enus: '(.*)'/)![1] : '';

            const power: wowAchievementPower = {
                icon: iconMatch,
                name_enus: nameMatch,
                tooltip_enus: tooltipMatch,
            };

            writeToFileAs<wowAchievementPower>(power, `../assets/achievements/power/${av}.json`)

            updatedArr.push(av);
            bar1.increment();
        } catch (error) {
            console.log('error:', av)
            console.log(error)
            errorArr.push(av);
            bar1.increment();
        }

        await new Promise(f => setTimeout(f, delay));
    }

    bar1.stop();

    console.log('**FINISHED**');
    console.log('Total ', avs.length);
    console.log('updated ', updatedArr.length);
    console.log('exists ', existsArr.length);
    console.log('error ', errorArr.length);

}

async function updateFromPower() {

}