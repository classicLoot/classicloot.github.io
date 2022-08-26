import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterStoreService } from '../../services/filter-store.service';
import { FragmentService } from '../../services/fragment.service';
import { GlobalStoreService } from '../../services/global-store.service';
import { wowClass, wowDifficulty, wowFaction, wowSize } from '../../types/options';

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

  scrollDelay = 50;

  @Input() fragment: string = '';

  constructor(private filterStore: FilterStoreService, private globalStore: GlobalStoreService, private fragmentService: FragmentService) {
    this.faction$ = this.filterStore.faction$;
    this.size$ = this.filterStore.size$;
    this.difficulty$ = this.filterStore.difficulty$;
  }

  ngOnInit(): void {
  }


  public updateDifficulty(value: wowDifficulty, old: wowDifficulty): void {
    if (value != old) {
      this.filterStore.updateDifficulty(value);
    }
    //this.fragmentService.scrollToDelay(this.fragment, this.scrollDelay);
  }

  public updateSize(value: wowSize, old: wowSize): void {
    if (value != old) {
      this.filterStore.updateSize(value);
    }
    //this.fragmentService.scrollToDelay(this.fragment, this.scrollDelay);
  }

  public updateFaction(value: wowFaction, old: wowFaction): void {
    if (value != old) {
      this.filterStore.updateFaction(value);
    }
    //this.fragmentService.scrollToDelay(this.fragment, this.scrollDelay);
  }
}
