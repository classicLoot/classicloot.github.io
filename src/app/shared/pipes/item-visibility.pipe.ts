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
      return this.checkArmor(item, filter) && this.checkClass(item, filter) && this.checkStats(item, filter);
    }
    // Weapon
    else if (+item.wowClass === 2) {
      return this.checkWeapon(item, filter) && this.checkClass(item, filter) && this.checkStats(item, filter);
    }
    // Quiver
    else if (+item.wowClass === 11) {
      return ['Hunter'].includes(filter)
    }
    // Token
    else if (+item.wowClass === 15) {
      if ([4, -2].includes(+item.wowSubClass)) {
        return this.checkClass(item, filter);
      }
    }

    return true;
  }

  checkClass(item: wowItem, filter: wowClass): boolean {
    // Armor/Weapons
    if ([4, 2, 11].includes(+item.wowClass)) {

    }
    //const classMatcher = /(<a href=\\{1,2}"\?class=\d{1,2}\\" class=\\{1,2}"\w\d*\\{1,2}">(\w* {0,1}\w*)<\/a>,{0,1})/g
    const classMatcher = /(<a href="\?class=\d*" class="\w\d*">(\w* {0,1}\w*)<\/a>)/g
    //const classMatcher = /(<a href=\\{0,2}"\?class=\d{1,2}\\{0,2}" class=\\{0,2}"c\d{1,2}\\{0,2}">(\w* {0,1}\w*)<\/a>)/g

    const tooltip: string = item.htmlTooltip.replace('\\', '');
    //console.log(tooltip)

    let classes: wowClass[] = [];
    [...tooltip.matchAll(classMatcher)].forEach(match => {
      if (match[2] === 'Death Knight') {
        classes.push('Deathknight');
      }
      else {
        classes.push(match[2] as wowClass)
      }
    })

    return classes.length > 0 ? classes.includes(filter) : true;
  }

  checkStats(item: wowItem, filter: wowClass): boolean {
    const tooltip: string = item.htmlTooltip.replace('\\', '');
    // ['Deathknight' ,'Druid' , 'Hunter' , 'Mage' , 'Paladin' , 'Priest' , 'Rogue' , 'Shaman' , 'Warlock' , 'Warrior']

    // 
    if ([...tooltip.matchAll(/<!--stat1-->/g)].length > 0) {
      console.log('1111')
    }
    // 
    if ([...tooltip.matchAll(/<!--stat2-->/g)].length > 0) {
      console.log('2222')
    }
    // Agi
    if ([...tooltip.matchAll(/<!--stat3-->/g)].length > 0) {
      if (['Mage', 'Priest', 'Warlock'].includes(filter)) return false;
    }
    //  Str
    if ([...tooltip.matchAll(/<!--stat4-->/g)].length > 0) {
      if (['Hunter', 'Mage', 'Priest', 'Warlock'].includes(filter)) return false;
    }
    // Int
    if ([...tooltip.matchAll(/<!--stat5-->/g)].length > 0) {
      if (['Deathknight', 'Rogue', 'Warrior'].includes(filter)) return false;

    }
    // Spirit
    if ([...tooltip.matchAll(/<!--stat6-->/g)].length > 0) {
      if (['Deathknight', 'Rogue', 'Warrior'].includes(filter)) return false;
    }
    // Stam
    if ([...tooltip.matchAll(/<!--stat7-->/g)].length > 0) {

    }
    // 
    if ([...tooltip.matchAll(/<!--stat8-->/g)].length > 0) {
      console.log('8888')
    }


    // Def
    if ([...tooltip.matchAll(/defense rating/g)].length > 0) {
      if ([, 'Hunter', 'Mage', 'Priest', 'Rogue', 'Shaman', 'Warlock'].includes(filter)) return false;
    }
    // spell power
    if ([...tooltip.matchAll(/spell power/g)].length > 0) {
      if (['Deathknight', 'Hunter', 'Rogue', 'Warrior'].includes(filter)) return false;
    }
    // attack power
    if ([...tooltip.matchAll(/attack power/g)].length > 0) {
      if (['Mage', 'Priest', 'Warlock'].includes(filter)) return false;
    }
    // mp5
    if ([...tooltip.matchAll(/mana per 5/g)].length > 0) {
      if (['Deathknight', 'Rogue', 'Warrior'].includes(filter)) return false;
    }
    // armor pen
    if ([...tooltip.matchAll(/armor penetration/g)].length > 0) {
      if (['Mage', 'Priest', 'Warlock'].includes(filter)) return false;
    }
    // dodge
    if ([...tooltip.matchAll(/dodge rating/g)].length > 0) {
      if (['Hunter', 'Mage', 'Priest', 'Shaman', 'Warlock'].includes(filter)) return false;
    }



    //console.log(item.htmlTooltip)
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

