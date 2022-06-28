import { wowItem } from "../app/shared/interfaces/item";
import { readFromDirAs } from "./helper";
import { fetchIcons } from "./icons";
import { fetchIDS } from "./items";

//fetchReagents();

export async function fetchReagents(forceDL: boolean = false) {
    // Items

    const filePath = `../assets/items/`;
    const items = readFromDirAs<wowItem>(filePath);
    //console.log(items.length);

    let IDsToFetch = new Set<number>();
    let IconsToFetch = new Set<string>();



    items.forEach(item => {
        item.createdBy?.forEach(spell => {
            spell.reagents?.forEach(r => {
                IDsToFetch.add(r.id);
                IconsToFetch.add(r.icon);
            })
        })
    })

    // Spells
    const filePathSpells = `../assets/spells/`;
    const spells = readFromDirAs<wowItem>(filePathSpells);

    let idsToFix = new Set<number>();

    spells.forEach(spell => {
        spell.createdBy?.forEach(cSpell => {
            cSpell.reagents?.forEach(r => {
                IDsToFetch.add(r.id);
                if (r.icon === '') {
                    idsToFix.add(spell.id);
                }
                else {
                    IconsToFetch.add(r.icon);
                }
            })
        })
    })


    const ItemIDArray: number[] = Array.from(IDsToFetch.values());
    const fetchArray = Array.from(IconsToFetch.values());

    await fetchIDS(ItemIDArray, forceDL);


    console.log('to Fix: ', idsToFix.size)

    await fetchIcons(fetchArray, 'large');
}