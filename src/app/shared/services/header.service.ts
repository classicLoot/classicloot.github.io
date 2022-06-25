import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { menuItemExtended } from '../interfaces/menuItemExtended';

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

  constructor() {
    this.headerItems$.next(this.mainMenu);
  }

  public getHeader$() {
    return this.headerItems$.asObservable();
  }
}
