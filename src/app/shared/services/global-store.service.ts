import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { createStore, select, withProps } from '@ngneat/elf';
import { devTools } from '@ngneat/elf-devtools';
import { filter, map } from 'rxjs';
import { wowAddon } from '../types/addon';


interface GlobalProps {
  route: string,
  addon: wowAddon
}

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {

  private store = createStore(
    { name: 'global' },
    withProps<GlobalProps>({ route: '', addon: 'wotlk' })
  )

  public route$ = this.store.pipe(select((state) => state.route));
  public addon$ = this.store.pipe(select((state) => state.addon));


  constructor(private router: Router) {
    devTools();
    this.subscribeRoute();
  }

  private subscribeRoute() {
    const events$ = this.router.events;
    const eventsFiltered$ = events$.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => e as NavigationEnd)
    );

    eventsFiltered$.subscribe(e => {
      const url = e.urlAfterRedirects;
      this.store.update((state) => ({
        ...state,
        route: url
      }))
    })
  }
}
