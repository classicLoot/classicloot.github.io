import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { createStore, select, withProps } from '@ngneat/elf';
import { devTools } from '@ngneat/elf-devtools';
import { filter, map, Observable } from 'rxjs';
import { wowAddon } from '../types/addon';
import { TooltipService } from './tooltip.service';

export type startType = 'dungeons' | 'raids' | 'crafting' | 'pvp' | 'reputation' | 'collections' | 'RIP';

interface GlobalProps {
  route: string,
  id: string,
  addon: wowAddon,
  bMobile: boolean
}

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {

  private store = createStore(
    { name: 'global' },
    withProps<GlobalProps>({ route: '', id: '', addon: 'wotlk', bMobile: false })
  )
  public state$ = this.store.pipe(select((state) => state));

  public route$ = this.store.pipe(select((state) => state.route));
  public id$ = this.store.pipe(select((state) => state.id));
  public routeAndId$ = this.store.pipe(select((state) => [state.route, state.id]));

  public addon$ = this.store.pipe(select((state) => state.addon));

  public startType$: Observable<startType>;

  public mobile$ = this.store.pipe(select((state) => state.bMobile));

  constructor(private router: Router, private tooltipService: TooltipService) {
    devTools();
    this.subscribeRoute();

    this.startType$ = this.route$.pipe(
      map(r => {
        if (r.startsWith('/dungeon')) {
          return 'dungeons';
        }
        if (r.startsWith('/raids')) {
          return 'raids';
        }
        if (r.startsWith('/crafting')) {
          return 'crafting';
        }
        if (r.startsWith('/pvp')) {
          return 'pvp';
        }
        if (r.startsWith('/collections')) {
          return 'collections';
        }
        if (r.startsWith('/reputation')) {
          return 'reputation';
        }

        return 'RIP';
      })
    )

    if (window.matchMedia("(any-hover: none)").matches) {
      this.store.update((state) => ({ ...state, bMobile: true }))
    }
    else {
      this.store.update((state) => ({ ...state, bMobile: false }))
    }
  }

  private subscribeRoute() {
    const events$ = this.router.events;
    const eventsFiltered$ = events$.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => e as NavigationEnd)
    );


    eventsFiltered$.subscribe(e => {
      const url = e.urlAfterRedirects;

      let route = this.router.routerState.root;
      //console.log(route)
      while (route.firstChild) {
        route = route.firstChild
      }
      const id = route.snapshot.paramMap.get('id') || '';

      this.store.update((state) => ({
        ...state,
        route: url,
        id: id
      }))

      this.tooltipService.hideTooltip();
    })
  }

  public getStoreValue() {
    return this.store.value;
  }
}
