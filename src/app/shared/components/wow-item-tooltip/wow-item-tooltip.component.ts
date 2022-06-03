import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { wowItem } from '../../interfaces/item';
import { TooltipService } from '../../services/tooltip.service';

@Component({
  selector: 'app-wow-item-tooltip',
  templateUrl: './wow-item-tooltip.component.html',
  styleUrls: ['./wow-item-tooltip.component.scss']
})
export class WowItemTooltipComponent implements OnInit, OnDestroy {

  @Input() itemSize: string = 'large';

  @ViewChild('itemTooltipBase') itemTooltipBase!: ElementRef;
  @ViewChild('itemTooltipIcon') itemTooltipIcon!: ElementRef;
  @ViewChild('itemTooltipContent') itemTooltipContent!: ElementRef;


  public wowItem$: Observable<wowItem | null>;
  public mouseEvent$: Observable<{ x: number; y: number; bShown: boolean; }>;

  private sub: Subscription;

  constructor(private tooltipService: TooltipService) {
    this.wowItem$ = this.tooltipService.getWowItem$();
    this.mouseEvent$ = this.tooltipService.getMouseEvent$();

    this.sub = combineLatest([this.wowItem$, this.mouseEvent$]).subscribe(([item, mouse]) => {

      const tooltipBase = document.getElementById(`itemTooltipBase`);
      const tooltipIcon = document.getElementById(`itemTooltipIcon`) as HTMLImageElement;
      const tooltipContent = document.getElementById(`itemTooltipContent`);


      if (item && tooltipBase && tooltipIcon && tooltipContent) {

        // Icon
        tooltipIcon.src = `../../../../assets/icons/${this.itemSize}/${item.icon}.jpg`

        // HTML
        tooltipContent.innerHTML = item.htmlTooltip;

        // Base
        tooltipBase.style.display = mouse.bShown ? 'block' : 'none';

        const bounds = tooltipBase.getBoundingClientRect();

        const offsetX = 5;
        const offsetY = bounds.height / 2;

        const newX = mouse.x + offsetX;
        const newY = mouse.y - Math.max(offsetY, 75);

        tooltipBase.style.left = newX + "px";
        tooltipBase.style.top = newY + "px";
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
