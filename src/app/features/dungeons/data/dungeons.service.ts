import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject, empty, map, Observable } from 'rxjs';
import { dungeon } from 'src/app/shared/interfaces/dungeons';
import { menuItemExtended } from 'src/app/shared/interfaces/menuItemExtended';
import { wotlkDungeons } from './wotlk';

const emptyDungeon: dungeon = {
  name: 'EMPTY',
  url: '',
  descr: '',
  levelMin: 0,
  levelMax: 0,
  bosses: []
};

@Injectable({
  providedIn: 'root'
})
export class DungeonsService {

  currentDungeonName = new BehaviorSubject<string>('EMPTY');

  constructor() { }

  public getCurrentDungeonName$() {
    return this.currentDungeonName.asObservable();
  }
  public setCurrentDungeonName(newD: string) {
    if (newD === '') {
      this.currentDungeonName.next('EMPTY');
      return;
    }
    this.currentDungeonName.next(newD);
  }

  public getCurrentDungeon$(): Observable<dungeon> {
    const name$ = this.getCurrentDungeonName$();
    const current$ = name$.pipe(
      map(name => {
        if (name === '' || name === 'EMPTY') {
          return emptyDungeon
        }

        const data = this.getDungeonsData();

        const found = data.find(d => d.url === name);
        if (!found) {
          return emptyDungeon;
        }
        return found;
      })
    )

    return current$;
  }

  public getDungeonsData() {
    const dungeons = wotlkDungeons;
    return dungeons;
  }

  public getDungeonsMenu() {
    const menu: menuItemExtended[] = [];

    const dungeons = wotlkDungeons;
    dungeons.forEach(d => {
      const newMenuItem: menuItemExtended = {
        title: d.name,
        link: `/dungeons/${d.url}`,
        titleTwo: `(${d.levelMin}-${d.levelMax})`
      }
      menu.push(newMenuItem);
    })

    return menu;
  }
}
