import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { wowCollection } from '../interfaces/collection';
import { menuItemExtended } from '../interfaces/menuItemExtended';
import { sanitizeName } from '../pipes/sanitize-name.pipe';
import { GlobalStoreService } from './global-store.service';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {

  fragmentItems$: Observable<menuItemExtended[]>;

  constructor(private globalStore: GlobalStoreService
  ) {
    this.fragmentItems$ = this.newFragments$();
  }

  public setFragments(collection: wowCollection) {
    //const fragments = collection.subCollections?.map(sub => sanitizeName(sub.name))
    const fragments = collection.subCollections?.map(sub => sub.name)

    this.globalStore.setFragments(fragments || []);
    //console.log(fragments)
  }

  private newFragments$(): Observable<menuItemExtended[]> {
    const fragments$ = this.globalStore.fragments$;

    const fragmentMenu$ = fragments$.pipe(
      map(fragments => {
        const arr: menuItemExtended[] = [];

        fragments.forEach(f => {
          const newItem: menuItemExtended = {
            title: f,
            link: f,
            fragment: sanitizeName(f)
          }

          arr.push(newItem)
        })

        return arr;
      })
    )

    return fragmentMenu$;
  }
}
