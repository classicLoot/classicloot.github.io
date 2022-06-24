import { wowCollection, wowCollectionSubLink, wowCollectionType, wowSubCollection, wowSubCollectionGroup } from "../../app/shared/interfaces/collection";
import { wowItem } from '../../app/shared/interfaces/item';
import { wowAtlas } from "../../assets/external/atlasWotlk";
import { readFilesFromDirAs, readFromDirAs, readIDsAsItems, sanitizeName, sortBossLoot, writeToFileAs, writeToFileAsAndCreateDir } from '../helper';
import { fetchIcons } from '../icons';
import { fetchIDS } from '../items';



await processCollections('collections', 'wotlk');

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
    //console.log('Collection: ', coll.name)

    let newColl: wowCollection = { ...coll };

    let subCollectionArray: wowSubCollection[] = [];

    coll.subCollections?.forEach(sub => {
        let idArray: number[] = [];
        sub.prefixes?.forEach(pre => {
            //console.log('-> ', pre)
            const ids = getFromAtlas('wotlk', pre);
            idArray = [...idArray, ...ids];
        })

        subCollectionArray.push({
            ...sub,
            ids: idArray
        })
    })

    newColl = {
        ...newColl,
        subCollections: subCollectionArray,
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
    }


    const newSub: wowSubCollection = {
        ...sub,
        left: left,
        mid: mid,
        right: right,
    }

    delete newSub.groups;
    delete newSub.ids;
    delete newSub.prefixes;


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


function getAtlas(): wowAtlas {
    let AtlasLoot_Data: wowAtlas = { "init": [] };
    AtlasLoot_Data["Legendaries"] = [34334, 32837, 32838, 30312, 30311, 30317, 30316, 30313, 30314, 30318, 30319, 22736, 19019, 17182, 21176, 22632, 22589, 22631, 22630, 49623, 46017];
    AtlasLoot_Data["Tabards3"] = [51534, 49086, 45983, 43349, 40643, 43348, 43300, 49052, 49054, 46874, 46817, 46818, 43154, 43157, 43155, 43156, 45579, 45580, 45578, 45577, 45574, 45581, 45582, 45585, 45584, 45583];
    AtlasLoot_Data["Tabards2"] = [38312, 23705, 23709, 38313, 38309, 38310, 38314, 38311, 35279, 35280, 31404, 31405, 24344, 25549, 31779, 31804, 31776, 23999, 31777, 31774, 31778, 31773, 32828, 31781, 31775, 31780, 32445, 35221, 24004];
    AtlasLoot_Data["Tabards1"] = [15196, 15198, 20132, 19032, 19506, 15197, 15199, 20131, 19031, 19505, 23192, 5976, 36941, 22999, 28788, 19160];
    AtlasLoot_Data["CardGame1"] = [54068, 54452, 54455, 54069, 54212, 54218, 49287, 49343, 49289, 49288, 49290, 46780, 46779, 45037, 45063, 45047, 49282, 38578, 38577];
    AtlasLoot_Data["CardGame2"] = [38050, 38301, 38233, 35227, 49286, 49285, 35223, 34493, 34492, 34499, 49284, 49283, 33223, 33219, 32588, 32566, 32542, 23705, 23713, 23720];
    AtlasLoot_Data["CardGame3"] = [38312, 23709, 38313, 38309, 38310, 38314, 38314, 38311, 49704, 49703];
    AtlasLoot_Data["PetsMerchant1"] = [44984, 54436, 44970, 44973, 44974, 44982, 39973, 45002, 44980, 45606, 44965, 44971, 44822, 11023, 10360, 10361, 29958, 29901, 29364, 46398, 8485, 8486, 8487, 8490, 8488, 8489, 10393, 10392, 29953, 8500];
    AtlasLoot_Data["PetsMerchant2"] = [8501, 29363, 48120, 8496, 8492, 8495, 10394, 8497, 29956, 29902, 29957, 11026, 29904, 11027, 29903];
    AtlasLoot_Data["PetsQuestCrafted1"] = [45022, 44998, 35350, 33818, 35349, 44983, 33816, 19450, 11110, 10398, 31760, 12529, 11474, 12264, 15996, 11826, 4401, 11825, 21277];
    AtlasLoot_Data["PetsRare1"] = [44738, 44841, 49912, 49646, 40653, 44810, 44819, 49362, 38628, 44723, 46820, 46821, 34478, 39898, 44721, 39896, 39899];
    AtlasLoot_Data["PetsRare2"] = [8494, 43698, 34535, 29960, 8491, 10822, 48112, 20769, 48116, 48118, 27445, 48122, 48124, 8499, 8498, 33993, 35504, 38658, 48114, 48126];
    AtlasLoot_Data["PetsEvent1"] = [23083, 34425, 46545, 46544, 32616, 32622, 53641, 46707, 34955, 33154, 32617, 44794, 32233, 50446, 21301, 21308, 23007, 23015, 21305, 21309, 22235, 23002];
    AtlasLoot_Data["PetsPromotional1"] = [34493, 23713, 49287, 32588, 20371, 13584, 39286, 37297, 46802, 30360, 45180, 25535, 13583, 22114, 34492, 38050, 49343, 39656, 41133, 46767, 13582, 56806];
    AtlasLoot_Data["PetsPetStore1"] = [49693, 54847, 49665, 49663, 49662];
    AtlasLoot_Data["PetsAccessories1"] = [47541, 35223, 37431, 43626, 43352, 44820, 37460];
    AtlasLoot_Data["MountsAlliance1"] = [18766, 18767, 18902, 8632, 47100, 8631, 8629, 18772, 18773, 18774, 8595, 13321, 8563, 13322];
    AtlasLoot_Data["MountsAlliance2"] = [18786, 18787, 18785, 5872, 5864, 5873, 29745, 29746, 29747, 28481, 29744, 29743, 18777, 18776, 18778, 2411, 5656, 5655, 2414];
    AtlasLoot_Data["MountsAlliance3"] = [25473, 25528, 25529, 25527, 25471, 25470, 25472, 44225, 44230, 44235, 44689, 29227, 29229, 29230, 29231, 31830, 31832, 31834, 31836, 13086, 46815, 46813];
    AtlasLoot_Data["MountsHorde1"] = [18796, 18798, 18797, 46099, 5668, 5665, 1132, 29223, 28936, 29224, 29221, 29220, 29222, 28927];
    AtlasLoot_Data["MountsHorde2"] = [18788, 18789, 18790, 8588, 8591, 8592, 18794, 18795, 18793, 15290, 15277, 46100, 13334, 47101, 18791, 46308, 13332, 13333, 13331];
    AtlasLoot_Data["MountsHorde3"] = [25531, 25533, 25477, 25532, 25475, 25476, 25474, 44226, 44231, 44234, 44690, 29102, 29104, 29105, 29103, 31829, 31831, 31833, 31835, 46102, 46816, 46814];
    AtlasLoot_Data["MountsFaction1"] = [32858, 32859, 32857, 32860, 32861, 32862, 32319, 32314, 32317, 32316, 32318, 33999, 43958, 44080, 43961, 44086, 43955, 44707];
    AtlasLoot_Data["MountsPvP1"] = [30609, 34092, 37676, 43516, 46171, 29465, 29467, 29468, 35906, 29471, 19030, 43956, 28915, 29228, 29466, 29469, 29470, 34129, 29472, 19029, 44077];
    AtlasLoot_Data["MountsRare1"] = [33809, 32458, 49098, 49096, 13335, 30480, 50818, 45693, 43986, 43954, 43953, 43952, 44151, 43951, 52200, 44083, 43959, 32768, 49046, 49044, 35513, 19872, 19902];
    AtlasLoot_Data["MountsRare2"] = [44223, 44224, 44843, 44842, 44178, 44164, 45801, 44175, 44160, 45802, 44177, 44168, 46109, 21218, 21323, 21321, 21324];
    AtlasLoot_Data["MountsCraftQuestPromotion1"] = [21176, 43962, 54797, 44558, 44413, 41508, 34061, 44554, 34060, 43599, 37719, 54860, 54068, 49282, 49290, 49284, 23720, 49286, 49283, 49285];
    AtlasLoot_Data["MountsEvent1"] = [45591, 45590, 45589, 45586, 45125, 46745, 46752, 46744, 46748, 46747, 47179, 47180, 45593, 45597, 45595, 45596, 45592, 46750, 46749, 46743, 46751, 46746, 45725];
    AtlasLoot_Data["MountsEvent2"] = [37828, 33977, 33976, 37012, 37011, 50250];
    AtlasLoot_Data["WorldEpicsWrath1"] = [44309, 44312, 44308, 37835, 37254, 44310, 43613, 44311, 43611, 44313, 43612];
    AtlasLoot_Data["Heirloom"] = [42985, 42984, 42952, 42950, 42951, 42949, 42992, 42991, 50255, 49177, 48691, 48687, 48689, 48677, 48683, 48685, 42944, 42945, 42943, 42948, 48716, 48718, 42947, 42946];
    AtlasLoot_Data["Heirloom2"] = [44107, 44103, 44105, 44102, 44101, 44100, 44099, 44098, 44097, 44115, 44091, 44096, 44092, 44094, 44095, 44093];
    AtlasLoot_Data["EmblemofHeroism"] = [40697, 40696, 40694, 40695, 40693, 40692, 40691, 40688, 40689, 40704, 40702, 40703, 40716, 40701, 40700, 40699, 40698];
    AtlasLoot_Data["EmblemofHeroism2"] = [40711, 40712, 40713, 40707, 40706, 40705, 40715, 40714, 40709, 40710, 40708, 40679, 40680, 40681, 40678, 40684, 40682, 40685, 40683];
    AtlasLoot_Data["EmblemofHeroism3"] = [40610, 40611, 40612, 40613, 40614, 40615, 44230, 44231, 36919, 36922, 36925, 36931, 36928, 36934, 43102];
    AtlasLoot_Data["EmblemofHeroism4"] = [42985, 42984, 42952, 42950, 42951, 42949, 48691, 48687, 48689, 48677, 48683, 48685, 42992, 42991, 42944, 42945, 42943, 42948, 48716, 48718, 42947, 42946];
    AtlasLoot_Data["EmblemofValor"] = [40724, 40723, 40722, 40721, 40741, 40740, 40751, 40750, 40739, 40738, 40748, 40749, 40736, 40737, 40746, 40747, 40734, 40733, 40735, 40742, 40743, 40745];
    AtlasLoot_Data["EmblemofValor2"] = [40719, 40720, 40717, 40718, 40342, 40321, 39757, 40191, 40337, 40268, 40207, 40322, 40267, 39728, 40637, 40638, 40639, 40634, 40635, 40636, 40752];
    AtlasLoot_Data["EmblemofConquest1"] = [45840, 45831, 45848, 45833, 45835, 45834, 45824, 45826, 45825, 45843, 45841, 45842, 45838, 45839, 45830, 45829, 45846, 45847, 45837, 45836, 45827, 45828, 45844, 45845];
    AtlasLoot_Data["EmblemofConquest2"] = [45820, 45822, 45823, 45821, 45819, 45638, 45639, 45640, 45632, 45633, 45634, 45509, 45270, 46138, 45510, 45436, 45145, 45144, 45254, 45114, 45255, 45169, 40753, 45087];
    AtlasLoot_Data["EmblemofTriumph1_A"] = [47694, 47693, 47713, 47715, 47690, 47689, 47708, 47712, 47686, 47685, 47704, 47707, 47677, 47681, 47674, 47702, 47697, 47698];
    AtlasLoot_Data["EmblemofTriumph1_H"] = [47695, 47692, 47714, 47716, 47691, 47688, 47709, 47710, 47687, 47684, 47705, 47706, 47678, 47682, 47675, 47701, 47696, 47699];
    AtlasLoot_Data["EmblemofTriumph2"] = [47732, 47729, 47731, 47730, 47733, 47735, 47734, 48722, 48724, 47556, 47671, 47670, 47668, 47664, 47661, 47662, 47672, 47673, 47665, 47666, 47667, 47659, 47660, 47658];
    AtlasLoot_Data["EmblemofFrost"] = [50975, 50974, 50984, 50983, 50996, 50997, 50972, 50973, 50982, 50981, 50994, 50995, 50970, 50971, 50980, 50979, 50993, 50992, 50965, 50969, 50968, 50977, 50976, 50978, 50989, 50987, 50991];
    AtlasLoot_Data["EmblemofFrost2"] = [50468, 50467, 50470, 50466, 50469, 50356, 50355, 50357, 50358, 49908, 47241, 50456, 50457, 50454, 50460, 50461, 50455, 50462, 50459, 50458, 50463, 50464, 50474];
    return AtlasLoot_Data;
}

function getFromAtlas(addon: 'wotlk' = 'wotlk', pre: string): number[] {
    const atlas = getAtlas();
    const keys = Object.keys(atlas);
    const matching = keys.filter(k => k.startsWith(pre));


    let ids: number[] = [];
    matching.forEach(m => {
        const matchingIds: number[] = atlas[m];
        ids = [...ids, ...matchingIds];
    })

    return ids;
}