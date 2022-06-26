import { wowCollection, wowCollectionSubLink, wowCollectionType, wowSubCollection, wowSubCollectionGroup } from "../../app/shared/interfaces/collection";
import { wowItem } from '../../app/shared/interfaces/item';
import { readFilesFromDirAs, readFromDirAs, readIDsAsItems, sanitizeName, sortBossLoot, writeToFileAs, writeToFileAsAndCreateDir } from '../helper';
import { fetchIcons } from '../icons';
import { fetchIDS } from '../items';



await processCollections('collections', 'wotlk');
await processCollections('reputation', 'wotlk');

export async function processCollections(type: wowCollectionType, addon: 'wotlk') {
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

    await fetchItems(newCollections);
    await fetchIconsFrom(newCollections);

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
            case 'tier9':
                console.log('TIER9', sub.name)
                break;

            default:
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


    const newSub: wowSubCollection = {
        ...sub,
        left: left,
        mid: mid,
        right: right,
    }

    delete newSub.groups;
    delete newSub.ids;

    return newSub;
}

async function fetchItems(colls: wowCollection[]) {
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
        })

    })

    const ItemIDArray: number[] = Array.from(toFetch.values());
    await fetchIDS(ItemIDArray);
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
        })
    })

    const fetchArray = Array.from(toFetch.values());
    const items = readFilesFromDirAs<wowItem>(`../assets/items/`, fetchArray, '.json');

    await fetchIcons(items.map(i => i.icon), 'large');
}