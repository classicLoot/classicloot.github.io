import { Pipe, PipeTransform } from '@angular/core';
import { wowItem } from '../interfaces/item';
import { wowArmorTransform, wowMiscTransform, wowRecipeTransform, wowWeaponTransform } from './transformers';

@Pipe({
  name: 'itemSubtext'
})
export class ItemSubtextPipe implements PipeTransform {

  transform(value: wowItem, ...args: unknown[]): string {

    const debug = `${value.wowClass} | ${value.wowSubClass} | ${value.slot}`

    const wowClass = +value.wowClass;

    switch (wowClass) {
      case 1: return 'Container';
      case 2: return wowWeaponTransform(value);
      case 4: return wowArmorTransform(value);
      case 7: return 'Trade Goods';
      case 9: return wowRecipeTransform(value);
      case 10: return 'Currency';
      case 12: return 'Quest Item';
      case 15: return wowMiscTransform(value);

      default: return 'NYI - ' + debug;
    }
  }
}
