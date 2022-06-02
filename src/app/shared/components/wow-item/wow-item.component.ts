import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, debounceTime, Observable, Subscription } from 'rxjs';
import { wowItem } from '../../interfaces/item';
import { ItemdataService } from '../../services/itemdata.service';

@Component({
  selector: 'app-wow-item',
  templateUrl: './wow-item.component.html',
  styleUrls: ['./wow-item.component.scss']
})
export class WowItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() itemID: number = -1;
  @Input() itemSize: string = 'large';
  @Input() uniqueID: number = -1;

  public item$: Observable<wowItem>;

  private mouseSubject: BehaviorSubject<{ x: number, y: number }> = new BehaviorSubject({ x: 0, y: 0 });
  eventSub: Subscription;

  constructor(private itemDataService: ItemdataService) {
    this.item$ = this.itemDataService.getItemData$(-1);

    const event$ = this.mouseSubject.pipe(debounceTime(1));
    this.eventSub = event$.subscribe(m => this.handleMouse(m.x, m.y));
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.item$ = this.itemDataService.getItemData$(this.itemID);
  }

  ngOnDestroy(): void {
    this.eventSub.unsubscribe();
  }

  public onMouseMove(e: MouseEvent) {
    //console.log('MOVE', e.clientX, e.clientY)
    this.mouseSubject.next({ x: e.clientX, y: e.clientY });
  }

  private handleMouse(x: number, y: number) {
    //console.log('Mouse:', x, y, +new Date().getMilliseconds());

    const tooltipRef = document.getElementById(`tooltip|${this.uniqueID}|${this.itemID}`);
    const baseRef = document.getElementById(`item|${this.uniqueID}|${this.itemID}`);

    if (tooltipRef && baseRef) {
      //console.log(tooltip)
      const boundsBase = baseRef.getBoundingClientRect();
      const boundsTooltip = tooltipRef.getBoundingClientRect();

      const offsetX = 5;
      const offsetY = boundsTooltip.height / 2;

      const newX = x - boundsBase.x + offsetX;
      const newY = y - boundsBase.y - offsetY;

      tooltipRef.style.left = newX + "px";
      tooltipRef.style.top = newY + "px";
    }
  }
}
