import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { map, Observable } from 'rxjs';
import { menuItemExtended } from 'src/app/shared/interfaces/menuItemExtended';
import { wowMetaData, wowMetaDataCat } from 'src/app/shared/interfaces/meta';
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
        const newMeta: wowMetaData = {
          links: meta.links.map(l => this.sortMetaDataCat(l))
        }

        return newMeta.links.map(cat => {
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

  sortMetaDataCat(meta: wowMetaDataCat): wowMetaDataCat {

    switch (meta.name) {
      case 'Dungeons': {
        return {
          name: meta.name,
          links: meta.links
            .sort((a, b) => a.meta?.levelMin! - b.meta?.levelMin!)
            .sort((a, b) => a.meta?.phase! - b.meta?.phase!)
        }
      }

      case 'Raids': {
        return {
          name: meta.name,
          links: meta.links
            .sort((a, b) => a.meta?.phase! - b.meta?.phase!)
        }
      }

      default: {
        return meta;
      }
    }
  }

  ngOnInit(): void {
  }

}
