import { Component, Input, OnInit } from '@angular/core';
import { menuItemExtended } from '../../interfaces/menuItemExtended';

@Component({
  selector: 'app-sidebar-fragment',
  templateUrl: './sidebar-fragment.component.html',
  styleUrls: ['./sidebar-fragment.component.scss']
})
export class SidebarFragmentComponent implements OnInit {

  @Input() items: menuItemExtended[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
