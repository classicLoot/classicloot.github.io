import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';
import { menuItemExtended } from 'src/app/shared/interfaces/menuItemExtended';
import { wowRaid } from 'src/app/shared/interfaces/raids';
import { RaiddataService } from 'src/app/shared/services/raiddata.service';
import { wotlkRaidsMenu } from './wotlk';

const emptyRaid: wowRaid = {
  name: 'EMPTY',
  url: '',
  descr: '',
  size: 10,
  type: 'A',
  bosses: []
}

@Injectable({
  providedIn: 'root'
})
export class RaidsService {

  currentRaidName = new BehaviorSubject<string>('EMPTY');

  constructor(private raidDataService: RaiddataService) { }

  public getCurrentRaidName$() {
    return this.currentRaidName.asObservable();
  }

  public setCurrentRaidName(newR: string) {
    if (newR === '') {
      this.currentRaidName.next('EMPTY');
      return;
    }

    this.currentRaidName.next(newR);
  }

  public getCurrentRaid$(): Observable<wowRaid> {
    const name$ = this.getCurrentRaidName$();
    const current$ = name$.pipe(
      switchMap(name => {
        if (name === '' || name === 'EMPTY') {
          return of(emptyRaid);
        }

        const raid$ = this.raidDataService.getRaidData$(name);

        return raid$;
      })
    )

    return current$;
  }

  public getRaidsMenu() {
    const menu: menuItemExtended[] = wotlkRaidsMenu;

    return menu;
  }
}
