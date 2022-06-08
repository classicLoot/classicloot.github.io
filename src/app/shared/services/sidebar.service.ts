import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';
import { menuItemExtended } from '../interfaces/menuItemExtended';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuItemSubject = new BehaviorSubject<menuItemExtended[]>([]);

  constructor(private router: Router) {
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
      //console.log(url);
    })
  }
}
