import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { wowQuest } from '../../interfaces/collection';
import { wowItem } from '../../interfaces/item';
import { GlobalStoreService } from '../../services/global-store.service';
import { ModalService } from '../../services/modal.service';
import { TooltipService } from '../../services/tooltip.service';

@Component({
  selector: 'app-wow-quest-lazy',
  templateUrl: './wow-quest-lazy.component.html',
  styleUrls: ['./wow-quest-lazy.component.scss']
})
export class WowQuestLazyComponent implements OnInit {

  @Input() quest!: wowQuest;

  mobile$: Observable<boolean>;

  constructor(private tooltipService: TooltipService, private globalStore: GlobalStoreService, private modalService: ModalService) {
    this.mobile$ = this.globalStore.mobile$;
  }

  ngOnInit(): void {
  }

  public onMouseEvent(e: MouseEvent, type: 'move' | 'enter' | 'leave') {
    //console.log(type, item.name);
    //this.tooltipService.onMouseEvent(e, type, this.item);
    const item: wowItem = {
      id: 0,
      quality: 0,
      link: this.quest.link!,
      icon: 'inv_misc_book_11',
      name: 'Testname',
      wowClass: 0,
      wowSubClass: 0,
      ilvl: 69,
      slot: 0,
      htmlTooltip: this.quest.tooltip!
    }
    this.tooltipService.onMouseEvent(e, type, item);
  }

  public clickMobile(e: MouseEvent) {
    // this.modalService.setItem(this.item);
  }

}
