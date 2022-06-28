import { Pipe, PipeTransform } from '@angular/core';
import { wowItem } from '../interfaces/item';
import { wowArmorTransform, wowConsumableTransform, wowMiscTransform, wowProjectileTransform, wowRecipeTransform, wowWeaponTransform } from './transformers';

@Pipe({
  name: 'itemSubtext'
})
export class ItemSubtextPipe implements PipeTransform {

  transform(value: wowItem, ...args: unknown[]): string {

    const debug = `${value.wowClass} | ${value.wowSubClass} | ${value.slot}`

    const wowClass = +value.wowClass;

    switch (wowClass) {
      case -69: return 'Spell';
      case 0: return wowConsumableTransform(value);
      case 1: return 'Container';
      case 2: return wowWeaponTransform(value);
      case 3: return 'Gem';
      case 4: return wowArmorTransform(value);

      case 6: return wowProjectileTransform(value);
      case 7: return 'Trade Goods';
      case 9: return wowRecipeTransform(value);
      case 10: return 'Currency';
      case 12: return 'Quest Item';
      case 13: return 'Key';
      case 15: return wowMiscTransform(value);

      default: return 'NYI - ' + debug;
    }
  }
}
