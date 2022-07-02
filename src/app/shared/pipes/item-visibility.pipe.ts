import { Pipe, PipeTransform } from '@angular/core';
import { wowItem } from '../interfaces/item';
import { wowClass } from '../types/options';

@Pipe({
  name: 'itemVisibility'
})
export class ItemVisibilityPipe implements PipeTransform {
  // ['Deathknight' ,'Druid' , 'Hunter' , 'Mage' , 'Paladin' , 'Priest' , 'Rogue' , 'Shaman' , 'Warlock' , 'Warrior']
  transform(item: wowItem, filter: wowClass | 'all'): boolean {
    if (filter === 'all') {
      return true;
    }

    // Armor
    if (+item.wowClass === 4) {
      return this.checkArmor(item, filter) && this.checkClass(item, filter);
    }
    // Weapon
    else if (+item.wowClass === 2) {
      return this.checkWeapon(item, filter) && this.checkClass(item, filter);
    }
    // Quiver
    else if (+item.wowClass === 11) {
      return ['Hunter'].includes(filter)
    }

    return true;
  }

  checkClass(item: wowItem, filter: wowClass): boolean {

    return true;
  }

  checkArmor(item: wowItem, filter: wowClass): boolean {
    switch (+item.wowSubClass) {
      // Cloth
      case 1: return ['Druid', 'Mage', 'Paladin', 'Priest', 'Shaman', 'Warlock'].includes(filter);

      // Leather
      case 2: return ['Deathknight', 'Druid', 'Hunter', 'Paladin', 'Rogue', 'Shaman', 'Warrior'].includes(filter);

      // Mail
      case 3: return ['Deathknight', 'Hunter', 'Paladin', 'Shaman', 'Warrior'].includes(filter);

      // Plate
      case 4: return ['Deathknight', 'Paladin', 'Warrior'].includes(filter);

      // Shield
      case 6: return ['Paladin', 'Warrior', 'Shaman'].includes(filter);

      // Libram
      case 7: return ['Paladin'].includes(filter);

      // Idol
      case 8: return ['Druid'].includes(filter);

      // Totem
      case 9: return ['Shaman'].includes(filter);

      // Sigil
      case 10: return ['Deathknight'].includes(filter);

      // Off-Hand
      case -5: return ['Druid', 'Mage', 'Paladin', 'Priest', 'Shaman', 'Warlock'].includes(filter);

    }

    return true;
  }

  checkWeapon(item: wowItem, filter: wowClass): boolean {
    // fishing pole
    if (+item.wowSubClass === 20) return true;

    switch (filter) {
      case 'Deathknight': return [0, 1, 4, 5, 6, 7, 8].includes(+item.wowSubClass);
      case 'Druid': return [4, 5, 10, 13, 15, 20].includes(+item.wowSubClass);
      case 'Hunter': return [0, 1, 2, 3, 6, 7, 8, 10, 13, 15, 18, 19].includes(+item.wowSubClass);
      case 'Mage': return [7, 10, 15, 19].includes(+item.wowSubClass);
      case 'Paladin': return [0, 1, 4, 5, 6, 7, 8].includes(+item.wowSubClass);
      case 'Priest': return [4, 10, 15, 19].includes(+item.wowSubClass);
      case 'Rogue': return [0, 2, 3, 4, 7, 13, 15, 16, 18].includes(+item.wowSubClass);
      case 'Shaman': return [0, 1, 4, 5, 10, 13, 15].includes(+item.wowSubClass);
      case 'Warlock': return [7, 10, 15, 19].includes(+item.wowSubClass);
      case 'Warrior': return [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 13, 15, 16, 18].includes(+item.wowSubClass);
    }
    return true;
  }
}

