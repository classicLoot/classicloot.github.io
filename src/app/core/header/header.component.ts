import { Component, Input, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { menuItemExtended } from 'src/app/shared/interfaces/menuItemExtended';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menuItems: menuItemExtended[] = [];

  constructor(private nbSidebarService: NbSidebarService) {
  }

  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.nbSidebarService.toggle(false, 'leftSidebar');
  }

  public toggleFragmentbar() {
    this.nbSidebarService.toggle(false, 'rightSidebar');
  }
}
