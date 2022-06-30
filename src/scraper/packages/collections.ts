import { wowCollection, wowCollectionSubLink, wowCollectionType, wowSubCollection, wowSubCollectionGroup } from "../../app/shared/interfaces/collection";
import { wowCraftingSpell, wowItem } from '../../app/shared/interfaces/item';
import { wowVendorInfo } from '../../app/shared/interfaces/vendor';

import { readFilesFromDirAs, readFromDirAs, readIDsAsItems, sanitizeName, sortBossLoot, writeToFileAs, writeToFileAsAndCreateDir } from '../helper';
import { fetchIcons } from '../icons';
import { checkFSItem, fetchIDS, fetchSingleItem, writeFSItem } from '../items';
import { fetchReagents } from "../reagents";



await processCollections('reputation', 'wotlk');
await processCollections('crafting', 'wotlk', false);
await processCollections('collections', 'wotlk');

await fetchReagents(false);

export async function processCollections(type: wowCollectionType, addon: 'wotlk', forceDL: boolean = false) {
    const filePath = `../assets/data/manual/${type}/${addon}/`;
    const collections: wowCollection[] = readFromDirAs<wowCollection>(filePath);
    console.log(`Process ${type} from ${addon} @ ${filePath}`);
    console.log('Instances: ', collections.length);

    let newCollections: wowCollection[] = []

    for (const coll of collections) {
        const newColl = processIndividual(coll);
        newCollections.push(newColl);
    }
    writeMeta(newCollections, type, addon);
    writeMetaIndividual(newCollections, type, addon);

    await fetchItems(newCollections, forceDL);
    await fetchIconsFrom(newCollections);
    if (type === 'collections') {
        await updateVendorPrice(addon);
    }
    sortAndWriteCollections(newCollections, type, addon);
}

function processIndividual(coll: wowCollection) {
    //console.log('Collection: ', coll.type)   

    const newColl = {
        ...coll,
        link: sanitizeName(coll.name)
    };

    return newColl;
}

function writeMeta(colls: wowCollection[], type: wowCollectionType, addon: 'wotlk') {
    const removeUseless: wowCollection[] = colls.map(coll => {
        let newColl: wowCollection = { ...coll, descr: '', subCollections: [] }

        return newColl;
    })

    const filePath = `../assets/data/gen/${addon}/${type}/meta.json`;
    writeToFileAs<wowCollection[]>(removeUseless, filePath);
}

function writeMetaIndividual(colls: wowCollection[], type: wowCollectionType, addon: 'wotlk') {
    colls.forEach(coll => {
        if (coll.subCollections) {
            const subCollSubLinks: wowCollectionSubLink[] = coll.subCollections.map(sub => {
                return {
                    name: sub.name,
                    link: sanitizeName(sub.name)
                } as wowCollectionSubLink
            })
            const meta: wowCollection = {
                name: coll.name,
                link: coll.link,
                descr: coll.descr,
                type: coll.type,
                subLinks: subCollSubLinks
            }

            const filePath = `../assets/data/gen/${addon}/${type}/${coll.link}.json`;
            writeToFileAs<wowCollection>(meta, filePath);
        }
    })
}

function sortAndWriteCollections(colls: wowCollection[], type: wowCollectionType, addon: 'wotlk') {
    for (const coll of colls) {
        if (!coll.subCollections) {
            continue;
        }

        coll.subCollections.forEach(sub => {
            const newColl = sortSubCollection(sub);
            const filePath = `../assets/data/gen/${addon}/${type}/${coll.link}/`;
            writeToFileAsAndCreateDir<wowSubCollection>(newColl, filePath, `${sanitizeName(sub.name)}.json`);
        })
    }
}

function sortSubCollection(sub: wowSubCollection): wowSubCollection {
    const itemData = readIDsAsItems(sub.ids ? sub.ids : []);

    let grps: wowSubCollectionGroup[] = [];
    let left: wowSubCollectionGroup[] = [];
    let mid: wowSubCollectionGroup[] = [];
    let right: wowSubCollectionGroup[] = [];

    if (sub.groups) {

        grps = sub.groups.map(grp => {
            const itemDataGroup = readIDsAsItems(grp.ids ? grp.ids : []);
            return {
                ...grp,
                itemData: itemDataGroup,
                pos: grp.pos ? grp.pos : 'mid'
            }
        })

        left = grps.filter(grp => grp.pos === 'left');
        mid = grps.filter(grp => grp.pos === 'mid');
        right = grps.filter(grp => grp.pos === 'right');
    }

    // group/sort manually
    else {

        const groupBy: string = sub.groupBy ? sub.groupBy : 'default';

        switch (groupBy) {
            case 'tier9': {
                const levelOne = 232;
                const levelTwo = 245;
                const levelThree = 258;

                sub.mid?.forEach(m => {
                    const itemData = readIDsAsItems(m.ids ? m.ids : []);

                    const normal10 = itemData.filter(i => Number(i.ilvl) === levelOne);
                    grps.push(
                        {
                            name: m.name,
                            pos: m.pos,
                            itemData: normal10,
                            filter: "10-Normal-" + m.filter

                        }
                    );

                    const normal25 = itemData.filter(i => Number(i.ilvl) === levelTwo);
                    grps.push(
                        {
                            name: m.name,
                            pos: m.pos,
                            itemData: normal25,
                            filter: "25-Normal-" + m.filter
                        },
                        {
                            name: m.name,
                            pos: m.pos,
                            itemData: normal25,
                            filter: "10-Heroic-" + m.filter
                        }
                    );

                    const heroic25 = itemData.filter(i => Number(i.ilvl) === levelThree);
                    grps.push(
                        {
                            name: m.name,
                            pos: m.pos,
                            itemData: heroic25,
                            filter: "25-Heroic-" + m.filter
                        }
                    );


                })

                left = grps.filter(grp => grp.pos === 'left');
                mid = grps.filter(grp => grp.pos === 'mid');
                right = grps.filter(grp => grp.pos === 'right');

                break;
            }


            case 'tier10': {
                const levelOne = 251;
                const levelTwo = 264;
                const levelThree = 277;

                sub.mid?.forEach(m => {
                    const itemData = readIDsAsItems(m.ids ? m.ids : []);

                    const normal10 = itemData.filter(i => Number(i.ilvl) === levelOne);
                    grps.push(
                        {
                            name: m.name,
                            pos: m.pos,
                            itemData: normal10,
                            filter: "10-Normal"

                        }
                    );

                    const normal25 = itemData.filter(i => Number(i.ilvl) === levelTwo);
                    grps.push(
                        {
                            name: m.name,
                            pos: m.pos,
                            itemData: normal25,
                            filter: "25-Normal"
                        },
                        {
                            name: m.name,
                            pos: m.pos,
                            itemData: normal25,
                            filter: "10-Heroic"
                        }
                    );

                    const heroic25 = itemData.filter(i => Number(i.ilvl) === levelThree);
                    grps.push(
                        {
                            name: m.name,
                            pos: m.pos,
                            itemData: heroic25,
                            filter: "25-Heroic"
                        }
                    );


                })

                left = grps.filter(grp => grp.pos === 'left');
                mid = grps.filter(grp => grp.pos === 'mid');
                right = grps.filter(grp => grp.pos === 'right');

                break;
            }

            case 'quality': {
                const legendary = itemData.filter(i => Number(i.quality) === 5).sort((a, b) => a.name.localeCompare(b.name));
                const epic = itemData.filter(i => Number(i.quality) === 4).sort((a, b) => a.name.localeCompare(b.name));
                const blue = itemData.filter(i => Number(i.quality) === 3).sort((a, b) => a.name.localeCompare(b.name));
                const green = itemData.filter(i => Number(i.quality) === 2).sort((a, b) => a.name.localeCompare(b.name));
                const white = itemData.filter(i => Number(i.quality) === 1).sort((a, b) => a.name.localeCompare(b.name));

                left = [];
                right = [];
                mid = [
                    {
                        name: 'legendary',
                        itemData: legendary
                    },
                    {
                        name: 'epic',
                        itemData: epic
                    },
                    {
                        name: 'blue',
                        itemData: blue
                    },
                    {
                        name: 'green',
                        itemData: green
                    },
                    {
                        name: 'white',
                        itemData: white
                    }
                ];

                mid = mid.filter(entry => entry.itemData ? entry.itemData.length > 0 : false);

                break;
            }

            case 'quality-ilvl': {
                const legendary = itemData.filter(i => Number(i.quality) === 5).sort((a, b) => a.name.localeCompare(b.name));
                const epic = itemData.filter(i => Number(i.quality) === 4).sort((a, b) => a.name.localeCompare(b.name));
                const blue = itemData.filter(i => Number(i.quality) === 3).sort((a, b) => a.name.localeCompare(b.name));
                const green = itemData.filter(i => Number(i.quality) === 2).sort((a, b) => a.name.localeCompare(b.name));
                const white = itemData.filter(i => Number(i.quality) === 1).sort((a, b) => a.name.localeCompare(b.name));

                // epic
                const epicLevelSet = new Set<number>();
                const epicArr: wowSubCollectionGroup[] = [];
                epic.forEach(i => { epicLevelSet.add(+i.ilvl) });
                Array.from(epicLevelSet.values()).sort((a, b) => a - b).forEach(lvl => {
                    const items = epic.filter(i => +i.ilvl === lvl);
                    epicArr.push({
                        name: `${lvl}`,
                        itemData: items
                    })
                })


                // blue
                const blueLevelSet = new Set<number>();
                const blueArr: wowSubCollectionGroup[] = [];
                blue.forEach(i => { blueLevelSet.add(+i.ilvl) });
                Array.from(blueLevelSet.values()).sort((a, b) => a - b).forEach(lvl => {
                    const items = blue.filter(i => +i.ilvl === lvl);
                    blueArr.push({
                        name: `${lvl}`,
                        itemData: items
                    })
                })

                left = [];
                right = [];
                mid = [
                    {
                        name: 'legendary',
                        itemData: legendary
                    },
                    ...epicArr,
                    ...blueArr,
                    {
                        name: 'green',
                        itemData: green
                    },
                    {
                        name: 'white',
                        itemData: white
                    }
                ];

                mid = mid.filter(entry => entry.itemData ? entry.itemData.length > 0 : false);

                break;
            }


            default: {
                const sorted = sortBossLoot(itemData);

                left = [
                    {
                        name: 'misc',
                        itemData: sorted.misc
                    },
                    {
                        name: 'armor',
                        itemData: sorted.armor
                    }
                ];

                right = [
                    {
                        name: 'tokens',
                        itemData: sorted.tokens
                    },
                    {
                        name: 'jewelry',
                        itemData: sorted.jewelry
                    },
                    {
                        name: 'weapons',
                        itemData: sorted.weapons
                    }
                ];

                left = left.filter(entry => entry.itemData ? entry.itemData.length > 0 : false);
                right = right.filter(entry => entry.itemData ? entry.itemData.length > 0 : false);

                mid = [];
                break;
            }

        }
    }

    const newSub: wowSubCollection = {
        ...sub,
        left: left,
        mid: mid,
        right: right,
    }

    delete newSub.groups;
    delete newSub.ids;
    delete newSub.groupBy;

    return newSub;
}

async function fetchItems(colls: wowCollection[], forceDL: boolean = false) {
    let toFetch = new Set<number>();

    colls.forEach(coll => {
        coll.subCollections?.forEach(sub => {
            sub.ids?.forEach(id => {
                toFetch.add(id);
            })
            sub.groups?.forEach(grp => {
                grp.ids?.forEach(id => {
                    toFetch.add(id);
                })
            })
            sub.mid?.forEach(grp => {
                grp.ids?.forEach(id => {
                    toFetch.add(id);
                })
            })
        })

    })

    const ItemIDArray: number[] = Array.from(toFetch.values());
    await fetchIDS(ItemIDArray, forceDL);
}

async function fetchIconsFrom(colls: wowCollection[]) {
    let toFetch = new Set<string>();

    colls.forEach(coll => {
        coll.subCollections?.forEach(sub => {
            sub.ids?.forEach(id => {
                toFetch.add(id.toString());
            })
            sub.groups?.forEach(grp => {
                grp.ids?.forEach(id => {
                    toFetch.add(id.toString());
                })
            })
            sub.mid?.forEach(grp => {
                grp.ids?.forEach(id => {
                    toFetch.add(id.toString());
                })
            })
        })
    })

    const fetchArray = Array.from(toFetch.values());

    const fetchArrayPos = fetchArray.filter(str => !str.startsWith('-'));
    const fetchArrayNeg = fetchArray.filter(str => str.startsWith('-')).map(str => str.replace('-', ''));


    const itemsPos = readFilesFromDirAs<wowItem>(`../assets/items/`, fetchArrayPos, '.json');
    const itemsNeg = readFilesFromDirAs<wowItem>(`../assets/spells/`, fetchArrayNeg, '.json');


    await fetchIcons(itemsPos.map(i => i.icon), 'large');
    await fetchIcons(itemsNeg.map(i => i.icon), 'large');

}

async function updateVendorPrice(addon: 'wotlk') {
    const filePath = `../assets/data/manual/vendor/${addon}/`;
    const vendorInfos: wowVendorInfo[] = readFromDirAs<wowVendorInfo>(filePath);
    vendorInfos.forEach(async info => {
        let vendorItem: wowItem;
        if (!checkFSItem(info.id)) {
            vendorItem = await fetchSingleItem(info.id);
            writeFSItem(vendorItem);

        }
        vendorItem = readIDsAsItems([info.id])[0];

        info.dataArray.forEach(async data => {
            data.ids.forEach(async id => {

                let item: wowItem;
                if (!checkFSItem(id)) {
                    item = await fetchSingleItem(id);
                    writeFSItem(item);

                }

                item = readIDsAsItems([id])[0];
                const newEntry: wowCraftingSpell = {
                    name: "Vendor",
                    id: vendorItem.id,
                    icon: vendorItem.icon,
                    reagents: [{
                        id: vendorItem.id,
                        name: vendorItem.name,
                        quality: vendorItem.quality,
                        icon: vendorItem.icon,
                        count: data.count
                    }]
                }
                if (item.createdBy) {
                    let created = item.createdBy.filter(e => +e.id != +vendorItem.id);
                    created.push(newEntry);
                    item.createdBy = created;
                }
                else {
                    item.createdBy = [newEntry];
                }

                writeFSItem(item);


            })
        })
    })
}