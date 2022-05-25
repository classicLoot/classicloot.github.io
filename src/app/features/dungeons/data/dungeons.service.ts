import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { wotlkDungeons } from './wotlk';

@Injectable({
  providedIn: 'root'
})
export class DungeonsService {

  constructor() { }

  public getDungeonsData() {
    const dungeons = wotlkDungeons;
    return dungeons;
  }

  public getDungeonsMenu() {
    const menu: NbMenuItem[] = [];

    const dungeons = wotlkDungeons;
    dungeons.forEach(d => {
      const newMenuItem: NbMenuItem = {
        title: d.name,
        link: `/dungeons/${d.url}`
      }
      menu.push(newMenuItem);
    })

    return menu;
  }
}
