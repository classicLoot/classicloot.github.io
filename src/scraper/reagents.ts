import { wowItem } from "../app/shared/interfaces/item";
import { readFromDirAs } from "./helper";
import { fetchIcons } from "./icons";
import { fetchIDS } from "./items";

//fetchReagents();

export async function fetchReagents() {
    const filePath = `../assets/items/`;
    const items = readFromDirAs<wowItem>(filePath);
    //console.log(items.length);

    let IDsToFetch = new Set<number>();
    let IconsToFetch = new Set<string>();


    items.forEach(item => {
        if (item.createdBy) {
            if (item.createdBy.length > 1) {
                const reagents = item.createdBy.slice(1);
                reagents.forEach(r => {
                    IDsToFetch.add(r.id);
                    IconsToFetch.add(r.icon);
                })
            }
        }
    })
    const ItemIDArray: number[] = Array.from(IDsToFetch.values());
    const fetchArray = Array.from(IconsToFetch.values());

    await fetchIDS(ItemIDArray);
    await fetchIcons(fetchArray, 'large');
}