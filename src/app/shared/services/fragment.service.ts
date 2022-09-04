import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { wowCollection } from '../interfaces/collection';
import { menuItemExtended } from '../interfaces/menuItemExtended';
import { sanitizeName } from '../pipes/sanitize-name.pipe';
import { GlobalStoreService } from './global-store.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {

  fragmentItems$: Observable<menuItemExtended[]>;

  public fragmentEventSubject = new BehaviorSubject<string>('');

  constructor(private globalStore: GlobalStoreService, private viewportScroller: ViewportScroller, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {
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

  public scrollTo(fragment: string) {
    //console.log('scrollTo', fragment)
    this.viewportScroller.scrollToAnchor(fragment);
    const url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, fragment: fragment }).toString();

    this.location.go(url);
    this.globalStore.updateFragment(fragment);
  }

  public onFilterEvent(fragment: string) {
    //console.log('onFilterEvent', fragment);
    this.fragmentEventSubject.next(fragment);
  }
}
