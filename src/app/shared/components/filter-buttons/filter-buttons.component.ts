import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterStoreService } from '../../services/filter-store.service';
import { wowDifficulty, wowFaction, wowSize } from '../../types/options';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent implements OnInit {

  @Input() bFaction: boolean = false;
  @Input() bSize: boolean = false;
  @Input() bDifficulty: boolean = false;

  faction$!: Observable<wowFaction>;
  size$!: Observable<wowSize>;
  difficulty$!: Observable<wowDifficulty>;

  constructor(private filterStore: FilterStoreService) {
    this.faction$ = this.filterStore.faction$;
    this.size$ = this.filterStore.size$;
    this.difficulty$ = this.filterStore.difficulty$;
  }

  ngOnInit(): void {
  }

}
