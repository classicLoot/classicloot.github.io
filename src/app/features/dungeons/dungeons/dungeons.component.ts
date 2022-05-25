import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { DungeonsService } from '../data/dungeons.service';

@Component({
  selector: 'app-dungeons',
  templateUrl: './dungeons.component.html',
  styleUrls: ['./dungeons.component.scss']
})
export class DungeonsComponent implements OnInit {

  constructor(private sidebarService: SidebarService, private dungeonService: DungeonsService) {
    const data = this.dungeonService.getDungeonsData();
    const menu = this.dungeonService.getDungeonsMenu();

    this.sidebarService.setMenuItems(menu);
  }

  ngOnInit(): void {
  }

}
