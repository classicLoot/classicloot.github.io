import { wowCraftingSpell, wowItem, wowReagent } from "../app/shared/interfaces/item";
import { readFromDirAs, readIDsAsItems } from "./helper";
import { fetchIcons } from "./icons";
import { fetchIDS, writeFSItem } from "./items";

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
    await fetchIcons(fetchArray, 'large');

    const fixArray: number[] = Array.from(idsToFix.values());

    console.log('to Fix: ', idsToFix.size)
    console.log(fixArray);

    const itemsToFix = readIDsAsItems(fixArray);


    // itemsToFix.forEach(item => {
    //     let newCraftingSpell: wowCraftingSpell[] = [];

    //     item.createdBy?.forEach(spell => {
    //         let newReagents: wowReagent[] = [];

    //         spell.reagents?.forEach(re => {
    //             if (re.icon === '') {
    //                 const reagentItem = readIDsAsItems([re.id]);
    //                 if (reagentItem.length > 0) {
    //                     const newReagent: wowReagent = {
    //                         ...re,
    //                         icon: reagentItem[0].icon
    //                     }
    //                 }
    //                 else {
    //                     newReagents.push(re);
    //                 }

    //             }
    //             else {
    //                 newReagents.push(re);
    //             }
    //         })
    //         let newSpell: wowCraftingSpell = { ...spell, reagents: newReagents }
    //         newCraftingSpell.push(newSpell);
    //     })

    //     const newItem: wowItem = { ...item, createdBy: newCraftingSpell };
    //     writeFSItem(newItem);
    // })
}