import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { menuItemExtended } from '../interfaces/menuItemExtended';
import { wowMetaData } from '../interfaces/meta';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headerItems$ = new BehaviorSubject<menuItemExtended[]>([]);

  private mainMenu: menuItemExtended[] = [
    {
      title: 'Dungeons',
      link: '/dungeons',
      titleTwo: ''
    },
    {
      title: 'Raids',
      link: '/raids',
      titleTwo: ''
    },
    {
      title: 'Crafting',
      link: '/crafting',
      titleTwo: ''
    },
    {
      title: 'PVP',
      link: '/pvp',
      titleTwo: ''
    },
    {
      title: 'Reputations',
      link: '/reputation',
      titleTwo: ''
    },
    {
      title: 'Collections',
      link: '/collections',
      titleTwo: ''
    }
  ];

  constructor(private http: HttpClient) {
    this.headerItems$.next(this.mainMenu);
  }

  public getHeader$() {
    return this.headerItems$.asObservable();
  }

  public getMenu$() {
    const menu$ = this.http.get<wowMetaData>('../../../wowdata/output/meta.json')
    return menu$;
  }
}
