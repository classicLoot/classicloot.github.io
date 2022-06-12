import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { wotlkdungeonsMeta } from 'src/assets/data/gen/dungeons/wotlk/meta';
import { DungeonsService } from '../data/dungeons.service';

@Component({
  selector: 'app-dungeons-start',
  templateUrl: './dungeons-start.component.html',
  styleUrls: ['./dungeons-start.component.scss']
})
export class DungeonsStartComponent implements OnInit {

  public dungeonsMeta = wotlkdungeonsMeta;

  constructor(private sidebarService: SidebarService, private dungeonService: DungeonsService) {
    const menu = this.dungeonService.getDungeonsMenu();
    this.sidebarService.setMenuItems(menu);
  }

  ngOnInit(): void {
  }

}
