import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: string | null, filterStr: string): boolean {
    if (value === null) {
      return false;
    }
    if (filterStr === '') {
      return true;
    }

    const valueSplit = value.split('-');
    const filterStrSplit = filterStr.split('-');

    for (const filter of filterStrSplit) {
      if (!valueSplit.includes(filter)) {
        return false;
      }
    }

    return true;
  }

}
