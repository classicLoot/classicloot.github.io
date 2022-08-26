import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { createStore, select, withProps } from '@ngneat/elf';
import { devTools } from '@ngneat/elf-devtools';
import { filter, map } from 'rxjs';
import { TooltipService } from './tooltip.service';

export type startType = 'dungeons' | 'raids' | 'crafting' | 'pvp' | 'reputation' | 'collections' | 'RIP';

interface GlobalProps {
  route: string,
  id: string,
  fragment: string,

  bMobile: boolean,
  fragments: string[]
}

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {

  private store = createStore(
    { name: 'global' },
    withProps<GlobalProps>({ route: '', id: '', fragment: '', bMobile: false, fragments: [] })
  )
  public state$ = this.store.pipe(select((state) => state));

  public route$ = this.store.pipe(select((state) => state.route));
  public id$ = this.store.pipe(select((state) => state.id));
  public routeAndId$ = this.store.pipe(select((state) => [state.route, state.id]));

  public mobile$ = this.store.pipe(select((state) => state.bMobile));

  public fragments$ = this.store.pipe(select((state) => state.fragments))

  constructor(private router: Router, private tooltipService: TooltipService) {
    devTools();
    this.subscribeRoute();


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
      let url = e.urlAfterRedirects;
      let fragment: string = '';

      if (url.includes('#')) {
        const split = url.split('#');
        url = split[0];
        fragment = split[1];
      }

      let route = this.router.routerState.root;
      //console.log(route)
      while (route.firstChild) {
        route = route.firstChild
      }
      const id = route.snapshot.paramMap.get('id') || '';

      this.store.update((state) => ({
        ...state,
        route: url,
        id: id,
        fragment: fragment
      }))

      this.tooltipService.hideTooltip();
    })
  }

  public getStoreValue() {
    return this.store.value;
  }

  public getFragment() {
    return this.store.value.fragment;
  }

  public updateFragment(newFragment: string) {
    this.store.update((state) => ({
      ...state,
      fragment: newFragment
    }))
  }

  public setFragments(newFragments: string[]) {
    this.store.update((state) => ({
      ...state,
      fragments: newFragments
    }))
  }
}
