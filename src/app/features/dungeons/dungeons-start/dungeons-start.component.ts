import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { wowInstance } from 'src/app/shared/interfaces/instance';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { DungeonsService } from '../data/dungeons.service';

@Component({
  selector: 'app-dungeons-start',
  templateUrl: './dungeons-start.component.html',
  styleUrls: ['./dungeons-start.component.scss']
})
export class DungeonsStartComponent implements OnInit {

  public dungeonsMeta$: Observable<wowInstance[]>;

  constructor(private sidebarService: SidebarService, private dungeonService: DungeonsService) {
    const menu = this.dungeonService.getDungeonsMenu();
    this.sidebarService.setMenuItems(menu);

    this.dungeonsMeta$ = this.dungeonService.getDungeonsMeta$('wotlk');
  }

  ngOnInit(): void {
  }

}
