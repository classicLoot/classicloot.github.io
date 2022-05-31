import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { dungeon } from 'src/app/shared/interfaces/dungeons';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { TooltipService } from 'src/app/shared/services/tooltip.service';
import { DungeonsService } from '../data/dungeons.service';
import { lootData } from '../data/gen';

@Component({
  selector: 'app-dungeons',
  templateUrl: './dungeons.component.html',
  styleUrls: ['./dungeons.component.scss']
})
export class DungeonsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren('bossList') bossList!: QueryList<any>;

  private sub: any;
  private subTooltip: any;

  currentDungeonName$: Observable<string>;
  currentDungeon$: Observable<dungeon>;

  constructor(private sidebarService: SidebarService, private dungeonService: DungeonsService, private tooltipService: TooltipService, private route: ActivatedRoute) {
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

   //console.log(lootData)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subTooltip.unsubscribe();
  }
  ngAfterViewInit(): void {
    //console.log('afterViewInit')
    this.tooltipService.runScript();
    this.subTooltip = this.bossList.changes.subscribe(t => {
      //console.log('CHANGED')
      this.tooltipService.runScript();
    })
  }
}
