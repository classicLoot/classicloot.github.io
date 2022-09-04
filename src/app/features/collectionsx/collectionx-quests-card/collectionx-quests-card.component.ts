import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { wowQuest } from 'src/app/shared/interfaces/collection';
import { FilterStoreService } from 'src/app/shared/services/filter-store.service';
import { wowFaction } from 'src/app/shared/types/options';

@Component({
  selector: 'app-collectionx-quests-card',
  templateUrl: './collectionx-quests-card.component.html',
  styleUrls: ['./collectionx-quests-card.component.scss']
})
export class CollectionxQuestsCardComponent implements OnInit {

  @Input() quests!: wowQuest[];

  faction$: Observable<wowFaction>;

  constructor(private filterStore: FilterStoreService) {
    this.faction$ = this.filterStore.faction$;
  }

  ngOnInit(): void {
  }

}
