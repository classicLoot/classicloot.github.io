import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { wowInstance } from 'src/app/shared/interfaces/instance';
import { GlobalStoreService, startType } from 'src/app/shared/services/global-store.service';
import { InstancedataService } from 'src/app/shared/services/instancedata.service';

@Component({
  selector: 'app-instance-start',
  templateUrl: './instance-start.component.html',
  styleUrls: ['./instance-start.component.scss']
})
export class InstanceStartComponent implements OnInit {

  dungeonsMeta$: Observable<wowInstance[]>;
  raidsMeta$: Observable<wowInstance[]>;

  startType$: Observable<startType>;


  constructor(private globalStoreService: GlobalStoreService, private instanceDataService: InstancedataService) {
    this.dungeonsMeta$ = this.instanceDataService.getDungeonsMeta$('wotlk');
    this.raidsMeta$ = this.instanceDataService.getRaidsMeta$('wotlk');

    this.startType$ = this.globalStoreService.startType$
  }

  ngOnInit(): void {
  }

}
