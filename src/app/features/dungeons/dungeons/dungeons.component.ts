import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { dungeon } from 'src/app/shared/interfaces/dungeons';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { DungeonsService } from '../data/dungeons.service';

@Component({
  selector: 'app-dungeons',
  templateUrl: './dungeons.component.html',
  styleUrls: ['./dungeons.component.scss']
})
export class DungeonsComponent implements OnInit, OnDestroy {

  private sub: any;

  currentDungeonName$: Observable<string>;
  currentDungeon$: Observable<dungeon>;

  constructor(private sidebarService: SidebarService, private dungeonService: DungeonsService, private route: ActivatedRoute) {
    const menu = this.dungeonService.getDungeonsMenu();
    this.sidebarService.setMenuItems(menu);

    this.currentDungeonName$ = this.dungeonService.getCurrentDungeonName$();
    this.currentDungeon$ = this.dungeonService.getCurrentDungeon$();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.dungeonService.setCurrentDungeonName(id);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
