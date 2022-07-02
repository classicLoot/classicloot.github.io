import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FilterStoreService } from '../../services/filter-store.service';
import { wowClass } from '../../types/options';

@Component({
  selector: 'app-filter-class',
  templateUrl: './filter-class.component.html',
  styleUrls: ['./filter-class.component.scss']
})
export class FilterClassComponent implements OnInit {
  class$!: Observable<wowClass | 'all'>;
  classWithImg$: Observable<{ class: wowClass | 'all', img: string }>;

  bOpen: boolean = true;

  classArr: { class: wowClass | 'all', img: string }[] = [
    {
      class: 'Deathknight',
      img: 'class_deathknight'
    },
    {
      class: 'Druid',
      img: 'class_druid'
    },
    {
      class: 'Hunter',
      img: 'class_hunter'
    },
    {
      class: 'Mage',
      img: 'class_mage'
    },
    {
      class: 'Paladin',
      img: 'class_paladin'
    },
    {
      class: 'Priest',
      img: 'class_priest'
    },
    {
      class: 'Rogue',
      img: 'class_rogue'
    },
    {
      class: 'Shaman',
      img: 'class_shaman'
    },
    {
      class: 'Warlock',
      img: 'class_warlock'
    },
    {
      class: 'Warrior',
      img: 'class_warrior'
    }
  ];



  constructor(private filterStore: FilterStoreService) {
    this.class$ = this.filterStore.class$;

    this.classWithImg$ = this.class$.pipe(
      map(c => {
        const found = this.classArr.find(x => x.class === c);
        if (found) {
          return found;
        }
        else {
          return {
            class: 'all',
            img: 'inv_misc_questionmark'
          }
        }
      })
    )
  }

  ngOnInit(): void {
  }

  handleClick(val: wowClass | 'all', old: wowClass | 'all') {
    if (val === 'all') {
      this.filterStore.updateClass(val)
    }
    else if (val === old) {
      this.filterStore.updateClass('all')
    }
    else {
      this.filterStore.updateClass(val)
    }

    this.bOpen = false;
  }

  toggleOpen() {
    this.bOpen = !this.bOpen;
  }

}
