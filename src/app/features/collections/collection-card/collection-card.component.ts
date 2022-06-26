import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { wowCollectionSubLink, wowSubCollection } from 'src/app/shared/interfaces/collection';
import { wowBossType } from 'src/app/shared/interfaces/instance';
import { CollectionsdataService } from 'src/app/shared/services/collectionsdata.service';
import { FilterStoreService } from 'src/app/shared/services/filter-store.service';
import { wowDifficulty, wowFaction, wowSize } from 'src/app/shared/types/options';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss']
})
export class CollectionCardComponent implements OnInit, OnChanges {

  @Input() subLink!: wowCollectionSubLink;
  @Input() collectionType!: wowBossType;

  sub$!: Observable<wowSubCollection>;

  faction$: Observable<wowFaction>;
  difficulty$: Observable<wowDifficulty>
  size$: Observable<wowSize>

  filter$: Observable<string>;

  constructor(private collectionsDataService: CollectionsdataService, private filterStore: FilterStoreService) {
    this.faction$ = this.filterStore.faction$;
    this.difficulty$ = this.filterStore.difficulty$;
    this.size$ = this.filterStore.size$;

    this.filter$ = combineLatest([this.size$, this.faction$, this.difficulty$]).pipe(
      map(([size, faction, diff]) => {
        return `${size}-${diff}-${faction}`;
        //return `${size}-${diff}`;
      })
    )
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sub$ = this.collectionsDataService.getCurrentSubCollection$(this.subLink.link);
  }

}
