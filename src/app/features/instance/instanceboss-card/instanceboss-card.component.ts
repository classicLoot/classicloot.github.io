import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { wowBossType, wowInstanceBoss, wowInstanceBossLink } from 'src/app/shared/interfaces/instance';
import { InstancedataService } from 'src/app/shared/services/instancedata.service';
import { OptionsStoreService } from 'src/app/shared/services/options-store.service';
import { wowDifficulty, wowFaction } from 'src/app/shared/types/options';

@Component({
  selector: 'app-instanceboss-card',
  templateUrl: './instanceboss-card.component.html',
  styleUrls: ['./instanceboss-card.component.scss']
})
export class InstancebossCardComponent implements OnInit, OnChanges {

  @Input() bossLink!: wowInstanceBossLink;
  @Input() instanceType!: wowBossType;

  boss$!: Observable<wowInstanceBoss>;

  faction$: Observable<wowFaction>;
  difficulty$: Observable<wowDifficulty>

  options$: Observable<string>;

  constructor(private instanceDataService: InstancedataService, private optionsStore: OptionsStoreService) {
    this.faction$ = this.optionsStore.faction$;
    this.difficulty$ = this.optionsStore.difficulty$;

    this.options$ = combineLatest([this.faction$, this.difficulty$]).pipe(
      map(([faction, diff]) => {
        return `${diff}-${faction}`;
      })
    )
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.boss$ = this.instanceDataService.getCurrentInstanceBoss$(this.bossLink.link);
  }

}
