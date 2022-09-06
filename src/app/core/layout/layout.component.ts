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
  fragmentItems$: Observable<menuItemExtended[]>;

  newMenu$: Observable<NbMenuItem[]>;


  constructor(private headerService: HeaderService, private fragmentService: FragmentService) {
    this.headerItems$ = this.headerService.getHeader$();


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
              let newItem: NbMenuItem = {
                title: sub.name,
                link: `/${cat.name}/${sub.link}`,
                pathMatch: 'full'

              }
              return newItem;
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

      case 'Collections': {
        let tier = meta.links.filter(x => x.name.startsWith('Tier'));
        let rest = meta.links.filter(x => !tier.includes(x));

        let emblems = meta.links.find(x => x.name === 'Emblems')!;
        let tier7 = meta.links.find(x => x.name === 'Tier 7')!;
        let tier8 = meta.links.find(x => x.name === 'Tier 8')!;
        let tier9 = meta.links.find(x => x.name === 'Tier 9')!;
        let tier10 = meta.links.find(x => x.name === 'Tier 10')!;

        let start = [emblems, tier7, tier8, tier9, tier10]


        return {
          name: meta.name,
          links: [...start, ...meta.links.filter(x => !start.includes(x))]
        }
      }

      case 'PVP': {
        let wintergrasp = meta.links.find(x => x.name === 'Wintergrasp')!;
        let venture = meta.links.find(x => x.name === 'Venture Bay')!;

        let start = [venture, wintergrasp]

        return {
          name: meta.name,
          links: [...start, ...meta.links.filter(x => !start.includes(x))]
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
