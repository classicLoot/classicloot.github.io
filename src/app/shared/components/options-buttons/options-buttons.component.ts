import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsStoreService } from '../../services/options-store.service';
import { wowDifficulty, wowFaction, wowSize } from '../../types/options';

@Component({
  selector: 'app-options-buttons',
  templateUrl: './options-buttons.component.html',
  styleUrls: ['./options-buttons.component.scss']
})
export class OptionsButtonsComponent implements OnInit {

  @Input() bFaction: boolean = true;
  @Input() bSize: boolean = true;
  @Input() bDifficulty: boolean = true;


  faction$: Observable<wowFaction>;
  size$: Observable<wowSize>;
  difficulty$: Observable<wowDifficulty>;

  constructor(private optionsStore: OptionsStoreService) {
    this.faction$ = this.optionsStore.faction$;
    this.size$ = this.optionsStore.size$;
    this.difficulty$ = this.optionsStore.difficulty$;
  }

  ngOnInit(): void {
  }

  public updateDifficulty(value: wowDifficulty, old: wowDifficulty): void {
    if (value != old) {
      this.optionsStore.updateDifficulty(value);
    }
  }

  public updateSize(value: wowSize, old: wowSize): void {
    if (value != old) {
      this.optionsStore.updateSize(value);
    }
  }

  public updateFaction(value: wowFaction, old: wowFaction): void {
    if (value != old) {
      this.optionsStore.updateFaction(value);
    }
  }

}
