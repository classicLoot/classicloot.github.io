import { dungeon } from "src/app/shared/interfaces/dungeons";
//47241
const defaultDungeon: dungeon = {
    name: 'name',
    url: 'name',
    descr: 'descr',
    levelMin: 69,
    levelMax: 72,
    bosses: []
}

export const wotlkDungeons: dungeon[] = [
    {
        name: 'Utgarde Keep',
        url: 'UtgardeKeep',
        descr: '',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Keleseth', loot: [35572, 35571, 35570,], lootHeroic: [47241, 37180, 37178, 37179, 37177] },
            { name: 'Skarvald', loot: [35575, 35574, 35573,], lootHeroic: [47241, 37183, 37184, 37182, 37181] },
            { name: 'Ingvar', loot: [35577, 35578, 35576, 33330,], lootHeroic: [47241, 37194, 37193, 37192, 37191, 37189, 37188, 37186, 37190, 41793, 43102] },
            { name: 'Trash', loot: [35580, 35579,], lootHeroic: [37197, 37196] },
        ]
    },
    {
        name: 'The Nexus',
        url: 'TheNexus',
        descr: '',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Ormorok', loot: [35602, 35603, 35601,], lootHeroic: [47241, 37153, 37155, 37152, 37151] },
            { name: 'Anomalus', loot: [35599, 35600, 35598,], lootHeroic: [47241, 37149, 37144, 37150, 37141] },
            { name: 'Telestra', loot: [35605, 35604, 35617, 21524,], lootHeroic: [47241, 37139, 37138, 37135, 37134, 21524] },
            { name: 'KolurgStoutbeardHEROIC', loot: [], lootHeroic: [47241, 37728, 37731, 37730, 37729] },
            { name: 'Keristrasza', loot: [35596, 35595, 35597,], lootHeroic: [47241, 37172, 37170, 37171, 37169, 37165, 37167, 37166, 37162, 41794, 43102] },
        ]
    },
    {
        name: 'Azjol-Nerub',
        url: 'AzjolNerub',
        descr: 'descr',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Krikthir', loot: [35657, 35656, 35655,], lootHeroic: [47241, 37218, 37219, 37217, 37216] },
            { name: 'Hadronox', loot: [35660, 35659, 35658,], lootHeroic: [47241, 37222, 37230, 37221, 37220] },
            { name: 'Anubarak', loot: [35663, 35662, 35661, 43411,], lootHeroic: [47241, 37242, 37240, 37241, 37238, 37236, 37237, 37232, 37235, 41796, 43102] },
            { name: 'Trash', loot: [], lootHeroic: [37243, 37625, 37624] }
        ]
    },
    {
        name: 'Ahnkahet',
        url: 'Ahnkahet',
        descr: 'descr',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Nadox', loot: [35607, 35608, 35606,], lootHeroic: [47241, 37594, 37593, 37592, 37591] },
            { name: 'Taldaram', loot: [35611, 35610, 35609,], lootHeroic: [47241, 37613, 37614, 37612, 37595] },
            { name: 'AmanitarHEROIC', loot: [], lootHeroic: [47241, 43287, 43286, 43285, 43284] },
            { name: 'Jedoga', loot: [43278, 43279, 43277, 21524,], lootHeroic: [47241, 43283, 43280, 43282, 43281, 21524] },
            { name: 'Volazj', loot: [35612, 35613, 35614,], lootHeroic: [47241, 37622, 37623, 37620, 37619, 37616, 37618, 37617, 37615, 41790, 43102] },
            { name: 'Trash', loot: [35616, 35615,], lootHeroic: [37625, 37624] }
        ]
    },
    {
        name: 'DrakTharonKeep',
        url: 'DrakTharonKeep',
        descr: 'descr',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Trollgore', loot: [35620, 35619, 35618,], lootHeroic: [47241, 37715, 37714, 37717, 37712] },
            { name: 'Novos', loot: [35632, 35631, 35630,], lootHeroic: [47241, 37722, 37718, 37721] },
            { name: 'KingDred', loot: [35635, 35634, 35633,], lootHeroic: [47241, 37725, 37724, 37726, 37723] },
            { name: 'Tharonja', loot: [35638, 35637, 35636,], lootHeroic: [47241, 37798, 37791, 37788, 37784, 37735, 37732, 37734, 37733, 41795, 43102] },
            { name: 'Trash', loot: [35641, 35640, 35639,], lootHeroic: [37799, 37800, 37801] }
        ]
    },
    {
        name: 'Violet Hold',
        url: 'VioletHold',
        descr: 'descr',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Erekem', loot: [43363, 43375,], lootHeroic: [47241, 43406, 43405, 43407] },
            { name: 'Zuramat', loot: [43353, 43358,], lootHeroic: [47241, 43403, 43402, 43404] },
            { name: 'Xevozz', loot: [35644, 35642,], lootHeroic: [47241, 37867, 37868, 37861] },
            { name: 'Ichoron', loot: [35647, 35643,], lootHeroic: [47241, 43401, 37862, 37869] },
            { name: 'Moragg', loot: [43387, 43382,], lootHeroic: [47241, 43410, 43408, 43409] },
            { name: 'Lavanthor', loot: [35646, 35645,], lootHeroic: [47241, 37870, 37872, 37871] },
            { name: 'Cyanigosa', loot: [35650, 35651, 35649,], lootHeroic: [47241, 37884, 37886, 43500, 37883, 37876, 37875, 37874, 37873, 41791, 43102] },
            { name: 'Trash', loot: [35654, 35653, 35652, 35654,], lootHeroic: [37890, 37891, 35653, 37889, 35652] }
        ]
    },
    {
        name: 'Gundrak',
        url: 'Gundrak',
        descr: 'descr',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Sladran', loot: [35584, 35585, 35583,], lootHeroic: [47241, 37629, 37628, 37627, 37626] },
            { name: 'Colossus', loot: [35591, 35592, 35590,], lootHeroic: [47241, 37637, 37636, 37634, 37635] },
            { name: 'Moorabi', loot: [35588, 35589, 35587,], lootHeroic: [47241, 37630, 37633, 37632, 37631] },
            { name: 'EckHEROIC', loot: [], lootHeroic: [47241, 43313, 43312, 43311, 43310] },
            { name: 'Galdarah', loot: [43305, 43309, 43306,], lootHeroic: [47241, 37643, 37644, 37645, 37642, 37641, 37640, 37639, 37638, 43102] },
            { name: 'Trash', loot: [35594, 35593,], lootHeroic: [37647, 37648, 37646] }
        ]
    },
    {
        name: 'Halls of Stone',
        url: 'HallsofStone',
        descr: 'descr',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Maiden', loot: [38614, 38613, 38611,], lootHeroic: [47241, 38616, 38615, 38617, 38618] },
            { name: 'Krystallus', loot: [35673, 35672, 35670,], lootHeroic: [47241, 37652, 37650, 37651] },
            { name: 'Tribunal', loot: [35677, 35676, 35675,], lootHeroic: [47241, 37655, 37656, 37654, 37653] },
            { name: 'Sjonnir', loot: [35679, 35678, 35680,], lootHeroic: [47241, 37669, 37668, 37670, 37667, 37666, 37658, 37657, 37660, 41792, 43102] },
            { name: 'Trash', loot: [35682, 35683, 35681,], lootHeroic: [37673, 37672, 37671] }
        ]
    },
    {
        name: 'Halls of Lightning',
        url: 'HallsofLightning',
        descr: 'descr',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Bjarngrim', loot: [36982, 36979, 36980, 36981,], lootHeroic: [47241, 37825, 37818, 37814, 37826] },
            { name: 'Volkhan', loot: [36983, 36985, 36986, 36984,], lootHeroic: [47241, 37840, 37843, 37842, 37841] },
            { name: 'Ionar', loot: [39536, 39657, 39534, 39535,], lootHeroic: [47241, 37846, 37845, 37826, 37844] },
            { name: 'Loken', loot: [36991, 36996, 36992, 36995, 36988, 36993, 36994, 36989, 41799, 43151,], lootHeroic: [47241, 37854, 37853, 37855, 37852, 37851, 37850, 37849, 37848, 41799, 43102] },
            { name: 'Trash', loot: [36997, 37000, 36999,], lootHeroic: [37858, 37857, 37856] }
        ]
    },
    {
        name: 'CoTStratholme',
        url: 'CoTStratholme',
        descr: 'descr',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Meathook', loot: [37083, 37082, 37079, 37081,], lootHeroic: [47241, 37680, 37678, 37679, 37675] },
            { name: 'Salramm', loot: [37084, 37095, 37088, 37086,], lootHeroic: [47241, 37684, 37682, 37683, 37681] },
            { name: 'Epoch', loot: [37106, 37105, 37096, 37099,], lootHeroic: [47241, 37687, 37686, 37688, 37685] },
            { name: 'InfiniteCorruptorHEROIC', loot: [], lootHeroic: [47241, 43951] },
            { name: 'MalGanis', loot: [37113, 37114, 37110, 37109, 37111, 37108, 37112, 37107,], lootHeroic: [47241, 37696, 37695, 37694, 37693, 43085, 37691, 37690, 37689, 37692, 43102] },
            { name: 'Trash', loot: [37117, 37116, 37115], lootHeroic: [] }
        ]
    },
    {
        name: 'Utgarde Pinnacle',
        url: 'UtgardePinnacle',
        descr: 'descr',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Sorrowgrave', loot: [37043, 37040, 37037, 37038,], lootHeroic: [47241, 37370, 37369, 37368, 37367] },
            { name: 'Palehoof', loot: [37048, 37052, 37051, 37050,], lootHeroic: [47241, 37374, 37373, 37376, 37371] },
            { name: 'Skadi', loot: [37055, 37057, 37056, 37053,], lootHeroic: [47241, 44151, 37389, 37379, 37377, 37384] },
            { name: 'Ymiron', loot: [37067, 37062, 37066, 37058, 37064, 37060, 37065, 37061, 41797,], lootHeroic: [47241, 37408, 37409, 37407, 37401, 37398, 37395, 37397, 37390, 41797, 43102] },
            { name: 'Trash', loot: [37070, 37069, 37068,], lootHeroic: [37587, 37590, 37410] }
        ]
    },
    {
        name: 'Occulus',
        url: 'Occulus',
        descr: 'descr',
        levelMin: 69,
        levelMax: 72,
        bosses: [
            { name: 'Drakos', loot: [36945, 36946, 36943, 36944,], lootHeroic: [47241, 37258, 37256, 37257, 37255] },
            { name: 'Cloudstrider', loot: [36947, 36949, 36948, 36950,], lootHeroic: [47241, 37261, 37262, 37263, 37260] },
            { name: 'Urom', loot: [36954, 36951, 36953, 36952, 21525,], lootHeroic: [47241, 37289, 37288, 37195, 37264, 21525] },
            { name: 'Eregos', loot: [36973, 36971, 36969, 36974, 36961, 36972, 36962, 36975, 41798,], lootHeroic: [47241, 37361, 37363, 37362, 37360, 37291, 37294, 37293, 37292, 43102, 52676] },
            { name: 'Trash', loot: [36978, 36977, 36976,], lootHeroic: [37366, 37365, 37290, 37364] }
        ]
    },
]