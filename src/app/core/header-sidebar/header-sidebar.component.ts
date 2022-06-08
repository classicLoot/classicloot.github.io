import { Component, Input, OnInit } from '@angular/core';
import { menuItemExtended } from 'src/app/shared/interfaces/menuItemExtended';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.scss']
})
export class HeaderSidebarComponent implements OnInit {

  @Input() menuItems: menuItemExtended[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
