import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { wowItem } from '../../interfaces/item';
import { ItemdataService } from '../../services/itemdata.service';

@Component({
  selector: 'app-wow-item',
  templateUrl: './wow-item.component.html',
  styleUrls: ['./wow-item.component.scss']
})
export class WowItemComponent implements OnInit, OnChanges {

  @Input() itemID: number = -1;
  @Input() itemSize: string = 'large';

  public item$: Observable<wowItem>;

  constructor(private itemDataService: ItemdataService) {
    this.item$ = this.itemDataService.getItemData$(-1);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.item$ = this.itemDataService.getItemData$(this.itemID);
  }

}
