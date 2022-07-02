import { Pipe, PipeTransform } from '@angular/core';
import { wowItem } from '../interfaces/item';
import { wowClass } from '../types/options';

@Pipe({
  name: 'itemVisibility'
})
export class ItemVisibilityPipe implements PipeTransform {

  transform(item: wowItem, filter: wowClass | 'all'): boolean {
    if (filter === 'all') {
      return true;
    }

    // Armor
    if (+item.wowClass === 4) {
      switch (+item.wowSubClass) {
        // Cloth
        case 1: {
          return true;
        }

        // Leather
        case 2: {
          return ['Deathknight'].includes(filter);
        }

        default: {
          return true;
        }

      }
    }

    return true;
  }

}
