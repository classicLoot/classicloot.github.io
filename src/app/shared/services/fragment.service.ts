import { Injectable } from '@angular/core';
import { catchError, combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { menuItemExtended } from '../interfaces/menuItemExtended';
import { CollectionsdataService } from './collectionsdata.service';
import { GlobalStoreService } from './global-store.service';
import { InstancedataService } from './instancedata.service';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {

  fragmentItems$: Observable<menuItemExtended[]>;

  constructor(private globalStore: GlobalStoreService,
    private instanceDataService: InstancedataService, private collectionsDataService: CollectionsdataService) {
    this.fragmentItems$ = this.setupFragmentItems$();
  }

  private setupFragmentItems$(): Observable<menuItemExtended[]> {
    const route$ = this.globalStore.route$;
    const addon$ = this.globalStore.addon$;

    const fragment$ = combineLatest([route$, addon$]).pipe(
      switchMap(([route, addon]) => {

        if (route.startsWith('/collections')) {
          return this.collectionsFragment$();
        }

        return of([]);
      })
    );

    return fragment$;
  }

  private collectionsFragment$(): Observable<menuItemExtended[]> {
    const current$ = this.collectionsDataService.getCurrentCollection$();
    const fragmentMenu$ = current$.pipe(
      map(current => {
        const arr: menuItemExtended[] = []

        current.subLinks?.forEach(sub => {
          const newItem: menuItemExtended = {
            title: sub.name,
            link: sub.link
          }
          arr.push(newItem);
        })

        return arr;
      }),
      catchError(err => {
        if (err.error.statusCode === 404) {
          return of([]);
        }
        else {
          console.log('?!')
          return of([]);
        }
      })
    )

    return fragmentMenu$;
  }
}
