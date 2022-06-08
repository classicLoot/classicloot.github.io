import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Observable } from 'rxjs';
import { menuItemExtended } from 'src/app/shared/interfaces/menuItemExtended';
import { HeaderService } from 'src/app/shared/services/header.service';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menuItems$: Observable<menuItemExtended[]>;
  headerItems$: Observable<NbMenuItem[]>;

  constructor(private sidebarService: SidebarService, private headerService: HeaderService) {
    this.menuItems$ = this.sidebarService.getMenuItems$();
    this.headerItems$ = this.headerService.getHeader$();
  }

  ngOnInit(): void {
  }

}
