import { Component, Input, OnInit } from '@angular/core';
import { menuItemExtended } from '../../interfaces/menuItemExtended';

@Component({
  selector: '[app-sidebar-item]',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() menuItem: menuItemExtended = <menuItemExtended><unknown>null;

  constructor() { }

  ngOnInit(): void {
  }

}
