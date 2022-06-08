import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headerItems$ = new BehaviorSubject<NbMenuItem[]>([]);

  private mainMenu: NbMenuItem[] = [
    {
      title: 'Dungeons',
      link: '/dungeons'
    },
    {
      title: 'Raids',
      link: '/raids'
    },
    {
      title: 'Crafting',
      link: '/crafting'
    },
    {
      title: 'PVP',
      link: '/pvp'
    },
    {
      title: 'Reputation',
      link: '/reputation'
    }
  ];

  constructor() {
    this.headerItems$.next(this.mainMenu);
  }

  public getHeader$() {
    return this.headerItems$.asObservable();
  }
}
