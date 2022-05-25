import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuItemSubject = new BehaviorSubject<NbMenuItem[]>([]);

  constructor() {
    const testMenu: NbMenuItem[] = [
      {
        title: 'Docs',
        link: '/docs',
      },
      {
        title: 'Components',
        link: '/docs/components/components-overview',
      },
      {
        title: 'Design System',
        link: '/docs/design-system/eva-design-system-intro',
      },
      {
        title: 'Auth',
        link: '/docs/auth/introduction',
      },
      {
        title: 'Security',
        link: '/docs/security/introduction',
      },
    ];
    this.setMenuItems(testMenu);
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
}
