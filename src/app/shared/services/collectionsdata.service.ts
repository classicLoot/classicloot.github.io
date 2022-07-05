import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, switchMap } from 'rxjs';
import { wowCollection, wowSubCollection } from '../interfaces/collection';
import { wowAddon } from '../types/addon';
import { GlobalStoreService } from './global-store.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionsdataService {

  private collectionsMeta$!: Observable<wowCollection[]>;
  private reputationMeta$!: Observable<wowCollection[]>;
  private craftingMeta$!: Observable<wowCollection[]>;


  private currentCollection$!: Observable<wowCollection>;

  constructor(private http: HttpClient, private globalStore: GlobalStoreService) { }

  public getCollectionsMeta$(addon: wowAddon) {
    if (!this.collectionsMeta$) {
      this.collectionsMeta$ = this.http.get<wowCollection[]>(`../../../assets/data/gen/${addon}/collections/meta.json`).pipe(
        shareReplay(1)
      )
    }

    return this.collectionsMeta$;
  }

  public getReputationMeta$(addon: wowAddon) {
    if (!this.reputationMeta$) {
      this.reputationMeta$ = this.http.get<wowCollection[]>(`../../../assets/data/gen/${addon}/reputation/meta.json`).pipe(
        shareReplay(1)
      )
    }

    return this.reputationMeta$;
  }

  public getCraftingMeta$(addon: wowAddon) {
    if (!this.craftingMeta$) {
      this.craftingMeta$ = this.http.get<wowCollection[]>(`../../../assets/data/gen/${addon}/crafting/meta.json`).pipe(
        shareReplay(1)
      )
    }

    return this.craftingMeta$;
  }

  public getCurrentCollection$(): Observable<wowCollection> {
    if (!this.currentCollection$) {
      const state$ = this.globalStore.state$;

      const current$ = state$.pipe(
        switchMap(state => {
          if (state.route === '/collections' || state.route === '/crafting' || state.route === '/reputations') {
            const emptyColl: wowCollection = { name: 'ERROR' };
            return of(emptyColl)
          }

          const route = state.route.split('#')[0];
          return this.http.get<wowCollection>(`../../../assets/data/gen/${state.addon}${route}.json`);
        })
      )
      this.currentCollection$ = current$;
    }

    return this.currentCollection$;
  }

  public getCurrentSubCollection$(sub: string): Observable<wowSubCollection> {
    const state = this.globalStore.getStoreValue();
    const route = state.route.split('#')[0];

    const current$ = this.http.get<wowSubCollection>(`../../../assets/data/gen/${state.addon}${route}/${sub}.json`);

    return current$;
  }
}
