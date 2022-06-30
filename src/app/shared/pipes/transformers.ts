import { wowItem } from "../interfaces/item";

export function wowRecipeTransform(item: wowItem): string {
    const base = 'Recipe -'
    switch (+item.wowSubClass) {
        case 1: return base + ' Leatherworking';
        case 2: return base + ' Tailoring';
        case 3: return base + ' Engineering';
        case 4: return base + ' Blacksmithing';

        case 10: return base + ' Jewelcrafting';


        default: return 'Recipe - NYI';
    }
}

export function wowWeaponTransform(item: wowItem): string {
    switch (+item.wowSubClass) {
        case 0: return wowSlotTransform(item.slot) + ', Axe';
        case 1: return 'Two-handed, Axe';
        case 2: return 'Ranged, Bow';
        case 3: return 'Ranged, Gun';
        case 4: return wowSlotTransform(item.slot) + ', Mace';
        case 5: return 'Two-handed, Mace';
        case 6: return wowSlotTransform(item.slot) + ', Polearm';
        case 7: return wowSlotTransform(item.slot) + ', Sword';
        case 8: return 'Two-handed, Sword';

        case 10: return 'Two-handed, Staff';

        case 13: return wowSlotTransform(item.slot) + ', Fist Weapon';

        case 15: return wowSlotTransform(item.slot) + ', Dagger';
        case 16: return 'Ranged, Thrown';

        case 18: return 'Ranged, Crossbow';
        case 19: return 'Ranged, Wand';
        case 20: return 'Fishing Pole';

        default: return 'Weapon - NYI';
    }
}

export function wowArmorTransform(item: wowItem): string {
    switch (+item.wowSubClass) {
        // classic
        case 1: return wowSlotTransform(item.slot) + ', Cloth';
        case 2: return wowSlotTransform(item.slot) + ', Leather';
        case 3: return wowSlotTransform(item.slot) + ', Mail';
        case 4: return wowSlotTransform(item.slot) + ', Plate';

        // other
        case 6: return wowSlotTransform(item.slot) + ', Shield';
        case 7: return wowSlotTransform(item.slot) + ', Libram';
        case 8: return wowSlotTransform(item.slot) + ', Idol';
        case 9: return wowSlotTransform(item.slot) + ', Totem';
        case 10: return wowSlotTransform(item.slot) + ', Sigil';



        case -2: return 'Ring';
        case -3: return 'Neck';
        case -4: return 'Trinket';
        case -5: return 'Held In Off-Hand';
        case -6: return 'Cloak';
        case -7: return 'Tabard';
        case -8: return 'Shirt';


        default: return '*Armor* - NYI';
    }
}

export function wowSlotTransform(id: number): string {
    switch (+id) {
        case 1: return 'Head';
        case 2: return 'Neck';
        case 3: return 'Shoulder';

        case 5: return 'Chest';
        case 6: return 'Waist';
        case 7: return 'Legs';
        case 8: return 'Feet';
        case 9: return 'Wrist';
        case 10: return 'Hands';
        case 11: return 'Finger';
        case 12: return 'Trinket';
        case 13: return 'One-Hand';
        case 14: return 'Off Hand';
        case 15: return 'Ranged';
        case 16: return 'Back';
        case 17: return 'Two-Hand';
        case 18: return 'Bag';

        case 21: return 'Main Hand';
        case 22: return 'Off Hand';

        case 25: return 'Thrown';

        case 28: return 'Relic';

        default: return 'SlotNYI';
    }
}

export function wowMiscTransform(item: wowItem): string {
    switch (+item.wowSubClass) {
        case 0: return 'Misc, Junk';
        case 2: return 'Pet'
        case 4: return 'Armor Token';
        case 5: return 'Mount';
        case -2: return 'Armor Token';
        case -7: return 'Flying Mount';

        default: return 'Misc - NYI';
    }
}

export function wowConsumableTransform(item: wowItem): string {
    // Ulduar Fix, e.g. 'Freya's Sigil'
    if ([45506, 45786, 45784, 45788, 45787, 45038, 45857].includes(+item.id)) {
        return 'Quest Item'
    }
    return 'Consumable';
}

export function wowProjectileTransform(item: wowItem): string {
    switch (+item.wowSubClass) {
        case 2: return 'Projectile - Arrow';
        case 3: return 'Projectile - Bullet';

    }
    return 'Projectile - NYI ' + item.wowSubClass;
}

export function wowQuiverTransform(item: wowItem): string {
    switch (+item.wowSubClass) {
        case 2: return 'Quiver';
        case 3: return 'Ammo Pouch';

    }
    return 'Quiver - NYI ' + item.wowSubClass;
}

export function wowGlyphTransform(item: wowItem): string {

    switch (+item.wowSubClass) {
        case 1: return 'Glyph - Warrior';
        case 2: return 'Glyph - Paladin';
        case 3: return 'Glyph - Hunter';
        case 4: return 'Glyph - Rogue';
        case 5: return 'Glyph - Priest';
        case 6: return 'Glyph - Deathknight';
        case 7: return 'Glyph - Shaman';
        case 8: return 'Glyph - Mage';
        case 9: return 'Glyph - Warlock';

        case 11: return 'Glyph - Druid';

    }
    return 'Glyph - NYI' + item.wowSubClass;
}