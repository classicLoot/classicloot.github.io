import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { dungeon } from 'src/app/shared/interfaces/dungeons';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { TooltipService } from 'src/app/shared/services/tooltip.service';
import { DungeonsService } from '../data/dungeons.service';

@Component({
  selector: 'app-dungeons',
  templateUrl: './dungeons.component.html',
  styleUrls: ['./dungeons.component.scss']
})
export class DungeonsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren('bossList') bossList!: QueryList<any>;
  @ViewChildren('item') itemLinks!: QueryList<ElementRef>;

  private sub: any;
  private subTooltip: any;

  currentDungeon$: Observable<dungeon>;

  constructor(private sidebarService: SidebarService, private dungeonService: DungeonsService, private tooltipService: TooltipService, private route: ActivatedRoute, private renderer: Renderer2) {
    const menu = this.dungeonService.getDungeonsMenu();
    this.sidebarService.setMenuItems(menu);

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
    this.subTooltip.unsubscribe();
  }

  ngAfterViewInit(): void {
    //console.log('afterViewInit')
    this.tooltipService.runScript();
    this.changeItemlinks();

    this.subTooltip = this.bossList.changes.subscribe(t => {
      //console.log('CHANGED')
      this.tooltipService.runScript();
      this.changeItemlinks();
    })
  }

  private changeItemlinks() {
    console.log('change itemlinks...')
    this.itemLinks.forEach(item => {
      console.log(item.nativeElement.getAttribute('href'))
      //console.log(item.nativeElement.children)
      //this.renderer.setStyle(item.nativeElement,'padding-left','50px')
      //this.renderer.setProperty(item.nativeElement, 'innerHTML','<p>TEST</p>')
      //item.nativeElement.setAttribute('style','test');
    })

    
    //console.log(this.itemLinks.length);
  }
}
