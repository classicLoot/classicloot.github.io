import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { wowSubCollection, wowSubCollectionGroup } from 'src/app/shared/interfaces/collection';
import { FilterStoreService } from 'src/app/shared/services/filter-store.service';
import { wowDifficulty, wowFaction, wowSize } from 'src/app/shared/types/options';

@Component({
  selector: 'app-collectionx-card',
  templateUrl: './collectionx-card.component.html',
  styleUrls: ['./collectionx-card.component.scss']
})
export class CollectionxCardComponent implements OnInit, OnChanges {

  @Input() sub: wowSubCollection = { name: 'EMPTY' };

  left: wowSubCollectionGroup[] = [];
  right: wowSubCollectionGroup[] = [];
  mid: wowSubCollectionGroup[] = [];


  faction$: Observable<wowFaction>;
  difficulty$: Observable<wowDifficulty>
  size$: Observable<wowSize>

  filter$: Observable<string>;

  constructor(private filterStore: FilterStoreService) {
    this.faction$ = this.filterStore.faction$;
    this.difficulty$ = this.filterStore.difficulty$;
    this.size$ = this.filterStore.size$;

    this.filter$ = combineLatest([this.size$, this.faction$, this.difficulty$]).pipe(
      map(([size, faction, diff]) => {
        return `${size}-${diff}-${faction}`;
        //return `${size}-${diff}`;
      })
    )

    this.sub.groups?.filter(x => x.pos === 'left')
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sub.groups) {
      this.left = this.sub.groups.filter(x => x.pos === 'left')
      this.right = this.sub.groups.filter(x => x.pos === 'right')!
      this.mid = this.sub.groups.filter(x => x.pos === 'mid')
    }

  }

}
