import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { createStore, select, withProps } from '@ngneat/elf';
import { devTools } from '@ngneat/elf-devtools';
import { filter, map, Observable } from 'rxjs';
import { wowAddon } from '../types/addon';
import { TooltipService } from './tooltip.service';


interface GlobalProps {
  route: string,
  id: string,
  addon: wowAddon
}

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {

  private store = createStore(
    { name: 'global' },
    withProps<GlobalProps>({ route: '', id: '', addon: 'wotlk' })
  )
  public state$ = this.store.pipe(select((state) => state));

  public route$ = this.store.pipe(select((state) => state.route));
  public id$ = this.store.pipe(select((state) => state.id));
  public routeAndId$ = this.store.pipe(select((state) => [state.route, state.id]));

  public addon$ = this.store.pipe(select((state) => state.addon));

  public startType$: Observable<'dungeons' | 'raids' | 'RIP'>;

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

        return 'RIP';
      })
    )
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
