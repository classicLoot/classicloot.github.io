import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { wowItem } from '../../interfaces/item';
import { FilterStoreService } from '../../services/filter-store.service';
import { GlobalStoreService } from '../../services/global-store.service';
import { TooltipService } from '../../services/tooltip.service';
import { wowClass } from '../../types/options';

@Component({
  selector: 'app-wow-item-lazy',
  templateUrl: './wow-item-lazy.component.html',
  styleUrls: ['./wow-item-lazy.component.scss']
})
export class WowItemLazyComponent implements OnInit {

  @Input() item!: wowItem;
  @Input() itemSize: string = 'large';
  @Input() hardmode: boolean = false;
  @Input() showLevel: boolean = false;

  class$: Observable<wowClass | 'all'>;
  mobile$: Observable<boolean>;

  constructor(private tooltipService: TooltipService, private filterStore: FilterStoreService, private globalStore: GlobalStoreService) {
    this.class$ = this.filterStore.class$;
    this.mobile$ = this.globalStore.mobile$;
  }

  ngOnInit(): void {
  }

  public onMouseEvent(e: MouseEvent, type: 'move' | 'enter' | 'leave') {
    //console.log(type, item.name);
    this.tooltipService.onMouseEvent(e, type, this.item);
  }

  public clickMobile(e: MouseEvent) {
    console.log('clickMobile')
  }

}
