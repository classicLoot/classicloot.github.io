import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { wowRaidBossLazy, wowRaidBossNameLazy } from 'src/app/shared/interfaces/raids';
import { RaiddataService } from 'src/app/shared/services/raiddata.service';

@Component({
  selector: 'app-raidboss-lazy',
  templateUrl: './raidboss-lazy.component.html',
  styleUrls: ['./raidboss-lazy.component.scss']
})
export class RaidbossLazyComponent implements OnInit, OnChanges {

  @Input() bossNameLazy!: wowRaidBossNameLazy;
  @Input() raid!: string;
  @Input() raidType: 'A' | 'B' | 'C' = 'A';

  bossLazy$!: Observable<wowRaidBossLazy>;

  constructor(private raiddataService: RaiddataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //console.log('ViewInit ' + this.boss.name)
    this.bossLazy$ = this.raiddataService.getRaidBossDataLazy$(this.bossNameLazy.url, this.raid);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
