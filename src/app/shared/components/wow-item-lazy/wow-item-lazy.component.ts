import { Component, Input, OnInit } from '@angular/core';
import { wowItem } from '../../interfaces/item';
import { TooltipService } from '../../services/tooltip.service';

@Component({
  selector: 'app-wow-item-lazy',
  templateUrl: './wow-item-lazy.component.html',
  styleUrls: ['./wow-item-lazy.component.scss']
})
export class WowItemLazyComponent implements OnInit {

  @Input() item!: wowItem;
  @Input() itemSize: string = 'large';

  constructor(private tooltipService: TooltipService) { }

  ngOnInit(): void {
  }

  public onMouseEvent(e: MouseEvent, type: 'move' | 'enter' | 'leave') {
    //console.log(type, item.name);
    this.tooltipService.onMouseEvent(e, type, this.item);
  }
}
