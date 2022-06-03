import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menuItems$: Observable<NbMenuItem[]>;
  //sidebarCollapsed$: Observable<boolean>;

  constructor(private sidebarService: SidebarService) {
    this.menuItems$ = this.sidebarService.getMenuItems$();    
  }

  ngOnInit(): void {
  } 

}
