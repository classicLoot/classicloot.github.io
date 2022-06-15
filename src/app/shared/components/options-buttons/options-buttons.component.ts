import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OptionsStoreService } from '../../services/options-store.service';
import { wowDifficulty, wowFaction, wowSize } from '../../types/options';

@Component({
  selector: 'app-options-buttons',
  templateUrl: './options-buttons.component.html',
  styleUrls: ['./options-buttons.component.scss']
})
export class OptionsButtonsComponent implements OnInit {

  @Input() bFaction: boolean = false;
  @Input() bSize: boolean = true;
  @Input() bDifficulty: boolean = false;


  faction$: Observable<wowFaction>;
  size$: Observable<wowSize>;
  difficulty$: Observable<wowDifficulty>;

  constructor(private optionsStore: OptionsStoreService, private router: Router) {
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

      // 10 <=> 25
      const url = this.router.routerState.snapshot.url;

      // e.g. Naxx10
      if (url.endsWith('10')) {
        const newURL = url.replace('10', '25');
        this.router.navigate([newURL]);
      }
      // e.g. Naxx25
      else if (url.endsWith('25')) {
        const newURL = url.replace('25', '10');
        this.router.navigate([newURL]);
      }
    }
  }

  public updateFaction(value: wowFaction, old: wowFaction): void {
    if (value != old) {
      this.optionsStore.updateFaction(value);
    }
  }

}
