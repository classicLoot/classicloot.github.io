import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { menuItemExtended } from '../interfaces/menuItemExtended';
import { wowAddon } from '../types/addon';
import { CollectionsdataService } from './collectionsdata.service';
import { GlobalStoreService } from './global-store.service';
import { InstancedataService } from './instancedata.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuItemSubject = new BehaviorSubject<menuItemExtended[]>([]);

  menuItems$: Observable<menuItemExtended[]>;

  constructor(private globalStore: GlobalStoreService, private instanceDataService: InstancedataService, private collectionsDataService: CollectionsdataService) {
    this.menuItems$ = this.setupMenuItems$();
  }

  public getMenuItems$() {
    return this.menuItemSubject.asObservable();
  }

  public getMenuItems() {
    return this.menuItemSubject.getValue();
  }

  public setMenuItems(newItems: menuItemExtended[]) {
    this.menuItemSubject.next(newItems);
  }

  private setupMenuItems$(): Observable<menuItemExtended[]> {
    const route$ = this.globalStore.route$;
    const addon$ = this.globalStore.addon$;
    const menu$ = combineLatest([route$, addon$]).pipe(
      switchMap(([route, addon]) => {
        if (route.startsWith('/dungeon')) {
          return this.dungeonsMenu$(addon);
        }
        if (route.startsWith('/raids')) {
          return this.raidsMenu$(addon);
        }
        if (route.startsWith('/collections')) {
          return this.collectionsMenu$(addon);
        }
        if (route.startsWith('/reputation')) {
          return this.reputationMenu$(addon);
        }

        return of([]);
      })
    )


    return menu$;
  }

  private dungeonsMenu$(addon: wowAddon): Observable<menuItemExtended[]> {
    const meta$ = this.instanceDataService.getDungeonsMeta$(addon);
    const dungMenu$ = meta$.pipe(
      map(meta => {
        const arr: menuItemExtended[] = [];
        meta.forEach(d => {
          const newItem: menuItemExtended = {
            title: d.name,
            link: `/dungeons/${d.link}`,
            titleTwo: `(${d.levelMin}-${d.levelMax})`
          }
          arr.push(newItem);
        })
        return arr;
      })
    )

    return dungMenu$;
  }

  private raidsMenu$(addon: wowAddon): Observable<menuItemExtended[]> {
    const meta$ = this.instanceDataService.getRaidsMeta$(addon);
    const raidMenu$ = meta$.pipe(
      map(meta => {
        const arr: menuItemExtended[] = [];

        ['Naxx', 'TheEyeOfEternity', 'ObsidianSanctum', 'Ulduar', 'TrialOfTheCrusader', 'Onyxia', 'IcecrownCitadel', 'TheRubySanctum', 'VaultOfArchavon'].forEach(start => {
          const filter = meta.filter(r => r.link.startsWith(start))

          if (filter.length === 2) {
            /*
            arr.push({
              title: filter[0].name,
              children: filter.map(r => {
                return {
                  title: r.size === 10 ? '10-man' : '25-man',
                  link: `/raids/${r.link}`
                }
              })
            })
            */

            arr.push({
              title: filter[0].name,
              link: `/raids/${filter[0].link}`,
              linkTwo: `/raids/${filter[1].link}`
            })
          }
        })

        return arr;
      })
    )

    return raidMenu$;
  }

  private collectionsMenu$(addon: wowAddon): Observable<menuItemExtended[]> {
    const meta$ = this.collectionsDataService.getCollectionsMeta$(addon);
    const collMenu$ = meta$.pipe(
      map(meta => {
        const arr: menuItemExtended[] = [];

        meta.forEach(d => {
          const newItem: menuItemExtended = {
            title: d.name,
            link: `/collections/${d.link}`
          }
          arr.push(newItem);
        })
        return arr;
      })
    );

    return collMenu$;
  }

  private reputationMenu$(addon: wowAddon): Observable<menuItemExtended[]> {
    const meta$ = this.collectionsDataService.getReputationMeta$(addon);
    const repuMenu$ = meta$.pipe(
      map(meta => {
        const arr: menuItemExtended[] = [];

        meta.forEach(d => {
          const newItem: menuItemExtended = {
            title: d.name,
            link: `/reputation/${d.link}`
          }
          arr.push(newItem);
        })
        return arr;
      })
    );

    return repuMenu$;
  }

}
