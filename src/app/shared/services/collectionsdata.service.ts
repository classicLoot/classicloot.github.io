import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, switchMap } from 'rxjs';
import { wowCollection, wowSubCollection } from '../interfaces/collection';
import { wowAddon } from '../types/addon';
import { GlobalStoreService } from './global-store.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionsdataService {

  private collectionsMeta$!: Observable<wowCollection[]>;

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

  public getCurrentCollection$(): Observable<wowCollection> {
    if (!this.currentCollection$) {
      const state$ = this.globalStore.state$;

      const current$ = state$.pipe(
        switchMap(state => {
          return this.http.get<wowCollection>(`../../../assets/data/gen/${state.addon}${state.route}.json`);
        })
      )
      this.currentCollection$ = current$;
    }

    return this.currentCollection$;
  }

  public getCurrentSubCollection$(sub: string): Observable<wowSubCollection> {
    const state = this.globalStore.getStoreValue();

    const current$ = this.http.get<wowSubCollection>(`../../../assets/data/gen/${state.addon}${state.route}/${sub}.json`);

    return current$;
  }
}
