import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { menuItemExtended } from '../../interfaces/menuItemExtended';
import { OptionsStoreService } from '../../services/options-store.service';
import { wowSize } from '../../types/options';

@Component({
  selector: '[app-sidebar-item]',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() menuItem: menuItemExtended = <menuItemExtended><unknown>null;

  size$: Observable<wowSize>;

  constructor(private optionsStore: OptionsStoreService) {
    this.size$ = this.optionsStore.size$;
  }

  ngOnInit(): void {
  }

}
