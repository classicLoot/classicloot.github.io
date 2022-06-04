import { Injectable } from '@angular/core';
import { Navigation, NavigationEnd, Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuItemSubject = new BehaviorSubject<NbMenuItem[]>([]);

  constructor(private router: Router) {
    this.subscribeRoute();
  }

  public getMenuItems$() {
    return this.menuItemSubject.asObservable();
  }

  public getMenuItems() {
    return this.menuItemSubject.getValue();
  }

  public setMenuItems(newItems: NbMenuItem[]) {
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
