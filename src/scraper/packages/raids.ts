import { wowRaid } from "../../app/shared/interfaces/raids";
import { readFromDirAs } from "../helper";
import { fetchIDS } from "../items";

const IDSet = new Set<number>();

const raids: wowRaid[] = readFromDirAs<wowRaid>('../assets/data/raids/wotlk');


raids.forEach(raid => {
    raid.bosses.forEach(boss => {
        boss.loot.forEach(loot => {
            IDSet.add(loot);
        })
        boss.lootHeroic.forEach(loot => {
            IDSet.add(loot);
        })
    })
})

const ItemIDArray: number[] = Array.from(IDSet.values());

fetchIDS(ItemIDArray);
