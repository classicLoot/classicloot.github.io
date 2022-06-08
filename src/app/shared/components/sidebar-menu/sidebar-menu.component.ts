import { Component, Input, OnInit } from '@angular/core';
import { menuItemExtended } from '../../interfaces/menuItemExtended';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @Input() items: menuItemExtended[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
