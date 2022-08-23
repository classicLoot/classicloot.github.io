import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { map, Observable } from 'rxjs';
import { menuItemExtended } from 'src/app/shared/interfaces/menuItemExtended';
import { FragmentService } from 'src/app/shared/services/fragment.service';
import { HeaderService } from 'src/app/shared/services/header.service';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  headerItems$: Observable<menuItemExtended[]>;
  menuItems$: Observable<menuItemExtended[]>;
  fragmentItems$: Observable<menuItemExtended[]>;

  newMenu$: Observable<NbMenuItem[]>;


  constructor(private sidebarService: SidebarService, private headerService: HeaderService, private fragmentService: FragmentService) {
    this.headerItems$ = this.headerService.getHeader$();

    this.menuItems$ = this.sidebarService.menuItems$;
    this.fragmentItems$ = this.fragmentService.fragmentItems$;

    this.newMenu$ = this.headerService.getMenu$().pipe(
      map(meta => {
        return meta.links.map(cat => {
          return {
            title: cat.name,
            children: cat.links.map(sub => {
              return {
                title: sub.name,
                link: `${cat.name}/${sub.link}`
              }
            })
          }
        })
      })
    )
  }

  ngOnInit(): void {
  }

}
