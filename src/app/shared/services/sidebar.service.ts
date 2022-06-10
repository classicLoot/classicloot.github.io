import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map, Observable, of, switchMap } from 'rxjs';
import { DungeonsService } from 'src/app/features/dungeons/data/dungeons.service';
import { menuItemExtended } from '../interfaces/menuItemExtended';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuItemSubject = new BehaviorSubject<menuItemExtended[]>([]);

  menuItemSubjectObs = new BehaviorSubject<Observable<menuItemExtended[]>>(of([]));

  constructor(private router: Router, private dungeonsService: DungeonsService) {
    this.subscribeRoute();
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

  private subscribeRoute() {
    const events$ = this.router.events;
    const eventsFiltered$ = events$.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => e as NavigationEnd)
    );

    eventsFiltered$.subscribe(e => {
      // console.log(e)      
      const url = e.urlAfterRedirects;

      console.log(url);
    })
  }

  public getMenuItemsNEW$() {
    const events$ = this.router.events;
    const eventsFiltered$ = events$.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => e as NavigationEnd)
    );

    const menu$ = eventsFiltered$.pipe(
      switchMap(e => {
        const url = e.urlAfterRedirects;
        console.log('test')
        if (url.startsWith('/home')) {
          return of([]);
        }
        if (url.startsWith('/dungeons')) {
          return this.dungeonsService.getDungeonsMenu$('wotlk');
        }
        if (url.startsWith('/raids')) {
          return of([]);
        }
        if (url.startsWith('/crafting')) {
          return of([]);
        }
        if (url.startsWith('/pvp')) {
          return of([]);
        }
        if (url.startsWith('/reputation')) {
          return of([]);
        }

        return of([]);
      })
    )

    return menu$;
  }
}
