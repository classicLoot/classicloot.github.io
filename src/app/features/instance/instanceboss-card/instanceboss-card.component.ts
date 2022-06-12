import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { wowInstanceBoss, wowInstanceBossLink } from 'src/app/shared/interfaces/instance';
import { InstancedataService } from 'src/app/shared/services/instancedata.service';

@Component({
  selector: 'app-instanceboss-card',
  templateUrl: './instanceboss-card.component.html',
  styleUrls: ['./instanceboss-card.component.scss']
})
export class InstancebossCardComponent implements OnInit, OnChanges {

  @Input() bossLink!: wowInstanceBossLink;

  boss$!: Observable<wowInstanceBoss>;

  constructor(private instanceDataService: InstancedataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.boss$ = this.instanceDataService.getCurrentInstanceBoss$(this.bossLink.link);
  }

}
