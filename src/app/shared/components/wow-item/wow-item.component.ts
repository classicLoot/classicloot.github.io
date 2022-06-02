import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { wowItem } from '../../interfaces/item';
import { ItemdataService } from '../../services/itemdata.service';
import { TooltipService } from '../../services/tooltip.service';

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

  constructor(private itemDataService: ItemdataService, private tooltipService: TooltipService) {
    this.item$ = this.itemDataService.getItemData$(-1);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.item$ = this.itemDataService.getItemData$(this.itemID);
  }

  ngOnDestroy(): void {
  }

  public onMouseEvent(e: MouseEvent, type: 'move' | 'enter' | 'leave', item: wowItem) {
    //console.log(type, item.name);
    this.tooltipService.onMouseEvent(e, type, item);
  }
}
