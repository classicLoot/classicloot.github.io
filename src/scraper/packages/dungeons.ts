import { wotlkDungeons } from "../../app/features/dungeons/data/wotlk";
import { dungeon } from "../../app/shared/interfaces/dungeons";
import { fetchIDS } from "../items";

const IDSet = new Set<number>();

const dungeons: dungeon[] = wotlkDungeons;

dungeons.forEach(dng => {
    dng.bosses.forEach(boss => {
        boss.loot.forEach(loot => {
            IDSet.add(loot);
        })
    })
})

const ItemIDArray: number[] = Array.from(IDSet.values());

fetchIDS(ItemIDArray);
